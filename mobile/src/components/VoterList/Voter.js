import React, { Component } from "react";
import { StyleSheet,Text,View,TextInput,BackHandler,TouchableOpacity, ScrollView,Platform,Dimensions, Image,ImageBackground,Alert,/*AsyncStorage*/} from "react-native";
import { Header, Button, Icon,Card,Avatar} from "react-native-elements";
import AsyncStorage from '@react-native-community/async-storage'
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
export default  class Voter extends Component {

  constructor(props){
    super(props);
    this.state = {
      subscriptionList: []
    };
  }
  componentDidMount(){
  };
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
    // console.log('subscriptionList in render',this.state.subscriptionList)
    // const menu = <MenuBar navigate={navigate} />;
   
    // var navigationView = <NotificationCommon closeDrawer={this.closeDrawer} notificationData={[]} navigation={this.props.navigation}/>

    return(
        <Drawer
            ref={(ref) => this._drawer = ref}
            // openDrawerOffset={(viewport) => viewport.width-}
            side="left"
            >
            
            <ScrollView  keyboardShouldPersistTaps="handled" >
              <View style={{flex:1,flexDirection:'row',paddingTop:20,paddingHorizontal:15,marginBottom:15,justifyContent:'space-between',shadowOffset:{  width: 10,  height: 10,  },shadowColor: 'black',shadowOpacity: 1.0,}}>
                <TouchableOpacity style={styles.box} onPress={()=>this.props.navigation.navigate('BoothList')}>
{/*                                        <ImageOverlay
                      source={require('../../images/Morzine-Restaurants.jpg')}
                      height={145}
                      overlayColor="#333"
                      overlayAlpha={0.6}
                      containerStyle={{width:'100%'}}
                      contentPosition="top">*/}
                            <Icon name="th-list" type="font-awesome" size={50}  color="#0275D8" style={{}}/>
                            <View style={{alignSelf:'center'}}>
                              <Text style={styles.title}>Booth List</Text>
                          </View>
                      {/*</ImageOverlay>*/}
                </TouchableOpacity>
                <TouchableOpacity style={styles.box} onPress={()=>this.props.navigation.navigate('AllVoterList')}>
                            <Icon name="address-card" type="font-awesome" size={50}  color="#0275D8" style={{}}/>
                            <View style={{alignSelf:'center'}}>
                                <Text style={styles.title}>All Voter List</Text>
                            </View>
                </TouchableOpacity>
              </View>
              <View style={{flex:1,flexDirection:'row',paddingHorizontal:15,marginBottom:15,justifyContent:'space-between',shadowOffset:{  width: 10,  height: 10,  },shadowColor: 'black',shadowOpacity: 1.0,}}>

                <TouchableOpacity style={styles.box} onPress={()=>this.props.navigation.navigate('SurnameList')}>
                            <Icon name="list-alt" type="font-awesome" size={50}  color="#0275D8" style={{}}/>
                          <View style={{alignSelf:'center',}}>
                              <Text style={styles.title}>Surname List</Text>
                          </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box} onPress={()=>this.props.navigation.navigate('AgeList')}>
                            <Icon name="sort-numeric-asc" type="font-awesome" size={50}  color="#0275D8" style={{}}/>
                          <View style={{alignSelf:'center',}}>
                              <Text style={styles.title}>Age List</Text>
                          </View>
                </TouchableOpacity>
              </View>              

              <View style={{flex:1,flexDirection:'row',paddingHorizontal:15,marginBottom:15,justifyContent:'space-between',shadowOffset:{  width: 10,  height: 10,  },shadowColor: 'black',shadowOpacity: 1.0,}}>
                <TouchableOpacity style={styles.box} onPress={()=>this.props.navigation.navigate('AllVoterList',{category:'favourite'})}>
                            <Icon name="star" type="fontisto" size={50}  color="#0275D8" style={{}}/>
                          <View style={{alignSelf:'center'}}>
                              <Text style={styles.title}>Effective Voters</Text>
                          </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box} onPress={()=>this.props.navigation.navigate('AllVoterList',{category:'dead'})}>
                            <Icon name="user-times" type="font-awesome" size={50}  color="#0275D8" style={{}}/>
                          <View style={{alignSelf:'center',}}>
                              <Text style={styles.title}>Dead Voters</Text>
                          </View>
                </TouchableOpacity>
              </View>

              <View style={{flex:1,flexDirection:'row',paddingHorizontal:15,marginBottom:15,justifyContent:'space-between',shadowOffset:{  width: 10,  height: 10,  },shadowColor: 'black',shadowOpacity: 1.0,}}>
                <TouchableOpacity style={styles.box} onPress={()=>this.props.navigation.navigate('ColorList')}>
                            <Icon name="color-lens" type="material-icons" size={50}  color="#0275D8" style={{}}/>
                          <View style={{alignSelf:'center'}}>
                              <Text style={styles.title}>Color List</Text>
                          </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box} onPress={()=>this.props.navigation.navigate('AllVoterList')}>
                            <Icon name="contact-phone" type="material-icons" size={50}  color="#0275D8" style={{}}/>
                          <View style={{alignSelf:'center'}}>
                              <Text style={styles.title}>Phone No List</Text>
                          </View>
                </TouchableOpacity>
              </View>
              <View style={{flex:1,flexDirection:'row',paddingHorizontal:15,marginBottom:15,justifyContent:'space-between',shadowOffset:{  width: 10,  height: 10,  },shadowColor: 'black',shadowOpacity: 1.0,}}>
                <TouchableOpacity style={styles.box} onPress={()=>this.props.navigation.navigate('AllVoterList',{category:'visited'})}>
                            <Icon name="user-check" type="feather" size={50}  color="#0275D8" style={{}}/>
                          <View style={{alignSelf:'center'}}>
                              <Text style={styles.title}>Visited Voters</Text>
                          </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
        </Drawer>
    );
  }
}


 