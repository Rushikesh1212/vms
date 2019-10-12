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
        loading             : false,
        villageName         : "",
        allVillageList      : [],
        allVotersList       : [],
        villageWiseViterList: [],                        
		}
    this.handleChange = this.handleChange.bind(this);
	}

  componentDidMount(){	
    axios
      .get('/api/voters/villagelist')
      .then(
        (res)=>{
          this.setState({
            allVillageList : res.data,
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
    console.log("value",value);
    this.setState({"loading" : true})
    this.setState({
      [name]:value
    });
    var villageName ={villageName:value};
    axios
      .post('/api/voters/voterslist',villageName)
      .then((res)=>{
        console.log("response123 = ",res.data);
        this.setState({
          "villageWiseViterList" : res.data,
          "loading"              : false
        })
      })
      .catch((error)=>{
        console.log("error = ",error);
        this.setState({"loading" : false})
      });
  }

	render(){
	  const data = this.state.villageWiseViterList;
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
      },{
        Header: 'WhatsApp No.',
        accessor: 'whatsAppNumber',
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
                  ref="villageName" name="villageName" id="villageName" data-text="villageName" onChange={this.handleChange}  value={this.state.villageName}>
                    <option selected>----Select Village----</option>
                  {this.state.allVillageList.map((villageName)=>
                    <option>{villageName}</option>
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
        {this.state.loading===false?
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
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
        :
        <div className="col-lg-6 col-lg-offset-3">
          <img src="/images/loader.gif" width="100%" height="100%"/>
        </div>
      }
      </div>
	  );
	}
}
export default ContactList;
