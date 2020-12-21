import React from 'react';
import './news.css'
import Grid from '@material-ui/core/Grid';
import { CircularProgressbar } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


class Royalty extends React.Component{

    constructor(){
        super()
        this.state = {
            _id:"",
            percentage: "" ,
            Days: "",
            RoyaltyAmount:"",
            Sendamount: "",
            Loading: false,
            ErrMessage: "",
            open: false,
        }
    }

    async componentDidMount(){

        const userdata = JSON.parse(sessionStorage.getItem('USER_DETAILS'))
   
        await axios.post('/api/users/getSingleUserDetails',{userid : userdata._id})
         .then(res => { 

            //console.log(res);
            sessionStorage.setItem('USER_DETAILS',JSON.stringify(res.data.user));
            this.setState({  
                _id:userdata._id,
                percentage: parseFloat(res.data.user.Royalty$numberDecimal/30*100),
                Days: res.data.user.Royalty.$numberDecimal,
                RoyaltyAmount: res.data.user.Royaltyamount.$numberDecimal,
            })

         })
         .catch(res => {
             console.log(" ");
         })
       }

     handleSubmit =(e) => {
         e.preventDefault();

         this.setState({
             Loading: true
         })

         if(e.target.R_amount.value >= e.target.Send_amount.value > 0){

            axios.post('/api/users/Royaltyupdate',{
                Sendamount: e.target.Send_amount.value,
                _id: this.state._id,
            }).then(res => {
                if(res.data.status === 1){
                    this.setState({
                        RoyaltyAmount: res.data.user.Royaltyamount.$numberDecimal,
                        Loading:false,
                        ErrMessage: "Amount Send Succesfully",
                        open:true,
                        Sendamount: 0.00
                    })
                }
                else
                {
                    this.setState({
                        Loading: false,
                        ErrMessage:"Can't Send Amount",
                        open:true,
                    })
                }
            })
         }
         else{
             this.setState({
                 Loading: false,
                 ErrMessage:"Invalid Amount",
                 open:true
             })
         }

         this.setState({
             Loading:false
         })
        
     }

    render(){
        return(
            <div>
                    <header className="Header">
                          Royalty
                    </header>

                    <Snackbar
                    autoHideDuration={3000}
                    open={this.state.open}
                    onClose={() => {this.setState({open:false})}}
                    message={this.state.ErrMessage}
                    action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={() => this.handleClose()}>
                        <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>                         
                    }
                  />

                <Grid container justify="space-evenly" xs={12}>
                 <div style={{marginTop:"0%",display:"flex",flexWrap:"wrap",width:"100%"}}>

                    <Grid item xs={12} sm={5}>
                           <div className="Progress_hover" style={{width:"100%",padding:" 6% 10% 0% 10%",display:"flex",justifyContent:"center",alignContent:"center"}}>

                                <CircularProgressbarWithChildren strokeWidth={5} backgroundPadding={2} background={true} value={this.state.percentage} >
                                        <div className="text-muted" style={{fontSize:"6em",fontWeight:"700"}}>
                                            {this.state.Days || "00"}
                                        </div>
                                        <div className="text-muted" style={{fontSize:"2em",fontWeight:"500"}}>
                                            <p>Days Left</p>
                                        </div>
                                </CircularProgressbarWithChildren>

                            </div>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                            <div style={{
                                width:"100%",
                                padding:"10%",
                                display:"flex",
                                justifyContent:"center",
                                alignContent:"center",
                                flexDirection:"column"
                                }}>

                                <form onSubmit={(e) => this.handleSubmit(e)}>

                                        <MDBCol  className="mb-3">
                                        <label
                                            htmlFor="defaultFormRegisterNameEx"
                                            className="text-muted"
                                            style={{fontWeight:"bold",fontSize:"1.2em"}}
                                        >
                                            Royalty Amount :
                                        </label>
                                        <input
                                            value={this.state.RoyaltyAmount || 0}
                                            className={true? "form-control is-valid" : "form-control is-invalid"}
                                            name="R_amount"
                                            type="text"
                                            id="defaultFormRegisterNameEx"
                                            placeholder="Available amount"
                                            required
                                        />
                                        {/* <div className="valid-feedback">Looks good!</div> */}
                                        </MDBCol>

                                        <MDBCol  className="mb-3">
                                        <label
                                            htmlFor="defaultFormRegisterNameEx"
                                            className="text-muted"
                                            style={{fontWeight:"bold",fontSize:"1.2em"}}
                                        >
                                            Send To Wallet :
                                        </label>
                                        <input
                                            value={this.state.Sendamount}
                                            className={true? "form-control is-valid" : "form-control is-invalid"}
                                            name="Send_amount"
                                            onChange={(e) => {
                                                this.setState({Sendamount: e.target.value})
                                            }}
                                            type="number"
                                            min={0}
                                            max={this.state.RoyaltyAmount}
                                            id="defaultFormRegisterNameEx"
                                            placeholder="Enter amount"
                                            required
                                        />
                                        {/* <div className="valid-feedback">Looks good!</div> */}
                                        </MDBCol>

                                        <button 
                                        disabled={this.state.Loading}
                                        type="submit"
                                        className="btn btn-primary ml-3"
                                        >
                                           {this.state.Loading?"Loading...": "Send to Wallet"}
                                        </button>
                                 </form>
                            </div>
                    </Grid>
            
                 </div>
                 </Grid>
                    
            </div>
        )
    }
}


export default Royalty;