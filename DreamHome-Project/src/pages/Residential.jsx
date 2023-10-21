import { useState } from "react";
import ResidentialList from "../components/ResidentialList";
import useShowFooter from "../context/useShowFooter";
import Footer from "../components/Footer";
import SuccessForm from "../forms/SuccessForm";
import EnquiryForm from "../forms/EnquiryForm";
import EnquiryTop from "../components/EnquiryTop";

function Residential(){
    const showFooter=useShowFooter();
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

    return( 
        <>
      
        <div className="my-5 p-5 text-center container d-flex flex-column align-items-center gap-2">
            <h1 className="fs-1 fw-bold font-color-primary">RESIDENTIAL <span className="font-color-secondary">APARTMENTS</span></h1>
            <p className="font-color-light fw-regular px-5 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu nisi quis urna imperdiet vehicula. 
            Ut interdum dignissim dui. Suspendisse nunc nunc, ornare in dignissim in, efficitur vitae nisl</p>
            <ResidentialList></ResidentialList>
            <ResidentialList></ResidentialList>
            <ResidentialList></ResidentialList>
            <ResidentialList></ResidentialList>
        </div>
         {showFooter && <Footer show={showFooter} />}
         {showEnquiryForm && <EnquiryForm toggleFormVisibility={toggleFormVisibility} onCancel={cancelEnquiryForm}/>}
         {showSuccessForm && (
            <SuccessForm
            onClick={cancelEnquiryForm}/>
          )}
        <EnquiryTop onClick={enquiryFormHandler}></EnquiryTop>
         </>
         )}

     export default Residential;