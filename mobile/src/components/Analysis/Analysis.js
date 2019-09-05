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
export default  class Analysis extends Component {

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
            
{/*            <HeaderDy goBack={goBack} headerTitle="Notifications" />*/}
            <ScrollView  keyboardShouldPersistTaps="handled" >
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
                              <Text style={styles.title}>Overall Analysis</Text>
                          </View>
                      {/*</ImageOverlay>*/}
                </TouchableOpacity>
                <TouchableOpacity style={{flex:0.48,borderColor:'#000',borderWidth:1,}} onPress={()=>this.props.navigation.navigate('SearchList')}>
                            <View style={{alignSelf:'center',paddingHorizontal:20,paddingVertical:15,}}>
                                <Text style={styles.title}>Strength Analysis</Text>
                            </View>
                </TouchableOpacity>
              </View>
              <View style={{flex:1,flexDirection:'row',paddingHorizontal:15,marginBottom:15,justifyContent:'space-between',shadowOffset:{  width: 10,  height: 10,  },shadowColor: 'black',shadowOpacity: 1.0,}}>
                <TouchableOpacity style={{flex:0.48,borderColor:'#000',borderWidth:1,}} onPress={()=>this.props.navigation.navigate('SearchList')}>
                          <View style={{alignSelf:'center',paddingHorizontal:20,paddingVertical:15,}}>
                              <Text style={styles.title}>Result</Text>
                          </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:0.48,borderColor:'#000',borderWidth:1,}} onPress={()=>this.props.navigation.navigate('SearchList')}>
                          <View style={{alignSelf:'center',paddingHorizontal:20,paddingVertical:15,}}>
                              <Text style={styles.title}>Send SMS</Text>
                          </View>
                </TouchableOpacity>
              </View>                     
            </ScrollView>
        </Drawer>
    );
  }
}


 