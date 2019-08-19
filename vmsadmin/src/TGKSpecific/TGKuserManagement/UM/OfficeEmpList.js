import React, { Component, PropTypes } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios 						   from 'axios';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/js/modal.js';
import swal                     	from 'sweetalert';

import './userManagement.css';
class OfficeEmpList extends Component {
    

    constructor(props) {
        super(props);
        	this.state = {
				// allPosts : [],
				
				// officename : "",
				 office : null,
				 allPostsLoc : [],
				 alldata : [],
				 allresult: [],
				 oneOffice : null,

		}

		  this.handleChange = this.handleChange.bind(this);
    }

   componentDidMount() {

      axios
      .get('/api/tgkSpecificcompanysettings/list')
      .then(
        (res)=>{
          console.log('res', res);
          const postsdata = res.data[0];
          console.log('postsdata',postsdata);
          this.setState({
            allresult : postsdata,
          },()=>{



          });

		          console.log("allresult-------------------------------------",this.state.allresult);
		     
        }
      )
      .catch((error)=>{

        console.log("error = ",error);
        // alert("Something went wrong! Please check Get URL.");
         });  
    }  

	selectOffice(event){
		var selectOffice = event.currentTarget.value;
		console.log("here selected office", selectOffice);

		this.setState({
			oneOffice : selectOffice,
		})
		var formValues =
    	{
			searchText : selectOffice,
		}
		 if(selectOffice && selectOffice.length != 0) {
					axios
				      .post('/api/users/post/officesearchValue',formValues)
				      .then(
				        (res)=>{
				          console.log('res', res);
				          const postsdata = res.data.data;
				          console.log('postsdata',postsdata);
				          this.setState({
				            alldata : postsdata,
				          });

				          console.log("alldata-------------------------------------",this.state.alldata);

				          // swal("Search successfull by "+searchText+ "","success");
				          
				        }).catch((error)=>{ 
				        	console.log(error);
				        	this.setState({
				            alldata : null,
				          });

				          console.log("alldata-------------------------------------",this.state.alldata);

				        	// swal("Sorry there is no data of "+searchText+ "","error");
				      });
	}

	}  		

  		handleChange(event){
	  const target = event.target;
	  const name   = target.name;
	  this.setState({
	  	[name]: event.target.value,
	  });
	}

    render() {
        return (
            <div> 

            	<section className="">
			        <div className="">
			          	<div className="">
	                        <div className="">
	                            <div className="box col-lg-12 col-md-12 col-xs-12 col-sm-12">
	                            	<div className=" col-lg-1 col-md-1 col-xs-1 col-sm-1 box-header with-border text-center">
                                         <h4 className="weighttitle"><a href="/"><i className="cursorpointer fa fa-chevron-circle-left"></i></a></h4>
                                    </div>
                                    <div className=" col-lg-11 col-md-11 col-xs-11 col-sm-11 box-header with-border">
                                         <h4 className="weighttitle">Team Hierarchy</h4>
                                    </div>
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 addRolesInWrap">

										<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

												<div className=" col-lg-6 col-md-6 col-xs-12 col-sm-12 inputContent" >
                                                              <label className="formLable">Office Location <label className="requiredsign">*</label></label>
                                                                  <span className="blocking-span col-lg-12 col-md-12 col-xs-12 col-sm-12 emailfixdomain">
                                                                    <select className="form-control" value={this.state.officeid} onChange={this.selectOffice.bind(this)} ref ="office" id="office" name="office" data-text="office">
                                                                        <option  hidden> --select-- </option>

                                                                           { this.state.allresult != null && this.state.allresult.companyLocationsInfo !=null ?
                                                                          this.state.allresult.companyLocationsInfo.map( (locData, index)=>{
                                                                          console.log('locData',locData);
                                                                           return( 

	                                                                                <option value={locData.officeLocationid ? locData.officeLocationid : null } > {locData.officeLocationid ? locData.officeLocationid : null}  </option>


																						
                                                                                   )}
                                                                           )
                                                                          :
                                                                          null

                                                                        }
                                                                    </select>

                                                                  </span>
                                                           </div>

										</div>
											{
												this.state.oneOffice != null ?
												this.state.alldata != null ?
												

													<div className="table-responsive topmr40 col-lg-12 col-md-12 col-sm-12 col-xs-12">
														<table className="table iAssureITtable-bordered table-striped table-hover">
															<thead className="tempTableHeader">
																<tr className="">
																	<th className="umDynamicHeader srpadd textAlignCenter"> Full Name </th>
																	<th className="umDynamicHeader srpadd textAlignCenter"> Mobile No </th>
																	<th className="umDynamicHeader srpadd textAlignCenter"> Email ID </th>
																	<th className="umDynamicHeader srpadd textAlignCenter"> Role </th>
																</tr>
															</thead>
															<tbody>
															
															{this.state.alldata.map( (roleData, index)=>{
													
												   		return( 
																<tr>
																	<td className="textAlignLeft">{roleData.profile && roleData.profile.fullName ? roleData.profile.fullName : "-" }</td>	
																	<td className="textAlignLeft">{ roleData.profile && roleData.profile.mobileNumber ? roleData.profile.mobileNumber : "-" }</td>	
																	<td className="textAlignLeft">{roleData.profile && roleData.profile.emailId  ? roleData.profile.emailId : "-" }</td>	
																	<td className="textAlignLeft">{ roleData.roles[0] ? roleData.roles[0] : "-" }</td>		
																
																

																</tr>
																

															);
															
															})
														}
															
															</tbody>
														</table>
													</div>


												:

												<div className="centernote col-lg-12"> No data available </div>


												:
												<div className="centernote col-lg-12"> Please select Office Location  </div>

										}

									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
            </div>
        );
    }
}

export default OfficeEmpList;
