import React, { Component } from "react";
import { StyleSheet,Text,View,TextInput,BackHandler,TouchableOpacity, ScrollView,Platform,Dimensions, Image,ImageBackground,Alert} from "react-native";
import { Header, Button, Icon,Card,Avatar} from "react-native-elements";
import { NavigationActions } from "react-navigation";
import ImageOverlay from "react-native-image-overlay";

import SideMenu from 'react-native-side-menu';
import PropTypes from "prop-types";
import Drawer from 'react-native-drawer';

import styles from "../UserProfile/styles.js";

// import MenuBar from '../Menu/Menu.js';
import HeaderBar from "../../layouts/HeaderBar/HeaderBar.js";


 const window = Dimensions.get('window');
export default  class SearchList extends Component {

  constructor(props){
    super(props);
    this.state = {
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

  
  render(){

    const { navigate, goBack, state } = this.props.navigation;

    // const menu = <MenuBar navigate={navigate} />;
   
    // var navigationView = <NotificationCommon closeDrawer={this.closeDrawer} notificationData={[]} navigation={this.props.navigation}/>

    return(
            <ScrollView  keyboardShouldPersistTaps="handled" >
              <HeaderBar navigate={navigate}
                navigattion = {this.props.navigation}
                headerTitle="Team Congress"
                toggle={()=>this.toggle.bind(this)} 
                openControlPanel={()=>this.openControlPanel.bind(this)}
              />
              <View style={{ flex: 1,backgroundColor:'#fff',paddingHorizontal:20}}>
                  <Text>abcjabc</Text>
              </View>
            </ScrollView>
    );
  }
}
  

 