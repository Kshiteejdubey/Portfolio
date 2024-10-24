import React from 'react'
import imgerror from './image/error.svg'
import './service.css'

const Errorpage = () => {
  return (
    <div className='error_page_container'>
  <img src={imgerror}/>
  </div>
  )
}

export default Errorpage;