import React,{Component} from 'react';
// import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';



import './Productlist.css';


export default class Productlist extends Component{
  
  constructor(props) {
   super(props);
    this.state = {}
  }
   
  componentDidMount(){
 
}

    
  render(){
    return(
      <div className="col-lg-6">
        <div className="col-lg-12 emptybox1 "></div>
          <div className="col-lg-12 box8">
            <div className="row">
                  <div className="box1a col-lg-12">
                        <div className="row">
                            <div className="col-lg-8  ">
                              <div><h4>Recetly Added Products</h4></div>    
                            </div>
                        </div>
                  </div>
                  <div className="col-lg-12 emptybox1 "></div>
                    <div className="col-lg-12 box8b">
                      <div className="row">
                        <div className="col-lg-2 ">
                          <img src="/images/b1.png"/>
                        </div>  
                        <div className="col-lg-10">
                          <div className="row">
                            <div className="col-lg-12 ">
                                <div className="text-center pull-left box5text">Samsung TV</div>
                                <span className="label label-warning pull-right">$1800</span>
                            </div>  
                              <div className="col-lg-12 ">
                                  <div className="pull-left box8text">Samsung 32" 1080p 60Hz LED Smart HDTV.</div>
                              </div>                  
                          </div>  
                        </div>  
                    </div>
                  </div>
                  <div className="col-lg-12 emptybox1 "></div>
                  <div className="col-lg-12 box8b">
                      <div className="row">
                          <div className="col-lg-2 ">
                            <img src="/images/b1.png"/>
                          </div>  
                        <div className="col-lg-10">
                          <div className="row">
                              <div className="col-lg-12 ">
                                 <div className="text-center pull-left box5text">Samsung TV</div>
                                 <span className="label label-danger pull-right">$1800</span>
                              </div>  
                            <div className="col-lg-12 ">
                              <div className="pull-left box8text">Samsung 32" 1080p 60Hz LED Smart HDTV.</div>
                            </div>
                          </div>  
                        </div>  
                      </div>
                  </div>
                  <div className="col-lg-12 emptybox1 "></div>
                    <div className="col-lg-12 box8b">
                       <div className="row">
                          <div className="col-lg-2 ">
                            <img src="/images/b1.png"/>
                          </div>  
                          <div className="col-lg-10">
                            <div className="row">
                                  <div className="col-lg-12 ">
                                       <div className="text-center pull-left box5text">Samsung TV</div>
                                       <span className="label label-success pull-right">$1800</span>
                                  </div>  
                              <div className="col-lg-12 ">
                                   <div className="pull-left box8text">Samsung 32" 1080p 60Hz LED Smart HDTV.</div>
                              </div>
                            </div>  
                          </div>  
                     </div>
                  </div>
                  <div className="col-lg-12 emptybox1 "></div>
                  <div className="col-lg-12 box8b">
                      <div className="row">
                          <div className="col-lg-2 ">
                            <img src="/images/b1.png"/>
                          </div>  
                        <div className="col-lg-10">
                              <div className="row">
                                <div className="col-lg-12 ">
                                    <div className="text-center pull-left box5text">Samsung TV</div>
                                    <span className="label label-info pull-right">$1800</span>
                                </div>  
                                <div className="col-lg-12 ">
                                    <div className="pull-left box8text">Samsung 32" 1080p 60Hz LED Smart HDTV.</div>
                                </div>
                            </div>  
                        </div>  
                      </div>
                  </div>
                  <div className="col-lg-12 box8b">
                      <div className="row">
                          <div className="col-lg-2 ">
                            <img src="/images/b1.png"/>
                          </div>  
                        <div className="col-lg-10">
                              <div className="row">
                                <div className="col-lg-12 ">
                                    <div className="text-center pull-left box5text">Samsung TV</div>
                                    <span className="label label-info pull-right">$1800</span>
                                </div>  
                                <div className="col-lg-12 ">
                                    <div className="pull-left box8text">Samsung 32" 1080p 60Hz LED Smart HDTV.</div>
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
