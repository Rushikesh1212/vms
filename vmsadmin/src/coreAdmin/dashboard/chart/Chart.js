import React,{Component} from 'react';
// import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';

import './Chart.css';

// import {StudentMaster} from '/imports/admin/forms/student/api/studentMaster.js';
// import { FranchiseDetails }  from '/imports/admin/companySetting/api/CompanySettingMaster.js';
// import { FlowRouter }   from 'meteor/ostrio:flow-router-extra';

export default class Chart extends Component{
  
  constructor(props) {
   super(props);
    this.state = {}
  }
   
  componentDidMount(){
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        datasets: [{
          label: 'apples',
          data: [12, 19, 3, 17, 28, 24, 7],
          backgroundColor: "rgba(153,255,51,1)"
        }, {
          label: 'oranges',
          data: [30, 29, 5, 5, 20, 3, 10],
          backgroundColor: "rgba(255,153,0,1)"
        }]
      }
});
 
}

    
  render(){
    return(
     <div className="container">
      <h2>Chart.js — Bar Chart Demo</h2>
      <div>
        <canvas id="myChart"></canvas>
      </div>
     </div>
      );
  }
}
