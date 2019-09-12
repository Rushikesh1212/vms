import React, { Component } from 'react';
import CreateUser 			    from './CreateUser.js';
import axios                from 'axios';
import swal                 from 'sweetalert';
import InputMask            from 'react-input-mask';
import $ 					          from 'jquery';
import ReactTable           from 'react-table'
import 'react-table/react-table.css'
import './userManagement.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/js/modal.js';

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

class UserMgmt extends Component {
	constructor(props){
		super(props);
		this.state = {
     		allPosts          : [],
        editUser          : "",
        show              : true,
        firstname         : "",
        lastname          : "",
        signupEmail       : "",
        mobNumber         : "",
        action            : "Submit",
        userId            : "",
        formerrors        :{
                            firstName:"",
                            lastName:"",
                            emailId:"",
                            mobileNumber:"",
                            role: "User",
                           },
  
		}
    this.handleChange = this.handleChange.bind(this);

	}

  componentDidMount(){	
    $(".show-modal").click(function(){
        $("#myModal").modal({
            backdrop: 'static',
            keyboard: false
        });
    });
      axios
      .get('/api/users/get/list')
      .then(
        (res)=>{
          console.log('res', res.data);
          const postsdata = res.data;
          // console.log('postsdata',postsdata);
          this.setState({
            allPosts : postsdata,
          });         
        }
      )
      .catch((error)=>{

        console.log("error = ",error);
        // alert("Something went wrong! Please check Get URL.");
         });  
     	} 

  handleChange(event){
    event.preventDefault();
    const datatype = event.target.getAttribute('data-text');
    const {name,value} = event.target;
    let formerrors = this.state.formerrors;
    
    // switch (datatype){
    //   case 'firstname' : 
    //     formerrors.firstname = nameRegex.test(value)  && value.length>0 ? '' : "Please Enter Valid Name";
    //     break;

    //   case 'lastname' : 
    //    formerrors.lastname = nameRegex.test(value)  && value.length>0 ? '' : "Please Enter Valid Name";
    //    break;

    //   case 'mobNumber' : 
    //    formerrors.mobNumber = mobileRegex.test(value) && value.length>0 ? '' : "Please enter a valid Contact Number";
    //    break;

    //   case 'signupEmail' : 
    //    formerrors.signupEmail = emailRegex.test(value)  && value.length>0? "":"Please enter a valid Email ID";
    //    break;

    //   case 'role' : 
    //     formerrors.role =  value!= "--select--" ? "":"Please select role";
    //     break;
      
    //   default :
    //   break;

    // }
    console.log("value",value);
    this.setState({ formerrors,
      [name]:value
    });
  }

  updateData(event){
      event.preventDefault();
      const formValues = {
          "firstName"       : this.state.firstName,
          "lastName"        : this.state.lastName,
          "emailId"         : this.state.emailId,
          "mobileNumber"    : this.state.mobileNumber,
          "userId"          : this.state.userId,
         }
         console.log("formValues",formValues);
            if(this.state.firstName!="" && this.state.lastName !="" && this.state.emailId && this.state.mobileNumber ){
           axios.patch('/api/users/patch/one/updateUser/',formValues)
                .then( (res)=>{
                    console.log("response = ",res);
                      swal("User updated successfully", "", "success");
                      $('body').removeClass("modal-open");
                      this.setState({
                        firstName         : "",
                        lastName          : "",
                        emailId           : "",
                        mobileNumber      : "",
                        action            : "Submit",
                      })
                      axios
                          .get('/api/users/get/list')
                          .then(
                            (res)=>{
                              this.setState({
                                allPosts : res.data,
                              },()=>{
                              });         
                            }
                          )
                          .catch((error)=>{

                            console.log("error = ",error);
                             }); 
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

	userList(userList){
      $('body').removeClass("modal-open");

		  this.setState({
        allPosts:userList
      })
    }

	closeModal(event){
		 $('#deleteModal').removeClass("in");
		 $('#deleteModal').css("display","none");
	}

  handleEdit(row){
    var userData = row.profile;
    this.setState({
      firstName:userData.firstName,
      lastName:userData.lastName,
      mobileNumber:userData.mobileNumber,
      emailId:userData.emailId,
      userId:row._id,
    })
  }

  resetPassword(row){
    console.log("row...",row._id);
    var userData = row.profile;
    var id = row._id;
      axios
        .patch('/api/users/patch/one/resetPassword/'+id)
        .then((res)=>{
          console.log("resp...",res.data);      
          swal("Great", "Password of "+userData.firstName+" "+userData.lastName+" has been reset successfully", "success");
        })
        .catch((error)=>{
          console.log("error = ",error);
        }); 
  }

	render(){
    const data = this.state.allPosts;
      console.log(data);
	const columns = [
      {
          Header: "Sr. No.",
          id: "row",
          maxWidth: 100,
          filterable: false,
          Cell: (row) => {
              return <div>{row.index+1}</div>;
          }
      },
      {
        Header: 'Name',
        accessor: 'profile.fullName' // String-based value accessors!
      }, {
        Header: 'Mobile Number',
        accessor: 'profile.mobileNumber',
      }, {
        Header: 'Email ID',
        accessor: 'profile.emailId',
      },{
        Header : 'Action',
        Cell:row =>(
            <div className="text-center">
              <i className="actionIcon fa fa-pencil" data-toggle="modal" data-target="#userModalUpdate" onClick={()=> this.handleEdit(row.original)}></i>&nbsp;&nbsp;
              <button className="pull-right btn btn-primary col-lg-8 col-md-8 col-sm-12 col-xs-12" onClick={()=> this.resetPassword(row.original)}>Reset Password</button>
            </div>
          )
      }]
      const {formerrors} = this.state;

	var adminRolesListDataList = this.state.adminRolesListData;
	  return(
			<div className="modal-bodyuser">
		    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 box-header with-border nopaddingum2">
					<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 paddingright">
						<h4 className="usrmgnttitle weighttitle">To add the new user, click on <i>'Add New User'</i> button:&nbsp;<span class="glyphicon glyphicon-arrow-right"></span></h4>
					</div>
					<div className="col-lg-2 col-md-3 col-sm-12 col-xs-12 "  id="createmodalcl">
						<button type="button" className="btn btn-primary col-lg-12 col-md-12 col-sm-12 col-xs-12" data-toggle="modal" data-target="#userModal">Add New User</button>
						<CreateUser userList={this.userList.bind(this)} editUser={this.state.editUser}/>
					</div>
				</div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 paddingright">
          <h4 className="usrmgnttitle weighttitle">List of Users: <i className="custTblHdng">(All users appeare in below table)</i></h4>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
  				<ReactTable
				    data={data}
				    columns={columns}
				    filterable= {true}
				    sortable= {true}
				    showPagination= {true}
				    pageSizeOptions= {[5, 10, 20, 25, 50, 100]}
						defaultPageSize= {10}
						minRows ={10}
            className ={"-striped -highlight"}
				  />
  		  </div>
              <div className="modal fade" id="userModalUpdate" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg " role="document">
                  <div className="modal-content modalContent ummodallftmg ummodalmfdrt col-lg-12 ">
                    <div className="modal-header userHeader">
                        
                      <button type="button" className="close" data-dismiss="modal">X
                      </button>
                      <h4 className="modal-title" id="exampleModalLabel">Update User</h4>
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
                                        <div className=" col-lg-6 col-md-6 col-xs-12 col-sm-6 inputContent">
                                          <label className="formLable col-lg-12 col-md-12">Booth <label className="requiredsign">*</label></label>
                                            <span className="blocking-span ">
                                               <div className="input-group inputBox-main  new_inputbx " >
                                                 <div className="input-group-addon remove_brdr inputIcon">
                                                  <i className="fa fa-mobile"></i>
                                                 </div>  
                                                  <input type="text" className="formFloatingLabels form-control  newinputbox" 
                                                  ref="signupEmail" name="emailId" id="signupEmail" data-text="signupEmail" onChange={this.handleChange}  value={this.state.emailId}
                                                  placeholder="Email"/>
                                               </div>   
                                            </span>
                                            {this.state.formerrors.mobNumber &&(
                                              <span className="text-danger">{ this.state.formerrors.mobNumber}</span> 
                                            )}
                                        </div>
                                        
                                      </div>
                                      <div className=" col-lg-12 col-md-12 col-xs-12 col-sm-12 ">
                                        <button className="col-lg-2 col-md-2 col-xs-12 col-sm-12 col-xs-12 pull-right btn btnSubmit topMargin outlinebox" type="submit"  onClick={this.updateData.bind(this)} id="CreateUserModal">Update</button>
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
export default UserMgmt;