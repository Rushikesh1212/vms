import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import axios 	 from 'axios';
import swal      from 'sweetalert';
import "./userManagement.css";
class EditUserProfile extends Component{
	constructor(props) {
	  super(props);
	 		    var UserId = this.props.match.params.id;
    		 	console.log("UserId ----------------------",UserId);
	  this.state = {
	  		UserId    : UserId,
	  		fullname  : "",
	  		username  : "",
	  		mobNumber : "",
	  		userProfile : "",
	  		firstName : "",
	  		lastName  : "",
	  		role 	  : "",
	  		office    : [],
	  		allPosts   : [],
			}	  	
			 this.handleChange = this.handleChange.bind(this);
	  }
	    
	handleSubmit(event) {
		var userid = this.state.UserId;
		console.log("userid-----------------------------------------",userid);
		var formvalues = {
			// "fullName" 		: this.refs.firstName.value +" "+ this.refs.lastName.value,
			"firstName"		: this.refs.firstName.value,
			"lastName" 		: this.refs.lastName.value,
			"emailId"  		: this.refs.username.value,
			"mobileNumber"  : this.state.mobNumber,
			"roles"         :  this.state.role,
          "officeLocation"  : this.refs.office.value,
		}
		console.log("formvalues",formvalues);
		if(this.refs.firstName.value!= "" && this.refs.lastName.value != "" && this.state.mobNumber!= "" && this.state.role!= "" )
		{
			axios.patch('/api/users/patch/one/'+userid, formvalues)
				.then((response)=> {		
					swal("User updated successfully","", "success");		
					 this.props.history.push('/umlistofusers');	
					console.log('response --====================',response);


						var data = {
							"startRange"        : this.state.startRange,
				            "limitRange"        : this.state.limitRange, 
						}
						axios.post('/api/users/post/userslist', data)
						.then( (res)=>{      
							console.log("here  list response==============",res);
							var tableData = res.data.map((a, i)=>{
								return {
									_id 			: a._id,
									fullName        : a.fullName,
					                emailId    		: a.emailId,
					                mobNumber       : a.mobNumber, 
					                status        	: a.status,	
					                roles 			: a.roles,
								}
							})
							this.setState({
					          completeDataCount : res.data.length,
					          tableData 		: tableData,          
					        },()=>{
					        	console.log('tableData', this.state.tableData);
					        })
						})
						.catch((error)=>{
							console.log("error = ",error);
							// alert("Something went wrong! Please check Get URL.");
						});

				})
				.catch(function (error) {
					console.log('error============',error);
				});

		}else{
			swal("Please enter mandatory fields", "", "warning");
          console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
		}
				
	}

	
	handleChange(event){
        const target = event.target.value;
        const name   = event.target.name;
        console.log('target',name, target);
          this.setState({ 
	      [name]:target
	    },()=>{
	    	// console.log('this state', this.state);
	    })
	}
	
	componentDidMount(){
		console.log("here edit view");
		var userid = this.state.UserId;
		console.log("userid-----------------------------------------",userid);
		 axios.get('/api/users/get/one/'+ userid)
	      .then( (res)=>{
	        console.log("here data_______________",res.data);
	        var FName = res.data.profile.fullName.split(' ');
	        var FirstName = FName[0];
	        var LastName = FName[1];
	        var Email = res.data.profile.emailId ? res.data.profile.emailId : null;
	        var Mnob  = res.data.profile.mobileNumber ? res.data.profile.mobileNumber : null;

	        var loc = res.data.officeLocation ? res.data.officeLocation  : null;
	        var Assignedrole = res.data.roles ? res.data.roles : null;

	        

	        console.log("loc", loc);
	        // console.log("L name", LastName);
	      this.refs.office.value    = loc;
	      this.refs.firstName.value = FirstName;
	      this.refs.lastName.value = LastName;
	     /* this.refs.fullname.value = FName */
		  this.refs.username.value = Email;
		  this.setState({
		  	mobNumber : Mnob,
		  	role      : Assignedrole,
		  });
		  

		 
	      })
	      .catch((error)=>{
	        console.log("error = ",error);
	        // alert("Something went wrong! Please check Get URL.");
	      });

// for office data 
	       axios
	      .get('/api/tgkSpecificcompanysettings/list')
	      .then(
	        (res)=>{
	          console.log('res------------------', res);
	          const postsdata = res.data;
	          console.log('postsdata',postsdata);
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
	        console.log("office",this.state.office);  
	        
	        }
	      )
	      .catch((error)=>{

	        console.log("error = ",error);
	        // alert("Something went wrong! Please check Get URL.");
	         });  

	}
  	
	render(){      
		return (
				<div>
					<div>					        
					    <div className="">					        
					         <section className="content-header">
					          {/*  <h3 className="contentTitle">Edit User</h3>*/}
					         </section>					         
					          <section className="content viewContent">
					            <div className="row">
					              <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
					                <div className="box">					                 
					                  <div className="box-header with-border boxMinHeight">
								            <div className="box-header with-border">
								            <h4 className="reportTitle">Edit User Data</h4>
								            </div>										
											<div className="box-body">												
												<div className="col-lg-12 col-sm-12 col-xs-12 col-md-12  EditUserProfileWrap">
													<div className="col-lg-12 col-sm-12 col-xs-12 col-md-12">
														   <div className=" col-lg-6 col-md-6 col-xs-6 col-sm-6 inputContent">
                                                          <label className="formLable">First Name <label className="requiredsign">*</label></label>
                                                          <span className="blocking-span">
                                                           <div className="input-group inputBox-main  new_inputbx " >
                                                             <div className="input-group-addon remove_brdr inputIcon">
                                                             <i className="fa fa-user-circle fa "></i>
                                                            </div>  
                                                              <input type="text" style={{textTransform:'capitalize'}}
                                                               className="form-control UMname inputText form-control  has-content"
                                                                id="firstName" ref="firstName" name="firstName" onChange={this.handleChange}  placeholder="First Name"/>
                                                           </div>   
                                                          </span>
                                                      </div>
                                                      <div className=" col-lg-6 col-md-6 col-xs-6 col-sm-6 inputContent">
                                                          <label className="formLable">Last Name <label className="requiredsign">*</label></label>
                                                          <span className="blocking-span ">
                                                          <div className="input-group inputBox-main  new_inputbx " >
                                                             <div className="input-group-addon remove_brdr inputIcon">
                                                              <i className="fa fa-user-circle fa "></i>
                                                            </div>  
                                                             <input type="text"className="form-control UMname inputText form-control  has-content indexcls" 
                                                             id="lastName" ref="lastName" name="lastName" onChange={this.handleChange}  placeholder="Last Name" />
                                                          </div>   
                                                          </span>
                                                      </div>


														<div className="col-lg-12 col-sm-12 col-xs-12 col-md-12 group btmmargin inputContent">
															<label className="formLable">Username/Email <label className="requiredsign">*</label></label>
                                                          	<input type="text" disabled  onChange={this.handleChange} className="disableInput inputMaterial form-control inputText" ref="username" name="username" required/>
														</div>
														<div className="col-lg-6 col-sm-6 col-xs-6 col-md-6 group btmmargin inputContent">
															<label className="formLable">Mobile Number <label className="requiredsign">*</label></label>
	                                                          <span className="blocking-span">
	                                                           <div className="input-group inputBox-main  new_inputbx " >
	                                                             <div className="input-group-addon remove_brdr inputIcon">
	                                                            <i className="fa fa-mobile"></i>
	                                                            </div>  
	                                                              <InputMask  mask="9999999999"  type="text" style={{textTransform:'capitalize'}}
	                                                               className="form-control UMname inputText form-control  has-content"
	                                                                id="mobNumber" ref="mobNumber" name="mobNumber" value={this.state.mobNumber} onChange={this.handleChange} placeholder="mobile number"/>
	                                                           </div>   
	                                                          </span>
														</div>	

														  <div className=" col-lg-6 col-md-6 col-xs-12 col-sm-12 btmmargin inputContent">
                                                           <label className="formLable col-lg-12 col-md-12 padd0 btmmargin">Role <label className="requiredsign">*</label></label>
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
                                                               
                                                          </div>

													</div>
														<div className="signuppp col-lg-12 col-md-12 col-sm-12 col-xs-12 createusr">
                                                       

                                                          <div className=" col-lg-6 col-md-6 col-xs-12 col-sm-12 inputContent" >
                                                              <label className="formLable col-lg-12 col-md-12 mrgtop6">Office Location <label className="requiredsign"></label></label>
                                                                  <span className="blocking-span col-lg-12 col-md-12 col-xs-12 col-sm-12 emailfixdomain">
                                                                    <select className="form-control" value={this.state.officeid} ref ="office" id="office" name="office" data-text="office">
                                                                        <option hidden> --Select-- </option>
                                                                        <option value="Head Office">  Head Office </option>
                                                                        <option value="Sales Agent Office"> Sales Agent Office </option>
                                                                           { this.state.office != null ?
                                                                           	this.state.office[0] != null ?
                                                                          this.state.office[0].map( (locData, index)=>{
                                                                          // console.log('locData',locData);
                                                                           return( 

                                                                                 <option key={index} value={locData.officeLocationid ? locData.officeLocationid : null } > {locData.officeLocationid ? locData.officeLocationid : null}  </option>


                                                                                   )}
                                                                           )
                                                                          :
                                                                          null
                                                                          :
                                                                          null
                                                                        }
                                                                    </select>

                                                                  </span>
                                                           </div>
                                                     </div>

													<br/>
														<div className="col-lg-6 col-sm-12 col-xs-12 col-md-12 pull-right btmmargin userProfileEditBtn">
																<button onClick={this.handleSubmit.bind(this)} className="btn btn-primary pull-right">&nbsp; &nbsp;Update Profile&nbsp; &nbsp;</button>
														</div>
													</div>
												</div>	
										</div>
									  </div>
									</div>
								  </div>
							    </section>
							  </div>
							</div>
					     		
						</div>
					);
					
				

	} 

}

export default EditUserProfile;


