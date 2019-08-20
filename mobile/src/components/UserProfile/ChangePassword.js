import React, { Component } from "react";
import { StyleSheet,Text,View,TextInput,BackHandler,TouchableOpacity, ScrollView,Platform,Dimensions, Image,ImageBackground,Alert} from "react-native";
import { Header, Button, Icon,Card,Avatar} from "react-native-elements";
import { NavigationActions } from "react-navigation";
import ImageOverlay from "react-native-image-overlay";

import SideMenu from 'react-native-side-menu';
import PropTypes from "prop-types";
import Drawer from 'react-native-drawer';

import styles from "./styles.js";
import { TextField } from 'react-native-material-textfield';
// import MenuBar from '../Menu/Menu.js';
import HeaderDy from "../../layouts/HeaderDy/HeaderDy.js";
import Modal from "react-native-modal";
import axios from "../../config/axios.js";


 const window = Dimensions.get('window');
export default  class ChangePassword extends Component {

  constructor(props){
    super(props);
    this.state = {
      password: '',
      confirmPassword: '',
      passwordMatch: ''
      // inputFocusColor       : colors.textLight,

    };
  }
  componentDidMount(){
   
    // BackHandler.addEventListener('hardwareBackPress',this.androidBackHandler.bind(this));
  }
  componentWillUnmount() {
    // BackHandler.removeEventListener('hardwareBackPress',this.androidBackHandler.bind(this));
  }

  toggle() {
    //
    let isOpen = !this.state.isOpen;
      this.setState({
        isOpen
      });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onMenuItemSelected = item =>
    this.setState({
      isOpen: false,
      selectedItem: item,
  });


  closeControlPanel = () => {
    this._drawer.close()
  }

  openControlPanel = () => {
    this._drawer.open()
  }

  passwordChange = (value,key)=>{
    this.setState({
      [key] : value,
    },()=>{
      if(this.state.password && this.state.confirmPassword){
        if(this.state.password === this.state.confirmPassword)
          this.setState({passwordMatch: 'matched'});
        else
          this.setState({passwordMatch: 'not matched'});
      }

    });
  }

  resetPassword = () => {
    const { password, confirmPassword } = this.state;
    console.log(password,confirmPassword)
    const user_id = this.props.navigation.getParam('user_id','No id')
    if(password == confirmPassword){
      var body = {
        pwd: password
      }
      axios.put('/api/users/put/one/resetpwd/'+user_id,body)
       .then((response)=>{
        console.log('response',response)
        this.setState({openModal:true})
       })
       .catch((error)=>{
        console.log('error',error)
       })
    }
    console.log(user_id)
  }  
  render(){

    const { navigate, goBack, state } = this.props.navigation;
    // const menu = <MenuBar navigate={navigate} />;
   
    // var navigationView = <NotificationCommon closeDrawer={this.closeDrawer} notificationData={[]} navigation={this.props.navigation}/>

    return(
        <Drawer
            ref={(ref) => this._drawer = ref}
            // openDrawerOffset={(viewport) => viewport.width-}
            side="left"
            >
            
            <HeaderDy goBack={goBack} headerTitle="Set Your New Password" />
            <ScrollView  keyboardShouldPersistTaps="handled" >
              

              <View style={{marginTop:"10%",paddingHorizontal:25}}>

{/*              <View style={[styles.formInputView,styles.marginBottom30]}>
                  <View style={[styles.inputWrapper]}>

                    <View style={styles.inputText2Wrapper}>
                      <TextField
                        label                 = "Old Password"
                        lineWidth             = {1}
                        tintColor             = {"#0275D8"}
                        inputContainerPadding = {0}
                        labelHeight           = {15}
                        labelFontSize         = {13}
                        titleFontSize         = {15}
                        baseColor             = {'#666'}
                        textColor             = {'#333'}
                        // value                 = {this.state.password}
                        containerStyle        = {styles.textContainer}
                        inputContainerStyle   = {styles.textInputContainer}
                        titleTextStyle        = {styles.textTitle}
                        style                 = {styles.textStyle}
                        labelTextStyle        = {styles.textLabel}
                        keyboardType          = "default"
                        secureTextEntry       = {this.state.showPassword?false:true}
                      />
                    </View>
                  </View>
                
                </View>
*/}
                <View style={[styles.formInputView,styles.marginBottom30]}>
                  <View style={[styles.inputWrapper]}>
                  {/*  <View style={styles.inputImgWrapper}>
                      <Icon name="lock-outline" type="material-community" size={20}  color="#aaa" style={{}}/>
                    </View>*/}
                    <View style={styles.inputText2Wrapper}>
                      <TextField
                        label                 = "New Password"
                        onChangeText          = {(password) => this.passwordChange(password,"password")}
                        lineWidth             = {1}
                        tintColor             = {"#0275D8"}
                        inputContainerPadding = {0}
                        labelHeight           = {15}
                        labelFontSize         = {13}
                        titleFontSize         = {15}
                        baseColor             = {'#666'}
                        textColor             = {'#333'}
                        // value                 = {this.state.password}
                        containerStyle        = {styles.textContainer}
                        inputContainerStyle   = {styles.textInputContainer}
                        titleTextStyle        = {styles.textTitle}
                        style                 = {styles.textStyle}
                        labelTextStyle        = {styles.textLabel}
                        keyboardType          = "default"
                        secureTextEntry       = {this.state.showPassword?false:true}
                      />
                    </View>
                 {/*   <View style={[styles.eyeWrapper,{}]}>
                      <TouchableOpacity onPress={this.handleShowPassword}>
                        <Icon name={this.state.showPassword?"eye-with-line":"eye"} type="entypo" size={22}  color="#aaa" style={{}}/>
                      </TouchableOpacity>
                    </View>*/}
                  </View>
                
                </View>

                <View style={[styles.formInputView]}>
                  <View style={[styles.inputWrapper]}>
                  {/*  <View style={styles.inputImgWrapper}>
                      <Icon name="lock-outline" type="material-community" size={20}  color="#aaa" style={{}}/>
                    </View>*/}
                    <View style={styles.inputText2Wrapper}>
                      <TextField
                        label                 = "Confirm Password"
                        onChangeText          = {(confirmPassword) => this.passwordChange(confirmPassword,"confirmPassword")}
                        lineWidth             = {1}
                        tintColor             = {'#0275D8'}
                        inputContainerPadding = {0}
                        labelHeight           = {15}
                        labelFontSize         = {13}
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
                  {/*  <View style={[styles.eyeWrapper,{}]}>
                      <TouchableOpacity onPress={this.handleShowConfirmPassword}>
                        <Icon name={this.state.showConfirmPassword?"eye-with-line":"eye"} type="entypo" size={22}  color="#aaa" style={{}}/>
                      </TouchableOpacity>
                    </View>*/}
                  </View>
                </View>
                {this.state.passwordMatch == '' 
                  ?
                    null
                    
                  :
                    this.state.passwordMatch=='matched'
                    ?
                      <View style={{width:'100%',marginTop:5}}>
                        <Text style={styles.successText}>Passwords matched</Text>
                      </View> 
                    :
                      <View style={{width:'100%',marginTop:5}}>
                        <Text style={styles.errorText}>Passwords not matching</Text>
                      </View>
                  }
                </View>             

              <View style={[styles.formInputView,styles.marginBottom30],{flexDirection:'row',alignItem:'center',alignSelf:'center',marginTop:"10%"}}>
          
                    <Button
                        onPress         = {this.resetPassword}
                        titleStyle      = {styles.buttonText}
                        title           = "Submit"
                        buttonStyle     = {styles.button}
                        containerStyle  = {styles.buttonContainer}
                    />
                </View>
                <Modal isVisible={this.state.openModal}  
                         onBackdropPress={() => this.setState({ openModal: false })}
                         coverScreen={true}
                         hideModalContentWhileAnimating={true}
                         style={{paddingHorizontal:'5%',zIndex:999}}
                         animationOutTiming={500}>
                    <View style={{backgroundColor:"#fff",alignItems:'center',borderRadius:20,paddingVertical:30,paddingHorizontal:10}}>
                      <View style={{justifyContent:'center',backgroundColor:"#34be34",width:50,height:50,borderRadius:25,overflow:'hidden'}}>
                        <Icon size={30} name='check' type='fontAwesome' color='#fff' style={{}}/>
                      </View>
                      <Text style={{fontFamily:'Montserrat-Regular',fontSize:15,textAlign:'center',marginTop:20}}>
                        Passowrd Changed successfully!
                      </Text>
                     
                      <View style={{/*width:'100%',*/borderBottomRightRadius:500,marginTop:15,flexDirection:'row'}}>
                        <Button
                          onPress         = {()=>this.props.navigation.navigate('UserProfile')}
                          titleStyle      = {styles.buttonText}
                          title           = "OK"
                          buttonStyle     = {{width:'100%',height:45,alignItems:'center',justifyContent:'center',borderRadius:50}}
                          containerStyle  = {styles.buttonContainer}
                        />
                      </View>
                    </View>
                  </Modal>
            </ScrollView>
        </Drawer>
    );
  }
}


 