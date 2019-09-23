import React,{Component}  from 'react';
import { render }         from 'react-dom';
import {Link}             from 'react-router-dom';
import moment             from 'moment';
import axios              from 'axios';
import $                  from 'jquery';
import { Chart }          from "react-google-charts";
// import DashboardCWSBS     from "../dashboardReports/cafeWiseSeatBookingS/DashboardCWSBS.js";

class AdminContent extends Component{
  constructor(props){
    super(props);
    this.state = {
      allUserData     : [],
      pieOptions      : "",
      pieData         : [],
      dataColumnChart : [],
      activeUesr      : "",
      totalUsers      : "",
      totalVoters     : "",
      updatedVoters   : "",
      userUpdatedVotersList : [],
      usersData       : [],
    };
  }

  componentWillMount(){
    $('.sidebar').css({display:'block',background: '#222d32'});
    
      axios
        .get('/api/reports/get/dashboardtab')
        .then((response)=>{
          console.log("dashboard............>",response.data);

           this.setState({
                totalVoters: response.data.totalVoters,
                updatedVoters: response.data.updatedVoters,
                totalUsers: response.data.totalUsers,
                activeUesr: response.data.activeUesr,
              });

              console.log('this.state.subscrptionData', response.data);
            var subscrptionData=[{status: "Updated Voters", count: response.data.updatedVoters},{status: "Non-Updated Voters", count: response.data.totalVoters-response.data.updatedVoters}]
            var pieArray = [["Updated Voters", "Non-Updated Voters"]];  
            for (var i = 0; i < subscrptionData.length; i++) {
              var pieArr = [subscrptionData[i].status , subscrptionData[i].count];
              pieArray.push(pieArr)
            }
    
            this.setState({
                pieData : pieArray,          
              },()=>{
              console.log('pieData', this.state.pieData);
              })
        })
        .catch(function (error) {
          console.log(error);
        })      

        axios
        .get('/api/reports/get/colorlist')
        .then((response)=>{
          console.log("colorlist............>",response.data);
          var data=response.data;
          var colorList=[];
          for (var i =0; i<data.length; i++) {
            switch(data[i]._id){
              case 1:
              var color ={
                status: "our",
                count: data[i].count,
                color: "#4B9D44"

              }
              colorList.push(color);
              break;

              case 2:
              var color ={
                status: "Unknown",
                count: data[i].count,
                color: "#3FB0D5"
              }
              colorList.push(color);
              break;

              case 3:
              var color ={
                status: "Known",
                count: data[i].count,
                color: "#286090"
              }
              colorList.push(color);
              break;

              case 4:
              var color ={
                status: "Doubtfull",
                count: data[i].count,
                color: "#EC982E"
              }
              colorList.push(color);
              break;

              case 5:
              var color ={
                status: "Opposite",
                count: data[i].count,
                color: "#C9392C"
              }
              colorList.push(color);
              break;
            }
          }
          console.log("colorList123",colorList);
            var newColorList =colorList;
            var twelveClrArray = ["#4B9D44","#3FB0D5","#286090","#EC982E","#C9392C"];
            var chartArray = [["Code", "Total Cont", { role: "style" }],];  
            for (var i = 0; i < newColorList.length; i++) {
              var chartArr = [newColorList[i].status , newColorList[i].count , newColorList[i].color ];
              chartArray.push(chartArr)
              // console.log('chartArray',chartArray );
            }
      
            this.setState({
                dataColumnChart : chartArray,          
              })
        })
        .catch(function (error) {
          console.log(error);
        })
        
        this.userList();
  }

  componentDidMount() {

    const pieOptions = {
      title: "",
      pieHole: 0.6,
      slices: [
        {
          color: "#5CCDA0"
        },
        {
          color: "#6D78AD"
        },
        {
          color: "#6D78AD"
        }
      ],
      legend: {
        position: "bottom",
        alignment: "center",
        textStyle: {
          color: "233238",
          fontSize: 14,
          font: "montserrat",
        }
      },
      tooltip: {
        showColorCode: true
      },
      chartArea: {
        left: 0,
        top: 20,  
        width: "100%",
        height: "80%"
      },
      fontName: "Roboto"
    };

    this.setState({
      pieOptions      : pieOptions,
    })
  }

  componentWillUnmount(){
    // $("script[src='/js/adminLte.js']").remove();
    // $("link[href='/css/dashboard.css']").remove();
    // console.log('wow');
  }

  allUserCount(){
    return this.state.allUserData.length;
  }

  userList(){
    axios
      .get('/api/reports/votersupdatedcount')
      .then((response)=>{
        console.log("users............>",response.data);
         this.setState({
              usersData : response.data
            });
      })
      .catch(function (error) {
        console.log(error);
      })
  } 

  userUpdatedVotersList(event){
    event.preventDefault();
    const Uid = event.target.getAttribute('name');
    $("."+Uid).addClass('clrRow');
    $("."+Uid).siblings('tr').removeClass('clrRow');
    console.log("idd............>",Uid);
    var userId = {userId:Uid}
    axios
      .post('/api/reports/votersupdatedbyuser',userId)
      .then((response)=>{
        console.log("userUpdatedVotersList............>",response.data[0]);
         this.setState({
              userUpdatedVotersList : response.data[0],
              userName : response.data[0].userName,
            });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  render(){
    console.log("1",this.state.pieData)

    return(
      <div>
        <div className="content-wrapper">
          <section className="content-header">
            <h1>Dashboard</h1>
            {/*<ol className="breadcrumb"></ol>*/}
          </section>
          <section className="content">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="info-box">
                  <span className="info-box-icon bg-orange">
                    <i className="fa fa-users"></i>
                  </span>
                  <div className="info-box-content">
                    <span className="text-center info-box-number">Total Voters<small></small></span>
                    <span className="text-center info-box-text">
                      {this.state.totalVoters}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                <div className="info-box">
                  <span className="info-box-icon bg-aqua">
                    <i className="fa fa-users" />
                  </span>
                  <div className="info-box-content">
                    <span className="text-center info-box-number">Updated Voters<small></small></span>
                    <span className="text-center info-box-text">
                      {this.state.updatedVoters}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="info-box">
                  <span className="info-box-icon bg-red">
                    <i className="fa fa-users" />
                  </span>
                  <div className="info-box-content">
                    <span className="text-center info-box-number">Total Users<small></small></span>
                    <span className="text-center info-box-text">
                      {this.state.totalUsers}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="info-box">
                  <span className="info-box-icon bg-green">
                    <i className="fa fa-users"></i>
                  </span>
                  <div className="info-box-content">
                    <span className="text-center info-box-number">Active Users<small></small></span>
                    <span className="text-center info-box-text">
                      {this.state.activeUesr}
                    </span>
                  </div>
                </div>
              </div>              
            </div>
            <div className="row">
              <div className="col-lg-7 col-md-8 col-sm-8 col-xs-12 graphWrapper">
                <div className="col-lg-12 col-md-12 col-sm-12 innerGraphWrap">
                  <h4>Favourite People <i className="fnt12">(Colour-code Wise)</i></h4>
                  {this.state.dataColumnChart!=="" ?
                  <div className="newCssBar">
                  <Chart
                      chartType="ColumnChart"
                      data={this.state.dataColumnChart}
                      width="100%"
                      height="300px"
                      legendToggle
                    />
                    </div>
                    :
                    <div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center bgImgWt">
                          <img src="/images/loader.jpg" alt="Logo_img" height="67%" width="67%" className="imgHt"/>
                        </div>
                    </div>
                  }
                </div>
              </div> 
              <div className="col-lg-5 col-md-4 col-sm-4 col-xs-12 row graphWrapper">
                <div className="col-lg-12 col-md-12 col-sm-12 row innerGraphWrap">
                  <h4>Updated Voters <i className="fnt12">(By users)</i></h4>
                  {this.state.pieData!=="" ?
                  <div className="col-lg-12 col-md-12 col-sm-12 newCssPie innerGraphWrap">
                      <Chart
                        chartType="PieChart"
                        data={this.state.pieData}
                        options={this.state.pieOptions}
                        graph_id="PieChart"
                        width={"100%"}
                        height={"230px"}
                        legend_toggle
                      />
                  </div>
                    :
                    <div>
                      <div className="col-lg-12 col-md-12 col-sm-12 row text-center ">
                        <img src="/images/loader.jpg" alt="Logo_img" height="100%" width="100%" className="imgHt"/>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 dashboardDivider"></div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12  boxWrapDashboard graphWrapperTab">
                <div className="col-lg-12 col-md-12 col-sm-12 innerGraphWrap innerGraphWraptbl tableClrPdg tblScroll">
                  <h4>List of Users <i className="fnt12b"> (Working){/*<Link to="/dashboard/salesTransactionReport">(See More)</Link>*/}</i></h4>
                  <table className="table table-striped  table-hover table-bordered todaysSalesReportForpdf reportTables" id="yearlyStudRegReport">
                  <thead>
                    <tr className="tableHeader tableHeader20">
                      <th> SR.No.</th>
                      <th> Name of User </th>
                      <th className="text-center"> Mobile Number </th>
                      <th className="text-center"> Visited Count </th>
                    </tr>                    
                  </thead>
                  <tbody>
                  {this.state.usersData.map((usersData,index)=>{
                    return(
                    <tr className={index==0?"hvrPtr "+usersData.userId+" clrRow":"hvrPtr "+usersData.userId}>
                      <td name={usersData.userId} onClick={this.userUpdatedVotersList.bind(this)} title="Click here to see work of user">{index+1}.</td>
                      <td name={usersData.userId} onClick={this.userUpdatedVotersList.bind(this)} title="Click here to see work of user">{usersData.userName}</td>
                      <td name={usersData.userId} onClick={this.userUpdatedVotersList.bind(this)} title="Click here to see work of user" className="text-center">{usersData.mobileNo}</td>
                      <td name={usersData.userId} onClick={this.userUpdatedVotersList.bind(this)} title="Click here to see work of user" className="text-center">{usersData.visitedCount}</td>
                    </tr>
                    );
                    })
                  }
                    {/*<tr>
                      <td colSpan="5" className="tableNoData">No record added yet...</td>
                    </tr>*/}        
                 </tbody>
                </table>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12  boxWrapDashboard graphWrapperTab">
                <div className="col-lg-12 col-md-12 col-sm-12 innerGraphWrap innerGraphWraptbl tableClrPdg tblScroll">
                  <h4>List of Voters (User: {this.state.userName}){/*<i className="fnt12b"><Link to="/dashboard/salesTransactionReport">(See More)</Link></i>*/}</h4>
                  <table className="table table-striped  table-hover table-bordered todaysSalesReportForpdf reportTables" id="yearlyStudRegReport">
                  <thead>
                    <tr className="tableHeader tableHeader20">
                      <th> SR.No.</th>
                      <th> Voter ID </th>
                      <th className="text-center"> Name of Voter </th>
                      <th className="text-center"> Mobile No. </th>
                    </tr>                    
                  </thead>
                  <tbody>
                  {this.state.userUpdatedVotersList.voters && this.state.userUpdatedVotersList.voters.length>0 ?
                    this.state.userUpdatedVotersList.voters.map((useUpVotLis,index)=>{
                    return(
                    <tr className="hvrPtr">
                      <td>{index+1}.</td>
                      <td>{useUpVotLis.voterId}</td>
                      <td className="text-center">{useUpVotLis.fullName}</td>
                      <td className="text-center">{useUpVotLis.mobileNumber}</td>
                    </tr>);
                    })
                    :
                    <tr className="hvrPtr">
                      <td className="text-center" colSpan="4">No data found</td>
                    </tr>
                  }
                    {/*<tr>
                      <td colSpan="5" className="tableNoData">No record added yet...</td>
                    </tr>*/}        
                 </tbody>
                </table>
                </div>
              </div>              
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default AdminContent;