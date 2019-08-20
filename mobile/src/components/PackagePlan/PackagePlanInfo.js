import React, { Component } from "react";
import {StyleSheet,Text,View,TextInput,BackHandler,TouchableOpacity, ScrollView,Platform, Image,ImageBackground,Alert,TouchableHighlight,AsyncStorage} from "react-native";
import { Header, Button, Icon,Card,Avatar} from "react-native-elements";
import { NavigationActions } from "react-navigation";
import ImageOverlay from "react-native-image-overlay";

import SideMenu from 'react-native-side-menu';
import PropTypes from "prop-types";
import Drawer from 'react-native-drawer';

import styles from "./styles.js";

// import MenuBar from '../Menu/Menu.js';
import HeaderDy from "../../layouts/HeaderDy/HeaderDy.js";
import AlertPro from "react-native-alert-pro";
import Modal from "react-native-modal";
import axios from "../../config/axios.js";


export default  class PackagePlanInfo extends Component {

  constructor(props){
    super(props);
    this.state = {
      showPaymentSuccess: true,
      openModal         : false,
      subscription      : '',
    };
  }
  componentDidMount(){
    const itemId = this.props.navigation.getParam('id', 'NO-ID');
    axios.get('/api/subscriptionPlan/get/one/'+itemId)
      .then(response=>{
        console.log('single subscription',response)
        this.setState({subscription:response.data});
      })
      .catch(error=>{
        console.log('error',error)
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

  handleOpen = () => {
    this.setState({ showPaymentSuccess: true })
  }
 
  handleClose = () => {
    this.setState({ showPaymentSuccess: false })
  }
  toggleModal = () => {
    this.setState({openModal: !this.state.openModal})
  }
  subscribePlan = () => {
    AsyncStorage.getItem('user_id')
     .then((data)=>{
      var subOrder = {
          user_id : data,
          plan_id : this.state.subscription._id,
      }
      axios.post('/api/subscriptionOrder/post',subOrder)
          .then(response=>{
            console.log('response',response)
            this.setState({openModal: true})
          })
          .catch(error=>{
            console.log('error',error)
          })
     })
     .catch(err=>{
      console.log('error while fetching id',err)
     })
  }
  render(){

    const { navigate, goBack, state } = this.props.navigation;
     // const itemId = this.props.navigation.getParam('id', 'NO-ID');
     console.log('subscription',this.state.subscription)
    const {type,amount,checkinCount}= this.props.navigation.state.params;
    // const menu = <MenuBar navigate={navigate} />;
   
    // var navigationView = <NotificationCommon closeDrawer={this.closeDrawer} notificationData={[]} navigation={this.props.navigation}/>

    return(
      <React.Fragment>
        <HeaderDy goBack={goBack}  headerTitle="Select Membership Plan"  />
        {
          this.state.subscription ?
            <ImageBackground
              source={require('../../images/monthly-inner.jpg')}
              // style={styles.bgImages}
              resizeMode='cover'
              style={styles.bgContainer}
            >
              <View style={styles.detailsBlock}>
                <View style={styles.detailsTextWrap}>
                  <Text style={styles.packagetitle}>{this.state.subscription.planName.split(' ')[0]}</Text>
                  <Text style={styles.package2title}>Rs {this.state.subscription.price}</Text>

                  <Text style={styles.textPara}>{this.state.subscription.maxCheckIns} check-ins to any location cheaper than cost of meal</Text>
                  <Text style={styles.textPara}>Unlimited tea coffee and water</Text>
                  <Text style={styles.textPara}>Reserved seating with plugs</Text>
                  <Text style={styles.textPara}>High-speed, secure wifi access</Text>
                  <Text style={styles.textPara}>20% discount on food abd beverage</Text>
                  <Text style={styles.textPara}>Free Parking on site</Text>
                  <Text style={styles.textPara}>Access to our community events and workshops</Text>
                  <Text style={styles.textPara}>Access to our community events and workshops</Text>
                  <Text style={styles.textPara}>2 Hours meeting room credit</Text>
                  <Text style={styles.textPara}>40 off proceeding meeting room rate</Text>
                  <Text style={styles.textPara}>" Valid for a month "</Text>
                </View>

                <TouchableHighlight onPress={this.subscribePlan}> 
                  <View style={{backgroundColor:'#0275D8',borderBottomLeftRadius:30,borderBottomRightRadius:30,padding:'5%'}}>
                    <Text style={styles.selectPlan}>Select Plan</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </ImageBackground>
          :
          null
        }



{/*        <ImageBackground
          source={require('../../images/monthly-inner.jpg')}
          // style={styles.bgImages}
          resizeMode='cover'
          style={styles.bgContainer}
        >
          <View style={styles.detailsBlock}>
            <View style={styles.detailsTextWrap}>
              <Text style={styles.packagetitle}>{type}</Text>
              <Text style={styles.package2title}>Rs {amount}</Text>

              <Text style={styles.textPara}>{checkinCount} check-ins to any location cheaper than cost of meal</Text>
              <Text style={styles.textPara}>Unlimited tea coffee and water</Text>
              <Text style={styles.textPara}>Reserved seating with plugs</Text>
              <Text style={styles.textPara}>High-speed, secure wifi access</Text>
              <Text style={styles.textPara}>20% discount on food abd beverage</Text>
              <Text style={styles.textPara}>Free Parking on site</Text>
              <Text style={styles.textPara}>Access to our community events and workshops</Text>
              <Text style={styles.textPara}>Access to our community events and workshops</Text>
              <Text style={styles.textPara}>2 Hours meeting room credit</Text>
              <Text style={styles.textPara}>40 off proceeding meeting room rate</Text>
              <Text style={styles.textPara}>" Valid for a month "</Text>
            </View>

            <TouchableHighlight onPress={this.toggleModal}> 
              <View style={{backgroundColor:'#0275D8',borderBottomLeftRadius:30,borderBottomRightRadius:30,padding:'5%'}}>
                <Text style={styles.selectPlan}>Select Plan</Text>
              </View>
            </TouchableHighlight>
          </View>
        </ImageBackground> */}

        <AlertPro
          ref={ref => {
            this.AlertPro = ref;
          }}
          onConfirm={() => this.AlertPro.close()}
          title="Congratulations"
          message={"You are officially part of the Coffic community.\nLet's find you a place for work today"}
          showCancel={false}
          // textCancel="Cancel"
          textConfirm="Search Workspace"
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
            // buttonCancel: {
            //   backgroundColor: "#4da6ff"
            // },
            buttonConfirm: {
              width:'50%',
              backgroundColor: "#0275D8"
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
            this.AlertPro.close()
            this.props.navigation.navigate('WorkspaceMap');
          }}
        />

            <Modal isVisible={this.state.openModal}  
                   onBackdropPress={() => this.setState({ openModal: false })}
                   coverScreen={false}
                   hideModalContentWhileAnimating={true}
                   style={{paddingHorizontal:'5%'}}
                   animationOutTiming={500}>
              <View style={{backgroundColor:"#fff",alignItems:'center',borderRadius:20,paddingVertical:30,paddingHorizontal:10}}>
                <View style={{justifyContent:'center',backgroundColor:"#34be34",width:60,height:60,borderRadius:30,overflow:'hidden'}}>
                  <Icon size={30} name='check' type='fontAwesome5' color='#fff' style={{}}/>
                </View>
                <Text style={{fontFamily:'Montserrat-Bold',fontSize:22,textAlign:'center',justifyContent:'center',marginVertical:20}}>Congratulations</Text>
                <Text style={{fontFamily:'Montserrat-Regular',fontSize:15,textAlign:'center'}}>You are officially part of the Coffic community. Let's find you a place for work today</Text>
                <View style={{width:'100%',borderBottomRightRadius:500,marginTop:15}}>
                  <Button
                    onPress         = {()=>this.props.navigation.navigate('WorkspaceMap')}
                    titleStyle      = {styles.buttonText}
                    title           = "Search Workspace"
                    buttonStyle     = {styles.buttonSignUp}
                    containerStyle  = {styles.buttonContainer}
                  />
                </View>
              </View>
            </Modal>

      </React.Fragment>
    );
  }
}


 