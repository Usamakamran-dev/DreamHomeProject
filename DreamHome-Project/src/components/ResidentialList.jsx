import { useState } from 'react';
import dummyImage from './../assets/Images/dummyImage.jpg';
import locationMarker from './../assets/Icons/locationMarker.png';
import callIcon from './../assets/Icons/callWhite.png';
import enquiryIcon from './../assets/Icons/mailFill.png';
import whatsappIcon from './../assets/Icons/whatsappFill.png';
import { Link } from 'react-router-dom';
import EnquiryModel from '../forms/EnquiryModel';

function ResidentialList(props){
     const [showEnquiryForm, setShowEnquiryForm] = useState(false);
     const [showSuccessForm, setShowSuccessForm] = useState(false);
     const cancelEnquiryForm = () => { 
       setShowEnquiryForm(false) 
       setShowSuccessForm(false)
     }
     function toggleFormVisibility(isVisible){
          setShowEnquiryForm(isVisible);
          setShowSuccessForm(true);
        };
    return(
          <div className="row my-5 shadow" onClick={props.onClick}>
            <div className="col-md-4 p-0">
            <img src={dummyImage} className='img-fluid w-100 h-auto' alt="residentailListing-image" />
            </div>
            <div className="col-md-8 py-3 px-4 d-flex flex-column align-items-start justify-content-between">
              <label className='fs-2 fw-bold font-color-primary'>AED 
              <span className='font-color-secondary'> {props.startingPrice}</span></label>
              <p className='fs-5 font-color-primary fw-semibold m-0'>{props.residentialUnit}</p>
                <p className='fs-6 font-color-light fw-medium m-0'>
                {props.residentialSubHeading}</p>
                <div className='d-flex flex-row align-items-center gap-2'>
                <img src={locationMarker} alt="location-marker"  width='auto' height='20'/>
                <Link className='fs-6 font-color-light fw-medium m-0'>
                {props.location}</Link>
                </div>
                <div className='w-100 d-flex flex-row align-items-center gap-2 py-2'>
                <div style={{width: '8rem'}} onClick={()=> setShowEnquiryForm(true)}
                className='d-flex flex-row align-items-center justify-content-center card-hover background-color-secondary rounded gap-3 py-3 '>
                     <img src={enquiryIcon} alt="enquiry-icon" width='auto' height='20'/>
                     <label className='fs-para fw-bold text-white '>ENQUIRE </label>
                </div>
                <Link to="https://api.whatsapp.com/send?phone=971568343200" target="_blank" 
                style={{textDecoration:'none'}}>
                <div style={{backgroundColor: "#25D366",width: '8rem'}}
                className='d-flex flex-row align-items-center justify-content-center card-hover rounded gap-2 py-3'>
                     <img src={whatsappIcon} alt="enquiry-icon" width='auto' height='20'/>
                     <label className='fs-para fw-bold text-white'>WHATSAPP </label>
                </div>
                </Link>
                <Link to="tel:+971568343200" target="_blank" style={{textDecoration:'none'}}>
                <div style={{width: '8rem'}}
                className='d-flex flex-row align-items-center justify-content-center card-hover background-color-primary rounded gap-2 py-3'>
                     <img src={callIcon} alt="enquiry-icon" width='auto' height='20'/>
                     <label className='fs-para fw-bold text-white'>CALL </label>
                </div>
                </Link>
                <div style={{width: '8rem'}}
                className='d-flex flex-row align-items-center justify-content-center background-color-primary rounded gap-3 py-3'>
                     <img src={enquiryIcon} alt="enquiry-icon" width='auto' height='20'/>
                     <label className='fs-para fw-bold text-white'>EMAIL </label>
                </div>

                </div>
            </div>
            {showEnquiryForm && <EnquiryModel toggleFormVisibility={toggleFormVisibility} onCancel={cancelEnquiryForm}/>}
         {showSuccessForm && (
            <SuccessForm
            onClick={cancelEnquiryForm}/>
          )}
          </div>
      )
      }
    export default ResidentialList;