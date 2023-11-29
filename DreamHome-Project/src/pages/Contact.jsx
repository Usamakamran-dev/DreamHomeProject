import { useEffect } from 'react';
import EnquiryForm from '../forms/EnquiryForm';

function Contact(){
    useEffect(() => { window.scrollTo(0, 0);}, []);
    return(
        <div style={{margin: '4rem auto'}} 
        className='d-flex align-items-center justify-content-center my-5 p-5'>
              <div className='d-flex flex-column align-items-center w-100'>
                  <h1 className='fs-1 fw-bold font-color-primary'>Contact 
                    <span className='font-color-secondary'> Us</span>
                  </h1>
                  <EnquiryForm></EnquiryForm>
              </div>
        </div>
        )}
        export default Contact;