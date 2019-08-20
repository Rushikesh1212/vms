import React,{Component} from 'react';
// import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';



import './Visitorreport.css';


export default class Visitorreport extends Component{
  
  constructor(props) {
   super(props);
    this.state = {}
  }
   
  componentDidMount(){
 
}

    
  render(){
    return(
      <div>
          <div className="col-lg-12 emptybox1 "></div>
          <div className="col-lg-8">
              <div className="col-lg-12 box2">
                <div className="row">
                    <div className="box1a col-lg-12">
                          <div className="row">
                            <div className="col-lg-6  ">
                              <div ><h4>Visitors Report</h4></div>    
                            </div>
                          </div>
                    </div>
                    <div className="col-lg-9">
                          <div className="row"><img src="/images/g2.png"/></div>
                    </div>  
                    <div className="col-lg-3 bggreen">
                          <div className="col-lg-12 emptybox1"></div>
                          <div className="col-lg-12 emptybox2"></div>
                          <div className="text-center"><img src="/images/g3.png"/></div>
                    </div>  
                </div>  
              </div>
          </div>
    </div>
      );
     }
}
