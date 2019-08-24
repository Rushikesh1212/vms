import React, { Component } from 'react';
import CreateVoter 			    from './CreateVoter.js';
import axios                from 'axios';
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

	render(){
	const data = this.state.allPosts;
      console.log(data);
	const columns = [{
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
export default VoterMgmt;