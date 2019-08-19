import React,{Component} from 'react';
// import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


import StatusComponent from './StatusComponent/StatusComponent.js'
import UpdateComponent from './UpdateComponent/UpdateComponent.js'
import TableComponent  from './TableComponent/TableComponent.js'
import Productlist     from './productlist/Productlist.js'
import Visitorreport   from './Visitorreport/Visitorreport.js'
import Infocomponent   from './Infocomponent/Infocomponent.js'
import './Dashboard.css';

// import {StudentMaster} from '/imports/admin/forms/student/api/studentMaster.js';
// import { FranchiseDetails }  from '/imports/admin/companySetting/api/CompanySettingMaster.js';
// import { FlowRouter }   from 'meteor/ostrio:flow-router-extra';

export default class Dashboard extends Component{
  
  constructor(props) {
   super(props);
    this.state = {}
  }
   
  componentDidMount(){}
    
  render(){
    return(
      <div className="">
        <div className="col-lg-12">
            <div className="log-lg-12 pull-left ">
              <h3>Dashboard</h3>
            </div>
          </div>
          <div className="">
            <StatusComponent stats={{color:"#2FC0EF", icon:"cog",heading:"TOTAL USERS",value:"100"}} />
            <StatusComponent stats={{color:"#DD4B39", icon:"thumbs-o-up",heading:"TOTAL PROPERTIES",value:"200"}} />
            <StatusComponent stats={{color:"#4CA75A", icon:"shopping-cart",heading:"BUY/RENT TRANSACTIONS",value:"500"}} />
            <StatusComponent stats={{color:"#F39C2F", icon:"users",heading:"TOTAL REVENUE",value:"1,50,00,000"}} /> 
          </div>
          <UpdateComponent />
          <Visitorreport />
            <Infocomponent stats={{color:"#C47D24",contcolor:"#F39C2F", icon:"tag",heading:"INVENTORY",value:"5,200",per:"50%"}} />
            <Infocomponent stats={{color:"#3B8547",contcolor:"#4CA75A", icon:"heart",heading:"MENTIONS",value:"92,050",per:"20%"}} />
            <Infocomponent stats={{color:"#B23B2C",contcolor:"#DD4B39", icon:"cloud-download",heading:"DOWNLOADS",value:"114,381",per:"70%"}} />
            <Infocomponent stats={{color:"#249AC1",contcolor:"#2FC0EF", icon:"comment",heading:"DIRECT MESSAGES",value:"163,921",per:"40%"}} />
            <TableComponent />
          <Productlist />
      </div>     
    );
  }
}
