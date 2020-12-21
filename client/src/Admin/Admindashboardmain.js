import React, { Component } from 'react';
import AdminLayout from './TheAdminLayout';

class DashboardMain extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                    <AdminLayout></AdminLayout>
            </div>
         );
    }
}
 
export default DashboardMain;
