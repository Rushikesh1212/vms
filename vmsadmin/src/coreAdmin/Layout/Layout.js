import React,{Component} from 'react';
// import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { render } from 'react-dom';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
// import {browserHistory} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import $ from "jquery";

// Section: 1 - SystemSecurity ******************************************************
import Login            from '../systemSecurity/Login.js';
import ConfirmOtp       from '../systemSecurity/ConfirmOtp.js';
import ForgotPassword   from '../systemSecurity/ForgotPassword.js';
import ResetPassword    from '../systemSecurity/ResetPassword.js';
import SignUp           from '../systemSecurity/SignUp.js';
import VerifyAccount    from '../systemSecurity/VerifyAccount.js';
// import CommonPage        from './components/layouts/CommonLayout.js';

import Header from '../common/header/Header.js'
import Footer from '../common/footer/Footer.js'
import Dashboard from '../dashboard/Dashboard.js'
import Leftsidebar from '../common/leftSidebar/Leftsidebar.js'
import Rightsidebar from '../common/rightSidebar/Rightsidebar.js'
// import UMListOfUsers from '../userManagement/UM/UMListOfUsers.js';
import UMListOfUsers from '../../TGKSpecific/TGKuserManagement/UM/UMListOfUsers.js';
import UMListOfEmp from '../../TGKSpecific/TGKuserManagement/UM/OfficeEmpList.js';

// import EditUserProfile from '../userManagement/UM/EditUserProfile.js';
import EditUserProfile from '../../TGKSpecific/TGKuserManagement/UM/EditUserProfile.js';
import UMRolesList from '../userManagement/Roles/UMRolesList.js';
// import CompanySetting from '../companysetting/Components/CompanySetting.js';
import CompanySetting from '../../TGKSpecific/TGKcompanysetting/Components/CompanySetting.js';
import ViewTemplates from '../NotificationManagement/ViewTemplates.jsx';
// section- admin operation
import MasterData from '../../adminTGK/masterData/masterData.js';
import SellOMeter from '../../adminTGK/sell-o-meter/sellOMeter.js';
import ClassRating from '../../adminTGK/sell-o-meter/classRating.js';

class Layout extends Component{
  
  constructor(props) {
    super();
    this.state = {
          loggedIn : false,
    }
  }
   
componentDidMount(){
    $(document).ready(function () {
       $('#sidebarCollapse').on('click', function () {
           $('#sidebar').toggleClass('active');
       });
    });
    $(document).ready(function () {
       $('#sidebarCollapse').on('click', function () {
           $('#sidebarCollapse').toggleClass('longmar');
       });
    });
    $(document).ready(function () {
       $('#sidebarCollapse').on('click', function () {
           $('#dashbordid').toggleClass('dashboardeffect');
       });
    });
    const token = localStorage.getItem("token");
    // console.log("Dashboard Token = ",token);
    if(token!==null){
    // console.log("*********===***********imin ",token);
      this.setState({
        loggedIn : true
      })
    }else{
      // console.log("token is not available");
    }       
  }

  logout(){
    var token = localStorage.removeItem("token");
      if(token!==null){
      // console.log("Header Token = ",token);
      this.setState({
        loggedIn : false
      })
      // browserHistory.push("/login");
      // this.props.history.push("/login");
    }
  }

  render(){
    // console.log("props = ",this.props);
    // {console.log("loggedIn status layput = ", this.state.loggedIn)}
    if(this.state.loggedIn===true){
      
      window.onscroll = function() {scrollFunction()};

      function scrollFunction() {
        if( document.getElementById("mySidenav"))
        {
            if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
              document.getElementById("mySidenav").style.top = "0";
            } else {
              document.getElementById("mySidenav").style.top = "50px";
            }

        }
        
      }

    return(
        <Router>
          <div className="App container-fluid">
            <div className="container-fluid headerbackgroundcolor padd0" id="headerid" >
              <Header />
            </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="">                  
                  <div id="dashbordid" className="">
                    <Switch>
                      <Route path="/umlistofusers" component={UMListOfUsers} exact />
                      <Route path="/umlistofemp" component={UMListOfEmp} exact />
                      <Route path="/umroleslist" component={UMRolesList} exact />
                      <Route path="/edituserprofile/:id" component={EditUserProfile} exact />
                      <Route path="/ViewTemplates" component={ViewTemplates} exact />
                      <Route path="/dashboard" component={Dashboard} exact />
                      <Route path="/" component={Dashboard} exact />
                    </Switch>        
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                  <div className="leftsidebarbackgroundcolor">
                    <div className="row">
                       <Leftsidebar />
                    </div>
                  </div>
                </div> 
              </div>
          </div> 
        </Router>
      );
    }else{
       return(
        <div>
          <Router>
            <Switch>
              <Route path="/"               exact strict component={ Login } />
              <Route path="/login"          exact strict component={ Login } />
              <Route path="/signup"         exact strict component={ SignUp } />
              <Route path="/forgot-pwd"     exact strict component={ ForgotPassword } />
              <Route path="/reset-pwd"      exact strict component={ ResetPassword } />
              <Route path="/verify-account" exact strict component={ VerifyAccount } />
              <Route path="/confirm-otp"    exact strict component={ ConfirmOtp } />
            </Switch>        
          </Router>
        </div>
      );
    }
  }
}
export default Layout;
