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
   
  componentDidMount() {

    //   const second = 1000,
    //   minute = second * 60,
    //   hour = minute * 60,
    //   day = hour * 24;

    // let countDown = new Date('Sep 30, 2019 00:00:00').getTime(),
    // x = setInterval(function() {

    //   let now = new Date().getTime(),
    //       distance = countDown - now;

    //     document.getElementById('days').innerText = Math.floor(distance / (day));
    //     document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour));
    //     document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute));
    //     document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
     
    //   //do something later when date is reached
    //   //if (distance < 0) {
    //   //  clearInterval(x);
    //   //  'IT'S MY BIRTHDAY!;
    //   //}

    // }, second)

      var countDownDate = new Date("oct 21, 2019 07:00:00").getTime();

      // Update the count down every 1 second
      var x = setInterval(function() {

      // Get today's date and time
      var now = new Date().getTime();
        
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
        
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if(minutes<10){minutes = "0"+minutes }else{minutes = minutes};
      if(seconds<10){seconds = "0"+seconds }else{seconds = seconds};
      // Output the result in an element with id="demo"
      document.getElementById("demo").innerHTML = days + " Days : " + hours + " Hrs : "
      + minutes + " : " + seconds + " Time left to voting";
        
      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  } 

  render(){
    return(
      <div>
        <aside className="leftsidebar">
          <div className="wrapper">
            <nav id="sidebar">
              <div className="sidebar-header">
                <h4 className="text-center zeromargin"><div className="imgLogo">VMS</div></h4>
                <strong className="clspadding">VMS</strong>
              </div>              
            <h4 className="col-lg-12 text-center timerCustom" id="demo"></h4>
              <ul className="list-unstyled components">
                  <li className="active">
                    <Link to="/dashboard">
                      <i className="glyphicon glyphicon-briefcase"></i>
                      Dashboard
                    </Link>
                  </li>                    
                  {/*<li className="active">
                    <Link to="/userManagement">
                      <i className="glyphicon glyphicon-user"></i>
                      User Management
                    </Link>
                  </li>*/}                  
                  <li className="active">
                    <Link to="/voterManagement">
                      <i className="glyphicon glyphicon-send"></i>
                      Voter Management
                    </Link>
                  </li>
                  <li className="active">
                    <Link to="/csvUpload">
                      <i className="glyphicon glyphicon-user"></i>
                      Upload Voter File
                    </Link>
                  </li>
                  <li className="active">
                    <Link to="/contactList">
                      <i className="glyphicon glyphicon-file"></i>
                      Contact List
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
