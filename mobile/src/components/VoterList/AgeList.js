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
export default  class AgeList extends Component {

  constructor(props){
    super(props);
    this.state = {
      gaon: 'Select Gaon',
      data: '',
      ageCategory:'18-30',
      fromAge:'18',
      toAge:'30',
      boothData:[],
      gaonList:[]
    };
  }
  componentDidMount(){
    axios.get('api/voters/villagelist')
      .then(res=>{
        this.setState({gaonList:res.data})
        var village = {
          villageName:res.data[0]
        }
        axios.post('/api/voters/boothbyvillage',village)
          .then(res=>{
            this.setState({boothData:res.data})
          })
          .catch(err=>{
            console.log(err)
          })
      })
      .catch(err=>{
        console.log('err',err)
      })

      var ageCategory = {
        voterAgeFrom: '18',
        voterAgeTo: '100'
      }
      axios.post('api/search/voters/',ageCategory)
        .then(response=>{
          // console.log('response',response.data)
          this.setState({data:response.data})
        })
        .catch(error=>{
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
  gaonChange(gaonName){
    this.setState({gaonName:gaonName})
    var village = {
      villageName:gaonName
    }
    axios.post('/api/voters/boothbyvillage',village)
      .then(res=>{
        this.setState({boothData:res.data})
      })
  }
  boothChange(boothName){
    this.setState({boothName:boothName})
      var searchValue = {
        "featured"    :"",
        "mobileNumber":"",
        "voted"       :"",
        "visited"     :"",
        "dead"        :'',
        "aadharCard"  :"",
        "cast"        :"",
        "areaName"    :"",
        "boothName"   :boothName,
        "idNumber"    :"",
        "voterAgeFrom": this.state.fromAge,
        "voterAgeTo"  : this.state.toAge,
        "voterName"   :""
      }
    axios.post('/api/search/voters/',searchValue)
      .then(response=>{
        // console.log('response. for search',response)
        this.setState({data:response.data})
      })
      .catch(error=>{
        console.log('error',error)
      })
  }
  
  ageList(){
    if(this.state.toAge < 18 || this.state.fromAge < 18){
      Alert.alert("","Please enter age greater than 18 years")
    }else if(this.state.fromAge > this.state.toAge){
      Alert.alert("","From Age cannot be greater than To Age")
    }else{
      var search={
        "featured"    :"",
        "mobileNumber":"",
        "voted"       :"",
        "visited"     :"",
        "dead"        :'',
        "aadharCard"  :"",
        "cast"        :"",
        "areaName"    :"",
        "boothName"   :this.state.boothName,
        "idNumber"    :"",
        "voterAgeFrom": this.state.fromAge,
        "voterAgeTo"  : this.state.toAge
      }
      axios.post('api/search/voters',search)
        .then(res=>{
          // console.log('res',res.data)
          this.setState({data:res.data})
        })
        .catch(err=>{
          console.log('err',err)
        })
    }
  }
  render(){

    const { navigate, goBack, state } = this.props.navigation;
    // console.log('subscriptionList in render',this.state.data)
    // const menu = <MenuBar navigate={navigate} />;
   
    // var navigationView = <NotificationCommon closeDrawer={this.closeDrawer} notificationData={[]} navigation={this.props.navigation}/>

    return(
        <Drawer
            ref={(ref) => this._drawer = ref}
            // openDrawerOffset={(viewport) => viewport.width-}
            side="left"
            >
            
            <ScrollView  keyboardShouldPersistTaps="handled" >
               <View style={{ flexDirection:'row',backgroundColor:'#337ab7',paddingHorizontal:10,paddingVertical:10,justifyContent:'space-between',borderColor:'#337ab7'}}>
                  <View style={{flex:0.3,paddingTop:15}}>
                    <Text style={{color:"#f1f1f1"}}>Pin Code</Text>
                  </View>
                  <View style={{flex:0.7,paddingTop:5, width: '100%', backgroundColor:"transparent",borderBottomWidth:1, borderColor:"#000"}}>
                    <Picker
                      selectedValue={this.state.gaonName}
                      style={{height: 25,fontFamily:"Montserrat-Regular"}}
                      onValueChange={(itemValue, itemIndex) =>
                        this.gaonChange(itemValue)
                      }
                      >
                        {
                          this.state.gaonList.length > 0 ?
                            this.state.gaonList.map(gaon=>{
                              return <Picker.Item label={gaon} value={gaon} />
                            })
                          : null
                        }
                    </Picker>
            </View>
                </View>
                <View style={{ flexDirection:'row',backgroundColor:'#337ab7',paddingHorizontal:10,paddingVertical:10,justifyContent:'space-between',borderColor:'#337ab7'}}>
                <View style={{flex:0.3,paddingTop:15}}>
                  <Text style={{color:"#f1f1f1"}}>Booth Name</Text>
                </View>
                <View style={{flex:0.7,paddingTop:5, width: '100%', backgroundColor:"transparent",borderBottomWidth:1, borderColor:"#000"}}>
                        <Picker
                          selectedValue={this.state.boothName}
                          style={{height: 25}}
                          onValueChange={(itemValue, itemIndex) =>
                            this.boothChange(itemValue)
                          }
                          >
                            {
                              this.state.boothData.length > 0 ?
                                this.state.boothData.map(booth=>{
                                  return <Picker.Item label={booth._id} value={booth._id} />
                                })
                              : null
                            }
                        </Picker>
                </View>
              </View>
              <View style={{ backgroundColor:'#337ab7',paddingHorizontal:10,paddingVertical:10,justifyContent:'space-between',borderColor:'#337ab7',borderBottomWidth:2,shadowOffset:{  width: 10,  height: 10,  },shadowColor: '#337ab7',shadowOpacity: 1.0,}}>
                <View style={{paddingTop:5}}>
                  <Text style={{color:"#f1f1f1",fontFamily:"Montserrat-SemiBold"}}>Select Age Category</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                  <View style={{flex:0.5,flexDirection:'row',height: 30,marginTop:20,paddingBottom:0, width: '100%', backgroundColor:"transparent"}}>
                      <Text style={{flex:0.3,fontFamily:"Montserrat-SemiBold", color:"#f1f1f1",marginTop:5}}>From</Text>   
                      <View style={{flex:0.4,height:60}}>
                       <TextInput
                            style={{borderColor: this.state.borderColor,borderBottomWidth: 2,padding:0}}
                            placeholder="Age"
                            keyboardType='numeric'
                            onChangeText = {(fromAge)=>this.setState({fromAge})}
                            value={this.state.fromAge}
                            onBlur={ () => this.setState({borderColor:'#666'}) }
                            onFocus={ () => this.setState({borderColor:'#000'}) }
                          /> 
                      </View>
                  </View>
                  <View style={{flex:0.4,flexDirection:'row',height: 30,marginTop:20,paddingBottom:10, width: '100%', backgroundColor:"transparent"}}>
                      <Text style={{flex:0.2,fontFamily:"Montserrat-SemiBold", color:"#f1f1f1",marginTop:4}}>To</Text>   
                      <View style={{flex:0.4,height:60}}>
                       <TextInput
                            style={{borderColor: this.state.borderColor,borderBottomWidth: 2,padding:0}}
                            placeholder="Age"
                            keyboardType='numeric'
                            onChangeText = {(toAge)=>this.setState({toAge})}
                            value={this.state.toAge}
                            onBlur={ () => this.setState({borderColor:'#666'}) }
                            onFocus={ () => this.setState({borderColor:'#000'}) }
                          /> 
                      </View>
                  </View>
                  <TouchableOpacity onPress={this.ageList.bind(this)} style={{flex:0.1,marginTop:20}}><Icon name="search" type="font-awesome" size={20}  color="#f1f1f1" style={{}}/></TouchableOpacity>
                </View>
              </View>

              <View style={{paddingVertical:5, backgroundColor:"#eee",paddingHorizontal:5}}>
                {
                  this.state.data ? 
                    this.state.data.length > 0 ?
                      this.state.data.map((voter,index)=>{
                        return(
                          <TouchableOpacity onPress={()=> this.props.navigation.navigate('VoterProfile',{user_id:voter._id})} key={index} style={{paddingVertical:10,marginBottom:10,paddingHorizontal:5,backgroundColor:"#fff",borderWidth:1,borderColor:"999",borderRadius:5}}>
                            <View style={{flexDirection:'row'}}>
                              <Text style={{fontSize:18, color:"#111",flex:0.1}}>{index+1}</Text>
                              <Text style={{fontSize:18, color:"#111",flex:0.6}}>{voter.fullName}</Text>
                              <Text style={{fontSize:18, color:"#111",flex:0.2}}>{voter.gender}-{voter.age}</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                              <Text style={{color:"#111",flex:0.15}}>Booth: </Text>
                              <Text style={{color:"#111",flex:0.8,textDecorationStyle:"underline"}}>{voter.boothName}</Text>
                            </View>
                            <View style={{flexDirection:'row'}}><Icon name="phone" style={{marginTop:5}} type="font-awesome" size={15}  color="#333" /><Text style={{color:"#111",marginLeft:5}}>{voter.mobileNumber == "" ? "No phone number": voter.mobileNumber}</Text></View>             
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


 