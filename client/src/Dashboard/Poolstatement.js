import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { MDBDataTable } from 'mdbreact';
import Axios from 'axios';

const classes = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(0),
        paddingBottom: theme.spacing(4),
      },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
   
  
  }));

  function Copyright() {
    return (
      <Typography variant="body2" color="white" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  let data = {
    columns: [
      {
        label: 'Sno',
        field: 'Sno',
      },
      {
        label: 'Pool Name',
        field: 'poolName',
      },
      {
        label: 'Amount added',
        field: 'Amountadded',
      },
    ],
    rows:[]
  };
 
 
  class PoolStatement extends React.Component{

  constructor(){
    super();
    this.state={
      data1:{},
      Loading : false
    }
     
  }


  async componentDidMount(){

    this.setState({
      Loading : true
    })

    const userdata = JSON.parse(sessionStorage.getItem('USER_DETAILS'));
    const row = data.rows;

   // console.log(row);

    try{
              await Axios.post('/api/users/Pool_statement',{userid: userdata.userId})
              .then(res => {

                    //  console.log(res.data.users);
                      if(parseInt(res.data.status) === parseInt(1)){
                        this.createTable(res.data.users);
                        //  console.log(data);
                          this.setState({data1:data ,Loading : false})
                      }
                      else
                      {
                        this.setState({data1:data ,Loading : false})
                      }
                      
              }).catch(err =>{

                   this.setState({data1:data ,Loading : false})

              })
      }
      catch(err)
      {
          // console.log(" ");
           this.setState({data1:data ,Loading : false})
      }    
}

createTable= (members)=> {
  let i = 0;
  data.rows=[];
     members.map(Direct => {
        i++
      const obj = {
          Sno: i,
          poolName: Direct.poolName,
          Amountadded: Direct.Amountadded,

      }

         data.rows.push(obj)
} )

}

    render()
    {
        return(   <div style={{paddingBottom:"10px"}}>
            
                <Paper elevation={3}>
                <div className="Header" >
                                 Pool Statement
                            </div>
                  
                <div  style={{padding:"0% 3%"}} >  
                        
                           
                            <div className="">
                              {/* Recent Orders */}
                                        <Grid item xs={12}>
                                      
                                             <div >
                                        <React.Fragment>
                                
                        {this.state.Loading ? 
                        
                       (<div style={
                         {
                          width:"100%",
                          display: "flex",
                          justifyContent:"center",
                          alignItems:"center",
                          padding: "2% 0%"
                         }
                       }>
                          Loading...
                       </div>)
                       :
                              <MDBDataTable
                              striped
                              bordered
                              sortable={false}
                              theadColor="#fff"
                              entries={7}
                              small
                              noBottomColumns
                              responsiveSm
                              responsiveMd
                              
                              data={this.state.data1}
                              />
                       
                       }
                                           
                                            {/* <div className={classes.seeMore}>
                                            
                                                <Link color="primary" href="#" >
                                                See more orders
                                                </Link>
                                            </div> */}
                                            </React.Fragment>
                                        </div>
                                       
                                        </Grid>
                                    {/* </Grid> */}
                                  
                            </div>
                    </div>
                </Paper>
            
        </div>)
    }
}

export default PoolStatement;