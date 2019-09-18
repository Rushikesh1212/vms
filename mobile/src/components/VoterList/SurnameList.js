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
export default  class SurnameList extends Component {

  constructor(props){
    super(props);
    this.state = {
      gaon: 'Select Gaon',
      data: '',
      searchCategory:'Name',
      tableHead: ['Surname','Total Voter'],
      tableData: []
    };
  }
  componentDidMount(){
    axios.get('api/voters/surnameList')
      .then(res=>{
        console.log(res.data)
        const data = []
        for(var i = 0; i < res.data.length; i++){
          // data.push(`${res.data[i]._id}`,`${res.data[i].total}`)
          data.push([res.data[i]._id,res.data[i].total,4])
        }
        this.setState({tableData:data})
        // console.log('data',data)
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

  updateNameSearch = voterName => {
    this.setState({ voterName });
    // console.log('searchText',voterName)
    var voterName = {
      voterName
    }
    // console.log('searchValue',voterName)
  }
  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }
  render(){

    const { navigate, goBack, state } = this.props.navigation;
    // console.log('subscriptionList in render',this.state.data)
    // const menu = <MenuBar navigate={navigate} />;
   const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>button</Text>
        </View>
      </TouchableOpacity>
    );
    // var navigationView = <NotificationCommon closeDrawer={this.closeDrawer} notificationData={[]} navigation={this.props.navigation}/>

    return(
        <Drawer
            ref={(ref) => this._drawer = ref}
            // openDrawerOffset={(viewport) => viewport.width-}
            side="left"
            >
            
            <ScrollView  keyboardShouldPersistTaps="handled" >
              {/*<View style={{ flexDirection:'row',backgroundColor:'#337ab7',paddingHorizontal:10,paddingVertical:10,justifyContent:'space-between',borderColor:'#337ab7'}}>
                <View style={{flex:0.3,paddingTop:15}}>
                  <Text style={{color:"#f1f1f1"}}>Booth Name</Text>
                </View>
                <View style={{flex:0.7,paddingTop:5, width: '100%', backgroundColor:"transparent",}}>
                        <TextInput
                          style={{height: 35,borderColor: this.state.borderColor,borderBottomWidth: 2,paddingLeft:10}}
                          placeholder="Booth"
                          onChangeText = {this.updateNameSearch}
                          value={this.state.name}
                          onBlur={ () => this.setState({borderColor:'#666'}) }
                          onFocus={ () => this.setState({borderColor:'#000'}) }
                        />
                </View>
              </View>*/}
              <View style={{ flexDirection:'row',backgroundColor:'#337ab7',paddingHorizontal:10,paddingVertical:10,justifyContent:'space-between',borderColor:'#337ab7',borderBottomWidth:2,shadowOffset:{  width: 10,  height: 10,  },shadowColor: '#337ab7',shadowOpacity: 1.0,}}>
                <View style={{flex:0.3,paddingTop:5}}>
                  <Text style={{color:"#f1f1f1"}}>Search By</Text>
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
                        style={{height: 40,paddingLeft:5,borderColor: this.state.cardBorderColor,borderBottomWidth: 2}}
                        placeholder={this.state.searchCategory}
                        onChangeText={(searchText) => this.setState({searchText})}
                        value={this.state.searchText}
                        onBlur={ () => this.setState({cardBorderColor:'#666'}) }
                        onFocus={ () => this.setState({cardBorderColor:'#337ab7'}) }
                      />
                </View>
              </View>
              <View style={{paddingVertical:5, backgroundColor:"#eee",paddingHorizontal:5}}>
                          <View style={{backgroundColor:"#fff"}}>
                            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                              <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
                              <Rows data={this.state.tableData} textStyle={styles.text}/>
                              {/*{
                                this.state.tableData.map((rowData, index) => (
                                  <TableWrapper key={index} style={styles.row}>
                                    {
                                      rowData.map((cellData, cellIndex) => (
                                        <Cell key={cellIndex} data={cellIndex === 2 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                                      ))
                                    }
                                  </TableWrapper>
                                ))
                              }*/}
                            </Table>
                          </View>
              </View>
            </ScrollView>
        </Drawer>
    );
  }
}


 