import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';
import swal from 'sweetalert';
import $ from "jquery";

import 'font-awesome/css/font-awesome.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css';

class ForgotPassword extends Component {
    constructor(){
      super();
      this.state ={
        email  : '',
        mobile  : '',
        // subscription    : {
        //   user: Meteor.subscribe("userfunction"), 
        // }
      }
    }
    componentDidMount(){
      var x = this.props.match.params;
      console.log('x',x);
    }
    forgotpassword(event){
      console.log('forgotpassword');
      event.preventDefault();
      var email = this.refs.enterEmail.value;
      var mobile = this.refs.enterMobNo.value;
      // console.log("email: ",email);
     this.setState({
      email : email,
      mobile : mobile,
     });
      var userOtp = 1 /*Meteor.users.findOne({"username":email})*/;
      // console.log("userOtp: ",userOtp);
     
     if(userOtp==1){
      var mobileotp = Math.floor(1000 + Math.random() * 9000);
      var emailotp = Math.floor(100000 + Math.random() * 900000);
  //       // Session.set('mobotp',mobileotp);
  ///////////////
  //       // Session.set('mailotp',emailotp);
        
  //       var newID = userOtp._id;

  ///////////////

  //       // Session.set('newID',newID);

  //       Meteor.call('addOTP', newID , emailotp, function(error,result){
  //         if(error){
  //           Bert.alert(error);
  //         }else{

  //         }
  //       });
      
  //       // //Send OTP    
  //       // Meteor.call('sendOtp',mobile,mobileotp,
  //       // function(error,result){
  //       //   if(error){
  //       //     console.log(error.reason);
  //       //   }else{
  //       //     swal('Successfully sent the OTP to your mobile number');
  //       //   }
  //       // });
                             
        // // SEND EMAIL VERIFICATION LINK
        // Meteor.call('sendVerificationLinkToUser', email, function(error,result){
        //   if(error){
        //     Bert.alert(error);
        //   }else{ 
        //     swal({text:'Successfully sent the OTP to your Email Address.', showConfirmButton: true,type     : 'success'});                  
        //   } //end else
        // }); // send verification mail ends
        //    FlowRouter.go('/forgotOTPVarification/'+newID);
        // // $('.confirnModalWrap').addClass('newPassword');
        // // $('.NewForgotPasswordWrap').css('display','none');

      }else{
        swal('Email Address not found',"Please enter valid Email Id","warning");                  
      }
    }

    inputEffect(event){
      event.preventDefault();
      if($(event.target).val() != ""){
        $(event.target).addClass("has-content");
      }else{
        $(event.target).removeClass("has-content");
      }
    }

  render(){
    var winHeight = window.innerHeight;
    var divHeight = winHeight/4.5+'px';

    return(
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 signUpWrapper">
        <div className="col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-sm-12 signupPadding signUpFormWrap bg-success" style={{"height": winHeight}}>
          <div className="divForgotPasswordWrap">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 forgotpwd verifypd">
              <h3 className="signInNameTitle"><span className="bordbt">VERIFY EMAIL</span> </h3>
              <div className="FormWrapper col-lg-12 col-md-12 col-sm-12 col-xs-12 forPassWrap">
                <form id="forgotPassword" onSubmit={this.forgotpassword.bind(this)}>
                  <div className="text-left col-lg-12 col-md-12 col-sm-12 col-xs-12 otpHeader">
                    <span>Enter registerd Email Id </span>
                  </div>
                  <div className="form-group col-lg-12 col-md-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 pdleftclr veribtm">
                    <div className="input-effect input-group col-lg-12">
                      <input type="email" className="effect-21  form-control loginInputs" ref="enterEmail" name="enterEmail" onBlur={this.inputEffect.bind(this)} aria-label="Email Id" aria-describedby="basic-addon1" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" title="Please add '.' and enter only 2 or 3 characters following '.'!" required/>
                      <span className="input-group-addon glyphi-custommm"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                      <span className="focus-border">
                        <i></i>
                      </span>
                    </div>
                  </div>
                  <div className="text-left col-lg-12 col-md-12 col-sm-12 col-xs-12 otpHeader">
                    <span>Enter registerd Mobile Number </span>
                  </div>
                  <div className="form-group col-lg-12 col-md-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 pdleftclr veribtm">
                    <div className="input-effect input-group">
                      <InputMask mask="9999-999-999" maskChar=" " name="enterMobNo" ref="enterMobNo" onChange={this.handleChange} className="form-control col-lg-12 col-md-12 col-sm-12 col-xs-12 inputText"  pattern="^(0|[0-9-+]*)$" title="Enter Mobile Number!" autoComplete="off" required/>
                      <span className="input-group-addon glyphi-custommm"><i className="fa fa-phone-square" aria-hidden="true"></i></span>
                      <span className="focus-border">
                        <i></i>
                      </span>
                    </div>
                  </div>
                  <div className="submitButtonWrapper col-lg-12 col-md-12 col-sm-12 col-xs-12 pdleftclr">
                    <Link to='/confirm-otp'>
                      <button type="submit" className="btn col-lg-12 col-md-12 col-sm-12 col-xs-12 submitBtn UMloginbutton">Send Verification Code</button>
                    </Link>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 pdcls">
                    <Link to='/' className="UMGrey signInbtn col-lg-12 col-md-12 col-sm-12 col-xs-12">Sign In</Link>   
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ForgotPassword;