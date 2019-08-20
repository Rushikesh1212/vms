import React from 'react';
import {
  ScrollView,
  Text,
  View,
  BackHandler,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import { TextField } from "react-native-material-textfield";

import styles from './styles.js';
import Logo from '../../layouts/Logo/Logo.js';
import HeadText from '../../layouts/HeadText/HeadText.js';
import Ripple from 'react-native-material-ripple';
import {colors} from '../../config/styles.js';

const window = Dimensions.get('window');

export default class SignUp extends React.Component{
  constructor(props){
    super(props);
    this.state={
      inputFocusColor : colors.textLight,
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

        <HeadText text={"Sign Up"} />

        <ScrollView style={{flex:1,width:'100%',marginBottom:10}}>

          <KeyboardAvoidingView style={styles.formContainer}>
            <View style={styles.formInputView}>
              <TextField
                label                 = 'First Name'
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
                onChangeText          = {(firstName) => this.setState({firstName})}
                value                 = {this.state.firstName}
                // error                 = {this.state.firstNameError[0]}
              />
            </View>

            <View style={styles.formInputView}>
              <TextField
                label                 = 'Last Name'
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
                onChangeText          = {(lastName) => this.setState({lastName})}
                value                 = {this.state.lastName}
                // error                 = {this.state.firstNameError[0]}
              />
            </View>

            <View style={styles.formInputView}>
              <TextField
                label                 = 'Mobile Number'
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
                onChangeText          = {(mobileNumber) => this.setState({mobileNumber})}
                value                 = {this.state.mobileNumber}
                // error                 = {this.state.firstNameError[0]}
              />
            </View>

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

            <View style={styles.formInputView}>
              <TextField
                label                 = 'Confirm Password'
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
                onChangeText          = {(confirmPassword) => this.setState({confirmPassword})}
                value                 = {this.state.confirmPassword}
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
                SIGN Up
              </Text>
            </Ripple>
          
            <View style={styles.linkWrap}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("LogIn")}>
                <Text style={styles.linkText}>
                  Sign In
                </Text>
              </TouchableOpacity>

            </View>

          </KeyboardAvoidingView>
          
        </ScrollView>
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
