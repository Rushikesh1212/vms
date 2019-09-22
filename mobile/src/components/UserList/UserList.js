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
import HeaderDy from "../../layouts/HeaderDy/HeaderDy.js";

 const window = Dimensions.get('window');
export default  class UserList extends Component {

  constructor(props){
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
    axios.get('/api/users/get/list')
      .then(res=>{
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

  closeControlPanel = () => {
    this._drawer.close()
  }

  openControlPanel = () => {
    this._drawer.open()
  }
  
  render(){

    const { navigate, goBack, state } = this.props.navigation;
    return(
        <Drawer
            ref={(ref) => this._drawer = ref}
            side="left"
            >
            
            <ScrollView  keyboardShouldPersistTaps="handled" >
              <View style={{ flexDirection:'row',backgroundColor:'#337ab7',paddingHorizontal:10,paddingVertical:10,justifyContent:'space-between'}}>
                <View style={{flex:1,paddingVertical:15,justifyContent:"center"}}>
                  <Text style={{color:"#f1f1f1",fontFamily:"Montserrat-Bold",fontSize:20,alignSelf:'center'}}>User List</Text>
                </View>
              </View>
              <View style={{paddingVertical:5, backgroundColor:"#fff",paddingHorizontal:5}}>
                {
                  this.state.data ? 
                    this.state.data.length > 0 ?
                      this.state.data.map((voter,index)=>{
                        return(
                          <View key={index} style={{marginBottom:10,paddingVertical:10,paddingHorizontal:5,backgroundColor:"#fff",borderWidth:1,borderColor:"999",borderRadius:5}}>
                            <View style={{flexDirection:'row',marginBottom:10}}>
                              <Text style={{fontSize:18, color:"#111",flex:0.1,fontFamily:"Montserrat-Regular"}}>{index+1}</Text>
                              <Text style={{fontSize:18, color:"#111",flex:0.6,fontFamily:"Montserrat-Bold"}}>{voter.profile.fullName}</Text>
                            </View>
                            <View style={{flexDirection:'row'}}><Icon name="phone" style={{marginTop:5}} type="font-awesome" size={15}  color="#333" /><Text style={{color:"#111",marginLeft:5,fontFamily:"Montserrat-SemiBold"}}>{voter.mobileNumber}</Text></View>             
                          </View>
                        )
                      })
                    : <Text style={{fontFamily:"Montserrat-SemiBold"}}>No Voter Found</Text>
                  : <Loading />
                }
              </View>
            </ScrollView>
        </Drawer>
    );
  }
}


 