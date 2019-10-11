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
        villageList       : "",
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
    this.handleSearch = this.handleSearch.bind(this);
	}

  componentDidMount(){	
    axios
      .get('/api/voters/villagelist')
      .then(
        (res)=>{
          console.log('res ==', res.data);
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

  handleChange(event){
    event.preventDefault();
    const datatype = event.target.getAttribute('data-text');
    const {name,value} = event.target;
    let formerrors = this.state.formerrors;
    
    console.log("value",value);
    this.setState({ formerrors,
      [name]:value
    });
    axios
      .get('/api/voters/distinctBooth')
      .then((res)=>{
          console.log("response123 = ",res.data);
            $('body').removeClass("modal-open");
            this.setState({
              "mobileNumber"    : "",
              "whatsAppNumber"  : "",
              "featured"        : false,
            })
          
      })
      .catch((error)=>{
        console.log("error = ",error);
        this.setState({show: false})
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
    const formValues = {
        "voter_id"        : this.state.voter_id,
        "mobileNumber"    : this.state.mobileNumber,
        "whatsAppNumber"  : this.state.whatsAppNumber,
       }
       console.log("dk == ",formValues);
        
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
                  <select type="text" className="formFloatingLabels form-control newinputbox" 
                  ref="villageList" name="villageList" id="villageList" data-text="villageList" onChange={this.handleChange}  value={this.state.villageList}
                  placeholder="Enter Caste">
                    <option>----Select----</option>
                  {this.state.allPosts.map((villagelist)=>
                    <option>{villagelist}</option>
                    )
                  }
                  </select>
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
