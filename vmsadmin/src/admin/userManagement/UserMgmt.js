import React, { Component } from 'react';
import CreateUser 			from './CreateUser.js';
import axios                from 'axios';
import _                    from 'underscore';
import swal                 from 'sweetalert';
import $ 					from 'jquery';
import './userManagement.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/js/modal.js';

class UserMgmt extends Component {
	constructor(props){
		super(props);
		this.state = {
		 	
		}
	}

	componentDidMount(){

	}
	getData(startRange, limitRange){    
		var data = {
			"startRange"        : startRange,
            "limitRange"        : limitRange, 
		}    
       axios.post('/api/users/post/userslist', data)
        .then( (res)=>{  
        	var tableData = res.data.map((a, i)=>{
				return {
					_id 			: a._id,
					fullName        : a.fullName ? a.fullName : "-",
	                emailId    		: a.emailId ? a.emailId : "-",
	                mobileNumber    : a.mobileNumber ? a.mobileNumber : "-", 
	                status        	: a.status ? a.status : "-",	
	                roles 			: a.roles ? a.roles : "-",
	                checked        : false,
				}
			})
        	// console.log('res============', res.data);
          	this.setState({
              completeDataCount : res.data.length,
              tableData 		: tableData,          
            },()=>{
            })
        })
	    .catch((error)=>{
	      // console.log("error = ",error);
	      alert("Something went wrong! Please check Get URL.");
	    }); 
    }

	closeModal(event){
		 $('#deleteModal').removeClass("in");
		 $('#deleteModal').css("display","none");
	}

	render(){
	var adminRolesListDataList = this.state.adminRolesListData;
	    return(
			<div className="modal-bodyuser">
		        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 box-header with-border nopaddingum2">
					<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12  paddingright">
						<h4 className="usrmgnttitle weighttitle">User Management</h4>
					</div>
					<div className="col-lg-2 col-md-3 col-sm-12 col-xs-12 "  id="createmodalcl">
						<button type="button" className="btn col-lg-12 col-md-12 col-sm-12 col-xs-12 addexamform userbtn clickforhideshow" data-toggle="modal" data-target="#CreateUserModal">Add User</button>
						<CreateUser getData={this.getData.bind(this)}/>
					</div>
				</div>
		    </div>
	      );
	    }
}
export default UserMgmt;