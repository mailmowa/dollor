import React, { useState } from 'react';
import './home.css'

function BusinessPlan() {

  return (
    <div  style={{marginTop:"100px",display:"flex",height:"100vh"}}>
    <div   style={{width:"100%",display:"flex",justifyContent:"center"}}>
     
      <iframe className="col-md-6 frames " frameborder="0" allowFullScreen  width="100%" 
      src={process.env.PUBLIC_URL + '/Dollornet.pdf#toolbar=0&view=fitH,50&scrollbar=0'}></iframe>
    
    </div> 
      </div>
  );

}

export default BusinessPlan;