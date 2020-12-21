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

import Adminheader from './TheAdminHeader';
import Admincontent from './TheAdminContent';

// sidebar nav config
import navigation from './Admin_nav';


const TheSidebar = () => {

  const [show, setshow] = useState(true)

  return (
    <div>
        <CSidebar
      show={show}
    //   onShowChange={}
    >
      <CSidebarBrand className="d-md-down-none" >
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
        <Adminheader toggleSideBar={() => setshow(!show)} />
        <div className="c-body">
           <Admincontent></Admincontent>
        </div>
        {/* <TheFooter/>*/}
      </div> 
    
    </div>
  )
}

export default React.memo(TheSidebar)
