import React, { useState } from 'react';
import profileImage from "./../assets/Images/ProfileImage.jpg";
import profileImage2 from "./../assets/Images/ProfileImage2.jpg";
import profileImage3 from "./../assets/Images/ProfileImage3.jpg";
import profileImage4 from "./../assets/Images/ProfileImage4.jpg";
import starIcon from "./../assets/Icons/starIcon.png";

const feedbackData = [
  {
    title: 'Usama',
    image: profileImage,
    extraDescription: 'I am extremely impressed with the quality of service provided. The team was responsive, knowledgeable.',
  },
  {
    title: 'Shayan',
    image: profileImage2,
    extraDescription: 'The product reliability has been outstanding.We have not  experienced any downtime or issues since we started using it',
  },
  {
    title: 'Ammar',
    image: profileImage3,
    extraDescription: 'The new features introduced in the latest update are a game-changer. They have made a significant impact on our productivity.',
  },
  {
    title: 'Izhar',
    image: profileImage4,
    extraDescription: 'The regular updates and improvements demonstrate the company commitment to staying current and delivering the best experience.',
  }
];

const FeedbackCard = ({ title,image,isActive, isLowOpacity, isBigger, isSmaller, extraDescription }) => (
  <div className={`feedback-card ${isActive ? 'active' : ''} ${isLowOpacity ? 'low-opacity' : ''} ${isBigger ? 'bigger' : ''} ${isSmaller ? 'smaller' : ''}`}>
     <div className='d-flex flex-column align-items-center gap-2 py-5'>
         <div className='p-0 m-0'>
          <img src={image} alt="profile-Image" className="img-fluid p-0 m-0 circle-image"/>
          </div>
          <h1 className='m-0 fs-2 fw-bold font-color-primary'>{title}</h1>
          <div className='d-flex flex-row align-items-center m-0'>
            <img src={starIcon} alt="review-Icon" width="22" height='auto' />
            <img src={starIcon} alt="review-Icon" width="22" height='auto' />
            <img src={starIcon} alt="review-Icon" width="22" height='auto' />
            <img src={starIcon} alt="review-Icon" width="22" height='auto' />
            <img src={starIcon} alt="review-Icon" width="22" height='auto' />
          </div>
          {extraDescription && <p style={{height: '1rem'}} className='fw-medium fs-para font-color-light text-center m-0 py-3'>{extraDescription}</p>}
     </div>
     </div>
);

const FeedbackSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleNext = () => {
    const newIndex = (activeIndex + 1) % feedbackData.length;
    setActiveIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex = (activeIndex - 1 + feedbackData.length) % feedbackData.length;
    setActiveIndex(newIndex);
  };

  const visibleCards = [];
  for (let i = 0; i < 3; i++) {
    const index = (activeIndex + i) % feedbackData.length;
    visibleCards.push(feedbackData[index]);
  }

  return (
    <div className="feedback-slider container">
      <button onClick={handlePrev} className='card-hover'>&#8592;</button>
      {visibleCards.map((card, index) => (
        <FeedbackCard
          key={index}
          image={card.image}
          description={card.description}
          isActive={index === 1}
          isLowOpacity={(index === 0 || index === 2) && index !== 1}
          isBigger={index === 1}
          isSmaller={(index === 0 || index === 2) && index !== 1}
          extraDescription={index === 1 ? card.extraDescription : ''}
        />
      ))}
      <button onClick={handleNext} className='card-hover'>&#8594;</button>
      <style>
        {`
          .feedback-slider {
            display: flex;
            align-items: center;
          }

          .feedback-card {
            flex: 1;
            // margin: 0 20px;
            transition: all 0.4s ease;
          }

          .active {
            opacity: 1;
            transform: scale(1.1);
            z-index: 1;
          }

          .low-opacity {
            opacity: 0.6;
          }

          .bigger {
            transform: scale(1.1);
          }

          .smaller {
            transform: scale(0.6);
          }

          button {
            background: none;
            border: none;
            font-size: 3rem;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default FeedbackSlider;
