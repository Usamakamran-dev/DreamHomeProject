import { useState , useContext } from "react";
import { Link } from "react-router-dom";
import realtorLogo from "./../assets/Icons/Realtor9-white.png";
import EnquiryForm from "../forms/EnquiryForm";
import locationIcon from './../assets/Icons/locationWhite.png';
import mailIcon from './../assets/Icons/mailWhite.png';
import phoneIcon from './../assets/Icons/phoneWhite.png';

function FooterSection(){
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [showCompanyForm, setShowCompanyForm] = useState(false);
  const enquiryFormHandler = () => { setShowEnquiryForm(true) }
  const companyFormHandler = () => { setShowCompanyForm(true) }
  const cancelEnquiryForm = () => { 
    setShowEnquiryForm(false);
    setShowCompanyForm(false);
   }
    return(
        <div className="background-color-primary py-2 py-md-5 w-100 overflow-hidden mb-5">
          <div className="row p-3 p-md-5 g-5">
             <div className="col d-flex flex-column align-items-start gap-3 ">
               <div className="w-100 py-0 py-md-2">
                <img src={realtorLogo} width='130' alt="realtor9-Logo h-auto img-fluid" />
               </div>
               <div className="d-flex flex-row align-items-center gap-3">
                <img src={mailIcon} alt="mail-icon" width='18' height='auto'/>
               <Link to="https://mail.google.com/mail/?view=cm&fs=1&to=info@reator9.com" 
               target="_blank"
               className="fs-para fw-regular text-white">info@reator9.com 
               </Link>
               </div>
               <div className="d-flex flex-row align-items-center gap-3">
               <img src={phoneIcon} alt="call-icon" width='16' height='auto'/>
               <Link to="tel:+971568343200"
               className="fs-para fw-semibold text-white m-0">(+971) 56 834 3200</Link>
               </div>
               <div className="d-flex flex-row align-items-center gap-3">
                <img src={locationIcon} alt="location-icon" width='18' height='auto'/>
                <Link to="https://www.google.com/maps/place/Latifa+Towers/@25.2215512,55.2806555,19z/data=!4m15!1m7!2m6!1s402+West+Wing,Latifa+Towers,Sheikh+Zayed+Road,Dubai!3m4!2s25.221831,+55.281278!4m2!1d55.2812777!2d25.2218315!3m6!1s0x3e5f42ed87491cb9:0x7ac505bb9d87d1f5!8m2!3d25.22155!4d55.2812992!15sCjM0MDIgV2VzdCBXaW5nLExhdGlmYSBUb3dlcnMsU2hlaWtoIFpheWVkIFJvYWQsRHViYWmSAQ9idXNpbmVzc19jZW50ZXLgAQA!16s%2Fg%2F12vrnmzsd?entry=ttu" 
                target="_blank" className="fs-para fw-regular text-white m-0">402 West Wing,Latifa Towers,Sheikh Zayed Road,Dubai
                </Link>
               </div>
             </div>
             <div className="col d-flex flex-column align-items-start gap-2 ">
               <h1 className="fs-4 fw-bold text-white m-0 py-2">REALTOR 9</h1>
               <Link to="/" ><label className="fs-para fw-regular text-white">Home </label></Link> 
               <Link to="/projects" ><label className="fs-para fw-regular text-white">Projects </label></Link> 
               <Link to="/blogs" ><label className="fs-para fw-regular text-white">Blogs </label></Link> 
               <Link to="/login" ><label className="fs-para fw-regular text-white">Login </label></Link> 
             </div>
             <div className="col d-flex flex-column align-items-start gap-2">
               <h1 className="fs-4 fw-bold text-white m-0 py-2">CONTACT</h1>
              <Link to="/contact"><label className="fs-para fw-regular text-white">Contact Us </label></Link> 
              <Link onClick={enquiryFormHandler}><label className="fs-para fw-regular text-white">Enquire Now </label></Link> 
              <Link onClick={companyFormHandler}><label className="fs-para fw-regular text-white">Company Profile </label></Link>
              <Link  to="tel:+971568343200" className="fs-para fw-regular text-white">Call Now</Link>
              <Link to="https://api.whatsapp.com/send?phone=971568343200" 
              target="_blank" className="fs-para fw-regular text-white">Whatsapp Now</Link>
             </div>
             <div className="col d-flex flex-column align-items-start gap-2">
               <h1 className="fs-4 fw-bold text-white m-0 py-2">GALLERY</h1>
               <Link to="/videogallery" ><label className="fs-para fw-regular text-white">Video Gallery</label></Link>
               <Link to="/residential" ><label className="fs-para fw-regular text-white">Residential List</label></Link>
               <Link to="/projectForm" ><label className="fs-para fw-regular text-white">Project Form</label></Link>
             </div>
          </div>
          <p className="fs-para text-white mx-auto text-center fw-regular py-2 px-5">Realtor Nine, a premium real estate marketing company in the heart of Dubai to let you experience the best side of real estate in Dubai</p>
          {showCompanyForm && <EnquiryForm  onCancel={cancelEnquiryForm}/>}
          {showEnquiryForm && <EnquiryForm  onCancel={cancelEnquiryForm}/>}
          </div>
          )}
          export default FooterSection;