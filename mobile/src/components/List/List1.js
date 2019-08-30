import React, { Component } from "react";
import { StyleSheet,Text,View,TextInput,BackHandler,TouchableOpacity, ScrollView,Platform, Image,ImageBackground,Alert} from "react-native";
import { Header, Button, Icon,Card,Avatar} from "react-native-elements";
import { NavigationActions } from "react-navigation";
import ImageOverlay from "react-native-image-overlay";

import SideMenu from 'react-native-side-menu';
import PropTypes from "prop-types";
import Drawer from 'react-native-drawer';
import axios from "../../config/axios.js";
import HomeStack from "../../config/routes.js";

// import Icon from 'react-native-ionicons';

import styles from "./styles.js";
import Menu from '../../layouts/Menu/Menu.js';
import Notification from '../../layouts/Notification/Notification.js';
import HeaderBar from "../../layouts/HeaderBar/HeaderBar.js";

export default  class List1 extends Component {

  constructor(props){
    super(props);
    this.state = {
       isOpen: false,
       data:[],
       workspaceList: []

    };
  }
  componentDidMount(){
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


  
  render(){

    const { navigate, goBack, state } = this.props.navigation;
    const menu = <Menu navigate={navigate} isOpen={this.state.isOpen}/>;
    
    return(
      <React.Fragment>
{/*
            <HeaderBar navigate={navigate}
              navigattion = {this.props.navigation}
              headerTitle="Team Congress"
              toggle={()=>this.toggle.bind(this)} 
              openControlPanel={()=>this.openControlPanel.bind(this)}
            />*/}
            <View style={{ flex: 1,borderWidth:0,paddingTop:0,backgroundColor:'#fff'}}>
                <View style={{flex:1,}}>
                    <ScrollView createContainerStyle={{borderWidth:0,margin:0}}>
                              
                                <View style={{flex:1,flexDirection:'row',paddingTop:20,paddingHorizontal:15,marginBottom:15,justifyContent:'space-between',shadowOffset:{  width: 10,  height: 10,  },shadowColor: 'black',shadowOpacity: 1.0,}}>
                                  <TouchableOpacity style={{flex:0.48,borderColor:'#000',borderWidth:1,}} onPress={()=>this.props.navigation.navigate('SearchList')}>
{/*                                        <ImageOverlay
                                        source={require('../../images/Morzine-Restaurants.jpg')}
                                        height={145}
                                        overlayColor="#333"
                                        overlayAlpha={0.6}
                                        containerStyle={{width:'100%'}}
                                        contentPosition="top">*/}
                                            <View style={{alignSelf:'center',paddingHorizontal:20,paddingVertical:15,}}>
                                                <Text style={styles.title}>Search</Text>
                                            </View>
                                        {/*</ImageOverlay>*/}
                                  </TouchableOpacity>
                                  <TouchableOpacity style={{flex:0.48,borderColor:'#000',borderWidth:1,}} onPress={()=>this.props.navigation.navigate('SearchList')}>
                                              <View style={{alignSelf:'center',paddingHorizontal:20,paddingVertical:15,}}>
                                                  <Text style={styles.title}>Voter List</Text>
                                              </View>
                                  </TouchableOpacity>
                                </View>
                                <View style={{flex:1,flexDirection:'row',paddingHorizontal:15,marginBottom:15,justifyContent:'space-between',shadowOffset:{  width: 10,  height: 10,  },shadowColor: 'black',shadowOpacity: 1.0,}}>
                                  <TouchableOpacity style={{flex:1,borderColor:'#000',borderWidth:1,}} onPress={()=>this.props.navigation.navigate('SearchList')}>
                                            <View style={{alignSelf:'center',paddingHorizontal:20,paddingVertical:15,}}>
                                                <Text style={styles.title}>Distribution</Text>
                                            </View>
                                  </TouchableOpacity>
                                </View>
                    </ScrollView>
                </View>
            </View>
      </React.Fragment>
    );
  }
}


 