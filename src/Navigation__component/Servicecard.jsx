import React from 'react'
import img1 from './image/6.png'
import img2 from './image/1.png'
import img3 from './image/2.png'
import s1 from './image/s1.png'
import s2 from './image/s2.png'
import s3 from './image/s3.png'

import './service.css'
const Servicecard = () => {
    const arr1=[{
        heading:"Website Creation",
        description:"I will build any kind of fully Responsive Website for your Busines",
        img:s1
    },
    {
        heading:"File Conversion",
        description:"I will convert PSD to HTML,Figma to HTML websites and vice versa.",
        img:s2
    },
    {
        heading:"Customization",
        description:"I will do any customization for your prebuild HTML Website.",
        img:s3
    }
]
  return (
    <div  className="service_card">
    {
        arr1.map((item,index)=>{
            console.log(item)
       return(
        <div className="card" key={index}>
        <div className='card_info_container'>
        <img src={item.img} alt="img_card" className='card_img'/>
   <h3 className='card_heading'>{item.heading}</h3>
   <p className='card_des'>{item.description}</p>
   </div>
</div>
       )
        })    
    }
   
  </div>
  )
}

export default Servicecard;