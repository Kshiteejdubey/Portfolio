import './portfolio.css'
import Projec1 from './image/university.jpg'
import project2 from './image/project2img.png'
import project3 from './image/project3img.png'
import Project4 from './image/food-image.webp'
const Portfolio = () => {
let imgobj=[
  {
img:Project4,
text:"Food Delivery Website",
description:"Developed a dynamic single-page application (SPA) for a food delivery service using React.js, HTML, CSS, and JavaScript. This project features a user-friendly interface where customers can easily filter food items based on categories, ensuring a seamless browsing experience. Leveraged React's Context API for state management.",
link:"#",
},
{
img:project2,
text:"Tasty burger",
link:"#",
description:"Our Tasty Burger website is designed with our customers in mind, ensuring a seamless experience whether you're browsing from a computer, tablet, or smartphone. With a modern and intuitive interface, you can easily explore our menu, place orders online. our sitealso include customer reviews, and the latest promotions to keep you informed and engaged."
},
{
  img:project3, 
  text:" personal portfolio",
  link:"#",
  description:"This portfolio website serves as a dynamic showcase of my skills, experiences, and accomplishments, offering a professional platform to highlight my unique talents and attract potential clients, employers, or collaborators."

}]
  return (
    <div className="portfolio_container">
    {imgobj.map((item,index)=>{
      return(
       <div className='portfolio_card' key={index}>
       <a href={item.link} target='_blank'>
        <img src={item.img} alt="projectimg" className='projectimage'/>
        <p className='project_title'>{item.text }</p>
        <p className='project_description'>{item.description}</p>
        </a>
       </div> 
      )
    })}
    </div>
  )
}

export default Portfolio