import React, { Component } from "react";
import { StyleSheet,Text,View,TextInput,BackHandler,TouchableOpacity, ScrollView,Platform,Dimensions, Image,ImageBackground,Alert,Picker/*AsyncStorage*/} from "react-native";
import { Header, Button, Icon,Card,Avatar,CheckBox} from "react-native-elements";
import AsyncStorage from '@react-native-community/async-storage'
import { NavigationActions } from "react-navigation";
import ImageOverlay from "react-native-image-overlay";

import SideMenu from 'react-native-side-menu';
import PropTypes from "prop-types";
import Drawer from 'react-native-drawer';
import axios from "../../config/axios.js";
import Loading from '../../layouts/Loading/Loading.js';
// import CheckBox from 'react-native-check-box'
import styles from "./styles.js";

// import MenuBar from '../Menu/Menu.js';
import HeaderDy from "../../layouts/HeaderDy/HeaderDy.js";
const window = Dimensions.get('window');
export default  class DisColorWise extends Component {

  constructor(props){
    super(props);
    this.state = {
      gaon: 'Select Gaon',
      data: '',
      searchCategory:'Name',
      checkSelected:[],
      isCheck:false,
      searchBy: 'Name'
    };
  }
  componentDidMount(){
    var category = this.props.navigation.getParam('category','')
    var boothName = this.props.navigation.getParam('boothName','')
    // console.log('category',category)
    // console.log('boothName',boothName)
    if(category==''){
      axios.get('api/voters/get')
        .then(response=>{
          // console.log(response.data.length)
          this.setState({data:response.data})
        })
        .catch(error=>{
          console.log(error)
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
      }else if(category == 'boothName'){
        searchCategory={
          boothName:boothName
        }
      }else if(category == 'favourite'){
        searchCategory={
          favourite:true
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
      console.log('searchCategory',searchCategory)
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
    var checkedData
    if(this.state.data){
      checkedData = this.state.data.map((voter,i)=>{
        return({_id:voter._id,fullName:voter.fullName,boothName:voter.boothName,mobileNumber:voter.mobileNumber,checked:false})
      })
      console.log('checkedData',checkedData)
    }

    return(
        <Drawer
            ref={(ref) => this._drawer = ref}
            // openDrawerOffset={(viewport) => viewport.width-}
            side="left"
            >
           
            <ScrollView  keyboardShouldPersistTaps="handled" >
{/*              <View style={{ flexDirection:'row',backgroundColor:'#337ab7',paddingHorizontal:10,paddingVertical:10,justifyContent:'space-between',borderColor:'#337ab7',borderBottomWidth:2,shadowOffset:{  width: 10,  height: 10,  },shadowColor: '#337ab7',shadowOpacity: 1.0,}}>
                <View style={{flex:0.3,paddingTop:5}}>
                  <Text style={{color:"#f1f1f1"}}>Select Gaon</Text>
                </View>
                <View style={{flex:0.7,height: 25,paddingBottom:10, width: '100%', backgroundColor:"transparent",borderBottomWidth:1, borderColor:"#000"}}>
                        <Picker
                          selectedValue={this.state.gaon}
                          style={{height: 25}}
                          onValueChange={(itemValue, itemIndex) =>
                            this.setState({gaon: itemValue})
                          }
                          >
                          <Picker.Item label="All Gaon" value="" />
                          <Picker.Item label="Pune" value="Pune" />
                        </Picker>
                </View>
              </View>*/}
              <View style={{ flexDirection:'row',backgroundColor:'#337ab7',paddingHorizontal:10,paddingVertical:10,justifyContent:'space-between',borderColor:'#337ab7',borderBottomWidth:2,shadowOffset:{  width: 10,  height: 10,  },shadowColor: '#337ab7',shadowOpacity: 1.0,}}>
                <View style={{flex:0.3,paddingTop:5}}>
                  <Text style={{color:"#f1f1f1"}}>Select Booth</Text>
                </View>
                <View style={{flex:0.7,paddingTop:5, width: '100%', backgroundColor:"transparent",borderBottomWidth:1, borderColor:"#000"}}>
                        <TextInput
                          style={{height: 35,borderColor: this.state.borderColor,borderBottomWidth: 1,paddingLeft:10}}
                          placeholder="Booth"
                          onChangeText = {this.updateNameSearch}
                          value={this.state.boothName}
                          onBlur={ () => this.setState({borderColor:'#666'}) }
                          onFocus={ () => this.setState({borderColor:'#337ab7'}) }
                        />
                </View>
              </View>

               <View style={{ flexDirection:'row',backgroundColor:'#337ab7',paddingHorizontal:10,paddingVertical:10,justifyContent:'space-between',borderColor:'#337ab7',borderBottomWidth:2,shadowOffset:{  width: 10,  height: 10,  },shadowColor: '#337ab7',shadowOpacity: 1.0,}}>
                <View style={{flex:0.3,paddingTop:5}}>
                  <Text style={{color:"#f1f1f1"}}>Search By</Text>
                </View>
                <View style={{flex:0.7,height: 25,paddingBottom:10, width: '100%', backgroundColor:"transparent",borderBottomWidth:1, borderColor:"#000"}}>
                        <Picker
                          selectedValue={this.state.searchBy}
                          style={{height: 25}}
                          onValueChange={(itemValue, itemIndex) =>
                            this.setState({searchBy: itemValue})
                          }
                          >
                          <Picker.Item label="Name-Regular Search" value="" />
                          <Picker.Item label="Booth" value="Booth" />
                          <Picker.Item label="Gaon" value="Gaon" />
                        </Picker>
                </View>
              </View>


               <View style={{flexDirection:'row',paddingRight:10,paddingLeft:5,paddingBottom:8}}>
                <View style={{flex:0.8}}>
                        <TextInput
                        style={{height: 40,paddingLeft:5,borderColor: this.state.cardBorderColor,borderBottomWidth: 1}}
                        placeholder={this.state.searchBy}
                        onChangeText={(searchtext) => this.setState({searchtext})}
                        value={this.state.searchtext}
                        onBlur={ () => this.setState({cardBorderColor:'#337ab7'}) }
                        onFocus={ () => this.setState({cardBorderColor:'#337ab7'}) }
                      />
                </View>
              </View>

              <View style={{ flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{flex:0.7,padding:10, width: '100%', backgroundColor:"#fff",borderWidth:2, borderColor:"#000"}}>
                       <Text style={{color:"#000",height: 20,marginLeft:'22%'}}>Set Color To All Voter </Text>
                </View>
                <View style={{flex:0.3,padding:10,backgroundColor:"#337ab7"}}>
                  <Text style={{color:"#f1f1f1",height: 20,marginLeft:'20%'}}>Set Color</Text>
                </View>
              </View>

              <View style={{paddingVertical:10, backgroundColor:"#eee",paddingHorizontal:15}}>
                 {
                  this.state.data ?
                    this.state.data.length > 0 ?
                    checkedData.map((data,index)=>{
                      return(
                        <TouchableOpacity key={index} style={{flexDirection:'row',addingVertical:10,marginTop:10,paddingHorizontal:5,backgroundColor:"#fff",borderWidth:1,borderColor:"999",borderRadius:5}}>
                          <View style={{flex:0.2,backgroundColor:'red'}}>  
                            <CheckBox
                               style={{backgroundColor:"#ff0",flex:0.1,height:10}}
                               onClick={() => this.handleOnClickInternal(index)}
                               isChecked={data.checked}
                              />
                              <Text>{index+1}</Text>
                          </View>
                          <View style={{flex:0.7}}>
                              <View style={{flexDirection:'row'}}>
                                <Text style={{fontSize:18, color:"#111",flex:0.8,marginTop:10}}>{data.fullName}</Text>
                              </View>
                              <View style={{flexDirection:'row'}}>
                                <View style={{flex:0.1}}></View>
                                <Text style={{color:"#111",textDecoration:"underline",fontSize:18,fontFamily:"Montserrat-Bold"}}>Booth: {data.boothName}</Text>
                              </View>
                              <View style={{flexDirection:'row'}}>
                                <Icon
                                // raised
                                style={{flex:0.3}}
                                name='phone'
                                type='font-awesome'
                                />
                                <Text style={{color:"#111",marginLeft:5}}>{data.mobileNumber == "" ? "No Number added" : data.mobileNumber}</Text>   
                              </View>
                          </View>       
                        </TouchableOpacity>
                      );
                  })
                  :
                  null
                  : <Loading />
                }
                
              </View>
            </ScrollView>
        </Drawer>
    );
  }
}


 