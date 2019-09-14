import React, { Component } from "react";
import { StyleSheet,Text,View,TextInput,BackHandler,TouchableOpacity, ScrollView,Platform,Dimensions, Image,ImageBackground,Alert,Keyboard} from "react-native";
import { Header, Button, Icon,Card,Avatar} from "react-native-elements";
import { NavigationActions } from "react-navigation";
import ImageOverlay from "react-native-image-overlay";
import { TextField } from "react-native-material-textfield";

import SideMenu from 'react-native-side-menu';
import PropTypes from "prop-types";
import Drawer from 'react-native-drawer';

import styles from "./styles.js";
import Loading from '../../layouts/Loading/Loading.js';

// import MenuBar from '../Menu/Menu.js';
import HeaderBar from "../../layouts/HeaderBar/HeaderBar.js";
import {colors, sizes} from '../../config/styles.js';
import axios from '../../config/axios.js'


 const window = Dimensions.get('window');
export default  class SearchList extends Component {

  constructor(props){
    super(props);
    this.state = {
      text: '',
      data: '',
    };
  }
  componentDidMount(){
    var category = this.props.navigation.getParam('category','')
    var boothName = this.props.navigation.getParam('boothName','')
    console.log('category',category)
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


  closeControlPanel = () => {
    this._drawer.close()
  }

  openControlPanel = () => {
    this._drawer.open()
  }

  onFocus(){
    this.setState({
      borderColor: '#337ab7'
    })
  }
  onBlur(){
     this.setState({
        borderColor: '#666'
    })
  }

  updateNameSearch = voterName => {
    this.setState({ voterName });
    // console.log('searchText',voterName)
    var voterName = {
      voterName
    }
    // console.log('searchValue',voterName)
    axios.post('/api/search/voters/',voterName)
      .then(response=>{
        // console.log('response. for search',response)
        this.setState({data:response.data})
      })
      .catch(error=>{
        // console.log('error',error)
      })
  }

  updateCardSearch = idNumber => {
    this.setState({ idNumber });
    // console.log('searchText',idNumber)
    var voterName = {
      idNumber
    }
    // console.log('searchValue',searchValue)
    axios.post('/api/search/voters/',voterName)
      .then(response=>{
        console.log('response. for search',response)
        this.setState({data:response.data})
      })
      .catch(error=>{
        console.log('error',error)
      })
  };
  render(){

    const { navigate, goBack, state } = this.props.navigation;

    // const menu = <MenuBar navigate={navigate} />;
   
    // var navigationView = <NotificationCommon closeDrawer={this.closeDrawer} notificationData={[]} navigation={this.props.navigation}/>

    return(
            <ScrollView  keyboardShouldPersistTaps="handled" >
              <View style={{ flexDirection:'row',backgroundColor:'#fff',paddingHorizontal:10,paddingVertical:10,justifyContent:'space-between',borderColor:'#337ab7',borderBottomWidth:2,shadowOffset:{  width: 10,  height: 10,  },shadowColor: '#337ab7',shadowOpacity: 1.0,}}>
                <View style={{flex:0.45}}>
                        <TextInput
                        style={{height: 40,borderColor: this.state.borderColor,borderBottomWidth: 2,paddingLeft:20}}
                        placeholder="Name"
                        onChangeText = {this.updateNameSearch}
                        value={this.state.name}
                        onBlur={ () => this.onBlur() }
                        onFocus={ () => this.onFocus() }
                      />
                </View>
                <View style={{flex:0.45}}>
                        <TextInput
                        style={{height: 40,paddingLeft:20,borderColor: this.state.cardBorderColor,borderBottomWidth: 2}}
                        placeholder="Card No"
                        onChangeText = {this.updateCardSearch}
                        value={this.state.card}
                        onBlur={ () => this.setState({cardBorderColor:'#666'}) }
                        onFocus={ () => this.setState({cardBorderColor:'#337ab7'}) }
                      />
                </View>
              </View>
              <View style={{width:'100%'}}>
                  { this.state.data ? 
                      this.state.data.length > 0 ? 
                        this.state.data.map((data,index)=>{
                          return(
                            <TouchableOpacity onPress={()=> this.props.navigation.navigate('UserProfile',{user_id:data._id})} key={index}>
                              <View style={{flexDirection:'row',paddingVertical:10,paddingHorizontal:10,borderWidth:2,borderColor:'#333', blurRadius:90}} >
                                <Text style={{flex:0.1}}> {data.partNo}/{index+1}</Text>
                                <Text style={{flex:0.6,paddingLeft:30,backgroundColor:'transparent'}}>{data.fullName}</Text>
                                <Text style={{flex:0.3}}>{data.idNumber}</Text>
                              </View>
                            </TouchableOpacity>
                          )
                        })
                      :  <Text style={{flex:0.1}}> No Voter found</Text>
                    : <Loading />
                  }
              </View>
            </ScrollView>
    );
  }
}
  

 