import React,{Component}  from 'react';
import { render }         from 'react-dom';
import { Redirect }       from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route,Switch }   from 'react-router-dom';
// Section: 1 - SystemSecurity ******************************************************
import $                  from "jquery";
import Login              from '../systemSecurity/Login.js';
import SignUp             from '../systemSecurity/SignUp.js';
import Header             from '../common/header/Header.js'
import Footer             from '../common/footer/Footer.js'
import Dashboard          from '../dashboard/Dashboard.js'
import AdminContent       from '../dashboard/DashboardNew.js'
import Leftsidebar        from '../common/leftSidebar/Leftsidebar.js'
import UserMgmt           from '../userManagement/UserMgmt.js';
import VoterMgmt          from '../voterManagement/VoterMgmt.js';
import csvUpload          from '../csvUpload/csvUpload.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

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
                      <Route path="/userManagement" component={UserMgmt} exact />
                      <Route path="/userManagement/:id" component={UserMgmt} exact />
                      <Route path="/voterManagement" component={VoterMgmt} exact />
                      <Route path="/csvUpload" component={csvUpload} exact />
                      {/*<Route path="/dashboard" component={Dashboard} exact />*/}
                      <Route path="/dashboard" component={AdminContent} exact />
                      <Route path="/" component={AdminContent} exact />
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
            </Switch>        
          </Router>
        </div>
      );
    }
  }
}
export default Layout;
