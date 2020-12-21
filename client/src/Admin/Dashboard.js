import React, { Component } from 'react';
import WidgetsDropdown from './AdminWidgetdropdown';

import axios from 'axios'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         
         }
    }

//    async componentDidMount(){
//         const userdata = JSON.parse(sessionStorage.getItem('USER_DETAILS'))

//         await axios.post('/api/users/getSingleUserDetails',{userid : userdata._id})
//       .then(res => {
//          console.log(res);
//         sessionStorage.setItem('USER_DETAILS',JSON.stringify(res.data.user));
//         this.setState({
//           id:userdata._id,
//             wallet: res.data.user.fundSharingIncome.$numberDecimal,
//             Autopool: res.data.user.autoPoolIncome.$numberDecimal,
//             Level: res.data.user.levelIncome.$numberDecimal,
//             Recieved: res.data.user.recievedIncome.$numberDecimal,
//           })
//       })
//       .catch(res => {
//           console.log(" ");
//       })
//     }



    render() { 
        return ( 
            <div>

               Admin Dashboard
            </div>
         );
    }
}
 
export default Dashboard;