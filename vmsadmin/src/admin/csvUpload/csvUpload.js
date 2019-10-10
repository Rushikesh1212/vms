import React, { Component } from 'react';
import axios                from 'axios';
import swal                 from 'sweetalert';
import { CSVReader }        from 'react-papaparse';
import { withStyles }       from '@material-ui/core/styles';
import { CSVLink }          from 'react-csv';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        color: '#FFF !important',
    },
});

class csvUpload extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.state = { data: [{"constituencyName":"245-Madha","mConstituencyName":"245-माढा","boothName":"1-Zilla Parishad School South Building From North Side Room No2 Ranzani (Bhimanagar)","mBoothName":"1-जिल्हा परिषद शाळा उत्तरेकडुन खोली क्र.2 रांझणी  (भिमानगर)  दक्षिणेस उत्तरेकडून खोली","partName":"Vyapar Line Bhimanagar","mPartName":"व्यापार लाईन भिमानगर","partNo":"1","mPartNo":"1","firstName":"ANJANA","mFirstName":"अंजना","middleName":"SHANKAR","mMiddleName":"शंकर","lastName":"ASVARE","mLastName":"अस्वरे","relativeName":"SHANKAR ASVARE","mRelativeName":"शंकर अस्वरे","relation":"F","mRelation":"F","idNumber":"XEP6517601","mIdNumber":"XEP6517601","age":"28","mAge":"28","gender":"M","mGender":"M","houseNumber":"","mHouseNumber":"","pinCode":"413212","mPinCode":"413212","villageName":"Ranzani","mVillageName":"रांझणी"}] };
  }
 
  handleReadCSV = (data) => {
    console.log(data);
    axios
      .post('/api/voters/post/',data.data)
      .then( (response)=> {
        console.log('response',response);
        swal("Congrats...","Voter list is uploaded successfully","success")
      })
      .catch(function (error) {
        console.log(error);
      })
  }
 
  handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  }
 
  handleImportOffer = () => {
    this.fileInput.current.click();
  }

  render() {
    return (
      <div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 box-header with-border nopaddingum2">
          <div className="col-lg-offset-1 col-lg-7 col-md-6 col-sm-6 col-xs-12 paddingright">
            <h4 className="usrmgnttitle weighttitle">Click to add multiple voters:&nbsp;<span class="glyphicon glyphicon-arrow-right"></span></h4>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 "  id="createmodalcl">
            <input type="file" name="file-6[]" id="file-6" className="inputfile inputfile-5" data-multiple-caption="{count} files selected" multiple=""/>
            <button type="button" className="btn btn-primary col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={this.handleImportOffer}>Upload Voter List</button>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 box-header with-border nopaddingum2">
          <div className="col-lg-offset-1 col-lg-7 col-md-6 col-sm-6 col-xs-12 paddingright">
            <h4 className="usrmgnttitle weighttitle">Get file format to add voters : </h4>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 "  id="createmodalcl">
            <CSVLink
              style={{ textDecoration: 'none' }}
              data={this.state.data}
              filename={'Voter_List.csv'}
              target="_blank"
            >
            <input type="image" src="/images/CSV.png" alt="Submit" width="50%" height="50%"/>
            </CSVLink>
          </div>
        </div>
        
        <CSVReader
            onFileLoaded={this.handleReadCSV}
            inputRef={this.fileInput}
            style={{display: 'none'}}
            onError={this.handleOnError}
            configOptions={{header: true /* Header row support */ }}
        />
      </div>
    );
  }
} 
export default csvUpload;

// "constituencyName":"245-Madha","mConstituencyName":"245-माढा","boothName":"1-Zilla Parishad School South Building From North Side Room No2 Ranzani (Bhimanagar)","mBoothName":"1-जिल्हा परिषद शाळा उत्तरेकडुन खोली क्र.2 रांझणी  (भिमानगर)  दक्षिणेस उत्तरेकडून खोली","partName":"Vyapar Line Bhimanagar","mPartName":"व्यापार लाईन भिमानगर","partNo":"1","mPartNo":"1","firstName":"ANJANA","mFirstName":"अंजना","middleName":"SHANKAR","mMiddleName":"शंकर","lastName":"ASVARE","mLastName":"अस्वरे","relativeName":"SHANKAR ASVARE","mRelativeName":"शंकर अस्वरे","relation":"F","mRelation":"F","idNumber":"XEP6517601","mIdNumber":"XEP6517601","age":"28","mAge":"28","gender":"M","mGender":"M","houseNumber":"","mHouseNumber":"","pinCode":"413212","mPinCode":"413212","villageName":"Ranzani","mVillageName":"रांझणी"

