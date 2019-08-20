import React, { Component } from "react";
import { StyleSheet,Text,View,TextInput,BackHandler,TouchableOpacity, ScrollView,Platform,Dimensions, Image,ImageBackground,Alert} from "react-native";
import { Header, Button, Icon,Card,Avatar} from "react-native-elements";
import { NavigationActions } from "react-navigation";
import ImageOverlay from "react-native-image-overlay";

import SideMenu from 'react-native-side-menu';
import PropTypes from "prop-types";
import Drawer from 'react-native-drawer';

import styles from "./styles.js";

// import MenuBar from '../Menu/Menu.js';
import HeaderDy from "../../layouts/HeaderDy/HeaderDy.js";


 const window = Dimensions.get('window');
export default  class Notification extends Component {

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
        <Drawer
            ref={(ref) => this._drawer = ref}
            // openDrawerOffset={(viewport) => viewport.width-}
            side="left"
            >
            
            <HeaderDy goBack={goBack} headerTitle="Notifications" />
            <ScrollView  keyboardShouldPersistTaps="handled" >
               
              <View style={{flex:1,paddingHorizontal:20,marginTop:"6%",}}>
                 <View style={{flex:1,flexDirection:'row',marginBottom:5,flexWrap: 'wrap'}}>
                  <Text style={{fontSize:16,color:'#333',fontFamily:'Montserrat-SemiBold'}}>Check-out</Text>
                  </View>

                <View style={{borderWidth:1,borderLeftWidth:4,paddingHorizontal:15,borderRightColor:'#aaa',borderBottomColor:'#aaa',borderTopColor:'#aaa',borderRadius:5,borderLeftColor:'#2979FF',paddingVertical:10,shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'red',
        shadowOffset: { height: 0, width: 0 },}}>
                  <View style={{flex:.8,flexDirection:'row',marginTop:5,flexWrap: 'wrap'}}>
                  <Text style={{fontSize:15,color:'#666',fontFamily:'Montserrat-SemiBold'}}>Dear Paul Walker, You have been checked out from Nibs Cafe successfully. Hope you enjoyed your time!</Text>
                  </View>

                  <View style={{flex:1,marginTop:10}}>
                   <Text style={{fontSize:12,color:'#999',flex:0.5,fontFamily:'Montserrat-SemiBold'}}>a few seconds ago</Text>
                   
                  </View> 
              </View>
              </View>

              <View style={{flex:1,paddingHorizontal:20,marginTop:8,}}>
                 <View style={{flex:1,flexDirection:'row',marginBottom:5,flexWrap: 'wrap'}}>
                  <Text style={{fontSize:16,color:'#333',fontFamily:'Montserrat-SemiBold'}}>Check-in</Text>
                  </View>

                <View style={{borderWidth:1,borderLeftWidth:4,paddingHorizontal:15,borderRightColor:'#aaa',borderBottomColor:'#aaa',borderTopColor:'#aaa',borderRadius:5,borderLeftColor:'#aaa',paddingVertical:10,shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'red',
        shadowOffset: { height: 0, width: 0 },}}>
                  <View style={{flex:.8,flexDirection:'row',marginTop:5,flexWrap: 'wrap'}}>
                  <Text style={{fontSize:15,color:'#666',fontFamily:'Montserrat-SemiBold'}}>Dear Paul Walker, You have been checked into Nibs Cafe successfully. Do NOT forget to check-out, when you leave.</Text>
                  </View>
              

                  <View style={{flex:1,marginTop:10}}>
                   <Text style={{fontSize:12,color:'#999',flex:0.5,fontFamily:'Montserrat-SemiBold'}}>09/08/2019 at 09:00 AM</Text>
                  </View> 
              </View>
              </View>

                            <View style={{flex:1,paddingHorizontal:20,marginTop:8,}}>
                 <View style={{flex:1,flexDirection:'row',marginBottom:5,flexWrap: 'wrap'}}>
                  <Text style={{fontSize:16,color:'#333',fontFamily:'Montserrat-SemiBold'}}>Check-out</Text>
                  </View>

                <View style={{borderWidth:1,borderLeftWidth:4,paddingHorizontal:15,borderRightColor:'#aaa',borderBottomColor:'#aaa',borderTopColor:'#aaa',borderRadius:5,borderLeftColor:'#aaa',paddingVertical:10,shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'red',
        shadowOffset: { height: 0, width: 0 },}}>
                  <View style={{flex:.8,flexDirection:'row',marginTop:5,flexWrap: 'wrap'}}>
                   <Text style={{fontSize:15,color:'#666',fontFamily:'Montserrat-SemiBold'}}>Dear Paul Walker, You have been checked out from Nibs Cafe successfully. Hope you enjoyed your time!</Text>
                  </View>

                  <View style={{flex:1,marginTop:10}}>
                   <Text style={{fontSize:12,color:'#999',flex:0.5,fontFamily:'Montserrat-SemiBold'}}>08/08/2019 at 05:00 PM</Text>
                   
                  </View> 
              </View>
              </View>
                   <View style={{flex:1,paddingHorizontal:20,marginTop:8,}}>
                 <View style={{flex:1,flexDirection:'row',marginBottom:5,flexWrap: 'wrap'}}>
                  <Text style={{fontSize:16,color:'#333',fontFamily:'Montserrat-SemiBold'}}>Check-in</Text>
                  </View>

                <View style={{borderWidth:1,borderLeftWidth:4,paddingHorizontal:15,borderRightColor:'#aaa',borderBottomColor:'#aaa',borderTopColor:'#aaa',borderRadius:5,borderLeftColor:'#aaa',paddingVertical:10,shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'red',
        shadowOffset: { height: 0, width: 0 },}}>
                  <View style={{flex:.8,flexDirection:'row',marginTop:5,flexWrap: 'wrap'}}>
                 <Text style={{fontSize:15,color:'#666',fontFamily:'Montserrat-SemiBold'}}>Dear Paul Walker, You have been checked into Nibs Cafe successfully. Do NOT forget to check-out, when you leave.</Text>
                  </View>

                  <View style={{flex:1,marginTop:10}}>
                   <Text style={{fontSize:12,color:'#999',flex:0.5,fontFamily:'Montserrat-SemiBold'}}>08/08/2019 at 10:00 AM</Text>
                  </View> 
              </View>
              </View>



       
            </ScrollView>
        </Drawer>
    );
  }
}


 