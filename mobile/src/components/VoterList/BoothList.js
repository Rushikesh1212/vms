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
export default  class BoothList extends Component {

  constructor(props){
    super(props);
    this.state = {
      gaon: 'Select Gaon',
      gaonName:'Select Gaon'
    };
  }
  componentDidMount(){
    axios.get('api/voters/villagelist')
      .then(res=>{
        this.setState({gaonList:res.data})
        var village = {
          mVillageName:res.data[0]
        }
        axios.post('/api/booth/post/searchBooth',village)
          .then(response=>{
            console.log('Booth',response.data)
            this.setState({data:response.data})
          })
          .catch(err=>{
            console.log(err)
          })
      })
      .catch(err=>{
        console.log('err',err)
      })
    
    // axios.get('/api/voters/distinctBooth')
    //   .then(res=>{
    //     // console.log('res',res.data)
    //     this.setState({data:res.data})
    //   })
    //   .catch(err=>{
    //     console.log('err',err)
    //   })
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

  updateNameSearch = boothName => {
    this.setState({ boothName });
    // console.log('searchText',boothName)
    var boothName = {
      boothName
    }
    // console.log('searchValue',voterName)
    axios.post('/api/booth/post/searchBooth',boothName)
      .then(response=>{
        // console.log('response. for search',response)
        this.setState({data:response.data})
      })
      .catch(error=>{
        // console.log('error',error)
      })
  }
  gaonChange(gaonName){
    this.setState({gaonName:gaonName})
    var village = {
      mVillageName:gaonName
    }
    // console.log('village',village)
    axios.post('api/booth/post/searchBooth',village)
      .then(response=>{
        this.setState({data:response.data})
      })
      .catch(err=>{
        console.log(err)
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
              <View style={{ flexDirection:'row',backgroundColor:'#337ab7',paddingHorizontal:10,paddingVertical:10,justifyContent:'space-between',borderColor:'#337ab7',borderBottomWidth:2,shadowOffset:{  width: 10,  height: 10,  },shadowColor: '#337ab7',shadowOpacity: 1.0,}}>
                <View style={{flex:0.3,paddingTop:5}}>
                  <Text style={{color:"#f1f1f1",fontFamily:"Montserrat-SemiBold"}}>Select Gaon</Text>
                </View>
                <View style={{flex:0.7,paddingTop:5, width: '100%', backgroundColor:"transparent",borderBottomWidth:1, borderColor:"#000"}}>
                  <Picker
                    selectedValue={this.state.gaonName}
                    placeholder={"Select Gaon"}
                    style={{height: 25,fontFamily:"Montserrat-Regular"}}
                    onValueChange={(itemValue, itemIndex) =>
                      this.gaonChange(itemValue)
                    }
                    >
                      {
                        this.state.gaonList ?
                          this.state.gaonList.length > 0 ?
                            this.state.gaonList.map((gaon,i)=>{
                              return <Picker.Item label={gaon} key={i} value={gaon} />
                            })
                          : null
                        :null
                      }
                  </Picker>
                </View>
              </View>
              <View style={{paddingVertical:10, backgroundColor:"#eee",paddingHorizontal:15}}>
                {
                  this.state.data ? 
                    this.state.data.length > 0 ?
                      this.state.data.map((booth,index)=>{
                        return(
                          <TouchableOpacity key={index} onPress={()=>this.props.navigation.navigate('AllVoterList',{category:'boothName',boothName:booth.boothName})} style={{paddingVertical:20,paddingHorizontal:15,marginBottom:10,backgroundColor:"#fff",borderWidth:1,borderColor:"999",borderRadius:5}}>
                            <Text style={{fontSize:20, color:"#111",fontFamily:'Montserrat-Bold'}}>{booth.boothName}</Text>
                            <Text style={styles.statText}>Total Female: {booth.female}</Text>
                            <Text style={styles.statText}>Total Male: {booth.male}</Text>
                            <Text style={styles.statText}>Total: {booth.total}</Text>
                          </TouchableOpacity>
                        )
                      })
                    : <Text style={{fontSize:20, color:"#111",fontFamily:'Montserrat-Bold'}}>No Booth Found</Text>
                  : <Loading />
                }
              </View>
            </ScrollView>
        </Drawer>
    );
  }
}


 