import React,{useState,useContext} from 'react'
import img from './assets//kd.png'
import './header.css'
import { RxCross2 } from "react-icons/rx";
import contextEle from './Context'




const Logo_title = () => {

const datavalue=useContext(contextEle)
const hidemenu=()=>{
  console.log(datavalue.data)
  setTimeout(()=>{
    console.log()
    datavalue.setData(false)
    
  },200)
  
}
  return (
  
    <div className='logo_container'>
    <div className="cross-btn">
    <RxCross2 className="cross_icon" onClick={hidemenu}/></div>
      <div className='img_container'>
<img src={img} alt="logo_img"width="100%" height="100%" className='logo_img'/>

      </div>
      <div className='title_container'>
        <h3 className='title_txt'>Kshiteej Dubey</h3>
      </div>
    </div>

  )
} 

export default Logo_title
