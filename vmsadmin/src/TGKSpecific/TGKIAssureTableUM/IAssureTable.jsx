import React, { Component }       	from 'react';
import swal                     	from 'sweetalert';
import axios 						from 'axios';
import $ 							from 'jquery';
import jQuery 						from 'jquery';
import 'jquery-validation';
import './IAssureTable.css';

// import '../systemSecurity/SignUp.css';
/*import { BrowserRouter as Router,Link,Route,Switch } from 'react-router-dom';*/
import {   withRouter} from 'react-router-dom';

/*import UsereditModal   from '../userManagement/UM/UsereditModal.jsx';*/


// var sum = 0;
class IAssureTableUM extends Component {
	constructor(props){
		super(props);
		this.state = {
		    "tableData" 				: props && props.tableData ? props.tableData : [],
		    "tableHeading"				: props && props.tableHeading ? props.tableHeading : {},
		    "twoLevelHeader" 			: props && props.twoLevelHeader ? props.twoLevelHeader : {},
		    "reA" 						: /[^a-zA-Z]/g,
		    "reN" 						: /[^0-9]/g,
		    "sort" 	  					: true,
		    "examMasterData2" 			: '',
		    "paginationArray" 			: [],
		    "startRange" 				: 0,
		    "limitRange" 				: 10,
		    "activeClass" 				: 'activeQueDataCircle', 
		    "completeDataCount" 		: props && props.completeDataCount ? props.completeDataCount : 0,
		    "normalData" 				: true,
		    "resetPassword"				: "",
		    "resetPasswordConfirm" 		: "",
		    show 						: true,
		    selectedUser 				:[],
		    allid						:null,
		    searchTextInp 				: "",
		    // "usernames"					: "",
		}
		this.deleteExam = this.deleteExam.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	componentDidMount() {
      $("html,body").scrollTop(0); 
      // this.paginationFunction();
      // this.palindrome('Moam');
      // console.log('completeDataCount in table', this.state.completeDataCount);
      this.setState({
      	tableHeading	  : this.props.tableHeading,
      	tableData 		  : this.props.tableData,
      	completeDataCount : this.props.completeDataCount
      })
	}
	componentWillReceiveProps(nextProps) {
        this.setState({
            tableData	    : nextProps.tableData,
            completeDataCount : nextProps.completeDataCount,
            // unCheckedUser : nextProps.unCheckedUser
        },()=>{
        	this.paginationFunction();
        	// console.log('unCheckedUser', this.state.unCheckedUser);	
        })
        if(nextProps && nextProps.unCheckedUser){
        	nextProps.unCheckedUser.map((id, i)=>{
        	
	        	this.setState({
	        		[id] : false,
	        	},()=>{
	        		console.log(" selectedUser in receive props", this.state.selectedUser);
	        	})
        	})
        }
    }
	componentWillUnmount(){
    	$("script[src='/js/adminSide.js']").remove();
    	$("link[href='/css/dashboard.css']").remove();
	}

	edit(e){
		e.preventDefault();
		$("html,body").scrollTop(0);
		this.setState({'edit': true});
	}
    deleteExam(e){
	  	e.preventDefault();
		let id = e.target.getAttribute('id');
		// Meteor.call(this.state.tableObjects.deleteMethod ,id,(error,result)=>{
		// 	if(error){
		// 	}else{
		// 		swal({
		// 			title: 'abc',
		// 			text:result,
		// 			type:'success',
		// 			showCancelbutton: false,
		// 			confirmButtonColor: '#666',
		// 			confirmButtonText: 'Ok',
		// 			timer: 4000
		// 		});
		// 		this.props.compareLength();
		// 		this.props.getData();
				
		// 	}
	 //    });
    } 
    sort(event){
    	event.preventDefault();
    	var key = event.target.getAttribute('id');
    	var nameA = '';
    	var nameB = '';
    	var tableData = this.state.tableData;
    	if(this.state.sort == true){
    		if(key == 'number'){
				var reA = /[^a-zA-Z]/g;
				var reN = /[^0-9]/g;
				var aN = 0;
				var bN = 0;
    			var sortedData = tableData.sort((a, b)=> {
		    		Object.entries(a).map( 
						([key1, value1], i)=> {
							if(key == key1){
								nameA = value1.replace(reA, "");				
							}
						}
					);
					Object.entries(b).map( 
						([key2, value2], i)=> {
							if(key == key2){
								nameB = value2.replace(reA, "");
							}
						}
					);

					if (nameA === nameB) {
						Object.entries(a).map( 
							([key1, value1], i)=> {
								if(key == key1){
									aN = parseInt(value1.replace(reN, ""), 10);				
								}
							}
						);
						
						Object.entries(b).map( 
							([key1, value1], i)=> {
								if(key == key1){
									bN = parseInt(value1.replace(reN, ""), 10);					
								}
							}
						);

						if (aN < bN) {
							return -1;
						}
						if (aN > bN) {
							return 1;
						}
						return 0;

					} else {

						if (nameA < nameB) {
							return -1;
						}
						if (nameA > nameB) {
							return 1;
						}
						return 0;
					}
				});
    		}else{
    			var sortedData = tableData.sort((a, b)=> {
	    		Object.entries(a).map( 
					([key1, value1], i)=> {
						if(key == key1){
							if(jQuery.type( value1 ) == 'string'){
								nameA = value1.toUpperCase();
							}else{
								nameA = value1;
							}						
						}
					}
				);
				Object.entries(b).map( 
					([key2, value2], i)=> {
						if(key == key2){
							if(jQuery.type( value2 ) == 'string'){
								nameB = value2.toUpperCase();
							}else{
								nameB = value2;
							}	
						}
					}
				);

					if (nameA < nameB) {
						return -1;
					}
					if (nameA > nameB) {
						return 1;
					}
					return 0;
				});
    		}	
			this.setState({
				tableData : sortedData,
				sort 	  : false
			});
    	}else if(this.state.sort == false){
    		if(key == 'number'){
				var reA = /[^a-zA-Z]/g;
				var reN = /[^0-9]/g;
				var aN = 0;
				var bN = 0;
    			var sortedData = tableData.sort((a, b)=> {
		    		Object.entries(a).map( 
						([key1, value1], i)=> {
							if(key == key1){
								nameA = value1.replace(reA, "");				
							}
						}
					);
					Object.entries(b).map( 
						([key2, value2], i)=> {
							if(key == key2){
								nameB = value2.replace(reA, "");
							}
						}
					);

					if (nameA === nameB) {
						Object.entries(a).map( 
							([key1, value1], i)=> {
								if(key == key1){
									aN = parseInt(value1.replace(reN, ""), 10);			
								}
							}
						);
						
						Object.entries(b).map( 
							([key1, value1], i)=> {
								if(key == key1){
									bN = parseInt(value1.replace(reN, ""), 10);					
								}
							}
						);

						if (aN > bN) {
							return -1;
						}
						if (aN < bN) {
							return 1;
						}
						return 0;

					} else {

						if (nameA > nameB) {
							return -1;
						}
						if (nameA < nameB) {
							return 1;
						}
						return 0;
					}
				});
    		}else {
    			var sortedData = tableData.sort((a, b)=> {
	    		Object.entries(a).map( 
					([key1, value1], i)=> {
						if(key == key1){
							if(jQuery.type( value1 ) == 'string'){
								nameA = value1.toUpperCase();
							}else{
								nameA = value1;
							}						
						}
					}
				);
				Object.entries(b).map( 
					([key2, value2], i)=> {
						if(key == key2){
							if(jQuery.type( value2 ) == 'string'){
								nameB = value2.toUpperCase();
							}else{
								nameB = value2;
							}	
						}
					}
				);

					if (nameA > nameB) {
						return -1;
					}
					if (nameA < nameB) {
						return 1;
					}
					return 0;
				});
    		}    		
    		this.setState({
				tableData : sortedData,
				sort 	  : true
			});
    	}
    }
   	paginationFunction(event){
		var dataLen = this.state.completeDataCount > 20 || this.state.completeDataCount == 20 ? 20 : this.state.completeDataCount;
		var dataLength = this.state.completeDataCount;
		this.setState({
			dataLength : dataLen,
		},()=>{
			// console.log('completeDataCount=====:::', this.state.completeDataCount);
			// $('li').removeClass('activeQueDataCircle');
			// $(".queDataCircle:first").addClass('activeQueDataCircle');
			const maxRowsPerPage = this.state.limitRange;
			var paginationNum = dataLength/maxRowsPerPage;
			var pageCount = Math.ceil(paginationNum) > 20 ? 20 : Math.ceil(paginationNum);

			var paginationArray = [];
			for (var i=1; i<=pageCount;i++){
				var countNum = maxRowsPerPage * i;
				var startRange = countNum - maxRowsPerPage;
				if(i == 1){
					var activeClass = 'activeQueDataCircle';
				}else{
					activeClass = '';
				}
				paginationArray.push(
					<li key={i} className={"queDataCircle page-link "+activeClass+" parseIntagination"+i} id={countNum+'|'+startRange} onClick={this.getQuestionStartEndNum.bind(this)} title={"Click to jump on "+i+ " page"}>{i}</li>
				);
			}
			if(pageCount>=1){				
				this.setState({
					paginationArray : paginationArray,
				},()=>{
				});
			}
			return paginationArray;
		});
	}
	getQuestionStartEndNum(event){		
		var limitRange = $(event.target).attr('id').split('|')[0];
		var limitRange2     = parseInt(limitRange);
		var startRange = parseInt($(event.target).attr('id').split('|')[1]);
		this.props.getData(startRange, limitRange);
		this.setState({
			startRange:startRange,
		});
		$('li').removeClass('activeQueDataCircle');
		if(limitRange2){
			 $(event.target).addClass('activeQueDataCircle');
		}
		var counter = $(event.target).text();
	}
	setLimit(event){
		event.preventDefault();
		var limitRange = parseInt(this.refs.limitRange.value);
		var startRange = 0;
		this.setState({
			"limitRange":limitRange,
			"startRange":0

		},()=>{
			this.paginationFunction();
			if(this.state.normalData == true){
				this.props.getData(startRange, this.state.limitRange);
			}	
			if(this.state.searchData == true){
				this.tableSearch();
			}
		});	
	}
	tableSearch(){
    	var searchText = this.refs.tableSearch.value;

    	this.setState({
    		searchTextInp : searchText,
    	});
    	console.log("here search data",searchText);
    	var formValues =
    	{
			searchText : searchText,
		}
		 if(searchText && searchText.length != 0) {
					axios
				      .post('/api/users/post/searchValue',formValues)
				      .then(
				        (res)=>{
				          console.log('res', res);
				          // swal("Search successfull by "+searchText+ "","success");
				          var data = res.data.data;
				          var tableData = data.map((a, i)=>{
								return {
									_id 			: a._id ? a._id : '-' ,
									fullName        : a.profile.fullName ? a.profile.fullName : '-',
					                emailId    		: a.profile.emailId ? a.profile.emailId : '-',
					                mobileNumber    : a.profile.mobileNumber ? a.profile.mobileNumber :'-', 
					                status        	: a.profile.status ? a.profile.status : '-',	
					                roles 			: ((a.roles.map((b, i)=>{return '<p>'+b+'</p>'})).toString()).replace(/,/g, " "),
								}
							})
				          	this.setState({
				              tableData 		: tableData,          
				            },()=>{
				            })
				        }).catch((error)=>{ 
				        	// swal("No results found","","error");
				      });
			}else{

				console.log("there is no value");
				 // console.log('completeDataCount in table', this.state.completeDataCount);
			      this.setState({
			      	tableHeading	  : this.props.tableHeading,
			      	tableData 		  : this.props.tableData,
			      	completeDataCount : this.props.completeDataCount
			      })
			}
		// if(searchText && searchText.length != 0) {
		// 	this.setState({
		// 		"normalData"  : false,
		// 		"searchData"  : true,
		// 	},()=>{
		// 		this.props.getSearchText(searchText, this.state.startRange, this.state.limitRange);
		// 	});	    	
	 //    }else{
		// 	this.props.getData(this.state.startRange, this.state.limitRange);
	 //    }
    	 
    }
    finalSearch(){

    	var data = this.state.searchTextInp;
    	console.log("here data",data);
    	
    }
    showNextPaginationButtons(){
    	var beforeDataLength = this.state.dataLength > 0 ? this.state.dataLength : 20;
		if(beforeDataLength != this.state.completeDataCount){
			this.setState({
				dataLength : (beforeDataLength+ 20) > this.state.completeDataCount ? this.state.completeDataCount : (beforeDataLength+ 20),
			},()=>{
				$('li').removeClass('activeQueDataCircle');
				$(".queDataCircle:first").addClass('activeQueDataCircle');
				const maxRowsPerPage = this.state.limitRange;
				var dataLength = this.state.dataLength;
				var paginationNum = parseInt(dataLength)/maxRowsPerPage;
				var pageCount = Math.ceil(paginationNum);

				var paginationArray = [];

				for (var i=beforeDataLength+1; i<=pageCount;i++){
					var countNum = maxRowsPerPage * i;
					var startRange = countNum - maxRowsPerPage;
					if(i == beforeDataLength+1){
						var activeClass = 'activeQueDataCircle';
					}else{
						activeClass = '';
					}
					paginationArray.push(
						<li key={i} className={"queDataCircle page-link "+activeClass+" parseIntagination"+i} id={countNum+'|'+startRange} onClick={this.getQuestionStartEndNum.bind(this)} title={"Click to jump on "+i+ " page"}>{i}</li>
					);
				}
				if(pageCount>=1){				
					this.setState({
						paginationArray : paginationArray,
					});
				}
				return paginationArray;
			});
		}		
    }
    showPreviousPaginationButtons(){
    	var beforeDataLength = this.state.dataLength;
		
		this.setState({
			dataLength : beforeDataLength > 20 ? beforeDataLength- this.state.paginationArray.length : 0,
		},()=>{
			$('li').removeClass('activeQueDataCircle');
			$(".queDataCircle:first").addClass('activeQueDataCircle');
			const maxRowsPerPage = this.state.limitRange;
			var dataLength = this.state.dataLength;
			var paginationNum = parseInt(dataLength)/maxRowsPerPage;
			if(dataLength != 0 && paginationNum!= 0){
				var pageCount = Math.ceil(paginationNum);
				var paginationArray = [];
				var forLoop = (beforeDataLength-this.state.paginationArray.length) < 0 ?  1: beforeDataLength-this.state.paginationArray.length;
				for (var i=forLoop-19; i<=pageCount;i++){
					var countNum = maxRowsPerPage * i;
					var startRange = countNum - maxRowsPerPage;
					if(i == beforeDataLength-39 || i == 1){
						var activeClass = 'activeQueDataCircle';
					}else{
						activeClass = '';
					}
					paginationArray.push(
						<li key={i} className={"queDataCircle page-link "+activeClass+" parseIntagination"+i} id={countNum+'|'+startRange} onClick={this.getQuestionStartEndNum.bind(this)} title={"Click to jump on "+i+ " page"}>{i}</li>
					);
				}
				if(pageCount>=1){				
					this.setState({
						paginationArray : paginationArray,
					});
				}
				return paginationArray;
			}			
		});
    }
    showFirstTweentyButtons(){
    	var beforeDataLength = this.state.completeDataCount;
		
		this.setState({
			dataLength : 20,
		},()=>{
			$('li').removeClass('activeQueDataCircle');
			$(".queDataCircle:first").addClass('activeQueDataCircle');
			const maxRowsPerPage = this.state.limitRange;
			var dataLength = this.state.dataLength;
			var paginationNum = parseInt(dataLength)/maxRowsPerPage;
			if(dataLength != 0 && paginationNum!= 0){
				var pageCount = Math.ceil(paginationNum);
				var paginationArray = [];

				for (var i=1; i<=pageCount;i++){
					var countNum = maxRowsPerPage * i;
					var startRange = countNum - maxRowsPerPage;
					if(i == 1){
						var activeClass = 'activeQueDataCircle';
					}else{
						activeClass = '';
					}
					paginationArray.push(
						<li key={i} className={"queDataCircle page-link "+activeClass+" parseIntagination"+i} id={countNum+'|'+startRange} onClick={this.getQuestionStartEndNum.bind(this)} title={"Click to jump on "+i+ " page"}>{i}</li>
					);
				}
				if(pageCount>=1){				
					this.setState({
						paginationArray : paginationArray,
					});
				}
				return paginationArray;
			}			
		});
    }
    showLastTweentyButtons(){
    	var beforeDataLength = this.state.dataLength;
		
		this.setState({
			dataLength : this.state.completeDataCount,
		},()=>{
			$('li').removeClass('activeQueDataCircle');
			$(".queDataCircle:first").addClass('activeQueDataCircle');
			const maxRowsPerPage = this.state.limitRange;
			var dataLength = this.state.dataLength;
			var paginationNum = parseInt(dataLength)/maxRowsPerPage;
			if(dataLength != 0 && paginationNum!= 0){
				var pageCount = Math.ceil(paginationNum);
				var paginationArray = [];

				for (var i=(this.state.completeDataCount - 20)+1; i<=pageCount;i++){
					var countNum = maxRowsPerPage * i;
					var startRange = countNum - maxRowsPerPage;
					if(i == 1 || i == (this.state.completeDataCount - 20)+1){
						var activeClass = 'activeQueDataCircle';
					}else{
						activeClass = '';
					}
					paginationArray.push(
						<li key={i} className={"queDataCircle page-link "+activeClass+" parseIntagination"+i} id={countNum+'|'+startRange} onClick={this.getQuestionStartEndNum.bind(this)} title={"Click to jump on "+i+ " page"}>{i}</li>
					);
				}
				if(pageCount>=1){				
					this.setState({
						paginationArray : paginationArray,
					});
				}
				return paginationArray;
			}			
		});
    }

    deleteUser(event){

    	event.preventDefault();
		var id = event.target.id;
		// console.log("id",id);
		const token = '';
		const url = '/api/users/delete/one/'+id ;
		const headers = {
			    "Authorization" : token,
			    "Content-Type" 	: "application/json",
			};
		axios({
			method: "DELETE",
			url : url,
			headers: headers,
			timeout: 3000,
			data: null,
		})
		.then((response)=> {
	    	// console.log('delete response',response);
	    	swal("User deleted successfully","", "success");

				    	var data = {
						"startRange"        : this.state.startRange,
			            "limitRange"        : this.state.limitRange, 
					}
					axios.post('/api/users/post/userslist', data)
					.then( (res)=>{      
						// console.log("herer",res);
						var tableData = res.data.map((a, i)=>{
							return {
								_id 			: a._id,
								fullName        : a.fullName ? a.fullName : "-",
				                emailId    		: a.emailId ? a.emailId : "-",
				                mobileNumber    : a.mobileNumber ? a.mobileNumber : "-", 
				                status        	: a.status ? a.status : "-",	
				                roles 			: a.roles ? a.roles : "-",
				                checked        : false,
							}
						})
						this.setState({
				          completeDataCount : res.data.length,
				          tableData 		: tableData,          
				        },()=>{
				        	console.log('tableData', this.state.tableData);
				        })
					})
					.catch((error)=>{
						console.log("error = ",error);
						// alert("Something went wrong! Please check Get URL.");
					});
		

		}).catch((error)=> {
		    console.log(error);
		});
    }

    changepassword(event){
		event.preventDefault();
		var id = event.target.id;
		console.log('id',id);
		var password 		= this.state["resetPassword"+id];
		var conPassword 	= this.state["resetPasswordConfirm"+id];

		
		// var newID 			= FlowRouter.getParam("mailId");
		var formValues ={
			"password" 	 : conPassword,
		}

		var newID 		=  $(event.target).attr('id');
		if(newID){
			var resetPassword = newID;
		}
			if(password != "" && conPassword != null)
			{
				if(password==conPassword){
					if(password.length >= 6){
						axios.put('/api/users/put/one/resetpwd/'+ newID, formValues)
					      .then( (res)=>{
					      	console.log("response-------------",res);
					  		  swal("Password has been changed successfully!!","", "success");
					          this.refs.resetPassword.value				= '';
					          this.refs.resetPasswordConfirm.value  	= '';
					          var modalid="RestpwdModal-"+id;
					  		  var modal = document.getElementById(modalid);
					  		  modal.style.display = "none";
	             			  $('.modal-backdrop').remove();
                    		  window.location.reload();

					      })
					      .catch((error)=>{
					        console.log("error = ",error);
					        swal("Sorry! Password could not be reset,please try again!","", "error");
					        var modalid="RestpwdModal-"+id;
					  		var modal = document.getElementById(modalid);
					        modal.style.display = "none";
	                        $('.modal-backdrop').remove();
                    		window.location.reload();


					      });
					}else{
						swal("Password should be at least 6 characters long","","error");				
					}
				}else{
					swal("Passwords don't match","","error");
				}
			}else{
				swal("Please enter mandatory fields", "", "warning");
          		console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
			}
	}


	handleChange(event){
        const target = event.target.value;
        const name   = event.target.name;
        // console.log('target',name, target);
          this.setState({ 
	      [name]:target
	    },()=>{
	    	// console.log('this state', this.state);
	    })
	}

    showSignPass(){
        $('.showPwd').toggleClass('showPwd1');
        $('.hidePwd').toggleClass('hidePwd1');
        return $('.inputTextPass').attr('type', 'text');
    }
    hideSignPass(){
        $('.showPwd').toggleClass('showPwd1');
        $('.hidePwd').toggleClass('hidePwd1');
        return $('.inputTextPass').attr('type', 'password');
    }

	showprofile(e){
		e.preventDefault();

		this.props.history.push('/edituserprofile/'+e.currentTarget.id );
	}


 checkAll(event) {
      if(event.target.checked){
        $('.userCheckbox').prop('checked',true);
        // var id = $('.userCheckbox').prop('id');
        let allid =[];
        allid = this.state.tableData.map((a,i)=>{
        	return a._id;
        });

        this.setState({
        	allid : allid,
        },()=>{
        	console.log("here id====================",this.state.allid);
        	 this.props.selectedUser(this.state.allid);
        })

       

        
      }else{
        $('.userCheckbox').prop('checked',false);
      }
    }
    uncheckAll(){

    }
	 

	selectedId(event){
		var selectedUser = this.state.selectedUser;
		var data = event.target.id;
		var value = event.target.checked;
		var index = event.target.getAttribute('data-index');
		console.log("index", index);
		this.props.tableData[index].checked = value;

		this.setState({
			[data] : value,
		},()=>{
			if(this.state[data] == true ){
				selectedUser.push(data);
				this.setState({
					selectedUser : selectedUser
				},()=>{
					console.log('selectedUser', this.state.selectedUser);
					this.props.selectedUser(this.state.selectedUser);
				})
			}
			// else{
			// 	selectedUser.pop(data);
			// 	this.setState({
			// 		selectedUser : selectedUser
			// 	},()=>{
			// 		console.log('selectedUser', this.state.selectedUser);
			// 		this.props.selectedUser(this.state.selectedUser);
			// 	})
			// }
			
			
		})
		
		
		
		
	}


	render() {
		// console.log(this.state.limitRange +'>='+  this.state.dataLength);
		// var x = Object.keys(this.state.tableHeading).length ;
		// var y = 4;
		// var z = 2;
        return (
	       	<div id="tableComponent" className="col-lg-12 col-sm-12 col-md-12 col-xs-12">	
	       		<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 NOpadding">
					<label className="col-lg-12 col-md-12 col-sm-12 col-xs-12 marginTop17 NOpadding">Users Per Page</label>
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
						<select onChange={this.setLimit.bind(this)} value={this.state.limitRange} id="limitRange" ref="limitRange" name="limitRange" className="col-lg-12 col-md-12 col-sm-6 col-xs-12  noPadding  form-control">
							<option value="Not Selected" disabled>Select Limit</option>
							<option value={10}>10</option>
							<option value={25}>25</option>
							<option value={50}>50</option>
							<option value={100}>100</option>
							<option value={500}>500</option>
						</select>
					</div>
				</div>           
				<div className="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-xs-12 col-sm-12 marginTop17 NOpadding">
	        		<label className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">Search</label>
	        		<div className="input-group">
				        <input type="text" onChange={this.tableSearch.bind(this)} placeholder="Search by user name" className="NOpadding-right zzero form-control" ref="tableSearch" id="tableSearch" name="tableSearch"/>
				    	<span className="input-group-addon" onClick={this.finalSearch.bind(this)}><i className="fa fa-search"></i> </span>
				    </div>
	        	</div>		
	            <div className="col-lg-12 col-sm-12 col-md-12 col-xs-12 NOpadding marginTop17">			            	        
	                <div className="table-responsive  ">
	                	<div className="scrolltbl">
	                	{/*table-wrapper-scroll-y my-custom-scrollbar*/}
						<table className="table iAssureITtable-bordered table-striped table-hover  ">
	                        <thead className="tempTableHeader">	     
		                        <tr className="">
		                            { this.state.twoLevelHeader.apply == true ?
		                            	this.state.twoLevelHeader.firstHeaderData.map((data, index)=>{
		                            		return(
												<th key={index} colSpan={data.mergedColoums} className="umDynamicHeader srpadd textAlignCenter">{data.heading}</th>			
		                            		);		                            		
		                            	})	
		                            	:
		                            	null									
									}
	                            </tr>
	                            <tr className="">
	                            <th className="umDynamicHeader srpadd textAlignLeft">
	                      {/*      <input type="checkbox" className="allSelector col-lg-1 col-md-1 col-sm-3 col-xs-1 umchksett" name="allSelector" />
	                           
// -------------------------------------------------*/}

								<input type="checkbox" className="allSelector col-lg-1 col-md-1 col-sm-3 col-xs-1 umchksett" name="allSelector" onChange={this.checkAll.bind(this)}/> 


	                            </th>
	                            {/*<th className="umDynamicHeader srpadd textAlignLeft">Sr.No.</th>*/}


		                            { this.state.tableHeading ?
										Object.entries(this.state.tableHeading).map( 
											([key, value], i)=> {
													if(key == 'actions'){
														return(
															<th key={i} className="umDynamicHeader srpadd textAlignLeft">{value}</th>
														);	
													}else{
														return(
															<th key={i} className="umDynamicHeader srpadd textAlignLeft">{value} <span onClick={this.sort.bind(this)} id={key} className="fa fa-sort tableSort"></span></th>
														);	
													}
																							
											}
										) 
										:
										<th className="umDynamicHeader srpadd textAlignLeft"></th>
									}
	                            </tr>
	                        </thead>
	                        <tbody>
	                           { this.state.tableData && this.state.tableData.length > 0 ?
	                           		this.state.tableData.map( 
										(value, i)=> {	
										// console.log("value of tabledata",value);												
											return(
												<tr key={i} className="">

													{/*console.log("values",value)*/}
													<td className="textAlignCenter"><input type="checkbox" ref="userCheckbox" name="userCheckbox" className="userCheckbox" checked={value.checked}  id={value._id} data-index={i} onChange={this.selectedId.bind(this)}/></td>
													
													{/*<td>{value._id}</td>*/}
													{/*<td className="textAlignCenter">{this.state.startRange+1+i}</td>*/}
													{
														Object.entries(value).map( 
															([key, value1], i)=> {
																// console.log('key==========',key);

																if(value1){
																	if($.type(value1) == 'string'){
																		var regex = new RegExp(/(<([^>]+)>)/ig);
																		var value2 = value1 ? value1.replace(regex,'') : '';
																		var aN = value2.replace(this.state.reA, "");
																		if(aN && $.type( aN ) == 'string'){
																			var textAlign = 'textAlignLeft';
																		}else{
																			var bN = value1 ? parseInt(value1.replace(this.state.reN, ""), 10) : '';
																			if(bN){
																				var textAlign = 'textAlignLeft';
																			}else{
																				var textAlign = 'textAlignLeft';
																			}
																		}
																		var found = Object.keys(this.state.tableHeading).filter((k)=> {
																		  return k == key;
																		});

																		if(found.length > 0){
																			
																			if(key != 'checked'){
																				// console.log(key, key != 'checked');
																				return(<td className={textAlign} key={i}><div className={textAlign} dangerouslySetInnerHTML={{ __html:value1}}></div></td>); 						
																			}													
																		}
																	}															
																}
																// else{
																// 	// console.log('value1', value1);
																// 	return(<td key={i}></td>);
																// }
															}
														)
													}
													<td className="textAlignCenter">
														<span className="pointer pointerCls">
															{/*<div  className="deleteNotif"  data-toggle="modal" data-target={"#editNotifyModal-"+this.props.emailtemplateValues._id} id={this.props.emailtemplateValues._id}>
							    	*/}
															<i className="fa fa-pencil " title="Edit" id={value._id} onClick={this.showprofile.bind(this)} ></i>&nbsp; &nbsp; 
															{this.props.editId && this.props.editId == value._id? null :<i className={"fa fa-trash redFont "+value._id} id={value._id+'-Delete'} data-toggle="modal" title="Delete" data-target={`#${value._id}-rm`} ></i>}&nbsp; &nbsp; 
															<i className="fa fa-key" title="Reset Password" id={value._id} data-toggle="modal" data-target={"#RestpwdModal-"+value._id}></i>
														
														</span>

													{/*	<UsereditModal userNot={value._id} data={value}/>*/}

														{/*this.state.show == true ? */
														<div className="modal fade modalHide passwordModal" id={"RestpwdModal-"+value._id}  role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true">
																		 {/*console.log("here modal id",value._id)*/}	
																		  <div className="modal-dialog" role="document">
																		    <div className="modal-content  ummodallftmg">
																		      <div className="modal-header userHeader">
																		        
																		        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
																		        
																		          &times;
																		        </button>
																		        <h4 className="modal-title" id="exampleModalLabel1">Reset Password</h4>
																		      </div>
																		     <div className="modal-body row">

																		             	{/*<ResetPassword id={usersData._id}/>*/}
																		             	 <div className="" id={value._id}>
																				                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">

																				                <div className="FormWrapper col-lg-12 col-md-12 col-sm-12 col-xs-12">
																				                    
																				                       


																				                        <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 inputContent marBtm">
																											    <div className="form-group form-group1 fltlft input-group col-lg-12 col-md-12 col-xs-12 col-sm-12 inputContent">
																										   		
																											    	<label className="formLable lefttxt">New Password 
																											    		<label className="requiredsign">*</label>
																											    	</label>
                                                         
																								                    <span className="blocking-span noIb">
																									                    <input type="password" value={this.state["resetPassword"+value._id]} onChange={this.handleChange} className="form-control pass border3 oesSignUpForm  inputTextPass " ref="resetPassword"  name={"resetPassword"+value._id} id={"resetPassword"+value._id}  autoComplete="off" required/>
																									                </span>   
																									                <div className="showHideSignDiv">
																									                  <i className="fa fa-eye showPwd showEyeupSign" aria-hidden="true" onClick={this.showSignPass.bind(this)}></i>
																									                  <i className="fa fa-eye-slash hidePwd hideEyeSignup " aria-hidden="true" onClick={this.hideSignPass.bind(this)}></i>
																									                </div> 
																									                  <span className="focus-border">
																									                    <i></i>
																									                  </span>
																												</div>
																										   		<div className="form-group form-group1 fltlft input-group  col-lg-12 col-md-12 col-xs-12 col-sm-12 inputContent">
																										   			
																										   			<label className="formLable lefttxt"> Confirm Password 
																											    		<label className="requiredsign">*</label>
																											    	</label>

																								                     <span className="blocking-span noIb">
																									                    <input type="password" value={this.state["resetPasswordConfirm"+value._id]} onChange={this.handleChange} className="form-control pass border3 oesSignUpForm  inputTextPass " ref="resetPasswordConfirm" name={"resetPasswordConfirm"+value._id} id={"resetPasswordConfirm"+value._id}  autoComplete="off" required/>
																							{/*		                    <span className="floating-label1 lbfloatpass"><i className="fa fa-lock" aria-hidden="true"></i> Confirm Password</span> */ }               
																									                  </span>
																									                <div className="showHideSignDiv">
																									                  <i className="fa fa-eye showPwd showEyeupSign" aria-hidden="true" onClick={this.showSignPass.bind(this)}></i>
																									                  <i className="fa fa-eye-slash hidePwd hideEyeSignup " aria-hidden="true" onClick={this.hideSignPass.bind(this)}></i>
																									                </div> 
																									                  <span className="focus-border">
																									                    <i></i>
																									                  </span>
																												</div>
																											</div>

																				                      


																				                        <div className="submitButtonWrapper pull-right col-lg-4 col-lg-offset-3 col-md-6 col-sm-12 col-xs-12">
																				                            <button className="btn col-lg-12 col-md-12 col-sm-12 col-xs-12 btnSubmit outlinebox" onClick={this.changepassword.bind(this)} id={value._id}>Reset Password</button>
																				                        </div>
																				                           
																				                   
																				                </div>
																				              </div>
																				        </div>
																		      </div>
																	
																		   </div>
																		  </div>
																	</div>	

																	/*:
																	null*/
																}

	                                                    <div className="modal fade col-lg-12 col-md-12 col-sm-12 col-xs-12" id={`${value._id}-rm`}  role="dialog">
										                    <div className=" modal-dialog adminModal adminModal-dialog">
										                         <div className="modal-content adminModal-content col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
										                                <div className="modal-header adminModal-header col-lg-12 col-md-12 col-sm-12 col-xs-12">
															        		<h4 className="CreateTempModal col-lg-11 col-md-11 col-sm-11 col-xs-11" id="exampleModalLabel"></h4>
															        		<div className="adminCloseCircleDiv pull-right  col-lg-1 col-md-1 col-sm-1 col-xs-1 NOpadding-left NOpadding-right">
																		        <button type="button" className="adminCloseButton" data-dismiss="modal" aria-label="Close">
																		          <span aria-hidden="true">&times;</span>
																		        </button>
																	        </div>
															      		</div>
										                              <div className="modal-body adminModal-body col-lg-12 col-md-12 col-sm-12 col-xs-12">

										                                 <h4 className="blackFont textAlignCenter col-lg-12 col-md-12 col-sm-12 col-xs-12 examDeleteFont">Are you sure you want to delete this User?</h4>
										                              </div>
										                              
										                              <div className="modal-footer adminModal-footer col-lg-12 col-md-12 col-sm-12 col-xs-12">
										                                   <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
										                                        <button type="button" className="btn adminCancel-btn col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-8 col-sm-offset-1 col-xs-10 col-xs-offset-1" data-dismiss="modal">CANCEL</button>
										                                   </div>
										                                   <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
										                                        <button id={value._id} onClick={this.deleteUser.bind(this)} type="button" className="btn examDelete-btn col-lg-4 col-lg-offset-7 col-md-4 col-md-offset-7 col-sm-8 col-sm-offset-3 col-xs-10 col-xs-offset-1" data-dismiss="modal">DELETE</button>
										                                   </div>
										                              </div>
										                         </div>
										                    </div>
										               </div>

													</td>
												</tr>
											);										
										}
									) 	
									:
									<tr className="trAdmin"><td colSpan={Object.keys(this.state.tableHeading).length+2} className="noTempData textAlignCenter">No Record Found!</td></tr>               		
								}
	                    </tbody>
	                    </table>
	                    </div>
	                    {/*this.state.tableData && this.state.tableData.length > 0 ?*/
	      //               	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 paginationAdminWrap">
		     //                	<div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
			    //                 	{ 
				   //                  		// this.state.limitRange >=  this.state.dataLength?		                    		
				   //                  		this.state.dataLength?		                    		
					  //                   	null
					  //                   	:
			    //                 			<div className="btn btn-primary" onClick={this.showFirstTweentyButtons.bind(this)} title="Fast Backward"><i className="fa fa-fast-backward"></i></div>
			    //                 	}
		     //                	</div>
		     //                	<div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
			    //                 	{ 
			    //                 		// this.state.limitRange >=  this.state.dataLength?                  		
			    //                 		this.state.dataLength?                  		
				   //                  	null
				   //                  	:
				   //                  	<div className="btn btn-primary" onClick={this.showPreviousPaginationButtons.bind(this)} title="Previous"><i className="fa fa-caret-left"></i></div>
				   //                  }
			    //                 </div>
							// 	<ol className="questionNumDiv paginationAdminOES col-lg-8 col-md-8 col-sm-8 col-xs-8 mainExamMinDeviceNoPad">										 
							// 		{this.state.paginationArray}
							// 	</ol>
							// 	<div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
							// 		{
							// 			this.state.paginationArray.length < 20 ?
							// 			null
							// 			:
							// 			<div className="btn btn-primary" onClick={this.showNextPaginationButtons.bind(this)} title="Next"><i className="fa fa-caret-right"></i></div>
							// 		}
							// 	</div>
							// 	<div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
							// 		{
							// 			this.state.paginationArray.length < 20 ?
							// 			null
							// 			:
							// 			<div className="btn btn-primary" onClick={this.showLastTweentyButtons.bind(this)} title="Fast Forward"><i className="fa fa-fast-forward"></i></div>
							// 		}
							// 	</div>							
							// </div>
							// :
							// null
	                    }
	                    
	                </div>                        
	            </div>
            </div>
	    );
		
	} 

}

export default withRouter(IAssureTableUM); 