import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './App.scss';
import Home from './Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import DashboardMain from './Dashboard/Dashboardmain';



class App extends React.Component{

  constructor(){
    super();
    this.state ={
      render: <Home></Home>,
      login:"",
      toggle: false
    }
  }

  componentDidMount(){
    //login 
    const login = JSON.parse(sessionStorage.getItem('LOGIN'))
   const userdata = JSON.parse(sessionStorage.getItem('USER_DETAILS'))
   // console.log(userdata);
 
 
    if(login){
 
      this.setState({
           login: true,
           render: <DashboardMain data={userdata}></DashboardMain>,
       })
       
 
    }
    else
    {

     this.setState({
       login: false,
     })
    }
   
    
  }
 

 render(){
  return (
    <div className="App">
     
      {this.state.render}
     
    
    </div>
  );
}
}

export default App;
