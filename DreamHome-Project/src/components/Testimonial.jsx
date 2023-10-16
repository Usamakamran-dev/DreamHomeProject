import React from 'react';
import profileImage from "./../assets/Images/profileImage.jpg";
import starIcon from "./../assets/Icons/starIcon.png";

function Testimonial(){
  return (
      <div className='d-flex flex-column align-items-center gap-3 py-5'>
          <div className='p-0 m-0'>
          <img src={profileImage} alt="profile-Image" className="img-fluid p-0 m-0 circle-image shadow"/>
          </div>
          <h1 className='m-0 fs-2 fw-bold font-color-primary'>Usama</h1>
          <div className='d-flex flex-row align-items-center m-0'>
            <img src={starIcon} alt="review-Icon" width="25" height='auto' />
            <img src={starIcon} alt="review-Icon" width="25" height='auto' />
            <img src={starIcon} alt="review-Icon" width="25" height='auto' />
            <img src={starIcon} alt="review-Icon" width="25" height='auto' />
          </div>
          <p className='fs-6 fw-medium font-color-light text-center m-0 px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas placeat voluptates fuga obcaecati 
            nesciunt doloremque, cum impedit ratione possimus nisi in deserunt illum similique. Harum dolores
             voluptatibus iste voluptatum reprehenderit?</p>
       </div>
      ); };
      export default Testimonial;
