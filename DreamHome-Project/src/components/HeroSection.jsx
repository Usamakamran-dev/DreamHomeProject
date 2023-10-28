import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import damacImg from './../assets/Projects/damac/damacHero.jpg';
import oceanzImg from './../assets/Projects/oceanz/oceanzImg.png';
import oliviaImg from './../assets/Projects/olivia/oliviaHero.jpeg';
import samanaImg from './../assets/Projects/samana/samanaHero.jpg';
import vybImg from './../assets/Projects/vyb/vybHero.jpeg';
import havenImg from './../assets/Projects/haven/havenImg.webp';

function HeroSection() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {setIndex(selectedIndex)};
    return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='carousel-fade'>
        <Carousel.Item>
        <div className="position-relative">
        <img loading='lazy' className="d-block w-100 slider-image-style" src={havenImg} alt="Slider-Image1" />
        <div className="gradient-overlay"></div>
        </div>
        </Carousel.Item>
        <Carousel.Item> 
        <div className="position-relative">
        <img loading='lazy' className="d-block w-100 slider-image-style" src={oceanzImg} alt="Slider-Image2" />
        <div className="gradient-overlay"></div>
        </div>
        </Carousel.Item>
        <Carousel.Item> 
        <div className="position-relative">
        <img loading='lazy' className="d-block w-100 slider-image-style" src={samanaImg} alt="Slider-Image3" />
        <div className="gradient-overlay"></div>
        </div>
        </Carousel.Item>
        <Carousel.Item> 
        <div className="position-relative">
        <img loading='lazy' className="d-block w-100 slider-image-style" src={oliviaImg} alt="Slider-Image4" />
        <div className="gradient-overlay"></div>
        </div>
        </Carousel.Item>
        <Carousel.Item> 
        <div className="position-relative">
        <img loading='lazy' className="d-block w-100 slider-image-style" src={vybImg} alt="Slider-Image5" />
        <div className="gradient-overlay"></div>
        </div>
        </Carousel.Item>
        <Carousel.Item> 
        <div className="position-relative">
        <img loading='lazy' className="d-block w-100 slider-image-style" src={damacImg} alt="Slider-Image5" />
        <div className="gradient-overlay"></div>
        </div>
        </Carousel.Item>
    </Carousel>
    )}
    export default HeroSection;
  