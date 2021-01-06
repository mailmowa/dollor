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



  let data = {
    columns: [
      {
        label: 'Sno',
        field: 'Sno',
      },
      {
        label: 'User Id',
        field: 'userId',

      },
      {
        label: 'Name',
        field: 'Name',

      },
      {
        label: 'Email',
        field: 'Mail',

      },
      {
        label: 'Joining date',
        field: 'Date',
        sort: 'desc'
      },
      {
        label: 'Status',
        field: 'status',

      }
    ],
    rows:[]
  };

class LevelNine extends React.Component {

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
      //  console.log(this.props.data);
    try{
                  if(this.props.data.length > 0){
                              await Axios.post('/api/users/getLevelArrayDetails',
                              {
                                  useridsArray: this.props.data
                              })
                              .then(res => {
                               // console.log(res.data.users);

                                        if(parseInt(res.data.status) === parseInt(1))
                                        {
                                          this.createTable(res.data.users);
                                           // console.log(data);

                                        }
                                        else
                                        {
                                          this.setState({Loading : false ,data1 : data})
                                        }


                            }).catch(err => {

                                        console.log( "  ");
                                        this.setState({
                                          data1: data,
                                          Loading: false
                                        })
                            })
                }
                else
                {
                            this.setState({
                              data1: data,
                              Loading: false
                            })
                }
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

    createTable = (members)=> {
      let i = 0;
    //  console.log(members);
      data.rows = [];
    {members && members.map(Direct => {
            i++
            const obj = {
              Sno: i,
              userId:Direct.userId,
              Name: Direct.firstName+Direct.lastName,
              Mail: Direct.mailId,
              Date: new Date(Direct.joiningDate).toLocaleDateString(),
              status: Direct.Active === "true"?"Active":"Inactive"
            }

             data.rows.push(obj);
    } )
    }
    this.setState({data1:data , Loading : false})
    }

    render(){
        return(
            <div>

                    <div style={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    fontSize:"20px",
                    fontWeight:"500"
                    }}>
                            LEVEL NINE
                 </div>

                 {/* Recent Orders */}
                 <Grid item xs={12}>
                
                   <div >
                  <React.Fragment>


                  {this.state.Loading ? (
                      <div style={{
                        width:"100%",
                        display: "flex",
                        justifyContent:"center",
                        alignItems:"center",
                        padding: "2% 0%",

                      }}>
                          Loading...
                      </div>
                    )
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
              {/* <Box pt={4}>
                <Copyright />
              </Box> */}

            </div>
        )
    }

}

export default LevelNine;