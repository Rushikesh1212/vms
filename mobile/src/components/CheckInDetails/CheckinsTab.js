import React, { Component } from "react";
import { StyleSheet,Text,View,TextInput,BackHandler,TouchableOpacity, ScrollView,Platform,Dimensions, Image,ImageBackground,Alert} from "react-native";
import { Header, Button, Icon,Card,Avatar} from "react-native-elements";
import { NavigationActions } from "react-navigation";
import ImageOverlay from "react-native-image-overlay";

import SideMenu from 'react-native-side-menu';
import PropTypes from "prop-types";
import Drawer from 'react-native-drawer';
import axios from "../../config/axios.js";

import styles from "../UserProfile/styles.js";

// import MenuBar from '../Menu/Menu.js';
import HeaderDy from "../../layouts/HeaderDy/HeaderDy.js";


 const window = Dimensions.get('window');
export default  class CheckinsTab extends Component {

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
    var checkins = [
        {
          place: 'Brambles',
          date: '29 May 2019',
          inTime:'09:54 AM',
          outTime:''
        },
        {
          place: 'Ratna',
          date: '28 May 2019',
          inTime:'11:54 AM',
          outTime:'11:58 AM'
        },
        {
          place: 'Kaldeiscope',
          date: '27 May 2019',
          inTime:'10:30 AM',
          outTime:'11:58 AM'
        },
        {
          place: 'SkyWaltz Cafe',
          date: '26 May 2019',
          inTime:'09:22 AM',
          outTime:'11:58 AM'
        },
        {
          place: 'Virasat',
          date: '25 May 2019',
          inTime:'10:04 AM',
          outTime:'11:58 AM'
        },
        {
          place: 'Nibs Cafe',
          date: '24 May 2019',
          inTime:'10:59 AM',
          outTime:'11:58 AM'
        },
        {
          place: 'Brambles',
          date: '23 May 2019',
          inTime:'08:54 AM',
          outTime:'03:22 PM'
        },
        {
          place: 'Brambles',
          date: '22 May 2019',
          inTime:'10:33 AM',
          outTime:'03:22 PM'
        },
      ]
    // const menu = <MenuBar navigate={navigate} />;
   
    // var navigationView = <NotificationCommon closeDrawer={this.closeDrawer} notificationData={[]} navigation={this.props.navigation}/>

    return(
            <ScrollView  keyboardShouldPersistTaps="handled" >
            <HeaderDy goBack={goBack}  headerTitle="My Check-Ins"  />
            <View style={{ flex: 1,backgroundColor:'#fff',paddingHorizontal:20}}>
              {
                checkins.map((data,index)=>{
                  return(
                    <View style={{flex:1,flexDirection:'row',paddingHorizontal:0,borderBottomWidth:1,borderColor:'#eee',paddingVertical:20}}>
                      <View style={{flex:0.2,}}>
                        <Image 
                          style={{borderRadius:10,width:60,height:60,}} 
                          source={require('../../images/Nibs1.jpg' )} >
                        </Image>
                      </View>
                      <View style={{flex:0.9,paddingHorizontal:20,}}>
                          <Text style={{fontFamily: 'Montserrat-SemiBold',color:'#333',fontSize:16}}>{data.place}</Text>
                          <Text style={{color:'#999',fontFamily:"Montserrat-SemiBold",fontSize:14,marginTop:5}}>{data.date} | {data.inTime} - {data.outTime !='' ? data.outTime : 'Ongoing'}</Text>
                      </View>
                    </View>
                  )
                })
              }
            </View>
            </ScrollView>
    );
  }
}
  

 