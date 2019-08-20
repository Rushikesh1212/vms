import React,{Component} from 'react';
// import TrackerReact from 'meteor/ultimatejs:tracker-react';
// import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';



import './TableComponent.css';

// import {StudentMaster} from '/imports/admin/forms/student/api/studentMaster.js';
// import { FranchiseDetails }  from '/imports/admin/companySetting/api/CompanySettingMaster.js';
// import { FlowRouter }   from 'meteor/ostrio:flow-router-extra';

export default class TableComponent extends Component{
  
  constructor(props) {
   super(props);
    this.state = {}
  }
   
  componentDidMount(){
 
}

    
  render(){
    return(
    <div className="col-lg-6">
      <div className="col-lg-12 emptybox1 "></div>

        <div className="col-lg-12 box7">
        <div className="row">
          <div className="box1a col-lg-12">
                  <div className="row">
                    <div className="col-lg-6  ">
                      <div><h4>Latest Orders</h4></div>   
                    </div>
                  </div>
          </div>
          <div className="col-lg-12">
            <table className="table no-margin">
                  <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Item</th>
                    <th>Status</th>
{/*                    <th>Popularity</th>
*/}                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td><a href="#">OR9842</a></td>
                    <td>Call of Duty IV</td>
                    <td><div className="label label-success box7label">Shipped</div></td>
                    <td>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#">OR1848</a></td> 
                    <td>Samsung Smart TV</td>
                    <td><span className="label label-warning box7label">Pending</span></td>
                    <td>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#">OR7429</a></td>
                    <td>iPhone 6 Plus</td>
                    <td><span className="label label-danger box7label">Delivered</span></td>
                    <td>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#">OR7429</a></td>
                    <td>Samsung Smart TV</td>
                    <td><span className="label label-info box7label">Processing</span></td>
                    <td>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#">OR1848</a></td>
                    <td>Samsung Smart TV</td>
                    <td><span className="label label-warning box7label">Pending</span></td>
                    <td>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#">OR7429</a></td>
                    <td>iPhone 6 Plus</td>
                    <td><span className="label label-danger box7label">Delivered</span></td>
                    <td>
                      
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#">OR9842</a></td>
                    <td>Call of Duty IV</td>
                    <td><span className="label label-success box7label">Shipped</span></td>
                    <td>
                    </td>
                  </tr>
                  </tbody>
                </table>
                <div className="col-lg-12 box7foot">
                  <div className="row"> 
                  <div className="col-lg-12 emptybox2 "></div>  
                    <a href="#" className="btn box7btn btn-sm btn-info btn-flat pull-left">Place New Order</a>
                    <a href="#" className="btn box7btn btn-sm btn-default btn-flat pull-right">View All Orders</a>
                  </div>
                  
                </div>
                
      </div>
      
    </div>  
    </div>
          
  </div>

      );
  }
}
