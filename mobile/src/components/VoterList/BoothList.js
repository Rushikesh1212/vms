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

import Loading from '../../layouts/Loading/Loading.js';

import styles from "./styles.js";

// import MenuBar from '../Menu/Menu.js';
import HeaderDy from "../../layouts/HeaderDy/HeaderDy.js";


 const window = Dimensions.get('window');
export default  class BoothList extends Component {

  constructor(props){
    super(props);
    this.state = {
      gaon: 'Select Gaon'
    };
  }
  componentDidMount(){
    axios.get('/api/voters/distinctBooth')
      .then(res=>{
        // console.log('res',res.data)
        this.setState({data:res.data})
      })
      .catch(err=>{
        console.log('err',err)
      })
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
{/*              <View style={{ flexDirection:'row',backgroundColor:'#337ab7',paddingHorizontal:10,paddingVertical:10,justifyContent:'space-between',borderColor:'#337ab7',borderBottomWidth:2,shadowOffset:{  width: 10,  height: 10,  },shadowColor: '#337ab7',shadowOpacity: 1.0,}}>
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
              </View>*/}
              <View style={{ flexDirection:'row',backgroundColor:'#337ab7',paddingHorizontal:10,paddingVertical:10,justifyContent:'space-between',borderColor:'#337ab7',borderBottomWidth:2,shadowOffset:{  width: 10,  height: 10,  },shadowColor: '#337ab7',shadowOpacity: 1.0,}}>
                <View style={{flex:0.3,paddingTop:5}}>
                  <Text style={{color:"#f1f1f1"}}>Select Booth</Text>
                </View>
                <View style={{flex:0.7,paddingTop:5, width: '100%', backgroundColor:"transparent",borderBottomWidth:1, borderColor:"#000"}}>
                        <TextInput
                          style={{height: 35,borderColor: this.state.borderColor,borderBottomWidth: 1,paddingLeft:10}}
                          placeholder="Booth"
                          onChangeText = {this.updateNameSearch}
                          value={this.state.boothName}
                          onBlur={ () => this.setState({borderColor:'#666'}) }
                          onFocus={ () => this.setState({borderColor:'#337ab7'}) }
                        />
                </View>
              </View>

              <View style={{paddingVertical:10, backgroundColor:"#eee",paddingHorizontal:15}}>
                {
                  this.state.data ? 
                    this.state.data.length > 0 ?
                      this.state.data.map((booth,index)=>{
                        return(
                          <TouchableOpacity key={index} onPress={()=>this.props.navigation.navigate('SearchList',{category:'boothName',boothName:booth})} style={{paddingVertical:20,paddingHorizontal:15,backgroundColor:"#fff",borderWidth:1,borderColor:"999",borderRadius:5}}>
                            <Text style={{fontSize:22, color:"#111",fontWeight:'bold'}}>{index+1}- {booth}</Text>
                            <Text style={styles.statText}>Total Female: 326</Text>
                            <Text style={styles.statText}>Total Male: 222</Text>
                            <Text style={styles.statText}>Total: 548</Text>
                          </TouchableOpacity>
                        )
                      })
                    : null
                  : <Loading />
                }
              </View>
            </ScrollView>
        </Drawer>
    );
  }
}


 