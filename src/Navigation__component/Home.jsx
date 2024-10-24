import React from 'react'
import img1 from './image/carton_boy.png'
import img2 from './image/1.png'
import img3 from './image/3.png'
import Home_text_animation from './Home_text_animation'


const Home = () => {
  return (
    <div className='home_continer_layout'>
    <div className='text_animation_container_main'> 
    <Home_text_animation/>
    </div>
    <div className='img_container_boy'>
     <img src={img1} alt='home_png' className='carton_boy_home'/>
     </div>
     <div className='circular_img_container'>
     <img src={img2} alt='circular_ring' className='circular_png'/>

     </div>
     <img src={img3} alt='circular_ring' className='circular2_png'/>
    </div>
  )
}

export default Home;
