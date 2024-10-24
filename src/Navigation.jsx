import './header.css'
import { FaLinkedin } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";


import { Link, NavLink } from "react-router-dom"
const Navigation = () => {
  const data_socialmedia_sideheader=[
    {
      icon:<IoIosMail/>,
    txt:"Mail",
    link:"mailto:kddubey8770@gmail.com",
    color:'#282856'
  },
  {
    icon:<FaLinkedin/>,
    txt:"LinkedIn",
    link:"https://www.linkedin.com/in/kshiteej-dubey?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    color:'#282856'},
  {
    icon:<FaGithub/>,
    color:'#282856',
    txt:"GitHub",
    link:'https://github.com/Kshiteejdubey'
  },
  ]
  return (
    <div className="navigation_container">
      <ul>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/about"className='nav_item'><li>About</li></NavLink>
        <NavLink to="/services"><li>Services</li></NavLink>
        <NavLink to="/portfolio"className='nav_item'><li>Portfolio</li></NavLink>
        <NavLink to="/contact"className='nav_item'><li>Contact</li></NavLink>
       
       
      </ul>
      
        <div className='social_icon_container'>
        {
        data_socialmedia_sideheader.map((linkitem,index)=>{
          return(
<a href={linkitem.link} target="_blank"key={index}>{linkitem.icon}</a>
          )
        })
    
      }
      </div> 
    <div className="copyright"><p>Copyright © 2024 Kshiteej Dubey. All rights reserved.</p></div>
    </div>
    
  )
}

export default Navigation
