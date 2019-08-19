import React,{Component} from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

// Section: 1 - SystemSecurity ******************************************************
import Login            from '../systemSecurity/Login.js';
import ConfirmOtp       from '../systemSecurity/ConfirmOtp.js';
import ForgotPassword   from '../systemSecurity/ForgotPassword.js';
import ResetPassword    from '../systemSecurity/ResetPassword.js';
import SignUp           from '../systemSecurity/SignUp.js';
import VerifyAccount    from '../systemSecurity/VerifyAccount.js';
// import CommonPage        from './components/layouts/CommonLayout.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import $ from "jquery";

 class LayoutSystemSecurity extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      loggedIn : false,
    }
  }
  componentDidMount(){
    const token = localStorage.getItem("token");
    console.log("Dashboard Token = ",token);
    if(token!==null){
    console.log("---------------- ",token);
      this.setState({
        loggedIn : true
      })
    }
  }

  render(){
    // {console.log("loggedIn status header = ", this.state.loggedIn)}
    // if(this.state.loggedIn===false){
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
  // }
}
export default LayoutSystemSecurity;
