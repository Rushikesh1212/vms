import React, { Component } from "react";
import { AppRegistry,StyleSheet,Text,View,TextInput,BackHandler,TouchableOpacity,TouchableHighlight,Dimensions,Linking,PermissionsAndroid, ScrollView,Platform, Image,ImageBackground,Alert,SafeAreaView, AsyncStorage} from "react-native";
import { Header, Button, Icon,Card,Avatar,Tooltip} from "react-native-elements";
import { NavigationActions } from "react-navigation";
import ImageOverlay from "react-native-image-overlay";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'
import SideMenu from 'react-native-side-menu';
import PropTypes from "prop-types";
import Drawer from 'react-native-drawer';
import getDirections from 'react-native-google-maps-directions';
import Swiper from "react-native-web-swiper";
// import Carousel from 'react-native-snap-carousel';
import { CameraKitCameraScreen, } from 'react-native-camera-kit';
import axios from "../../config/axios.js";

import HeaderDy from "../../layouts/HeaderDy/HeaderDy.js";
import styles from "./styles.js";
import Menu from '../../layouts/Menu/Menu.js';
import Notification from '../../layouts/Notification/Notification.js';
import HeaderBar from "../../layouts/HeaderBar/HeaderBar.js";
import Carousel from 'react-native-banner-carousel';
import Collapsible from 'react-native-collapsible';
import GestureRecognizer from 'react-native-swipe-gestures';
import AlertPro from "react-native-alert-pro";
import Modal from "react-native-modal";
import Loading from '../../layouts/Loading/Loading.js';

// import QRCodeS/canner from 'react-native-qrcode-scanner';


const screenWidth = Dimensions.get('window').width
const window = Dimensions.get('window');
const chartConfig =   {
    backgroundColor: '#fff',
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(${0}, ${0}, ${0}, ${opacity})`
  }
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;
 
const images = [
    "../../images/Image-Crop.png",
    "../../images/Image-Crop.png",
    "../../images/Image-Crop.png"
];


export default class List2 extends Component {

  constructor(props){
    super(props);
    this.state = {

    };
    this.handleCollapse = this.handleCollapse.bind(this);
  }

  toggleModal = () => {
    this.setState({openModal: !this.state.openModal})
  }

  componentDidMount(){
    axios.get('/api/reports/get/dashboardTab')
      .then(res=>{
        this.setState({dashboardData:res.data})
      })
      .catch(err=>{
        console.log('err at list2', err)
      })

    axios.get('/api/reports/get/colorlist')
      .then(res=>{
        const pieData = [
          {
            name: 'OUR',
            color: '#5cb85c',
            legendFontColor: '#111',
            legendFontSize: 15,
            _id:1,
            count:0
          },
          {
            name: 'KNOWN',
            color: '#337ab7',
            legendFontColor: '#111',
            legendFontSize: 15,
            _id:2,
            count:0
          },
          {
            name: 'UNKNOWN',
            color: '#5bc0de',
            legendFontColor: '#111',
            legendFontSize: 15,
            _id:3,
            count:0
          },
          {
            name: 'DOUBT',
            color: '#f0ad4e',
            legendFontColor: '#111',
            legendFontSize: 15,
            _id:4,
            count:0
          },
          {
            name: 'OPP',
            color: '#d9534f',
            legendFontColor: '#111',
            legendFontSize: 15,
            _id:5,
            count:0
          },
        ];
        pieData.map((pie)=>{
            res.data.map((data)=>{
              if(data._id == pie._id){
                pie.count = data.count
              }
          })
          return pieData
        })
      // console.log('pieData',pieData)
        this.setState({chartData:pieData})
      })
      .catch(err=>{
        console.log('err',err)
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

handleCollapse=(state)=>{
  this.setState({[state] : !this.state[state]})
}


  
  render(){
    const { navigate, goBack, state } = this.props.navigation;
    const pieData = [
          {
            name: 'OUR',
            color: '#5cb85c',
            legendFontColor: '#111',
            legendFontSize: 15,
            _id:1,
            count:0
          },
          {
            name: 'KNOWN',
            color: '#337ab7',
            legendFontColor: '#111',
            legendFontSize: 15,
            _id:2,
            count:0
          },
          {
            name: 'UNKNOWN',
            color: '#5bc0de',
            legendFontColor: '#111',
            legendFontSize: 15,
            _id:3,
            count:0
          },
          {
            name: 'DOUBT',
            color: '#f0ad4e',
            legendFontColor: '#111',
            legendFontSize: 15,
            _id:4,
            count:0
          },
          {
            name: 'OPP',
            color: '#d9534f',
            legendFontColor: '#111',
            legendFontSize: 15,
            _id:5,
            count:0
          },
        ];
        // console.log('render')
    const menu = <Menu navigate={navigate} isOpen={this.state.isOpen}/>;
      return (

      <React.Fragment> 
                <View style={{ flex: 1,borderWidth:0,padding:0,backgroundColor:'#fff'}}>
                  {
                    this.state.dashboardData ? 
                  <View style={{flex:1,}}>
                    <ScrollView createContainerStyle={{borderWidth:0,margin:0}}>                     
                                <View style={{flex:1,flexDirection:'row',paddingTop:20,paddingHorizontal:15,marginBottom:15,justifyContent:'space-between',shadowOffset:{  width: 10,  height: 10,  },shadowColor: 'black',shadowOpacity: 1.0,}}>
                                  <TouchableOpacity style={styles.box} onPress={()=>this.props.navigation.navigate('SearchList')}>
                                            <View style={{alignSelf:'center',paddingHorizontal:20,}}>
                                                <Text style={styles.titleNo}>{this.state.dashboardData.totalVoters}</Text>
                                            </View>
                                            <View style={{alignSelf:'center',paddingHorizontal:20}}>
                                                <Text style={styles.title}>Total Voters</Text>
                                            </View>
                                  </TouchableOpacity>
                                  <TouchableOpacity style={styles.box}>
                                              <View style={{alignSelf:'center',paddingHorizontal:20}}>
                                                  <Text style={styles.titleNo}>{this.state.dashboardData.updatedVoters}</Text>
                                              </View>
                                              <View style={{alignSelf:'center',paddingHorizontal:20}}>
                                                  <Text style={styles.title}>Updated Voters</Text>
                                              </View>
                                  </TouchableOpacity>
                                </View>
                                <View style={{flex:1,paddingTop:20,paddingHorizontal:10,marginBottom:15}}>
                                  {
                                    this.state.chartData ?
                                      this.state.chartData.length > 0 ? 
                                      <PieChart
                                        data={this.state.chartData}
                                        width={screenWidth}
                                        height={220}
                                        chartConfig={chartConfig}
                                        accessor="count"
                                        backgroundColor="transparent"
                                        paddingLeft="15"
                                        absolute
                                      />
                                    : 
                                    <PieChart
                                        data={this.state.pieData}
                                        width={screenWidth}
                                        height={220}
                                        chartConfig={chartConfig}
                                        accessor="count"
                                        backgroundColor="transparent"
                                        paddingLeft="15"
                                        absolute
                                      />
                                    :
                                    <Loading />
                                  }
                                </View>
                                <View style={{flex:1,flexDirection:'row',paddingTop:20,paddingHorizontal:15,marginBottom:15,justifyContent:'space-between',shadowOffset:{  width: 10,  height: 10,  },shadowColor: 'black',shadowOpacity: 1.0,}}>
                                  <TouchableOpacity style={styles.box} onPress={()=>this.props.navigation.navigate('UserList')}>
                                            <View style={{alignSelf:'center',paddingHorizontal:20,}}>
                                                <Text style={styles.titleNo}>{this.state.dashboardData.totalUsers}</Text>
                                            </View>
                                            <View style={{alignSelf:'center',paddingHorizontal:20}}>
                                                <Text style={styles.title}>Total Users</Text>
                                            </View>
                                  </TouchableOpacity>
                                  <TouchableOpacity style={styles.box}>
                                              <View style={{alignSelf:'center',paddingHorizontal:20}}>
                                                  <Text style={styles.titleNo}>{this.state.dashboardData.activeUesr}</Text>
                                              </View>
                                              <View style={{alignSelf:'center',paddingHorizontal:20}}>
                                                  <Text style={styles.title}>Active Users</Text>
                                              </View>
                                  </TouchableOpacity>
                                </View>
                    </ScrollView>
                  </View>  
                  :
                  null      
                  }
              </View>
      </React.Fragment> 
    )
  }
}