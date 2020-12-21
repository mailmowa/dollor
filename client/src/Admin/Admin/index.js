import React from 'react';
import Login from './login';
import Home from './home';
import './admin.css'
import Admindashboardmain from '../Admindashboardmain';

class Admin extends React.Component {

    constructor(){
        super();
        this.state= {
             Display: <Login login={() => this.handleLogin()}></Login>
           // Display: <Admindashboardmain></Admindashboardmain>
        }
    }

        componentDidMount(){

            const login = JSON.parse(sessionStorage.getItem('ADMINLOGIN'))

            if(login){

                this.setState({
                    Display: <Admindashboardmain></Admindashboardmain>
                })

            }else
            {
                this.setState({
                    Display: <Login login={() => this.handleLogin()}></Login>
                })
            }

        }


    handleLogin =()=>{
                console.log("Display");
                sessionStorage.setItem('ADMINLOGIN',JSON.stringify(true))
                this.setState({
                    Display: <Admindashboardmain></Admindashboardmain>
                })
    }

    handleLogout = () => {

     

    }

    render(){
        return(
            <div className="">

       
                 {this.state.Display}
        

            </div>
        )
    }
}

export default Admin;