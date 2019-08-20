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
import HeaderDy from "../../layouts/HeaderDy/HeaderDy.js";


 const window = Dimensions.get('window');
export default  class OrderHistory extends Component {

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
    var myorders = [
        {
          place: 'Brambles',
          city:'Jaipur',
          orderItem:'#008',
          date: '08 Aug 2019',
          inTime:'04:34 PM',
          item :'Tea'
         
        },
        {
          place: 'Ratna',
          city:'Jaipur',
          orderItem:'#007',
          date: '07 Aug 2019',
          inTime:'01:40 PM',
          item :'Coffee'
          
        },
        {
          place: 'Kaldeiscope',
          city:'Jaipur',
          orderItem:'#006',
          date: '07 Aug 2019',
          inTime:'12:34 PM',
          item :'Tea'
        },
        {
          place: 'SkyWaltz Cafe',
          city:'Jaipur',
          orderItem:'#005',
          date: '06 Aug 2019',
          inTime:'10:30 AM',
          item :'Coffee'
          
        },
        {
          place: 'Virasat',
          city:'Jaipur',
          orderItem:'#004',
          date: '05 Aug 2019',
          inTime:'02:10 PM',
          item :'Tea'
        },
        {
          place: 'Nibs Cafe',
          city:'Jaipur',
          orderItem:'#003',
          date: '02 Aug 2019',
          inTime:'05:35 PM',
          item :'Tea'
        
        },
        {
          place: 'Brambles',
          city:'Jaipur',
          orderItem:'#002',
          date: '01 Aug 2019',
          inTime:'02:00 PM',
          item :'Tea'
          
        },
        {
          place: 'Brambles',
          city:'Jaipur',
          orderItem:'#001',
          date: '01 Aug 2019',
          inTime:'10:54 AM',
          item :'Coffee'
          
        },
      ]
    // const menu = <MenuBar navigate={navigate} />;
   
    // var navigationView = <NotificationCommon closeDrawer={this.closeDrawer} notificationData={[]} navigation={this.props.navigation}/>

    return(
            <ScrollView  keyboardShouldPersistTaps="handled" >
            <HeaderDy goBack={goBack}  headerTitle="My Orders"  />
            <View style={{ flex: 1,backgroundColor:'#fff',paddingHorizontal:20}}>
              {
                myorders.map((data,index)=>{
                  return(
                    <View style={{flex:1,paddingHorizontal:10,borderBottomWidth:1,borderColor:'#eee',paddingVertical:20}}>
                     
                          <View style={{flexDirection:'row',marginBottom:5}}>
                            <View style={{flex:0.9,flexDirection:'row'}}>
                            <Text style={{fontFamily: 'Montserrat-SemiBold',color:'#333',fontSize:16}}>{data.place}, </Text>
                            <Text style={{fontFamily: 'Montserrat-SemiBold',color:'#666',fontSize:15}}>{data.city}</Text>
                            </View>
                            <View style={{flex:0.4,alignItem:'flex-end'}}>
                              <Text style={{fontFamily: 'Montserrat-SemiBold',color:'#ffbb33',fontSize:16}}>Order {data.orderItem}</Text>
                            </View>
                          </View>
                          <View style={{flexDirection:'row'}}>
                            <View>
                            <Text style={{color:'#999',fontFamily:"Montserrat-SemiBold"}}>{data.date} | {data.inTime} | </Text>
                            </View>
                            <View>
                            <Text style={{color:'#333',fontFamily:"Montserrat-SemiBold"}}>{data.item} </Text>
                            </View>
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
  

 