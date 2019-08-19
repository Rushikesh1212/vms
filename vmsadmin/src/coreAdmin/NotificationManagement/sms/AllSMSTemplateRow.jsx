import React, { Component }     from 'react';
import EditNotificationModal    from '../EditNotificationModal.jsx';
import axios 					from 'axios';
import swal                     	from 'sweetalert';

export default class AllSMSTemplateRow extends Component{

	constructor(props) {
		super(props);
		this.state = {
			templateType    : '',
			templateName    : '',
			content         : '',
		};
      	this.editSMSModal = this.editSMSModal.bind(this);
      	this.smsGetData    = this.smsGetData.bind(this);
    }

    editSMSModal(event){
		event.preventDefault();
		var id = event.target.id;
		console.log('id',id);
		axios.get('/api/masternotifications/'+id)
		.then((response)=> {
	    	console.log('delete response',response);
	    	
	    	this.setState({
				'templateType' 		: response.data.templateType,
				'templateName'		: response.data.templateName,
				'content'			: response.data.content,
			});
		}).catch((error)=> {
		    // handle error
		    console.log(error);
		});
	}

	deleteTemplate(event){
		event.preventDefault();
		var id = event.target.id;
		console.log('id',id);
		axios.delete('/api/masternotifications/'+id)
		.then((response)=> {
			swal("Template deleted successfully","", "success");
	    	console.log('delete response',response);
	    	console.log("here response message",response.data.message);
	    	if(response.data.message=="Master notification deleted")
	    	{
	    	this.props.deleteData("SMS",id);
    		}
    		
		}).catch((error)=> {
		    // handle error
		    console.log(error);
		});
	}

	smsGetData =(id)=>{
    this.props.getSmsData(id);
	}


	render() {
		var text= this.props.smstemplateValues.content ? this.props.smstemplateValues.content : 'abc';
		var regex = new RegExp(/(<([^>]+)>)/ig);
		text = text.replace(regex, '');
		// console.log('smstemplateValues',this.props.smstemplateValues);
		if(this.props.smstemplateValues.content){
			
	        return (
	       		<div className="contentBox col-lg-12">
		       		<div className="pull-right actionBtn">
		       			<div className="dropdown ">
						  	<button className="dropbtn"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></button>
					  		<div className="dropdown-content">
								<span className="editTemp">
									<div className="deleteNotif" data-toggle="modal" onClick={this.editSMSModal.bind(this)} data-target={"#editNotifyModal-"+this.props.smstemplateValues._id} id={this.props.smstemplateValues._id}>
										<i className="fa fa-pencil editPencil" aria-hidden="true" id={this.props.smstemplateValues._id}></i>
										<span className="">&nbsp;&nbsp;&nbsp; Edit</span>
									</div>
								</span>
								
									<div className="deleteNotif" data-toggle="modal" data-target={`#${this.props.smstemplateValues._id}-rm`} id={this.props.smstemplateValues._id}>
										<span>
											<i className="fa fa-trash deleteEM" aria-hidden="true" id={this.props.smstemplateValues._id}></i>
											<span>&nbsp;&nbsp;&nbsp; Delete</span>
										</span>
									</div>
							
							</div>
						</div>

					</div>
					<EditNotificationModal emailNot={this.props.smstemplateValues._id} smsGetData={this.smsGetData.bind(this)} data={this.props.smstemplateValues}/>
					<div className="modal fade col-lg-12 col-md-12 col-sm-12 col-xs-12" id={`${this.props.smstemplateValues._id}-rm`}  role="dialog">
	                    <div className=" modal-dialog adminModal adminModal-dialog">
	                         <div className="modal-content adminModal-content col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
	                                <div className="modal-header adminModal-header col-lg-12 col-md-12 col-sm-12 col-xs-12">
						        		<h4 className="CreateTempModal col-lg-11 col-md-11 col-sm-11 col-xs-11" id="exampleModalLabel"></h4>
						        		<div className="adminCloseCircleDiv pull-right  col-lg-1 col-md-1 col-sm-1 col-xs-1 NOpadding-left NOpadding-right">
									        <button type="button" className="adminCloseButton" data-dismiss="modal" aria-label="Close">
									          <span aria-hidden="true">&times;</span>
									        </button>
								        </div>
						      		</div>
	                              <div className="modal-body adminModal-body col-lg-12 col-md-12 col-sm-12 col-xs-12">

	                                 <h4 className="blackFont textAlignCenter col-lg-12 col-md-12 col-sm-12 col-xs-12 examDeleteFont">Are you sure you want to delete this template?</h4>
	                              </div>
	                              
	                              <div className="modal-footer adminModal-footer col-lg-12 col-md-12 col-sm-12 col-xs-12">
	                                   <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
	                                        <button type="button" className="btn adminCancel-btn col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-8 col-sm-offset-1 col-xs-10 col-xs-offset-1" data-dismiss="modal">CANCEL</button>
	                                   </div>
	                                   <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
	                                        <button id={this.props.smstemplateValues._id} onClick={this.deleteTemplate.bind(this)} type="button" className="btn examDelete-btn col-lg-4 col-lg-offset-7 col-md-4 col-md-offset-7 col-sm-8 col-sm-offset-3 col-xs-10 col-xs-offset-1" data-dismiss="modal">DELETE</button>
	                                   </div>
	                              </div>
	                         </div>
	                    </div>
	               </div>
					<div className="inputrow">
						<div className="col-lg-10 col-md-12 col-sm-12 col-xs-12">
							<div className="form-group">
								<label className="col-lg-12 col-md-12 col-sm-12 col-xs-12 label-category">Message:</label>     						
								 <p  dangerouslySetInnerHTML={{ __html:text}} className="textAreaBox"></p>
							</div>	
						</div>
					</div>
				</div>
		    );
		}else{
			return(<div></div>);
		}
	} 
}