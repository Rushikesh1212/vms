import React from "react";
// import Meteor, { createContainer } from "react-native-meteor";
import {
  Text,
  View,
  TouchableOpacity,
  Alert} from "react-native";
import { Header, Icon  } from 'react-native-elements';
import ValidationComponent from "react-native-form-validator";

import styles from "./styles.js";

export default class NotificationHeader extends ValidationComponent {
  constructor(props) {
    super(props);
    /*this.state = {
      country             : 0,
      isOpen              : false,
      selectedItem        : 'About',
      inputFocusColor     : '#f7ac57',
      addressLineOne      : '',
      addressLineTwo      : '',
      country             : 'India',
      state               : '',
      city                : '',
      area                : '',
      pincode             : '',
      addressLineOneError : '',
      addressLineTwoError : '',
      countryError        : '',
      stateError          : '',
      cityError           : '',
      areaError           : '',
      pincodeError        : '',
      error: null,
    };
    this.baseState = this.state;*/
  }
  /*validation=()=>{
    let valid = true;
      this.validate({
        addressLineOne:{          
          maxlength:20,
          required:true
        },
        addressLineTwo:{          
          maxlength:20
        },
        country:{          
          maxlength:20,
          required:true
        },
        state:{          
          maxlength:20,
          required:true
        },
        city:{          
          maxlength:20,
          required:true
        },
        area:{          
          maxlength:20,
          required:true
        },
        pincode:{
          number:true,          
          maxlength:7,
          required:true
        }
      });
      if (this.isFieldInError("addressLineOne")) {
        let addressLineOneError = this.getErrorsInField("addressLineOne");
        this.setState({ addressLineOneError });
        valid = false;
      } else {
        this.setState({ addressLineOneError: "" });
      }
      if (this.isFieldInError("addressLineTwo")) {
        let addressLineTwoError = this.getErrorsInField("addressLineTwo");
        this.setState({ addressLineTwoError });
        valid = false;
      } else {
        this.setState({ addressLineTwoError: "" });
      }
      if (this.isFieldInError("country")) {
        let countryError = this.getErrorsInField("country");
        this.setState({ countryError });
        valid = false;
      } else {
        this.setState({ countryError: "" });
      }
      if (this.isFieldInError("state")) {
        let stateError = this.getErrorsInField("state");
        this.setState({ stateError });
        valid = false;
      } else {
        this.setState({ stateError: "" });
      }
      if (this.isFieldInError("city")) {
        let cityError = this.getErrorsInField("city");
        this.setState({ cityError });
        valid = false;
      } else {
        this.setState({ cityError: "" });
      }
      if (this.isFieldInError("area")) {
        let areaError = this.getErrorsInField("area");
        this.setState({ areaError });
        valid = false;
      } else {
        this.setState({ areaError: "" });
      }
      if (this.isFieldInError("pincode")) {
        let pincodeError = this.getErrorsInField("pincode");
        this.setState({ pincodeError });
        valid = false;
      } else {
        this.setState({ pincodeError: "" });
      }
      return valid;
  }*/

  _goBack = () =>{
    this.props.goBack();
  }
  /*_closeModal = () => this.setState({ isEditModalVisible: false });
  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });
  _editModal = subscriptionModalId => {
    this.setState({ subscriptionModalId });
    this.setState({ isEditModalVisible: true });
  };*/
  UNSAFE_componentWillMount() {
   
  }
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
    if(nextProps){
      this.setState({
        count:parseInt(nextProps.count)
      })
    }
    // this.props.updateCount(this.state.count);
  }
  componentWillUnmount() {
    // this.props.handle.stop();
    // this.props.handleCustomer.stop();
    // this.setState(this.baseState);
  }

  _goBack = () => {
    this.props.goBack();
  };

  /*handleAddSubscription = ()=>{
    if (this.submitValidation()) {
      this._toggleModal();
    }
  }*/

  render() {
    return (
      <Header
        centerComponent={{ text: "Pamtap Vendor", style: { color: '#fff' ,fontSize:20, fontWeight:'600'} }}
        leftComponent={
          <TouchableOpacity  onPress={this.props.toggle()} >
            <Icon size={25} name='bars' type='font-awesome' color='#fff' />
          </TouchableOpacity>
        }
        outerContainerStyles={styles.outerContent}
        innerContainerStyles={{marginTop:0,paddingTop:0}}
        rightComponent={
          <View style={{flex:1, flexDirection:'row',alignItems:'flex-end', minHeight:20, minWidth:20}}>
            <TouchableOpacity onPress={this.props.openControlPanel()}>
              <Icon name="bell-outline" type="material-community" size={30}  color="#fff" style={styles.bellIcon}/>
              <Text style={styles.notificationText}>{this.props.count}</Text>
            </TouchableOpacity>
          </View>
            }
        />
    );
  }
}
// export default createContainer(props => {
//   var businessId  = Meteor.user().profile.activeServiceId;
//   const handle    = Meteor.subscribe('userNotifForBiz',businessId);
//   const notifData = Meteor.collection('userNotification').find({businessId,read:{$ne:true}}) || [];

//   return {
//     count       : notifData.length,
//     notification: notifData,
//     handle,
//   };
// }, NotificationHeader);
