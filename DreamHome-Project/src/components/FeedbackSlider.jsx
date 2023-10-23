import React, { useState } from 'react';
import profileImage from "./../assets/Images/ProfileImage.jpg";
import profileImage2 from "./../assets/Images/ProfileImage2.jpg";
import profileImage3 from "./../assets/Images/ProfileImage3.jpg";
import profileImage4 from "./../assets/Images/ProfileImage4.jpg";
import starIcon from "./../assets/Icons/starIcon.png";

const feedbackData = [
  {
    title: 'Sarah Taylor',
    image: profileImage,
    extraDescription: 'As a first-time homebuyer, I was both excited and overwhelmed by the process of finding the perfect property. Realtor Nine made the experience incredibly smooth and efficient. Their knowledgeable team guided me through every step, from discovering my needs to signing the closing documents. Thanks to their expertise and dedication.',
  },
  {
    title: 'John Martin',
    image: profileImage2,
    extraDescription: 'Working with Realtor Nine was such a pleasure! Their agents are professional, approachable, and have a deep understanding of the local market. They took the time to listen to my preferences and showed me properties that perfectly matched my requirements',
  },
  {
    title: 'Lisa Roberts',
    image: profileImage3,
    extraDescription: 'R9 conducted a thorough market analysis to determine the ideal asking price, marketed my property extensively, and skillfully negotiated with potential buyers. Their expertise resulted in a quick sale at a great price. I would trust Realtor Nine with any future real estate transactions without hesitation',
  },
  {
    title: 'James Peter',
    image: profileImage4,
    extraDescription: 'Realtor Nine exceeded my expectations when it came to selling my home. Their marketing strategies were top-notch, making my property stand out in a crowded market. Their team of experienced agents worked tirelessly to showcase the unique features of my home and attract potential buyers.',
  },
  {
    title: 'Emily H.',
    image: profileImage3,
    extraDescription: 'I had the pleasure of working with Realtor Nine for both buying and selling properties, and they consistently delivered exceptional service. Their team went above and beyond to understand my needs. I cannot recommend them enough!',
  },
  {
    title: 'Cameron Ford',
    image: profileImage4,
    extraDescription: 'Realtor Nine extensive knowledge of the market, combined with their network of industry connections, allowed me to find lucrative investment opportunities. Their team was always available to provide valuable insights and guided me through the purchasing process with ease',
  }
];

const FeedbackCard = ({ title,image,isActive, isLowOpacity, isBigger, isSmaller, extraDescription }) => (
  <div className={`feedback-card ${isActive ? 'active' : ''} ${isLowOpacity ? 'low-opacity' : ''} ${isBigger ? 'bigger' : ''} ${isSmaller ? 'smaller' : ''}`}>
     <div className='d-flex flex-column align-items-center gap-2 py-5'>
         <div className='p-0 m-0'>
          <img src={image} alt="profile-Image" className="img-fluid p-0 m-0 circle-image"/>
          </div>
          <h1 className='m-0 fs-2 fw-bold text-center font-color-primary'>{title}</h1>
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
