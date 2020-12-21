import React, { Component } from 'react';
import Layout from './TheLayout';

class DashboardMain extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                    <Layout></Layout>
            </div>
         );
    }
}
 
export default DashboardMain;
