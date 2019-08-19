import React, { Component }       	from 'react';
import swal                     	from 'sweetalert';
import axios 						from 'axios';
import $ 							from 'jquery';
import TemplateRow                	from './emails/TemplateRow.jsx';
import EmailTemplateRow           	from './emails/EmailTemplateRow.jsx';
import NotificationTemplateRow    	from './notifications/NotificationTemplateRow.jsx';
import AllNotificationTemplateRow 	from './notifications/AllNotificationTemplateRow.jsx';
import AllSMSTemplateRow          	from './sms/AllSMSTemplateRow.jsx';
import SMSTemplateRow             	from './sms/SMSTemplateRow.jsx';
import CKEditor 				  	from "react-ckeditor-component";
import validator 					from 'validator';
// import 'jquery-validation';
import './notification.css';

axios.defaults.baseURL = 'http://qatprmcorporate.iassureit.com/';
axios.defaults.headers.post['Content-Type'] = 'application/json';


  const formValid = formerrors=>{
  console.log("formerrors",formerrors);
  let valid = true;
  Object.values(formerrors).forEach(val=>{
  val.length>0 && (valid = false);
  })
  return valid;
  }

const emptydataRegex  = RegExp(/^\s*$/);
const companyAddressRegex = RegExp(/^[a-zA-Z0-9\s,'/.-]*$/);
class ViewTemplates extends Component{


   handleChange(event){

   	const datatype = event.target.getAttribute('data-text');
    const {name,value} = event.target;
    let formerrors = this.state.formerrors;
    
    // console.log("datatype",datatype);
    switch (datatype){
     
      

      case 'message' : 
        formerrors.message = emptydataRegex.test(value)   ? "Please Enter Data" :''  ;
      break;

      case 'subject' : 
        formerrors.subject = emptydataRegex.test(value)   ? "Please Enter Data" :'';
      break;
       
       default :
       break;

      //  case 'companyName' : 
      //  formerrors.companyName = value.length < 1 && value.lenght > 0 ? 'Minimum 1 Character required' : "";
      //  break;

    }
    // this.setState({formerrors,})
    this.setState({ formerrors,
      [name]:value
    } );


	 /* const target = event.target;
	  const name   = target.name;
	  this.setState({
	  	[name]: event.target.value,
	  });*/
	}


	componentDidMount() {	
	    $("html,body").scrollTop(0);	
	   this.getData();
	    /*$.validator.addMethod("regxsubject", function(value, element, arg){          
	    	return arg !== value;        
	    }, "Please select one subject name");

	    $.validator.addMethod("regxtemplateType", function(value, element, arg){          
	    	return arg !== value;        
	    }, "Please select template type");

	    $.validator.addMethod("regxtemplateName", function(value, element, arg){          
	    	return arg !== value;        
	    }, "Please select template name");
   
	    $.validator.setDefaults({
	        debug: true,
	        success: "valid"
	    });
	    $("#newTemplateForm").validate({
	        rules: {
	          subject:{              
	          	required:true,              
	          	// regxsubject: "Not Selected"            
	          },
	          templateType:{              
	          	required:true,              
	          	regxtemplateType: "Not Selected"            
	          },
	          templateName:{              
	          	required:true,              
	          	regxtemplateName: "Not Selected"            
	          },	          
	        }, 
	        errorPlacement: function(error, element) {
			  if (element.attr("name") == "templateType"){
			    error.insertAfter("#templateType");
			  }
			  if (element.attr("name") == "templateName"){
			    error.insertAfter("#templateName");
			  } 
			  if (element.attr("name") == "subject"){
			    error.insertAfter("#subject");
			  }  
			}
	    });*/
	} 
	constructor(props){

		super(props);
			this.state = {
			    templateType    	: props.templateType ? props.templateType :"-- Select --",
			    templateName    	: props.templateName ? props.templateName : "--Select Template Name--",
			    subject         	: props.subject ? props.subject : null,
			    content         	: null,
			    contentError 		: '',
			    subjecterror 		: '',
			    templateNameerror 	: '',
			    templateTypeerror 	: '',
			    emailTemplates 		: {},
	    		notificationTemplates : {},
	    		smsTemplates 		: {},
	    		formerrors :{
			        message 		: '',
			        subject 		: '',
			       
			      },		   
	  	};
		this.updateContent 		= this.updateContent.bind(this);
	    this.onChange 			= this.onChange.bind(this);
	    this.handleChange 		= this.handleChange.bind(this);
	    this.getEmailData  		= this.getEmailData.bind(this);
	    this.deleteData     	= this.deleteData.bind(this);
	    this.getNotiData  		= this.getNotiData.bind(this);
	    this.getSmsData  		= this.getSmsData.bind(this);

	}
	// componentWillMount(){
	// 	this.getData();
	// }
	componentWillReceiveProps(nextProps){
		this.getData();
	}
	AllNotificationTemplates(){
		const id = this.state.currentNotificationId;
		var notificationTemplates = this.state.notificationTemplates;
		if(notificationTemplates && notificationTemplates.length>0){
			for(var i=0; i<notificationTemplates.length; i++){
				if(notificationTemplates[i]._id === id){
					$('.defaultNotification').css({'display':'none'});
					return [notificationTemplates[i]];
				}
			}
		}else{
			return [];
		}
		return [];
	}
	getData(){
		// console.log('getData');
		axios({
			method: 'get',
			url: '/api/masternotifications/list',
		}).then((response)=> {
			var emailTemplatesList = response.data.filter((a)=>{ return a.templateType == "Email"});	   	    
			var notificationTemplatesList = response.data.filter((a)=>{ return a.templateType == "Notification"});	   	    
			var smsTemplatesList = response.data.filter((a)=>{ return a.templateType == "SMS"});	   	    
		    this.setState({
		    	emailTemplatesList 			: emailTemplatesList,
		    	notificationTemplatesList 	: notificationTemplatesList,
		    	smsTemplatesList 			: smsTemplatesList
		    });
		    
		}).catch(function (error) {
		    
		});
	}
	AllsmsTemplates(){
		const id = this.state.currentSMSId;
		// console.log("id",id);
		var smsTemplates = this.state.smsTemplates;
		if(smsTemplates && smsTemplates.length>0){
			for(var i=0; i<smsTemplates.length; i++){
				if(smsTemplates[i]._id === id){
					$('.defaultSMS').css({'display':'none'});
					return [smsTemplates[i]];
				}
			}
		}else{
			return [];
		}
		return [];
	}
	
    getId(id){
    	axios({
			method: 'get',
			url: '/api/masternotifications/'+id,
		}).then((response)=> {
		    this.setState({
				emailTemplates : response.data
			})
		});
    }
    getEmailData(id){
	  if (id) {
	  axios({
					method: 'get',
					// url: 'http://localhost:3048/api/masternotifications/'+id,
					url: '/api/masternotifications/'+id,
				}).then((response)=> {
	    this.setState({
						emailTemplates : response.data
					})
				});
	  }
	}

	getNotiData(id){
		 if (id) {
	  axios({
					method: 'get',
					// url: 'http://localhost:3048/api/masternotifications/'+id,
					url: '/api/masternotifications/'+id,
				}).then((response)=> {
	    this.setState({
						notificationTemplates : response.data
					})
				});
	  }
	}

	getSmsData(id){
		 if (id) {
	  axios({
					method: 'get',
					// url: 'http://localhost:3048/api/masternotifications/'+id,
					url: '/api/masternotifications/'+id,
				}).then((response)=> {
	    this.setState({
						smsTemplates : response.data
					})
				});
	  }
	}


    getNotificationId(id){
    	axios({
			method: 'get',
			url: '/api/masternotifications/'+id,
		}).then((response)=> {
			this.setState({
				notificationTemplates : response.data
			})
		});
    }
    getSmsId(id){
    	axios({
			method: 'get',
			url: '/api/masternotifications/'+id,
		}).then((response)=> {
	    	this.setState({
				smsTemplates : response.data
			})
		});
    }

    deleteData(type,id){
	  if (type && id) {
		  if (type == "Email") {
		  var emailarray = [...this.state.emailTemplatesList]; // make a separate copy of the array
		  var index = emailarray.findIndex((obj)=>{return obj._id == id});
			  if (index !== -1) {
			    emailarray.splice(index, 1);
			    this.setState({emailTemplatesList: emailarray,emailTemplates:{}});
			  }
			  }else if (type == "Notification") {
			        var notificationarray = [...this.state.notificationTemplatesList]; // make a separate copy of the array
			  var notificationindex = notificationarray.findIndex((obj)=>{return obj._id == id});
					  if (notificationindex !== -1) {
					    notificationarray.splice(notificationindex, 1);
					    this.setState({notificationTemplatesList: notificationarray,notificationTemplates:{}});
					  }
			  }else if (type == "SMS") {
					        var smsarray = [...this.state.smsTemplatesList]; // make a separate copy of the array
					  var smsindex = smsarray.findIndex((obj)=>{return obj._id == id});
					  if (smsindex !== -1) {
					    smsarray.splice(smsindex, 1);
					    this.setState({smsTemplatesList: smsarray,smsTemplates:{}});
					  }
			  }
		  }
	  }

	submitTemplate(event){
		// console.log('submitTemplate');


		event.preventDefault();
		// if($("#newTemplateForm").valid() && this.state.content){
			var templateType     = this.state.templateType;
			var templateName     = this.state.templateName;
			var subject          = this.state.subject;
			var cketext          = this.state.content;

			console.log("here value of sub", this.state.subject);
			console.log("here value of content", this.state.content);

			console.log("here value of templatetype", this.state.templateType);
			console.log("here value of templateName", this.state.templateName);
			if( cketext === null || cketext == "" || templateType === '-- Select --' || templateName === '--Select Template Name--'){
				swal("Please enter mandatory fields", "", "warning");
          		// console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
			}else{	

				if(templateType === 'Email' && (subject === null || subject == ""))
				{
					swal("Please enter mandatory fields", "", "warning");
				}else{

					var formValues = {   
					"templateType"  : templateType,
					"templateName"  : templateName,
					"subject"       : subject,
					"content"       : cketext,
					}
				
						if(formValid(this.state.formerrors)){
							axios.post('/api/masternotifications', formValues)
							.then((response)=> {	
							console.log('response here of add --------------',response);	
								if(response.data.message== "Master Notification Template Name already exists")
								{
									swal("This template already exists","", "error");
									 this.setState({
									    	templateType 	: '-- Select --',
									    	templateName 	: '--Select Template Name--',
									    	subject 		: "",
									    	content 		: null
									    });   
								}else{
									swal("Template added successfully","", "success");
								}			
									axios({
										method: 'get',
										url: '/api/masternotifications/list',
									}).then((response)=> {
										console.log("here are the response--------------------", response);
										
										var emailTemplatesList = response.data.filter((a)=>{ return a.templateType == "Email"});	   	    
										var notificationTemplatesList = response.data.filter((a)=>{ return a.templateType == "Notification"});	   	    
										var smsTemplatesList = response.data.filter((a)=>{ return a.templateType == "SMS"});	   	    
									    this.setState({
									    	emailTemplatesList 			: emailTemplatesList,
									    	notificationTemplatesList 	: notificationTemplatesList,
									    	smsTemplatesList 			: smsTemplatesList
									    });

									     this.setState({
									    	templateType 	: '-- Select --',
									    	templateName 	: '--Select Template Name--',
									    	subject 		: "",
									    	content 		: null
									    },()=>{
									    	console.log("here sub", this.state.subject);
									    	console.log("here content", this.state.content);
									    });   
									}).catch(function (error) {
									    

									});
									
									$('#createNotifyModal').hide();
									$('.modal-backdrop').remove();
								})
								.catch(function (error) {
									

								// console.log(error);
								})
						}else
						{
						    swal("Please enter mandatory fields", "", "warning");
						    // console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
						}

				}
				
			}
		/*}else{
			this.setState({
				contentError: 'This field is required.',
			});
		}*/
	}


	selectType(event){
		event.preventDefault();
		const target = event.target;
		const name   = target.name;
		this.setState({
			[name]: event.target.value,
		},()=>{
			if(this.state.templateType  === 'Notification' || this.state.templateType  === 'SMS' ){
				$('.subjectRow').css({'display':'none'});
			}else if(this.state.templateType  === 'Email'){
				$('.subjectRow').css({'display':'block'});
			}
		});
		
	}
	updateContent(newContent) {
        this.setState({
            content: newContent
        })
    }
    onChange(evt){
      var newContent = evt.editor.getData();
      // console.log("onChange fired with event info: ", newContent);
      this.setState({
        content: newContent
      },()=>{
      	if(this.state.content){
      		this.setState({
      			contentError : ''
      		});
      	}else{
      		this.setState({
      			contentError : ''
      		})
      	}
      })
    }


	render(){
		const {formerrors} = this.state;
		const required = (value) => {
		  if (!value.toString().trim().length) {
		    // We can return string or jsx as the 'error' prop for the validated Component
		    return <span className="error"></span>;
		  }
		};
		 
		const email = (value) => {
		  if (!validator.isEmail(value)) {
		    return <span className="error">T{`${value} is not a valid email.`}</span>
		  }
		};
		 
		const lt = (value, props) => {
		  // get the maxLength from component's props
		  if (!value.toString().trim().length > props.maxLength) {
		    // Return jsx
		    return <span className="error">The value exceeded {props.maxLength} symbols.</span>
		  }
		};
    return(
   		<div>
      <div className="">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 secdiv">
            </div>
               <section className="">
                    <div className="">
                      <div className="">
                         <div className="">
                                    
                    <div className="">

				  	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 box-header with-border mrgntop">

						<div className="col-lg-4 col-md-3 col-sm-6 col-xs-12 UMtitle NOpadding-left">
							<h4 className="usrmgnttitle weighttitle">All Templates</h4>
						</div>
						<div className="col-lg-2 col-lg-offset-6 col-md-3 col-md-offset-8 col-sm-6 col-xs-12"  id="createmodalcl">
							<button className="addexamform clickforhideshow col-lg-12 col-md-12 col-sm-12 col-xs-12 " data-toggle="modal" data-target="#createNotifyModal" data-whatever="@mdo"><i className="fa" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Add Template</button>
						</div>								
					</div>
					<div className="modal fade modalHide col-lg-12 col-md-12 col-sm-12 col-xs-12" id="createNotifyModal" tabIndex="-1" role="dialog" aria-labelledby="createNotifyModal" aria-hidden="true">
					  	<div className="modal-dialog modal-lg" role="document">
					    	<div className="modal-content modalContent col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
					      		<div className="modal-header adminModal-header col-lg-12 col-md-12 col-sm-12 col-xs-12">
					        		<h4 className="CreateTempModal col-lg-11 col-md-11 col-sm-11 col-xs-11" id="exampleModalLabel">Create Template</h4>
					        		<div className="adminCloseCircleDiv pull-right  col-lg-1 col-md-1 col-sm-1 col-xs-1 NOpadding-left NOpadding-right">
								        <button type="button" className="adminCloseButton" data-dismiss="modal" aria-label="Close">
								          <span aria-hidden="true">&times;</span>
								        </button>
							        </div>
					      		</div>
					     		<div className="modal-body adminModal-body col-lg-12 col-md-12 col-sm-12 col-xs-12">
							        <form className="newTemplateForm col-lg-12 col-md-12 col-sm-12 col-xs-12" id="newTemplateForm">
							        <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 forgtTextInp NOpadding-left">
										<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 NOpadding-left">

											<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
												<div className="form-group">
												 	<label className="col-lg-6 col-md-6 col-sm-12 col-xs-12  label-category">Template Type <span className="astrick">*</span></label>     						
											        	<select className="form-control templateType" name="templateType" id="templateType" onChange={this.selectType.bind(this)} value={this.state.templateType}>
												      	<option value="Not Selected"> --Select-- </option>
														<option> Email </option>
														<option> Notification </option>
														<option> SMS </option>
											      	</select> 
												</div>	
											</div>
										</div>
										<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
											<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
												<div className="form-group">
												 	<label className=" label-category">Template Name <span className="astrick">*</span></label>     						
											       	<select name="templateName" id="templateName" value={this.state.templateName} onChange={this.handleChange} className="form-control templateType " required>
													  <option value="Not Selected">--Select Template Name--</option>
													  <option value="User New Registration">User New Registration</option>
													  <option value="Admin New Registration">Admin New Registration</option>
													  <option value="User Blocked">User Blocked</option>
													  <option value="User Activated">User Activated</option>
													</select>
												</div>	
											</div>
										</div>
									</div>

										<div className="row rowPadding subjectRow col-lg-12 col-md-12 col-sm-12 col-xs-12">
											<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
												<div className="form-group">
												 <label className="col-lg-12 col-md-12 col-sm-12 col-xs-12 label-category">Subject <span className="astrick">*</span></label>     						
											        <input type="text" name="subject" data-text="subject" validations={[required]} id="subject" value={this.state.subject} onChange={this.handleChange} className="subject col-lg-12 col-md-12 col-sm-12 col-xs-12 inputValid" required/>
													 {this.state.formerrors.subject &&(
							                          <span className="text-danger">{formerrors.subject}</span> 
							                        )}
												</div>	
											</div>
										</div>
										<div className="row rowPadding col-lg-12 col-md-12 col-sm-12 col-xs-12">
											<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
												<div className="form-group">
												 <label className="col-lg-12 col-md-12 col-sm-12 col-xs-12 label-category">Message <span className="astrick">*</span></label> 
												 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">  
													<CKEditor activeClass="p15" id="editor" data-text="message" className="templateName" content={this.state.content} events={{"change": this.onChange}}/>
													<label className="error">{this.state.contentError}</label>
												 	 {this.state.formerrors.message &&(
							                          <span className="text-danger">{formerrors.message}</span> 
							                        )}
												 	 
												 </div> 						
												</div>	
											</div>
										</div>
									</form>
					      		</div>
							    <div className="modal-footer adminModal-footer paddingtop-down col-lg-12 col-md-12 col-sm-12 col-xs-12">
							        <button  type="submit" onClick={this.submitTemplate.bind(this)} className="col-lg-2 col-md-3 col-sm-6 col-xs-12 btn pull-right btnSubmit outlinebox">Save Template</button>
									{/*<button type="submit" onClick={this.updateTemplate.bind(this)} className="btn pull-right col-lg-3 col-md-3 col-sm-6 col-xs-12 btnUpdate">Update Template</button>*/}
							   	</div>
					   		</div>
					  	</div>
					</div>
					<div className="box-body">
						<div className="notifTabs col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-3 col-sm-12 col-xs-12">
						  	 <ul className="nav nav-pills nav-pillss">
							    <li className="active notifTab col-lg-3 col-md-3 col-sm-4 col-xs-12">
							    	<a data-toggle="pill" href="#emailTemplates" > Email 
							    	</a>
							    </li>
							    <li className="col-lg-3 col-md-3 col-sm-3 col-xs-12 notifTab">
							    	<a data-toggle="pill" href="#smsTemplates">
							    		SMS
							    	</a>
							    </li>
							    <li className="col-lg-3 col-md-3 col-sm-4 col-xs-12 notifTab">
							    	<a data-toggle="pill" href="#notificationTemplates">
							    		In-App Notification
							    	</a>
							    </li>
							    
							</ul>
						</div>
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
	            			<h4 className=""><i className="fa fa-envelope" aria-hidden="true"></i> Template Library </h4>
	            		</div>
	            		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div className="tab-content">
							<div id="emailTemplates" className="tab-pane fade in active table-wrapper-scroll-y my-custom-scrollbar">
							  <div className="">
							  	<div className="sidertemplatebar col-lg-3 col-md-3 col-xs-12 col-sm-12">
							  		<div className="row">
										{/*{ this.AllTemplates().map( (templateData, index)=>{*/}
											<TemplateRow getId={this.getId.bind(this)} emailTemplatesList={this.state.emailTemplatesList}/>
										  {/*}) 
										}*/}
									</div>
								</div>
								<div className="saveTemplateWrapper col-lg-9 col-md-9 col-xs-12 col-sm-12">
									<div className="defaultMsg">
										<h1>Please Select The Template</h1>
										<i className="fa fa-hand-o-left" aria-hidden="true"></i>
									</div>
									{this.state.emailTemplates ? <EmailTemplateRow deleteData={this.deleteData.bind(this)} getData={this.getData.bind(this)} getEmailData={this.getEmailData.bind(this)} emailtemplateValues={this.state.emailTemplates}/> : null}
								</div> 
							  </div>
							</div>
							<div id="notificationTemplates" className="tab-pane fade">
							  <div className="">
							  	<div className="sidertemplatebar col-lg-3 col-md-3 col-xs-12 col-sm-12">
							  		<div className="row">																	
										<NotificationTemplateRow getNotificationId={this.getNotificationId.bind(this)} notificationTemplatesList={this.state.notificationTemplatesList}/>										  
									</div>
								</div>
								<div className="saveTemplateWrapper col-lg-9 col-md-9 col-xs-12 col-sm-12">
									<div className="defaultNotification">
										<h1>Please Select The Template</h1>
										<i className="fa fa-hand-o-left" aria-hidden="true"></i>
									</div>
									{this.state.notificationTemplates ? <AllNotificationTemplateRow deleteData={this.deleteData.bind(this)} getNotiData={this.getNotiData.bind(this)} notificationtemplateValues={this.state.notificationTemplates}/> : null}									  
								</div>
							  </div>
							</div>
							<div id="smsTemplates" className="tab-pane fade">
							    <div className="">
							  	<div className="sidertemplatebar col-lg-3 col-md-3 col-xs-12 col-sm-12">
							  		<div className="row">
										<SMSTemplateRow getSmsId={this.getSmsId.bind(this)} smsTemplatesList={this.state.smsTemplatesList}/>	
									</div>
								</div>
								<div className="saveTemplateWrapper col-lg-9 col-md-9 col-xs-12 col-sm-12">
									<div className="defaultSMS">
										<h1>Please Select The Template</h1>
										<i className="fa fa-hand-o-left" aria-hidden="true"></i>
									</div>
									{this.state.smsTemplates?<AllSMSTemplateRow deleteData={this.deleteData.bind(this)} getSmsData={this.getSmsData.bind(this)} smstemplateValues={this.state.smsTemplates}/>:null}									  
								</div>
							  </div>
							</div>
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
     	);
    }

}
export default ViewTemplates;