import React, { useState } from 'react';
// import sarahImage from "./../assets/Images/sarah.png";
// import lisaImage from "./../assets/Images/lisa.png";
// import jamesImage from "./../assets/Images/james.png";
// import emilyImage from "./../assets/Images/emily.png";
// import cameronImage from "./../assets/Images/cameron.png";
import maleImage from './../assets/Images/male.svg';
import starIcon from "./../assets/Icons/starIcon.png";

const feedbackData = [
  {
    title: 'Milad',
    image: maleImage,
    extraDescription: 'As a first-time homebuyer, I was both excited and overwhelmed by the process of finding the perfect property.Their knowledgeable team guided me through every step!',
  },
  {
    title: 'Hunain',
    image: maleImage,
    extraDescription: 'Working with Realtor Nine was such a pleasure! Their agents are professional, approachable, and have a deep understanding of the local market.',
  },
  {
    title: 'Muhammad Salman',
    image: maleImage,
    extraDescription: 'R9 conducted a thorough market analysis to determine the ideal asking price, marketed my property extensively, and skillfully negotiated with potential buyers.I would trust Realtor 9 with any future real estate transactions without hesitation',
  },
  {
    title: 'Abu Rayan',
    image: maleImage,
    extraDescription: 'Realtor Nine exceeded my expectations when it came to selling my home.Their team of experienced agents worked tirelessly to showcase the unique features of my home and attract potential buyers.',
  },
  {
    title: 'Amir',
    image: maleImage,
    extraDescription: 'I had the pleasure of working with Realtor Nine for both buying and selling properties, and they consistently delivered exceptional service. Their team went above and beyond to understand my needs.',
  },
  {
    title: 'Osama',
    image: maleImage,
    extraDescription: 'Realtor Nine extensive knowledge of the market, combined with their network of industry connections, allowed me to find lucrative investment opportunities.',
  }
];

const FeedbackCard = ({ title,image,isActive, isLowOpacity, isBigger, isSmaller, extraDescription }) => (
  <div className={`feedback-card ${isActive ? 'active' : ''} ${isLowOpacity ? 'low-opacity' : ''} ${isBigger ? 'bigger' : ''} ${isSmaller ? 'smaller' : ''}`}>
     <div className='d-flex flex-column align-items-center gap-2 py-5 h-100'>
         <div className='p-0 m-0'>
          <img src={image} alt="profile-Image" className="p-0 m-0 circle-image"/>
          </div>
          <h1 className='m-0 h-mobile fw-bold text-center font-color-primary'>{title}</h1>
          <div className='d-flex flex-row align-items-center m-0'>
            <img src={starIcon} alt="review-Icon" width="22" height='auto' />
            <img src={starIcon} alt="review-Icon" width="22" height='auto' />
            <img src={starIcon} alt="review-Icon" width="22" height='auto' />
            <img src={starIcon} alt="review-Icon" width="22" height='auto' />
            <img src={starIcon} alt="review-Icon" width="22" height='auto' />
          </div>
          {extraDescription && <p style={{height: '1rem'}} className='fw-medium fs-para font-color-light text-center m-0'>{extraDescription}</p>}
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
      <button onClick={handlePrev} className='card-hover arrow-style'>&#8592;</button>
      {visibleCards.map((card, index) => (
        <FeedbackCard
          key={index}
          title={card.title}
          image={card.image}
          description={card.description}
          isActive={index === 1}
          isLowOpacity={(index === 0 || index === 2) && index !== 1}
          isBigger={index === 1}
          isSmaller={(index === 0 || index === 2) && index !== 1}
          extraDescription={index === 1 ? card.extraDescription : ''}
        />
      ))}
      <button onClick={handleNext} className='card-hover arrow-style'>&#8594;</button>
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

          @media (max-width: 767px) {
            .feedback-card {
              display: none;
            }

            .feedback-card.active {
              display: block;
            }
          }
        `}
      </style>
    </div>
  );
};

export default FeedbackSlider;
