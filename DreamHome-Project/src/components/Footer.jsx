import verticalLine from './../assets/Icons/verticalLine.png';
import enquire from './../assets/Icons/enquire.svg';
import contact from './../assets/Icons/contact.svg';
import phone from './../assets/Icons/phone.svg';
import whatsapp from './../assets/Icons/whatsapp.svg';
import { useState } from 'react';

function Footer() {
  return (
    <div className="container-fluid fixed-bottom position-sticky shadow-lg mt-5">
        <div className="py-3 px-0 px-md-5 d-flex flex-row align-items-end justify-content-around">
          <div className="d-flex flex-column align-items-center gap-2">
            <img src={enquire} alt="Footer-Icon" className='footer-icon w-auto' style={{height: '1.4rem'}}  />
            <label className="fw-bold font-color-primary">Enquiry</label>
          </div>
          
          <div className="d-flex flex-column align-items-center gap-2">
            <img src={phone} alt="Footer-Icon" className='footer-icon w-auto' style={{height: '1.7rem'}}   />
            <label className="fw-bold font-color-primary">Call</label>
          </div>
          
          <a href="https://web.whatsapp.com" className="text-decoration-none">
            <div className="d-flex flex-column align-items-center gap-2">
              <img src={whatsapp} alt="Footer-Icon" className='footer-icon w-auto' style={{height: '1.8rem'}}   />
              <label className="fw-bold font-color-primary">Whatsapp</label>
            </div>
          </a>
          
          <div className="d-flex flex-column align-items-center gap-2">
            <img src={contact} alt="Footer-Icon" className='footer-icon w-auto' style={{height: '1.8rem'}}  />
            <label className="fw-bold font-color-primary">Brochure</label>
          </div>
        </div>
      </div>
      )}

export default Footer;
