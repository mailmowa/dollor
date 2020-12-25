import React, { Component } from 'react';
import WidgetsDropdown from './Widgetdropdown';
import News from './displayNews';
import axios from 'axios'
import PoolStatement from './Poolstatement';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            wallet : 0.00,
            Autopool: 0.00,
            Level : 0.00,
            Recieved: 0.00,
            Royalty: 0.00,
            Totalearnings: 0.00
         }
    }

   async componentDidMount(){
        const userdata = JSON.parse(sessionStorage.getItem('USER_DETAILS'))

        await axios.post('/api/users/getSingleUserDetails',{userid : userdata._id})
      .then(res => {
         console.log(res);
        sessionStorage.setItem('USER_DETAILS',JSON.stringify(res.data.user));
        this.setState({
          id:userdata._id,
            wallet: res.data.user.fundSharingIncome.$numberDecimal,
            Autopool: res.data.user.autoPoolIncome.$numberDecimal,
            Level: res.data.user.levelIncome.$numberDecimal,
            Recieved: res.data.user.recievedIncome.$numberDecimal,
            Royalty: res.data.user.Royaltyamount.$numberDecimal,
            Totalearnings: res.data.user.Totalearnings.$numberDecimal
          })
      })
      .catch(res => {
          console.log(" ");
      })
    }



    render() { 
        return ( 
            <div>

                <News></News>

                 <WidgetsDropdown incomes={this.state}></WidgetsDropdown>

                  <PoolStatement></PoolStatement>
            </div>
         );
    }
}
 
export default Dashboard;