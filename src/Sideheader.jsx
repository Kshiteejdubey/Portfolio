import React, { useState,useContext } from 'react';
import Logo_title from './Logo_title';
import Navigation from './Navigation';
import contextEle from './Context'





const Sideheader = () => {

  const datavalue=useContext(contextEle)
  
  return (
   
    <div className={`header-container ${datavalue.data ? "yess":"no"}`} value={datavalue.data}>
      <Logo_title />
      <Navigation />
    </div>
   
  );
};

export default Sideheader;
