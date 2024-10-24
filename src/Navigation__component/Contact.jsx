import React ,{useContext}from 'react'
import './contact.css'
import email from './image/email.jpg'
import linkedin from './image/linkedin.png'
import github from './image/github.png'
import contextEle from '../Context'

const Contact = () => {
  const data=useContext(contextEle)
  function scrollfun(){
    data.setData()
    
  }
  const datasocialmedia=[
    {
    icon:email,
    txt:"Mail",
    link:"mailto:kddubey8770@gmail.com"
  },
  {
    icon:linkedin,
    txt:"LinkedIn",
    link:"https://www.linkedin.com/in/kshiteej-dubey?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    icon:github,
    txt:"GitHub",
    link:'https://github.com/Kshiteejdubey'
  },
]
  return (
    <div className='contact_container' onScroll={scrollfun}>
    <div className='left_contact_container'>
<p className='letsconnect'>- LET'S CONNECT</p>
<h2 className='getintouch'>Get In Touch</h2>
<p className='currentlyavilable'>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact anytime at 24/7</p>
   <div className='social_icon_container'>
    {
      datasocialmedia.map((item,index)=>{
       return(
        <a href={item.link} target="_blank" key={index}><div className='icon_box'>
        <img src={item.icon}alt="social-icon"/>
        <p className='icon_txt'>{item.txt}</p>
        </div></a>
       ) 
      })
    }
   </div>
    </div>
    <div className='right_contact_container'>
<form>
  <input type="text" placeholder='enter your name' className='namefield commoninput'/>
  <input type='email'placeholder='enter your email id'className='emailid commoninput'/>
  <input type='number'placeholder='enter your mobile number'className='mobileno commoninput'/>
<textarea placeholder='Enter your message here'className='message_box'></textarea>
<a href="mailto:vikashthakur701@gmail.com"value="submit"className='submit_btn'>Submit</a>
  
</form>
    </div>
    </div>
  )
}

export default Contact