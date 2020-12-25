import React from 'react';
import Autopool from './Autopool/autopool';
import Autopool2 from './Autopool/autopoolTwo';
import Autopool3 from './Autopool/autopoolThree';
// import Autopool4 from './Autopool/autopoolFour';

class Mainautopool extends React.Component{

    constructor(){
        super();
        this.state ={
            render: '',
        }
    }

    render(){
        return(
            
            <div>
                {/* Autopool buttons */}
                <div style={{display:"flex",flexWrap:'wrap',fontSize:"13px"}}>

                    <button
                    className="btn btn-link"
                    onClick={() => this.setState({render: <Autopool></Autopool>})}
                    > 
                    Autopool 1
                    </button>

                    <button
                    className="btn btn-link"
                    onClick={() => this.setState({render: <Autopool2></Autopool2>})}
                    > 
                      Autopool 2
                    </button>

                    <button
                    className="btn btn-link"
                    onClick={() => this.setState({render: <Autopool3></Autopool3>})}
                    > 
                     Autopool 3
                    </button>

                  

                    {/* <button
                    className="btn btn-link"
                    onClick={() => this.setState({render: <Autopool5></Autopool5>})}
                    > 
                      Diamond
                    </button> */}

                    {/* <button
                    className="btn btn-link"
                    onClick={() => this.setState({render: <Autopool6></Autopool6>})}
                    >
                      Million
                    </button> */}


                    {/* <button
                    className="btn btn-link"
                    onClick={() => this.setState({render: <Autopool7></Autopool7>})}
                    >
                         Billion
                         </button> */}

                    {/* <button
                    className="btn btn-link"
                    onClick={() => this.setState({render: <Autopool8></Autopool8>})}
                    >
                        Trillion
                    </button> */}

                    {/* <button
                    className="btn btn-link"
                    onClick={() => this.setState({render: <Autopool9></Autopool9>})}
                    >
                         Crown
                    </button> */}

                    {/* <button
                    className="btn btn-link"
                    onClick={() => this.setState({render: <Autopool10></Autopool10>})}
                    >
                       Ace
                    </button> */}



                </div>
                {this.state.render}
            </div>
        )
    }
}

export default Mainautopool;