import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import sliderImage1 from './../assets/Projects/damac/damacHero.jpg';
import sliderImage2 from './../assets/Projects/oceanz/oceanzImg.png';
import sliderImage3 from './../assets/Projects/olivia/oliviaHero.jpeg';
import sliderImage4 from './../assets/Projects/samana/samanaHero.jpg';
import sliderImage5 from './../assets/Projects/vyb/vybHero.jpeg';

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
        <Carousel.Item> 
        <div className="position-relative">
        <img loading='lazy' className="d-block w-100 slider-image-style" src={sliderImage4} alt="Slider-Image4" />
        <div className="gradient-overlay"></div>
        </div>
        </Carousel.Item>
        <Carousel.Item> 
        <div className="position-relative">
        <img loading='lazy' className="d-block w-100 slider-image-style" src={sliderImage5} alt="Slider-Image5" />
        <div className="gradient-overlay"></div>
        </div>
        </Carousel.Item>
    </Carousel>
    )}
    export default HeroSection;
  