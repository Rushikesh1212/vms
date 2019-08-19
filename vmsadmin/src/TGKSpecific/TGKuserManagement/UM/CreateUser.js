
import React, { Component }      from 'react';
import InputMask                 from 'react-input-mask';
import $ from "jquery";
import axios from 'axios';
import swal                      from 'sweetalert';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/js/modal.js';
import './userManagement.css';

const formValid = formerrors=>{
  // console.log("formerrors",formerrors);
  let valid = true;
  Object.values(formerrors).forEach(val=>{
  val.length>0 && (valid = false);
  })
  return valid;
  }

const nameRegex     = RegExp(/^[A-za-z']+( [A-Za-z']+)*$/);
const mobileRegex   = RegExp(/^[0-9][0-9]{9}$/);
const emailRegex    = RegExp (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
class CreateUser extends Component {


  constructor(props) {
    super(props);
    this.state = {
      show              : true,
      office            : null,
      allPosts          : null,
      firstname         : "",
      role              : "--select--",
      lastname          :"",
      signupEmail       : "",
      mobNumber         : "",
      
      formerrors :{
         firstname    : "",
         lastname     :"",
         signupEmail  : "",
         mobNumber    : "",
         role         : "",
      },

    };
    this.handleChange = this.handleChange.bind(this);
  }

 handleChange(event){
    const datatype = event.target.getAttribute('data-text');
    const {name,value} = event.target;
    let formerrors = this.state.formerrors;
    
    // console.log("value",value);
    switch (datatype){
      case 'firstname' : 
        formerrors.firstname = nameRegex.test(value)  && value.length>0 ? '' : "Please Enter Valid Name";
        break;

      case 'lastname' : 
       formerrors.lastname = nameRegex.test(value)  && value.length>0 ? '' : "Please Enter Valid Name";
       break;

      case 'mobNumber' : 
       formerrors.mobNumber = mobileRegex.test(value) && value.length>0 ? '' : "Please enter a valid Contact Number";
       break;

      case 'signupEmail' : 
       formerrors.signupEmail = emailRegex.test(value)  && value.length>0? "":"Please enter a valid Email ID";
       break;

      case 'role' : 
        formerrors.role =  value!= "--select--" ? "":"Please select role";
        break;
      
      default :
      break;

    }
    
    this.setState({ formerrors,
      [name]:value
    } );
  }


    componentDidMount() {

      axios
      .get('/api/tgkSpecificcompanysettings/list')
      .then(
        (res)=>{
          // console.log('res', res);
          const postsdata = res.data;
          // console.log('postsdata',postsdata);
          this.setState({
            allPosts : postsdata,
          });
          // console.log("allPosts___________________",this.state.allPosts);
          let locationArray =[];
          if(this.state.allPosts!=null){
            locationArray = this.state.allPosts.map(function(item) { return item.companyLocationsInfo });
          }else{
             locationArray = "no data";
          }
          this.setState({
            office : locationArray,
          });
          
        // here for list
                  var data = {
                                    "startRange"        : this.state.startRange,
                                    "limitRange"        : this.state.limitRange, 
                            }
                      axios.post('/api/users/post/userslist', data)
                      .then( (res)=>{      
                        // console.log("herer",res);
                        var tableData = res.data.map((a, i)=>{
                          return {
                                    _id             : a._id,
                                    fullName        : a.fullName,
                                    emailId         : a.emailId,
                                    mobNumber       : a.mobNumber, 
                                    status          : a.status, 
                                    roles           : a.roles,
                          }
                        })
                        this.setState({
                              completeDataCount : res.data.length,
                              tableData     : tableData,          
                            },()=>{
                              console.log('tableData', this.state.tableData);
                            })
                      })
                      .catch((error)=>{
                        console.log("error = ",error);
                        // alert("Something went wrong! Please check Get URL.");
                      });


        }
      )
      .catch((error)=>{

        console.log("error = ",error);
        // alert("Something went wrong! Please check Get URL.");
         });  
    }  

    createUser(event){
      event.preventDefault();
      const formValues = {
          "firstName"       : this.state.firstname,
          "lastName"        : this.state.lastname,
          "emailId"         : this.state.signupEmail,
          "countryCode"     : "+91",
          "mobileNumber"    : this.state.mobNumber,
          "pwd"             : "user123",
          
          "status"          : "Active",
          "roles"           :  this.state.role,
          "officeLocation"  : this.refs.office.value,
        }

        if(this.state.firstname!="" && this.state.lastname !="" && this.state.signupEmail && this.state.mobNumber && this.state.role != "--select--"){
           axios.post('/api/users/post', formValues)
                .then( (res)=>{
                    swal("User added successfully", "", "success");
                    this.refs.firstname.value = '';
                    this.refs.lastname.value  = '';
                    this.refs.signupEmail.value  = '';
                    this.refs.mobNumber.value = '';
                    this.setState({show: false})

                    var data = {
                      "startRange"        : this.state.startRange,
                      "limitRange"        : this.state.limitRange, 
                    }
                                  
                    this.props.getData(0, 10);
                    var modal = document.getElementById("CreateUserModal");
                    modal.style.display = "none";
                    $('.modal-backdrop').remove();
                    // this.props.history.push("/umlistofusers");       
                    window.location.reload();
                })
              .catch((error)=>{
                console.log("error = ",error);
                this.setState({show: false})
              });
        }else{
          swal("Please enter mandatory fields", "", "warning");
          console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }


    }

    render() {
      const {formerrors} = this.state;
      return (
            <div>
                        <div className="modal fade" id="CreateUserModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div className="modal-dialog modal-lg " role="document">
                            <div className="modal-content modalContent ummodallftmg ummodalmfdrt col-lg-12 ">
                              <div className="modal-header userHeader">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                                <h4 className="modal-title" id="exampleModalLabel">Add New User</h4>
                              </div>
                             <div className="modal-body">
                              <div className="hideModal">
                               {/* <section className="viewContent">*/}
                                    <div className="">
                                      <div className="">
                                          <div className="">                                        
                                            <section className="">                                          
                                                    <div className="box-body">
                                                        <div className="">

                                                          <form id="signUpUser">
                                                    <div className="signuppp col-lg-12 col-md-12 col-sm-12 col-xs-12 createusr ">

                                                     <div className=" col-lg-6 col-md-6 col-xs-6 col-sm-6 inputContent">
                                                          <label className="formLable col-lg-12 col-md-12">First Name <label className="requiredsign">*</label></label>
                                                          <span className="blocking-span">
                                                           <div className="input-group inputBox-main  new_inputbx " >
                                                             <div className="input-group-addon remove_brdr inputIcon">
                                                             <i className="fa fa-user-circle fa "></i>
                                                            </div>  
                                                              <input type="text" style={{textTransform:'capitalize'}}
                                                               className="form-control UMname inputText form-control  has-content"
                                                                id="firstname" ref="firstname" name="firstname" data-text="firstname" placeholder="First Name"  onChange={this.handleChange} 
                                                                value={this.state.firstname}/>
                                                                 
                                                           </div>   
                                                          </span>
                                                          {this.state.formerrors.firstname &&(
                                                                  <span className="text-danger">{this.state.formerrors.firstname}</span> 
                                                                )}
                                                      </div>
                                                        


                                                      <div className=" col-lg-6 col-md-6 col-xs-6 col-sm-6 inputContent">
                                                          <label className="formLable col-lg-12 col-md-12">Last Name <label className="requiredsign">*</label></label>
                                                          <span className="blocking-span ">
                                                          <div className="input-group inputBox-main  new_inputbx " >
                                                             <div className="input-group-addon remove_brdr inputIcon">
                                                              <i className="fa fa-user-circle fa "></i>
                                                            </div>  
                                                             <input type="text"className="form-control UMname inputText form-control  has-content" 
                                                             id="lastname" ref="lastname" name="lastname" data-text="lastname" onChange={this.handleChange} 
                                                             value={this.state.lastname} placeholder="Last Name" />
                                                             

                                                          </div>   
                                                          </span>
                                                          {this.state.formerrors.lastname &&(
                                                                  <span className="text-danger">{this.state.formerrors.lastname}</span> 
                                                                )}

                                                      </div>
                                                      
                                                    </div>
                                                    <div className="signuppp col-lg-12 col-md-12 col-sm-12 col-xs-12 createusr">
                                                     <div className=" col-lg-6 col-md-6 col-xs-12 col-sm-12 inputContent">
                                                       <label className="formLable col-lg-12 col-md-12">Email ID <label className="requiredsign">*</label></label>
                                                          <span className="blocking-span col-lg-12 col-md-12 col-xs-12 col-sm-12 emailfixdomain">
                                                          <div className="input-group inputBox-main   " >
                                                           <div className="input-group-addon remove_brdr inputIcon">
                                                            <i className="fa fa-envelope-square"></i>
                                                          </div> 

                                                            <input type="text" className="formFloatingLabels form-control  newinputbox" 
                                                            ref="signupEmail" name="signupEmail" id="signupEmail" data-text="signupEmail" onChange={this.handleChange}  value={this.state.signupEmail}
                                                             placeholder="Email"/>
                                                              
                                                         </div>   
                                                          </span>
                                                           {this.state.formerrors.signupEmail &&(
                                                                  <span className="text-danger">{this.state.formerrors.signupEmail}</span> 
                                                                )}

                                                      </div>
                                                     
                                                      <div className=" col-lg-6 col-md-6 col-xs-12 col-sm-6 inputContent">
                                                          <label className="formLable col-lg-12 col-md-12">Mobile Number <label className="requiredsign">*</label></label>
                                                          <span className="blocking-span ">
                                                           <div className="input-group inputBox-main  new_inputbx " >
                                                             <div className="input-group-addon remove_brdr inputIcon">
                                                              <i className="fa fa-mobile"></i>
                                                             </div>  
                                                             <InputMask mask="9999999999" pattern="^(0|[1-9][0-9-]*)$" 
                                                               className= "form-control UMname inputText form-control  has-content"
                                                                ref="mobNumber" name="mobNumber" id="mobNumber" data-text="mobNumber" placeholder="Mobile No"
                                                                 onChange={this.handleChange} value={this.state.mobNumber}/>
                                                                  
                                                           </div>   
                                                          </span>
                                                          {this.state.formerrors.mobNumber &&(
                                                                  <span className="text-danger">{ this.state.formerrors.mobNumber}</span> 
                                                                )}

                                                      </div>
                                                      
                                                    </div>


                                                     <div className="signuppp col-lg-12 col-md-12 col-sm-12 col-xs-12 createusr">
                                                         <div className=" col-lg-6 col-md-6 col-xs-12 col-sm-12 inputContent">
                                                           <label className="formLable col-lg-12 col-md-12">Role <label className="requiredsign">*</label></label>
                                                              <span className="blocking-span col-lg-12 col-md-12 col-xs-12 col-sm-12 emailfixdomain">
                                                             
                                                               <select className="form-control" value={this.state.role} onChange={this.handleChange} ref ="role" id="role" name="role" data-text="role">
                                                                    <option  hidden> --Select-- </option>
                                                                    <option value="Technical Admin" > Technical Admin </option>
                                                                    <option value="Executive Admin" > Executive Admin </option>
                                                                    <option value="Sales Manager" > Sales Manager </option>
                                                                    <option value="Sales Agent" > Sales Agent </option>
                                                                    <option value="Field Manager" > Field Manager </option>
                                                                    <option value=" Field Agent" >  Field Agent </option>
                                                                    </select>

                                                              </span>
                                                               {this.state.formerrors.role &&(
                                                                  <span className="text-danger">{ this.state.formerrors.role}</span> 
                                                                )}
                                                          </div>

                                                          <div className=" col-lg-6 col-md-6 col-xs-12 col-sm-12 inputContent" >
                                                              <label className="formLable col-lg-12 col-md-12 mrgtop6">Office Location <label className="requiredsign"></label></label>
                                                                  <span className="blocking-span col-lg-12 col-md-12 col-xs-12 col-sm-12 emailfixdomain">
                                                                    <select className="form-control" value={this.state.officeid} ref ="office" id="office" name="office" data-text="office">
                                                                        <option hidden> --Select-- </option>
                                                                        <option value="Head Office">  Head Office </option>
                                                                        <option value="Sales Agent Office"> Sales Agent Office </option>
                                                                           { this.state.office != null ?
                                                                          this.state.office[0].map( (locData, index)=>{
                                                                          // console.log('locData',locData);
                                                                           return( 

                                                                                 <option key={index} value={locData.officeLocationid ? locData.officeLocationid : null } > {locData.officeLocationid ? locData.officeLocationid : null}  </option>


                                                                                   )}
                                                                           )
                                                                          :
                                                                          null

                                                                        }
                                                                    </select>

                                                                  </span>
                                                           </div>
                                                     </div>


                                                    <div className=" col-lg-12 col-md-12 col-xs-12 col-sm-12 ">
                                                      <button className="col-lg-2 col-md-2 col-xs-12 col-sm-12 col-xs-12 pull-right btn btnSubmit topMargin outlinebox" type="submit" onClick={this.createUser.bind(this)} id="CreateUserModal" >Register</button>
                                                     </div>    
                                                </form>




                                                          {/*<form id="signUpUser" onSubmit={this.createUser.bind(this)}>
                                                              <div className="signuppp col-lg-12 col-md-12 col-sm-12 col-xs-12">

                                                               <div className=" col-lg-6 col-md-6 col-xs-6 col-sm-6 inputContent">
                                                                    <label className="">First Name <label className="requiredsign">*</label></label>
                                                                    <span className="blocking-span">
                                                                        <input type="text" style={{textTransform:'capitalize'}} className="form-control UMname inputText tmsUserAccForm has-content" id="firstname" ref="firstname" name="firstname"/>
                                                                    </span>
                                                                </div>

                                                               <div className=" col-lg-6 col-md-6 col-xs-6 col-sm-6 inputContent">
                                                                    <label className="">Last Name <label className="requiredsign">*</label></label>
                                                                    <span className="blocking-span row">
                                                                       <input type="text"className="form-control UMname inputText tmsUserAccForm has-content" id="lastname" ref="lastname" name="lastname" />
                                                                    </span>
                                                                </div>

                                                                <div className=" col-lg-6 col-md-6 col-xs-12 col-sm-12 inputContent">
                                                                    <label className="">Email ID <label className="requiredsign">*</label></label>
                                                                    <span className="blocking-span col-lg-12 col-md-12 col-xs-12 col-sm-12 emailfixdomain">
                                                                      <input type="text" className="formFloatingLabels form-control" ref="signupEmail" name="signupEmail" id="signupEmail"/>
                                                                    </span>
                                                                </div>

                                                                <div className=" col-lg-6 col-md-6 col-xs-12 col-sm-6 inputContent">
                                                                    <label className="">Mobile Number <label className="requiredsign">*</label></label>
                                                                    <span className="blocking-span">
                                                                       <InputMask mask="99999-99999" pattern="^(0|[1-9][0-9-]*)$"   className= "form-control UMname inputText tmsUserAccForm has-content" ref="mobNumber" name="mobNumber" id="mobNumber"/>
                                                                    </span>
                                                                </div>

                                                                <div className=" col-lg-12 col-md-12 col-xs-12 col-sm-12 ">
                                                                    <input className="col-lg-2 col-md-2 col-xs-12 col-sm-12 col-xs-12 pull-right btn btnSubmit outlinebox" type="submit" value="REGISTER" />
                                                               </div>   

                                                              </div> 
                                                          </form>*/}
                                                        </div>  
                                                    </div>
                                                
                                          </section>
                                        </div>
                                      </div>
                                    </div>
                                  
                               {/* </section>*/}
                              </div>
                      


                  </div>
                  </div>
                      
                </div>
              </div>
             
            </div>
        );

    } 

}


export default CreateUser;/*withTracker(props =>{

    return{
        usrcrt : props.usrcrt,  
    } 
})*//*(CreateUser);*/