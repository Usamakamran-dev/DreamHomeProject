import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";
import useShowFooter from "../context/useShowFooter";
import { useContext } from "react";
import { CurrentDataContext } from "../context/CurrentDataProvider";
import Footer from "../components/Footer";
import EnquiryTop from "../components/EnquiryTop";
import EnquiryModel from "../forms/EnquiryModel";
import SuccessForm from "../forms/SuccessForm";


function ParentElement(){
    const showFooter=useShowFooter();
    const {setShowEnquiryForm,setShowSuccessForm,showEnquiryForm,showSuccessForm } = useContext(CurrentDataContext);
    const toggleFormVisibility= (isVisible)=> {
        setShowEnquiryForm(isVisible);
        setShowSuccessForm(true);
    }
    return(
        <>
            <Navbar/>
            <Outlet/>
            <FooterSection></FooterSection>
            {showFooter && <Footer show={showFooter} />}
            <EnquiryTop onClick={()=> setShowEnquiryForm(true)}/>
            {showEnquiryForm && <EnquiryModel toggleFormVisibility={toggleFormVisibility}
               onCancel={()=>setShowEnquiryForm(false)}/>
            }
            {showSuccessForm && <SuccessForm mainText='You will be contacted Shortly' 
            onClick={()=> setShowSuccessForm(false)}/>
            }
        </>
    )}
    export default ParentElement;