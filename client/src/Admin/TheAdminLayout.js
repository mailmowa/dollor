import React from 'react'
import Adminsidebar from './TheAdminSidebar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const TheLayout = () => {

  return (
    <div className="">
    <Router>
      <Adminsidebar></Adminsidebar>
     
    </Router>
    </div>
  )
}

export default TheLayout
