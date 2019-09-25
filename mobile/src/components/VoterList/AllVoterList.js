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
    this.state = {
      gaon: 'Select Gaon',
      data: '',
      searchCategory:'Name',
      boothData:[],
      gaonList:[]
    };
  }
  componentDidMount(){
    axios.get('api/voters/villagelist')
      .then(res=>{
        this.setState({gaonList:res.data})
      })
      .catch(err=>{
        console.log('err',err)
      })
    var village = {
      villageName:"Aadhegaon"
    }
    axios.post('/api/voters/boothbyvillage',village)
      .then(res=>{
        this.setState({boothData:res.data})
      })
      .catch(err=>{
        console.log(err)
      })
    var category  = this.props.navigation.getParam('category','')
    var boothName = this.props.navigation.getParam('boothName','')
    var surname   = this.props.navigation.getParam('surname','')
    var color     = this.props.navigation.getParam('color')
    if(category==''){
      axios.get('api/voters/get')
        .then(response=>{
          // console.log(response.data.length)
          this.setState({data:response.data})
        })
        .catch(error=>{
          console.log(error)
        })
    }else if(category == 'boothName'){
        var booth={
          boothName:boothName
        }
        axios.post('/api/voters/boothVoters',booth)
          .then(res=>{
            // console.log('res',res)
            this.setState({data:res.data})
          })
          .catch(err=>{
            console.log('err',err)
          })
    }else if(category == 'duplicate'){
        axios.get('/api/voters/duplicateVoters')
          .then(res=>{
            console.log('res',res)
          })
          .catch(err=>{
            console.log('err',err)
          })
    }else if(category == 'surname'){
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
        "voterName"   :surname
      }
      console.log(searchValue)
      axios.post('/api/search/voters/',searchValue)
        .then(response=>{
          console.log('response. for search surname',response)
          this.setState({data:response.data})
        })
        .catch(error=>{
          console.log('error',error)
        })
    }else if(category == 'color'){
        var searchValue = {
        "featured"    :"",
        "mobileNumber":"",
        "voted"       :"",
        "visited"     :"",
        "dead"        :'',
        "aadharCard"  :"",
        "color"       :color,
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
    }else{
      var searchCategory
      if(category=='visited'){
        searchCategory={
          visited:true
        }
      }else if(category == 'dead'){
        searchCategory={
          dead:true
        }  
      }else if(category == 'favourite'){
        searchCategory={
          featured:true
        }
      }
      axios.post('/api/search/voters/',searchCategory)
        .then(response=>{
          // console.log('response. for search',response)
          this.setState({data:response.data})
        })
        .catch(error=>{
          // console.log('error',error)
        })
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
    var category = this.props.navigation.getParam('category','')
    var color     = this.props.navigation.getParam('color')
    var searchValue;
    if(category == 'favourite'){
      searchValue = {
        "featured"    :true,
        "mobileNumber":"",
        "voted"       :"",
        "visited"     :"",
        "dead"        :"",
        "aadharCard"  :"",
        "cast"        :"",
        "areaName"    :"",
        "boothName"   :boothName,
        "idNumber"    :"",
        "voterAgeFrom":"",
        "voterName"   :""
      }
    }else if(category == 'dead'){
      searchValue = {
        "featured"    :"",
        "mobileNumber":"",
        "voted"       :"",
        "visited"     :"",
        "dead"        :true,
        "aadharCard"  :"",
        "cast"        :"",
        "areaName"    :"",
        "boothName"   :boothName,
        "idNumber"    :"",
        "voterAgeFrom":"",
        "voterName"   :""
      }
    }else if(category == 'visited'){
      searchValue = {
        "featured"    :"",
        "mobileNumber":"",
        "voted"       :"",
        "visited"     :true,
        "dead"        :'',
        "aadharCard"  :"",
        "cast"        :"",
        "areaName"    :"",
        "boothName"   :boothName,
        "idNumber"    :"",
        "voterAgeFrom":"",
        "voterName"   :""
      }
    }else if(category == ""){
      searchValue = {
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
    }else if(category == 'color'){
      var boothNameColor = this.props.navigation.getParam('boothName','')
      var color     = this.props.navigation.getParam('color','')
      searchValue = {
        "color"       :color,
        "featured"    :"",
        "mobileNumber":"",
        "voted"       :"",
        "visited"     :"",
        "dead"        :'',
        "aadharCard"  :"",
        "cast"        :"",
        "areaName"    :"",
        "boothName"   :boothNameColor,
        "idNumber"    :"",
        "voterAgeFrom":"",
        "voterName"   :""
      }
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
    var category = this.props.navigation.getParam('category','')
    var color     = this.props.navigation.getParam('color')
    var searchValue;
    if(category == 'favourite'){
      searchValue = {
        "featured"    :true,
        "mobileNumber":"",
        "voted"       :"",
        "visited"     :"",
        "dead"        :"",
        "aadharCard"  :this.state.searchCategory == 'Aadhar Card' ? voterName : "",
        "cast"        :"",
        "areaName"    :"",
        "boothName"   :"",
        "idNumber"    :this.state.searchCategory == 'Card No' ? voterName : "",
        "voterAgeFrom":"",
        "voterName"   :this.state.searchCategory == 'Name' ? voterName : ""
      }
    }else if(category == 'dead'){
      searchValue = {
        "featured"    :"",
        "mobileNumber":"",
        "voted"       :"",
        "visited"     :"",
        "dead"        :true,
        "aadharCard"  :this.state.searchCategory == 'Aadhar Card' ? voterName : "",
        "cast"        :"",
        "areaName"    :"",
        "boothName"   :"",
        "idNumber"    :this.state.searchCategory == 'Card No' ? voterName : "",
        "voterAgeFrom":"",
        "voterName"   :this.state.searchCategory == 'Name' ? voterName : ""
      }
    }else if(category == 'visited'){
      searchValue = {
        "featured"    :"",
        "mobileNumber":"",
        "voted"       :"",
        "visited"     :true,
        "dead"        :'',
        "aadharCard"  :this.state.searchCategory == 'Aadhar Card' ? voterName : "",
        "cast"        :"",
        "areaName"    :"",
        "boothName"   :"",
        "idNumber"    :this.state.searchCategory == 'Card No' ? voterName : "",
        "voterAgeFrom":"",
        "voterName"   :this.state.searchCategory == 'Name' ? voterName : ""
      }
    }else if(category == "boothName"){
      var boothName = this.props.navigation.getParam('boothName','')
      searchValue = {
        "featured"    :"",
        "mobileNumber":"",
        "voted"       :"",
        "visited"     :"",
        "dead"        :'',
        "aadharCard"  :this.state.searchCategory == 'Aadhar Card' ? voterName : "",
        "cast"        :"",
        "areaName"    :"",
        "boothName"   :boothName,
        "idNumber"    :this.state.searchCategory == 'Card No' ? voterName : "",
        "voterAgeFrom":"",
        "voterName"   :this.state.searchCategory == 'Name' ? voterName : ""
      }
    }else if(category == ""){
      searchValue = {
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
    }else if(category == 'color'){
      var boothName = this.props.navigation.getParam('boothName','')
      searchValue = {
        "color"       :color,
        "featured"    :"",
        "mobileNumber":"",
        "voted"       :"",
        "visited"     :"",
        "dead"        :'',
        "aadharCard"  :this.state.searchCategory == 'Aadhar Card' ? voterName : "",
        "cast"        :"",
        "areaName"    :"",
        "boothName"   :boothName,
        "idNumber"    :this.state.searchCategory == 'Card No' ? voterName : "",
        "voterAgeFrom":"",
        "voterName"   :this.state.searchCategory == 'Name' ? voterName : ""
      }
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
  
  render(){

    const { navigate, goBack, state } = this.props.navigation;
    var category = this.props.navigation.getParam('category','')
    var boothName = this.props.navigation.getParam('boothName','')
    var surname = this.props.navigation.getParam('surname','')

    return(
        <Drawer
            ref={(ref) => this._drawer = ref}
            // openDrawerOffset={(viewport) => viewport.width-}
            side="left"
            >
            
            <ScrollView  keyboardShouldPersistTaps="handled" >
              {
                boothName == "" ? 
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
                :
                null
              }
              <View style={{ flexDirection:'row',backgroundColor:'#337ab7',paddingHorizontal:10,paddingVertical:10,justifyContent:'space-between'}}>
                <View style={{flex:0.3,paddingTop:15}}>
                  <Text style={{color:"#f1f1f1",fontFamily:"Montserrat-Regular"}}>Booth Name</Text>
                </View>
                <View style={{flex:0.7,paddingTop:5, width: '100%', backgroundColor:"transparent",borderBottomWidth:1, borderColor:"#000"}}>
                  {
                    boothName == "" ? 
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
                      :
                        <Text style={{fontSize:15,fontWeight:'bold',color:'#111'}}>{boothName}</Text>
                  }
                </View>
              </View>
              {
                category == 'surname' ? 
                  <View style={{ flexDirection:'row',backgroundColor:'#337ab7',paddingHorizontal:10,paddingVertical:10,justifyContent:'space-between'}}>
                    <View style={{flex:0.3,paddingTop:15}}>
                      <Text style={{color:"#f1f1f1",fontFamily:"Montserrat-Regular"}}>SurName</Text>
                    </View>
                    <View style={{flex:0.7,paddingTop:5, width: '100%', backgroundColor:"transparent",borderBottomWidth:1, borderColor:"#000"}}>
                      <Text style={{fontSize:15,fontWeight:'bold',color:'#111'}}>{surname}</Text>
                    </View>
                  </View>
                :
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
              }
              {
                category == 'surname' ? 
                  null
                :
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
              }            
              <View style={{paddingVertical:5, backgroundColor:"#eee",paddingHorizontal:5}}>
                {
                  this.state.data ? 
                    this.state.data.length > 0 ?
                      this.state.data.map((voter,index)=>{
                        return(
                          <TouchableOpacity onPress={()=> this.props.navigation.navigate('VoterProfile',{user_id:voter._id})} key={index} style={{marginBottom:10,paddingVertical:10,paddingHorizontal:5,backgroundColor:"#fff",borderWidth:1,borderColor:"999",borderRadius:5}}>
                            <View style={{flexDirection:'row'}}>
                              <Text style={{fontSize:18, color:"#111",flex:0.1,fontFamily:"Montserrat-Regular"}}>{index+1}</Text>
                              <Text style={{fontSize:18, color:"#111",flex:0.6,fontFamily:"Montserrat-Regular"}}>{voter.fullName}</Text>
                              <Text style={{fontSize:18, color:"#111",flex:0.2,fontFamily:"Montserrat-Regular"}}>{voter.gender}{voter.age}</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                              <Text style={{color:"#111",flex:0.15,fontFamily:"Montserrat-Regular"}}>Booth: </Text>
                              <Text style={{color:"#111",flex:0.8,textDecorationStyle:"underline",fontFamily:"Montserrat-Regular"}}>{voter.boothName}</Text>
                            </View>
                            <View style={{flexDirection:'row'}}><Icon name="phone" style={{marginTop:5}} type="font-awesome" size={15}  color="#333" /><Text style={{color:"#111",marginLeft:5}}>{voter.mobileNumber == "" ? "No phone number": voter.mobileNumber}</Text></View>             
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


 