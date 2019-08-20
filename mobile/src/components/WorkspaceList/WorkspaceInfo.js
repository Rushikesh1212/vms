import React, { Component } from "react";
import { AppRegistry,StyleSheet,Text,View,TextInput,BackHandler,TouchableOpacity,TouchableHighlight,Dimensions,Linking,PermissionsAndroid, ScrollView,Platform, Image,ImageBackground,Alert,SafeAreaView, AsyncStorage} from "react-native";
import { Header, Button, Icon,Card,Avatar,Tooltip} from "react-native-elements";
import { NavigationActions } from "react-navigation";
import ImageOverlay from "react-native-image-overlay";

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
// import QRCodeS/canner from 'react-native-qrcode-scanner';



const window = Dimensions.get('window');

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;
 
const images = [
    "../../images/Image-Crop.png",
    "../../images/Image-Crop.png",
    "../../images/Image-Crop.png"
];


export default class WorkspaceInfo extends Component {

  constructor(props){
    super(props);
    this.state = {
       isOpen: false,
       isCollapsed: false,
       open1: false,
       open2: false,
       qrvalue: '',
      openScanner: false,
       QR_Code_Value: '',
       Start_Scanner: false,
       isCollapsed: [],
       showAmenitiesEye:false,
       showMenuEye:false,
      seatsAvailable : [
        {status: 'full'},
        {status: 'full'},
        {status: 'full'},
        {status: 'full'},
        {status: 'full'},
        {status: 'available'},
        {status: 'available'},
        {status: 'available'},
        {status: 'available'},
        {status: 'available'},
        {status: 'available'},
        {status: 'available'},
      ],
      workAmenities: [
        {
          text: 'Wifi',
          iconName: 'wifi',
          iconType: 'material-community'
        },
        {
          text: 'Air-Conditioner',
          iconName: 'air-conditioner',
          iconType: 'material-community'
        },
        {
          text: 'Restroom',
          iconName: 'human-male-female',
          iconType: 'material-community'
        },
        {
          text: 'Printer',
          iconName: 'printer',
          iconType: 'material-community'
        },
        {
          text: 'Coffee',
          iconName: 'coffee',
          iconType: 'feather'
        },
        {
          text: 'Power Plug',
          iconName: 'power-plug',
          iconType: 'material-community'
        },
      ],
      cofficMenu : ["Masala Tea","Cappuccino","Green Tea","Black Coffee","Latte"],
      showMoreMenu: true,
      openModal         : false,
      workSpace: '',
      workspace_id: "",
      user_id: "",
      validCheckIn: ''

    };
    this.handleCollapse = this.handleCollapse.bind(this);
  }

  toggleModal = () => {
    this.setState({openModal: !this.state.openModal})
  }

  componentDidMount(){
    var workspace_id =  this.props.navigation.getParam('id','No Id')
    var user_id = this.props.navigation.getParam('userId','No Id')
    this.setState({'user_id':user_id,workspace_id:workspace_id})
    // console.log('id',id)
    axios.get('api/workspaceDetails/get/one/'+workspace_id)
      .then(response=>{
        // console.log('response',response.data)
        this.setState({workSpace:response.data})
      })
      .catch(error=>{
        console.log('error',error)
      })

    this.checkSubscription()
    // BackHandler.addEventListener('hardwareBackPress',this.androidBackHandler.bind(this));
  }
  checkSubscription(){
    AsyncStorage.getItem('user_id')
     .then((data)=>{
      console.log('data',data)
      axios.get('api/seatBooking/validate/'+data)
        .then((response)=>{
          console.log('response',response)
          this.setState({validCheckIn: true})
        })
        .catch(error=>{
          console.log('error while validating seat booking',error)
          this.setState({validCheckIn: false})
        })
     })
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

  _renderItem(item,index){
    return (
        <View style={{flex:1,}}> 
            <Image
                resizeMode="cover"
                style={styles.carouselImage}
                source={require('../../images/Morzine-Restaurants.jpg' )}
                />
        </View>
    )
}
handleCollapse=(state)=>{
  // console.log('index',index)
  // let {isCollapsed} = this.state
  // let newState = !isCollapsed[index];
  // isCollapsed[index] = newState;
  // console.log('newState',newState)
  // this.setState({
  //   isCollapsed : isCollapsed
  // })
  // console.log('isCollapsed',this.state.isCollapsed)
  this.setState({[state] : !this.state[state]})

}
 handleGetDirections = () => {
    const data = {
       source: {
        latitude: -33.8356372,
        longitude: 18.6947617
      },
      destination: {
        latitude: -33.8600024,
        longitude: 18.697459
      },
      params: [
        {
          key: "travelmode",
          value: "driving"        // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate"       // this instantly initializes navigation using the given travel mode
        }
      ],
      waypoints: [
        {
          latitude: -33.8600025,
          longitude: 18.697452,
        },
        {
          latitude: -33.8600026,
          longitude: 18.697453,
        },
           {
          latitude: -33.8600036,
          longitude: 18.697493,
        },
           {
          latitude: -33.8600046,
          longitude: 18.69743,
        },
 
      ]
    }
 
    getDirections(data)
  }

 renderPage(image, index) {
        return (
            <View key={index}>
                <ImageBackground style={{ width:"100%",minHeight:window.height/3, opacity:0.8,opacityColor:'#333'}} source={require('../../images/Morzine-Restaurants.jpg' )} >
                </ImageBackground>
            </View>
        );
    }

  onSuccess(e) {
    Linking
      .openURL(e.data)
      .catch(err => console.error('An error occured', err));
  }

 onOpenlink() {
    //Function to open URL, If scanned 
    Linking.openURL(this.state.qrvalue);
    //Linking used to open the URL in any browser that you have installed
  }
  onBarcodeScan(qrvalue) {
    //called after te successful scanning of QRCode/Barcode
    this.setState({ qrvalue: qrvalue });
    var bookingValues = {
      user_id       : this.state.user_id,
      workSpace_id  : this.state.workspace_id
    }
    if(qrvalue == this.state.workspace_id){
      axios.post('/api/seatBooking/post',bookingValues)
        .then((response)=>{
          console.log('response after seat booking',response)
          this.setState({openModal:true,openScanner: false })
        })
        .catch((error)=>{
          console.log('error while seatBooking',error)
          alert(error)
        })
    }else{
      alert("Wrong Cafe")
      this.setState({ openScanner: false });      
    }
  }
  orderMenu(){
    if(this.state.validCheckIn){
      this.setState({open1:true})
    }else{
      alert("Buy Subscription")
    }
  }
  orderItem(){
    const { workspace_id,user_id,menu } = this.state
    // console.log('workspace_id',workspace_id)
    var orderValue = {
      workSpace_id: workspace_id,
      user_id     : user_id,
      date        : new Date(),
      item        : menu,
      price       : 20,
      isDelivered : true,
      orderedAt   : new Date(),
    }
    axios.post('/api/menuOrders/post',orderValue)
      .then((response)=>{
        console.log('response while placing order',response)
        this.setState({open1:false, open2:true})
      })
      .catch((error)=>{
        console.log('error while placing order',error)
        alert(error)
      })
    
  }
  onOpenScanner=()=> {
    var that =this;
    //To Start Scanning
    if(Platform.OS === 'android'){
      async function requestCameraPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,{
              'title': 'CameraExample App Camera Permission',
              'message': 'CameraExample App needs access to your camera '
            }
          )
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //If CAMERA Permission is granted
            that.setState({ qrvalue: '' });
            that.setState({ openScanner: true });
          } else {
            alert("CAMERA permission denied");
          }
        } catch (err) {
          alert("Camera permission err",err);
          console.warn(err);
        }
      }
      //Calling the camera permission function
      requestCameraPermission();
    }else{
      that.setState({ qrvalue: '' });
      that.setState({ openScanner: true });
    }    
  }

  
  render(){
    const { navigate, goBack, state } = this.props.navigation;
    const {status} = state.params;
    const menu = <Menu navigate={navigate} isOpen={this.state.isOpen}/>;
    let {seatsAvailable,workAmenities,cofficMenu,showMoreMenu} = this.state;
    // console.log('status',status)
    console.log('Subscribe',this.state.validCheckIn)
    // let displayModal;
    //If qrvalue is set then return this view
    if (!this.state.openScanner) {
      return (

      <React.Fragment> 
        <HeaderDy goBack={goBack} headerTitle="Workspace View" />
        
        <View style={{width:'100%',borderWidth:0,padding:0,backgroundColor:'#aaa'}}>
            
           <Carousel
               autoplay
               autoplayTimeout={5000}
               loop
               index={0}
               pageSize={BannerWidth}
               pageIndicatorStyle={{marginBottom:40}}
           >
            {images.map((image, index) => this.renderPage(image, index))}
          </Carousel>
                           
        </View>

        <Card containerStyle={[styles.card,(status==true)?styles.borderOpen:styles.borderClose]}>
          <GestureRecognizer 
            onSwipeDown = {(state)=>{this.props.navigation.navigate('WorkspaceMap',{transition:'topTransition'})}}
            // style={{backgroundColor:'#ff0'}}
          >
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('WorkspaceMap',{transition:'topTransition'})}>
            <Icon size={28} name='chevron-thin-down' type='entypo' color='#666' style={{}}/> 
          </TouchableOpacity>


          {
            this.state.workSpace ?

            <ScrollView contentContainerStyle={{backgroundColor:'#fff',minHeight:window.height/3,paddingHorizontal:15}} style={{}}>
              <View style={{flexDirection:'row',marginBottom:15,}}>
                <View style={{flex:0.9}}>
                  <View style={{alignSelf:'flex-start',paddingHorizontal:20,marginTop:5}}>
                    <Text style={styles.titleInfo}>{this.state.workSpace.nameOfCafe}</Text>
                  </View>
                  <View style={{alignSelf:'flex-start',paddingHorizontal:20}}>
                    <Text style={styles.timeInfo}>{this.state.workSpace.openingtime} - {this.state.workSpace.closingtime}</Text>
                  </View>
                  <View style={{paddingHorizontal:20,marginTop:0}}>
                    <Text style={styles.directionInfos}>
                      {
                        this.state.workSpace.address+', '+this.state.workSpace.landmark+', '+this.state.workSpace.area+', '+this.state.workSpace.city+', '+this.state.workSpace.state+' '+this.state.workSpace.country
                      }
                    </Text>
                  </View>
                </View>
                <TouchableOpacity onPress={this.handleGetDirections} >
                  <View style={styles.btnWrap}>
                    <Icon size={28} name='navigation' type='feather' color='#fff' style={styles.directionIcon}/>
                  </View>
                  <Text style={styles.directionInfo}>Directions</Text>
                </TouchableOpacity>
              </View>

              <View style={{flex:1,flexDirection:'row',paddingHorizontal:20,marginBottom:10}}> 

                <View style={{marginRight:15,flex:0.5}}>
                    <Text style={styles.TextInfo}>Seats Available</Text>
                </View>

              </View>
              <View style={{paddingHorizontal:20,flexDirection:'row',justifyContent:'space-between',}}>
              {seatsAvailable.map((seat,index)=>(
                <View>
                  <Tooltip 
                    popover={<Text style={{color:'#fff'}}>{seat.status == "available" ? "Available" : "Occupied"}</Text>} 
                    highlightColor="#fff"
                  >
                    <Icon key={index} size={22} name='seat' type='material-community' color={(seat.status=="available")?'#aaa':'#0275D8'} style={{}}/>
                  </Tooltip>
                </View>
              ))
              }
              </View>

              <View style={{flex:1,marginTop:20,flexDirection:'row',paddingHorizontal:20,marginBottom:20}}> 
                <View style={{marginRight:15,flex:0.5}}>
                    <Text style={styles.TextInfo}>Work Amenities</Text>
                </View>
              </View>
              <View style={{flex:1,paddingHorizontal:20,flexDirection:'row'}}>
              {
                workAmenities.map((data,index)=>(
                <View key={index} style={{paddingRight:25}}>
                  <Tooltip 
                    popover={<Text style={{color:'#fff'}}>{data.text}</Text>} 
                    highlightColor="#fff"
                  >
                    <Icon size={20} name={data.iconName} type={data.iconType} color={'#666'} style={{}}/> 
                  </Tooltip>
                </View>
              ))
              }
              </View>

              <View style={{flex:1,marginTop:20,flexDirection:'row',paddingHorizontal:20,marginBottom:20}}> 
                <View style={{}}>
                    <Text style={styles.TextInfo}>Coffic Menu
                      <Text style={styles.subText}> (Tap to Order)</Text>
                    </Text>
                </View>
              </View>
              <View style={{width:'100%',flexDirection:'row',paddingHorizontal:20,flexWrap:'wrap'}}>
              {showMoreMenu
              ?
                <React.Fragment>
                {
                  cofficMenu.slice(0,4).map((data,index)=>(
                  
                  <TouchableOpacity 
                    onPress={()=>this.setState({menu:data}),this.orderMenu}
                    style={{flexDirection:'row',width:'50%',marginBottom:5}}
                  >
                    <View style={{}}>
                      <Icon name="dot-single" type="entypo" size={18}  color="#333" style={{}}/>
                    </View>
                    <View style={{}}>
                      <Text style={styles.MenuInfo}>{data}</Text>
                    </View>
                  </TouchableOpacity>
                  ))
                  
                  
                }
                </React.Fragment>
              :
                <React.Fragment>
                {
                  cofficMenu.map((data,index)=>(
                  
                  <TouchableOpacity 
                    onPress={()=>this.setState({menu:data}),this.orderMenu}
                    style={{flexDirection:'row',width:'50%',marginBottom:5}}
                  >
                    <View style={{}}>
                      <Icon name="dot-single" type="entypo" size={18}  color="#333" style={{}}/>
                    </View>
                    <View style={{}}>
                      <Text style={styles.MenuInfo}>{data}</Text>
                    </View>
                  </TouchableOpacity>
                  ))
                }
                </React.Fragment>
              }
              {
                cofficMenu.length>4 && showMoreMenu
                ?
                  <TouchableOpacity 
                    onPress={()=>{this.setState({showMoreMenu:false})}}
                    style={{flexDirection:'row',width:'100%',marginBottom:10,marginTop:10}}
                  >
                    <View style={{width:'100%'}}>
                      <Text style={styles.showMoreText}>{"Show More"}</Text>
                    </View>
                  </TouchableOpacity>
                :
                  null
              }
              </View>

              <View style={{paddingHorizontal:20,marginTop:10,marginBottom:"15%"}}>
                <Image 
                  style={{ width:"100%",height:60, opacity:0.8,opacityColor:'#333',borderRadius:15}} 
                  source={require('../../images/download.jpeg' )} >
                </Image>
              </View>

            </ScrollView>
          : null            
          }
{/*            <ScrollView contentContainerStyle={{backgroundColor:'#fff',minHeight:window.height/2}} style={{}}>
              <View style={{flexDirection:'row',marginBottom:15,}}>
                <View style={{flex:0.9}}>
                  <View style={{alignSelf:'flex-start',paddingHorizontal:20,marginTop:5}}>
                    <Text style={styles.titleInfo}>{title}</Text>
                  </View>
                  <View style={{alignSelf:'flex-start',paddingHorizontal:20}}>
                    <Text style={styles.timeInfo}>10:00 - 23:00</Text>
                  </View>
                  <View style={{paddingHorizontal:20,marginTop:0}}>
                    <Text style={styles.directionInfos}>
                      A 2/2, Tilak Marg, Ashok Nagar, C Scheme, Ashok Nagar, Jaipur, Rajasthan 302005
                    </Text>
                  </View>
                </View>
                <TouchableOpacity onPress={this.handleGetDirections} >
                  <View style={styles.btnWrap}>
                    <Icon size={28} name='navigation' type='feather' color='#fff' style={styles.directionIcon}/>
                  </View>
                  <Text style={styles.directionInfo}>Directions</Text>
                </TouchableOpacity>
              </View>


              <View style={{flex:1,flexDirection:'row',paddingHorizontal:20,marginBottom:20}}> 
                <View style={{marginRight:15,flex:0.5}}>
                    <Text style={styles.TextInfo}>Seats Available</Text>
                </View>
              </View>
              <View style={{paddingHorizontal:20,flexDirection:'row',justifyContent:'space-between',}}>
              {seatsAvailable.map((seat,index)=>(
                <View>
                  <Tooltip 
                    popover={<Text style={{color:'#fff'}}>{seat.status}</Text>} 
                    highlightColor="#fff"
                  >
                    <Icon key={index} size={22} name='seat' type='material-community' color={(seat.status=="available")?'#aaa':'#0275D8'} style={{}}/>
                  </Tooltip>
                </View>
              ))
              }
              </View>

              <View style={{flex:1,marginTop:20,flexDirection:'row',paddingHorizontal:20,marginBottom:20}}> 
                <View style={{marginRight:15,flex:0.5}}>
                    <Text style={styles.TextInfo}>Work Amenities</Text>
                </View>
              </View>
              <View style={{flex:1,paddingHorizontal:20,flexDirection:'row'}}>
              {
                workAmenities.map((data,index)=>(
                <View key={index} style={{paddingRight:25}}>
                  <Tooltip 
                    popover={<Text style={{color:'#fff'}}>{data.text}</Text>} 
                    highlightColor="#fff"
                  >
                    <Icon size={20} name={data.iconName} type={data.iconType} color={'#666'} style={{}}/> 
                  </Tooltip>
                </View>
              ))
              }
              </View>

              <View style={{flex:1,marginTop:20,flexDirection:'row',paddingHorizontal:20,marginBottom:20}}> 
                <View style={{}}>
                    <Text style={styles.TextInfo}>Coffic Menu
                      <Text style={styles.subText}> (Tap to Order)</Text>
                    </Text>
                </View>
              </View>
              <View style={{width:'100%',flexDirection:'row',paddingHorizontal:20,flexWrap:'wrap'}}>
              {showMoreMenu
              ?
                <React.Fragment>
                {
                  cofficMenu.slice(0,4).map((data,index)=>(
                  
                  <TouchableOpacity 
                    onPress={()=>{this.setState({menu:data,open1:!this.state.open1})}}
                    style={{flexDirection:'row',width:'50%',marginBottom:5}}
                  >
                    <View style={{}}>
                      <Icon name="dot-single" type="entypo" size={18}  color="#333" style={{}}/>
                    </View>
                    <View style={{}}>
                      <Text style={styles.MenuInfo}>{data}</Text>
                    </View>
                  </TouchableOpacity>
                  ))
                  
                  
                }
                </React.Fragment>
              :
                <React.Fragment>
                {
                  cofficMenu.map((data,index)=>(
                  
                  <TouchableOpacity 
                    onPress={()=>{this.setState({menu:data,open1:!this.state.open1})}}
                    style={{flexDirection:'row',width:'50%',marginBottom:5}}
                  >
                    <View style={{}}>
                      <Icon name="dot-single" type="entypo" size={18}  color="#333" style={{}}/>
                    </View>
                    <View style={{}}>
                      <Text style={styles.MenuInfo}>{data}</Text>
                    </View>
                  </TouchableOpacity>
                  ))
                }
                </React.Fragment>
              }
              {
                cofficMenu.length>4 && showMoreMenu
                ?
                  <TouchableOpacity 
                    onPress={()=>{this.setState({showMoreMenu:false})}}
                    style={{flexDirection:'row',width:'100%',marginBottom:10,marginTop:10}}
                  >
                    <View style={{width:'100%'}}>
                      <Text style={styles.showMoreText}>{"Show More"}</Text>
                    </View>
                  </TouchableOpacity>
                :
                  null
              }
              </View>

              <View style={{paddingHorizontal:20,marginTop:10,marginBottom:"15%"}}>
                <Image 
                  style={{ width:"100%",height:60, opacity:0.8,opacityColor:'#333',borderRadius:15}} 
                  source={require('../../images/download.jpeg' )} >
                </Image>
              </View>

            </ScrollView>*/}

            </GestureRecognizer>
            
          </Card>

        <View style={styles.footer}>
          {status==true
          ?
            <View style={[{flex:0.6,justifyContent:'center'}]}>
              {
                this.state.validCheckIn == '' ?
                  null
                : this.state.validCheckIn == false ?
                  <Text style={[styles.workspaceStatus]}>
                    Subscribe to a plan to Enjoy Benefits!
                  </Text>
                : <Text style={[styles.workspaceStatus]}>
                    Scan QR code to check-in
                  </Text>
              }
{/*              <Text style={[styles.workspaceStatus]}>
                Scan QR code to check-in
              </Text>*/}
            </View>
          :
            <View style={[{flex:1,justifyContent:'center'}]}>
              <Text style={[styles.textClose]}>
                CLOSED
              </Text>
            </View>
          }
            
            {status==true
              ?
                <View style={{flex:0.4,justifyContent:'center'}}>
                  {
                    this.state.validCheckIn == '' ?                     
                      null
                    : this.state.validCheckIn == false ?
                      <Button
                        onPress         = {() => this.props.navigation.navigate('PackagePlanList')}
                        //onPress         = {() => this.props.navigation.navigate('Scanner')}
                        titleStyle      = {styles.buttonText}
                        title           = "Subscribe"
                        buttonStyle     = {styles.buttonSignUp}
                        containerStyle  = {styles.buttonContainer}
                      />
                    :
                      <Button
                        onPress         = {() => this.onOpenScanner()}
                        //onPress         = {() => this.props.navigation.navigate('Scanner')}
                        titleStyle      = {styles.buttonText}
                        title           = "Scan"
                        buttonStyle     = {styles.buttonSignUp}
                        containerStyle  = {styles.buttonContainer}
                      />
                  }                  
                </View>
              :
              null
              }
          </View>
          <AlertPro
          ref={ref => {
            this.AlertPro = ref;
          }}
          title=""
          message={"Are you sure you want to place order for "+this.state.menu+" ?"}
          textCancel="No"
          textConfirm="Yes"
          customStyles={{
            // mask: {
            //   backgroundColor: "transparent",
            //   opacity:0.5,
            // },
            // container: {
            //   borderWidth: 1,
            //   borderColor: "#9900cc",
            //   shadowColor: "#000000",
            //   shadowOpacity: 0.1,
            //   shadowRadius: 10
            // },
            buttonCancel: {
              backgroundColor: "#DB4437"
            },
            buttonConfirm: {
              
              backgroundColor: "#34be34"
            },
            textConfirm:{
              fontFamily:'Montserrat-Regular'
            },
            title:{
              fontSize:22,
              fontFamily:'Montserrat-Regular'
            },
            message:{
              fontSize:15,
              fontFamily:'Montserrat-Regular'
            },
          }}
          onCancel={()=>{
            this.AlertPro.close()
          }}
          onConfirm={()=>{
            this.AlertPro.close();
            this.AlertPro2.open();
          }}
        />

        <AlertPro
          ref={ref => {
            this.AlertPro2 = ref;
          }}
          title="Your order has been placed."
          message={"Enjoy your hot beverage & make most of the day. Cheers!\n\nP.S.Inform the staff for any specifications."}
          showCancel={false}
          textConfirm="OK"
          customStyles={{
            
            buttonCancel: {
              backgroundColor: "#DB4437"
            },
            buttonConfirm: {
              
              backgroundColor: "#34be34"
            },
            textConfirm:{
              fontFamily:'Montserrat-Regular'
            },
            title:{
              fontSize:22,
              fontFamily:'Montserrat-Regular'
            },
            message:{
              fontSize:15,
              fontFamily:'Montserrat-Regular'
            },
          }}
          
          onConfirm={()=>{
            this.AlertPro2.close()
          }}
        />

        <AlertPro
          ref={ref => {
            this.AlertPro3 = ref;
          }}
          title={""}
          message={<Text>{"You have successfully checked in.\nPlace your order from the Café screen.\n\nDO NOT forget to Check-out."}</Text>}
          showCancel={false}
          textConfirm="OK"
          customStyles={{
            
            buttonCancel: {
              backgroundColor: "#DB4437"
            },
            buttonConfirm: {
              fontFamily:'Montserrat-Regular',
              backgroundColor: "#34be34"
            },
            textConfirm:{
              fontFamily:'Montserrat-Regular'
            },
            title:{
              fontSize:22,
              fontFamily:'Montserrat-Regular'
            },
            message:{
              fontSize:15,
              fontFamily:'Montserrat-Regular'
            },
          }}
          
          onConfirm={()=>{
            this.AlertPro3.close()
          }}
        />

        <Modal isVisible={this.state.openModal}  
             onBackdropPress={() => this.setState({ openModal: false })}
             coverScreen={true}
             hideModalContentWhileAnimating={true}
             style={{paddingHorizontal:'5%',zIndex:999}}
             animationOutTiming={500}>
        <View style={{backgroundColor:"#fff",alignItems:'center',borderRadius:20,paddingVertical:30,paddingHorizontal:10}}>
          <View style={{justifyContent:'center',backgroundColor:"#34be34",width:60,height:60,borderRadius:30,overflow:'hidden'}}>
            <Icon size={30} name='check' type='fontAwesome5' color='#fff' style={{}}/>
          </View>
          <Text style={{fontFamily:'Montserrat-Regular',fontSize:15,textAlign:'center',marginTop:20}}>
            You have successfully checked in.
          </Text>
          <Text style={{fontFamily:'Montserrat-Regular',fontSize:15,textAlign:'center'}}>
            Place your order from the Café screen.
          </Text>
          <Text style={{fontFamily:'Montserrat-Bold',fontSize:16,textAlign:'center',justifyContent:'center',marginVertical:15}}>
            Do NOT forget to Check-out.
          </Text>

          <View style={{width:'100%',borderBottomRightRadius:500,marginTop:15}}>
            <Button
              onPress         = {()=>this.toggleModal()}
              titleStyle      = {styles.buttonText}
              title           = "OK"
              buttonStyle     = {styles.buttonSignUp}
              containerStyle  = {styles.buttonContainer}
            />
          </View>
        </View>
      </Modal>

      <Modal isVisible={this.state.open1}  
             onBackdropPress={() => this.setState({ open1: false })}
             coverScreen={true}
             hideModalContentWhileAnimating={true}
             style={{paddingHorizontal:'5%',zIndex:999}}
             animationOutTiming={500}>
        <View style={{backgroundColor:"#fff",alignItems:'center',borderRadius:20,paddingVertical:30,paddingHorizontal:10}}>
          <View style={{justifyContent:'center',backgroundColor:"transparent",width:60,height:60,borderRadius:30,overflow:'hidden'}}>
            <Icon size={50} name='coffee' type='feather' color='#666' style={{}}/>
          </View>
          <Text style={{fontFamily:'Montserrat-Regular',fontSize:15,textAlign:'center',marginTop:20}}>
            Are you sure you want to place order for <Text style={{fontFamily:'Montserrat-Bold'}}>{this.state.menu}</Text> ?
          </Text>
         

          <View style={{flexDirection:'row', width:'100%',marginTop:15,justifyContent:'space-between',paddingHorizontal:'10%'}}>
            <Button
              onPress         = {()=>this.setState({open1:false})}
              titleStyle      = {styles.buttonText}
              title           = "No"
              buttonStyle     = {styles.buttonCancel}
              containerStyle  = {styles.buttonContainer1}
            />
             <Button
              onPress         = {this.orderItem.bind(this)}
              titleStyle      = {styles.buttonText}
              title           = "Yes"
              buttonStyle     = {styles.buttonConfirm}
              containerStyle  = {styles.buttonContainer1}
            />
          </View>
        </View>
      </Modal>

      <Modal isVisible={this.state.open2}  
             onBackdropPress={() => this.setState({ open2: false })}
             coverScreen={true}
             hideModalContentWhileAnimating={true}
             style={{paddingHorizontal:'5%',zIndex:999}}
             animationOutTiming={500}>
        <View style={{backgroundColor:"#fff",alignItems:'center',borderRadius:20,paddingVertical:30,paddingHorizontal:10}}>
          <View style={{justifyContent:'center',backgroundColor:"#34be34",width:60,height:60,borderRadius:30,overflow:'hidden'}}>
            <Icon size={30} name='check' type='fontAwesome5' color='#fff' style={{}}/>
          </View>
          <Text style={{fontFamily:'Montserrat-Bold',fontSize:16,textAlign:'center',justifyContent:'center',marginTop:20}}>
            Your order has been placed.
          </Text>
         <Text style={{fontFamily:'Montserrat-Regular',fontSize:15,textAlign:'center'}}>
            {"Enjoy your hot beverage & make most of the day. Cheers!"}
          </Text>
          <Text style={{fontFamily:'Montserrat-Regular',fontSize:13,textAlign:'center',paddingHorizontal:'5%'}}>
            {"\nP.S.Inform the staff for any specifications."}
          </Text>

          <View style={{width:'100%',marginTop:15,paddingHorizontal:'10%'}}>
            <Button
              onPress         = {()=>this.setState({open2:false})}
              titleStyle      = {styles.buttonText}
              title           = "OK"
              buttonStyle     = {styles.buttonSignUp}
              containerStyle  = {styles.buttonContainer}
            />
             
          </View>
        </View>
      </Modal>
      </React.Fragment> 
    );
}

  return (
      <View style={{ flex: 1 ,backgroundColor:"#ff0"}}>
        <CameraKitCameraScreen
          showFrame={true}
          //Show/hide scan frame
          scanBarcode={true}
          //Can restrict for the QR Code only
          laserColor={'blue'}
          //Color can be of your choice
          frameColor={'yellow'}
          //If frame is visible then frame color
          colorForScannerFrame={'black'}
          //Scanner Frame color
          onReadCode={event =>
            this.onBarcodeScan(event.nativeEvent.codeStringValue)
          }
        />
      </View>
    );
  }
}