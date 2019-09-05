import React, { Component } from "react";
import { StyleSheet,Text,View,TextInput,BackHandler,TouchableOpacity, ScrollView,Platform,Dimensions, Image,ImageBackground,Alert,AsyncStorage} from "react-native";
import { Header, Button, Icon,Card,Avatar} from "react-native-elements";
import { NavigationActions } from "react-navigation";
import ImageOverlay from "react-native-image-overlay";

import SideMenu from 'react-native-side-menu';
import PropTypes from "prop-types";
import Drawer from 'react-native-drawer';
import axios from "../../config/axios.js";
import {colors,sizes} from '../../config/styles.js';

import styles from "./styles.js";
import SwitchToggle from 'react-native-switch-toggle';

// import MenuBar from '../Menu/Menu.js';
import HeaderDy from "../../layouts/HeaderDy/HeaderDy.js";


 const window = Dimensions.get('window');
export default  class UserProfile extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: '',
      dead : false,
      visited: false,
      voted: false,
      votedText: 'No',
      visitText: 'No',
      deadText:'Alive',
    };
  }
  componentWillMount(){
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
  onDeadToggle=()=>{
    let {dead} = this.state;
    if(dead){
      this.setState({deadText:'Alive'})
    }else{
      this.setState({deadText:'Dead'})
    }
    this.setState({dead:!this.state.dead});
  }
  onVisitToggle=()=>{
    let {visited} = this.state;
    if(visited){
      this.setState({visitText:'No'})
    }else{
      this.setState({visitText:'Yes'})
    }
    this.setState({visited:!this.state.visited});
  }
  onVoteToggle=()=>{
    let {voted} = this.state;
    if(voted){
      this.setState({votedText:'No'})
    }else{
      this.setState({votedText:'Yes'})
    }
    this.setState({voted:!this.state.voted});
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

    // console.log('user',this.state.user)
    // const menu = <MenuBar navigate={navigate} />;
   
    // var navigationView = <NotificationCommon closeDrawer={this.closeDrawer} notificationData={[]} navigation={this.props.navigation}/>

    return(
        <Drawer
            ref={(ref) => this._drawer = ref}
            // openDrawerOffset={(viewport) => viewport.width-}
            side="left"
            >
            
{/*            <HeaderDy goBack={goBack} headerTitle="User Profile" />*/}
            <ScrollView  keyboardShouldPersistTaps="handled" >
               <TouchableOpacity >
              </TouchableOpacity>
                <React.Fragment>
                  <View style={{ flexDirection:'row'/*,backgroundColor:"#d3d"*/,paddingTop:10}}>
                      <View style={{flex:1,}}>
                        <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:"#111",paddingTop:8,paddingLeft:10}}>
                          <Text style={styles.newLabelText}>Const No: </Text>
                          <Text style={{fontFamily:"Montserrat-Bold"}}>232</Text>
                        </View>
                        <View style={{flexDirection:'row',borderBottomWidth:1,paddingLeft:10,borderColor:"#111",paddingVertical:8}}>
                          <Text style={styles.newLabelText}>Booth</Text>
                          <Text style={{fontFamily:"Montserrat-Bold"}}>1</Text>
                        </View>
                        <View style={{flexDirection:'row',borderBottomWidth:1,paddingLeft:10,borderColor:"#111",paddingVertical:8}}>
                          <Text style={styles.newLabelText}>Sr. No.</Text>
                          <Text style={{fontFamily:"Montserrat-Bold"}}>1</Text>
                        </View>
                      </View>
                      <View style={{alignSelf:'flex-end',borderWidth:1,borderColor:"#111",padding:8}}>             
                        <Avatar
                          width={80}
                          height={80}
                          rounded
                          source={require("../../images/userIcon.png")}
                          activeOpacity={0.9}
                        />                   
                    </View>           
                  </View>
                  <View style={{paddingVertical:0}}>
                      <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:"#111",paddingVertical:8,paddingLeft:10}}>
                        <Text style={styles.newLabelText}>Name </Text>
                        <Text style={{flex:0.6}}>Aralvad  Gangabai Maroti </Text>
                      </View>
                  </View>
                  <View style={{paddingVertical:0}}>
                      <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:"#111",paddingVertical:8,paddingLeft:10}}>
                        <Text  style={styles.newLabelText}>Address </Text>
                        <Text style={{flex:0.6}}> 0/0 Srinagar, Somanatha, Bhosari, Pune </Text>
                      </View>
                  </View>
                  <View style={{paddingVertical:0}}>
                      <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:"#111",paddingVertical:8,paddingLeft:10}}>
                        <Text style={styles.newLabelText}>Booth No </Text>
                        <Text style={{flex:0.6}}> 1-Z.P.S Shingarwadi </Text>
                      </View>
                  </View>
                  <View style={{paddingVertical:0}}>
                      <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:"#111",paddingVertical:8,paddingLeft:10}}>
                        <Text style={styles.newLabelText}>Sex-Age </Text>
                        <Text style={{flex:0.6}}> 1-Z.P.S Shingarwadi </Text>
                      </View>
                  </View>
                  <View style={{paddingVertical:0}}>
                      <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:"#111",paddingVertical:8,paddingLeft:10}}>
                        <Text style={styles.newLabelText}>Mobile No</Text>
                        <Text style={{flex:0.6}}> 1-Z.P.S Shingarwadi </Text>
                      </View>
                  </View>
                  <View style={{paddingVertical:0}}>
                      <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:"#111",paddingVertical:8,paddingLeft:10}}>
                        <Text style={styles.newLabelText}>WhatsApp No </Text>
                        <Text style={{flex:0.6}}> 1-Z.P.S Shingarwadi </Text>
                      </View>
                  </View>
                  <View style={{paddingVertical:0}}>
                      <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:"#111",paddingVertical:8,paddingLeft:10}}>
                        <Text style={styles.newLabelText}>Dead</Text>
                        <View style={{flex:0.6}}>
                          <SwitchToggle
                            switchOn={this.state.dead}
                            onPress={()=>this.onDeadToggle()}
                            circleColorOn={colors.button}
                            circleColorOff={colors.primary}
                            buttonText={this.state.deadText}
                            containerStyle={{
                              width: 130,
                              height: 30,
                              borderRadius: 20,
                              backgroundColor: '#f0f',
                              borderWidth:1,
                              borderColor:'#ccc',
                              padding:2,
                            }}
                            circleStyle={{
                              width: 80,
                              height: 28,
                              borderRadius: 20,
                              justifyContent:'center',
                              alignItems:'center',
                            }}
                            buttonTextStyle={{
                              color:'#fff',
                              fontFamily:'Roboto-Regular',
                              fontSize: 13
                            }}
                          />
                        </View>
                      </View>
                  </View>
                  <View style={{paddingVertical:0}}>
                      <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:"#111",paddingVertical:8,paddingLeft:10}}>
                        <Text style={styles.newLabelText}>Visited</Text>
                        <View style={{flex:0.6}}>
                          <SwitchToggle
                            switchOn={this.state.visited}
                            onPress={()=>this.onVisitToggle()}
                            circleColorOn={colors.button}
                            circleColorOff={colors.primary}
                            buttonText={this.state.visitText}
                            containerStyle={{
                              width: 130,
                              height: 30,
                              borderRadius: 20,
                              backgroundColor: '#f0f',
                              borderWidth:1,
                              borderColor:'#ccc',
                              padding:2,
                            }}
                            circleStyle={{
                              width: 80,
                              height: 28,
                              borderRadius: 20,
                              justifyContent:'center',
                              alignItems:'center',
                            }}
                            buttonTextStyle={{
                              color:'#fff',
                              fontFamily:'Roboto-Regular',
                              fontSize: 13
                            }}
                          />
                        </View>
                      </View>
                  </View>
                  <View style={{paddingVertical:0}}>
                      <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:"#111",paddingVertical:8,paddingLeft:10}}>
                        <Text style={styles.newLabelText}>Voted</Text>
                        <View style={{flex:0.6}}>
                          <SwitchToggle
                            switchOn={this.state.voted}
                            onPress={()=>this.onVoteToggle()}
                            circleColorOn={colors.button}
                            circleColorOff={colors.primary}
                            buttonText={this.state.votedText}
                            containerStyle={{
                              width: 130,
                              height: 30,
                              borderRadius: 20,
                              backgroundColor: '#f0f',
                              borderWidth:1,
                              borderColor:'#ccc',
                              padding:2,
                            }}
                            circleStyle={{
                              width: 80,
                              height: 28,
                              borderRadius: 20,
                              justifyContent:'center',
                              alignItems:'center',
                            }}
                            buttonTextStyle={{
                              color:'#fff',
                              fontFamily:'Roboto-Regular',
                              fontSize: 13
                            }}
                          />
                        </View>
                      </View>
                  </View>
                  <View style={{paddingVertical:0}}>
                      <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:"#111",paddingVertical:8,paddingLeft:10}}>
                        <Text style={styles.newLabelText}>House No</Text>
                        <Text style={{flex:0.6}}>1</Text>
                      </View>
                  </View>
                  <View style={{paddingVertical:0}}>
                      <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:"#111",paddingVertical:8,paddingLeft:10}}>
                        <Text style={styles.newLabelText}>Card No </Text>
                        <Text style={{flex:0.6}}>XHSBD5454</Text>
                      </View>
                  </View>
                  <View style={{paddingVertical:0}}>
                      <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:"#111",paddingVertical:8,paddingLeft:10}}>
                        <Text style={styles.newLabelText}>CH Address </Text>
                        <Text style={{flex:0.6,textDecorationLine:'underline'}}>No New Address</Text>
                      </View>
                  </View>
                  <View style={{paddingVertical:0}}>
                      <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:"#111",paddingVertical:8,paddingLeft:10}}>
                        <Text style={styles.newLabelText}>Area Name</Text>
                        <Text style={{flex:0.6,textDecorationLine:'underline'}}>No Area</Text>
                      </View>
                  </View>
                  <View style={{paddingVertical:0}}>
                      <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:"#111",paddingVertical:8,paddingLeft:10}}>
                        <Text style={styles.newLabelText}>Other Info 1</Text>
                        <Text style={{flex:0.6,textDecorationLine:'underline'}}>No Other Information</Text>
                      </View>
                  </View>
                  <View style={{paddingVertical:0}}>
                      <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:"#111",paddingVertical:8,paddingLeft:10}}>
                        <Text style={styles.newLabelText}>Other Info 2</Text>
                        <Text style={{flex:0.6,textDecorationLine:'underline'}}>No Other Information </Text>
                      </View>
                  </View>
                  <View style={{paddingVertical:0}}>
                      <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:"#111",paddingVertical:8,paddingLeft:10}}>
                        <Text style={styles.newLabelText}>DOB</Text>
                        <Text style={{flex:0.6,textDecorationLine:'underline'}}>Set Birthdate</Text>
                      </View>
                  </View>
                  <View style={{paddingVertical:0}}>
                      <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:"#111",paddingVertical:8,paddingLeft:10}}>
                        <Text style={styles.newLabelText}>Email ID</Text>
                        <Text style={{flex:0.6,textDecorationLine:'underline'}}>No Email Id</Text>
                      </View>
                  </View>
                  <View style={{paddingVertical:0}}>
                      <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:"#111",paddingVertical:8,paddingLeft:10}}>
                        <Text style={styles.newLabelText}>Aadhar Card</Text>
                        <Text style={{flex:0.6,textDecorationLine:'underline'}}>No Aadhar Card</Text>
                      </View>
                  </View>
                  <View style={{paddingVertical:0}}>
                      <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:"#111",paddingVertical:8,paddingLeft:10}}>
                        <Text style={styles.newLabelText}>Color</Text>
                        <Text style={{flex:0.6,textDecorationLine:'underline'}}>Unknown</Text>
                      </View>
                  </View>
                  <View style={{paddingVertical:0}}>
                      <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:"#111",paddingVertical:8,paddingLeft:10}}>
                        <Text style={styles.newLabelText}>Caste</Text>
                        <Text style={{flex:0.6,textDecorationLine:'underline'}}>Not Allocated</Text>
                      </View>
                  </View>
                </React.Fragment>
            </ScrollView>
        </Drawer>
    );
  }
}