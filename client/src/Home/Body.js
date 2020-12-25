import React, { Component } from 'react';
import Counter from './Counter';
import CountUp from 'react-countup';
import './home.css'

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="body_div">
                <div className="row m-0 p-0">
                    <div className="body_Content col-md-6 ">
                          <h1 className="display-4">Best trading platform with huge profits</h1>
                          <p>Hopefully these examples give you a feel for what it’s like to create a web app with React Router. Keep reading to learn more about the primary components in React Router!
                          </p>
                          <div > 
                            <button style={{marginLeft:"10%"}} className="btn btn-lg btn-primary rounded-pill ">Login Now</button>
                            <button className="btn btn-lg btn-primary rounded-pill">Register Now</button>
                          </div>
                    </div>
                    <div className="col-md-3 ">
                            vjhvukuckhtch
                    </div>
                </div>
           
                <div class="bg-white py-5">
                  <div class="container py-5">
                    <div class="row align-items-center mb-5">
                      <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                        <h2 class="font-weight-light">Lorem ipsum dolor sit amet</h2>
                        <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
                      </div>
                      <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834139/img-1_e25nvh.jpg" alt="" class="img-fluid mb-4 mb-lg-0"/></div>
                    </div>
                    <div class="row align-items-center">
                      <div class="col-lg-5 px-5 mx-auto">
                        <img src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/img-2_vdgqgn.jpg" alt="" class="img-fluid mb-4 mb-lg-0"/>
                        </div>
                      <div class="col-lg-6"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
                        <h2 class="font-weight-light">Lorem ipsum dolor sit amet</h2>
                        <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
         );
    }
}
 
export default Body;