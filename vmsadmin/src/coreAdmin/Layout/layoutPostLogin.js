import React, { Component } from 'react';
import $ from 'jquery';

import Header from '../common/header/Header.js'
import Footer from '../common/footer/Footer.js'
import Dashboard from '../dashboard/Dashboard.js'
import Leftsidebar from '../common/leftSidebar/Leftsidebar.js'

 const layoutPostLogin = function (MainComponent){

	return  class Layout extends Component{
  
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
		           $('#headerid').toggleClass('headereffect');
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
		    }
		  }

		  render(){
		    // console.log("props = ",this.props);
		    // {console.log("loggedIn status layput = ", this.state.loggedIn)}
		    if(this.state.loggedIn===false){
		      return(
		            <div className="App container-fluid">
		            <h1> hello world! </h1>
		                <div className="row">
		                  <div id="headerid" className="headerbackgroundcolor ">
		                    <div className="">
		                      <Header />
		                   </div>
		                  </div>
		                  <div className="">                  
		                    <div id="dashbordid" className="">
		                      <button className="btn btn-primary pull-right" onClick={this.logout.bind(this)}>Logout</button>
		                      <MainComponent />
		                    </div>
		                  </div>
		                  <div className="leftsidebarbackgroundcolor">
		                    <div className="row">
		                       <Leftsidebar />
		                    </div>
		                  </div>
		                  <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-lg-offset-2 col-md-offset-2 col-sm-offset-2 col-xs-offset-2">
		                    <div className="">
		                   </div>
		                  </div>
		                </div>
		            </div> 
		        );
		    }else{
		       return(
		        <div>
		        	<h1> Logged In </h1>
		        </div>
		      );
		    }
		  }
		}


} 

export default layoutPostLogin;