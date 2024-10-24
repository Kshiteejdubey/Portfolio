import Buttonhome from './Buttonhome'
import { FaTelegramPlane } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import resume from './image/Kshiteej Dubey (1).pdf'

import { NavLink } from 'react-router-dom';
const Home_text_animation = () => {
  return (
    <div className='text_animation_container'>
    <h2>Hello, I'm </h2>
    <h1>Kshiteej Dubey</h1><span className='handicon'>👋</span>
<div className='animated_text_container'>
<div className='linebeforetext'></div>
<div className='animated_text'>
    <ul>
        <li><span>Frontend developer</span></li>
        {/* <li><span>Mern Stack enthusiast</span></li> */}
        <li><span>Web Freelancer</span></li>
    </ul>
    
</div>
</div>
<div className='info_container'>
<div className='para_info_container'><p className='para_info'>A <span>Front-End Developer</span> passionate about creating intractive application and experience on the web.</p></div>
   <div className='btn_container'>
   <NavLink to="/about" className="btn_hh">   <Buttonhome btnvalue={"About Me"} icon={<FaTelegramPlane/>}/>
</NavLink>
<NavLink to="/Portfolio" className="btn_hh"><Buttonhome btnvalue={"My Works"} icon={<FaLocationArrow/>}/>
</NavLink>
 <a href={resume} className='resume_download' download><Buttonhome btnvalue={" Download Resume"} icon={<FaCloudDownloadAlt/>}/></a>
   </div>
   <div className='contact_information_container'>
<p>+91 7307269992</p>
<p>kddubey8770@gmail.com</p>
<p>Azamgarh Uttar Pradesh pin Code 276123</p>
   </div> 
   </div>
    </div>
    
  )
}

export default Home_text_animation