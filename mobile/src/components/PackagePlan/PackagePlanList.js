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
export default  class PackagePlanList extends Component {

  constructor(props){
    super(props);
    this.state = {
      subscriptionList: []
    };
  }
  componentDidMount(){
   axios.get('/api/subscriptionPlan/get/list')
    .then(response=>{
      if(response.data.length > 0){
        this.setState({subscriptionList: response.data})
      }
    })
    .catch(error=>{
      console.log('error',error)
    })
    // BackHandler.addEventListener('hardwareBackPress',this.androidBackHandler.bind(this));
  }
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('userId');
      if (value !== null) {
        // We have data!!
        console.log(value);
        alert(value);
      }
    } catch (error) {
      // Error retrieving data
      console.log('error while retrieving data',error)
    }
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
            
            <HeaderDy goBack={goBack} headerTitle="Select Membership Plan" />
            <ScrollView  keyboardShouldPersistTaps="handled" >
            <View style={{ flex: 1,backgroundColor:'#fff'}}>

              {
                this.state.subscriptionList && this.state.subscriptionList.length > 0 ?
                  this.state.subscriptionList.map((data,index)=>{
                    return(
                        <TouchableOpacity id={data._id} key={index} onPress={()=> this.props.navigation.navigate('PackagePlanInfo',{id:data._id})}>
                            <View
                                style={{
                                  paddingHorizontal:15,
                                  marginTop:15
                                }}>
                                <ImageOverlay
                                    source={require('../../images/monthly.jpg')}
                                    height={Dimensions.get('window').height/3 -50}
                                    overlayColor="#333"
                                    overlayAlpha={0.8}
                                    containerStyle={{borderRadius:25,width:'100%'}}
                                    contentPosition="top">
                                        <View style={{alignSelf:'flex-start',paddingHorizontal:20,}}>
                                            <Text style={styles.title}>{data.planName.split(' ')[0]}</Text>
                                        </View>
                                        <View style={{alignSelf:'flex-start',paddingHorizontal:20,marginTop:5}}>
                                            <Text style={styles.rupess}>Rs {data.price}</Text>
                                        </View>
                                         <View style={{alignSelf:'flex-start',flexDirection:'row',paddingHorizontal:20,paddingTop:"13%"}}>
                                            <Text style={styles.planDetails}>Details  </Text>
                                            <Icon size={20} name='arrow-right' type='feather' color='#fff' />
                                        </View>
                              </ImageOverlay>
                            </View>
                        </TouchableOpacity> 
                    )
                  })
                : 
                null
                // <TouchableOpacity onPress={()=> this.props.navigation.navigate('PackagePlanInfo',{type:'Monthly',amount:'5000',checkinCount:'31'})}>
                //     <View
                //         style={{
                //           paddingHorizontal:15,
                //           marginTop:15
                //         }}>
                //         <ImageOverlay
                //             source={require('../../images/monthly.jpg')}
                //             height={Dimensions.get('window').height/3 -50}
                //             overlayColor="#333"
                //             overlayAlpha={0.8}
                //             containerStyle={{borderRadius:25,width:'100%'}}
                //             contentPosition="top">
                //                 <View style={{alignSelf:'flex-start',paddingHorizontal:20,}}>
                //                     <Text style={styles.title}></Text>
                //                 </View>
                //                 <View style={{alignSelf:'flex-start',paddingHorizontal:20,marginTop:5}}>
                //                     <Text style={styles.rupess}></Text>
                //                 </View>
                //                  <View style={{alignSelf:'flex-start',flexDirection:'row',paddingHorizontal:20,paddingTop:"13%"}}>
                //                     <Text style={styles.planDetails}></Text>
                //                     <Icon size={20} name='arrow-right' type='feather' color='#fff' />
                //                 </View>
                //       </ImageOverlay>
                //     </View>
                // </TouchableOpacity> 
              }



{/*                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('PackagePlanInfo',{type:'Monthly',amount:'5000',checkinCount:'31'})}>
                            <View
                                style={{
                                  paddingHorizontal:15,
                                  marginTop:15
                                }}>
                                <ImageOverlay
                                    source={require('../../images/monthly.jpg')}
                                    height={Dimensions.get('window').height/3 -50}
                                    overlayColor="#333"
                                    overlayAlpha={0.8}
                                    containerStyle={{borderRadius:25,width:'100%'}}
                                    contentPosition="top">
                                        <View style={{alignSelf:'flex-start',paddingHorizontal:20,}}>
                                            <Text style={styles.title}>Monthly</Text>
                                        </View>
                                        <View style={{alignSelf:'flex-start',paddingHorizontal:20,marginTop:5}}>
                                            <Text style={styles.rupess}>Rs 5000</Text>
                                        </View>
                                         <View style={{alignSelf:'flex-start',flexDirection:'row',paddingHorizontal:20,paddingTop:"13%"}}>
                                            <Text style={styles.planDetails}>Details  </Text>
                                            <Icon size={20} name='arrow-right' type='feather' color='#fff' />
                                        </View>
                              </ImageOverlay>
                            </View>
                        </TouchableOpacity> 
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('PackagePlanInfo',{type:'Weekly',amount:'2000',checkinCount:'7'})}>
                            <View
                                style={{
                                 paddingHorizontal:15,
                                  marginTop:15
                                }}>
                                <ImageOverlay
                                    source={require('../../images/weekly.jpg')}
                                     height={Dimensions.get('window').height/3 -50}
                                    overlayColor="#333"
                                    overlayAlpha={0.8}
                                    containerStyle={{borderRadius:25,width:'100%'}}
                                    contentPosition="top">
                                        <View style={{alignSelf:'flex-start',paddingHorizontal:20,}}>
                                            <Text style={styles.title}>Weekly</Text>
                                        </View>
                                        <View style={{alignSelf:'flex-start',paddingHorizontal:20,marginTop:8}}>
                                            <Text style={styles.rupess}>Rs 2000</Text>
                                        </View>
                                         <View style={{alignSelf:'flex-start',flexDirection:'row',paddingHorizontal:20,paddingTop:"13%"}}>
                                            <Text style={styles.planDetails}>Details  </Text>
                                            <Icon size={20} name='arrow-right' type='feather' color='#fff' />
                                        </View>
                              </ImageOverlay>
                            </View>
                        </TouchableOpacity> 
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('PackagePlanInfo',{type:'Daily',amount:'500',checkinCount:'1'})}>
                            <View
                                style={{
                                  paddingHorizontal:15,
                                  marginTop:15,
                                  marginBottom:15
                                }}>
                                <ImageOverlay
                                    source={require('../../images/daily.jpg')}
                                    height={Dimensions.get('window').height/3 -50}
                                    overlayColor="#333"
                                    overlayAlpha={0.8}
                                    containerStyle={{borderRadius:25,width:'100%'}}
                                    contentPosition="top">
                                         <View style={{alignSelf:'flex-start',paddingHorizontal:20,}}>
                                            <Text style={styles.title}>Daily</Text>
                                        </View>
                                        <View style={{alignSelf:'flex-start',paddingHorizontal:20,marginTop:8}}>
                                            <Text style={styles.rupess}>Rs 500</Text>
                                        </View>
                                         <View style={{alignSelf:'flex-start',flexDirection:'row',paddingHorizontal:20,paddingTop:"13%"}}>
                                            <Text style={styles.planDetails}>Details  </Text>
                                            <Icon size={20} name='arrow-right' type='feather' color='#fff' />
                                        </View>
                              </ImageOverlay>
                            </View>
                        </TouchableOpacity> */}

                  
            </View>
            </ScrollView>
        </Drawer>
    );
  }
}


 