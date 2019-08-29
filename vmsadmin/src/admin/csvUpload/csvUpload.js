import React, { Component } from 'react';
import axios                from 'axios';
import { CSVReader } from 'react-papaparse';
 
class csvUpload extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }
 
  handleReadCSV = (data) => {
    console.log(data);
    axios.post('/api/schema/post/',data.data)
                .then( (response)=> {
                  console.log('response',response);
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
        <CSVReader
            onFileLoaded={this.handleReadCSV}
            inputRef={this.fileInput}
            style={{display: 'none'}}
            onError={this.handleOnError}
            configOptions={{header: true /* Header row support */ }}
        />
        <button onClick={this.handleImportOffer}>Import</button>
      </div>
    );
  }
}
 
export default csvUpload;