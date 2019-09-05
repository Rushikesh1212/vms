import React, { Component } from "react";
import { StyleSheet,Text,View,TextInput,BackHandler,TouchableOpacity, ScrollView,Platform,Dimensions, Image,ImageBackground,Alert,Picker/*AsyncStorage*/} from "react-native";
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
export default  class AllVoterList extends Component {

  constructor(props){
    super(props);
    this.state = {
      gaon: 'Select Gaon'
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
              <View style={{ flexDirection:'row',backgroundColor:'#337ab7',paddingHorizontal:10,paddingVertical:10,justifyContent:'space-between',borderColor:'#337ab7',borderBottomWidth:2,shadowOffset:{  width: 10,  height: 10,  },shadowColor: '#337ab7',shadowOpacity: 1.0,}}>
                <View style={{flex:0.3,paddingTop:5}}>
                  <Text style={{color:"#f1f1f1"}}>Select Gaon</Text>
                </View>
                <View style={{flex:0.7,height: 25,paddingBottom:10, width: '100%', backgroundColor:"transparent",borderBottomWidth:1, borderColor:"#000"}}>
                        <Picker
                          selectedValue={this.state.gaon}
                          style={{height: 25}}
                          onValueChange={(itemValue, itemIndex) =>
                            this.setState({gaon: itemValue})
                          }
                          >
                          <Picker.Item label="Gaon" value="java" />
                          <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                </View>
              </View>
              <View style={{ flexDirection:'row',backgroundColor:'#337ab7',paddingHorizontal:10,paddingVertical:10,justifyContent:'space-between',borderColor:'#337ab7',borderBottomWidth:2,shadowOffset:{  width: 10,  height: 10,  },shadowColor: '#337ab7',shadowOpacity: 1.0,}}>
                <View style={{flex:0.3,paddingTop:5}}>
                  <Text style={{color:"#f1f1f1"}}>Select Booth</Text>
                </View>
                <View style={{flex:0.7,height: 25,paddingBottom:10, width: '100%', backgroundColor:"transparent",borderBottomWidth:1, borderColor:"#000"}}>
                        <Picker
                          selectedValue={this.state.gaon}
                          style={{height: 25}}
                          onValueChange={(itemValue, itemIndex) =>
                            this.setState({gaon: itemValue})
                          }
                          >
                          <Picker.Item label="Booth" value="java" />
                          <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                </View>
              </View>
              <View style={{ flexDirection:'row',backgroundColor:'#337ab7',paddingHorizontal:10,paddingVertical:10,justifyContent:'space-between',borderColor:'#337ab7',borderBottomWidth:2,shadowOffset:{  width: 10,  height: 10,  },shadowColor: '#337ab7',shadowOpacity: 1.0,}}>
                <View style={{flex:0.3,paddingTop:5}}>
                  <Text style={{color:"#f1f1f1"}}>Search By</Text>
                </View>
                <View style={{flex:0.7,height: 25,paddingBottom:10, width: '100%', backgroundColor:"transparent",borderBottomWidth:1, borderColor:"#000"}}>
                        <Picker
                          selectedValue={this.state.gaon}
                          style={{height: 25}}
                          onValueChange={(itemValue, itemIndex) =>
                            this.setState({gaon: itemValue})
                          }
                          >
                          <Picker.Item label="Name" value="java" />
                          <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                </View>
              </View>
              <View style={{flexDirection:'row',paddingRight:10,paddingLeft:5,paddingBottom:8}}>
                <View style={{flex:0.8}}>
                        <TextInput
                        style={{height: 40,paddingLeft:5,borderColor: this.state.cardBorderColor,borderBottomWidth: 2}}
                        placeholder="Name"
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                        onBlur={ () => this.setState({cardBorderColor:'#666'}) }
                        onFocus={ () => this.setState({cardBorderColor:'#337ab7'}) }
                      />
                </View>
              </View>
              <View style={{paddingVertical:5, backgroundColor:"#eee",paddingHorizontal:5}}>
                <TouchableOpacity style={{paddingVertical:10,paddingHorizontal:5,backgroundColor:"#fff",borderWidth:1,borderColor:"999",borderRadius:5}}>
                  <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:18, color:"#111",flex:0.1}}>1</Text>
                    <Text style={{fontSize:18, color:"#111",flex:0.6}}>Aralavad Gangabai Maroti</Text>
                    <Text style={{fontSize:18, color:"#111",flex:0.2}}>F81</Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={{color:"#111",flex:0.2}}>Booth:</Text>
                    <Text style={{color:"#111",textDecoration:"underline"}}>1-Z.P.P.S. Shingarawadi</Text>
                  </View>
                  <Text style={{color:"#111"}}>No Phone Number</Text>             
                </TouchableOpacity>
                <TouchableOpacity style={{paddingVertical:10,paddingHorizontal:5,backgroundColor:"#fff",borderWidth:1,borderColor:"999",borderRadius:5}}>
                  <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:18, color:"#111",flex:0.1}}>1</Text>
                    <Text style={{fontSize:18, color:"#111",flex:0.6}}>Aralavad Gangabai Maroti</Text>
                    <Text style={{fontSize:18, color:"#111",flex:0.2}}>F81</Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={{color:"#111",flex:0.2}}>Booth:</Text>
                    <Text style={{color:"#111",textDecoration:"underline"}}>1-Z.P.P.S. Shingarawadi</Text>
                  </View>
                  <Text style={{color:"#111"}}>No Phone Number</Text>             
                </TouchableOpacity>
                <TouchableOpacity style={{paddingVertical:10,paddingHorizontal:5,backgroundColor:"#fff",borderWidth:1,borderColor:"999",borderRadius:5}}>
                  <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:18, color:"#111",flex:0.1}}>1</Text>
                    <Text style={{fontSize:18, color:"#111",flex:0.6}}>Aralavad Gangabai Maroti</Text>
                    <Text style={{fontSize:18, color:"#111",flex:0.2}}>F81</Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={{color:"#111",flex:0.2}}>Booth:</Text>
                    <Text style={{color:"#111",textDecoration:"underline"}}>1-Z.P.P.S. Shingarawadi</Text>
                  </View>
                  <Text style={{color:"#111"}}>No Phone Number</Text>             
                </TouchableOpacity>
                <TouchableOpacity style={{paddingVertical:10,paddingHorizontal:5,backgroundColor:"#fff",borderWidth:1,borderColor:"999",borderRadius:5}}>
                  <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:18, color:"#111",flex:0.1}}>1</Text>
                    <Text style={{fontSize:18, color:"#111",flex:0.6}}>Aralavad Gangabai Maroti</Text>
                    <Text style={{fontSize:18, color:"#111",flex:0.2}}>F81</Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={{color:"#111",flex:0.2}}>Booth:</Text>
                    <Text style={{color:"#111",textDecoration:"underline"}}>1-Z.P.P.S. Shingarawadi</Text>
                  </View>
                  <Text style={{color:"#111"}}>No Phone Number</Text>             
                </TouchableOpacity>
                <TouchableOpacity style={{paddingVertical:10,paddingHorizontal:5,backgroundColor:"#fff",borderWidth:1,borderColor:"999",borderRadius:5}}>
                  <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:18, color:"#111",flex:0.1}}>1</Text>
                    <Text style={{fontSize:18, color:"#111",flex:0.6}}>Aralavad Gangabai Maroti</Text>
                    <Text style={{fontSize:18, color:"#111",flex:0.2}}>F81</Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={{color:"#111",flex:0.2}}>Booth:</Text>
                    <Text style={{color:"#111",textDecoration:"underline"}}>1-Z.P.P.S. Shingarawadi</Text>
                  </View>
                  <Text style={{color:"#111"}}>No Phone Number</Text>             
                </TouchableOpacity>
                <TouchableOpacity style={{paddingVertical:10,paddingHorizontal:5,backgroundColor:"#fff",borderWidth:1,borderColor:"999",borderRadius:5}}>
                  <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:18, color:"#111",flex:0.1}}>1</Text>
                    <Text style={{fontSize:18, color:"#111",flex:0.6}}>Aralavad Gangabai Maroti</Text>
                    <Text style={{fontSize:18, color:"#111",flex:0.2}}>F81</Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    <Text style={{color:"#111",flex:0.2}}>Booth:</Text>
                    <Text style={{color:"#111",textDecoration:"underline"}}>1-Z.P.P.S. Shingarawadi</Text>
                  </View>
                  <Text style={{color:"#111"}}>No Phone Number</Text>             
                </TouchableOpacity>

              </View>
            </ScrollView>
        </Drawer>
    );
  }
}


 