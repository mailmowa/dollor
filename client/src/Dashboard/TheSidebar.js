import React, { useState } from 'react'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import './Sidebar.css'

import {
  TheContent,
  TheFooter,
  TheHeader
} from './index'

// sidebar nav config
import navigation from './_nav'


const TheSidebar = () => {

  const [show, setshow] = useState(true)

  return (
    <div>
        <CSidebar
      show={show}
    //   onShowChange={}
    >
      <CSidebarBrand className="d-md-down-none" >
         <div className="Brand_heading">
         {/* <i class='fas fa-dollar-sign fa-rotate-45'></i> */}
         <span >
                      <span style={{color:"gold",fontSize:"1.5em"}}>$</span>Dollar.net
         </span>
         </div>
        <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav>

        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />

      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>

    <div className="c-wrapper">
        <TheHeader toggleSideBar={() => setshow(!show)} />
        <div className="c-body">
          <TheContent/>
        </div>
        {/* <TheFooter/>*/}
      </div>

    </div>
  )
}

export default React.memo(TheSidebar)
