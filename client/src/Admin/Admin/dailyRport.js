import React from 'react';
import Axios from 'axios';
import { MDBDataTable } from 'mdbreact';

let dataa = {
    columns: [
      {
        label: 'Sno',
        field: 'Sno',
      },
      {
        label: 'date',
        field: 'dateid',
      },
      {
        label: 'Level Income',
        field: 'levelincome',
        
      },
      {
        label: 'P-1',
        field: 'pool1income',
        
      },
      {
        label: 'P-2',
        field: 'pool2income',
        
      },
      {
        label: 'P-3',
        field: 'pool3income',
        
      },
      {
        label: 'Withraw-per',
        field: 'withdrawp',
      },
      {
        label: 'pinwall-per',
        field: 'pinsper',
      },

    ],
    rows:[]
  };

  let dat = {
    columns: [
      {
        label: 'Sno',
        field: 'Sno',
      },
      {
        label: 'Level Out',
        field: 'levelout',
      },
      // {
      //   label: 'Fund Share',
      //   field: 'fundshare',
      // },
      {
        label: 'Pool-out',
        field: 'poolout',
      },
      {
        label: 'Withdraw',
        field: 'withdraw',
      }

    ],
    rows:[]
  };


class DailyReport extends React.Component {

    constructor (){
        super();
        this.state = {
            data1: {},
            data2: {},
        }
    }

    handleSelectedDates= (e) => {

        e.preventDefault();

        Axios.post('/api/Admin/getDailyReportDetails',{
            startDate: e.target.start_date.value,
            endDate: e.target.end_date.value,
        })
        .then(res => {
            console.log(res.data);
            if(parseInt(res.data.status) === parseInt(1)){

                this.createTable(res.data.users);
                

            }
            else{
               
                document.getElementById('Up_MSG').innerHTML = "Something Went Wrong";

            }
        })

    }

    createTable= (members)=> {
        let i = 0;
        dataa.rows= [];
        dat.rows = [];
        console.log(members);

   { members &&   members.map(Direct => {

              const details = Direct
              console.log(Direct);
              i++

              const obj = {

                  Sno : i,
                  dateid : Direct.dateId  ,
                  levelincome  : Direct.LevelPinsIncome.$numberDecimal ,
                  pool1income  : Direct.PoolOnePinsIncome.$numberDecimal ,
                  pool2income  : Direct.PoolTwoPinsIncome.$numberDecimal ,
                  pool3income  : Direct.PoolThreePinsIncome.$numberDecimal ,
                  withdrawp     : Direct.withdrawpercentage.$numberDecimal ,          
                  pinsper :  Direct.funtToPinPercent.$numberDecimal     

              }

              //Out go
              const obj2 = {

                Sno : i,
                levelout : Direct.LevelOutSpend.$numberDecimal ,
                poolout : Direct.PoolOutgo.$numberDecimal ,
                withdraw : Direct.withdraw.$numberDecimal ,
                
              }

               dataa.rows.push(obj);
               dat.rows.push(obj2);
      } )}

      this.setState({data1 :dataa,data2 : dat})
      
      }

    render(){
        return(
            <div>

               {/* Date Selection */}
                <div>
                    <form  onSubmit={(e) => this.handleSelectedDates(e)}>
                    <label>Start Date</label>
                    <input type="date" required className="form-control" name="start_date">
                    </input>

                    <label>EndDate</label>
                    <input type="date" required className="form-control" name="end_date">
                    </input>

                    <button type="submit" className="btn btn-primary form-control">get details</button>
                    </form>
                </div>

                {/* Daily Report Table */}
                <div style={{width:"100%",height:"400px",overflowX:"scroll"}}>


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
                
                </div>

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
                data={this.state.data2}
                />

            </div>
        )
    }
}

export default DailyReport;