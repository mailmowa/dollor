import React from 'react';
import Login from './login';
import Home from './home';
import './admin.css'

class Admin extends React.Component {

        constructor(){
            super();
            this.state= {
                // Display: <Login login={() => this.handleLogin()}></Login>
                Display: <Home></Home>
            }
        }

        componentDidMount(){

            const login = JSON.parse(sessionStorage.getItem('LOGIN'))

            if(login){

                this.setState({
                    Display: <Home></Home>
                })

            }

        }


    handleLogin =()=>{
                console.log("Display");
                sessionStorage.setItem('LOGIN',JSON.stringify(true))
            this.setState({
                Display: <Home logout={() => this.handleLogout()}></Home>
            })
        }

    handleLogout = () => {

        sessionStorage.setItem('LOGIN',JSON.stringify(false))
        this.setState({
            Display: <Login login={() => this.handleLogin()}></Login>
        })

    }

    render(){
        return(
            <div className="Main_div">

       
               {this.state.Display}
        

            </div>
        )
    }
}

export default Admin;