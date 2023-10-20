import { useState } from "react";
import realtorLogo from "./../assets/Icons/Realtor9-white.png";
import { Link } from "react-router-dom";
import EnquiryForm from "../forms/EnquiryForm";
import CompanyProfile from "../forms/CompanyProfile";

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
        <div className="background-color-primary py-2 py-md-5 w-100 mt-3 overflow-hidden mb-5">
          <div className="row p-3 p-md-5 g-5">
             <div className="col d-flex flex-column align-items-start gap-4 ">
               <div className="w-100 py-0 py-md-2">
                <img src={realtorLogo} width='130' alt="realtor9-Logo h-auto img-fluid" />
               </div>
               <label className="fs-para fw-regular text-white m-0">231 Main Blvd, Sector J DHA Phase 6 Lahore, Punjab 54792</label>
               <label className="fs-para fw-semibold text-white m-0">(+92) 326 0333111</label>
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
              <Link><label className="fs-para fw-regular text-white">Call Now </label></Link>
              <Link to="https://web.whatsapp.com" target="_blank"><label className="fs-para fw-regular text-white">WhatsApp Now </label></Link>
             </div>
             <div className="col d-flex flex-column align-items-start gap-2">
               <h1 className="fs-4 fw-bold text-white m-0 py-2">GALLERY</h1>
               <Link to="/videogallery" ><label className="fs-para fw-regular text-white">Video Gallery </label></Link>
             </div>
          </div>
          <p className="fs-para text-white mx-auto text-center fw-regular py-2 px-5">lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ratione doloribus ducimus . Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          {showCompanyForm && <CompanyProfile  onCancel={cancelEnquiryForm}/>}
          {showEnquiryForm && <EnquiryForm  onCancel={cancelEnquiryForm}/>}
        </div>
        )}

       export default FooterSection;