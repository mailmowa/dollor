import React, { Component } from 'react';
import WidgetsDropdown from './Widgetdropdown';
import News from './displayNews';
import axios from 'axios'
import PoolStatement from './Poolstatement';
import Grid from '@material-ui/core/Grid';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        
        this.userdata = JSON.parse(sessionStorage.getItem('USER_DETAILS'))
        this.state = { 
            wallet : 0.00,
            Autopool: 0.00,
            Level : 0.00,
            Recieved: 0.00,
            Royalty: 0.00,
            Totalearnings: 0.00
         }
    }

    Copy_function = () => {
      /* Get the text field */
      var copyText = document.getElementById("myInput");
    
      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    
      /* Copy the text inside the text field */
      document.execCommand("copy");
    
      /* Alert the copied text */
      alert("Copied the text: " + copyText.value);
    
    
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

                  <Grid container spacing={2}>
                    <Grid item xs={12} justify="center" sm={5}>
                        <input className="_input_class form-control sm"  value={`https://www.Dollornet.com/Home/Refer/${this.userdata.userId}`} id="myInput"/>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                    <span> <button className="btn btn-sm" onClick={() => this.Copy_function()}>Copy</button></span>
                    </Grid>
                  </Grid>

                <News></News>

                 <WidgetsDropdown incomes={this.state}></WidgetsDropdown>

                  <PoolStatement></PoolStatement>
            </div>
         );
    }
}
 
export default Dashboard;