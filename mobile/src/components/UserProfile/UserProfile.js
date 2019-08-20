import React, { Component } from "react";
import { StyleSheet,Text,View,TextInput,BackHandler,TouchableOpacity, ScrollView,Platform,Dimensions, Image,ImageBackground,Alert,AsyncStorage} from "react-native";
import { Header, Button, Icon,Card,Avatar} from "react-native-elements";
import { NavigationActions } from "react-navigation";
import ImageOverlay from "react-native-image-overlay";

import SideMenu from 'react-native-side-menu';
import PropTypes from "prop-types";
import Drawer from 'react-native-drawer';
import axios from "../../config/axios.js";

import styles from "./styles.js";

// import MenuBar from '../Menu/Menu.js';
import HeaderDy from "../../layouts/HeaderDy/HeaderDy.js";


 const window = Dimensions.get('window');
export default  class UserProfile extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: ''
    };
  }
  componentWillMount(){
    var token;
    var user_id;
    AsyncStorage.multiGet(['token','user_id'])
      .then((data)=>{
        // console.log('user',data[1][1])
        token = data[0][1]
        user_id = data[1][1]
        axios.get('api/users/get/one/'+user_id)
          .then(response=>{
            // console.log('user',response)
            this.setState({user:response.data})
          })
          .catch(error=>{
            console.log('error',error)
          })
      })
    // axios.get('api/users/one/'+user_id)
    //   .then(response=>{
    //     console.log('user',response)
    //   })
    //   .catch(error=>{
    //     console.log('error',error)
    //   })
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

  
  render(){

    const { navigate, goBack, state } = this.props.navigation;

    // console.log('user',this.state.user)
    // const menu = <MenuBar navigate={navigate} />;
   
    // var navigationView = <NotificationCommon closeDrawer={this.closeDrawer} notificationData={[]} navigation={this.props.navigation}/>

    return(
        <Drawer
            ref={(ref) => this._drawer = ref}
            // openDrawerOffset={(viewport) => viewport.width-}
            side="left"
            >
            
            <HeaderDy goBack={goBack} headerTitle="User Profile" />
            <ScrollView  keyboardShouldPersistTaps="handled" >
               <TouchableOpacity  onPress         = {() => this.props.navigation.navigate("EditUserProfile",{user_id:this.state.user._id})}>
                <View style={{alignItems:'flex-end',paddingHorizontal:20,backgroundColor:"#fff"}}>
                    <Icon name="account-edit" type="material-community" size={30}  color="#333" />
                </View>
              </TouchableOpacity>
              {
                this.state.user != '' ?
                <React.Fragment>
                  <View style={{ flex: 1,backgroundColor:'#fff'}}>
                      <View style={{flexDirection:'row',alignSelf:'center',marginTop:"5%"}}>             
                        <Avatar
                          width={120}
                          height={120}
                          rounded
                          source={require("../../images/pwalker.jpg")}
                          activeOpacity={0.9}
                        />                   
                    </View>           
                  </View>
                  <View style={{alignSelf:'center',paddingVertical:10}}>
                    <Text style={styles.userTitleTxt}>{this.state.user.profile.fullName}</Text>
                  </View>


                  <View style={{marginTop:"10%"}}>
                    <View style={{flexDirection:'row',marginBottom:10}}>
                      <View style={{flex:.2,marginTop:1}}>
                        <Icon name="user-circle-o" type="font-awesome" size={15}  color="#666"/>
                      </View>
                      <View style={{flex:.8,flexDirection:'row'}}>
                        <Text style={{fontSize:15,color:'#666',flex:0.3, fontFamily:'Montserrat-Regular'}}>Name </Text>
                        <Text style={styles.detailText}>{this.state.user.profile.fullName}</Text>
                      </View>
                    </View>

                    <View style={{flex:1,flexDirection:'row',marginBottom:10}}>
                      <View style={{flex:.2,marginTop:4}}>
                        <Icon name="mobile-phone" type="font-awesome" size={20}  color="#666"/>
                      </View>
                      <View style={{flex:.8,flexDirection:'row',marginTop:5}}>
                       <Text style={{fontSize:15,color:'#666',flex:0.3,fontFamily:'Montserrat-Regular'}}>Mobile </Text>
                        <Text style={styles.detailText}>{this.state.user.mobileNumber}</Text>
                      </View>
                    </View>
                    <View style={{flex:1,flexDirection:'row',marginBottom:10}}>
                      <View style={{flex:.2,marginTop:5}}>
                        <Icon name="email" type="MaterialIcons" size={15}  color="#666"/>
                      </View>
                      <View style={{flex:.8,flexDirection:'row',marginTop:5}}>
                       <Text style={{fontSize:15,color:'#666',flex:0.3,fontFamily:'Montserrat-Regular'}}>Email </Text>
                        <Text style={styles.detailText}>{this.state.user.profile.emailId}</Text>
                      </View>
                    </View>
                  </View>

                  <View style={{flex:1,paddingHorizontal:20,marginTop:8,}}>
                  
                    <View style={{borderWidth:1,paddingHorizontal:15,borderColor:'#aaa',borderRadius:5,paddingVertical:10,shadowOpacity: 0.75,shadowRadius: 5,shadowColor: 'red',shadowOffset: { height: 0, width: 0 },}}>
                      <View style={{flex:1,paddingVertical:5}}>
                       <Text style={{fontSize:15,color:'#333',flex:0.5,fontFamily:'Montserrat-SemiBold'}}>Subscription Details</Text>
                      </View>

                       <View style={{flex:1,flexDirection:'row',marginBottom:5}}>
                        <View style={{flex:.5,marginTop:5}}>
                         <Text style={{fontSize:15,color:'#666',flex:0.5,fontFamily:'Montserrat-Regular'}}>Type</Text>
                          <Text style={styles.detailText}>Weekly</Text>
                        </View>
                     
                        
                        <View style={{flex:.5,marginTop:5}}>
                         <Text style={{fontSize:15,color:'#666',flex:0.5,fontFamily:'Montserrat-Regular'}}>Available Check-ins</Text>
                          <Text style={styles.detailText}>04</Text>
                        </View>
                      </View>
                  
                      <View style={{flex:1,flexDirection:'row',marginBottom:10}}>
                        <View style={{flex:.5,marginTop:5}}>
                         <Text style={{fontSize:15,color:'#666',flex:0.5,fontFamily:'Montserrat-Regular'}}>Start-Date</Text>
                          <Text style={styles.detailText}>07 Aug 2019</Text>
                        </View>
                     
                        
                        <View style={{flex:.5,marginTop:5}}>
                         <Text style={{fontSize:15,color:'#666',flex:0.5,fontFamily:'Montserrat-Regular'}}>End-Date</Text>
                          <Text style={styles.detailText}>14 Aug 2019</Text>
                        </View>
                      </View>
                  
                    </View>
                  </View>

                  <View style={[styles.formInputView,styles.marginBottom30],{flexDirection:'row',paddingHorizontal:20,marginTop:15,alignSelf:'center',justifyContent:'center',alignItem:'center'}}>
              
                        <Button
                            onPress         = {() => this.props.navigation.navigate("ChangePassword",{user_id:this.state.user._id})}
                            titleStyle      = {styles.buttonText}
                            title           = "Change Password"
                            buttonStyle     = {styles.button}
                            containerStyle  = {styles.buttonContainer}
                        />
                    </View>
                </React.Fragment>
                :
                null
              }
{/*              <View style={{ flex: 1,backgroundColor:'#fff'}}>
                  <View style={{flexDirection:'row',alignSelf:'center',marginTop:"5%"}}>             
                    <Avatar
                      width={120}
                      height={120}
                      rounded
                      source={require("../../images/pwalker.jpg")}
                      activeOpacity={0.9}
                    />                   
                </View>           
              </View>
              <View style={{alignSelf:'center',paddingVertical:10}}>
                <Text style={styles.userTitleTxt}>Paul Walker</Text>
              </View>


              <View style={{marginTop:"10%",paddingLeft:5}}>
                <View style={{flexDirection:'row',marginBottom:10}}>
                  <View style={{flex:.2,marginTop:1}}>
                    <Icon name="user-circle-o" type="font-awesome" size={15}  color="#666"/>
                  </View>
                  <View style={{flex:.8,flexDirection:'row'}}>
                    <Text style={{fontSize:15,color:'#666',flex:0.3, fontFamily:'Montserrat-Regular'}}>Name </Text>
                    <Text style={styles.detailText}>Paul Walker</Text>
                  </View>
                </View>

                <View style={{flex:1,flexDirection:'row',marginBottom:10}}>
                  <View style={{flex:.2,marginTop:4}}>
                    <Icon name="mobile-phone" type="font-awesome" size={20}  color="#666"/>
                  </View>
                  <View style={{flex:.8,flexDirection:'row',marginTop:5}}>
                   <Text style={{fontSize:15,color:'#666',flex:0.3,fontFamily:'Montserrat-Regular'}}>Mobile </Text>
                    <Text style={styles.detailText}>8446161390</Text>
                  </View>
                </View>
                <View style={{flex:1,flexDirection:'row',marginBottom:10}}>
                  <View style={{flex:.2,marginTop:5}}>
                    <Icon name="email" type="MaterialIcons" size={15}  color="#666"/>
                  </View>
                  <View style={{flex:.8,flexDirection:'row',marginTop:5}}>
                   <Text style={{fontSize:15,color:'#666',flex:0.3,fontFamily:'Montserrat-Regular'}}>Email </Text>
                    <Text style={styles.detailText}>paul.walker@coffic.com</Text>
                  </View>
                </View>
              </View>

              <View style={{flex:1,paddingHorizontal:20,marginTop:8,}}>
              
                <View style={{borderWidth:1,paddingHorizontal:15,borderColor:'#aaa',borderRadius:5,paddingVertical:10,shadowOpacity: 0.75,shadowRadius: 5,shadowColor: 'red',shadowOffset: { height: 0, width: 0 },}}>
                  <View style={{flex:1,paddingVertical:5}}>
                   <Text style={{fontSize:15,color:'#333',flex:0.5,fontFamily:'Montserrat-SemiBold'}}>Subscription Details</Text>
                  </View>

                   <View style={{flex:1,flexDirection:'row',marginBottom:5}}>
                    <View style={{flex:.5,marginTop:5}}>
                     <Text style={{fontSize:15,color:'#666',flex:0.5,fontFamily:'Montserrat-Regular'}}>Type</Text>
                      <Text style={styles.detailText}>Weekly</Text>
                    </View>
                 
                    
                    <View style={{flex:.5,marginTop:5}}>
                     <Text style={{fontSize:15,color:'#666',flex:0.5,fontFamily:'Montserrat-Regular'}}>Available Check-ins</Text>
                      <Text style={styles.detailText}>04</Text>
                    </View>
                  </View>
              
                  <View style={{flex:1,flexDirection:'row',marginBottom:10}}>
                    <View style={{flex:.5,marginTop:5}}>
                     <Text style={{fontSize:15,color:'#666',flex:0.5,fontFamily:'Montserrat-Regular'}}>Start-Date</Text>
                      <Text style={styles.detailText}>07 Aug 2019</Text>
                    </View>
                 
                    
                    <View style={{flex:.5,marginTop:5}}>
                     <Text style={{fontSize:15,color:'#666',flex:0.5,fontFamily:'Montserrat-Regular'}}>End-Date</Text>
                      <Text style={styles.detailText}>14 Aug 2019</Text>
                    </View>
                  </View>
              
              </View>
              </View>

              <View style={[styles.formInputView,styles.marginBottom30],{flexDirection:'row',paddingHorizontal:20,marginTop:15,alignSelf:'center',justifyContent:'center',alignItem:'center'}}>
          
                    <Button
                        onPress         = {() => this.props.navigation.navigate("ChangePassword")}
                        titleStyle      = {styles.buttonText}
                        title           = "Change Password"
                        buttonStyle     = {styles.button}
                        containerStyle  = {styles.buttonContainer}
                    />
                </View>*/}
            </ScrollView>
        </Drawer>
    );
  }
}