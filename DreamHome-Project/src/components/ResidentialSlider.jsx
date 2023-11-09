import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

function ResidentialSlider(props) {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {setIndex(selectedIndex)};
    return (
      <div style={{zIndex: '22222222'}}
      className='background-color-primary position-fixed top-0 h-100 w-100 d-flex align-items-center justify-content-center'>
      <div className='w-100 d-flex flex-column align-items-start gap-4 px-2 px-md-5'>
      <label style={{ textUnderlineOffset: '0.2em'}}
      className='card-hover text-white fs-6 fw-regular text-decoration-underline' onClick={props.onClick}>Go Back</label>
    <Carousel style={{border: '3px solid white'}} 
    activeIndex={index} onSelect={handleSelect} className='w-70 rounded'>
       {(props.images)?.map((image,index)=>(
        <Carousel.Item 
         className='rounded'>
        <div className="position-relative rounded">
        <img loading='lazy' className="d-block w-100 slider-image-residential rounded" src={image} alt="Slider-Image1" />
        <div className="gradient-overlay"></div>
        </div>
        </Carousel.Item>
       ))} 
    </Carousel>
      </div>
    </div>
    )}
    export default ResidentialSlider;
  