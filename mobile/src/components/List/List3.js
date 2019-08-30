import React, { Component } from "react";
import { AppRegistry,StyleSheet,Text,View,TextInput,BackHandler,TouchableOpacity,TouchableHighlight,Dimensions,Linking,PermissionsAndroid, ScrollView,Platform, Image,ImageBackground,Alert,SafeAreaView, AsyncStorage} from "react-native";
import { Header, Button, Icon,Card,Avatar,Tooltip} from "react-native-elements";
import { NavigationActions } from "react-navigation";
import ImageOverlay from "react-native-image-overlay";

import SideMenu from 'react-native-side-menu';
import PropTypes from "prop-types";
import Drawer from 'react-native-drawer';
import getDirections from 'react-native-google-maps-directions';
import Swiper from "react-native-web-swiper";
// import Carousel from 'react-native-snap-carousel';
import { CameraKitCameraScreen, } from 'react-native-camera-kit';
import axios from "../../config/axios.js";

import HeaderDy from "../../layouts/HeaderDy/HeaderDy.js";
import styles from "./styles.js";
import Menu from '../../layouts/Menu/Menu.js';
import Notification from '../../layouts/Notification/Notification.js';
import HeaderBar from "../../layouts/HeaderBar/HeaderBar.js";
import Carousel from 'react-native-banner-carousel';
import Collapsible from 'react-native-collapsible';
import GestureRecognizer from 'react-native-swipe-gestures';
import AlertPro from "react-native-alert-pro";
import Modal from "react-native-modal";

// import QRCodeS/canner from 'react-native-qrcode-scanner';



const window = Dimensions.get('window');

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;
 
const images = [
    "../../images/Image-Crop.png",
    "../../images/Image-Crop.png",
    "../../images/Image-Crop.png"
];


export default class List3 extends Component {

  constructor(props){
    super(props);
    this.state = {

    };
    this.handleCollapse = this.handleCollapse.bind(this);
  }

  toggleModal = () => {
    this.setState({openModal: !this.state.openModal})
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

  handleLogout(){
    Meteor.logout();
    Actions.LogIn();
  }
  closeControlPanel = () => {
    this._drawer.close()
  }

  openControlPanel = () => {
    this._drawer.open()
  }

handleCollapse=(state)=>{
  // console.log('index',index)
  // let {isCollapsed} = this.state
  // let newState = !isCollapsed[index];
  // isCollapsed[index] = newState;
  // console.log('newState',newState)
  // this.setState({
  //   isCollapsed : isCollapsed
  // })
  // console.log('isCollapsed',this.state.isCollapsed)
  this.setState({[state] : !this.state[state]})

}


  
  render(){
    const { navigate, goBack, state } = this.props.navigation;
    const menu = <Menu navigate={navigate} isOpen={this.state.isOpen}/>;
      return (

      <React.Fragment> 
                <View style={{ flex: 1,borderWidth:0,padding:0,backgroundColor:'#fff'}}>
                  <View style={{flex:1,}}>
                    <ScrollView createContainerStyle={{borderWidth:0,margin:0}}>                     
                                <View style={{flex:1,flexDirection:'row',paddingTop:20,paddingHorizontal:15,marginBottom:15,justifyContent:'space-between',shadowOffset:{  width: 10,  height: 10,  },shadowColor: 'black',shadowOpacity: 1.0,}}>
                                  <TouchableOpacity style={{flex:0.48,borderColor:'#000',borderWidth:1,}} onPress={()=>this.props.navigation.navigate('SearchList')}>
                                            <View style={{alignSelf:'center',paddingHorizontal:20,paddingVertical:15,}}>
                                                <Text style={styles.title}>Settings</Text>
                                            </View>
                                  </TouchableOpacity>
                                  <TouchableOpacity style={{flex:0.48,borderColor:'#000',borderWidth:1,}} onPress={()=>this.props.navigation.navigate('SearchList')}>
                                              <View style={{alignSelf:'center',paddingHorizontal:20,paddingVertical:15,}}>
                                                  <Text style={styles.title}>Notification</Text>
                                              </View>
                                  </TouchableOpacity>
                                </View>
{/*                                <View style={{flex:1,flexDirection:'row',paddingTop:20,paddingHorizontal:15,marginBottom:15,justifyContent:'space-between',shadowOffset:{  width: 10,  height: 10,  },shadowColor: 'black',shadowOpacity: 1.0,}}>
                                  <TouchableOpacity style={{flex:1,borderColor:'#000',borderWidth:1,}} onPress={()=>this.props.navigation.navigate('SearchList')}>
                                            <View style={{alignSelf:'center',paddingHorizontal:20,paddingVertical:15,}}>
                                                <Text style={styles.title}>Last Day Management</Text>
                                            </View>
                                  </TouchableOpacity>
                                </View>*/}
                    </ScrollView>
                </View>        
              </View>
      </React.Fragment> 
    )
  }
}