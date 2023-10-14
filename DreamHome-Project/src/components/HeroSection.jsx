import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import sliderImage1 from './../assets/Images/Studio_6.jpg';
import sliderImage2 from './../assets/Images/Studio_7.jpg';
import sliderImage3 from './../assets/Images/Studio_8.jpg';

function HeroSection() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {setIndex(selectedIndex)};
    return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={2000} className='carousel-fade'>
        <Carousel.Item>
        <div className="position-relative">
        <img className="d-block w-100 slider-image-style" src={sliderImage1} alt="Slider-Image1" />
        <div className="gradient-overlay"></div>
        </div>
        </Carousel.Item>
        <Carousel.Item> 
        <div className="position-relative">
        <img className="d-block w-100 slider-image-style" src={sliderImage2} alt="Slider-Image2" />
        <div className="gradient-overlay"></div>
        </div>
        </Carousel.Item>
        <Carousel.Item> 
        <div className="position-relative">
        <img className="d-block w-100 slider-image-style" src={sliderImage3} alt="Slider-Image3" />
        <div className="gradient-overlay"></div>
        </div>
        </Carousel.Item>
    </Carousel>
    )}
    export default HeroSection;
  