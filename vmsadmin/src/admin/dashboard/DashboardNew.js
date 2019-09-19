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
      usersData       : [],
    };
  }

  componentWillMount(){
    $('.sidebar').css({display:'block',background: '#222d32'});
    
      axios
        .get('/api/reports/get/dasboardTab')
        .then((response)=>{
          console.log("dashboard............>",response.data);

           this.setState({
                totalVoters: response.data.totalVoters,
                updatedVoters: response.data.updatedVoters,
                totalUsers: response.data.totalUsers,
                activeUesr: response.data.activeUesr,
              });

              // console.log('this.state.subscrptionData', response.data.subscrptionData.length);
            var subscrptionData=[{packageName: "Updated Voters", count: response.data.updatedVoters},{packageName: "Non-Updated Voters", count: response.data.totalVoters-response.data.updatedVoters}]
            var pieArray = [["Updated", "Non-Updated"]];  
            for (var i = 0; i < subscrptionData.length; i++) {
              var pieArr = [subscrptionData[i].packageName , subscrptionData[i].count];
              pieArray.push(pieArr)
            }
 var twelveMonthGrossEarning =[{monthYear: "Our", earning: 98966},{monthYear: "Unknown", earning: 65230},{monthYear: "Known", earning: 56489},{monthYear: "Doubtfull", earning: 65573},{monthYear: "Opposit", earning: 42560}]
            var twelveClrArray = ["#4B9D44","#3FB0D5","#286090","#EC982E","#C9392C"];
            var chartArray = [["Code", "Total Cont", { role: "style" }],];  
            for (var i = 0; i < twelveMonthGrossEarning.length; i++) {
              var chartArr = [twelveMonthGrossEarning[i].monthYear , twelveMonthGrossEarning[i].earning , twelveClrArray[i]];
              chartArray.push(chartArr)
              // console.log('chartArray',chartArray );
            }
      
            this.setState({
                pieData : pieArray,          
                dataColumnChart : chartArray,          
              },()=>{
              console.log('pieData', this.state.pieData);
              console.log('dataColumnChart', this.state.dataColumnChart);
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
          color: "#6D78AD"
        },
        {
          color: "#5CCDA0"
        },
        {
          color: "#DF7970"
        },
        {
          color: "#e9a227"
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
      .get('/api/reports/votersUpdatedCount')
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

  render(){

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
                    <i className="fa fa-rupee" />
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
                    <i className="fa fa-bars"></i>
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
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12  boxWrapDashboard graphWrapperTab">
                <div className="col-lg-12 col-md-12 col-sm-12 innerGraphWrap innerGraphWraptbl tableClrPdg">
                  <h4>Latest Active Subscriptions <i className="fnt12b"><Link to="/dashboard/salesTransactionReport">(See More)</Link></i></h4>
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
                    <tr>
                      <td>{index+1}.</td>
                      <td>{usersData.userName}</td>
                      <td className="text-center">{usersData.mobileNo}</td>
                      <td className="text-center">{usersData.visitedCount}</td>
                    </tr>);
                    })
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