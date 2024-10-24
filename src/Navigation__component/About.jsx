import React from 'react'
import Typeanimation from './Typeanimation'
import './about.css'
import imghtml from './image/html.png'
import css from './image/css.png'
import js from './image/js.png'
import bootstrap from './image/bootstrap.png'
import tailwind from './image/plugin.png'
import mui from './image/mui.png'
import github from './image/GitHub-Mark.png'
import postman from './image/postman.svg'
import react from './image/react.png'
import ReactQuery from './image/react-query.png'
let carddata=[
  {
    img:imghtml,
    tech:"HTML",
    techpara:"Mark-Up"
  },
  {
    img:css,
    tech:"CSS",
    techpara:"Style Sheet"
  },
  {
    img:js,
    tech:"JavaScript",
    techpara:"Programming"
  },
  {
    img:bootstrap,
    tech:"Bootstrap",
    techpara:"CSS Framework"
  },
  {
    img:tailwind,
    tech:"Tailwind CSS",
    techpara:"CSS Framework"
  },
  {
    img:react,
    tech:"React",
    techpara:"Js Library"
  },
  {
    img:mui,
    tech:"Material UI",
    techpara:"UI Library"
  },{
    img:github,
    tech:"Git & GitHub",
    techpara:"Version Control"
  },
  {
    img:ReactQuery,
    tech:"React Query",
    techpara:"API Platform"
  }
]
const About = () => {
  return (
    <div className='about_container'>
      <div className='about_container_inside'>
<div className='left_about_container'>
<p className='nicetomeet'>- NICE TO MEET YOU!</p>
<p className='name_about'>Kshiteej dubey</p>

  <Typeanimation/>
  <a href="#" className='gotaproject'>
  <button>Got a Project?</button></a>
</div>
<div className='right_about_container'>
  <p className='hellojyoti'>Hello there! Kshiteej dubey.I am a web designer & developer, and I'm very passionate and dedicated to my work.</p>
  <p className='innovative_mern'>Innovative frothend Developer with a passion for creating dynamic and responsive web applications. Adept in  frontend , with hands-on experience in HTML5, CSS3, JavaScript, React.js, React Query, Rest API. Skilled in building and optimizing web applications, and continuously seeking to expand knowledge in emerging web technologies.</p>
</div>
      </div>
      <div className='skill_container'>
      <div className='tech_stack_txt'>
      <p>- SKILLS</p>
      <p className='techstack'>Tech Stacks I Use</p>
      </div>
<div className='skill_img_container'>

{
  carddata.map((item,index)=>{
    return(
      <div className='icon_card_container'key={index}>
      <div className='icon_container'>
<img src={item.img}alt="teckstack_icon" className='icon_img'/>
      </div>
<div className='info_tech'>
<div className='icon_tech_name'>
  <p>{item.tech}</p>
</div>
<div className='tech_desc'> <p>{item.techpara}</p></div>
</div>
</div>
    )
  })
}


</div>
</div>
      </div>
      

  )
}

export default About