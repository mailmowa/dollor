import React from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'
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
      <TheSidebar/>
     
    </Router>
    </div>
  )
}

export default TheLayout
