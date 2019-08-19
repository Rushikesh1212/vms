import React,{Component} from 'react';
// import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';



import './Footer.css';

// import {StudentMaster} from '/imports/admin/forms/student/api/studentMaster.js';
// import { FranchiseDetails }  from '/imports/admin/companySetting/api/CompanySettingMaster.js';
// import { FlowRouter }   from 'meteor/ostrio:flow-router-extra';

export default class Footer extends Component{
  
  constructor(props) {
   super(props);
    this.state = {}
  }
   
  componentDidMount(){
 
}

    
  render(){
    return(


         <footer  className="main-footer">
        {/* <footer  className={mainfootershow}>*/}
        <div className="pull-right col-lg-6">
        </div>
        <strong>Copyright © 2018 <a href="" className="footclr">Online Abacus</a></strong> All rights
        reserved.
        <div className="iAssureITNM col-lg-6 ">
        <strong>Design & Developed by <a href="http://iassureit.com">iAssure International Technology Pvt Ltd</a></strong>
        </div>
      </footer>

      );
  }
}
