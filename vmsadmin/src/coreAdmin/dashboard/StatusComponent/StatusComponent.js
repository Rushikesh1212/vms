import React,{Component} from 'react';
// import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';



import './StatusComponent.css';

// import {StudentMaster} from '/imports/admin/forms/student/api/studentMaster.js';
// import { FranchiseDetails }  from '/imports/admin/companySetting/api/CompanySettingMaster.js';
// import { FlowRouter }   from 'meteor/ostrio:flow-router-extra';

export default class StatusComponent extends Component{
  
  constructor(props) {
   super(props);
    this.state = {

    }
    // console.log('props = ',this.props);
  }
   
  componentDidMount(){
 
}

    
  render(){
    return(
        <main className="col-lg-3">
{/*      <div className="emptyclass"></div>
*/}         <div className="col-lg-12 mainicon" >
            <div className="row">
              <div className="col-lg-4 ccon1" style={{backgroundColor:this.props.stats.color}} >
                <div className="row"><i className={"fa fa-"+this.props.stats.icon}></i></div>
              </div>
              <div className="col-lg-7">
                  <div>{this.props.stats.heading}</div>
                  <div className="per"><strong>{this.props.stats.value}</strong></div>
              </div>
            </div>
          </div>
        </main>  
        );
  }
}
