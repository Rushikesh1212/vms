import React, { Component } from 'react';
import axios                from 'axios';
import swal                 from 'sweetalert';
import $ 					          from 'jquery';
import ReactTable           from 'react-table';
import moment               from 'moment';
import './ContactList.css';
import 'react-table/react-table.css';

class ContactList extends Component {
	constructor(props){
		super(props);
		this.state = {
        "mobileNumber"    : "",
        "whatsAppNumber"  : "",
        "dead"            : false,
        "visited"         : true,
        "voted"           : false,
        "changeAddress"   : "",
        "areaName"        : "",
        "otherInfo"       : "",
        "dob"             : "21-10-2001",
        "emailId"         : "",
        "aadharCard"      : "",
        "color"           : 2,
        "cast"            : "",
        "featured"        : false,
        voter_id          : "",
        allPosts          : [],
        info              : [],
        editUser          : "",
        show              : true,
        firstname         : "",
        lastname          : "",
        signupEmail       : "",
        mobNumber         : "",
        action            : "Submit",
        toggleEventHandle : "",
        toggleStatus      : "off",
        formerrors        :{
                            firstName:"",
                            lastName:"",
                            emailId:"",
                            mobileNumber:"",
                            role: "User",
                           },
      voterName           : "",
      voterId             : "",                        
		}
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeBtn = this.handleChangeBtn.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
	}

  componentDidMount(){	
    axios
      .get('/api/voters/get/')
      .then(
        (res)=>{
          console.log('res', res.data);
          const postsdata = res.data;
          // console.log('postsdata',postsdata);
          this.setState({
            allPosts : postsdata,
          });         
        }
      )
      .catch((error)=>{
        console.log("error = ",error);
        // alert("Something went wrong! Please check Get URL.");
      });
  }

  handleChangeBtn(event){
    event.preventDefault();
    var color = event.target.getAttribute("value");
    console.log("color = ",color, typeof color);
    this.setState({
      color : parseInt(color),
    }); 
  }

  handleChange(event){
    event.preventDefault();
    const datatype = event.target.getAttribute('data-text');
    const {name,value} = event.target;
    let formerrors = this.state.formerrors;
    
    // switch (datatype){
    //   case 'firstname' : 
    //     formerrors.firstname = nameRegex.test(value)  && value.length>0 ? '' : "Please Enter Valid Name";
    //     break;

    //   case 'lastname' : 
    //    formerrors.lastname = nameRegex.test(value)  && value.length>0 ? '' : "Please Enter Valid Name";
    //    break;

    //   case 'mobNumber' : 
    //    formerrors.mobNumber = mobileRegex.test(value) && value.length>0 ? '' : "Please enter a valid Contact Number";
    //    break;

    //   case 'signupEmail' : 
    //    formerrors.signupEmail = emailRegex.test(value)  && value.length>0? "":"Please enter a valid Email ID";
    //    break;

    //   case 'role' : 
    //     formerrors.role =  value!= "--select--" ? "":"Please select role";
    //     break;
      
    //   default :
    //   break;

    // }
    console.log("value",value);
    this.setState({ formerrors,
      [name]:value
    });
  }

  handleSearch(event){
    event.preventDefault();
   const {name,value} = event.target;
   this.setState({
      [name]:value
    },()=>{
      var formValues = {
        voterName :this.state.voterName,
        idNumber  :this.state.voterId,
        "featured"    :"",
        "mobileNumber":"",
        "voted"       :"",
        "visited"     :"",
        "dead"        :"",
        "aadharCard"  :"",
        "cast"        :"",
        "areaName"    :"",
        "boothName"   :"",
        "voterAgeFrom":"",
      }
       axios
      .post('/api/search/voters',formValues)
      .then(
        (res)=>{
          console.log('res', res.data);
          const postsdata = res.data;
          // console.log('postsdata',postsdata);
          this.setState({
            allPosts : postsdata,
          });         
        }
      )
      .catch((error)=>{
        console.log("error = ",error);
        // alert("Something went wrong! Please check Get URL.");
      });
    });
 
  }

  toggleEventHandle(event){
    var name = $(event.target).attr('name');
      console.log("name = ",name);
      if(name=="featured"){
        this.setState({
          featured : true,
        })
      }else if(name=="non-featured"){
        this.setState({
          featured : false,
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

	voterList(voterList){
      $('body').removeClass("modal-open");

		  this.setState({
        allPosts:voterList
      })
    }

	closeModal(event){
		 $('#deleteModal').removeClass("in");
		 $('#deleteModal').css("display","none");
	}

  updateData(event){
    event.preventDefault();
    if(this.state.mobileNumber!=="" && this.state.dob!==""){
    const formValues = {
        "voter_id"        : this.state.voter_id,
        "mobileNumber"    : this.state.mobileNumber,
        "whatsAppNumber"  : this.state.whatsAppNumber,
        "dead"            : this.state.dead,
        "visited"         : /*this.state.visited*/true,
        "voted"           : this.state.voted,
        "changeAddress"   : this.state.changeAddress,
        "areaName"        : this.state.areaName,
        "otherInfo"       : this.state.otherInfo,
        "dob"             : this.state.dob?moment(this.state.dob).format('DD-MM-YYYY'):this.state.dob,
        "emailId"         : this.state.emailId,
        "aadharCard"      : this.state.aadharCard,
        "color"           : this.state.color,
        "cast"            : this.state.cast,
        "featured"        : this.state.featured,
        "userId"          : localStorage.getItem('admin_ID'),
       }
       console.log("dk == ",formValues);
          // if(this.state.firstName!="" && this.state.lastName !="" && this.state.emailId && this.state.mobileNumber ){
        axios
          .patch('/api/voters/patch/',formValues)
          .then((res)=>{
              console.log("response123 = ",res.data);
                $('body').removeClass("modal-open");
                this.setState({
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
                  "color"           : 2,
                  "cast"            : "",
                  "featured"        : false,
                })
                axios
                  .get('/api/voters/get/')
                  .then((res)=>{
                      this.setState({
                        allPosts : res.data,
                      },()=>{
                        // swal("User updated successfully", "", "success");
                        swal("User updated successfully", "", "success")
                        .then(function(){ 
                              window.location.reload();
                           }
                        );
                    });         
                  })
                  .catch((error)=>{
                    console.log("error = ",error);
                  }); 
            })
            .catch((error)=>{
              console.log("error = ",error);
              this.setState({show: false})
            });

      }else{
        swal("Please enter mandatory fields", "", "warning");
        console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
      }
  }

  handleEdit(row){
    console.log("row",row);
    // var userData=row.profile;
    this.setState({
      "mobileNumber"    : row.mobileNumber,
      "whatsAppNumber"  : row.whatsAppNumber,
      "dead"            : row.dead,
      "visited"         : true,
      "voted"           : row.voted,
      "changeAddress"   : row.changeAddress,
      "areaName"        : row.areaName,
      "otherInfo"       : row.otherInfo,
      "dob"             : moment(row.dob).format('YYYY-MM-DD'),
      "emailId"         : row.emailId,
      "aadharCard"      : row.aadharCard,
      "color"           : row.color,
      "cast"            : row.cast,
      "featured"        : row.featured,
      info              : row,
      voter_id          : row._id,
    })
  }
	render(){
	  const data = this.state.allPosts;
	  const columns = [{
        Header: 'Voting Card No.',
        accessor: 'idNumber',
      },{
        Header: 'Full Name',
        accessor: 'fullName',
      },{
        Header: 'Marathi Name',
        accessor: 'mFullName',
      },{
        Header: 'Mobile No.',
        accessor: 'mobileNumber',
      }]

	var adminRolesListDataList = this.state.adminRolesListData;
	  return(
			<div className="modal-bodyuser">
		    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 box-header with-border nopaddingum2 margbottom30">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 paddingright">
						<h4 className="usrmgnttitle weighttitle">Village wise contact list</h4>
					</div>
				</div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="col-lg-offset-3 col-lg-6 col-md-offset-3 col-md-6 col-xs-12 col-sm-12 inputContent">
              <label className="formLable col-lg-12 col-md-12">Search By Village</label>
              <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 blocking-span">
                <div className="input-group inputBox-main" >
                  <div className="input-group-addon remove_brdr inputIcon">
                    <i className="fa fa-envelope-square"></i>
                  </div>
                  <input type="text" className="formFloatingLabels form-control newinputbox" 
                  refs="voterName" name="voterName" id="voterName" data-text="voterName" onChange={this.handleSearch}  value={this.state.voterName}
                  placeholder="Enter voter name..."/>
                </div>                                      
              </span>
          </div>
         </div>  
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 paddingright">
          <h4 className="usrmgnttitle weighttitle">List of Voters: </h4>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        {/*<div class="progress md-progress primary-color-dark">
            <div class="indeterminate"></div>
        </div>
        <canvas id="barChart"></canvas>*/}
  				<ReactTable
				    data={data}
				    columns={columns}
				    // filterable= {true}
				    sortable= {true}
				    showPagination= {true}
				    pageSizeOptions= {[1000, 5000, 10000, 15000, 20000, 25000]}
						defaultPageSize= {25000}
						minRows ={10}
            className ={"-striped -highlight"}
				  />
  		  </div>
      </div>
	  );
	}
}
export default ContactList;
