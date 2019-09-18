import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  BackHandler,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  Image,TextInput,
  Alert
} from 'react-native';
import axios          from 'axios';

import { Button,Icon, SearchBar } from 'react-native-elements';

import ValidationComponent from "react-native-form-validator";
import { TextField } from 'react-native-material-textfield';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import CheckBox from 'react-native-check-box'

import HeaderBar from '../../layouts/HeaderBar/HeaderBar.js';
import styles from './styles.js';
import {colors,sizes} from '../../config/styles.js';
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from "react-native-datepicker";

const window = Dimensions.get('window');

export default class PropertyDetails4 extends ValidationComponent{
  constructor(props){
    super(props);
    this.state={
    
      defaultIcon:'flag',
      iconType: 'material-community',
      allAmenities:[],
      isChecked: true,
     
    };
  }

  onSelect=(index,value)=>{
    this.setState({
      totalAskIndex: index,
    });
  }

  componentDidMount(){
    axios
      .get('http://qatgk3tapi.iassureit.com/api/masteramenities/list')
      .then(
        (res)=>{
          console.log('res postdata', res);
          const postsdata = res.data;
         this.setState({
            allAmenities : postsdata,
          },()=>{
            var allAmenitiesDataList = this.state.allAmenities.map((item,index)=>{

              var newObj = Object.assign({},item);
                if(item.amenity){
                  newObj.checked = false
                }else{
                  newObj.checked = true
                }
                return newObj;

            });

            this.setState({
              allAmenities:allAmenitiesDataList,
            });
          });
        }
      )
      .catch((error)=>{

        console.log("error = ",error);
        alert("Something went wrong! Please check Get URL.");
         }); 
     
  }

  handleOnClickInternal = (index)=>{
    console.log("index",index);
    var alldata = this.state.allAmenities;
    var status = alldata[index].checked;
    if(status===true){
      alldata[index].checked = false;
    }else{
      alldata[index].checked = true;
    }

    this.setState({
      allAmenities: alldata,
    },()=>{
      console.log("here new data of amenities",this.state.allAmenities);
    });
    console.log("current data status",status);
   }


  render(){

    const { navigation } = this.props;
    let {activeTab} = this.state;

    return (
      <React.Fragment>
        <HeaderBar showBackBtn={true} navigation={navigation}/>

        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled" >
          <View style={styles.formWrapper}>
            <View>
              <Text style={styles.heading}>
                My Apartment has following Amenities
              </Text>
            </View>

            <View style={styles.divider}></View>

            <Text style={[styles.heading3,styles.marginBottom5]}>All Amenities </Text>
           
            <View style={[styles.marginBottom15]}>
              {this.state.allAmenities && this.state.allAmenities.length >0 ?
                this.state.allAmenities.map((data,index)=>(
                <React.Fragment key={index}>
                  <CheckBox
                    key={index}
                    style={{marginBottom:10}}
                    onClick={() => this.handleOnClickInternal(index)}
                    isChecked={data.checked}
                    rightTextStyle={{marginLeft:0}}
                    checkBoxColor= {colors.grey}
                    rightTextView = {
                      <View style={{flexDirection:'row',flex:1}}>
                        <Icon
                          name={this.state.defaultIcon}
                          type={this.state.iconType}
                          size={18}
                          color= {colors.button}
                          containerStyle = {{marginHorizontal:10}}
                        />
                        <Text style={styles.inputText}>{data.amenity}</Text>
                      </View>
                    }
                  />
               
                </React.Fragment> 
              ))

                :
                null
              }
            </View>

            <Button
              onPress         = {()=>this.props.navigation.navigate('PropertyDetails5')}
              titleStyle      = {styles.buttonText}
              title           = "Save & Next"
              buttonStyle     = {styles.button}
              containerStyle  = {[styles.buttonContainer,styles.marginBottom15]}
              iconRight
              icon = {<Icon
                name="chevrons-right"
                type="feather"
                size={22}
                color="white"
              />}
            />

           

          </View>
        </ScrollView>
     
      </React.Fragment>
    );
   
  }
}