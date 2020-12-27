import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Admin from './Dashboard/Admin/index';
import Admin from './Admin/Admin/index';
import SignUpWithId from './Home/RegisterWithId';

import { BrowserRouter as Router,Route,Switch, useParams,Redirect } from "react-router-dom";

const pagenotfoung = () => { return(
  <div style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"5%"}}>
    <h1>404</h1>
    <h1>PAGE NOT FOUND</h1>
  </div>
  ) }

ReactDOM.render(
  <Router>
  {/* <App /> */}
  <Switch>
            {/* <Route path="/" exact component={App}/> */}
            <Route path="/Home" component={App}/>
            {/* <Route path="/App"  component={App}/>*/}
            {/* <Route path="/Refer/:id"   component={SignUpWithId} /> */}
            <Route path="/Admin/2b87b6e8-3928-11eb-adc1-0242ac120002"  component={Admin}/> 
            <Route exact path="/" render={() => (<Redirect to="/Home" />)} />  
            <Route component={pagenotfoung}></Route>
            {/* <Route path="/Plan" component={Bussiness_plan}></Route> */}
            {/* <Route path="/Signup/:username" exact component={Signup}/> */}
   </Switch>
</Router> ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
