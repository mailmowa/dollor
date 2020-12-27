import React, { Component } from 'react';
import Counter from './Counter';
import CountUp from 'react-countup';
import './home.css'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="body_div_about">
             
                <div class="bg-white py-4">
                  <div class="container py-5">

                      <div className="About-us-header">
                          About Us
                      </div>
                  
                    <div class="row align-items-center mb-5">
                      <div class="col-lg-12 order-2 order-lg-1  mb-5">
                        <h2 class="font-weight-small ">Lorem ipsum dolor sit amet</h2>
                        
                        <p class=" mb-4 P">
                        This is a social network of a standard individuals. Dollornet
                        is neither an organization nor a monitory corporate, neither
                        an insurance agency nor a bank. It is a social network.The
                        primary target of the network is to monetarily engage its
                        part and to help one another.
                       </p>
                        <p class="  mb-4 P">
                        A shared guide store has been made by the individuals as
                        gifts. Each individual from the network has the chance of
                        independent work.
                        </p>
                       
                       <p class="mb-4 P">
                        The opportunity to be monetarily strong, the chance to
                        help one another, the occasion to become confident and
                        the moment to help the nation in the midst of cataclysmic
                        events and emergencies.
                        </p>
                        {/* <a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a> */}
                      </div>
                      {/* <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"> */}
                               {/* <img width="90%" height="100%" src={process.env.PUBLIC_URL + '/Aboutus.png'}></img> */}
                               {/* <img src={process.env.PUBLIC_URL + '/Aboutus.png'} alt="" class="img-fluid mb-4 mb-lg-0"/>

                      </div> */}
                    </div>
               
                  </div>
                </div>
            </div>
         );
    }
}
 
export default About;