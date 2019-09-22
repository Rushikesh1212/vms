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
import { Table, TableWrapper, Row, Rows,Cell } from 'react-native-table-component';

import styles from "./styles.js";

// import MenuBar from '../Menu/Menu.js';
import HeaderDy from "../../layouts/HeaderDy/HeaderDy.js";


 const window = Dimensions.get('window');
export default  class ColorList extends Component {

  constructor(props){
    super(props);
    this.state = {
      gaon: 'Select Gaon',
      data: '',
      searchCategory:'Name',
      boothData:[],
      gaonList:[],
    };
  }
  componentDidMount(){
    axios.get('api/voters/villagelist')
      .then(res=>{
        this.setState({gaonList:res.data})
        var village = {
          villageName:res.data[0]
        }
        axios.post('api/voters/boothbyvillage',village)
          .then(response=>{
              this.setState({boothData:response.data,boothName:response.data[0]._id})
              var booth = {
                "boothName":res.data[0]._id
              }
              axios.post('api/voters/colorList',booth)
                .then(result=>{
                  // console.log(res.data)
                  this.setState({data:result.data})
                })
                .catch(err=>{
                  console.log('err',err)
                })
          })
          .catch(error=>{
            console.log('error',error)
          })
      })
      .catch(err=>{
        console.log('err',err)
      })
      // var village = {
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
      var booth = {
        "boothName":boothName
      }
    axios.post('api/voters/colorList',booth)
      .then(res=>{
        this.setState({data:res.data})
      })
      .catch(err=>{
        console.log('err',err)
      })
  }
 render(){
    const { navigate, goBack, state } = this.props.navigation;
    console.log('gaonList',this.state.gaonList)
    console.log('booth',this.state.boothData)
    return(
        <Drawer
            ref={(ref) => this._drawer = ref}
            // openDrawerOffset={(viewport) => viewport.width-}
            side="left"
            >
            
            <ScrollView  keyboardShouldPersistTaps="handled" >
                <View style={{ flexDirection:'row',backgroundColor:'#337ab7',paddingHorizontal:10,paddingVertical:10,justifyContent:'space-between',borderColor:'#337ab7'}}>
                  <View style={{flex:0.3,paddingTop:15}}>
                    <Text style={{color:"#f1f1f1"}}>Select Gaon</Text>
                  </View>
                <View style={{flex:0.7,paddingTop:5, width: '100%', backgroundColor:"transparent",borderBottomWidth:1, borderColor:"#000"}}>
                            {this.state.gaonList.length > 0 ?
                              <Picker
                                selectedValue={this.state.gaonName}
                                style={{height: 25}}
                                onValueChange={(itemValue, itemIndex) =>
                                  this.gaonChange(itemValue)
                                }
                                >
                                    {
                                      this.state.gaonList.map(booth=>{
                                        return <Picker.Item label={booth} value={booth} />
                                      })
                                    }
                              </Picker>
                              : null
                            }
                  </View>
                </View>
                <View style={{ flexDirection:'row',backgroundColor:'#337ab7',paddingHorizontal:10,paddingVertical:10,justifyContent:'space-between',borderColor:'#337ab7'}}>
                <View style={{flex:0.3,paddingTop:15}}>
                  <Text style={{color:"#f1f1f1"}}>Booth Name</Text>
                </View>
                <View style={{flex:0.7,paddingTop:5, width: '100%', backgroundColor:"transparent",borderBottomWidth:1, borderColor:"#000"}}>
                        {this.state.boothData.length > 0 ?
                              <Picker
                                selectedValue={this.state.boothName}
                                style={{height: 25}}
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

              <View style={{padding:10}}>
              {
                this.state.data && this.state.data.length > 0 ? 
                  <View style={{flexDirection:'row'}}>
                    <View style={styles.headCol1}><Text style={styles.tableHeadText}>Color Code</Text></View>
                    <View style={styles.headCol2}><Text style={styles.tableHeadText}>Count</Text></View>
                  </View>
                : null
              }
                  {
                    this.state.data ?
                      this.state.data.map((sur,index)=>{
                        return(
                            <TouchableOpacity style={{flexDirection:'row'}} key={index} onPress={()=>this.props.navigation.navigate("AllVoterList",{color:sur._id,category:"color",boothName:this.state.boothName})}>
                              <View style={{height:50,flex:0.5,borderWidth:1,borderColor:"#333",justifyContent:"center"}}><Text style={styles.tableBodyText}>{sur._id}</Text></View>
                              <View style={{height:50,flex:0.5,borderWidth:1,borderColor:"#333",justifyContent:"center"}}><Text style={styles.tableBodyText}>{sur.count}</Text></View>
                            </TouchableOpacity>
                        )
                      }) 
                    :
                    <Loading />
                  }
              </View>
            </ScrollView>
        </Drawer>
    );
  }
}


 