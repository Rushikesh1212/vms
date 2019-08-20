import React, { Component } from "react";
import { StyleSheet,Text,View,TextInput,BackHandler,TouchableOpacity, ScrollView,Platform, Image,ImageBackground,Alert} from "react-native";
import { Header, Button, Icon,Card,Avatar} from "react-native-elements";
import { NavigationActions } from "react-navigation";
import ImageOverlay from "react-native-image-overlay";

import SideMenu from 'react-native-side-menu';
import PropTypes from "prop-types";
import Drawer from 'react-native-drawer';
// import Icon from 'react-native-ionicons';

import styles from "./styles.js";
import Menu from '../../layouts/Menu/Menu.js';
import Notification from '../../layouts/Notification/Notification.js';
import HeaderDy from "../../layouts/HeaderDy/HeaderDy.js";
export default  class QRData extends Component {

  constructor(props){
    super(props);
    this.state = {
       isOpen: false,
       data:[],
       qrcodeData:'',
       scanner: undefined,

    };
  }
  componentDidMount(){
    const qrcodeData = this.props.navigation.getParam('data',"No data read")
    const scanner    = this.props.navigation.getParam('scanner',()=>false)
    console.log('qrcodeData',qrcodeData)
    console.log('scanner',scanner)
    this.setState({qrcodeData:qrcodeData,scanner:scanner})
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

  scanAgain(){
    this.state.scanner.reactivate();
    this.props.navigation.goBack();
  }
  render(){

    const { navigate, goBack, state } = this.props.navigation;
    const menu = <Menu navigate={navigate} isOpen={this.state.isOpen}/>;
    
    // var navigationView = <NotificationCommon closeDrawer={this.closeDrawer} notificationData={[]} navigation={this.props.navigation}/>

    return(
      <React.Fragment>

            <HeaderDy goBack={goBack} headerTitle="Scan QR code" />            
            <View>
              <Text>{this.state.qrcodeData}</Text>
              <Button
                title={'Scan again'}
                onPress={()=>this.scanAgain}
              />
            </View>
      </React.Fragment>
    );
  }
}


 