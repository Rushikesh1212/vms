import React, { Component } from 'react';
import { render } from 'react-dom';
// import TrackerReact from 'meteor/ultimatejs:tracker-react';

// import { UserManagementMaster }  from '/imports/admin/userManagement/UM/UserManagementMaster.js';

export default class UMadd_role extends Component {

	editRole(event){/*
	  event.preventDefault();
      var roleId    = event.target.id;
      var roleName  = $("input[name="+roleId+"-Namerole]").val();

      Meteor.call('updaterole', roleId, roleName,
                function(error, result) { 
                    if (error) {
                        // console.log ( error ); 
                    } //info about what went wrong 
                    else {
	        			swal({
	        				title: 'asf',
		                	text: "Role is modified.",
	        			});

                    }//the _id of new object if successful
                }

// 
       */ /*);*/	

	}
/*
	delRole(event){
	  var _id = $(event.target).attr('id');
	  swal({
			  title             : 'Are you sure?',
			  text              : 'You will not be able to recover this Record!',
			  type              : 'warning',
			  showCancelButton  : true,
			  closeOnConfirm    : false,
			  confirmButtonColor: '#dd6b55',
			  cancelButtonColor : '#d44',
			  confirmButtonText : 'Yes, Delete it!',
			  cancelButtonText  : 'No, Keep it',
			  closeOnConfirm    : false
			},  ()=>  {
				Meteor.call('deleteRole',roleID,(error,result)=>{
					if(error){

					}else{
							swal({
					                title: '',
					                text: "Role deleted",
					                type: 'success',
					                showCancelButton: false,
					                confirmButtonColor: '#666',
					                confirmButtonText: 'Ok'
					        });
					}
				});
  			
  		});


	}*/
	delRole(event){/*
	  event.preventDefault();
	  Meteor.call('deleteRole', event.currentTarget.id,
                (error, result)=> { 
                    if (error) {
                        // console.log ( error ); 
                    }else{
                    	swal({
		                title: 'asf',
		                text: "Deleted successfully!",
		            });
		            	
                    }
                    
                });	

	*/}

	handleChange(event){/*
	    this.setState({value: event.target.value});
	*/}

	 handleSubmit(event) {/*
	    event.preventDefault();
	*/}

	constructor(props) {
	  super(props);
	  this.state = {/*
	    roleName: this.props.roleDataVales.name,
	  */};

/*    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
*/	}

	render(){

       return(
				<tr>
					<td className="textAlignLeft"></td>			
					<td className="roleTextCenter"> 						
						<i className="fa fa-pencil editTcon editIcon" data-toggle="modal" data-target="#edit" title="Edit Department Name" ></i>
						&nbsp;&nbsp;
						<i className="deleteIcon roleDelete  redFont fa fa-trash delIcon detailsCenter"  id="" title="Edit Department Name" ></i>
					</td>		
					<div id="edit" className="modal fade col-lg-12 col-md-12 col-sm-12 col-xs-12" role="dialog">
					  <div className="modal-dialog adminModal adminModal-dialog col-lg-12 col-md-12 col-sm-12 col-xs-12" role="document">
					    <div className="modal-content adminModal-content col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12 noPadding">
					      <div className="modal-header adminModal-header col-lg-12 col-md-12 col-sm-12 col-xs-12">
					        <h4 className="WightFont textAlignCenter col-lg-11 col-md-11 col-sm-11 col-xs-11" id="exampleModalLabel1">Edit Role</h4>
					        <div className="adminCloseCircleDiv pull-right  col-lg-1 col-md-1 col-sm-1 col-xs-12 NOpadding-left NOpadding-right">
                              	<button type="button" className="adminCloseButton" data-dismiss="modal" data-target="edit">&times;</button>
                            </div>
					      </div>
					      <div className="modal-body addressModal-body col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
								<form className="editroles">
									<div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-xs-12 col-sm-12 paddingLeftz addRoleMarginBtm">
										<label className="textAlignLeft">Role Name</label>
										<input type="text" ref="roleName" className="form-control rolesField" required/>
									</div>
									<div className="modal-footer adminModal-footer col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<div className="form-group col-lg-4 col-lg-offset-8 col-md-4 col-md-offset-8 col-xs-12 col-sm-12">
											<label>&nbsp;</label>
										    <button type="button" id="" className="btn adminFinish-btn" data-dismiss="modal">Edit Role</button>
										</div>
									</div>
								</form>
					      </div>
					    </div>

					  </div>
					</div>
				</tr>
	    );

	} 

}