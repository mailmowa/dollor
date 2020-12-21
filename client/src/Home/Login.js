import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import './home.css'
import axios from 'axios';

let interval
class Login extends Component {
   
    constructor(props) {
        super(props);
        this.state = { 
            Loading: false,
         } 
    }

    handlesubmit = async (e) => {
        e.preventDefault();

        this.setState({
            Loading : true
          })
         try{
                  await axios.post('/api/users/login', { userid: e.target.uname.value.toUpperCase() , password: e.target.password.value})
                    .then(res => {
                              if(parseInt(res.data.status) === parseInt(200)){
        
                                  //    console.log(res.data.userdetails);
                                      sessionStorage.setItem('LOGIN',JSON.stringify(true));
                                      sessionStorage.setItem('USER_DETAILS',JSON.stringify(res.data.userdetails));
                                      this.setState({
                                        Loading : false
                                      })
                                      window.location.reload()
        
                              }else if(parseInt(res.data.status) === parseInt(101)){
                                        document.getElementById('ERR_MSG').innerHTML = res.data.msg
        
                                        this.setState({
                                          Loading : false
                                        })
        
                                        interval = setTimeout(() => {
                                          document.getElementById('ERR_MSG').innerHTML = ""
                                        }, 3000);
        
                                   //     console.log(res.data.status);
                              }else{
                                        document.getElementById('ERR_MSG').innerHTML = res.data.msg
        
                                        this.setState({
                                          Loading : false
                                        })
                                        interval = setTimeout(() => {
                                          document.getElementById('ERR_MSG').innerHTML = ""
                                        }, 3000);
                                   //     console.log(res.data.status);
                              }
                    })
                    .catch(err => {
                       console.log(" ");
                       this.setState({ Loading: false })
                    })
           
           }
           catch(err)
           {
               console.log(" ");
               this.setState({ Loading: false})
           }

    }

    componentWillUnmount(){
        
    }

    render() { 
        return ( 
            <div className=" Login">
 
                    {/* <h1 style={{letterSpacing:"2px"}} className="font-weight-bold text-white">LOGIN</h1> */}
                  
                    <div class="area" >
                            <ul class="circles">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                            </ul>
                    </div >
         
                    <div className="login-box">
                    <h2 style={{fontWeight:"400"}}>LOGIN</h2>
                        <form onSubmit={(e) => this.handlesubmit(e)}>
                                <div class="user-box">
                                    <input type="text" pattern="[^' ']+" name="uname" required/>
                                    <label style={{fontWeight:"bold",letterSpacing:"2px"}}>Username</label>
                                </div>

                                <div class="user-box">
                                    <input type="password" pattern="[^' ']+" name="password" required />
                                    <label for="" style={{fontWeight:"bold"}}>Password</label>
                                </div>

                            <div id="ERR_MSG" style={{color:"red",fontSize:"20px"}} ></div>


                                <button type="submit" disabled={this.state.Loading} style={{border:"none",background:"none"}}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                 {this.state.Loading ? <Loader type="TailSpin" color="#00BFFF" height={20} width={20}/>: "Login"}
                                </button>
                        </form>
                        
                   
                    </div>
           </div>
         );
    }
}
 
export default Login;