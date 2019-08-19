import React,{Component} from 'react';
// import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';



import './Infocomponent.css';

// import {StudentMaster} from '/imports/admin/forms/student/api/studentMaster.js';
// import { FranchiseDetails }  from '/imports/admin/companySetting/api/CompanySettingMaster.js';
// import { FlowRouter }   from 'meteor/ostrio:flow-router-extra';

export default class Infocomponent extends Component{
  
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
          <div className="col-lg-4 box3">     
            <div className="col-lg-12 box3a" style={{backgroundColor:this.props.stats.contcolor}}>
              <div className="row">
                  <div className="col-lg-4 box3aicon"style={{backgroundColor:this.props.stats.color}}>
                    <i className={"fa fa-"+this.props.stats.icon}></i>
                  </div>
                  <div className="col-lg-8">
                    {this.props.stats.heading}
                    <br/>
                    <strong>{this.props.stats.value}</strong>
                    <div className="row">
                      <div className="progress prog ">
                        <div className="progress-bar progbar1" ></div>
                      </div>
                    </div>
                    <div className="increase">{this.props.stats.per} Increase in 30 Days</div>
                  </div>
              </div>
            </div>
          </div>

      );
  }
}
