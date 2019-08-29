import React, { Component } from 'react';
import CreateVoter 			    from './CreateVoter.js';
import axios                from 'axios';
import InputMask            from 'react-input-mask';
import _                    from 'underscore';
import swal                 from 'sweetalert';
import $ 					          from 'jquery';
import ReactTable           from 'react-table'
import 'react-table/react-table.css'
import './VoterManagement.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/js/modal.js';

class VoterMgmt extends Component {
	constructor(props){
		super(props);
		this.state = {
        "mobileNumber"    : "",
        "whatsAppNumber"  : "",
        "dead"            : false,
        "visited"         : false,
        "voted"           : false,
        "changeAddress"   : "",
        "areaName"        : "",
        "otherInfo"       : "",
        "dob"             : "",
        "emailId"         : "",
        "aadharCard"      : "",
        "color"           : 0,
        "cast"            : "",
        "favourite"       : false,
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
    axios
      .get('/api/schema/get/')
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

	voterList(voterList){
      $('body').removeClass("modal-open");

		  this.setState({
        allPosts:voterList
      })
    }

	closeModal(event){
		 $('#deleteModal').removeClass("in");
		 $('#deleteModal').css("display","none");
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

  handleEdit(row){
    console.log("row",row._id);
    // var userData=row.profile;
    // this.setState({
    //   firstName:userData.firstName,
    //   lastName:userData.lastName,
    //   mobileNumber:userData.mobileNumber,
    //   emailId:userData.emailId,
    //   userId:row._id,
    // })
  }
	render(){
	  const data = this.state.allPosts;
    console.log(data);
	  const columns = [{
        Header: 'Full Name',
        accessor: 'fullName',
      },
      // {
      //   Header: 'Voting Card No.',
      //   accessor: 'profile.emailId',
      // },
       // {
      //   Header: 'Mobile Number',
      //   accessor: 'profile.mobileNumber',
      // }, {
      //   Header: 'Email ID',
      //   accessor: 'profile.emailId',
      // },{
      //   Header: 'Voting Card No.',
      //   accessor: 'profile.emailId',
      // },
      {
        Header : 'Action',
        Cell:row =>(
            <div className="text-center">
              <i className="actionIcon fa fa-pencil" data-toggle="modal" data-target="#voterModalUpdate" onClick={()=> this.handleEdit(row.original)}></i>&nbsp;&nbsp;
              {/*<button className="pull-right btn btn-primary col-lg-8 col-md-8 col-sm-12 col-xs-12" onClick={this.resetPassword.bind(this)}>Reset Password</button>*/}
            </div>
          )
      }]
	var adminRolesListDataList = this.state.adminRolesListData;
	  return(
			<div className="modal-bodyuser">
		    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 box-header with-border nopaddingum2">
					<div className="col-lg-8 col-md-6 col-sm-6 col-xs-12 paddingright">
						<h4 className="usrmgnttitle weighttitle">Click to add the new single voter:&nbsp;<span class="glyphicon glyphicon-arrow-right"></span></h4>
					</div>
					<div className="col-lg-4 col-md-3 col-sm-12 col-xs-12 "  id="createmodalcl">
						<button type="button" className="btn btn-primary col-lg-12 col-md-12 col-sm-12 col-xs-12" data-toggle="modal" data-target="#userModal">Add New Voter</button>
						<CreateVoter voterList={this.voterList.bind(this)}/>
					</div>
				</div>        
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 box-header with-border nopaddingum2">
          <div className="col-lg-offset-1 col-lg-7 col-md-6 col-sm-6 col-xs-12 paddingright">
            <h4 className="usrmgnttitle weighttitle">Click to add multiple voters:&nbsp;<span class="glyphicon glyphicon-arrow-right"></span></h4>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 "  id="createmodalcl">
            <input type="file" name="file-6[]" id="file-6" className="inputfile inputfile-5" data-multiple-caption="{count} files selected" multiple=""/>
            <label for="file-6"><h4><span class="glyphicon glyphicon-cloud-upload"></span></h4>
            </label>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 paddingright">
          <h4 className="usrmgnttitle weighttitle">List of Users: <i className="custTblHdng">(All voters appeare in below table)</i></h4>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="progress md-progress primary-color-dark">
            <div class="indeterminate"></div>
        </div>
        <canvas id="barChart"></canvas>
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
        <div className="modal fade" id="voterModalUpdate" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                <div className="signuppp col-lg-12 col-md-12 col-sm-12 col-xs-12 margbottom30 createusr ">
                                  <div className=" col-lg-6 col-md-6 col-xs-12 col-sm-6 inputContent">
                                    <label className="formLable col-lg-12 col-md-12">Mobile Number <label className="requiredsign">*</label></label>
                                      <span className="blocking-span ">
                                        <div className="input-group inputBox-main  new_inputbx " >
                                          <div className="input-group-addon remove_brdr inputIcon">
                                            <i className="fa fa-mobile"></i>
                                          </div>  
                                          <InputMask mask="9999999999" pattern="^(0|[1-9][0-9-]*)$" 
                                          className= "form-control UMname inputText form-control  has-content"
                                          ref="mobileNumber" name="mobileNumber" id="mobileNumber" data-text="mobileNumber" placeholder="Enter Mobile Number"
                                          onChange={this.handleChange} value={this.state.mobileNumber}/>
                                        </div>   
                                      </span>
                                      {this.state.formerrors.mobileNumber &&(
                                        <span className="text-danger">{ this.state.formerrors.mobileNumber}</span> 
                                      )}
                                  </div>
                                  <div className=" col-lg-6 col-md-6 col-xs-6 col-sm-6 inputContent">
                                    <label className="formLable col-lg-12 col-md-12">WhatsApp Number<label className="requiredsign">*</label></label>
                                      <span className="blocking-span ">
                                        <div className="input-group inputBox-main  new_inputbx " >
                                          <div className="input-group-addon remove_brdr inputIcon">
                                            <i className="fa fa-user-circle fa "></i>
                                          </div>  
                                          <InputMask mask="9999999999" pattern="^(0|[1-9][0-9-]*)$" 
                                          className= "form-control UMname inputText form-control  has-content"
                                          ref="whatsAppNumber" name="whatsAppNumber" id="whatsAppNumber" data-text="whatsAppNumber" placeholder="Enter WhatsApp Number"
                                          onChange={this.handleChange} value={this.state.whatsAppNumber}/>
                                        </div>   
                                      </span>
                                      {this.state.formerrors.whatsAppNumber &&(
                                        <span className="text-danger">{this.state.formerrors.whatsAppNumber}</span> 
                                      )}
                                  </div>
                                </div>
                                <div className="signuppp col-lg-12 col-md-12 col-sm-12 col-xs-12 margbottom30 createusr">
                                  <div className=" col-lg-6 col-md-6 col-xs-12 col-sm-12 inputContent">
                                    <label className="formLable col-lg-12 col-md-12">Change Address<label className="requiredsign">*</label></label>
                                      <span className="blocking-span col-lg-12 col-md-12 col-xs-12 col-sm-12 emailfixdomain">
                                        <div className="input-group inputBox-main" >
                                          <div className="input-group-addon remove_brdr inputIcon">
                                            <i className="fa fa-envelope-square"></i>
                                          </div> 
                                          <input type="text" className="formFloatingLabels form-control  newinputbox" 
                                          ref="changeAddress" name="changeAddress" id="changeAddress" data-text="changeAddress" onChange={this.handleChange}  value={this.state.changeAddress}
                                          placeholder="Enter Address"/>
                                        </div>   
                                      </span>
                                      {this.state.formerrors.changeAddress &&(
                                        <span className="text-danger">{this.state.formerrors.changeAddress}</span> 
                                      )}
                                  </div>
                                  <div className=" col-lg-6 col-md-6 col-xs-12 col-sm-12 inputContent">
                                    <label className="formLable col-lg-12 col-md-12">Area Name<label className="requiredsign">*</label></label>
                                      <span className="blocking-span col-lg-12 col-md-12 col-xs-12 col-sm-12 emailfixdomain">
                                        <div className="input-group inputBox-main" >
                                          <div className="input-group-addon remove_brdr inputIcon">
                                            <i className="fa fa-envelope-square"></i>
                                          </div> 
                                          <input type="text" className="formFloatingLabels form-control  newinputbox" 
                                          ref="areaName" name="areaName" id="areaName" data-text="areaName" onChange={this.handleChange} value={this.state.areaName}
                                          placeholder="Enter Area Name"/>
                                        </div>
                                      </span>
                                      {this.state.formerrors.areaName &&(
                                        <span className="text-danger">{this.state.formerrors.areaName}</span> 
                                      )}
                                  </div>
                                </div>
                                <div className="signuppp col-lg-12 col-md-12 col-sm-12 col-xs-12 margbottom30 createusr">
                                  <div className=" col-lg-6 col-md-6 col-xs-12 col-sm-12 inputContent">
                                    <label className="formLable col-lg-12 col-md-12">Email Id<label className="requiredsign">*</label></label>
                                      <span className="blocking-span col-lg-12 col-md-12 col-xs-12 col-sm-12 emailfixdomain">
                                        <div className="input-group inputBox-main" >
                                          <div className="input-group-addon remove_brdr inputIcon">
                                            <i className="fa fa-envelope-square"></i>
                                          </div> 
                                          <input type="text" className="formFloatingLabels form-control newinputbox" 
                                          ref="emailId" name="emailId" id="emailId" data-text="emailId" onChange={this.handleChange}  value={this.state.emailId}
                                          placeholder="Enter Email Id"/>
                                        </div>   
                                      </span>
                                      {this.state.formerrors.emailId &&(
                                        <span className="text-danger">{this.state.formerrors.emailId}</span> 
                                      )}
                                  </div>
                                  <div className=" col-lg-6 col-md-6 col-xs-12 col-sm-12 inputContent">
                                    <label className="formLable col-lg-12 col-md-12">Other Info<label className="requiredsign">*</label></label>
                                      <span className="blocking-span col-lg-12 col-md-12 col-xs-12 col-sm-12 emailfixdomain">
                                        <div className="input-group inputBox-main" >
                                          <div className="input-group-addon remove_brdr inputIcon">
                                            <i className="fa fa-envelope-square"></i>
                                          </div>
                                          <input type="text" className="formFloatingLabels form-control  newinputbox" 
                                          ref="otherInfo" name="otherInfo" id="otherInfo" data-text="otherInfo" onChange={this.handleChange} value={this.state.otherInfo}
                                          placeholder="Enter Other Info"/>
                                        </div>
                                      </span>
                                      {this.state.formerrors.otherInfo &&(
                                        <span className="text-danger">{this.state.formerrors.otherInfo}</span> 
                                      )}
                                  </div>
                                </div>                                
                                <div className="signuppp col-lg-12 col-md-12 col-sm-12 col-xs-12 margbottom30 createusr">
                                  <div className=" col-lg-6 col-md-6 col-xs-12 col-sm-12 inputContent">
                                    <label className="formLable col-lg-12 col-md-12">Date of Birth<label className="requiredsign">*</label></label>
                                      <span className="blocking-span col-lg-12 col-md-12 col-xs-12 col-sm-12 emailfixdomain">
                                        <div className="input-group inputBox-main" >
                                          <div className="input-group-addon remove_brdr inputIcon">
                                            <i className="fa fa-envelope-square"></i>
                                          </div> 
                                          <input type="date" className="formFloatingLabels form-control newinputbox" 
                                          ref="dob" name="dob" id="dob" data-text="dob" onChange={this.handleChange}  value={this.state.dob}
                                          placeholder="Enter Date of Birth"/>
                                        </div>   
                                      </span>
                                      {this.state.formerrors.dob &&(
                                        <span className="text-danger">{this.state.formerrors.dob}</span> 
                                      )}
                                  </div>
                                  <div className=" col-lg-6 col-md-6 col-xs-12 col-sm-12 inputContent">
                                    <label className="formLable col-lg-12 col-md-12">Aadhar Card<label className="requiredsign">*</label></label>
                                      <span className="blocking-span col-lg-12 col-md-12 col-xs-12 col-sm-12 emailfixdomain">
                                        <div className="input-group inputBox-main" >
                                          <div className="input-group-addon remove_brdr inputIcon">
                                            <i className="fa fa-envelope-square"></i>
                                          </div>
                                          <InputMask mask="9999-9999-9999" pattern="^(0|[1-9][0-9-]*)$" 
                                          className= "form-control UMname inputText form-control  has-content"
                                          ref="aadharCard" name="aadharCard" id="aadharCard" data-text="aadharCard" placeholder="Enter AadharCard Number"
                                          onChange={this.handleChange} value={this.state.aadharCard}/>
                                        </div>
                                      </span>
                                      {this.state.formerrors.aadharCard &&(
                                        <span className="text-danger">{this.state.formerrors.aadharCard}</span> 
                                      )}
                                  </div>
                                </div>                                
                                <div className="signuppp col-lg-12 col-md-12 col-sm-12 col-xs-12 margbottom30 createusr">
                                  <div className=" col-lg-6 col-md-6 col-xs-12 col-sm-12 inputContent">
                                    <label className="formLable col-lg-12 col-md-12">Cast<label className="requiredsign">*</label></label>
                                      <span className="blocking-span col-lg-12 col-md-12 col-xs-12 col-sm-12 emailfixdomain">
                                        <div className="input-group inputBox-main" >
                                          <div className="input-group-addon remove_brdr inputIcon">
                                            <i className="fa fa-envelope-square"></i>
                                          </div> 
                                          <input type="text" className="formFloatingLabels form-control newinputbox" 
                                          ref="cast" name="cast" id="cast" data-text="cast" onChange={this.handleChange}  value={this.state.cast}
                                          placeholder="Enter Caste"/>
                                        </div>   
                                      </span>
                                      {this.state.formerrors.cast &&(
                                        <span className="text-danger">{this.state.formerrors.cast}</span> 
                                      )}
                                  </div>
                                  <div className=" col-lg-6 col-md-6 col-xs-12 col-sm-12 inputContent">
                                    <label className="formLable col-lg-12 col-md-12">Color<label className="requiredsign">*</label></label>
                                      <span className="blocking-span col-lg-12 col-md-12 col-xs-12 col-sm-12 emailfixdomain">
                                        <div className="input-group inputBox-main" >
                                        <button type="button" className="btn btn-success pad15">2</button>
                                        <button type="button" className="btn btn-primary pad15">1</button>
                                        <button type="button" className="btn btn-info pad15">3</button>
                                        <button type="button" className="btn btn-warning pad15">4</button>
                                        <button type="button" className="btn btn-danger pad15">5</button>
                                        </div>
                                      </span>
                                      {this.state.formerrors.color &&(
                                        <span className="text-danger">{this.state.formerrors.color}</span> 
                                      )}
                                  </div>
                                </div>                                
                                <div className="signuppp col-lg-12 col-md-12 col-sm-12 col-xs-12 margbottom30 createusr">
                                  <div className="col-lg-3 col-md-3 col-xs-6 col-sm-6 inputContent">
                                    <label className="formLable col-lg-12 col-md-12">Favourite<label className="requiredsign">*</label></label>
                                      <span className="blocking-span col-lg-12 col-md-12 col-xs-12 col-sm-12 emailfixdomain">
                                        <div className="input-group inputBox-main" >
                                        <label class="switch">
                                          <input type="checkbox"
                                          ref="favourite" name="favourite" id="favourite" data-text="favourite"
                                          onChange={this.handleChange} value={this.state.favourite}/>
                                          <span class="slider round"></span>
                                        </label>
                                        </div>
                                      </span>
                                      {this.state.formerrors.favourite &&(
                                        <span className="text-danger">{this.state.formerrors.favourite}</span> 
                                      )}
                                  </div>
                                  <div className="col-lg-3 col-md-3 col-xs-6 col-sm-6 inputContent">
                                    <label className="formLable col-lg-12 col-md-12">Alive/Dead<label className="requiredsign">*</label></label>
                                      <span className="blocking-span col-lg-12 col-md-12 col-xs-12 col-sm-12 emailfixdomain">
                                        <div className="input-group inputBox-main" >
                                        <label class="switch">
                                          <input type="checkbox"
                                          ref="dead" name="dead" id="dead" data-text="dead"
                                          onChange={this.handleChange} value={this.state.dead}/>
                                          <span class="slider round"></span>
                                        </label>
                                        </div>
                                      </span>
                                      {this.state.formerrors.color &&(
                                        <span className="text-danger">{this.state.formerrors.color}</span> 
                                      )}
                                  </div>
                                  <div className="col-lg-3 col-md-3 col-xs-6 col-sm-6 inputContent">
                                    <label className="formLable col-lg-12 col-md-12">visited<label className="requiredsign">*</label></label>
                                      <span className="blocking-span col-lg-12 col-md-12 col-xs-12 col-sm-12 emailfixdomain">
                                        <div className="input-group inputBox-main" >
                                        <label class="switch">
                                          <input type="checkbox"
                                          ref="visited" name="visited" id="visited" data-text="visited"
                                          onChange={this.handleChange} value={this.state.visited}/>
                                          <span class="slider round"></span>
                                        </label>
                                        </div>
                                      </span>
                                      {this.state.formerrors.visited &&(
                                        <span className="text-danger">{this.state.formerrors.visited}</span> 
                                      )}
                                  </div>
                                  <div className="col-lg-3 col-md-3 col-xs-6 col-sm-6 inputContent">
                                    <label className="formLable col-lg-12 col-md-12">Voted<label className="requiredsign">*</label></label>
                                      <span className="blocking-span col-lg-12 col-md-12 col-xs-12 col-sm-12 emailfixdomain">
                                        <div className="input-group inputBox-main" >
                                        <label class="switch">
                                          <input type="checkbox"
                                          ref="voted" name="voted" id="voted" data-text="voted"
                                          onChange={this.handleChange} value={this.state.voted}/>
                                          <span class="slider round"></span>
                                        </label>
                                        </div>
                                      </span>
                                      {this.state.formerrors.color &&(
                                        <span className="text-danger">{this.state.formerrors.color}</span> 
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
export default VoterMgmt;