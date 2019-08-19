import React, { Component } from 'react';
import $ 					from 'jquery';
import axios 				from 'axios';

export default class SMSTemplateRow extends Component{
	constructor(props){
		super(props);
		this.state = {
			smsTemplates : []
		}
	}
	getsmsTemplate(event){
		event.preventDefault();
		$('.defaultSMS').css({'display':'none'});
		$('.inputrow').css({'display':'block'});
		$('.actionBtn').css({'display':'block'});
		
		if($(window).width() > 780){
			$('.tempCategory').removeClass('tempactive');
			// $(event.target).addClass('tempactive');
			$(event.target).closest( "li" ).addClass('tempactive');
		}

		var id = event.target.id;
		// Session.set("smstemplateId",id);
		this.props.getSmsId(id);
		
		if($(window).width() < 780){
			$('.showTemplate').css({'display':'none'});
			if ($(".templateLibraryHeader").text("Hide Template Library")){			
		      $(".templateLibraryHeader").text("Expand Template Library");
		    }
		}
	}
	render() {
		return(
			<ul className="templateLibrary">
				<div className="showTemplate">
				{
					this.props.smsTemplatesList && this.props.smsTemplatesList.length>0?
						this.props.smsTemplatesList.map((templateData, index)=>{
						return (
							<li key={index} onClick={this.getsmsTemplate.bind(this)} className="tempCategory col-lg-12" id={templateData._id}>
								<span className="col-lg-2 NOpadding">
									<i className="fa fa-book iconCss " aria-hidden="true"></i>
								</span>  
								<span className="col-lg-10 emailSpan" id={templateData._id}>
									{templateData.templateName}
								</span>
							</li>
						);
					})
					:
					<li className="tempCategory col-lg-12">
						<span className="col-lg-2 NOpadding">
							<i className="fa fa-book iconCss " aria-hidden="true"></i>
						</span>  
						<span className="col-lg-10 emailSpan">
							No Template Added
						</span>
					</li>
				}
				</div>	
			</ul>
		);
	} 
}