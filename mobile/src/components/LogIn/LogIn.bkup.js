import React from 'react';
import {
  ScrollView,
  Text,
  View,
  BackHandler,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { TextField } from "react-native-material-textfield";

import styles from './styles.js';
import Logo from '../../layouts/Logo/Logo.js';
import HeadText from '../../layouts/HeadText/HeadText.js';
import Ripple from 'react-native-material-ripple';
import {colors} from '../../config/styles.js';

// import LoginForm from '../../components/Login/LoginForm.js';
const window = Dimensions.get('window');



export default class LogIn extends React.Component{
  constructor(props){
    super(props);
    this.state={
      inputFocusColor : colors.textLight,
      email : '',
      Password : '',
    };
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
        <Logo />

        <View style={{height:'80%',width:'100%',backgoundColor:'#ff0'}}>
          <HeadText text={"Sign In"} />

          <View style={styles.formContainer}>
            <View style={styles.formInputView}>
              <TextField
                label                 = 'Email'
                lineWidth             = {0}
                tintColor             = {this.state.inputFocusColor}
                inputContainerPadding = {8}
                labelHeight           = {18}
                labelPadding          = {8}
                keyboardType          = 'default'
                inputContainerStyle   = {{height:60}}
                style                 = {styles.inputText}
                labelTextStyle        = {styles.labelText}
                activeLineWidth       = {0}
                fontSize              = {this.state.fontSize}
                labelFontSize         = {this.state.fontSize}
                onChangeText          = {(email) => this.setState({email})}
                value                 = {this.state.email}
                // error                 = {this.state.firstNameError[0]}
              />
            </View>

            <View style={styles.formInputView}>
              <TextField
                label                 = 'Password'
                lineWidth             = {0}
                tintColor             = {this.state.inputFocusColor}
                inputContainerPadding = {8}
                labelHeight           = {18}
                labelPadding          = {8}
                keyboardType          = 'default'
                inputContainerStyle   = {{height:60}}
                style                 = {styles.inputText}
                labelTextStyle        = {styles.labelText}
                activeLineWidth       = {0}
                fontSize              = {this.state.fontSize}
                labelFontSize         = {this.state.fontSize}
                onChangeText          = {(password) => this.setState({password})}
                value                 = {this.state.password}
                secureTextEntry       = {true}
                // error                 = {this.state.firstNameError[0]}
              />
            </View>

            <Ripple 
              style={[styles.button,styles.marginTB]}
              // rippleColor = {colors.bgDark}
              // rippleDuration = {700}
            >
              <Text style={styles.buttonText}>
                SIGN IN
              </Text>
            </Ripple>
          
            <View style={styles.linkWrap}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("SignUp")}>
                <Text style={styles.linkText}>
                  Sign Up
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.props.navigation.navigate("ForgotPassword")}>
                <Text style={styles.linkText}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>

          </View>
          
        </View>
        {/*<Logo/>
        <Text style={{color:'#aaa',fontSize:25,paddingBottom:50}}>
          Sign In
        </Text>
        <View style={styles.containerView}>
          
        </View>*/}
      </ScrollView>
    );
    
  }
}
