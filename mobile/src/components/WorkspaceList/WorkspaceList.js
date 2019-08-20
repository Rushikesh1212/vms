import React, { Component } from "react";
import { StyleSheet,Text,View,TextInput,BackHandler,TouchableOpacity, ScrollView,Platform, Image,ImageBackground,Alert} from "react-native";
import { Header, Button, Icon,Card,Avatar} from "react-native-elements";
import { NavigationActions } from "react-navigation";
import ImageOverlay from "react-native-image-overlay";

import SideMenu from 'react-native-side-menu';
import PropTypes from "prop-types";
import Drawer from 'react-native-drawer';
import axios from "../../config/axios.js";

// import Icon from 'react-native-ionicons';

import styles from "./styles.js";
import Menu from '../../layouts/Menu/Menu.js';
import Notification from '../../layouts/Notification/Notification.js';
import HeaderBar from "../../layouts/HeaderBar/HeaderBar.js";

export default  class WorkspaceList extends Component {

  constructor(props){
    super(props);
    this.state = {
       isOpen: false,
       data:[],
       workspaceList: []

    };
  }
  componentDidMount(){
    axios.get('/api/workspaceDetails/get/list')
      .then(response=>{
        // console.log('response',response.data)
        this.setState({workspaceList: response.data})
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
    
    var card =  [ {title:'Kaleidoscope',startTime:'10:30',endTime:'23:00',status:'open'},
                  {title:'Nibs Cafe',startTime:'10:30',endTime:'23:00',status:'open'},
                  {title:'SkyWaltz Cafe',startTime:'10:30',endTime:'23:00',status:'closed'},
                  {title:'Virasat Cafe',startTime:'10:30',endTime:'23:00',status:'open'},
                ]
    // var navigationView = <NotificationCommon closeDrawer={this.closeDrawer} notificationData={[]} navigation={this.props.navigation}/>

    return(
      <React.Fragment>
            <HeaderBar navigate={navigate}
              navigattion = {this.props.navigation}
              toggle={()=>this.toggle.bind(this)} 
              openControlPanel={()=>this.openControlPanel.bind(this)}
              title = {"Describe Your Business"}
            />
            
            <View style={{ flex: 1,borderWidth:0,padding:0,backgroundColor:'#fff'}}>
                <View style={{flex:1,}}>
                    <ScrollView createContainerStyle={{borderWidth:0,margin:0}}>
                    {
                      this.state.workspaceList && this.state.workspaceList.length > 0 ?
                        this.state.workspaceList.map((data,index)=>{
                          return(
                              <TouchableOpacity onPress={()=> this.props.navigation.navigate('WorkspaceInfo',{id:data._id,status:data.isOpen,title:data.title})}>
                                <View key={index} style={{flex:1,flexDirection:'row',paddingHorizontal:15,marginBottom:15,flexWrap:'wrap',shadowOffset:{  width: 10,  height: 10,  },shadowColor: 'black',shadowOpacity: 1.0,}}>
                                   <View style={{flex:0.9,borderBottomLeftRadius:25,borderBottomRightRadius:25}}>
                                        <ImageOverlay
                                        source={require('../../images/Morzine-Restaurants.jpg')}
                                        height={145}
                                        overlayColor="#333"
                                        overlayAlpha={0.6}
                                        containerStyle={{borderTopLeftRadius:25,borderBottomLeftRadius:25,width:'100%'}}
                                        contentPosition="top">
                                            <View style={{alignSelf:'flex-start',paddingHorizontal:20,marginTop:10}}>
                                                <Text style={styles.title}>{data.nameOfCafe}</Text>
                                            </View>
                                            <View style={{alignSelf:'flex-start',paddingHorizontal:20,marginTop:10}}>
                                                <Text style={styles.time}>{data.openingtime} - {data.closingtime}</Text>
                                            </View>
                                            <View style={{alignSelf:'flex-start',paddingHorizontal:20,marginTop:10}}>
                                                <Text style={styles.time}>Seats Available : 5 / {data.numberOfSeats}</Text>
                                            </View>
                                  </ImageOverlay>
                                   </View>
                                   <View style={[styles.statusWrapper,(data.isOpen==true)?styles.bgOpen:styles.bgClose]}>
                                      <Text style={styles.openclosecard}>{data.isOpen==true ? "open" : 'closed' }</Text>
                                   </View>

                                </View>
                              </TouchableOpacity>
                          )
                        })
                      : null
                    }

                   {/*  { 
                      card.map((data,index)=>{
                        return(
                          <TouchableOpacity onPress={()=> this.props.navigation.navigate('WorkspaceInfo',{status:data.status,title:data.title})}>
                            <View key={index} style={{flex:1,flexDirection:'row',paddingHorizontal:15,marginBottom:15,flexWrap:'wrap',shadowOffset:{  width: 10,  height: 10,  },shadowColor: 'black',shadowOpacity: 1.0,}}>
                               <View style={{flex:0.9,borderBottomLeftRadius:25,borderBottomRightRadius:25}}>
                                    <ImageOverlay
                                    source={require('../../images/Morzine-Restaurants.jpg')}
                                    height={145}
                                    overlayColor="#333"
                                    overlayAlpha={0.6}
                                    containerStyle={{borderTopLeftRadius:25,borderBottomLeftRadius:25,width:'100%'}}
                                    contentPosition="top">
                                        <View style={{alignSelf:'flex-start',paddingHorizontal:20,marginTop:10}}>
                                            <Text style={styles.title}>{data.title}</Text>
                                        </View>
                                        <View style={{alignSelf:'flex-start',paddingHorizontal:20,marginTop:10}}>
                                            <Text style={styles.time}>{data.startTime} - {data.endTime}</Text>
                                        </View>
                                        <View style={{alignSelf:'flex-start',paddingHorizontal:20,marginTop:10}}>
                                            <Text style={styles.time}>Seats Available : 5 / 12</Text>
                                        </View>
                              </ImageOverlay>
                               </View>
                               <View style={[styles.statusWrapper,(data.status=="open")?styles.bgOpen:styles.bgClose]}>
                                  <Text style={styles.openclosecard}>{data.status}</Text>
                               </View>

                            </View>
                          </TouchableOpacity> 
                        );
                      })
                    }*/}
                    </ScrollView>
                </View>
            </View>
      </React.Fragment>
    );
  }
}


 