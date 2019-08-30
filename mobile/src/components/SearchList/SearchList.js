import React, { Component } from "react";
import { StyleSheet,Text,View,TextInput,BackHandler,TouchableOpacity, ScrollView,Platform,Dimensions, Image,ImageBackground,Alert,Keyboard} from "react-native";
import { Header, Button, Icon,Card,Avatar} from "react-native-elements";
import { NavigationActions } from "react-navigation";
import ImageOverlay from "react-native-image-overlay";
import { TextField } from "react-native-material-textfield";

import SideMenu from 'react-native-side-menu';
import PropTypes from "prop-types";
import Drawer from 'react-native-drawer';

import styles from "./styles.js";

// import MenuBar from '../Menu/Menu.js';
import HeaderBar from "../../layouts/HeaderBar/HeaderBar.js";
import {colors, sizes} from '../../config/styles.js';



 const window = Dimensions.get('window');
export default  class SearchList extends Component {

  constructor(props){
    super(props);
    this.state = {
      text: '',
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

  onFocus(){
    this.setState({
      borderColor: '#337ab7'
    })
  }
  onBlur(){
     this.setState({
        borderColor: '#666'
    })
  }
  render(){

    const { navigate, goBack, state } = this.props.navigation;

    const list = [
      {
        'no': '1',
        'name': 'Aralvad  Gangabai Maroti',
        'cardno':'F-81'
      },
      {
        'no': '1',
        'name': 'Aralvad  Gangabai Maroti',
        'cardno':'F-81'
      },
      {
        'no': '1',
        'name': 'Aralvad  Gangabai Maroti',
        'cardno':'F-81'
      },
      {
        'no': '1',
        'name': 'Aralvad  Gangabai Maroti',
        'cardno':'F-81'
      },
      {
        'no': '1',
        'name': 'Aralvad  Gangabai Maroti',
        'cardno':'F-81'
      },
      {
        'no': '1',
        'name': 'Aralvad  Gangabai Maroti',
        'cardno':'F-81'
      },
      {
        'no': '1',
        'name': 'Aralvad  Gangabai Maroti',
        'cardno':'F-81'
      },
      {
        'no': '1',
        'name': 'Aralvad  Gangabai Maroti',
        'cardno':'F-81'
      },
      {
        'no': '1',
        'name': 'Aralvad  Gangabai Maroti',
        'cardno':'F-81'
      },
      {
        'no': '1',
        'name': 'Aralvad  Gangabai Maroti',
        'cardno':'F-81'
      },
      {
        'no': '1',
        'name': 'Aralvad  Gangabai Maroti',
        'cardno':'F-81'
      },
      {
        'no': '1',
        'name': 'Aralvad  Gangabai Maroti',
        'cardno':'F-81'
      }
    ]
    // const menu = <MenuBar navigate={navigate} />;
   
    // var navigationView = <NotificationCommon closeDrawer={this.closeDrawer} notificationData={[]} navigation={this.props.navigation}/>

    return(
            <ScrollView  keyboardShouldPersistTaps="handled" >
              <View style={{ flexDirection:'row',backgroundColor:'#fff',paddingHorizontal:10,paddingVertical:10,justifyContent:'space-between',borderColor:'#337ab7',borderBottomWidth:2,shadowOffset:{  width: 10,  height: 10,  },shadowColor: '#337ab7',shadowOpacity: 1.0,}}>
                <View style={{flex:0.45}}>
                        <TextInput
                        style={{height: 40,borderColor: this.state.borderColor,borderBottomWidth: 2,paddingLeft:20}}
                        placeholder="Name"
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                        onBlur={ () => this.onBlur() }
                        onFocus={ () => this.onFocus() }
                      />
                </View>
                <View style={{flex:0.45}}>
                        <TextInput
                        style={{height: 40,paddingLeft:20,borderColor: this.state.cardBorderColor,borderBottomWidth: 2}}
                        placeholder="Card No"
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                        onBlur={ () => this.setState({cardBorderColor:'#666'}) }
                        onFocus={ () => this.setState({cardBorderColor:'#337ab7'}) }
                      />
                </View>
              </View>
              <View style={{width:'100%'}}>
                  {
                    list.map((data,index)=>{
                      return(
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('UserProfile')}>
                          <View style={{flexDirection:'row',paddingVertical:10,paddingHorizontal:10,borderWidth:2,borderColor:'#333', blurRadius:90}} key={index}>
                            <Text style={{flex:0.1}}> {data.no}/{index+1}</Text>
                            <Text style={{flex:0.7,paddingLeft:30,backgroundColor:'transparent'}}>{data.name}</Text>
                            <Text style={{flex:0.2}}>{data.cardno}</Text>
                          </View>
                        </TouchableOpacity>
                      )
                    })
                  }
              </View>
            </ScrollView>
    );
  }
}
  

 