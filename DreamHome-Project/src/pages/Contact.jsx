import { useState , useEffect } from 'react';
import contactImage from './../assets/Images/contact.png';
import EnquiryTop from '../components/EnquiryTop';
import EnquiryForm from "../forms/EnquiryForm";
import Footer from "../components/Footer";
import useShowFooter from "../context/useShowFooter";
import EnquiryBox from '../forms/EnquiryBox';
import SuccessForm from '../forms/SuccessForm';

function Contact(){
  const showFooter=useShowFooter();
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [showSuccessForm, setShowSuccessForm] = useState(false);
  const enquiryFormHandler = () => { setShowEnquiryForm(true) }
  const cancelEnquiryForm = () => { 
    setShowEnquiryForm(false) 
    setShowSuccessForm(false)
  }
 
    useEffect(() => { window.scrollTo(0, 0);}, []);
    function toggleFormVisibility(isVisible){
      setShowEnquiryForm(isVisible);
      setShowSuccessForm(true);
    };
    return(
        <div className='contact-page-width mx-auto my-5 py-5'>
             <div className="row row-cols-1 row-cols-md-2">
              {/* Contact Form */}
              <div className='d-flex flex-column align-items-start'>
                <h1 className='fs-1 fw-bold font-color-primary'>Contact <span className='font-color-secondary'>Us</span></h1>
                <EnquiryBox toggleFormVisibility={toggleFormVisibility} ></EnquiryBox>
              </div>
              
               <div className="m-0 rounded order-1 order-md-2">
                <img src={contactImage} alt="Contact-Us-Image" className="w-100 h-100 py-3 py-md-5 image-fluid rounded"/>
               </div>  
              </div>
              {showFooter && <Footer show={showFooter} />}
              {showEnquiryForm && <EnquiryForm toggleFormVisibility={toggleFormVisibility}
                onCancel={cancelEnquiryForm}/>}
                 {showSuccessForm && (
                   <SuccessForm
                   onClick={cancelEnquiryForm}/>
                   )}
              <EnquiryTop onClick={enquiryFormHandler}></EnquiryTop>
              </div>
              )}
    export default Contact;