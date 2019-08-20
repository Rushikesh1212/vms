import React from 'react';
// import Meteor, { Accounts } from "react-native-meteor";
import {
  ScrollView,
  Text,
  View,
  BackHandler,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  Alert
} from 'react-native';
import { TextField } from "react-native-material-textfield";
import { Button, Icon } from "react-native-elements";
import ValidationComponent from "react-native-form-validator";

import styles from './styles.js';
// import Logo from '../../layouts/Logo/Logo.js';
// import HeadText from '../../layouts/HeadText/HeadText.js';
import Ripple from 'react-native-material-ripple';
import {colors,sizes} from '../../config/styles.js';
import Loading from '../../layouts/Loading/Loading.js';

// import LoginForm from '../../components/Login/LoginForm.js';
const window = Dimensions.get('window');



export default class ForgotPasswordOTP extends ValidationComponent{

  constructor(props){
    super(props);
    this.state={
      inputFocusColor : colors.textLight,
      email : '',
      Password : '',
      resend : false,
      resendMobOtp : '',
      resendEmailOtp : '',
      otpMobInputError : '',
      otpEmailInputError : '',
      otpMobInput : ["","","",""],
      mobInputs : ["m1","m2","m3","m4"],
      otpEmailInput : ["","","","","",""],
      emailInputs : ["e1","e2","e3","e4","e5","e6"],
      btnLoading: false,
      resendLoading: false,
    };
  }

  componentDidMount() {
    // this.otpMobInput[0].focus();
  }

  focusNext(index, value, otpType, length) {
    if(otpType=="mobile"){
      var {mobInputs,otpMobInput} = this.state;
      otpMobInput[index] = value;
      this.setState({otpMobInput});  
    }else if(otpType=="email"){
      var {emailInputs,otpEmailInput} = this.state;
      otpEmailInput[index] = value;
      this.setState({otpEmailInput});
    }

    if(index<length-1 && value){
      let next = (otpType=="mobile") ? mobInputs[index+1] : emailInputs[index+1];
      this.refs[next].focus();
    }
  }

  focusPrevious(key, index, otpType) {
    if (key === 'Backspace' && index !== 0){
      if(otpType=="mobile"){
        let {mobInputs} = this.state;
        var prev = mobInputs[index-1];  
      }else{
        let {emailInputs} = this.state;
        var prev = emailInputs[index-1];
      }
      
      this.refs[prev].focus();
    }
  }

  handleKeyPress=()=>{
    console.log("inside handleKeyPress");
  }

  handleError = (error,name) =>{
    console.log("name = ",name, "error = ",error);
    this.setState({
      [name]:error,
    });
  }

  handleSubmit = ()=>{
    console.log(" inside handleSubmit........");
    
    const { state } = this.props.navigation;
    let {forgotPasswordOtp,email,userId} = state.params;
    let {otpMobInput,otpEmailInput,resend,resendMobOtp,resendEmailOtp} = this.state;
    let mobOtp, emailOtp;
    // console.log("otpEmailInput = ",this.otpEmailInput);
    if(resend){
      // mobOtp    = resendMobOtp;
      emailOtp  = resendEmailOtp;
    }else{
      // mobOtp    = formValues.mobileotp;
      emailOtp  = forgotPasswordOtp;
    }
    /*mobOtp    = 1377; 
    emailOtp  = 949356;*/
    otpMobInput   = otpMobInput.join("");
    otpEmailInput = otpEmailInput.join("");

    console.log("otpMobInput = ",otpMobInput," mobOtp = ",mobOtp);
    console.log("otpEmailInput = ",otpEmailInput," emailOtp = ",emailOtp);
    console.log("compare mob = ",(String(otpMobInput).localeCompare(String(mobOtp))));

    if(String(otpEmailInput).localeCompare(String(emailOtp))==0){
      Alert.alert("","Verification Code Verified.\nSet yout new password");
      this.props.navigation.navigate('ResetPassword',{email,userId});
    } else{
      Alert.alert('','Enter Valid Email Verification Code');
    }
    
  }

 /* displayValidationError = (errorField) =>{
    let error = null;
    if(this.state[errorField]){
      error = <View style={{width:'100%'}}>
                <Text style={{color:'#dc3545'}}>{this.state[errorField]}</Text>
              </View> ;
    }
    return error;
  }*/
  handleResend =()=>{
    const { state } = this.props.navigation;
    let {forgotPasswordOtp,email,userId} = state.params;

    var otpEmail   = Math.floor(100000 + Math.random() * 900000);
    this.setState({resendLoading:true});

    Meteor.call('forgotPasswordOTPSend', email , otpEmail, userId,(error,result)=>{
      if(error){
        Alert.alert('Something went wrong');
        console.log('err = ',error.reason);
        this.setState({resendLoading:false});
      }else{
        // console.log(result);
        if(result == 'User does not exist'){
          Alert.alert('','Email Address not found');
        }else{
          Alert.alert('','New Verification Code has been sent to your Email Address.');
          this.setState({resendEmailOtp:otpEmail,resend:true});
        }
        this.setState({resendLoading:false});
      }            
    });
  }
  
  render(){
    console.log("this.otpMobInput = ",this.otpMobInput);
    const messages = {
      en: {
        email: "Please enter a valid Email / Mobile number.",
        numbers: 'Please enter a valid Email / Mobile number.',
        required: '\nThis Field is mandatory.',
        minlength: '\nPassword length must be greater than {1}.',
        maxlength: '\nPassword length must be lower than {1}.'
      }
    };
    const { navigate,dispatch } = this.props.navigation;

    return (
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled" >
        <View style={{width:'100%',marginTop:45}}>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
              <Image
                    resizeMode="contain"
                    source={require("../../images/Logo.png")}
                    style={{width:'100%',height:85}}
                  />
            </View>
            <View style={{paddingHorizontal:30,marginVertical:35}}><Text style={styles.loginTitleTxt}>OTP Verification</Text></View>
             <View style={{paddingHorizontal:30,}}><Text style={{fontSize:17,fontFamily:'Montserrat-Regular'}}>Please Enter Verification Code</Text></View>

              <View style={styles.formWrapper}>
                <View style={[styles.formInputView,styles.otpWrap]}>
                  <Text style={styles.otpText}>Mobile</Text>
                  <View style={styles.otpInputWrap}>
                    {
                      this.state.mobInputs.map((data,index)=>{
                        return(
                          <View key={index} style={styles.otpInput}>
                            <TextField
                              label                 = ""
                              onChangeText          = {(v) => this.focusNext(index, v,"mobile",4)}
                              onKeyPress            = {e => this.focusPrevious(e.nativeEvent.key, index, "mobile")}
                              lineWidth             = {1}
                              tintColor             = {colors.button}
                              inputContainerPadding = {0}
                              labelHeight           = {15}
                              labelFontSize         = {sizes.label}
                              titleFontSize         = {15}
                              baseColor             = {'#666'}
                              textColor             = {'#333'}
                              // value                 = {this.state.email}
                              containerStyle        = {styles.textContainer}
                              inputContainerStyle   = {styles.textInputContainer}
                              titleTextStyle        = {styles.textTitle}
                              style                 = {styles.textStyle}
                              labelTextStyle        = {styles.textLabel}
                              keyboardType          = "numeric"
                              maxLength             = {1}
                              ref                   = {data}
                              selectTextOnFocus
                              selectionColor        = {colors.primary}
                            />
                          </View>
                        );
                      })
                    }
                  </View>
                </View>


                <View style={[styles.formInputView,styles.otpWrap]}>
                  <Text style={styles.otpText}>Email</Text>
                  <View style={styles.otpInputWrap}>
                    {
                      this.state.emailInputs.map((data,index)=>{
                        return(
                          <View key={index} style={styles.otpInput}>
                            <TextField
                              label                 = ""
                              onChangeText          = {(v) => this.focusNext(index, v,"email",6)}
                              onKeyPress            = {e => this.focusPrevious(e.nativeEvent.key, index, "email")}
                              lineWidth             = {1}
                              tintColor             = {colors.button}
                              inputContainerPadding = {0}
                              labelHeight           = {15}
                              labelFontSize         = {sizes.label}
                              titleFontSize         = {15}
                              baseColor             = {'#666'}
                              textColor             = {'#333'}
                              // value                 = {this.state.email}
                              containerStyle        = {styles.textContainer}
                              inputContainerStyle   = {styles.textInputContainer}
                              titleTextStyle        = {styles.textTitle}
                              style                 = {styles.textStyle}
                              labelTextStyle        = {styles.textLabel}
                              keyboardType          = "numeric"
                              maxLength             = {1}
                              ref                   = {data}
                              selectTextOnFocus
                              selectionColor        = {colors.primary}
                            />
                          </View>
                        );
                      })
                    }
                  </View>
                </View>


                {/*this.state.btnLoading
                ?
                  <Button
                    titleStyle      = {styles.buttonText}
                    title           = "Processing"
                    loading
                    buttonStyle     = {styles.button}
                    containerStyle  = {styles.buttonContainer}
                  />
                :
                  <Button
                    onPress         = {this.handleSubmit}
                    titleStyle      = {styles.buttonText}
                    title           = "Verify"
                    buttonStyle     = {styles.button}
                    containerStyle  = {[styles.buttonContainer]}
                  /> 
                */}

                 <View style={[styles.formInputView,styles.marginBottom30],{flexDirection:'row',paddingHorizontal:0}}>
                  <Button
                    onPress         ={()=> this.props.navigation.navigate('ResetPassword')}
                    titleStyle      = {styles.buttonText}
                    title           = "Verify"
                    buttonStyle     = {styles.button}
                    containerStyle  = {styles.buttonContainer}
                  />
                 <Button
                      onPress         = {() => this.props.navigation.navigate("")}
                      titleStyle      = {styles.buttonSignInText}
                      title           = "Resend OTP"
                      buttonStyle     = {styles.buttonSignUp}
                      containerStyle  = {styles.button1Container}
                  />
                </View>
              
           
{/*
                <View style={[styles.formInputView,{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:10}]}>
                  <TouchableOpacity onPress={this.handleResend}>
                    <Text style={[styles.linkText,{color:colors.button}]}>
                      Resend Verification Code
                    </Text>
                  </TouchableOpacity>
                  <Icon name="chevrons-right" type="feather" color={colors.button} size={20} />
                </View>*/}           
                {this.state.resendLoading
                ?
                  <Loading/>  
                :
                  null
                }

              </View>
            </View>
      </ScrollView>
    );
    
  }
}
