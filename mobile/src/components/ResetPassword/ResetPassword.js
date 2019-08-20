import React from 'react';
import {
  ScrollView,
  Text,
  View,
  BackHandler,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  Image,TextInput,
  Alert
} from 'react-native';
import { Button, Icon } from "react-native-elements";
// import Meteor, { Accounts } from "react-native-meteor";

import { TextField } from "react-native-material-textfield";
import ValidationComponent from "react-native-form-validator";

import styles from './styles.js';
import Logo from '../../layouts/Logo/Logo.js';
import HeadText from '../../layouts/HeadText/HeadText.js';
import Ripple from 'react-native-material-ripple';
import {colors,sizes} from '../../config/styles.js';

// import LoginForm from '../../components/Login/LoginForm.js';
const window = Dimensions.get('window');

export default class ResetPassword extends ValidationComponent{
  constructor(props){
    super(props);
    this.state={
      inputFocusColor : colors.textLight,
      newPassword : '',
      confirmPassword : '',
      passwordMatch         : '',
      showPassword          : false,
      showConfirmPassword   : false,
    };
  }

  validInput = () => {
    const {
      newPassword,
      confirmPassword,
    } = this.state;
    let valid = true;

    this.validate({
      newPassword: { 
        required: true,
        minlength: 5 
      },
      confirmPassword: { 
        required: true, 
      },
    });

    if (this.isFieldInError("newPassword")) {
      this.setState({ newPasswordError: this.getErrorsInField("newPassword") });
      valid = false;
    } else {
      this.setState({ newPasswordError: "" });
    }
    if (this.isFieldInError("confirmPassword")) {
      this.setState({ confirmPasswordError: this.getErrorsInField("confirmPassword") });
      valid = false;
    } else {
      this.setState({ confirmPasswordError: "" });
    }

    if(this.state.passwordMatch!='matched'){
      valid = false;
    }

    return valid;
  };

  handleReset = ()=>{
    let {newPassword,confirmPassword} = this.state;
    const { state } = this.props.navigation;
    let {email,userId} = state.params;

    if(this.validInput()){
      Meteor.call("resetPasswordUsingotps", userId, newPassword, (err,result)=> {
        if (err) {
          console.log('Something went Wrong!');
        }else {
          Alert.alert('','Password has been Changed Successfully!');
          this.props.navigation.navigate('LogIn');
        }
      });
    }
  }

  displayValidationError = (errorField) =>{
    let error = null;
    if(this.state[errorField]){
      error = <View style={styles.errorWrapper}>
                <Text style={styles.errorText}>{this.state[errorField][0]}</Text>
              </View> ;
    }
    return error;
  }

  passwordChange = (value,key)=>{
    this.setState({
      [key] : value,
    },()=>{
      if(this.state.newPassword && this.state.confirmPassword){
        if(this.state.newPassword === this.state.confirmPassword)
          this.setState({passwordMatch: 'matched'});
        else
          this.setState({passwordMatch: 'not matched'});
      }

    });
  }

  handleShowPassword = ()=>{
    this.setState({showPassword:!this.state.showPassword});
  }

  handleShowConfirmPassword = ()=>{
    this.setState({showConfirmPassword:!this.state.showConfirmPassword});
  }
  
  render(){
    
    const { navigate,dispatch } = this.props.navigation;
    return (
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled" >
        <View style={{width:'100%',marginTop:45}}>
            <Image
                    resizeMode="contain"
                    source={require("../../images/Logo.png")}
                    style={{width:'100%',height:85}}
                  />
            </View>
            <View style={{paddingHorizontal:30,marginVertical:35}}><Text style={styles.loginTitleTxt}>Reset Password</Text></View>
             <View style={{paddingHorizontal:30,}}><Text style={{fontSize:17,fontFamily:'Montserrat-Regular'}}>Please enter your new password</Text></View>


              <View style={styles.formWrapper}>


                <View style={[styles.formInputView,styles.marginBottom30]}>
                  <View style={[styles.inputWrapper]}>
                  {/*  <View style={styles.inputImgWrapper}>
                      <Icon name="email-outline" type="material-community" size={20}  color="#aaa" style={{}}/>
                    </View>*/}
                    <View style={styles.inputText2Wrapper}>
                      <TextField
                          label                 = "New Password"
                          onChangeText          = {(newPassword) => this.passwordChange(newPassword,"newPassword")}
                          lineWidth             = {1}
                          tintColor             = {colors.button}
                          inputContainerPadding = {0}
                          labelHeight           = {15}
                          labelFontSize         = {sizes.label}
                          titleFontSize         = {15}
                          baseColor             = {'#666'}
                          textColor             = {'#333'}
                          value                 = {this.state.newPassword}
                          containerStyle        = {styles.textContainer}
                          inputContainerStyle   = {styles.textInputContainer}
                          titleTextStyle        = {styles.textTitle}
                          style                 = {styles.textStyle}
                          labelTextStyle        = {styles.textLabel}
                          keyboardType          = "default"
                          secureTextEntry       = {this.state.showPassword?false:true}
                        />
                    </View>
                    <View style={[styles.eyeWrapper,{}]}>
                      <TouchableOpacity onPress={this.handleShowPassword}>
                        <Icon name={this.state.showPassword?"eye-with-line":"eye"} type="entypo" size={22}  color="#aaa" style={{}}/>
                      </TouchableOpacity>
                    </View>
                  </View>
                  {this.displayValidationError('newPasswordError')}
                </View>

                <View style={[styles.formInputView,styles.marginBottom30]}>
                  <View style={[styles.inputWrapper]}>
                    {/*<View style={styles.inputImgWrapper}>
                      <Icon name="lock-outline" type="material-community" size={20}  color="#aaa" style={{}}/>
                    </View>*/}
                    <View style={styles.inputText2Wrapper}>
                      <TextField
                          label                 = "Confirm Password"
                          onChangeText          = {(confirmPassword) => this.passwordChange(confirmPassword,"confirmPassword")}
                          lineWidth             = {1}
                          tintColor             = {colors.button}
                          inputContainerPadding = {0}
                          labelHeight           = {15}
                          labelFontSize         = {sizes.label}
                          titleFontSize         = {15}
                          baseColor             = {'#666'}
                          textColor             = {'#333'}
                          value                 = {this.state.confirmPassword}
                          containerStyle        = {styles.textContainer}
                          inputContainerStyle   = {styles.textInputContainer}
                          titleTextStyle        = {styles.textTitle}
                          style                 = {styles.textStyle}
                          labelTextStyle        = {styles.textLabel}
                          keyboardType          = "default"
                          secureTextEntry       = {this.state.showConfirmPassword?false:true}
                        />
                    </View>
                    <View style={[styles.eyeWrapper,{}]}>
                      <TouchableOpacity onPress={this.handleShowConfirmPassword}>
                        <Icon name={this.state.showConfirmPassword?"eye-with-line":"eye"} type="entypo" size={22}  color="#aaa" style={{}}/>
                      </TouchableOpacity>
                    </View>
                  </View>
                  {this.displayValidationError('confirmPasswordError')}
                  {this.state.passwordMatch == '' 
                  ?
                    null
                    
                  :
                    this.state.passwordMatch=='matched'
                    ?
                      <View style={{width:'100%'}}>
                        <Text style={styles.successText}>Passwords matched</Text>
                      </View> 
                    :
                      <View style={{width:'100%'}}>
                        <Text style={styles.errorText}>Passwords not matching</Text>
                      </View>
                  }
                </View>

                <View style={[styles.formInputView,styles.marginBottom30],{flexDirection:'row',paddingHorizontal:0}}>
                  <Button
                    onPress         ={()=> this.props.navigation.navigate('LogIn')}
                    titleStyle      = {styles.buttonText}
                    title           = "Reset Password"
                    buttonStyle     = {styles.button}
                    containerStyle  = {styles.buttonContainer}
                  />
                 <Button
                      onPress         = {() => this.props.navigation.navigate("LogIn")}
                      titleStyle      = {styles.buttonSignInText}
                      title           = "LogIn"
                      buttonStyle     = {styles.buttonSignUp}
                      containerStyle  = {styles.button1Container}
                  />
                </View>

             {/*   <View style={[styles.formInputView,{flexDirection:'row',alignItems:'center',justifyContent:'center'}]}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate("LogIn")}>
                    <Text style={[styles.linkText,{color:colors.button}]}>
                      Sign In
                    </Text>
                  </TouchableOpacity>
                  <Icon name="chevrons-right" type="feather" color={colors.button} size={20} />
                </View>
*/}
              </View>
      </ScrollView>
    );
    
  }
}

ResetPassword.defaultProps = {
  messages: {
    en: {
      numbers: 'This field must be a number.',
      email: 'Enter a valid email address',
      required: 'This field is required.',
      letters: 'It should only contain letters.',
      mobileNo: 'Enter a valid mobile number.',
      lettersOrEmpty: 'It should only contain letters.',
      minlength: 'Length should be greater than {1}',
    }
  },

  rules: {
    numbers: /^(([0-9]*)|(([0-9]*)\.([0-9]*)))$/,
    email: /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$|^$/,
    required: /\S+/,
    letters: /^[a-zA-Z ]+$/,
    lettersOrEmpty: /^[a-zA-Z ]+$|^$/,
    mobileNo: /^\d{5}([- ]*)\d{6}$|^(\+91?)?[0]?(91)?[789]\d{9}$|^$/,
    minlength(length, value) {
      if (length === void(0)) {
        throw 'ERROR: It is not a valid length, checkout your minlength settings.';
      } else if(value.length > length) {
        return true;
      }
      return false;
    },
  },
}
