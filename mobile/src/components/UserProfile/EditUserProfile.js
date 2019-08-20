import React, { Component } from "react";
import { StyleSheet,Text,View,TextInput,BackHandler,TouchableOpacity, ScrollView,Platform,Dimensions, Image,ImageBackground,Alert} from "react-native";
import { Header, Button, Icon,Card,Avatar} from "react-native-elements";
import { NavigationActions } from "react-navigation";
import ImageOverlay from "react-native-image-overlay";

import SideMenu from 'react-native-side-menu';
import PropTypes from "prop-types";
import Drawer from 'react-native-drawer';
import { TextField } from 'react-native-material-textfield';
import axios from "../../config/axios.js";

import styles from "./styles.js";

// import MenuBar from '../Menu/Menu.js';
import HeaderDy from "../../layouts/HeaderDy/HeaderDy.js";
import Modal from "react-native-modal";


 const window = Dimensions.get('window');
export default  class EditUserProfile extends Component {

  constructor(props){
    super(props);
    this.state = {
      fullName:"",
      mobileNumber:'',
      emailId:"",
      user_id:"",
      openModal: false
    };
  }
  componentDidMount(){
    var user_id = this.props.navigation.getParam('user_id','No id')
    this.setState({user_id:user_id})
    axios.get('api/users/get/one/'+user_id)
          .then(response=>{
            // console.log('user in edit',response)
            this.setState({
              fullName:response.data.profile.fullName,
              mobileNumber: response.data.mobileNumber,
              emailId: response.data.profile.emailId,
            })
          })
          .catch(error=>{
            console.log('error',error)
          })
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

  updateProfile = () =>{
    const {fullName,mobileNumber,user_id,emailId} = this.state;
    var firstName = fullName.split(' ')[0]
    var lastName = fullName.split(' ')[1]
    var updateValues = {
      firstName: firstName,
      lastName : lastName,
      emailId  : emailId,
      mobileNumber: mobileNumber
    }
    axios.patch('api/users/patch/one/'+user_id,updateValues)
      .then(response=>{
        console.log('response',response)
        this.setState({openModal:true})
        this.props.navigation.navigate('UserProfile')
      })
      .catch(error=>{
        console.log('error',error)
      })
  }
  goToEdit = ()=>{
    this.setState({openModal:false})
    this.props.navigation.navigate('UserProfile')
  }
  render(){

    const { navigate, goBack, state } = this.props.navigation;
    const { fullName, emailId, mobileNumber } = this.state;
    // console.log('fullName',fullName)
    // console.log('emailId',emailId)
    // console.log('mobileNumber',mobileNumber)
    // const menu = <MenuBar navigate={navigate} />;
   
    // var navigationView = <NotificationCommon closeDrawer={this.closeDrawer} notificationData={[]} navigation={this.props.navigation}/>

    return(
        <Drawer
            ref={(ref) => this._drawer = ref}
            // openDrawerOffset={(viewport) => viewport.width-}
            side="left"
            >
            
            <HeaderDy goBack={goBack} headerTitle="Edit User Profile" />
            <ScrollView  keyboardShouldPersistTaps="handled" >
               <View style={{marginTop:"10%",paddingHorizontal:20}}>
               <View style={{ flex: 1,backgroundColor:'#fff'}}>
                  <View style={{flexDirection:'row',alignSelf:'center',marginBottom:"5%"}}>             
                    <Avatar
                      width={120}
                      height={120}
                      rounded
                      source={require("../../images/pwalker.jpg")}
                      activeOpacity={0.9}
                    />                   
                </View>           
              </View>
                 <View style={[styles.formInputView],{marginBottom:20}}>
              <View style={[styles.inputWrapper]}>
                  {/*  <View style={styles.inputImgWrapper}>
                      <Icon name="user-circle-o" type="font-awesome" size={18}  color="#aaa" style={{}}/>
                    </View>*/}
                    <View style={styles.inputTextWrapper}>
                      
                      <TextField
                        label                 = "Full Name"
                        onChangeText          = {fullName => this.setState({ fullName })}
                        lineWidth             = {1}
                        tintColor             = {'#aaa'}
                        inputContainerPadding = {0}
                        labelHeight           = {15}
                        labelFontSize         = {13}
                        titleFontSize         = {15}
                        baseColor             = {'#666'}
                        textColor             = {'#333'}
                        value                 = { fullName != '' ? fullName : "" }
                        containerStyle        = {styles.textContainer}
                        inputContainerStyle   = {styles.textInputContainer}
                        titleTextStyle        = {styles.textTitle}
                        style                 = {styles.textStyle}
                        labelTextStyle        = {styles.textLabel}
                        keyboardType          = "default"
                        maxLength             = {50}
                      />
                    </View>
                  </View>
                  </View>
                   <View style={[styles.formInputView],{marginBottom:20}}>
                    <View style={[styles.inputWrapper]}>
                  {/*  <View style={styles.inputImgWrapper}>
                      <Icon name="user-circle-o" type="font-awesome" size={18}  color="#aaa" style={{}}/>
                    </View>*/}
                    <View style={styles.inputTextWrapper}>
                      
                      <TextField
                        label                 = "Mobile"
                        onChangeText          = {mobileNumber => this.setState({ mobileNumber })}
                        lineWidth             = {1}
                        tintColor             = {'#aaa'}
                        inputContainerPadding = {0}
                        labelHeight           = {15}
                        labelFontSize         = {13}
                        titleFontSize         = {15}
                        baseColor             = {'#666'}
                        textColor             = {'#333'}
                        value                 = { mobileNumber !='' ? mobileNumber : '' }
                        containerStyle        = {styles.textContainer}
                        inputContainerStyle   = {styles.textInputContainer}
                        titleTextStyle        = {styles.textTitle}
                        style                 = {styles.textStyle}
                        labelTextStyle        = {styles.textLabel}
                        keyboardType          = "default"
                        maxLength             = {50}
                      />
                    </View>
                  </View>
                  </View>
                   <View style={[styles.formInputView],{marginBottom:20}}>
                    <View style={[styles.inputWrapper]}>
                   {/* <View style={styles.inputImgWrapper}>
                      <Icon name="user-circle-o" type="font-awesome" size={18}  color="#aaa" style={{}}/>
                    </View>*/}
                    <View style={styles.inputTextWrapper}>
                      
                      <TextField
                        label                 = "Email"
                        // onChangeText          = {name => this.setState({ name })}
                        lineWidth             = {1}
                        tintColor             = {'#aaa'}
                        inputContainerPadding = {0}
                        labelHeight           = {15}
                        labelFontSize         = {13}
                        titleFontSize         = {15}
                        baseColor             = {'#666'}
                        textColor             = {'#333'}
                        value                 = { emailId != '' ? emailId : '' }
                        containerStyle        = {styles.textContainer}
                        inputContainerStyle   = {styles.textInputContainer}
                        titleTextStyle        = {styles.textTitle}
                        style                 = {styles.textStyle}
                        labelTextStyle        = {styles.textLabel}
                        keyboardType          = "default"
                        maxLength             = {50}
                        editable              = {false}
                      />
                    </View>
                  </View>
                </View>
                         

              <View style={[styles.formInputView,styles.marginBottom30],{flexDirection:'row',marginTop:15,alignSelf:'center',justifyContent:'center',alignItem:'center'}}>
          
                  <Button
                    onPress         = {this.updateProfile}
                    titleStyle      = {styles.buttonText}
                    title           = "Update Profile"
                    buttonStyle     = {styles.button}
                    containerStyle  = {styles.buttonContainer}
                  />
                </View>
                </View>
                      <Modal isVisible={this.state.openModal}  
                             onBackdropPress={() => this.setState({ openModal: false })}
                             coverScreen={true}
                             hideModalContentWhileAnimating={true}
                             style={{paddingHorizontal:'5%',zIndex:999}}
                             animationOutTiming={500}>
                        <View style={{backgroundColor:"#fff",alignItems:'center',borderRadius:20,paddingVertical:30,paddingHorizontal:10}}>
                          <View style={{justifyContent:'center',backgroundColor:"transparent",width:60,height:60,borderRadius:30,overflow:'hidden'}}>
                            <Icon size={50} name='coffee' type='feather' color='#666' style={{}}/>
                          </View>
                          <Text style={{fontFamily:'Montserrat-Regular',fontSize:15,textAlign:'center',marginTop:20}}>
                            Profile updated successfully! 
                          </Text>
                          <View style={{width:'100%',borderBottomRightRadius:500,marginTop:15}}>
                            <Button
                              onPress         = {()=>this.toggleModal()}
                              titleStyle      = {styles.buttonText}
                              title           = "OK"
                              buttonStyle     = {styles.buttonSignUp}
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


 