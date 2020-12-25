import React from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const WidgetsDropdown = (props) => {
  console.log(props.incomes);
  // render
  return (
    <CRow>
      <CCol sm="6" lg="6">
        <CWidgetDropdown
          color="gradient-primary"
          style={{paddingBottom:"1em",fontSize:"1.5em"}}
          header={props.incomes.wallet}
          text="Wallet Income"
        //   footerSlot={
        //     <ChartLineSimple
        //       pointed
        //       className="c-chart-wrapper mt-3 mx-3"
        //       style={{height: '70px'}}
        //       dataPoints={[65, 59, 84, 84, 51, 55, 40]}
        //       pointHoverBackgroundColor="primary"
        //       label="Members"
        //       labels="months"
        //     />
        //   }
        >
            <div style={{width:"40%",height:"100%",fontSize:"3.2em",display:"flex",justifyContent:"flex-end",alignContent:"center",opacity:"0.6"}}>
            <i class='fas fa-wallet '></i>
          </div>
         
          {/* <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown> */}
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="6">
        <CWidgetDropdown
          color="gradient-info"
          header={props.incomes.Level}
          style={{paddingBottom:"1em",fontSize:"1.5em"}}
          text="Level Income "
        //   footerSlot={
        //     <ChartLineSimple
        //       pointed
        //       className="mt-3 mx-3"
        //       style={{height: '70px'}}
        //       dataPoints={[1, 18, 9, 17, 34, 22, 11]}
        //       pointHoverBackgroundColor="info"
        //       options={{ elements: { line: { tension: 0.00001 }}}}
        //       label="Members"
        //       labels="months"
        //     />
        //   }
        >
          <div style={{width:"50%",height:"100%",fontSize:"3em",display:"flex",justifyContent:"flex-end",opacity:"0.6"}}>
              <i class="fa fa-sitemap" aria-hidden="true"></i>
          </div>
          
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="6">
        <CWidgetDropdown
          color="gradient-warning"
          header={props.incomes.Recieved}
          style={{paddingBottom:"1em",fontSize:"1.5em"}}
          text="Received Income"
        //   footerSlot={
        //     <ChartLineSimple
        //       className="mt-3"
        //       style={{height: '70px'}}
        //       backgroundColor="rgba(255,255,255,.2)"
        //       dataPoints={[78, 81, 80, 45, 34, 12, 40]}
        //       options={{ elements: { line: { borderWidth: 2.5 }}}}
        //       pointHoverBackgroundColor="warning"
        //       label="Members"
        //       labels="months"
        //     />
        //   }
        >
          
              <div style={{width:"50%",height:"100%",fontSize:"3em",display:"flex",justifyContent:"flex-end",opacity:"0.6"}}>
                 <i class='fas fa-download'></i>
              </div>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="6">
        <CWidgetDropdown
          color="gradient-danger"
          header={props.incomes.Autopool}
          text="Autopool Income"
          style={{paddingBottom:"1em",fontSize:"1.5em"}}
          
        >
            <div style={{width:"50%",height:"100%",fontSize:"3em",display:"flex",justifyContent:"flex-end",opacity:"0.6"}}>
            <i class='fas fa-hand-holding-usd'></i>
              </div>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="6">
        <CWidgetDropdown
          color="gradient-dark"
          header={props.incomes.Royalty}
          style={{paddingBottom:"1em",fontSize:"1.5em"}}
          text="Royalty Income"
        //   footerSlot={
        //     <ChartLineSimple
        //       className="mt-3"
        //       style={{height: '70px'}}
        //       backgroundColor="rgba(255,255,255,.2)"
        //       dataPoints={[78, 81, 80, 45, 34, 12, 40]}
        //       options={{ elements: { line: { borderWidth: 2.5 }}}}
        //       pointHoverBackgroundColor="warning"
        //       label="Members"
        //       labels="months"
        //     />
        //   }
        >
          
          <div style={{width:"50%",height:"100%",paddingRight:"20px",fontSize:"3em",display:"flex",justifyContent:"flex-end",opacity:"0.6"}}>
          <i class='fas fa-dollar-sign'></i>
          </div>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="6">
        <CWidgetDropdown
          color="gradient-success"
          header={props.incomes.Totalearnings}
          text="Total Earnings"
          style={{paddingBottom:"1em",fontSize:"1.5em"}}
          
        >
         
          <div style={{width:"50%",height:"100%",fontSize:"3em",display:"flex",justifyContent:"flex-end",opacity:"0.6"}}>
                <i class='fas fa-money-bill-wave'></i>
          </div>
        </CWidgetDropdown>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
