import enquire from './../assets/Icons/enquire.svg';
import contact from './../assets/Icons/contact.svg';
import phone from './../assets/Icons/phone.svg';
import whatsapp from './../assets/Icons/whatsapp.svg';
import EnquiryForm from '../forms/EnquiryForm';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SuccessForm from '../forms/SuccessForm';

function Footer({show}) {
  const navigate=useNavigate();
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [showSuccessForm, setShowSuccessForm] = useState(false);
  const enquiryFormHandler = () => { setShowEnquiryForm(true) }
  const cancelEnquiryForm = () => { 
    setShowEnquiryForm(false)
    setShowSuccessForm(false)
  }
  function toggleFormVisibility(isVisible){
    setShowEnquiryForm(isVisible);
    setShowSuccessForm(true);
  };
  return (
    <>
    <nav className={`container-fluid bg-white shadow-lg fixed-bottom mt-5 ${show ? 'visible' : 'hidden'}`}>
        <div className="py-2 py-md-2 px-0 px-md-5 d-flex flex-row align-items-end justify-content-around">
          <div onClick={enquiryFormHandler}
            className="d-flex flex-column align-items-center gap-2">
            <img src={enquire} alt="Footer-Icon" className='w-auto enquiry-icon'/>
            <label className="fw-semibold font-color-primary fs-para">ENQUIRE</label>
          </div>
          <Link to="tel:+971568343200" className='text-decoration-none'>
          <div className="d-flex flex-column align-items-center gap-2">
            <img src={phone} alt="Footer-Icon" className='w-auto call-icon'/>
            <label className="fw-semibold font-color-primary fs-para">CALL</label>
          </div>
          </Link>
            <Link to="https://web.whatsapp.com" target="_blank" className='text-decoration-none'>
            <div className="d-flex flex-column align-items-center gap-2">
              <img src={whatsapp} alt="Footer-Icon" className='w-auto whatsapp-icon'/>
              <label className="fw-semibold font-color-primary fs-para">WHATSAPP</label>
            </div>
            </Link>
            <div onClick={()=> navigate("/contact")} className="d-flex flex-column align-items-center gap-2">
            <img src={contact} alt="Footer-Icon" className='w-auto contact-icon'/>
            <label className="fw-semibold font-color-primary fs-para">CONTACT</label>
          </div>
        </div>
      </nav>
      {showEnquiryForm && <EnquiryForm  toggleFormVisibility={toggleFormVisibility} onCancel={cancelEnquiryForm}/>}
      {showSuccessForm && (
                     <SuccessForm
                      onClick={cancelEnquiryForm}/>
                     )}
      </>
      )}
      export default Footer;
