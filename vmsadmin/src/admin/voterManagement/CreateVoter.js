import React, { Component }       from 'react';
import InputMask                  from 'react-input-mask';
import $                          from "jquery";
import axios                      from 'axios';
import swal                       from 'sweetalert';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/js/modal.js';
import './VoterManagement.css';

const formValid = formerrors=>{
  // console.log("formerrors",formerrors);
  let valid = true;
  Object.values(formerrors).forEach(val=>{
  val.length>0 && (valid = false);
  })
    return valid;
  }

const nameRegex     = RegExp(/^[A-za-z']+( [A-Za-z']+)*$/);
const mobileRegex   = RegExp(/^[0-9][0-9]{9}$/);
const emailRegex    = RegExp (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

class CreateVoter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editUser          : "",
      show              : true,
      office            : null,
      allPosts          : null,
      signupEmail       : "",
      "age"             : null,
      "boothName"       : "",
      "constituencyName": "",
      "firstName"       : "",
      "middleName"      : "",
      "lastName"        : "",
      "fullName"        : "",
      "gender"          : "",
      "houseNumber"     : "",
      "idNumber"        : "",
      "partNo"          : null,
      "partName"        : "",
      "pinCode"         : null,
      "relation"        : "",
      "relativeName"    : "",
      "mobileNumber"    : "",
      "whatsAppNumber"  : "",
      "dead"            : false,
      "visited"         : true,
      "voted"           : false,
      "changeAddress"   : "",
      "areaName"        : "",
      "otherInfo"       : "",
      "dob"             : "",
      "emailId"         : "",
      "aadharCard"      : "",
      "color"           : null,
      "cast"            : "",
      "favourite"       : false,
      allPosts          : [],
      info              : [],
      info              : [],
      formerrors        : {
                           firstname    : "",
                           lastname     : "",
                           signupEmail  : "",
                           mobNumber    : "",
                           role         : "Voter",
                          },

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeBtn = this.handleChangeBtn.bind(this);
    this.toggleEventHandle = this.toggleEventHandle.bind(this);
  }

  handleChange(event){
    const datatype = event.target.getAttribute('data-text');
    const {name,value} = event.target;
    let formerrors = this.state.formerrors;
    
    switch (datatype){
      case 'firstname' : 
        formerrors.firstname = nameRegex.test(value)  && value.length>0 ? '' : "Please Enter Valid Name";
        break;

      case 'lastname' : 
       formerrors.lastname = nameRegex.test(value)  && value.length>0 ? '' : "Please Enter Valid Name";
       break;

      case 'mobNumber' : 
       formerrors.mobNumber = mobileRegex.test(value) && value.length>0 ? '' : "Please enter a valid Contact Number";
       break;

      case 'signupEmail' : 
       formerrors.signupEmail = emailRegex.test(value)  && value.length>0? "":"Please enter a valid Email ID";
       break;

      case 'role' : 
        formerrors.role =  value!= "--select--" ? "":"Please select role";
        break;
      
      default :
      break;

    }
    console.log("value",value);
    
    this.setState({ formerrors,
      [name]:value
    } );
  }

  toggleEventHandle(event){
    var name = $(event.target).attr('name');
      console.log("name = ",name);
      if(name=="favourite"){
        this.setState({
          favourite : true,
        })
      }else if(name=="non-favourite"){
        this.setState({
          favourite : false,
        })
      }else if(name=="alive"){
        this.setState({
          dead : false,
        })
      }else if(name=="dead"){
        this.setState({
          dead : true,
        })
      }else if(name=="visited"){
        this.setState({
          visited : true,
        })
      }else if(name=="non-visited"){
        this.setState({
          visited : false,
        })
      }else if(name=="voted"){
        this.setState({
          voted : true,
        })
      }else if(name=="non-voted"){
        this.setState({
          voted : false,
        })
      }
      
        // if(status=="off"){
        //   swal("Competition has been Shown","","success");
        // }else{
        //   swal("Competition has been hidden","","success");
        // }
  }
  handleChangeBtn(event){
    event.preventDefault();
    var color = event.target.getAttribute("value");
    console.log("color = ",color, typeof color);
    this.setState({
      color : parseInt(color),
    }); 
  }

  componentDidMount() {

     
  }  

  createVoter(event){
    console.log("dk");
    var voterDetails = {
      "age"             : this.state.age,
      "boothName"       : this.state.boothName,
      "constituencyName": this.state.constituencyName,
      // "firstName"       : this.state.firstName,
      // "middleName"      : this.state.middleName,
      // "lastName"        : this.state.lastName,
      "fullName"        : this.state.fullName,
      "gender"          : this.state.gender,
      "houseNumber"     : this.state.houseNumber,
      "idNumber"        : this.state.idNumber,
      "partNo"          : this.state.partNo,
      "partName"        : this.state.partName,
      "pinCode"         : this.state.pinCode,
      "relation"        : this.state.relation,
      "relativeName"    : this.state.relativeName,
      "mobileNumber"    : this.state.mobileNumber,
      "whatsAppNumber"  : this.state.whatsAppNumber,
      "dead"            : this.state.dead,
      "visited"         : this.state.visited,
      "voted"           : this.state.voted,
      "changeAddress"   : this.state.changeAddress,
      "areaName"        : this.state.areaName,
      "otherInfo"       : this.state.otherInfo,
      "dob"             : this.state.dob,
      "emailId"         : this.state.emailId,
      "aadharCard"      : this.state.aadharCard,
      "color"           : this.state.color,
      "cast"            : this.state.cast,
      "favourite"       : this.state.favourite,
    }
    console.log("dk1 == ",voterDetails);
        axios
          .post('/api/voters/post/',voterDetails)
          .then((res)=>{
              console.log("123456 = ",res.data);
                swal("Voter added successfully", "", "success");
                // $('body').removeClass("modal-open");
                this.setState({
                  "age"             : null,
                  "boothName"       : "",
                  "constituencyName": "",
                  "firstName"       : "",
                  "middleName"      : "",
                  "lastName"        : "",
                  "fullName"        : "",
                  "gender"          : "",
                  "houseNumber"     : "",
                  "idNumber"        : "",
                  "partNo"          : null,
                  "partName"        : "",
                  "pinCode"         : null,
                  "relation"        : "",
                  "relativeName"    : "",
                  "mobileNumber"    : "",
                  "whatsAppNumber"  : "",
                  "dead"            : false,
                  "visited"         : true,
                  "voted"           : false,
                  "changeAddress"   : "",
                  "areaName"        : "",
                  "otherInfo"       : "",
                  "dob"             : "",
                  "emailId"         : "",
                  "aadharCard"      : "",
                  "color"           : 3,
                  "cast"            : "",
                  "favourite"       : false,
                })
                axios
                  .get('/api/voters/get/')
                  .then((res)=>{
                      this.setState({
                        allPosts : res.data,
                      },()=>{
                    });         
                  })
                  .catch((error)=>{
                    console.log("error = ",error);
                  }); 
            })
            .catch((error)=>{
              console.log("error = ",error);
              swal("Oops", "Voter not added", "error");
              this.setState({show: false})
            });
  }

    render() {
      const {formerrors} = this.state;
      return (
        <div>
          <div className="modal fade" id="voterModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg " role="document">
              <div className="modal-content modalContent ummodallftmg ummodalmfdrt col-lg-12 ">
                <div className="modal-header userHeader">
                  <button type="button" className="close" data-dismiss="modal">X
                  </button>
                  <h4 className="modal-title" id="exampleModalLabel">Voter Profile View</h4>
                </div>
                <div className="modal-body">
                  <div className="hideModal">
                    <div className="">
                      <div className="">
                        <div className="">                                        
                          <section className="">                                          
                            <div className="box-body">
                              <div className="">
                                  <div className="signuppp col-lg-12 col-md-12 col-sm-12 col-xs-12 margbottom20 createusr">
                                    <div className="col-lg-9 col-md-9 col-xs-12 col-sm-12 inputContent">
                                      <label className="formLable col-lg-12 col-md-12">Booth Name</label>
                                      <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 blocking-span">
                                        <div className="input-group inputBox-main" >
                                          <div className="input-group-addon remove_brdr inputIcon">
                                            <i className="fa fa-envelope-square"></i>
                                          </div>
                                          <input type="text" className="formFloatingLabels form-control newinputbox" 
                                          ref="boothName" name="boothName" id="boothName" data-text="boothName" onChange={this.handleChange}  value={this.state.boothName}
                                          placeholder="Booth Name"/>
                                        </div>                                      
                                      </span>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-xs-12 col-sm-6 inputContent" style={{right:0,position:'absolute'}}>
                                    <img src="/images/user.jpg" width="90%"/>
                                    </div>
                                  </div>
                                  <div className="signuppp col-lg-12 col-md-12 col-sm-12 col-xs-12 margbottom20 createusr ">
                                    <div className="col-lg-3 col-md-3 col-xs-12 col-sm-6 inputContent">
                                      <label className="formLable col-lg-12 col-md-12">Constituency Name</label>
                                      <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 blocking-span">
                                        <div className="input-group inputBox-main" >
                                          <div className="input-group-addon remove_brdr inputIcon">
                                            <i className="fa fa-envelope-square"></i>
                                          </div>
                                          <input type="text" className="formFloatingLabels form-control newinputbox" 
                                          ref="constituencyName" name="constituencyName" id="constituencyName" data-text="constituencyName" onChange={this.handleChange}  value={this.state.constituencyName}
                                          placeholder="Constituency Name"/>
                                        </div>                                      
                                      </span>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 inputContent">
                                      <label className="formLable col-lg-12 col-md-12">Part Name</label>
                                      <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 blocking-span">
                                        <div className="input-group inputBox-main" >
                                          <div className="input-group-addon remove_brdr inputIcon">
                                            <i className="fa fa-envelope-square"></i>
                                          </div>
                                          <input type="text" className="formFloatingLabels form-control newinputbox" 
                                          ref="partName" name="partName" id="partName" data-text="partName" onChange={this.handleChange}  value={this.state.partName}
                                          placeholder="Part Name"/>
                                        </div>                                      
                                      </span>
                                    </div>                                  
                                  </div>
                                  <div className="signuppp col-lg-12 col-md-12 col-sm-12 col-xs-12 margbottom20 createusr ">
                                    <div className="col-lg-3 col-md-3 col-xs-12 col-sm-6 inputContent">
                                      <label className="formLable col-lg-12 col-md-12">Voter ID</label>
                                      <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 blocking-span">
                                        <div className="input-group inputBox-main" >
                                          <div className="input-group-addon remove_brdr inputIcon">
                                            <i className="fa fa-envelope-square"></i>
                                          </div>
                                          <input type="text" className="formFloatingLabels form-control newinputbox" 
                                          ref="idNumber" name="idNumber" id="idNumber" data-text="idNumber" onChange={this.handleChange}  value={this.state.idNumber}
                                          placeholder="Voter ID"/>
                                        </div>                                     
                                      </span>                                    
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-xs-12 col-sm-6 inputContent">
                                      <label className="formLable col-lg-12 col-md-12">Full Name</label>
                                      <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 blocking-span">
                                        <div className="input-group inputBox-main" >
                                          <div className="input-group-addon remove_brdr inputIcon">
                                            <i className="fa fa-envelope-square"></i>
                                          </div>
                                          <input type="text" className="formFloatingLabels form-control newinputbox" 
                                          ref="fullName" name="fullName" id="fullName" data-text="fullName" onChange={this.handleChange}  value={this.state.fullName}
                                          placeholder="Full Name"/>
                                        </div>                                      
                                      </span>
                                    </div>                                  
                                    <div className="col-lg-3 col-md-3 col-xs-12 col-sm-6 inputContent">
                                      <label className="formLable col-lg-12 col-md-12">Mobile Number</label>
                                      <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 blocking-span">
                                        <div className="input-group inputBox-main" >
                                          <div className="input-group-addon remove_brdr inputIcon">
                                            <i className="fa fa-envelope-square"></i>
                                          </div>
                                          <InputMask mask="9999999999" pattern="^(0|[1-9][0-9-]*)$" 
                                          className= "form-control UMname inputText form-control  has-content"
                                          ref="mobileNumber" name="mobileNumber" id="mobileNumber" data-text="mobileNumber" placeholder="Mobile Number"
                                          onChange={this.handleChange} value={this.state.mobileNumber}/>
                                        </div>                                      
                                      </span>
                                    </div>                                  
                                    <div className="col-lg-3 col-md-3 col-xs-12 col-sm-6 inputContent">
                                      <label className="formLable col-lg-12 col-md-12">WhatsApp Number</label>
                                      <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 blocking-span">
                                        <div className="input-group inputBox-main" >
                                          <div className="input-group-addon remove_brdr inputIcon">
                                            <i className="fa fa-envelope-square"></i>
                                          </div>
                                          <InputMask mask="9999999999" pattern="^(0|[1-9][0-9-]*)$" 
                                          className= "form-control UMname inputText form-control  has-content"
                                          ref="whatsAppNumber" name="whatsAppNumber" id="whatsAppNumber" data-text="whatsAppNumber" placeholder="WhatsApp Number"
                                          onChange={this.handleChange} value={this.state.whatsAppNumber}/>
                                        </div>                                      
                                      </span>
                                    </div>                                  
                                  </div>
                                  <div className="signuppp col-lg-12 col-md-12 col-sm-12 col-xs-12 margbottom20 createusr ">
                                    <div className="col-lg-3 col-md-3 col-xs-12 col-sm-6 inputContent">
                                      <label className="formLable col-lg-12 col-md-12">Relative Name</label>
                                      <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 blocking-span">
                                        <div className="input-group inputBox-main" >
                                          <div className="input-group-addon remove_brdr inputIcon">
                                            <i className="fa fa-envelope-square"></i>
                                          </div>
                                          <input type="text" className="formFloatingLabels form-control newinputbox" 
                                          ref="relativeName" name="relativeName" id="relativeName" data-text="relativeName" onChange={this.handleChange}  value={this.state.relativeName}
                                          placeholder="Relative Name"/>
                                        </div>                                      
                                      </span>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-xs-12 col-sm-6 inputContent">
                                      <label className="formLable col-lg-12 col-md-12">Pin Code</label>
                                      <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 blocking-span">
                                        <div className="input-group inputBox-main" >
                                          <div className="input-group-addon remove_brdr inputIcon">
                                            <i className="fa fa-envelope-square"></i>
                                          </div>
                                          <input type="text" className="formFloatingLabels form-control newinputbox" 
                                          ref="pinCode" name="pinCode" id="pinCode" data-text="pinCode" onChange={this.handleChange} value={this.state.pinCode}
                                          placeholder="Pin Code"/>
                                        </div>                                      
                                      </span>
                                    </div>                                  
                                    <div className="col-lg-3 col-md-3 col-xs-12 col-sm-6 inputContent">
                                      <label className="formLable col-lg-12 col-md-12">Relation</label>
                                      <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 blocking-span">
                                        <div className="input-group inputBox-main" >
                                          <div className="input-group-addon remove_brdr inputIcon">
                                            <i className="fa fa-envelope-square"></i>
                                          </div>
                                          <input type="text" className="formFloatingLabels form-control newinputbox" 
                                          ref="relation" name="relation" id="relation" data-text="relation" onChange={this.handleChange}  value={this.state.relation}
                                          placeholder="Relation"/>
                                        </div>                                      
                                      </span>
                                    </div>   
                                    <div className="col-lg-3 col-md-3 col-xs-12 col-sm-6 inputContent">
                                      <label className="formLable col-lg-12 col-md-12">Cast</label>
                                      <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 blocking-span">
                                        <div className="input-group inputBox-main" >
                                          <div className="input-group-addon remove_brdr inputIcon">
                                            <i className="fa fa-envelope-square"></i>
                                          </div>
                                          <input type="text" className="formFloatingLabels form-control newinputbox" 
                                          ref="cast" name="cast" id="cast" data-text="cast" onChange={this.handleChange}  value={this.state.cast}
                                          placeholder="Enter Caste"/>
                                        </div>                                      
                                      </span>
                                    </div>                               
                                  </div>
                                  <div className="signuppp col-lg-12 col-md-12 col-sm-12 col-xs-12 margbottom20 createusr">
                                    <div className="col-lg-3 col-md-3 col-xs-12 col-sm-6 inputContent">
                                      <label className="formLable col-lg-12 col-md-12">Part No</label>
                                      <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 blocking-span">
                                        <div className="input-group inputBox-main" >
                                          <div className="input-group-addon remove_brdr inputIcon">
                                            <i className="fa fa-envelope-square"></i>
                                          </div>
                                          <input type="text" className="formFloatingLabels form-control newinputbox" 
                                          ref="partNo" name="partNo" id="partNo" data-text="partNo" onChange={this.handleChange}  value={this.state.partNo}
                                          placeholder="Enter Caste"/>
                                        </div>                                      
                                      </span>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-xs-12 col-sm-6 inputContent">
                                      <label className="formLable col-lg-12 col-md-12">Age</label>
                                      <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 blocking-span">
                                        <div className="input-group inputBox-main" >
                                          <div className="input-group-addon remove_brdr inputIcon">
                                            <i className="fa fa-envelope-square"></i>
                                          </div>
                                          <input type="text" className="formFloatingLabels form-control newinputbox" 
                                          ref="age" name="age" id="age" data-text="age" onChange={this.handleChange}  value={this.state.age}
                                          placeholder="Age"/>
                                        </div>                                      
                                      </span>
                                    </div>                                  
                                    <div className="col-lg-3 col-md-3 col-xs-12 col-sm-6 inputContent">
                                      <label className="formLable col-lg-12 col-md-12">Gender</label>
                                      <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 blocking-span">
                                        <div className="input-group inputBox-main" >
                                          <div className="input-group-addon remove_brdr inputIcon">
                                            <i className="fa fa-envelope-square"></i>
                                          </div>
                                          <input type="text" className="formFloatingLabels form-control newinputbox" 
                                          ref="gender" name="gender" id="gender" data-text="gender" onChange={this.handleChange}  value={this.state.gender}
                                          placeholder="Gender"/>
                                        </div>                                      
                                      </span>
                                    </div>                                  
                                    <div className="col-lg-3 col-md-3 col-xs-12 col-sm-6 inputContent">
                                      <label className="formLable col-lg-12 col-md-12">House Number</label>
                                      <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 blocking-span">
                                        <div className="input-group inputBox-main" >
                                          <div className="input-group-addon remove_brdr inputIcon">
                                            <i className="fa fa-envelope-square"></i>
                                          </div>
                                          <input type="text" className="formFloatingLabels form-control newinputbox" 
                                          ref="houseNumber" name="houseNumber" id="houseNumber" data-text="houseNumber" onChange={this.handleChange}  value={this.state.houseNumber}
                                          placeholder="House No."/>
                                        </div>
                                      </span>
                                    </div>                                  
                                  </div> 
                                  <div className="signuppp col-lg-12 col-md-12 col-sm-12 col-xs-12 margbottom20 createusr ">
                                    <div className="col-lg-3 col-md-3 col-xs-12 col-sm-6 inputContent">
                                      <label className="formLable col-lg-12 col-md-12">Changed Address</label>
                                      <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 blocking-span">
                                        <div className="input-group inputBox-main" >
                                          <div className="input-group-addon remove_brdr inputIcon">
                                            <i className="fa fa-envelope-square"></i>
                                          </div>
                                          <input type="text" className="formFloatingLabels form-control  newinputbox" 
                                          ref="changeAddress" name="changeAddress" id="changeAddress" data-text="changeAddress" onChange={this.handleChange}  value={this.state.changeAddress}
                                          placeholder="Enter Address"/>
                                        </div>
                                      </span>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-xs-12 col-sm-6 inputContent">
                                      <label className="formLable col-lg-12 col-md-12">Area Name</label>
                                      <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 blocking-span">
                                        <div className="input-group inputBox-main" >
                                          <div className="input-group-addon remove_brdr inputIcon">
                                            <i className="fa fa-envelope-square"></i>
                                          </div>
                                          <input type="text" className="formFloatingLabels form-control  newinputbox" 
                                          ref="areaName" name="areaName" id="areaName" data-text="areaName" onChange={this.handleChange} value={this.state.areaName}
                                          placeholder="Enter Area Name"/>
                                        </div>
                                      </span>
                                    </div>                                  
                                    <div className="col-lg-3 col-md-3 col-xs-12 col-sm-6 inputContent">
                                      <label className="formLable col-lg-12 col-md-12">Other Info</label>
                                      <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 blocking-span">
                                        <div className="input-group inputBox-main" >
                                          <div className="input-group-addon remove_brdr inputIcon">
                                            <i className="fa fa-envelope-square"></i>
                                          </div>
                                          <input type="text" className="formFloatingLabels form-control  newinputbox" 
                                          ref="otherInfo" name="otherInfo" id="otherInfo" data-text="otherInfo" onChange={this.handleChange} value={this.state.otherInfo}
                                          placeholder="Enter Other Info"/>
                                        </div>
                                      </span>
                                    </div>                                  
                                    <div className="col-lg-3 col-md-3 col-xs-12 col-sm-6 inputContent">
                                      <label className="formLable col-lg-12 col-md-12">Date of Birth</label>
                                      <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 blocking-span">
                                        <div className="input-group inputBox-main" >
                                          <div className="input-group-addon remove_brdr inputIcon">
                                            <i className="fa fa-envelope-square"></i>
                                          </div>
                                          <input type="date" className="formFloatingLabels form-control newinputbox" 
                                          ref="dob" name="dob" id="dob" data-text="dob" onChange={this.handleChange} max="2001-06-01" onKeyDown={e=>{e.preventDefault()}} value={this.state.dob}
                                          placeholder="Enter Date of Birth"/>
                                        </div>
                                      </span>
                                      {this.state.formerrors.constituencyName &&(
                                        <span className="text-danger">{this.state.formerrors.constituencyName}</span> 
                                      )}
                                    </div>                                  
                                  </div> 
                                <div className="signuppp col-lg-12 col-md-12 col-sm-12 col-xs-12 margbottom30 createusr">
                                  <div className="col-lg-3 col-md-3 col-xs-12 col-sm-6 inputContent">
                                      <label className="formLable col-lg-12 col-md-12">Email ID</label>
                                      <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 blocking-span">
                                        <div className="input-group inputBox-main" >
                                          <div className="input-group-addon remove_brdr inputIcon">
                                            <i className="fa fa-envelope-square"></i>
                                          </div>
                                          <input type="text" className="formFloatingLabels form-control newinputbox" 
                                          ref="emailId" name="emailId" id="emailId" data-text="emailId" onChange={this.handleChange}  value={this.state.emailId}
                                          placeholder="Enter Email Id"/>
                                        </div>
                                      </span>
                                    </div>                                  
                                    <div className="col-lg-3 col-md-3 col-xs-12 col-sm-6 inputContent">
                                      <label className="formLable col-lg-12 col-md-12">Aadhar Card</label>
                                      <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 blocking-span">
                                        <div className="input-group inputBox-main" >
                                          <div className="input-group-addon remove_brdr inputIcon">
                                            <i className="fa fa-envelope-square"></i>
                                          </div>
                                          <InputMask mask="9999-9999-9999" pattern="^(0|[1-9][0-9-]*)$" 
                                          className= "form-control UMname inputText form-control  has-content"
                                          ref="aadharCard" name="aadharCard" id="aadharCard" data-text="aadharCard" placeholder="Enter AadharCard Number"
                                          onChange={this.handleChange} value={this.state.aadharCard}/>
                                        </div>
                                      </span>
                                    </div>                                  
                                  <div className=" col-lg-6 col-md-6 col-xs-12 col-sm-12 inputContent">
                                    <label className="formLable col-lg-12 col-md-12">Color<label className="requiredsign">*</label></label>
                                      <span className="blocking-span col-lg-12 col-md-12 col-xs-12 col-sm-12 emailfixdomain">
                                        <div className="input-group inputBox-main" >
                                          <input type="button" name="color" value={1} className={this.state.color === 1 ? "btn btn-success btn-lg pad15":"btn btn-success pad15"} onClick={this.handleChangeBtn}/>
                                          <input type="button" name="color" value={2} className={this.state.color === 2 ? "btn btn-primary btn-lg pad15":"btn btn-primary pad15"} onClick={this.handleChangeBtn}/>
                                          <input type="button" name="color" value={3} className={this.state.color === 3 ? "btn btn-info btn-lg pad15":"btn btn-info pad15"} onClick={this.handleChangeBtn}/>
                                          <input type="button" name="color" value={4} className={this.state.color === 4 ? "btn btn-warning btn-lg pad15":"btn btn-warning pad15"} onClick={this.handleChangeBtn}/>
                                          <input type="button" name="color" value={5} className={this.state.color === 5 ? "btn btn-danger btn-lg pad15":"btn btn-danger pad15"} onClick={this.handleChangeBtn}/>
                                        </div>
                                      </span>
                                      {this.state.formerrors.color &&(
                                        <span className="text-danger">{this.state.formerrors.color}</span> 
                                      )}
                                  </div>
                                </div>                                
                                <div className="signuppp col-lg-12 col-md-12 col-sm-12 col-xs-12 margbottom30 createusr">
                                  <div className="col-lg-3 col-md-3 col-xs-6 col-sm-6 inputContent">
                                    <label className="formLable col-lg-12 col-md-12">Favourite<label className="requiredsign">*</label></label>
                                      <span className="blocking-span col-lg-12 col-md-12 col-xs-12 col-sm-12 emailfixdomain">
                                        <div className="input-group inputBox-main" >
                                        {this.state.favourite==true ?
                                          <label className="switch" title="Click mark as a voted">
                                            <input type="checkbox" id="togBtn" name="non-favourite" onClick={this.toggleEventHandle.bind(this)} checked="checked" />
                                            <div className="slider round">
                                              <span className="on">Yes</span><span className="off">No</span>
                                            </div>
                                          </label>
                                          :
                                          <label className="switch" title="Click to mark as a non-voted">
                                            <input type="checkbox" id="togBtn" name="favourite" onClick={this.toggleEventHandle.bind(this)} checked={this.state.favourite===true} />
                                            <div className="slider round">
                                              <span className="on">Yes</span><span className="off">No</span>
                                            </div>
                                          </label>
                                        }
                                        </div>
                                      </span>
                                      {this.state.formerrors.favourite &&(
                                        <span className="text-danger">{this.state.formerrors.favourite}</span> 
                                      )}
                                  </div>
                                  <div className="col-lg-3 col-md-3 col-xs-6 col-sm-6 inputContent">
                                    <label className="formLable col-lg-12 col-md-12">Alive/Dead<label className="requiredsign">*</label></label>
                                      <span className="blocking-span col-lg-12 col-md-12 col-xs-12 col-sm-12 emailfixdomain">
                                        <div className="input-group inputBox-main" >
                                        {this.state.dead==false ?
                                          <label className="switch" title="Click mark as a voted">
                                            <input type="checkbox" id="togBtn" name="dead" onClick={this.toggleEventHandle.bind(this)} checked="checked" />
                                            <div className="slider round">
                                              <span className="on">Alive</span><span className="off">Dead</span>
                                            </div>
                                          </label>
                                          :
                                          <label className="switch" title="Click to mark as a non-voted">
                                            <input type="checkbox" id="togBtn" name="alive" onClick={this.toggleEventHandle.bind(this)} checked={this.state.dead===false} />
                                            <div className="slider round">
                                              <span className="on">Alive</span><span className="off">Dead</span>
                                            </div>
                                          </label>
                                        }
                                        </div>
                                      </span>
                                      {this.state.formerrors.dead &&(
                                        <span className="text-danger">{this.state.formerrors.dead}</span> 
                                      )}
                                  </div>
                                  <div className="col-lg-3 col-md-3 col-xs-6 col-sm-6 inputContent">
                                    <label className="formLable col-lg-12 col-md-12">visited<label className="requiredsign">*</label></label>
                                      <span className="blocking-span col-lg-12 col-md-12 col-xs-12 col-sm-12 emailfixdomain">
                                        <div className="input-group inputBox-main" >
                                        {this.state.visited==true ?
                                          <label className="switch" title="Click mark as a voted">
                                            <input type="checkbox" id="togBtn" name="non-visited" onClick={this.toggleEventHandle.bind(this)} checked="checked" />
                                            <div className="slider round">
                                              <span className="on">Yes</span><span className="off">No</span>
                                            </div>
                                          </label>
                                          :
                                          <label className="switch" title="Click to mark as a non-voted">
                                            <input type="checkbox" id="togBtn" name="visited" onClick={this.toggleEventHandle.bind(this)} checked={this.state.visited===true} />
                                            <div className="slider round">
                                              <span className="on">Yes</span><span className="off">No</span>
                                            </div>
                                          </label>
                                        }
                                        </div>
                                      </span>
                                      {this.state.formerrors.visited &&(
                                        <span className="text-danger">{this.state.formerrors.visited}</span> 
                                      )}
                                  </div>
                                  <div className="col-lg-3 col-md-3 col-xs-6 col-sm-6 inputContent">
                                    <label className="formLable col-lg-12 col-md-12">Voted<label className="requiredsign">*</label></label>
                                      <span className="blocking-span col-lg-12 col-md-12 col-xs-12 col-sm-12 emailfixdomain">
                                        <div className="input-group inputBox-main" >
                                        {this.state.voted==true ?
                                          <label className="switch" title="Click mark as a voted">
                                            <input type="checkbox" id="togBtn" name="non-voted" onClick={this.toggleEventHandle.bind(this)} checked="checked" />
                                            <div className="slider round">
                                              <span className="on">Yes</span><span className="off">No</span>
                                            </div>
                                          </label>
                                          :
                                          <label className="switch" title="Click to mark as a non-voted">
                                            <input type="checkbox" id="togBtn" name="voted" onClick={this.toggleEventHandle.bind(this)} checked={this.state.voted===true} />
                                            <div className="slider round">
                                              <span className="on">Yes</span><span className="off">No</span>
                                            </div>
                                          </label>
                                        }
                                        </div>
                                      </span>
                                      {this.state.formerrors.voted &&(
                                        <span className="text-danger">{this.state.formerrors.voted}</span> 
                                      )}
                                  </div>
                                  <div className=" col-lg-12 col-md-12 col-xs-12 col-sm-12 ">
                                    <button className="col-lg-2 col-md-2 col-xs-12 col-sm-12 col-xs-12 pull-right btn btnSubmit topMargin outlinebox" onClick={this.createVoter.bind(this)} >Submit</button>
                                  </div>
                                </div>   
                              </div>  
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>   
            </div>
          </div>
        </div>
        );
    } 
}
export default CreateVoter;