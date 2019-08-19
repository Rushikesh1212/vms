import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';

import 'font-awesome/css/font-awesome.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css';

class VerifyAccount extends Component {

  constructor(){
      super();
        this.state = {

        }
  }

  render(){
    var winHeight = window.innerHeight;
    var divHeight = winHeight/4.5+'px';
    // console.log('window inner height: ', window.innerHeight);

    return(
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 signUpWrapper">
        <div className="col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-sm-12 signupPadding signUpFormWrap bg-success" style={{"height": winHeight}}>
          <div className="divVerifyEmailWrap">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 forgotpwd verifypd">
              <form id="OTPMobMail" /*onSubmit={this.VerifyMobileAOS.bind(this)}*/>
                <h3 className="signInNameTitle"><span className="bordbt">VERIFY ACCOUNT</span></h3>
                <div className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12 otpHeader">
                    <span>Enter Mobile Number that you used for creating Account </span>
                </div>
                <div className="form-group col-lg-12 col-md-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 pdleftclr veribtm">
                  <div className="input-effect input-group">
                    <InputMask mask="9999-999-999" maskChar=" " name="mobileVerifyAOS" ref="mobileVerifyAOS" /*onChange={this.handleChange}*/ className="form-control col-lg-12 col-md-12 col-sm-12 col-xs-12 inputText"  pattern="^(0|[0-9-+]*)$" title="Enter Mobile Numbers!" autoComplete="off" required/>
                    <span className="input-group-addon glyphi-custommm"><i className="fa fa-phone-square" aria-hidden="true"></i></span>
                    <span className="focus-border">
                      <i></i>
                    </span>
                  </div>
                </div>
                <div className="submitButtonWrapper col-lg-12 col-md-12 col-sm-12 col-xs-12 pdleftclr">
                  <button type="submit" className="btn btn-info submitBtn col-lg-12 col-md-12 col-sm-12 col-xs-12 UMloginbutton">Submit</button>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 pdcls">
                  <Link to='/' className="UMGrey signInbtn pdleftclr col-lg-12 col-md-12 col-sm-12 col-xs-12">Sign In</Link>   
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default VerifyAccount;