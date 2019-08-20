import React from 'react';
import {
  ScrollView,
  Text,
  View,
  BackHandler,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
  Image,
  TextInput,
  Alert,
  Keyboard

} from 'react-native';
import { TextField } from "react-native-material-textfield";
import { Divider,Button,Icon } from 'react-native-elements';
import ValidationComponent from "react-native-form-validator";
// import Meteor, { Accounts } from "react-native-meteor";

import styles from './styles.js';
// import Logo from '../../layouts/Logo/Logo.js';
// import HeadText from '../../layouts/HeadText/HeadText.js';
import Ripple from 'react-native-material-ripple';
import {colors,sizes} from '../../config/styles.js';

const window = Dimensions.get('window');

export default class ForgotPassword extends ValidationComponent{
  constructor(props){
    super(props);
    this.state={
      inputFocusColor : colors.textLight,
      email : '',
      mobileNumber: '',
      btnLoading: false,
    };
  }
  validInputField = (stateName, stateErr) => {
    const {
      email,
      mobileNumber,
    } = this.state;
    let valid = true;

    this.validate({
      [stateName]: {
        required: true,
      },
    });

    if (this.isFieldInError(stateName)) {
      let validinptError = this.getErrorsInField(stateName);
      this.setState({ validinptError });
      valid = false;
    } else {
      this.setState({ [stateErr]: "" });
    }
    
    return valid;
  };
  validInput = () => {
    const {
      email,
    } = this.state;
    let valid = true;

    this.validate({
      email: { 
        required: true,
        email: true,
      },
    });
    this.validate({
      mobileNumber: { 
        required: true,
        email: true,
      },
    });

    if (this.isFieldInError("email")) {
      this.setState({ emailError: this.getErrorsInField("email") });
      valid = false;
    } else {
      this.setState({ emailError: "" });
    }
    return valid;
  };

  displayValidationError = (errorField) =>{
    let error = null;
    if(this.state[errorField]){
      error = <View style={styles.errorWrapper}>
                <Text style={styles.errorText}>{this.state[errorField][0]}</Text>
              </View> ;
    }
    return error;
  }


  handleSendOtp = ()=>{

    Keyboard.dismiss();
    
    let {email,mobileNumber} = this.state;
    email = email.toLowerCase();
    console.log('mobileNumber',mobileNumber)
    var mob = mobileNumber.split(' ')[1].split('-').join('')
    console.log("mob",mob)
    

  }
  handleMobileChange(value){
    // console.log("value = ",value);
    if(value.startsWith && value.startsWith('+')){
      value = value.substr(3);
    }
    let x = value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    // let x = value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    console.log("x value = ",x);
    // let y = !x[2] ? x[1] : x[1]+'-'+x[2];
    let y = x.input ? (!x[2]&&!x[3]) ? '+91 '+x[1] : (!x[3]?'+91 '+x[1]+'-'+x[2]:'+91 '+x[1]+'-'+x[2]+'-'+x[3]) : '';
    // let y = '+1 '+x[1]+'-'+x[2]+'-'+x[3];
    // console.log("y value = ",y)
    this.setState({
      mobileNumber : y,
    });
  }

  render(){
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
            <View style={{paddingHorizontal:30,marginVertical:35}}><Text style={styles.loginTitleTxt}>Forgot Password</Text></View>
             <View style={{paddingHorizontal:30}}><Text style={{fontSize:17,fontFamily:'Montserrat-Regular'}}>Please enter mobile & email id</Text></View>
              <View style={styles.formWrapper}>

                <View style={[styles.formInputView,styles.marginBottom30]}>
                  <View style={[styles.inputWrapper]}>
                 {/*   <View style={styles.inputImgWrapper}>
                      <Icon name="mobile" type="entypo" size={18}  color="#aaa" style={{}}/>
                    </View>*/}
                    <View style={styles.inputTextWrapper}>
                      <TextField
                        label                 = "Mobile"
                        onChangeText          = {(mobileNumber) => {this.setState({ mobileNumber },()=>{this.validInputField('mobileNumber', 'mobileNumberError');}),this.handleMobileChange(mobileNumber)}}
                        lineWidth             = {1}
                        tintColor             = {colors.button}
                        inputContainerPadding = {0}
                        labelHeight           = {15}
                        labelFontSize         = {sizes.label}
                        titleFontSize         = {sizes.title}
                        baseColor             = {'#666'}
                        textColor             = {'#333'}
                        value                 = {this.state.mobileNumber}
                        containerStyle        = {styles.textContainer}
                        inputContainerStyle   = {styles.textInputContainer}
                        titleTextStyle        = {styles.textTitle}
                        style                 = {styles.textStyle}
                        labelTextStyle        = {styles.textLabel}
                        keyboardType          = "numeric"
                      />
                    </View>
                  </View> 
                  {this.displayValidationError('mobileNumberError')}
                </View>
                <View style={[styles.formInputView,styles.marginBottom30]}>
                  <View style={[styles.inputWrapper]}>
                   {/* <View style={styles.inputImgWrapper}>
                      <Icon name="email-outline" type="material-community" size={20}  color="#aaa" style={{}}/>
                    </View>*/}
                    <View style={styles.inputTextWrapper}>
                      {/*<TextInput
                        style           = {{height: 40,fontFamily:"Montserrat-Regular"}}
                        onChangeText    = {(email) => this.setState({email})}
                        value           = {this.state.email}
                        placeholder     = {"Email"}
                      />*/}
                      <TextField
                        label                 = "Email"
                        onChangeText          = {email => this.setState({ email })}
                        lineWidth             = {1}
                        tintColor             = {colors.button}
                        inputContainerPadding = {0}
                        labelHeight           = {15}
                        labelFontSize         = {sizes.label}
                        titleFontSize         = {15}
                        baseColor             = {'#666'}
                        textColor             = {'#333'}
                        value                 = {this.state.email}
                        containerStyle        = {styles.textContainer}
                        inputContainerStyle   = {styles.textInputContainer}
                        titleTextStyle        = {styles.textTitle}
                        style                 = {styles.textStyle}
                        labelTextStyle        = {styles.textLabel}
                        keyboardType          = "email-address"
                        autoCapitalize        = 'none'
                      />
                    </View>
                  </View>
                  {this.displayValidationError('emailError')}
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
                    onPress         = {this.handleSendOtp}
                    titleStyle      = {styles.buttonText}
                    title           = "Send Verification Code"
                    buttonStyle     = {styles.button}
                    containerStyle  = {styles.buttonContainer}
                  />
               */ }
             
                  <View style={[styles.formInputView,styles.marginBottom30],{flexDirection:'row'}}>
                    <Button
                        onPress         = {this.handleSendOtp}
                        titleStyle      = {styles.buttonText}
                        title           = "Send Verification Code"
                        buttonStyle     = {styles.button}
                        containerStyle  = {styles.button1Container}
                    />
                    <Button
                        onPress         = {() => this.props.navigation.navigate("LogIn")}
                        titleStyle      = {styles.buttonSignInText}
                        title           = "Sign In"
                        buttonStyle     = {styles.buttonSignUp}
                        containerStyle  = {styles.buttonContainer}
                    />
                </View>


                {/*<View style={[styles.formInputView,{flexDirection:'row',alignItems:'center',justifyContent:'center'}]}>
                  <Icon name="chevrons-left" type="feather" color={colors.button} size={20} />
                  <TouchableOpacity onPress={() => this.props.navigation.navigate("LogIn")}>
                    <Text style={[styles.linkText,{color:colors.button}]}>
                      Sign In
                    </Text>
                  </TouchableOpacity>
                </View>*/}

              </View>
            </View>
    
      </ScrollView>
    );
    
  }
}

ForgotPassword.defaultProps = {
  messages: {
    en: {
      email: 'Enter a valid email address',
      required: 'This field is required.',
      mobileNo: 'Enter a valid mobile number.',
    }
  },

  rules: {
    email: /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$|^$/,
    required: /\S+/,
    mobileNo: /^(\+91\s)?[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/,
  },
}
