import React, { Component } from 'react';
import CountUp from 'react-countup';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                    <CountUp end={100} duration={5}></CountUp>
            </div>   
         );
    }
}
 
export default Counter;