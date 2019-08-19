import React, { Component }       from 'react';
import {browserHistory} 		  from 'react-router';
import swal                       from 'sweetalert';
import $ 						  from 'jquery';
import axios 					  from 'axios';
// import CKEditor 				  from "react-ckeditor-component";
import InputMask                 from 'react-input-mask';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/modal.js';


class UsereditModal extends Component{

	constructor(props){
		super(props);
		this.state = {
	    'firstname' 		: props.data ? props.data.firstname : '',
		'lastname'			: props.data ? props.data.lastname : '',
		'email'				: props.data ? props.data.email : '',
		'mobNumber'			: props.data ? props.data.mobNumber : '',
	   	'optionA'			: '',
	   	'messageError' 		: '',
	  };

	    this.handleChange = this.handleChange.bind(this);
	    this.onChange 		= this.onChange.bind(this);
	}
	componentWillReceiveProps(nextProps){
		this.setState({
			'firstname' 		: nextProps.data.firstname,
			'lastname'			: nextProps.data.lastname,
			'email'				: nextProps.data.email,
			'mobNumber'			: nextProps.data.mobNumber,
		});

		// console.log("nextProps",nextProps);
	}

	handleChange(event){
	  const target = event.target;
	  const name   = target.name;
	  this.setState({
	  	[name]: event.target.value,
	  });
	}

	// componentDidMount(){

		// if ( !$("#adminSide").length>0 && !$('body').hasClass('adminSide')) {
	 //      var adminSide = document.createElement("script");
	 //      adminSide.type="text/javascript";
	 //      adminSide.src = "/js/adminSide.js";
	 //      $("body").append(adminSide);
	 //    }
	 //    $("html,body").scrollTop(0);	

	 //    $.validator.addMethod("regxsubject", function(value, element, arg){          
	 //    	return arg !== value;        
	 //    }, "Please select one subject name");


	 //    $.validator.addMethod("regxtemplateName", function(value, element, arg){          
	 //    	return arg !== value;        
	 //    }, "Please select template name");

	 //    $.validator.addMethod("regxtemplateType", function(value, element, arg){          
	 //    	return arg !== value;        
	 //    }, "Please select template type");


    
	 //    jQuery.validator.setDefaults({
	 //        debug: true,
	 //        success: "valid"
	 //    });
	 //    $("#editModal").validate({
	 //    	event : 'blur',
	 //        rules: {
	 //          subject:{              
	 //          	required:true,              
	 //          	regxsubject: "Not Selected"            
	 //          },
	 //          templateType:{              
	 //          	required:true,              
	 //          	regxtemplateType: "-- Select --"            
	 //          },
	 //          templateName:{              
	 //          	required:true,              
	 //          	regxtemplateName: "--Select Template Name--"            
	 //          },	          
	 //        }, 
	 //    });

	// }

	deleteEmailTemplate(event){
		// event.preventDefault();
		// var tempId = $(event.target).attr('id');
		// // // console.log('tempId: ',tempId);
		// Meteor.call('removeTemplate',tempId,function(error,result){
		// 	if(error){
		// 		// console.log(error);
		// 	}else{
		// 	   swal({
	 //                title: 'Deleted successfully!',
	 //                text: "",
	 //                type: 'success',
	 //                showCancelButton: false,
	 //                confirmButtonColor: '#666',
	 //                confirmButtonText: 'Ok'});
		// 	}
		// })
	}

	updateNotificationEmail(event){
		event.preventDefault();

	    if(this.state.content){
	    	var editId 		 	= this.props.userNot;
			var firstname     	= this.state.firstname;
			var lastname     	= this.state.lastname;
			var email          	= this.state.email;
			var mobNumber       = this.state.mobNumber;
			if(firstname === '' || lastname === ''){
				swal({
					title: 'Please fill in all the required fields',
					text:"Please fill in all the required fields",
					type: 'success',
					showCancelButton: false,
					confirmButtonColor: '#666',
					confirmButtonText: 'Ok'
				});
			}else{	
				var formValues = {
					"usermasterID": "5cfbfc2eb1514e2ec11f20fd",
					"firstname": "abc",
					"lastname": "pqr",
					"email": "abc@gmail.com",
					"mobNumber":"9898989898"
				}
				
				axios.patch('/api/masternotifications/'+editId, formValues)
				.then((response)=> {					
					
					console.log('response --==',response);
				})
				.catch(function (error) {
				console.log('error============',error);
				})
				.finally(function () {
				// always executed
				});
			}
		}else{
			this.setState({
				contentError: 'This field is required.',
			});
		}
    	// }
	}
	selectType(event){
		event.preventDefault();
		const target = event.target;
	  const name   = target.name;
	  this.setState({
	  	[name]: event.target.value,
	  });
		// if(this.refs.templateType.value  == 'Notification' || this.refs.templateType.value  == 'SMS' ){
		// 	$('.subjectRow').css({'display':'none'});
		// }else if(this.refs.templateType.value  == 'Email'){
		// 	$('.subjectRow').css({'display':'block'});
		// }
	}
	
	updateContent(newContent) {
        this.setState({
            firstname: newContent
        })
    }
    onChange(evt){
      var newContent = evt.editor.getData();
      console.log(newContent);
      this.setState({
        firstname: newContent
      },()=>{
      	if(this.state.content){
      		this.setState({
      			messageError : ''
      		});
      	}else{
      		this.setState({
      			messageError : 'This field is required'
      		});
      	}
      });
    }


	render() {
		if(this.props.userNot){
	        return (
	        		<div>
	        		{console.log("edit modal",this.props.userNot)}
					{/*<div className="modal fade modalHide" id={"editNotifyModal-"+this.props.userNot} role="dialog">*/}
					  	<div className="modal fade modalHide"  id={"editNotifyModal-"+this.props.userNot}  role="dialog" >
                          <div className="modal-dialog modal-lg " role="document">
                            <div className="modal-content modalContent ummodallftmg ummodalmfdrt col-lg-12 ">
                              <div className="modal-header userHeader">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                                <h4 className="modal-title " id="exampleModalLabel">Add New User</h4>
                              </div>
                             <div className="modal-body">
                              <div className="hideModal">
                                    <div className="">
                                      <div className="">
                                          <div className="">                                        
                                            <section className="">                                          
                                                    <div className="box-body textAlignLeft">
                                                        <div className="">

                                                    <form id="signUpUser">
                                                    <div className="signuppp col-lg-12 col-md-12 col-sm-12 col-xs-12 createusr ">

                                                     <div className=" col-lg-6 col-md-6 col-xs-6 col-sm-6 inputContent">
                                                          <label className="formLable ">First Name <label className="requiredsign">*</label></label>
                                                          <span className="blocking-span">
                                                           <div className="input-group inputBox-main  new_inputbx " >
                                                             <div className="input-group-addon remove_brdr inputIcon">
                                                             <i className="fa fa-user-circle fa "></i>
                                                            </div>  
                                                              <input type="text" style={{textTransform:'capitalize'}}
                                                               className="form-control UMname inputText form-control  has-content"
                                                                id="firstname" ref="firstname" name="firstname" placeholder="First Name"/>
                                                           </div>   
                                                          </span>
                                                      </div>
                                                      <div className=" col-lg-6 col-md-6 col-xs-6 col-sm-6 inputContent">
                                                          <label className="formLable">Last Name <label className="requiredsign">*</label></label>
                                                          <span className="blocking-span row">
                                                          <div className="input-group inputBox-main  new_inputbx " >
                                                             <div className="input-group-addon remove_brdr inputIcon">
                                                              <i className="fa fa-user-circle fa "></i>
                                                            </div>  
                                                             <input type="text"className="form-control UMname inputText form-control  has-content" 
                                                             id="lastname" ref="lastname" name="lastname" placeholder="Last Name" />
                                                          </div>   
                                                          </span>
                                                      </div>
                                                    </div>
                                                    <div className="signuppp col-lg-12 col-md-12 col-sm-12 col-xs-12 createusr">
                                                     <div className=" col-lg-6 col-md-6 col-xs-12 col-sm-12 inputContent">
                                                       <label className="formLable">Email ID <label className="requiredsign">*</label></label>
                                                          <span className="blocking-span col-lg-12 col-md-12 col-xs-12 col-sm-12 emailfixdomain">
                                                          <div className="input-group inputBox-main   " >
                                                           <div className="input-group-addon remove_brdr inputIcon">
                                                            <i className="fa fa-envelope-square"></i>
                                                          </div> 

                                                            <input type="text" className="formFloatingLabels form-control  newinputbox" 
                                                            ref="signupEmail" name="signupEmail" id="signupEmail" placeholder="Email"/>
                                                         </div>   
                                                          </span>
                                                      </div>

                                                      <div className=" col-lg-6 col-md-6 col-xs-12 col-sm-6 inputContent">
                                                          <label className="formLable">Mobile Number <label className="requiredsign">*</label></label>
                                                          <span className="blocking-span row">
                                                           <div className="input-group inputBox-main  new_inputbx " >
                                                             <div className="input-group-addon remove_brdr inputIcon">
                                                              <i className="fa fa-mobile"></i>
                                                             </div>  
                                                             <InputMask mask="99999-99999" pattern="^(0|[1-9][0-9-]*)$" 
                                                               className= "form-control UMname inputText form-control  has-content"
                                                                ref="mobNumber" name="mobNumber" id="mobNumber" placeholder="Mobile No"/>
                                                           </div>   
                                                          </span>
                                                      </div>
                                                    </div>
                                                    <div className=" col-lg-12 col-md-12 col-xs-12 col-sm-12 ">
                                                      <input className="col-lg-2 col-md-2 col-xs-12 col-sm-12 col-xs-12 pull-right btn btnSubmit topMargin outlinebox" type="submit" value="Register" />
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
		}else{
			return (<div></div>);
		}
	} 

}
export default UsereditModal;