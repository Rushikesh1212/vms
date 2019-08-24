import React,{Component} from 'react';
// import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch,Link,location } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import $ from "jquery";
import Header from '../header/Header.js'


import './Leftsidebar.css';

export default class Leftsidebar extends Component{
  
  constructor(props) {
   super(props);
    this.state = {}
  }
   
componentDidMount(){
                 /*$(document).ready(function () {
                 $('#sidebarCollapse').on('click', function () {
                     $('#sidebar').toggleClass('active');
                 });
             });*/
          }    
  

  render(){
    return(
      <div>
        <aside className="leftsidebar">
          <div className="wrapper">
            <nav id="sidebar">
              <div className="sidebar-header">
                  <h4 className=" zeromargin"><div className="imgLogo">VMS</div></h4>
                  <strong className="clspadding">VMS</strong>
              </div>
              <ul className="list-unstyled components">
                  <li className="active">
                    <Link to="/dashboard">
                      <i className="glyphicon glyphicon-briefcase"></i>
                      Dashboard
                    </Link>
                  </li>                    
                  <li className="active">
                    <Link to="/userManagement">
                      <i className="glyphicon glyphicon-user"></i>
                      User Management
                    </Link>
                  </li>                  
                  <li className="active">
                    <Link to="/voterManagement">
                      <i className="glyphicon glyphicon-send"></i>
                      Voter Management
                    </Link>
                  </li>
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    );
  }
}
