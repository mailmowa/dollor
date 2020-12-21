import React from 'react';
import './myteam.css';
import Grid from '@material-ui/core/Grid';
import Axios from 'axios';
import { ThemeProvider } from '@material-ui/core';
import Loader from 'react-loader-spinner';

import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


export default class Autopool extends React.Component {

    constructor(){
        super();
        this.userdata = JSON.parse(sessionStorage.getItem('USER_DETAILS'));
        this.state = {
            userdata : this.userdata,
            Active: this.userdata.Active === "false"?false:true,
            pool1Details : "",
            pool2Details : "",
            pool3Details : "",
            pool4Details : "",
            Loading : false,
            Loading_1 : false,
            Loading_2 : false,
            Loading_3 : false,
            Loading_4 : false,
            Err_message: "something",
            open: false,
        }
    }

   async componentDidMount(){

        this.setState({
            Loading : true
        })

        
        if(this.userdata.poolOne){
            console.log("one");
          await  Axios.get(`/api/users/getUserAutopoolOneDetails/${this.userdata.userId}`)
            .then(res => {
                console.log(res.data.user1);
                this.setState({
                    pool1Details: res.data.user1
                })
            })
        }

        if(this.userdata.poolTwo){
            console.log("2");
         await   Axios.get(`/api/users/getUserAutopoolTwoDetails/${this.userdata.userId}`)
            .then(res => {
                console.log(res.data);
                this.setState({
                     pool2Details: res.data.user2
                })
            })
        }

        if(this.userdata.poolThree){
            console.log("3");
          await  Axios.get(`/api/users/getUserAutopoolThreeDetails/${this.userdata.userId}`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    pool3Details : res.data.user3
                })
            })
        }

        if(this.userdata.poolFour){
            console.log("4");
          await  Axios.get(`/api/users/getUserAutopoolFourDetails/${this.userdata.userId}`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    pool4Details: res.data.user4
                })
            })
        }

        this.setState({
            Loading : false
        })

    }

    handlePoolOne=()=>{

        this.setState({
            Loading_1 : true
        })
        const pin = document.getElementById('pool_One_Pin').value;
        console.log("One :",pin);
       

        Axios.post('/api/users/poolOneUpdate',{
            _id: this.userdata._id,
            userid: this.userdata.userId,
            pins: pin
        }).then(res =>{
            console.log(res.data.userdetails);
            
            if( parseInt(res.data.status) === parseInt(1) ){
                 sessionStorage.setItem('USER_DETAILS',JSON.stringify(res.data.userdetails));
                 console.log(this.state.userdata);
                 this.setState({
                     userdata:   JSON.parse(sessionStorage.getItem('USER_DETAILS')),
                     Loading_1 : false,
                     Err_message: "Bronze Treasure Joined",
                    open: true,
                 })
                
            }
            else
            {
                this.setState({ Loading_1 : false})
            }
        })

    }

    handlePoolTwo=()=>{

        this.setState({
            Loading_2 : true
        })
        const pin = document.getElementById('pool_Two_Pin').value;
        console.log("Two :",pin);

        Axios.post('/api/users/poolTwoUpdate',{
            _id: this.userdata._id,
            pins: pin,
            userid: this.userdata.userId,
        }).then(res =>{
            console.log(res.data.userdetails);
            
            if( parseInt(res.data.status) === parseInt(1) ){
                 sessionStorage.setItem('USER_DETAILS',JSON.stringify(res.data.userdetails));
                 console.log(this.state.userdata);
                 this.setState({
                     userdata:   JSON.parse(sessionStorage.getItem('USER_DETAILS')),
                     Loading_2 : false,
                     Err_message: "Silver Treasure Joined",
                    open: true,
                 })
                
            }
            else
            {
                this.setState({ Loading_2 : false})
            }
        })

    }

    handlePoolThree=()=>{

        this.setState({
            Loading_3 : true
        })
        const pin = document.getElementById('pool_Three_Pin').value;
        console.log("3 :",pin);

        Axios.post('/api/users/poolThreeUpdate',{
            _id: this.userdata._id,
            userid: this.userdata.userId,
            pins: pin
        }).then(res =>{
            console.log(res.data.userdetails);
            
            if( parseInt(res.data.status) === parseInt(1) ){
                 sessionStorage.setItem('USER_DETAILS',JSON.stringify(res.data.userdetails));
                 console.log(this.state.userdata);
                 this.setState({
                     userdata:   JSON.parse(sessionStorage.getItem('USER_DETAILS')),
                     Loading_3 : false,
                     Err_message: "Gold Treasure Joined",
                    open: true,
                 })
                
            }
            else
            {
                this.setState({ Loading_3 : false})
            }
        })
    }

    handlePoolFour=()=>{

        this.setState({
            Loading_4 : true
        })
        const pin = document.getElementById('pool_Four_Pin').value;
        console.log("4 :",pin);

        Axios.post('/api/users/poolFourUpdate',{
            _id: this.userdata._id,
            userid: this.userdata.userId,
            pins: pin
        }).then(res =>{
            console.log(res.data.userdetails);
            
            if( parseInt(res.data.status) === parseInt(1) ){
                 sessionStorage.setItem('USER_DETAILS',JSON.stringify(res.data.userdetails));
                 console.log(this.state.userdata);
                 this.setState({
                     userdata:   JSON.parse(sessionStorage.getItem('USER_DETAILS')),
                     Loading_4 : false,
                     Err_message: "Platinum Treasure Joined",
                    open: true,
                 })
                
            }
            else
            {
                this.setState({ Loading_4 : false})
            }
        })
    }

    handleClose = () =>{
        this.setState({
          open: false
        })
      }
      
    render(){
      ///  let i1 = 0,i2= 0, i3 =0,i4 =0     
      //  console.log('renser');

        if(this.state.Loading)
        {

            return(
                <div style={{margin:"0px",padding:"0px",backgroundColor:"#fff",height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                     
                     <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      
                </div>
              )


        }
        else
        {
                    return(
                        <div style={{width:"100%",textTransform:"capitalize"}}>

                            <header className="Header">
                                 Autopool
                            </header>
                            
                            <div style={{width:"100%",padding:"1%",fontSize:"20px",fontWeight:"500"}}>
                                {this.userdata.Active=== "false"? "Please Active Your Account": "WIN BIG HERE"}
                            </div>
{/* 
                            <div style={{width:"100%",padding:"1%",fontSize:"14px",backgroundColor:"#",color:"#808080"}}>
                                <ul>
                                    <li> L-1-M  :  Level-1-Members </li>
                                    <li> L-1-A : Level-1-Amount </li>
                                    <li> L-2-M  : <span > Level-2-Members </span></li>
                                    <li>  L-2-A : <span> Level-2-Amount </span></li>
                                    <li>  L-3-M  : <span> Level-3-Members </span></li>
                                    <li> L-3-A :<span> Level-3-Amount </span></li>
                                </ul>
                                 
                            </div>
 */}


                            <Snackbar
        
                            autoHideDuration={3000}
                            open={this.state.open}
                            onClose={() => this.handleClose()}
                            message={this.state.Err_message}
                            action={
                            <React.Fragment>
                                <IconButton size="small" aria-label="close" color="inherit" onClick={() => this.handleClose()}>
                                <CloseIcon fontSize="small" />
                                </IconButton>
                            </React.Fragment>                         
                            }
                        />


                            
                 <Grid container justify="space-evenly" xs={12}>
                 <div style={{margin:"0%",display:"flex",flexWrap:"wrap",width:"100%"}}>

                    <Grid item xs={12} sm={6}>
                            <div style={{padding:"30px"}}>
                           
                                <div style={{padding:"10px 0px",
                                            fontSize:"large",
                                            fontWeight:"700",
                                            display:"flex",justifyContent:"space-between"
                                            }}>
                                   Autopool 1
                                 <span className="text-muted" style={{fontSize:"1em"}}> {this.state.userdata.poolOne?"Running...":"  "}</span> 
                                </div>
                            
                                <table id="table_01">
                                    <thead>
                                        <th>LEVEL</th>
                                        <th>AUTO POOL</th>
                                        <th>EARNING PER UNIT</th>
                                        <th>INCOME</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>4</td>
                                            <td>$5</td>
                                            <td>$20</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3">deducted</td>
                                            <td>- $10</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">You get</td>
                                            <td>$10</td>
                                        </tr>

                                    </tbody>
                                </table>
                                
                                <div style={{backgroundColor:"orange",
                                            marginTop:"20px",
                                            padding:"5px 10px"}}>
                                    <li>10$ AUTO DEBIT FOR REBIRTH</li>
                                </div>
                           
                            </div>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <div style={{padding:"30px"}}>
                  
                                <div style={{padding:"10px 0px",
                                            fontSize:"large",
                                            fontWeight:"700",
                                            display:"flex",justifyContent:"space-between"
                                            }}>
                                   Autopool 2
                                 <span className="text-muted" style={{fontSize:"1em"}}> {this.state.userdata.poolTwo?"Running...":"  "}</span> 
                                </div>
                       
                        <table id="table_01">
                             <thead>
                                 <th>LEVEL</th>
                                 <th>AUTO POOL</th>
                                 <th>EARNING PER UNIT</th>
                                 <th>INCOME</th>
                             </thead>
                             <tbody>
                                  <tr>
                                      <td>1</td>
                                      <td>16</td>
                                      <td>$10</td>
                                      <td>$160</td>
                                  </tr>
                                  <tr>
                                      <td colspan="3"> deducted</td>
                                      <td>- $60</td>
                                  </tr>
                                  <tr>
                                      <td colspan="3"> you get</td>
                                      <td> $100</td>
                                  </tr>
                             </tbody>
                         </table>
                         
                        <div style={{backgroundColor:"orange",
                                      marginTop:"20px",
                                      padding:"5px 10px"}}>
                            <li>60$ AUTO DEBIT FOR REBIRTH</li>
                         </div>
                   
                    </div>
                    </Grid>
            
                 </div>
                 </Grid>

                 <Grid container justify="space-evenly" xs={12}>
                 <div style={{margin:"0%",display:"flex",flexWrap:"wrap",width:"100%"}}>

                    <Grid item xs={12} sm={6}>
                            <div style={{padding:"30px"}}>
                          
                              <div style={{padding:"10px 0px",
                                            fontSize:"large",
                                            fontWeight:"700",
                                            display:"flex",justifyContent:"space-between"
                                            }}>
                                   Autopool 3
                                 <span className="text-muted" style={{fontSize:"1em"}}> {this.state.userdata.poolThree?"Running...":"  "}</span> 
                                </div>
                            
                                <table id="table_01">
                                    <thead>
                                        <th>LEVEL</th>
                                        <th>AUTO POOL</th>
                                        <th>EARNING PER UNIT</th>
                                        <th>INCOME</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>64</td>
                                            <td>$60</td>
                                            <td>$3840</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">deducted</td>
                                            <td>- $300</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3"> you get</td>
                                            <td>$3540</td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                                
                                <div style={{backgroundColor:"orange",
                                            marginTop:"20px",
                                            padding:"5px 10px"}}>
                                    <li>300$ AUTO DEBIT FOR REBIRTH</li>
                                </div>
                       
                            </div>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <div style={{padding:"30px"}}>
                   
                                 <div style={{padding:"10px 0px",
                                            fontSize:"large",
                                            fontWeight:"700",
                                            display:"flex",justifyContent:"space-between"
                                            }}>
                                   Autopool 4
                                 <span className="text-muted" style={{fontSize:"1em"}}> {this.state.userdata.poolFour?"Running...":"  "}</span> 
                                </div>
                       
                        <table id="table_01">
                             <thead>
                                 <th>LEVEL</th>
                                 <th>AUTO POOL</th>
                                 <th>EARNING PER UNIT</th>
                                 <th>INCOME</th>
                             </thead>
                             <tbody>
                                  <tr>
                                      <td>1</td>
                                      <td>256</td>
                                      <td>$300</td>
                                      <td>$76800</td>
                                  </tr>
                                  <tr>
                                      <td colspan="3">deducted</td>
                                      <td>- $0</td>
                                  </tr>
                                  <tr>
                                      <td colspan="3">you get</td>
                                      <td>$76800</td>
                                  </tr>
                                  
                             </tbody>
                         </table>
                         
                        <div style={{backgroundColor:"orange",
                                      marginTop:"20px",
                                      padding:"5px 10px"}}>
                            <li>Autopool Ends</li>
                         </div>
                
                    </div>
                    </Grid>
                 </div>
                 </Grid>

                </div>
                    )
        }
    }
}