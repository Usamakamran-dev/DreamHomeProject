import React, { useState } from 'react';
import nextArrow from './../assets/Icons/right-arrow.png';
import backArrow from './../assets/Icons/left-arrow.png';

function ProjectGallery(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = props.images;
  const totalImages = images.length;
  const visibleImages = 3;

  const handleNextBtn = () => {
    const nextIndex = (currentIndex + 1) % totalImages;
    setCurrentIndex(nextIndex);
  };

  const handlePreviousBtn = () => {
    const previousIndex = (currentIndex - 1 + totalImages) % totalImages;
    setCurrentIndex(previousIndex);
  };

  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < visibleImages; i++) {
      const index = (currentIndex + i) % totalImages;
      visible.push(
        <img
          key={index}
          src={images[index]}
          alt={`Image-Section ${index}`}
          className="slider-image img-fluid"
        />
      );
    }
    return visible;
  };

  return (
    <div className="position-relative container mx-auto">
      <div className="d-flex flex-row gap-4 overflow-hidden">
        {getVisibleImages()}
      </div>
      <img style={{width: '4rem' , left: '-1rem'}}
        src={backArrow}
        alt="Back"
        onClick={handlePreviousBtn}
        className="shadow position-absolute bg-light rounded-circle p-4 p-md-4 top-50  translate-middle-y cursor-pointer h-auto"
      />
      <img style={{width: '4rem' , right : '-1rem' }}
        src={nextArrow}
        alt="Next"
        onClick={handleNextBtn}
        className="shadow position-absolute bg-light rounded-circle p-4 p-md-4 top-50 translate-middle-y cursor-pointer  h-auto"
      />
    </div>
    );}

    export default ProjectGallery;
