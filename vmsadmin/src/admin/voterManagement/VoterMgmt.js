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
        "visited"         : true,
        "voted"           : false,
        "changeAddress"   : "",
        "areaName"        : "",
        "otherInfo"       : "",
        "dob"             : "",
        "emailId"         : "",
        "aadharCard"      : "",
        "color"           : 3,
        "cast"            : "",
        "favourite"       : false,
        voter_id          : "",
        allPosts          : [],
        editUser          : "",
        show              : true,
        firstname         : "",
        lastname          : "",
        signupEmail       : "",
        mobNumber         : "",
        action            : "Submit",
        toggleEventHandle   : "",
        toggleStatus      : "off",
        formerrors        :{
                            firstName:"",
                            lastName:"",
                            emailId:"",
                            mobileNumber:"",
                            role: "User",
                           },
		}
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeBtn = this.handleChangeBtn.bind(this);
	}

componentDidMount(){	
    axios
      .get('/api/voters/get/')
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
  handleChangeBtn(event){
    event.preventDefault();

    var color = event.target.getAttribute("value");
    console.log("color = ",color);

    this.setState({
      color : color,
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

  toggleEventHandle(event){
    var name = $(event.target).attr('name');
      console.log("name = ",name);
      if(name=="favourite"){
        this.setState({
          favourite : true,
        })
      }else if(name=="non-favourite"){
        this.setState({
          favourite : false,
        })
      }else if(name=="alive"){
        this.setState({
          dead : false,
        })
      }else if(name=="dead"){
        this.setState({
          dead : true,
        })
      }else if(name=="visited"){
        this.setState({
          visited : true,
        })
      }else if(name=="non-visited"){
        this.setState({
          visited : false,
        })
      }else if(name=="voted"){
        this.setState({
          voted : true,
        })
      }else if(name=="non-voted"){
        this.setState({
          voted : false,
        })
      }
    
      
        // if(status=="off"){
        //   swal("Competition has been Shown","","success");
        // }else{
        //   swal("Competition has been hidden","","success");
        // }
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
        "voter_id"        : this.state.voter_id,
        "mobileNumber"    : this.state.mobileNumber,
        "whatsAppNumber"  : this.state.whatsAppNumber,
        "dead"            : this.state.dead,
        "visited"         : this.state.visited,
        "voted"           : this.state.voted,
        "changeAddress"   : this.state.changeAddress,
        "areaName"        : this.state.areaName,
        "otherInfo"       : this.state.otherInfo,
        "dob"             : this.state.dob,
        "emailId"         : this.state.emailId,
        "aadharCard"      : this.state.aadharCard,
        "color"           : this.state.color,
        "cast"            : this.state.cast,
        "favourite"       : this.state.favourite,
        "userId"          : localStorage.getItem('admin_ID'),
       }
       console.log("dk == ",formValues);
          // if(this.state.firstName!="" && this.state.lastName !="" && this.state.emailId && this.state.mobileNumber ){
         axios.patch('/api/voters/patch/',formValues)
              .then((res)=>{
                  console.log("response123 = ",res.data);
                    swal("User updated successfully", "", "success");
                    $('body').removeClass("modal-open");
                    this.setState({
                      "mobileNumber"    : "",
                      "whatsAppNumber"  : "",
                      "dead"            : false,
                      "visited"         : true,
                      "voted"           : false,
                      "changeAddress"   : "",
                      "areaName"        : "",
                      "otherInfo"       : "",
                      "dob"             : "",
                      "emailId"         : "",
                      "aadharCard"      : "",
                      "color"           : 1,
                      "cast"            : "",
                      "favourite"       : false,
                    })
                    axios
                        .get('/api/voters/get/list')
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
      // }else{
      //   swal("Please enter mandatory fields", "", "warning");
      //   console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
      // }
  }

  handleEdit(row){
    console.log("row",row._id);
    // var userData=row.profile;
    this.setState({
      // firstName:userData.firstName,
      // lastName:userData.lastName,
    //   mobileNumber:userData.mobileNumber,
    //   emailId:userData.emailId,
      voter_id:row._id,
    })
  }
	render(){
	  const data = this.state.allPosts;
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
{/*        <div class="progress md-progress primary-color-dark">
            <div class="indeterminate"></div>
        </div>
        <canvas id="barChart"></canvas>*/}
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
                                          <input type="button" name="color" value="1" className={this.state.color == "1" ? "btn btn-success pad15":"btn btn-default pad15"} onClick={this.handleChangeBtn}/>
                                          <input type="button" name="color" value="2" className={this.state.color == "2" ? "btn btn-primary pad15":"btn btn-default pad15"} onClick={this.handleChangeBtn}/>
                                          <input type="button" name="color" value="3" className={this.state.color == "3" ? "btn btn-info pad15":"btn btn-default pad15"} onClick={this.handleChangeBtn}/>
                                          <input type="button" name="color" value="4" className={this.state.color == "4" ? "btn btn-warning pad15":"btn btn-default pad15"} onClick={this.handleChangeBtn}/>
                                          <input type="button" name="color" value="5" className={this.state.color == "5" ? "btn btn-danger pad15":"btn btn-default pad15"} onClick={this.handleChangeBtn}/>
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
                                        {this.state.favourite==true ?
                                          <label className="switch" title="Click mark as a voted">
                                            <input type="checkbox" id="togBtn" name="non-favourite" onClick={this.toggleEventHandle.bind(this)} checked="checked" />
                                            <div className="slider round">
                                              <span className="on">Yes</span><span className="off">No</span>
                                            </div>
                                          </label>
                                          :
                                          <label className="switch" title="Click to mark as a non-voted">
                                            <input type="checkbox" id="togBtn" name="favourite" onClick={this.toggleEventHandle.bind(this)} checked={this.state.favourite===true} />
                                            <div className="slider round">
                                              <span className="on">Yes</span><span className="off">No</span>
                                            </div>
                                          </label>
                                        }
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
                                        {this.state.dead==false ?
                                          <label className="switch" title="Click mark as a voted">
                                            <input type="checkbox" id="togBtn" name="dead" onClick={this.toggleEventHandle.bind(this)} checked="checked" />
                                            <div className="slider round">
                                              <span className="on">Alive</span><span className="off">Dead</span>
                                            </div>
                                          </label>
                                          :
                                          <label className="switch" title="Click to mark as a non-voted">
                                            <input type="checkbox" id="togBtn" name="alive" onClick={this.toggleEventHandle.bind(this)} checked={this.state.dead===false} />
                                            <div className="slider round">
                                              <span className="on">Alive</span><span className="off">Dead</span>
                                            </div>
                                          </label>
                                        }
                                        </div>
                                      </span>
                                      {this.state.formerrors.dead &&(
                                        <span className="text-danger">{this.state.formerrors.dead}</span> 
                                      )}
                                  </div>
                                  <div className="col-lg-3 col-md-3 col-xs-6 col-sm-6 inputContent">
                                    <label className="formLable col-lg-12 col-md-12">visited<label className="requiredsign">*</label></label>
                                      <span className="blocking-span col-lg-12 col-md-12 col-xs-12 col-sm-12 emailfixdomain">
                                        <div className="input-group inputBox-main" >
                                        {this.state.visited==true ?
                                          <label className="switch" title="Click mark as a voted">
                                            <input type="checkbox" id="togBtn" name="non-visited" onClick={this.toggleEventHandle.bind(this)} checked="checked" />
                                            <div className="slider round">
                                              <span className="on">Yes</span><span className="off">No</span>
                                            </div>
                                          </label>
                                          :
                                          <label className="switch" title="Click to mark as a non-voted">
                                            <input type="checkbox" id="togBtn" name="visited" onClick={this.toggleEventHandle.bind(this)} checked={this.state.visited===true} />
                                            <div className="slider round">
                                              <span className="on">Yes</span><span className="off">No</span>
                                            </div>
                                          </label>
                                        }
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
                                        {this.state.voted==true ?
                                          <label className="switch" title="Click mark as a voted">
                                            <input type="checkbox" id="togBtn" name="non-voted" onClick={this.toggleEventHandle.bind(this)} checked="checked" />
                                            <div className="slider round">
                                              <span className="on">Yes</span><span className="off">No</span>
                                            </div>
                                          </label>
                                          :
                                          <label className="switch" title="Click to mark as a non-voted">
                                            <input type="checkbox" id="togBtn" name="voted" onClick={this.toggleEventHandle.bind(this)} checked={this.state.voted===true} />
                                            <div className="slider round">
                                              <span className="on">Yes</span><span className="off">No</span>
                                            </div>
                                          </label>
                                        }
                                        </div>
                                      </span>
                                      {this.state.formerrors.voted &&(
                                        <span className="text-danger">{this.state.formerrors.voted}</span> 
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