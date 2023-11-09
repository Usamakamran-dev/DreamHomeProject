import { useState , useContext , useEffect } from "react";
import { Link } from "react-router-dom";
import { CurrentProjectBlogContext } from "../context/CurrentProjectBlog";
import locationMarker from './../assets/Icons/locationMarker.png';
import callIcon from './../assets/Icons/callWhite.png';
import enquiryIcon from './../assets/Icons/mailFill.png';
import whatsappIcon from './../assets/Icons/whatsappFill.png';
import useShowFooter from "../context/useShowFooter";
import Footer from "../components/Footer";
import EnquiryForm from "../forms/EnquiryForm";
import EnquiryTop from "../components/EnquiryTop";
import SuccessForm from "../forms/SuccessForm";
import ResidentialGallery from "../components/ResidentialGallery";


function ResidentialDetail(){
    const showFooter=useShowFooter();
    const value=useContext(CurrentProjectBlogContext);
    const currentData=value.currentResidentialData;
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
    useEffect(() => { window.scrollTo(0, 0);}, []);

    return(
        <div className="overflow-hidden">
               <ResidentialGallery gallery={currentData.gallery}></ResidentialGallery>
                {/* ......... */}
                <div className="d-flex container-md flex-md-row flex-column gap-5 align-items-md-start align-items-center justify-content-between w-120 py-5 ">
                <div className="d-flex flex-column align-items-md-start align-items-center gap-2 gap-md-4 px-md-0 px-3">
                <h1 className="fs-1 fw-semibold font-color-primary">AED <span className="font-color-secondary fw-bold">2.44M</span></h1>
                <p className='fs-5 text-center font-color-primary fw-semibold m-0'>{currentData.residentialUnit}</p>
                <p className='fs-mobile font-color-light text-center fw-medium m-0'>
                {currentData.residentialSubHeading}</p>
                <div className='d-flex flex-row align-items-center gap-2'>
                <img src={locationMarker} alt="location-marker"  width='auto' height='20'/>
                <Link style={{ textUnderlineOffset: '0.2em'}} className='fs-mobile text-center font-color-light fw-medium m-0'>
                {currentData.location}</Link>
                </div>                
                </div>
                {/* Buttons */}
                <div className='d-flex flex-column align-items-center gap-md-4 gap-2'>
                <div style={{width: '12rem'}} onClick={()=> setShowEnquiryForm(true)}
                className='d-flex flex-row align-items-center justify-content-center card-hover background-color-secondary rounded gap-3 py-3 '>
                     <img src={enquiryIcon} alt="enquiry-icon" width='auto' height='20'/>
                     <label className='fs-para fw-bold text-white '>ENQUIRE </label>
                </div>
                <Link to="https://api.whatsapp.com/send?phone=9715612343200" target="_blank" 
                style={{textDecoration:'none'}}>
                <div style={{backgroundColor: "#25D366",width: '12rem'}}
                className='d-flex flex-row align-items-center justify-content-center card-hover rounded gap-2 py-3'>
                     <img src={whatsappIcon} alt="enquiry-icon" width='auto' height='20'/>
                     <label className='fs-para fw-bold text-white'>WHATSAPP </label>
                </div>
                </Link>
                <Link to="tel:+9715612343200" target="_blank" style={{textDecoration:'none'}}>
                <div style={{width: '12rem'}}
                className='d-flex flex-row align-items-center justify-content-center card-hover background-color-primary rounded gap-2 py-3'>
                     <img src={callIcon} alt="enquiry-icon" width='auto' height='20'/>
                     <label className='fs-para fw-bold text-white'>CALL </label>
                </div>
                </Link>
            
                </div>
                </div>
                {/* Extra Information */}
                 <div className="container bg-light rounded d-flex flex-column gap-2 py-2 my-5">
                 <h1 className="font-color-primary text-center fs-4 fw-semibold py-3">Additional Information</h1>  
                 <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md d-flex flex-column align-items-start w-100 px-md-5">
                <div className="d-flex flex-row align-items-center justify-content-between row-md-6 p-4 w-100">
                    <label className="font-color-primary fs-mobile fw-medium">Type:</label>
                    <span className="font-color-light fs-mobile fw-semibold">Land</span>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between row-md-6 p-4 w-100">
                    <label  className="font-color-primary fs-mobile fw-medium">Purpose:</label>
                    <span  className="font-color-light fs-mobile fw-semibold">Sale</span>
                </div>
            </div>

            <div className="col-md d-flex flex-column align-items-start w-100 px-md-5">
                <div className="d-flex flex-row align-items-center justify-content-between row-md-6 p-4 w-100">
                    <label className="font-color-primary fs-mobile fw-medium">Updated:</label>
                    <span className="font-color-light fs-mobile fw-semibold">6th Nov, 2023</span>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between row-md-6 p-4 w-100">
                    <label className="font-color-primary fs-mobile fw-medium">Completion:</label>
                    <span className="font-color-light fs-mobile fw-semibold">Ready</span>
                </div>
            </div>
        </div>
                 </div> 
               
                {/* ......... */}
                <div className="container d-flex flex-column align-items-center gap-3 py-md-5 py-1">
                 <h1 className="font-color-primary text-center fs-4 fw-semibold">Overview</h1>
                 <p className="font-color-light fs-mobile fw-regular text-center">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum massa eros, ornare eu euismod at, 
                 consequat eu metus. Nam malesuada a magna facilisis ultricies. Vivamus pretium condimentum urna at luctus.
                  Duis posuere quam ac tellus consequat venenatis. Phasellus tincidunt eu ipsum a suscipit. 
                 Integer in molestie nulla. <br /> <br />
                  Suspendisse interdum lectus sapien, ac ultricies diam feugiat vel.
                 Duis mauris elit, ullamcorper et nulla ac, sodales convallis magna. Mauris consequat turpis 
                 pharetra, tristique felis ut, finibus est. Nullam aliquet risus orci, id porta nisi aliquet
                  dignissim. Praesent et felis placerat, semper lacus eu, hendrerit turpis. Praesent vehicula 
                  accumsan urna eget rutrum. Curabitur lectus sapien, porta ullamcorper velit sit amet, 
                  molestie maximus nisl. Sed ut arcu vulputate, auctor nisi ut, ornare nibh. Morbi vel leo ut 
                  odio consectetur maximus sed et odio. Vivamus lobortis ex massa, <br /><br />in venenatis augue 
                  scelerisque eget. Suspendisse sapien neque, euismod quis urna eleifend, gravida tristique 
                  quam. Morbi fringilla consequat metus sed ornare. Class aptent taciti sociosqu ad litora
                  torquent per conubia nostra, per inceptos himenaeos.Vestibulum nec metus tempus, laoreet augue in, ultrices nulla. Nullam vel cursus tortor.
                 </p>
                </div>
            {showFooter && <Footer show={showFooter} />}
         {showEnquiryForm && <EnquiryForm toggleFormVisibility={toggleFormVisibility} onCancel={cancelEnquiryForm}/>}
         {showSuccessForm && (
            <SuccessForm
            onClick={cancelEnquiryForm}/>
          )}
        <EnquiryTop onClick={()=>setShowEnquiryForm(true)}></EnquiryTop>
        </div>
     )
     }

export default ResidentialDetail;