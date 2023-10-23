import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import sliderImage1 from './../assets/Images/sliderImage1.jpg';
import sliderImage2 from './../assets/Images/sliderImage2.jpg';
import sliderImage3 from './../assets/Images/sliderImage3.jpg';

function HeroSection() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {setIndex(selectedIndex)};
    return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='carousel-fade'>
        <Carousel.Item>
        <div className="position-relative">
        <img loading='lazy' className="d-block w-100 slider-image-style" src={sliderImage1} alt="Slider-Image1" />
        <div className="gradient-overlay"></div>
        </div>
        </Carousel.Item>
        <Carousel.Item> 
        <div className="position-relative">
        <img loading='lazy' className="d-block w-100 slider-image-style" src={sliderImage2} alt="Slider-Image2" />
        <div className="gradient-overlay"></div>
        </div>
        </Carousel.Item>
        <Carousel.Item> 
        <div className="position-relative">
        <img loading='lazy' className="d-block w-100 slider-image-style" src={sliderImage3} alt="Slider-Image3" />
        <div className="gradient-overlay"></div>
        </div>
        </Carousel.Item>
    </Carousel>
    )}
    export default HeroSection;
  