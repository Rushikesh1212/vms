import React, { Component } from "react";
import { StyleSheet,Text,View,TextInput,BackHandler,TouchableOpacity,TouchableHighlight, ScrollView,Platform,Dimensions, Image,ImageBackground,Alert,AsyncStorage,Linking,Picker} from "react-native";
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
export default  class VoterProfile extends Component {

  constructor(props){
    super(props);
    this.getUserId();
    this.state = {
      user: '',
      dob:"15-05-2018",
      votedText: 'No',
      visitText: 'Yes',
      deadText:'Alive',
      data:'',
      cast:"मराठा (Maratha)"
    };
  }
  componentWillMount(){
  }
  getUserId=async()=>{
    var token ;
    const user_id = await AsyncStorage.getItem('user_id');
    console.log('user_id',user_id)
    this.setState({user_id:user_id})

  }
  componentDidMount(){
    axios.get('api/lastdayvoting/get/lastdayvoting')
      .then(res=>{
        this.setState({lastDay:res.data[0].lastdayvoting})
      })
      .catch(error=>{
        console.log('error',error)
      })


    var voter_id = this.props.navigation.getParam('user_id','No id')
    this.setState({voter_id:voter_id})
    axios.get('api/voters/get/one/'+voter_id)
      .then(response=>{
        // console.log('response of vvoter profile',response.data)
        this.setState({
          data              : response.data,
          fullName          : response.data.fullName,
          mFullName         : response.data.mFullName,
          mPartName         : response.data.mPartName,
          constituencyName  : response.data.constituencyName,
          mConstituencyName : response.data.mConstituencyName,
          villageName       : response.data.villageName,
          mVillageName      : response.data.mVillageName,
          boothName         : response.data.boothName,
          mBoothName        : response.data.mBoothName,
          idNumber          : response.data.idNumber,
          mobileNumber      : response.data.mobileNumber,
          whatsAppNumber    : response.data.whatsAppNumber,
          dead              : response.data.dead,
          visited           : true,
          voted             : response.data.voted,
          changeAddress     : response.data.changeAddress,
          areaName          : response.data.areaName,
          otherInfo         : response.data.otherInfo,
          color             : response.data.color,
          dob               : response.data.dob,
          emailId           : response.data.emailId,
          aadharCard        : response.data.aadharCard,
          cast              : response.data.cast == "" ? "मराठा (Maratha)" : response.data.cast,
          featured          : response.data.featured
        })
        this.checkToggle()
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
  checkToggle(){
    let {dead,voted,visited} = this.state;
    console.log('visited',visited)
    if(voted){
      this.setState({votedText:'Yes'})
    }else{
      this.setState({votedText:'No'})
    }

    if(visited){
      this.setState({visitText:'Yes'})
    }else{
      this.setState({visitText:'No'})
    }

    if(dead){
      this.setState({deadText:'Dead'})
    }else{
      this.setState({deadText:'Alive'})
    }    
  }
  onDeadToggle=()=>{
    this.setState({dead:!this.state.dead});
    var check = !this.state.dead
    // let {dead} = this.state;
    // console.log('check',check)
    if(check){
      this.setState({deadText:'Dead'})
    }else{
      this.setState({deadText:'Alive'})
    }
  }
  onVisitToggle=()=>{
    this.setState({visited:!this.state.visited});
    var check = !this.state.visited
    // let {visited} = this.state;
    if(check){
      this.setState({visitText:'Yes'})
    }else{
      this.setState({visitText:'No'})
    }
  }
  onVoteToggle=()=>{
    if(this.state.lastDay){    
      this.setState({voted:!this.state.voted});
      var check = !this.state.visited
      if(check){
        this.setState({votedText:'Yes'})
      }else{
        this.setState({votedText:'No'})
      }
    }else{
      Alert.alert("","This option will be activated on voting day")
    }
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
  featuredVoter(){
      var featured
      this.setState({featured:!this.state.featured})
      featured = {
        voterId : this.state.voter_id,
        userId  : this.state.user_id,
        featured: !this.state.featured
    }
    // console.log('featured',featured)
    axios.post('/api/voters/updateFeatured',featured)
      .then(res=>{
        // console.log('res',res)
        if(this.state.featured == true){
          Alert.alert("","Voter Featured")
        }else{
          Alert.alert("","Voter removed from Featured")
        }
      })
      .catch(err=>{
        console.log('err',err)
      })
  }
  updateVoter(){
    var updateValues = {
      userId            : this.state.user_id,
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
      featured          : this.state.featured,
    }
    // console.log('updateValues.dead',updateValues.dead)
    // console.log('updateValues.voted',updateValues.voted)
    // console.log('updateValues.visited',updateValues.visited)
    if(updateValues.mobileNumber == "" || updateValues.areaName == "" || updateValues.dob == "" || updateValues.cast == "" ){
      Alert.alert("","Please enter all Mandatory fields")
    }else{
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
  }
  sendSms(){
    var voterId = {
      voterId:this.state.voter_id
    }
    if(this.state.mobileNumber == ''){
      Alert.alert("","Please enter Mobile Number")
    }else{
      axios.post('/api/voters/sendmsg/',voterId)
        .then(res=>{
          Alert.alert("","SMS send to Voter")
        })
        .catch(err=>{
          console.log('err',err)
        })
    }
  }
  family(){
    this.props.navigation.navigate('FamilyList',{voter_id:this.state.voter_id})
  }
  sendWhatspp(){
    // console.log('sendWhatspp',this.state.whatsAppNumber)
    if(this.state.whatsAppNumber == ''){
      Alert.alert("","Please enter Whatsapp Number")
    }else{
      var message = "मतदाराचे नाव :"+this.state.mFullName+"\n"+"ओळख पत्र क्रमांक :"+"\n"+this.state.idNumber+"\n"+"बुथचे नाव :"+this.state.boothName+"\n"+"बुथचा पत्ता :" +this.state.mPartName+"\n"+
                    "मतदानाची तारीख :21 ऑक्टोबर"+"\n"+"नमस्कार,"+"\n"+"आपल्या *माढा विधानसभा* मतदारसंघाचा लोकप्रतिनिधी म्हणून आपल्या विश्वासाला पात्र ठरण्याचा मी प्रामाणिक प्रयत्न केला आहे. यावर्षी मी राष्ट्रवादी काँग्रेस पक्षाकडून निवडणूक लढवत असून मला पुन्हा एकदा आपली साथ हवी आहे. येत्या *21 ऑक्टोबर* रोजी आपण सर्वांनी मतदान यंत्रावरील *बबनराव विठ्ठलरावजी शिंदे* या नावासमोरील *घड्याळ* चिन्हाचे बटन दाबून आपली सेवा करण्याची संधी द्यावी ही विनंती."+"\n"+"धन्यवाद,"+"\n"+"*बबनराव विठ्ठलरावजी शिंदे*"
      Linking.openURL('whatsapp://send?text='+message+'&phone=91' + this.state.whatsAppNumber)
    }
  }
  casteChange(cast){
    this.setState({cast:cast})
  }
  render(){

    const { navigate, goBack, state } = this.props.navigation;

    const colorBall = [{No:1,color:'#5cb85c'},{No:2,color:'#337ab7'},{No:3,color:'#5bc0de'},{No:4,color:'#f0ad4e'},{No:5,color:'#d9534f'},]
    // const menu = <MenuBar navigate={navigate} />;
   
    // var navigationView = <NotificationCommon closeDrawer={this.closeDrawer} notificationData={[]} navigation={this.props.navigation}/>

    return(
        <Drawer
            ref={(ref) => this._drawer = ref}
            // openDrawerOffset={(viewport) => viewport.width-}
            side="left"
            >
            <View style={{flex:1}}>
              <ScrollView  keyboardShouldPersistTaps="handled" >
                  {
                    this.state.data ? 
                  <React.Fragment>
                    <View style={{ flexDirection:'row',backgroundColor:'#eee',padding:5}}>
                      <TouchableOpacity style={styles.topIcons} onPress={this.sendWhatspp.bind(this)}>
                          <Icon name="whatsapp" type="font-awesome" size={30}  color={"#5cb85c"} />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.topIcons} onPress={this.featuredVoter.bind(this)}>
                          <Icon name="star" type="font-awesome" size={30}  color={this.state.featured == true ? "#FFA500" : "#aaa"} />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.topIcons} onPress={this.family.bind(this)}>
                          <Icon name="users" type="font-awesome" size={25}  color="#0275D8" />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.topIcons} onPress={this.sendSms.bind(this)}>
                          <Icon name="message" type="entypo" size={30}  color="#DC7500" />
                      </TouchableOpacity>
                    </View>
                      <View style={{ flexDirection:'row',/*backgroundColor:"#d3d",*/paddingTop:0}}>

                          <View style={{flex:0.8/*,backgroundColor:'yellow'*/,borderBottomWidth:1,borderColor:"#111"}}>
                            <View style={styles.newLabelRow}>
                              <Text style={styles.newLabelText}>Const</Text>
                              <Text style={{fontFamily:"Montserrat-Bold",paddingTop:10,fontSize:12}}>{this.state.data.mConstituencyName}</Text>
                            </View>
                            <View style={{flexDirection:'row',paddingLeft:10}}>
                              <Text style={{fontFamily: "Montserrat-Bold",flex:0.2,color:"#111",marginTop:15}}>Booth</Text>
                              <Text style={{fontFamily:"Montserrat-Bold",paddingVertical:5,flex:0.8,fontSize:12}}>{this.state.data.mBoothName}</Text>
                            </View>
                          </View>
                          <View style={{flex:0.2,/*backgroundColor:"red",*/alignSelf:'flex-end',borderWidth:1,borderColor:"#111",padding:8}}>             
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
                            <Text style={{flex:0.6,marginTop:10,fontFamily:"Montserrat-SemiBold"}}>{this.state.data.mFullName}</Text>
                          </View>
                      </View>
                      <View style={{paddingVertical:0}}>
                          <View style={styles.newLabelRow}>
                            <Text  style={styles.newLabelText}>Village</Text>
                            <Text style={{flex:0.6,marginTop:10,fontFamily:"Montserrat-SemiBold"}}>{this.state.data.mVillageName}</Text>
                          </View>
                      </View>
                      <View style={{paddingVertical:0}}>
                          <View style={styles.newLabelRow}>
                            <Text style={styles.newLabelText}>Part No </Text>
                            <Text style={{flex:0.6,marginTop:10,fontFamily:"Montserrat-SemiBold"}}> {this.state.data.partNo} </Text>
                          </View>
                      </View>
                      <View style={{paddingVertical:0}}>
                          <View style={styles.newLabelRow}>
                            <Text style={styles.newLabelText}>Sex-Age </Text>
                            <Text style={{flex:0.6,marginTop:10,fontFamily:"Montserrat-SemiBold"}}> {this.state.data.gender+'-'+this.state.data.age} </Text>
                          </View>
                      </View>
                      <View style={{paddingVertical:0}}>
                          <View style={styles.newLabelRow}>
                            <Text style={styles.newLabelText}>Mobile No <Text style={{color:'red'}}>*</Text></Text>
                            <View style={{flex:0.6}}>
                               <TextInput
                                  style={styles.editableInput}
                                  keyboardType='numeric'                           
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
                                keyboardType='numeric'                           
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
                                  fontFamily:"Montserrat-SemiBold",
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
                                  fontFamily:"Montserrat-SemiBold",
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
                                  fontFamily:"Montserrat-SemiBold",
                                  fontSize: 13
                                }}
                              />
                            </View>
                          </View>
                      </View>
                      <View style={{paddingVertical:0}}>
                          <View style={styles.newLabelRow}>
                            <Text style={styles.newLabelText}>Card No </Text>
                            <Text style={{flex:0.6,fontFamily:"Montserrat-SemiBold"}}>{this.state.data.idNumber}</Text>
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
                            <Text style={styles.newLabelText}>Area Name <Text style={{color:'red'}}>*</Text></Text>
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
                            <Text style={styles.newLabelText}>Other Info </Text>
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
                            <Text style={styles.newLabelText}>DOB <Text style={{color:'red'}}>*</Text></Text>
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
                              keyboardType='numeric'
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
                            </View>
                          </View>
                      </View>
                      <View style={{paddingVertical:0}}>
                          <View style={styles.newLabelRow}>
                            <Text style={styles.newLabelText}>Caste<Text style={{color:'red'}}>*</Text></Text>
                            <View style={{flex:0.6}}>
                            <Picker
                              selectedValue={this.state.cast}
                              style={{height: 25,fontFamily:"Montserrat-Regular"}}
                              onValueChange={(itemValue, itemIndex) =>
                                this.casteChange(itemValue)
                              }
                              >
                                <Picker.Item label={"मराठा (Maratha)"} value={"मराठा (Maratha)"} />
                                <Picker.Item label={"ब्राम्हण (Bramhin)"} value={"ब्राम्हण (Bramhin)"} />
                                <Picker.Item label={"माळी (Mali)"} value={"माळी (Mali)"} />
                                <Picker.Item label={"कुंभार (Kumbhar)"} value={"कुंभार (Kumbhar)"} />
                                <Picker.Item label={"लोहार (Lohar)"} value={"लोहार (Lohar)"} />
                                <Picker.Item label={"धनगर (Dhangar)"} value={"धनगर (Dhangar)"} />
                                <Picker.Item label={"नवं-बौद्ध (Nav-Baudha)"} value={"नवं-बौद्ध (Nav-Baudha)"} />
                                <Picker.Item label={"चांभार (Chambhar)"} value={"चांभार (Chambhar)"} />
                                <Picker.Item label={"मातंग (Matang)"} value={"मातंग (Matang)"} />
                                <Picker.Item label={"वडार (Wadar)"} value={"वडार (Wadar)"} />
                                <Picker.Item label={"कोष्टी व कोळी (Koshti & Koli)"} value={"कोष्टी व कोळी (Koshti & Koli)"} />
                                <Picker.Item label={"पारधी व डवरी (Paradhi & Dawari)"} value={"पारधी व डवरी (Paradhi & Dawari)"} />
                                <Picker.Item label={"मुस्लिम (Muslim)"} value={"मुस्लिम (Muslim)"} />
                                <Picker.Item label={"जैन (Jain)"} value={"जैन (Jain)"} />
                                <Picker.Item label={"गुजर - मारवाडी (Marwadi)"} value={"गुजर - मारवाडी (Marwadi)"} />
                                <Picker.Item label={"लिंगायत (Lingayat)"} value={"लिंगायत (Lingayat)"} />
                                <Picker.Item label={"इतर (Other)"} value={"इतर (Other)"} />
                            </Picker>
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
              <TouchableHighlight style={styles.footer} onPress={this.updateVoter.bind(this)}>
                <View><Icon name="save" type="entypo" size={25}  color="#fff" /><Text style={styles.footerText}>SAVE</Text></View>
              </TouchableHighlight>
            </View>
        </Drawer>
    );
  }
}