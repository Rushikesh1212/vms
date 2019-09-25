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
    const voter_id = this.props.navigation.getParam('voter_id','')
    axios.get('/api/voters/voterFamily/'+voter_id)
      .then(res=>{
        this.setState({data:res.data})
      })
      .catch(error=>{
        console.log('error',error)
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
  
  render(){

    const { navigate, goBack, state } = this.props.navigation;
    return(
        <Drawer
            ref={(ref) => this._drawer = ref}
            // openDrawerOffset={(viewport) => viewport.width-}
            side="left"
            >
            
            <ScrollView  keyboardShouldPersistTaps="handled" >
              <View style={{ flexDirection:'row',backgroundColor:'#337ab7',paddingHorizontal:10,paddingVertical:10,justifyContent:'center',borderColor:'#337ab7'}}>
                  <View style={{alignSelf:'center',paddingTop:15}}>
                    <Text style={{color:"#f1f1f1"}}>Family List</Text>
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
                    : <Text style={{fontFamily:"Montserrat-Regular"}}>No Family Member Found</Text>
                  : <Loading />
                }
              </View>
            </ScrollView>
        </Drawer>
    );
  }
}


 