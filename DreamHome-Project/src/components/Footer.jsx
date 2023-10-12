import enquire from './../assets/Icons/enquire.svg';
import contact from './../assets/Icons/contact.svg';
import phone from './../assets/Icons/phone.svg';
import whatsapp from './../assets/Icons/whatsapp.svg';
import EnquiryForm from '../forms/EnquiryForm';
import { useState } from 'react';

function Footer({show}) {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const enquiryFormHandler = () => { setShowEnquiryForm(true) }
  const cancelEnquiryForm = () => { setShowEnquiryForm(false) }
  return (
    <>
    <nav className={`container-fluid bg-white shadow-lg fixed-bottom mt-5 ${show ? 'visible' : 'hidden'}`}>
        <div className="py-3 px-0 px-md-5 d-flex flex-row align-items-end justify-content-around">
          <div onClick={enquiryFormHandler}
            className="d-flex flex-column align-items-center gap-1">
            <img src={enquire} alt="Footer-Icon" className='footer-icon w-auto' style={{height: '1.2rem'}}  />
            <label className="fw-semibold font-color-primary fs-para">ENQUIRE</label>
          </div>
          <div className="d-flex flex-column align-items-center gap-1">
            <img src={phone} alt="Footer-Icon" className='footer-icon w-auto' style={{height: '1.5rem'}}   />
            <label className="fw-semibold font-color-primary fs-para">CALL</label>
          </div>
          
          <a href="https://web.whatsapp.com" className="text-decoration-none">
            <div className="d-flex flex-column align-items-center gap-1">
              <img src={whatsapp} alt="Footer-Icon" className='footer-icon w-auto' style={{height: '1.6rem'}}   />
              <label className="fw-semibold font-color-primary fs-para">WHATSAPP</label>
            </div>
          </a>
          
          <div className="d-flex flex-column align-items-center gap-1">
            <img src={contact} alt="Footer-Icon" className='footer-icon w-auto' style={{height: '1.6rem'}}  />
            <label className="fw-semibold font-color-primary fs-para">CONTACT</label>
          </div>
        </div>
      </nav>
      {showEnquiryForm && <EnquiryForm onCancel={cancelEnquiryForm}/>}
      </>
      )}
      export default Footer;
