
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
      lastname          : "",
      signupEmail       : "",
      mobNumber         : "",
      
      formerrors :{
          firstName:"",
          lastName:"",
          emailId:"",
          mobileNumber:"",
         role         : "User",
      },
  

    };
    this.handleChange = this.handleChange.bind(this);
  }

 handleChange(event){
  event.preventDefault();
   

    const datatype = event.target.getAttribute('data-text');
    const {name,value} = event.target;
    let formerrors = this.state.formerrors;
    
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
    console.log("value",value);
    this.setState({ formerrors,
      [name]:value
    });
  }

  componentWillReceiveProps(nextState){
    if(nextState && nextState.editUser && nextState.editUser.length>0){
      console.log("nextState.editUser",nextState.editUser);
          this.setState({
            firstName:nextState.editUser.profile.firstName,
            lastName:nextState.editUser.profile.lastName,
            emailId:nextState.editUser.profile.emailId,
            mobileNumber:nextState.editUser.profile.mobileNumber,
          })
    }

  }


    componentDidMount() {

    }  

    createUser(event){
      event.preventDefault();
      const formValues = {
          "firstName"       : this.state.firstName,
          "lastName"        : this.state.lastName,
          "emailId"           : this.state.emailId,
          "mobileNumber"    : this.state.mobileNumber,
          "role"            : "User",
        }

        if(this.state.firstName!="" && this.state.lastName !="" && this.state.emailId && this.state.mobileNumber ){
           axios.post('/api/users/post', formValues)
                .then( (res)=>{
                    console.log("response = ",res);
                    if(res.data.message === "NEW-USER-CREATED"){
                      swal("User added successfully", "", "success");
                      $('body').removeClass("modal-open");
                      this.setState({
                        firstName         : "",
                        lastName          : "",
                        emailId       : "",
                        mobileNumber         : "",
                      })
                      axios
                          .get('/api/users/get/list')
                          .then(
                            (res)=>{
                              console.log('res', res.data);
                              const postsdata = res.data;
                              // console.log('postsdata',postsdata);
                              this.setState({
                                allPosts : postsdata,
                              },()=>{
                                this.props.userList(this.state.allPosts)
                              });         
                            }
                          )
                          .catch((error)=>{

                            console.log("error = ",error);
                            // alert("Something went wrong! Please check Get URL.");
                             }); 
                     }
                     else if(res.data.message === "USER-ALREADY-EXIST"){
                        swal("User already exists", "", "warning");
                     } 
       
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
              <div className="modal fade" id="userModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                                  id="firstname" ref="firstname" name="firstName" data-text="firstname" placeholder="First Name"  onChange={this.handleChange} 
                                                  value={this.state.firstName}/>
                                                   
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
                                               id="lastname" ref="lastname" name="lastName" data-text="lastname" onChange={this.handleChange} 
                                               value={this.state.lastName} placeholder="Last Name" />
                                               

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
                                              ref="signupEmail" name="emailId" id="signupEmail" data-text="signupEmail" onChange={this.handleChange}  value={this.state.emailId}
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
                                                  ref="mobNumber" name="mobileNumber" id="mobNumber" data-text="mobNumber" placeholder="Mobile No"
                                                   onChange={this.handleChange} value={this.state.mobileNumber}/>
                                                    
                                             </div>   
                                            </span>
                                            {this.state.formerrors.mobNumber &&(
                                                    <span className="text-danger">{ this.state.formerrors.mobNumber}</span> 
                                                  )}

                                        </div>
                                        
                                      </div>
                                      <div className=" col-lg-12 col-md-12 col-xs-12 col-sm-12 ">
                                        <button className="col-lg-2 col-md-2 col-xs-12 col-sm-12 col-xs-12 pull-right btn btnSubmit topMargin outlinebox" type="submit" onClick={this.createUser.bind(this)} id="CreateUserModal" >Register</button>
                                       </div>    
                                  </form>
                                          </div>  
                                      </div>
                                  
                            </section>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>   
              </div>
            </div>
          </div>
        );
    } 
}
export default CreateUser;