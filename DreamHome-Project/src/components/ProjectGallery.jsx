import React, { useState } from 'react';
import img1 from './../assets/Images/Studio_6.jpg';
import img2 from './../assets/Images/Studio_7.jpg';
import nextArrow from './../assets/Icons/next.png';
import backArrow from './../assets/Icons/back.png';

function ProjectGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1,img1,img1,img2,img2,img2];
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
          className="slider-image rounded"
        />
      );
    }
    return visible;
  };
   
  return (
       <div id="show-footer"
       className="d-flex flex-column gap-5 position-relative p-5 mt-5">
            <div className="d-flex flex-row align-items-center justify-content-between">
            <h1 className="text-white fs-1 fw-bold">PROJECT GALLERY</h1>
             <div className="d-flex flex-row align-items-center gap-4 px-3">
                <img src={backArrow} alt="next-arrow" className='w-auto' style={{height: '2rem'}}
                onClick={handlePreviousBtn} />
                <img src={nextArrow} alt="next-arrow" className='w-auto' style={{height: '2rem'}}
                onClick={handleNextBtn}/>
             </div>
            </div>
            <div className="d-flex flex-row gap-4 overflow-hidden">
              {getVisibleImages()}
            </div>
            <div className="half-background-primary"></div>
       </div>
  );}

export default ProjectGallery;
