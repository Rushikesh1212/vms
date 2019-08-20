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
import axios from "../../config/axios.js";

import styles from './styles.js';
// import Logo from '../../layouts/Logo/Logo.js';
// import HeadText from '../../layouts/HeadText/HeadText.js';
import Ripple from 'react-native-material-ripple';
import {colors,sizes} from '../../config/styles.js';
import Loading from '../../layouts/Loading/Loading.js';
import Modal from "react-native-modal";


const window = Dimensions.get('window');

export default class SignUpOTP extends ValidationComponent{
  constructor(props){
    super(props);
    this.state={
      inputFocusColor : colors.textLight,
      email : '',
      btnLoading: false,
      resendLoading: false,
      otpMobInput : ["","","",""],
      mobInputs : ["m1","m2","m3","m4"],
      otpEmailInput : ["","","","","",""],
      emailInputs : ["e1","e2","e3","e4","e5","e6"],
      resend : false,
      mobileotp:'',
      emailotp: '',
      formValues:'',
      otpSentModal: true,
      openModal   : false,
    };
  }
  componentDidMount(){
    var emailotp =  this.props.navigation.getParam('emailotp','No Id');
    var mobileotp =  this.props.navigation.getParam('mobileotp','No Id');
    var formValues =  this.props.navigation.getParam('formValues','No Id');
    // console.log('emailotp',emailotp)
    // console.log('mobileotp',mobileotp)
    // console.log('formValues',formValues)
    this.setState({emailotp:emailotp,mobileotp:mobileotp,formValues:formValues})
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
      // console.log("next = ",next);
      this.refs[next].focus();
    }
    if(this.state.otpEmailInput.length==6){
      this.setState({
        otpEmail:this.state.otpEmailInput.map(data=>{
                  return data
                }).join("")
      })
    }
    if(this.state.otpMobInput.length==4){
      var otp = this.state.otpMobInput.map(data=>{
        return data
      }).join("")
      this.setState({otpMob:otp})
    }
  }

  focusPrevious(key, index, otpType) {
    // console.log("key = ",key);

    if (key === 'Backspace' && index !== 0){
      if(otpType=="mobile"){
        let {mobInputs} = this.state;
        var prev = mobInputs[index-1];  
      }else{
        let {emailInputs} = this.state;
        var prev = emailInputs[index-1];
      }
      
      this.refs[prev].focus();
      // this[otpType][index - 1].focus();
    }
  }
  createUser = ()=>{
    let {otpEmail,otpMob,mobileotp,emailotp,formValues} = this.state;
    console.log('formValues',formValues)
    if(otpMob==mobileotp && otpEmail==emailotp){
      axios.post('api/users/post/mobSignup',formValues)
       .then(response=>{
        console.log('response',response)
        this.setState({openModal:true,otpMob:'',otpEmail:''})
       }) 
       .catch(error=>{
        console.log('error',error)
       })

    }else{
      console.log('incorrect otp')
      this.setState({incorrectOTP:true})
    }
  }
  goToLogin = ()=>{
    this.setState({openModal:false})
    this.props.navigation.navigate('LogIn')
  }
  resendOtp= ()=>{
    this.setState({resendOTP:true})
  }


  render(){
    // const mobInputs   = Array(4).fill(0);
    // console.log("mobInputs = ",this.state.mobInputs);
        const { navigate,dispatch } = this.props.navigation;

    return(
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
             <View style={{paddingHorizontal:30,}}><Text style={{fontSize:17,fontFamily:'Montserrat-Regular'}}>Enter OTP to continue</Text></View>


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

                <View style={[styles.formInputView,styles.marginBottom30],{flexDirection:'row',paddingHorizontal:15}}>
                  <Button
                    onPress         ={this.createUser.bind(this)}
                    titleStyle      = {styles.buttonText}
                    title           = "Verify"
                    buttonStyle     = {styles.button}
                    containerStyle  = {styles.buttonContainer}
                  />
                 <Button
                      onPress         = {this.resendOtp.bind(this)}
                      titleStyle      = {styles.buttonSignInText}
                      title           = "Resend OTP"
                      buttonStyle     = {styles.buttonSignUp}
                      containerStyle  = {styles.button1Container}
                  />
                </View>
              

              {/*  <View style={[styles.formInputView,{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:10}]}>
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
                    <Modal isVisible={this.state.openModal}  
                         onBackdropPress={() => this.setState({ openModal: false })}
                         coverScreen={true}
                         hideModalContentWhileAnimating={true}
                         style={{paddingHorizontal:'5%',zIndex:999}}
                         animationOutTiming={500}>
                    <View style={{backgroundColor:"#fff",alignItems:'center',borderRadius:20,paddingVertical:30,paddingHorizontal:10}}>
                      <View style={{justifyContent:'center',backgroundColor:"#34be34",width:60,height:60,borderRadius:30,overflow:'hidden'}}>
                        <Icon size={30} name='check' type='fontAwesome5' color='#fff' style={{}}/>
                      </View>
                      <Text style={{fontFamily:'Montserrat-Regular',fontSize:15,textAlign:'center',marginTop:20}}>
                        Congratulations! Account Created
                      </Text>
                      <Text style={{fontFamily:'Montserrat-Regular',fontSize:15,textAlign:'center'}}>
                        Let's get to work.
                      </Text>
                      <View style={{/*width:'100%',*/borderBottomRightRadius:500,marginTop:15,flexDirection:'row'}}>
                        <Button
                          onPress         = {this.goToLogin.bind(this)}
                          titleStyle      = {styles.buttonText}
                          title           = "OK"
                          buttonStyle     = {{width:'100%',height:45,alignItems:'center',justifyContent:'center',borderRadius:50}}
                          containerStyle  = {styles.buttonContainer}
                        />
                      </View>
                    </View>
                  </Modal>
                {/*//Sent OTP modal//*/}

                  <Modal isVisible={this.state.otpSentModal}  
                         onBackdropPress={() => this.setState({ otpSentModal: true })}
                         coverScreen={true}
                         hideModalContentWhileAnimating={true}
                         style={{paddingHorizontal:'5%',zIndex:999}}
                         animationOutTiming={500}>
                    <View style={{backgroundColor:"#fff",alignItems:'center',borderRadius:20,paddingVertical:30,paddingHorizontal:10}}>
                      <View style={{justifyContent:'center',backgroundColor:"#34be34",width:60,height:60,borderRadius:30,overflow:'hidden'}}>
                        <Icon size={30} name='check' type='fontAwesome5' color='#fff' style={{}}/>
                      </View>
                      <Text style={{fontFamily:'Montserrat-Regular',fontSize:15,textAlign:'center',marginTop:20}}>
                        OTP has been successfully sent to your Mobile & Email.
                      </Text>
                      <Text style={{fontFamily:'Montserrat-Regular',fontSize:15,textAlign:'center'}}>
                        Enter OTP to verify
                      </Text>
                      <View style={{/*width:'100%',*/borderBottomRightRadius:500,marginTop:15,flexDirection:'row'}}>
                        <Button
                          onPress         = {()=>this.setState({otpSentModal:false})}
                          titleStyle      = {styles.buttonText}
                          title           = "OK"
                          buttonStyle     = {{width:'100%',height:45,alignItems:'center',justifyContent:'center',borderRadius:50}}
                          containerStyle  = {styles.buttonContainer}
                        />
                      </View>
                    </View>
                  </Modal>
                {/*incorrect otp modal*/}
                  <Modal isVisible={this.state.incorrectOTP}  
                         onBackdropPress={() => this.setState({ incorrectOTP: false })}
                         coverScreen={true}
                         hideModalContentWhileAnimating={true}
                         style={{paddingHorizontal:'5%',zIndex:999}}
                         animationOutTiming={500}>
                    <View style={{backgroundColor:"#fff",alignItems:'center',borderRadius:20,paddingVertical:30,paddingHorizontal:10}}>
                      <View style={{justifyContent:'center',backgroundColor:"#f00",width:50,height:50,borderRadius:25,overflow:'hidden'}}>
                        <Icon size={30} name='close' type='fontAwesome' color='#fff' style={{}}/>
                      </View>
                      <Text style={{fontFamily:'Montserrat-Regular',fontSize:15,textAlign:'center',marginTop:20}}>
                       Please enter correct OTP.
                      </Text>
                     
                      <View style={{/*width:'100%',*/borderBottomRightRadius:500,marginTop:15,flexDirection:'row'}}>
                        <Button
                          onPress         = {()=>this.setState({incorrectOTP:false})}
                          titleStyle      = {styles.buttonText}
                          title           = "OK"
                          buttonStyle     = {{width:'100%',height:45,alignItems:'center',justifyContent:'center',borderRadius:50}}
                          containerStyle  = {styles.buttonContainer}
                        />
                      </View>
                    </View>
                  </Modal>

                  <Modal isVisible={this.state.resendOTP}  
                         onBackdropPress={() => this.setState({ resendOTP: false })}
                         coverScreen={true}
                         hideModalContentWhileAnimating={true}
                         style={{paddingHorizontal:'5%',zIndex:999}}
                         animationOutTiming={500}>
                    <View style={{backgroundColor:"#fff",alignItems:'center',borderRadius:20,paddingVertical:30,paddingHorizontal:10}}>
                      <View style={{justifyContent:'center',backgroundColor:"#34be34",width:50,height:50,borderRadius:25,overflow:'hidden'}}>
                        <Icon size={30} name='check' type='fontAwesome' color='#fff' style={{}}/>
                      </View>
                      <Text style={{fontFamily:'Montserrat-Regular',fontSize:15,textAlign:'center',marginTop:20}}>
                        OTP sent successfully!
                      </Text>
                      <Text style={{fontFamily:'Montserrat-Regular',fontSize:15,textAlign:'center',marginTop:20}}>
                        Please enter New OTP to verify
                      </Text>
                     
                      <View style={{/*width:'100%',*/borderBottomRightRadius:500,marginTop:15,flexDirection:'row'}}>
                        <Button
                          onPress         = {()=>this.setState({resendOTP:false})}
                          titleStyle      = {styles.buttonText}
                          title           = "OK"
                          buttonStyle     = {{width:'100%',height:45,alignItems:'center',justifyContent:'center',borderRadius:50}}
                          containerStyle  = {styles.buttonContainer}
                        />
                      </View>
                    </View>
                  </Modal>
      </ScrollView>
    );
  }
}
