 import React,{Component} 	from 'react';
import Layout 				from './admin/Layout/Layout.js';
import axios 				from 'axios';
import $ 					from 'jquery';
import './lib/router.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

<<<<<<< Updated upstream

axios.defaults.baseURL = 'http://vmsapi.ranjitsinhshinde.in/';
// axios.defaults.baseURL = 'http://localhost:5014';

=======
axios.defaults.baseURL = 'http://vmsapi.ranjitsinhshinde.in/';
// axios.defaults.baseURL = 'http://localhost:5012';
>>>>>>> Stashed changes
axios.defaults.headers.post['Content-Type'] = 'application/json';

 class App extends Component {

	componentDidMount(){
	   	$(document).ready(function () {
	       $('#sidebarCollapse').on('click', function () {
	           // $('#sidebar').toggleClass('active');
	       });
	    });
	    $(document).ready(function () {
	       $('#sidebarCollapse').on('click', function () {
	           // $('#sidebarCollapse').toggleClass('longmar');
	       });
	    });
	    $(document).ready(function () {
	       $('#sidebarCollapse').on('click', function () {
	           // $('#dashbordid').toggleClass('dashboardeffect');
	       });
	    });
	}
 	render(){
		return (
		    <div>
		      <Layout />
		    </div>
		);
	}  
}
export default App;
