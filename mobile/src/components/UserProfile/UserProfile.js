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
            
{/*            <HeaderDy goBack={goBack} headerTitle="User Profile" />*/}
            <ScrollView  keyboardShouldPersistTaps="handled" >
               <TouchableOpacity >
              </TouchableOpacity>
                <React.Fragment>
                  <View style={{ flexDirection:'row'/*,backgroundColor:"#d3d"*/,paddingTop:10}}>
                      <View style={{flex:1,}}>
                        <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:"#111",paddingTop:8,paddingLeft:10}}>
                          <Text style={{flex:0.6}}>Const No: </Text>
                          <Text>232</Text>
                        </View>
                        <View style={{flexDirection:'row',borderBottomWidth:1,paddingLeft:10,borderColor:"#111",paddingVertical:8}}>
                          <Text style={{flex:0.6}}>Booth</Text>
                          <Text>1</Text>
                        </View>
                        <View style={{flexDirection:'row',borderBottomWidth:1,paddingLeft:10,borderColor:"#111",paddingVertical:8}}>
                          <Text style={{flex:0.6}}>Sr. No.</Text>
                          <Text>1</Text>
                        </View>
                      </View>
                      <View style={{alignSelf:'flex-end',borderWidth:1,borderColor:"#111",padding:8}}>             
                        <Avatar
                          width={80}
                          height={80}
                          rounded
                          source={require("../../images/userIcon.png")}
                          activeOpacity={0.9}
                        />                   
                    </View>           
                  </View>
                  <View style={{paddingTop:10}}>
                      <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:"#111",paddingTop:8,paddingLeft:10}}>
                        <Text style={{flex:0.4}}>Name </Text>
                        <Text style={{flex:0.6}}> Aralvad  Gangabai Maroti </Text>
                      </View>
                  </View>
                </React.Fragment>
            </ScrollView>
        </Drawer>
    );
  }
}