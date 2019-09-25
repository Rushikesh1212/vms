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
export default  class AllVoterList extends Component {

  constructor(props){
    super(props);
    this.getUserId();
    this.state = {
      gaon: 'Select Gaon',
      data: '',
      searchCategory:'Name',
      boothData:[],
      gaonList:[]
    };
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
    axios.get('api/voters/villagelist')
      .then(res=>{
        this.setState({gaonList:res.data})
        var village = {
          villageName:res.data[0]
        }
        axios.post('/api/voters/boothbyvillage',village)
          .then(res=>{
            this.setState({boothData:res.data,boothName:res.data[0]._id})
            var searchCategory = {
              "featured"    :"",
              "mobileNumber":"",
              "voted"       :"",
              "visited"     :"",
              "dead"        :'',
              "aadharCard"  :"",
              "cast"        :"",
              "areaName"    :"",
              "boothName"   :res.data[0]._id,
              "idNumber"    :"",
              "voterAgeFrom":"",
              "voterName"   :""
            }
            axios.post('/api/search/voters/',searchCategory)
              .then(response=>{
                // console.log('response. for search',response)
                this.setState({data:response.data})
              })
              .catch(error=>{
                // console.log('error',error)
              })
          })
          .catch(err=>{
            console.log(err)
          })
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
        "voterAgeFrom":"",
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
  handleSearch = voterName => {
    this.setState({ voterName });
    var searchValue = {
        "featured"    :"",
        "mobileNumber":"",
        "voted"       :"",
        "visited"     :"",
        "dead"        :'',
        "aadharCard"  :this.state.searchCategory == 'Aadhar Card' ? voterName : "",
        "cast"        :"",
        "areaName"    :"",
        "boothName"   :this.state.boothName,
        "idNumber"    :this.state.searchCategory == 'Card No' ? voterName : "",
        "voterAgeFrom":"",
        "voterName"   :this.state.searchCategory == 'Name' ? voterName : ""
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
  votedUser(id){
    console.log('id',id)
    var body ={
      userId    :this.state.user_id,
      voter_id  :id,
      voted     : true
    }
    axios.post('api/voters/updatevoting',body)
      .then(res=>{
        console.log(res)
        var searchValue = {
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
        "voterAgeFrom":"",
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
      })
      .catch(error=>{
        console.log('error',error)
      })
  }
  render(){

    const { navigate, goBack, state } = this.props.navigation;

    return(
        <Drawer
            ref={(ref) => this._drawer = ref}
            // openDrawerOffset={(viewport) => viewport.width-}
            side="left"
            >
            
            <ScrollView  keyboardShouldPersistTaps="handled" >
              {
                  this.state.gaonList.length > 0 ?
                    <View style={{ flexDirection:'row',backgroundColor:'#337ab7',paddingHorizontal:10,paddingVertical:10,justifyContent:'space-between',borderColor:'#337ab7'}}>
                      <View style={{flex:0.3,paddingTop:15}}>
                        <Text style={{color:"#f1f1f1",fontFamily:"Montserrat-Regular"}}>Select Gaon</Text>
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
                                    this.state.gaonList.map(gaon=>{
                                      return <Picker.Item label={gaon} value={gaon} />
                                    })
                                  }
                              </Picker>
                      </View>
                    </View>
               : null
              }
              <View style={{ flexDirection:'row',backgroundColor:'#337ab7',paddingHorizontal:10,paddingVertical:10,justifyContent:'space-between'}}>
                <View style={{flex:0.3,paddingTop:15}}>
                  <Text style={{color:"#f1f1f1",fontFamily:"Montserrat-Regular"}}>Booth Name</Text>
                </View>
                <View style={{flex:0.7,paddingTop:5, width: '100%', backgroundColor:"transparent",borderBottomWidth:1, borderColor:"#000"}}>
                  { 
                      this.state.boothData.length > 0 ?
                          <Picker
                            selectedValue={this.state.boothName}
                            style={{height: 25,fontFamily:"Montserrat-Regular"}}
                            onValueChange={(itemValue, itemIndex) =>
                              this.boothChange(itemValue)
                            }
                            >
                              {
                                this.state.boothData.map(booth=>{
                                  return <Picker.Item label={booth._id} value={booth._id} />
                                })
                              }
                          </Picker>
                        : null
                  }
                </View>
              </View>
                <View style={{ flexDirection:'row',backgroundColor:'#337ab7',paddingHorizontal:10,paddingVertical:10,justifyContent:'space-between',borderColor:'#337ab7',borderBottomWidth:2,shadowOffset:{  width: 10,  height: 10,  },shadowColor: '#337ab7',shadowOpacity: 1.0,}}>
                  <View style={{flex:0.3,paddingTop:5}}>
                    <Text style={{color:"#f1f1f1",fontFamily:"Montserrat-Regular"}}>Search By</Text>
                  </View>
                  <View style={{flex:0.7,height: 25,paddingBottom:10, width: '100%', backgroundColor:"transparent",borderBottomWidth:1, borderColor:"#000"}}>
                          <Picker
                            selectedValue={this.state.searchCategory}
                            style={{height: 25}}
                            onValueChange={(itemValue, itemIndex) =>
                              this.setState({searchCategory: itemValue})
                            }
                            >
                            <Picker.Item label="Name" value="Name" />
                            <Picker.Item label="Aadhar Card" value="Aadhar Card" />
                            <Picker.Item label="Card No" value="Card No" />
                          </Picker>
                  </View>
                </View>
                  <View style={{flexDirection:'row',paddingRight:10,paddingLeft:5,paddingBottom:8}}>
                    <View style={{flex:0.8}}>
                            <TextInput
                            style={{height: 40,fontFamily:"Montserrat-Regular",paddingLeft:5,borderColor: this.state.cardBorderColor,borderBottomWidth: 2}}
                            placeholder={this.state.searchCategory}
                            onChangeText={this.handleSearch}
                            value={this.state.searchText}
                            onBlur={ () => this.setState({cardBorderColor:'#666'}) }
                            onFocus={ () => this.setState({cardBorderColor:'#337ab7'}) }
                          />
                    </View>
                  </View>
              <View style={{paddingVertical:5, backgroundColor:"#eee",paddingHorizontal:5}}>
                {
                  this.state.data ? 
                    this.state.data.length > 0 ?
                      this.state.data.map((voter,index)=>{
                        return(
                          <TouchableOpacity onPress={()=> this.props.navigation.navigate('VoterProfile',{user_id:voter._id})} key={index} style={{marginBottom:10,paddingVertical:10,paddingHorizontal:5,backgroundColor:"#fff",borderWidth:1,borderColor:"999",borderRadius:5}}>
                            <View style={{flexDirection:'row'}}>
                              <Text style={{fontSize:18, color:"#111",flex:0.1,fontFamily:"Montserrat-Regular"}}>{index+1}</Text>
                              <Text style={{fontSize:18, color:"#111",flex:0.8,fontFamily:"Montserrat-Regular"}}>{voter.fullName}</Text>
                              {
                                this.state.lastDay ?
                                  <TouchableOpacity onPress={()=>{this.votedUser(voter._id)}}><Icon name="hand-o-up" style={{marginTop:5,flex:0.2}} type="font-awesome" size={30}  color={voter.voted ? "#FFA500" : "#999"}/></TouchableOpacity>
                                :
                                  <TouchableOpacity onPress={()=>{Alert.alert("","Option will be activated on Voting Day")}}><Icon name="hand-o-up" style={{marginTop:5,flex:0.2}} type="font-awesome" size={30}  color={"#999"}/></TouchableOpacity>                              
                              }
                            </View>
                            <View style={{flexDirection:'row'}}>
                              <Text style={{color:"#111",flex:0.15,fontFamily:"Montserrat-Regular"}}>Booth: </Text>
                              <Text style={{color:"#111",flex:0.8,textDecorationStyle:"underline",fontFamily:"Montserrat-Regular"}}>{voter.boothName}</Text>
                            </View>
                            <View style={{flexDirection:'row',marginTop:10,justifyContent:"flex-end"}}><Text style={{color:"#111",marginLeft:10,alignSelf:"flex-end",fontFamily:"Montserrat-Regular"}}>{voter.voted == true ? "Voted": "Not Voted"}</Text></View>             
                          </TouchableOpacity>
                        )
                      })
                    : <Text style={{fontFamily:"Montserrat-Regular"}}>No Voter Found</Text>
                  : <Loading />
                }
              </View>
            </ScrollView>
        </Drawer>
    );
  }
}


 