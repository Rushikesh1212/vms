import React, { Component } from "react";
import { StyleSheet,Text,View,TextInput,BackHandler,TouchableOpacity, ScrollView,Platform,Dimensions, Image,ImageBackground,Alert,AsyncStorage} from "react-native";
import { Header, Button, Icon,Card,Avatar} from "react-native-elements";
import { NavigationActions } from "react-navigation";
import ImageOverlay from "react-native-image-overlay";
import { TextField } from "react-native-material-textfield";

import SideMenu from 'react-native-side-menu';
import PropTypes from "prop-types";
import Drawer from 'react-native-drawer';
import {colors,sizes} from '../../config/styles.js';

import styles from "./styles.js";
import SwitchToggle from 'react-native-switch-toggle';
import DatePicker from 'react-native-datepicker';
// import MenuBar from '../Menu/Menu.js';
import HeaderDy from "../../layouts/HeaderDy/HeaderDy.js";
import axios from '../../config/axios.js'


 const window = Dimensions.get('window');
export default  class UserProfile extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: '',
      dob:"15-05-2018",
      // dead : false,
      // visited: false,
      // voted: false,
      votedText: 'No',
      visitText: 'No',
      deadText:'Alive',
      data:''
    };
  }
  componentWillMount(){
  }
  componentDidMount(){
    var user_id = this.props.navigation.getParam('user_id','No id')
    this.setState({voter_id:user_id})
    // console.log('user_id',user_id)
    axios.get('api/voters/get/one/'+user_id)
      .then(response=>{
        // console.log('response',response)
        this.setState({
          data              : response.data,
          mobileNumber      : response.data.mobileNumber,
          whatsAppNumber    : response.data.whatsAppNumber,
          dead              : response.data.dead,
          visited           : response.data.visited,
          voted             : response.data.voted,
          changeAddress     : response.data.changeAddress,
          areaName          : response.data.areaName,
          otherInfo         : response.data.otherInfo,
          color             : response.data.color,
          dob               : response.data.dob,
          emailId           : response.data.emailId,
          aadharCard        : response.data.aadharCard,
          cast              : response.data.cast,
          favourite         : response.data.favourite
        })
        this.onVisitToggle()
        this.onDeadToggle()
        this.onVoteToggle()
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
  onDeadToggle=()=>{
    let {dead} = this.state;
    if(dead){
      this.setState({deadText:'Dead'})
    }else{
      this.setState({deadText:'Alive'})
    }
    this.setState({dead:!this.state.dead});
  }
  onVisitToggle=()=>{
    let {visited} = this.state;
    if(visited){
      this.setState({visitText:'Yes'})
    }else{
      this.setState({visitText:'No'})
    }
    this.setState({visited:!this.state.visited});
  }
  onVoteToggle=()=>{
    let {voted} = this.state;
    if(voted){
      this.setState({votedText:'Yes'})
    }else{
      this.setState({votedText:'No'})
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
  updateColor(no){
    this.setState({color:no})
  }
  favouriteVoter(){
    if(this.state.favourite == null){
      this.setState({favourite:true})
    }else{
      this.setState({favourite:!this.state.favourite})
    }
  }
  updateVoter(){
    var userId = '5d790d5c70d8966274bbe3fa'
    var updateValues = {
      userId            : userId,
      voter_id          : this.state.voter_id,
      mobileNumber      : this.state.mobileNumber,
      whatsAppNumber    : this.state.whatsAppNumber,
      dead              : this.state.dead,
      visited           : this.state.visited,
      voted             : this.state.voted,
      changeAddress     : this.state.changeAddress,
      areaName          : this.state.areaName,
      otherInfo         : this.state.otherInfo,
      dob               : this.state.dob,
      emailId           : this.state.emailId,
      aadharCard        : this.state.aadharCard,
      color             : this.state.color,
      cast              : this.state.cast,
      favourite         : this.state.favourite,
    }
    console.log('updateValues',updateValues)
    axios.patch('api/voters/patch',updateValues)
      .then(response=>{
        // console.log('response',response)
        Alert.alert("Voter Updated")
      })
      .catch(error=>{
        console.log('error',error)
        Alert.alert('Something went wrong')
      })
  }
  
  render(){

    const { navigate, goBack, state } = this.props.navigation;

    const colorBall = [{No:1,color:'#5cb85c'},{No:2,color:'#337ab7'},{No:3,color:'#5bc0de'},{No:4,color:'#f0ad4e'},{No:5,color:'#d9534f'},]
    console.log('visited',this.state.visited)
    console.log('voted',this.state.voted)
    console.log('dead',this.state.dead)
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
                {
                  this.state.data ? 
                <React.Fragment>
                  <View style={{ flexDirection:'row'}}>
{/*                    <TouchableOpacity style={{ paddingTop:8}}>
                        <Icon name="account-edit" type="material-community" size={30}  color="#333" />
                    </TouchableOpacity>*/}
                    <TouchableOpacity style={styles.topIcons}>
                        <Icon name="whatsapp" type="font-awesome" size={30}  color={"#5cb85c"} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topIcons} onPress={this.favouriteVoter.bind(this)}>
                        <Icon name="star" type="font-awesome" size={30}  color={this.state.favourite == true ? "#FFA500" : "#aaa"} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topIcons} onPress={this.updateVoter.bind(this)}>
                        <Icon name="save" type="entypo" size={30}  color="#333" />
                    </TouchableOpacity>
                  </View>
                    <View style={{ flexDirection:'row'/*,backgroundColor:"#d3d"*/,paddingTop:8}}>

                        <View style={{flex:1,}}>
                          <View style={styles.newLabelRow}>
                            <Text style={styles.newLabelText}>Const No: </Text>
                            <Text style={{fontFamily:"Montserrat-Bold",paddingVertical:5}}>232</Text>
                          </View>
                          <View style={{flexDirection:'row',borderBottomWidth:1,paddingLeft:10,borderColor:"#111",paddingVertical:5}}>
                            <Text style={styles.newLabelText}>Booth</Text>
                            <Text style={{fontFamily:"Montserrat-Bold",paddingVertical:5}}>1</Text>
                          </View>
                          <View style={{flexDirection:'row',borderBottomWidth:1,paddingLeft:10,borderColor:"#111",paddingVertical:5}}>
                            <Text style={styles.newLabelText}>Sr. No.</Text>
                            <Text style={{fontFamily:"Montserrat-Bold",paddingVertical:5}}>1</Text>
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
                        <View style={styles.newLabelRow}>
                          <Text style={styles.newLabelText}>Name </Text>
                          <Text style={{flex:0.6,marginTop:10}}>{this.state.data.fullName}</Text>
                        </View>
                    </View>
                    <View style={{paddingVertical:0}}>
                        <View style={styles.newLabelRow}>
                          <Text  style={styles.newLabelText}>Address </Text>
                          <View style={{flex:0.6}}>
                            <TextInput
                            style={styles.editableInput}                           
                            onChangeText={(address) => this.setState({address})}
                            value={this.state.address}
                            />
                          </View>
                        </View>
                    </View>
                    <View style={{paddingVertical:0}}>
                        <View style={styles.newLabelRow}>
                          <Text style={styles.newLabelText}>Booth No </Text>
                          <Text style={{flex:0.6,marginTop:10}}> {this.state.data.partNo} </Text>
                        </View>
                    </View>
                    <View style={{paddingVertical:0}}>
                        <View style={styles.newLabelRow}>
                          <Text style={styles.newLabelText}>Sex-Age </Text>
                          <Text style={{flex:0.6,marginTop:10}}> {this.state.data.gender+'/'+this.state.data.age} </Text>
                        </View>
                    </View>
                    <View style={{paddingVertical:0}}>
                        <View style={styles.newLabelRow}>
                          <Text style={styles.newLabelText}>Mobile No</Text>
                          <View style={{flex:0.6}}>
                             <TextInput
                                style={styles.editableInput}                           
                                onChangeText={(mobileNumber) => this.setState({mobileNumber})}
                                value={this.state.mobileNumber}
                              />
                          </View>
                        </View>
                    </View>
                    <View style={{paddingVertical:0}}>
                        <View style={styles.newLabelRow}>
                          <Text style={styles.newLabelText}>WhatsApp No </Text>
                          <View style={{flex:0.6}}>
                            <TextInput
                              style={styles.editableInput}                           
                              onChangeText={(whatsAppNumber) => this.setState({whatsAppNumber})}
                              value={this.state.whatsAppNumber}
                            />
                          </View>
                        </View>
                    </View>
                    <View style={{paddingVertical:0}}>
                        <View style={styles.newLabelRow}>
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
                        <View style={styles.newLabelRow}>
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
                        <View style={styles.newLabelRow}>
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
                        <View style={styles.newLabelRow}>
                          <Text style={styles.newLabelText}>House No</Text>
                          <Text style={{flex:0.6}}>1</Text>
                        </View>
                    </View>
                    <View style={{paddingVertical:0}}>
                        <View style={styles.newLabelRow}>
                          <Text style={styles.newLabelText}>Card No </Text>
                          <Text style={{flex:0.6}}>{this.state.data.idNumber}</Text>
                        </View>
                    </View>
                    <View style={{paddingVertical:0}}>
                        <View style={styles.newLabelRow}>
                          <Text style={styles.newLabelText}>CH Address </Text>
                          <View style={{flex:0.6}}>
                          <TextInput
                            style={styles.editableInput}                           
                            onChangeText={(changeAddress) => this.setState({changeAddress})}
                            value={this.state.changeAddress}
                          />
                          </View>
                        </View>
                    </View>
                    <View style={{paddingVertical:0}}>
                        <View style={styles.newLabelRow}>
                          <Text style={styles.newLabelText}>Area Name</Text>
                          <View style={{flex:0.6}}>
                          <TextInput
                            style={styles.editableInput}                           
                            onChangeText={(areaName) => this.setState({areaName})}
                            value={this.state.areaName}
                          />
                          </View>
                        </View>
                    </View>
                    <View style={{paddingVertical:0}}>
                        <View style={styles.newLabelRow}>
                          <Text style={styles.newLabelText}>Other Info 1</Text>
                          <View style={{flex:0.6}}>
                          <TextInput
                            style={styles.editableInput}                           
                            onChangeText={(otherInfo) => this.setState({otherInfo})}
                            value={this.state.otherInfo}
                          />
                          </View>
                        </View>
                    </View>
                    <View style={{paddingVertical:0}}>
                        <View style={styles.newLabelRow}>
                          <Text style={styles.newLabelText}>Other Info 2</Text>
                          <Text style={{flex:0.6,textDecorationStyle:'underline'}}>No Other Information </Text>
                        </View>
                    </View>
                    <View style={{paddingVertical:0}}>
                        <View style={styles.newLabelRow}>
                          <Text style={styles.newLabelText}>DOB</Text>
                          <View style={{flex:0.6}}>
                            <DatePicker
                              style={{width: 180}}
                              date={this.state.dob} //initial date from state
                              mode="date" //The enum of date, datetime and time
                              placeholder="select date"
                              format="DD-MM-YYYY"
                              minDate="01-01-1947"
                              maxDate="01-01-2004"
                              confirmBtnText="Confirm"
                              cancelBtnText="Cancel"
                              customStyles={{
                                dateIcon: {
                                  position: 'absolute',
                                  left: 0,
                                  top: 4,
                                  marginLeft: 0
                                },
                                dateInput: {
                                  marginLeft: 36
                                }
                              }}
                              onDateChange={(dob) => {this.setState({dob: dob})}}
                            />
                          </View>
                        </View>
                    </View>
                    <View style={{paddingVertical:0}}>
                        <View style={styles.newLabelRow}>
                          <Text style={styles.newLabelText}>Email ID</Text>
                          <View style={{flex:0.6}}>
                          <TextInput
                            style={styles.editableInput}                           
                            onChangeText={(emailId) => this.setState({emailId})}
                            value={this.state.emailId}
                          />
                          </View>
                        </View>
                    </View>
                    <View style={{paddingVertical:0}}>
                        <View style={styles.newLabelRow}>
                          <Text style={styles.newLabelText}>Aadhar Card</Text>
                          <View style={{flex:0.6}}>
                          <TextInput
                            style={styles.editableInput}                           
                            onChangeText={(aadharCard) => this.setState({aadharCard})}
                            value={this.state.aadharCard}
                          />
                          </View>
                        </View>
                    </View>
                    <View style={{paddingVertical:0}}>
                        <View style={styles.newLabelRow}>
                          <Text style={styles.newLabelText}>Color</Text>
                          <View style={{flex:0.6,flexDirection:'row'}}>
                            {
                              colorBall.map((ball,index)=>{
                                return(
                                  <TouchableOpacity key={index} onPress={()=>this.updateColor(ball.No)} style={{height:30,width:30,borderRadius:15,backgroundColor:ball.color,marginLeft:5}}>
                                    {
                                      this.state.color == ball.No ? 
                                        <Icon name="check" type="entypo" size={25}  color="#333" />
                                      :
                                        null
                                    }
                                  </TouchableOpacity>
                                )
                              })
                            }
                            {/*<TouchableOpacity onPress{()=>this.updateColor(1)} style={styles.colorBall1}></TouchableOpacity>
                            <TouchableOpacity style={styles.colorBall2}></TouchableOpacity>
                            <TouchableOpacity style={styles.colorBall3}></TouchableOpacity>
                            <TouchableOpacity style={styles.colorBall4}></TouchableOpacity>
                            <TouchableOpacity style={styles.colorBall5}></TouchableOpacity>*/}
                          </View>
                        </View>
                    </View>
                    <View style={{paddingVertical:0}}>
                        <View style={styles.newLabelRow}>
                          <Text style={styles.newLabelText}>Caste</Text>
                          <View style={{flex:0.6}}>
                          <TextInput
                            style={styles.editableInput}                          
                            onChangeText={(cast) => this.setState({cast})}
                            value={this.state.cast}
                            placeholder={"Add caste"}
                          />
                          </View>
                        </View>
                    </View>
                </React.Fragment>
                  : null
                }
            </ScrollView>
        </Drawer>
    );
  }
}