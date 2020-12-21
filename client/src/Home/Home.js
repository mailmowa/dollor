import React, { Component } from 'react';
import Navbar from './Navbar';
import Body from './Body';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Login';
import Register from './Register';
import Ship from './Text';

function Home12() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
class Home extends Component {
 
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    return ( 
          <div style={{paddingTop:"",backgroundColor:""}}>
                {/* Nav Section */}
                <Navbar></Navbar>
        <Router> 
             {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/Home" exact>
                      <Body></Body>
                  </Route>
                  <Route path="/Home/about">
                      <About />
                  </Route>
                  <Route path="/Home/users">
                    <Users />
                  </Route>
                  <Route path="/Home/Login">
                     <Login></Login>
                  </Route>
                  <Route path="/Home/Register">
                    <Register></Register>
                  </Route>
            </Switch>
     
        </Router> 
                
                
          </div>
     );
  }
}
 
export default Home;