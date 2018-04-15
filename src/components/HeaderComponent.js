import React from 'react';

const HeaderComponent = ({props})=>
  <div className = 'headerComponent'>
    <h1 className = 'pageTitle'>Manufacture Line</h1>
    <div className = 'crop'>
      <img src = "https://images.unsplash.com/photo-1513295202663-54cd69dd2b43?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa37b6bb1b7646a324243363fb95d41e&auto=format&fit=crop&w=2690&q=80" alt = "Header"/>
      <div className="top-left">REAL-TIME</div>
      <div className="top-left">ASSEMBLY LINE</div>
      <div className="top-left">MONITORING</div>
    </div>
  </div>;

export default HeaderComponent;