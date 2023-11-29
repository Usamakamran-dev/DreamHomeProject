import { useState , useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import oceanzImg from './../assets/Projects/oceanz/oceanzImg.png';
import oliviaImg from './../assets/Projects/olivia/oliviaHero.jpeg';
import samanaImg from './../assets/Projects/samana/samanaHero.jpg';
import vybImg from './../assets/Projects/vyb/vybHero.jpeg';
import havenImg from './../assets/Projects/haven/havenImg.webp';
import oceanzMobile from './../assets/Projects/oceanz/oceanzImg 1.png';
import oliviaMobile from './../assets/Projects/olivia/oliviaHero 1.png';
import samanaMobile from './../assets/Projects/samana/samanaHero 1.png';
import havenMobile from './../assets/Projects/haven/havenImg 1.png';

const HeroSection = () => {
    const [index, setIndex] = useState(0);
    const [images, setImages] = useState({
      md: [oceanzImg, oliviaImg, samanaImg, vybImg, havenImg],
      mobile: [oceanzMobile, oliviaMobile, samanaMobile, havenMobile],
    });
  
    const [currentImages, setCurrentImages] = useState(images.md);
  
    useEffect(() => {
      const handleResize = () => {
        const isMobile = window.innerWidth < 550;
        setCurrentImages(isMobile ? images.mobile : images.md);
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [images.mobile, images.md]);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} className='carousel-fade'>
        {currentImages.map((img, idx) => (
          <Carousel.Item key={idx}>
            <div className="position-relative">
              <img loading='lazy' className="d-block w-100 slider-image-style" src={img} alt={`Slider-Image${idx + 1}`} />
              <div className="gradient-overlay"></div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  };
  
  export default HeroSection;
  