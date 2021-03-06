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


  let data = {
    columns: [
      {
        label: 'Sno',
        field: 'Sno',
        sort: "asc",
        width: 150
      },
      {
        label: 'Pin',
        field: 'Pins',
        sort: 'asc',
        width: 270
      }
      
    ],
    rows:[]
  };
 

class AvailablePins extends React.Component {

  constructor(){
    super();
    this.state = {
      data1:{} ,
      Loading: false
    }
  }


  componentDidMount(){

          this.setState({
            Loading: true
          })
try{
          const userdata = JSON.parse(sessionStorage.getItem('USER_DETAILS'));
          this.createTable(userdata.availablePins);
}
catch(err)
{
    console.log(" ");
    this.setState({
      data1: data,
      Loading: false
    })
}

  }

  createTable= (members)=> {
    let i = 0;
    data.rows = [];
  members.map(Direct => {
          i++
          const obj = {
            Sno: i,
            Pins : Direct
          }
  
           data.rows.push(obj)
  } )

  this.setState({
    data1: data,
    Loading: false
  })
  
  }

  

    render(){
      return(   
      <div >
        <div className="Header" >
                         Available Pins
         </div>
      <div className="Send_Fund_Container">
            
              <div className="Send_Fund_body">
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
</div>)

    }
}

export default AvailablePins;