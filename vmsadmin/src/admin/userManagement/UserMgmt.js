import React, { Component } from 'react';
import CreateUser 			from './CreateUser.js';
import axios                from 'axios';
import _                    from 'underscore';
import swal                 from 'sweetalert';
import $ 					from 'jquery';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import './userManagement.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/js/modal.js';

class UserMgmt extends Component {
	constructor(props){
		super(props);
		this.state = {
     		 allPosts          : [],
		}
	}

componentDidMount(){	
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
      }]
	var adminRolesListDataList = this.state.adminRolesListData;
	  return(
			<div className="modal-bodyuser">
		    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 box-header with-border nopaddingum2">
					<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 paddingright">
						<h4 className="usrmgnttitle weighttitle">To add the new user, click on <i>'Add New User'</i> button:&nbsp;<span class="glyphicon glyphicon-arrow-right"></span></h4>
					</div>
					<div className="col-lg-2 col-md-3 col-sm-12 col-xs-12 "  id="createmodalcl">
						<button type="button" className="btn btn-primary col-lg-12 col-md-12 col-sm-12 col-xs-12" data-toggle="modal" data-target="#userModal">Add New User</button>
						<CreateUser userList={this.userList.bind(this)}/>
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
  						  />
  		  </div>
      </div>
	  );
	}
}
export default UserMgmt;