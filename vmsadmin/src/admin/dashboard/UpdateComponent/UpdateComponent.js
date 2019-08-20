import React,{Component} from 'react';
// import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Chart from '../chart/Chart.js';

import './UpdateComponent.css';

// import {StudentMaster} from '/imports/admin/forms/student/api/studentMaster.js';
// import { FranchiseDetails }  from '/imports/admin/companySetting/api/CompanySettingMaster.js';
// import { FlowRouter }   from 'meteor/ostrio:flow-router-extra';

export default class UpdateComponent extends Component{
  
  constructor(props) {
   super(props);
    this.state = {}
  }
   
  componentDidMount(){
 
}

    
  render(){
    return(

    <div className="col-lg-12"> 
      <div className="col-lg-12 emptybox1"></div>
        <div className="col-lg-12 box1">
          <div className="row">
            <div className="box1a col-lg-12">
              <div className="row">
                <div className="col-lg-6  ">
                  <div ><h4>Monthly Recap Report</h4></div>   
                </div>
              </div>
              
            </div>
            <div className="box1b col-lg-12">
              <div className="row">
                <div className="col-lg-12 emptybox2"></div>
                <div className="col-lg-8 ">
                    <div className="text-center" ><strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong></div>
                  <div className="col-lg-12 ">
                    <div className="row">
                    <img src="/images/g1.png" width="100%"/>
                    </div>
                  </div>        
                </div>
                  <div className="col-lg-4 ">
                    <div className="text-center" ><strong>Goal Completion</strong></div>
                    <div className="col-lg-12 emptybox2"></div>
                    <div className="col-lg-12">
                        <div className="row">
                          <div className="pull-left">Add Products to Cart</div>
                          <div className="pull-right"><b>160</b>/200</div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                          <div className="row">
                            <div className="progress ">
                                      <div className="progress-bar pbar1" ></div>
                                      </div>
                          </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="row">
                          <div className="pull-left">Complete Purchase</div>
                          <div className="pull-right"><b>310</b>/400</div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                          <div className="row">
                            <div className="progress ">
                                      <div className="progress-bar pbar2" ></div>
                                      </div>
                          </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="row">
                          <div className="pull-left">Visit Premium Page</div>
                          <div className="pull-right"><b>480</b>/800</div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                          <div className="row">
                            <div className="progress ">
                                      <div className="progress-bar pbar3" ></div>
                                      </div>
                          </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="row">
                          <div className="pull-left">Send Inquiries</div>
                          <div className="pull-right"><b>250</b>/500</div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                          <div className="row">
                            <div className="progress ">
                                      <div className="progress-bar pbar4" ></div>
                                      </div>
                          </div>
                    </div>
                  </div>

              </div>
              
            </div>
          <div className="col-lg-12 emptybox1"></div>
            <div className=" col-lg-12">
              
                <div className="col-lg-3 box1bottom ">
                  <div className="row">
                    <div className=" text-center">
                                <span className="textgreen"><i className="fa fa-caret-up"></i> 17%</span><br/>
                                <b>$35,210.43</b><br/>
                                <span>TOTAL REVENUE</span>
                            </div>
                  </div>                    
                </div>
                <div className="col-lg-3 box1bottom ">
                  <div className="row">
                    <div className=" text-center">
                                <span className="textorange"><i className="fa fa-caret-left"></i> 0%</span><br/>
                                <b>$10,390.90</b><br/>
                                <span>TOTAL COST</span>
                            </div>
                  </div>                    
                </div>
                <div className="col-lg-3 box1bottom ">
                  <div className="row">
                    <div className=" text-center">
                                <span className="textgreen"><i className="fa fa-caret-up"></i> 20%</span><br/>
                                <b>$24,813.53</b><br/>
                                <span>TOTAL PROFIT</span>
                            </div>
                  </div>                    
                </div>
                <div className="col-lg-3 box1bottom ">
                  <div className="row">
                    <div className=" text-center">
                                <span className="textred"><i className="fa fa-caret-down"></i> 18%</span><br/>
                                <b>1200</b><br/>
                                <span>GOAL COMPLETIONS</span>
                            </div>
                  </div>                    
                </div>
            </div>
        </div>  
      </div>
    </div>  
        );
  }
}
