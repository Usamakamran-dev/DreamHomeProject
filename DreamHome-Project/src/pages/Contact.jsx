import { useContext , useEffect } from 'react';
import EnquiryTop from '../components/EnquiryTop';
import EnquiryForm from "../forms/EnquiryForm";
import Footer from "../components/Footer";
import useShowFooter from "../context/useShowFooter";
import EnquiryBox from '../forms/EnquiryBox';
import SuccessForm from '../forms/SuccessForm';
import { CurrentDataContext } from '../context/CurrentDataProvider';

function Contact(){
  const showFooter=useShowFooter();
  const {setShowEnquiryForm,setShowSuccessForm,showEnquiryForm,
    showSuccessForm}=useContext(CurrentDataContext);
    function toggleFormVisibility(isVisible){
      setShowEnquiryForm(isVisible);
      setShowSuccessForm(true);
    }
    useEffect(() => { window.scrollTo(0, 0);}, []);
    console.log('Contact Page Rendered');
    return(
        <div className='d-flex align-items-center justify-content-center my-5 p-5'>
              {/* Contact Form */}
              <div className='d-flex flex-column align-items-center w-100'>
                <h1 className='fs-1 fw-bold font-color-primary'>Contact <span className='font-color-secondary'>Us</span></h1>
                <EnquiryBox toggleFormVisibility={toggleFormVisibility} ></EnquiryBox>
              </div>
              {showFooter && <Footer show={showFooter} />}
              {showEnquiryForm && <EnquiryForm toggleFormVisibility={toggleFormVisibility}
              onCancel={()=> setShowEnquiryForm(false)}/>}
              {showSuccessForm && ( <SuccessForm onClick={()=> setShowSuccessForm(true)}/>)}
              <EnquiryTop onClick={()=> setShowEnquiryForm(true)}></EnquiryTop>
              </div>
              )}
    export default Contact;