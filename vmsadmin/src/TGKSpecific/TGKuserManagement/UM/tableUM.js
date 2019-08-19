<table id="listOfUsersDwnld" className="table iAssureITtable-bordered table-striped table-hover" >
												<thead className="tempTableHeader">
													<tr className="">
														<th className="umDynamicHeader srpadd">
															<input type="checkbox" className="allSelector col-lg-1 col-md-1 col-sm-3 col-xs-1 umchksett" name="allSelector"/> 
								
														</th>
														
														<th className="umDynamicHeader srpadd ">
															<span className="" >User Name&nbsp;&nbsp;
																<span className="fa fa-caret-up custom  namesortup"  id="sortup" />
																<span className="fa fa-caret-down custom namesortdown" id="sortdown"/>   
															</span>
														</th>
														<th className="umDynamicHeader srpadd "> Email&nbsp;&nbsp;
															<span className="fa fa-caret-up custom  mailsortup " id="mailsortup"/>
															<span className="fa fa-caret-down custom mailsortdown" id="mailsortdown"/> 	
														</th>
				
														<th className="umDynamicHeader srpadd">Mobile Number

														</th>
														<th className="umDynamicHeader srpadd ">Roles </th>
														<th className="umDynamicHeader srpadd ">Status</th>
														
														<th className="umDynamicHeader srpadd ">  Action </th>				
													</tr>
												</thead>
											{ this.state.allPosts 
											?
												this.state.allPosts.length>0 
												? 												
												<tbody className="noLRPad ">
														{ this.state.allPosts.map( (usersData, index)=>{
																console.log("allPosts",this.state.allPosts);
																return(
																<tr className="" key={index}>		
																	<td className="">
																		<input type="checkbox" ref="userCheckbox" name="userCheckbox" className="userCheckbox" value={usersData._id} /> 
																	
																	</td>
																	
																	<td className="">{usersData.profile ? usersData.profile.fullName : null}
																	</td>	
																	<td className=""> 
																		{usersData.username}
																	</td>	
																	
																	<td className="">{usersData.profile ? usersData.profile.mobNumber : null}</td>	
																	<td className="">{usersData.roles}</td>
																	
															
																		
																	{/*<td className=" col-lg-2 col-md-2 col-sm-2 col-xs-2"> {this.lastLogin()} </td>	*/}
																	<td className=""> 
																		{/*<div className="activeStat">{this.onlineStatus()}</div>	*/}


																		{  usersData.profile ?
																			usersData.profile.status == "Active" ?
																				<div className="activeStat" title="Active user"></div>

																			:
																				<div className="inactiveStat" title="Blocked user"></div>
																			:
																			null
																		}
																	</td>	
																	{/*<td className=""> */}
																	<td className="">
																		<i className="fa fa-key" aria-hidden="true" title="Change Password " data-toggle="modal" data-target={"#RestpwdModal-"+usersData._id}></i> &nbsp; &nbsp;
																		<i className="fa fa-pencil" aria-hidden="true" title="Edit Profile" id={usersData._id}></i> &nbsp; &nbsp;
																		<i className="fa fa-trash redFont" aria-hidden="true" title="Delete User " data-toggle="modal" data-target={"#showDeleteModal-"+usersData._id}></i>
																	</td>
																	{/*</td>	*/}

						
									                                <div className="modal fade col-lg-12 col-md-12 col-sm-12 col-xs-12" id={"showDeleteModal-"+usersData._id} role="dialog">
	                                                                <div className=" modal-dialog adminModal adminModal-dialog col-lg-12 col-md-12 col-sm-12 col-xs-12">
	                                                                  <div className="modal-content adminModal-content col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12 noPadding">
	                                                                    <div className="modal-header adminModal-header col-lg-12 col-md-12 col-sm-12 col-xs-12">
	                                                                    <div className="adminCloseCircleDiv pull-right  col-lg-1 col-lg-offset-11 col-md-1 col-md-offset-11 col-sm-1 col-sm-offset-11 col-xs-12 NOpadding-left NOpadding-right">
	                                                                      <button type="button" className="adminCloseButton" data-dismiss="modal" data-target={"showDeleteModal-"+usersData._id}>&times;</button>
	                                                                    </div>
	                                                                   
	                                                                
	                                                                    </div>
	                                                                    <div className="modal-body adminModal-body col-lg-12 col-md-12 col-sm-12 col-xs-12">
	                                                                      <h4 className="blackLightFont textAlignCenter col-lg-12 col-md-12 col-sm-12 col-xs-12">Are you sure you want to delete this User?</h4>
	                                                                    </div>
	                                                                    
	                                                                    <div className="modal-footer adminModal-footer col-lg-12 col-md-12 col-sm-12 col-xs-12">
	                                                                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
	                                                                        <button type="button" className="btn adminCancel-btn col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-8 col-sm-offset-1 col-xs-10 col-xs-offset-1" data-dismiss="modal">CANCEL</button>
	                                                                      </div>
	                                                                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
	                                                                        <button id={usersData._id} type="button" className="btn adminFinish-btn col-lg-4 col-lg-offset-7 col-md-4 col-md-offset-7 col-sm-8 col-sm-offset-3 col-xs-10 col-xs-offset-1" data-dismiss="modal">DELETE</button>
	                                                                      </div>
	                                                                    </div>
	                                                                  </div>
	                                                                </div>
	                                                            </div>
													</tr>)


													
														}) 
													
													}
														
												</tbody>
												:
												<tbody>
							                      <tr className="trAdmin">
							                        <td colSpan="9" className="noTempData">No Record Found!</td>
							                      </tr>
							                    </tbody> 
													
											:
											<tbody>
												<td colSpan="9" >
													{/*<td colSpan="9" className="ntdiaplay">Nothing to display.</td>*/}
													<div className="loaderimgcent col-lg-12 col-md-12  "><img src="/images/loadersglms.gif" className="loaderimgcent" alt=""/></div>

												</td>
											</tbody>
											
											}
										</table>






										{this.state.showMore == true ?
											<button onClick={this.showMore.bind(this)} className="col-lg-2 col-lg-offset-5 col-md-2 col-md-offset-5 col-sm-4 col-sm-offset-3 col-xs-4 col-xs-offset-3 btn showMore marginTop17">Show More</button>
											:
											null
					                    }