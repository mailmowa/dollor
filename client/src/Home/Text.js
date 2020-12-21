import React, { Component } from 'react';

let j = 0

class ShipmentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            i : 0,
            fields:[],
            Load:false,
        }
    }

    componentDidMount(){
        this.setState({
            i:0,
            fields:[],
        })
    }

    handleLoad = () => {
      
        this.setState({
            Load: true
        })
     
    }

    render() { 
        
        return (
            <div style={{
                width:"100%",
                margin:"0px",
                padding:"0px"
            }}>

                <nav  style={{
                  
                    height:"20vh",
                    padding:"10px 5px",
                    backgroundColor:"GrayText",
                    color:"white",
                    display:"flex",
                    alignItems:"center",

                    
                }}>
                    <h4 style={{paddingLeft:"10%",width:"100%"}}>Gate Pass N0: SH02584684</h4>
                    <div style={{width:"100%",display:"flex",justifyContent:"flex-end"}}>
                       <button onClick={
                           () => this.handleLoad()
                       } style={{borderRadius:"30px",marginLeft:"2px",padding:"10px",backgroundColor:"green",color:"white"}}>Load</button>
                       <button style={{borderRadius:"30px",marginLeft:"2px",padding:"10px",backgroundColor:"green",color:"white"}}>Save</button>
                       <button style={{borderRadius:"30px",marginLeft:"2px",padding:"10px",backgroundColor:"green",color:"white"}}>Submit</button>
                    </div>
                
                </nav>

                <div style={{
                    width:"100%",
                    padding:"6% 10%" ,
                    textTransform:"uppercase",
                    fontSize:"medium",
                    fontWeight:"bold"
                }}>
                
                         <div style={{ margin:"10px",padding:"0px ",width:"100%",display:"flex"}}>

                                
                             <div style={{marginRight:"50px"}}>   Ship Dept:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                             &nbsp; <input type="text"></input ></div>
                             <div>   Vehicle type: <input type="text"></input ></div>


                         </div>

                         <div style={{margin:"10px", padding:"0px ",width:"100%",display:"flex"}}>

                                
                             <div style={{marginRight:"50px"}}>  Recievig Dept: &nbsp;&nbsp;<input type="text"></input ></div>
                             <div>   Vehicle No:&nbsp;&nbsp;&nbsp;&nbsp; <input type="text"></input ></div>
                             <div> &nbsp;&nbsp;&nbsp;&nbsp;  Plant: &nbsp;&nbsp;<input type="text"></input ></div>


                         </div>

                         <div style={{ margin:"10px",padding:"0px",width:"100%",display:"flex"}}>

                                        
                                <div style={{marginRight:"50px"}}>  Remarks: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<textarea width="600px" height="20px"></textarea ></div>
                             

                        </div>

                        <div style={{ margin:"10px",padding:"0px ",width:"100%",display:"flex"}}>

                                
                        <div style={{marginRight:"50px"}}>  Nature of<br/> Goods : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;<input type="text"></input ></div>

                        <div>   Responsible  Person: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text"></input ></div>


                        </div>

                        <div style={{margin:"10px", padding:"0px ",width:"100%",display:"flex"}}>

                                
                        <div style={{marginRight:"50px"}}>  Direct Leader:&nbsp; <input type="text"></input ></div>
                        <div>   Authentication manager:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="text"></input ></div>


                        </div>

                        <div style={{ margin:"10px",padding:"0px ",width:"100%",display:"flex"}}>

                                                        
                        <div style={{marginRight:"50px"}}> Work Order No: <div id="append"> </div></div>(or)&nbsp;&nbsp;
                        <div> <button onClick={
                            () => {
                                let  loopnumber =  document.getElementById('number_input').value

                                for (let i=0;i< loopnumber;i++){
                                    
                                    // Create an <input> element, set its type and name attributes
                                    var input = document.createElement("input");
                                    input.type = "text";
                                    input.id = "member" + j;
                                    console.log("member" + j);
                                    this.state.fields.push("member" + j)
                                    j++ ;
                                    console.log(this.state.fields);
                                    document.getElementById('append').appendChild(input);
                                    // Append a line break 
                                    document.getElementById('append').appendChild(document.createElement("br"));
                                }
                            }
                        }> Enter More </button> 
                          
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id="number_input" text="text" ></input>

                         </div>


                        </div>
                
                </div>

                            <hr/>
                <div>
                      {this.state.Load && 
                         this.state.fields.map(inputfield => {
                            let k=0;
                     return(    
                       <div style={{width:"100%",padding:"0px 10%",marginBottom:"20px"}}>
                      <div style={{color:"black",fontWeight:"bold",paddingLeft:"20px",margin:"10px"}}>{document.getElementById(inputfield).value}</div>  
                    
                                        <table style={{border:"1px solid black",width:"100%",}}>
                                            <thead style={{border:"1px solid black",backgroundColor:"green",color:"white",textAlign:"center"}}>
                                                <tr style={{border:"1px solid black"}}>
                                                 <th style={{border:"1px solid black"}}>Sno</th>
                                                 <th style={{border:"1px solid black"}}>Part No</th>
                                                 <th style={{border:"1px solid black"}}>Description</th>
                                                 <th style={{border:"1px solid black"}}>Scrap Quantity</th>
                                                 <th style={{border:"1px solid black"}}>remarks</th>
                                                </tr>
                                            </thead>
                                            <tbody style={{border:"1px solid black"}}>
                                                <tr style={{border:"1px solid black"}}>
                                                    <td style={{border:"1px solid black"}}>{k++}</td>
                                                    <td style={{border:"1px solid black"}}>5502100004</td>
                                                    <td style={{border:"1px solid black"}}>A.cover</td>
                                                    <td style={{border:"1px solid black"}}>13</td>
                                                    <td style={{border:"1px solid black"}}><input type="text" value="Lopers is a dummy text userd for display"></input></td>
                                                </tr>
                                                <tr style={{border:"1px solid black"}}>
                                                    <td style={{border:"1px solid black"}}>{k++}</td>
                                                    <td style={{border:"1px solid black"}}>5502100006</td>
                                                    <td style={{border:"1px solid black"}}>B.cover</td>
                                                    <td style={{border:"1px solid black"}}>14</td>
                                                    <td style={{border:"1px solid black"}}><input type="text" value="Lopers is a dummy text userd for display"></input></td>
                                                </tr>
                                            </tbody>
                                        </table>
                       </div>
                     )
                        })
                    }
                </div>
            </div>
          );
    }
}
 
export default ShipmentDetails;

