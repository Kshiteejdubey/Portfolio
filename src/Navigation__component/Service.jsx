import Servicecard from './Servicecard';
import img4 from './image/1.png'
import img5 from './image/2.png'
import img6 from './image/6.png'
const Service = () => {
  
  return (
    <div className="service_container">
    <img src={img4} alt="background-effect" className='bg1'/>
    <img src={img5} alt="background-effect" className='bg2'/>
    <img src={img6} alt="background-effect" className='bg3'/>
    <p className='service_upper_txt'>- SERVICES</p>
    <p className='service_txt'><span>Services</span> That I Provide</p>
      <Servicecard/>
    </div>
  );
}

export default Service;
