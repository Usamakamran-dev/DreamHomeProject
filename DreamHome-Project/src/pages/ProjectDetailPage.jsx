import { useContext , useEffect , useState } from "react";
import useShowFooter from "../context/useShowFooter";
import Footer from '../components/Footer';
import './Custom.css';
import ProjectGallery from '../components/ProjectGallery';
import { CurrentDataContext } from "../context/CurrentDataProvider";
import { CurrentProjectBlogContext } from "../context/currentProjectBlog";
import ProjectHeroSection from "../components/ProjectHeroSection";
import PaymentPlan from "../components/PaymentPlan";
import Feature from "../components/Feature";
import AmenitiesCard from "../components/AmenitiesCard";
import EnquiryForm from "../forms/EnquiryForm";
import LoadingSpinner from "../components/LoadingSpinner";
import EnquiryTop from '../components/EnquiryTop';
import SuccessForm from "../forms/SuccessForm";

function ProjectDetailPage(){
  const showFooter=useShowFooter();
  const {currentProjectData}=useContext(CurrentProjectBlogContext);
  if(!currentProjectData) return <LoadingSpinner></LoadingSpinner>
  const {setShowEnquiryForm,setShowSuccessForm,showEnquiryForm,showSuccessForm } = useContext(CurrentDataContext);
  function toggleFormVisibility(isVisible){
    setShowEnquiryForm(isVisible);
    setShowSuccessForm(true);
    }
    useEffect(() => { window.scrollTo(0, 0);}, []);

    const bgClass = (() => {
      if (currentProjectData.ProjectHeading === 'SAMANA - Manhattan') return 'samanaBg';
      if (currentProjectData.ProjectHeading === 'Damac Lagoons') return 'damacBg';
      if (currentProjectData.ProjectHeading === 'Olivia Residences') return 'oliviaBg';
      if (currentProjectData.ProjectHeading === 'Danube - Oceanz') return 'oceanzBg';
      if (currentProjectData.ProjectHeading === 'VYB Dubai') return 'vybBg';
      return '';
    })();

  return(
    <div className={`overflow-hidden ${bgClass}`}>
         <ProjectHeroSection heroSection={currentProjectData.hero}></ProjectHeroSection>
         {/* Monthly Payment */}
          <div className="background-color-primary">
            <div className="text-center px-2 py-4 px-md-5 py-md-5 d-flex flex-column align-items-center gap-5">
              <div className="d-flex flex-column align-items-center gap-2">
              <h1 className="m-0 fs-bold text-white fs-1">{currentProjectData.monthlyPayment.heading}</h1>
              <p className="m-0 fw-regular fs-6 fs-md-3 text-white">{currentProjectData.monthlyPayment.paragraph}</p>
              </div>
              <div className="d-flex flex-column flex-md-row align-items-center">
              <label style={{width: '13rem'}} className="m-0 bg-white font-color-primary py-2 fs-4 fw-bold">
                Starting From
              </label>
              <label style={{width: '13rem'}} className="m-0 py-2 fs-4 background-color-secondary text-white fw-bold">
              AED {currentProjectData.monthlyPayment.label}              
              </label>
              </div>
           </div>
        </div>
        {/* About Us */}
        <div className='bg-white'>
                <div className="row py-2 py-md-5 container mx-auto">
                 <div className="col-md-6 py-5 px-0 px-md-5 d-flex flex-column align-items-center gap-2 gap-md-5 justify-content-center align-items-md-start">
                    <h2 className="fs-1 m-0 fw-bold font-color-primary text-start text-md-start">
                    ABOUT <span className='font-color-secondary'>US</span></h2>
                    <p className="font-color-light text-center text-md-start fw-regular">{currentProjectData.aboutUs.paragraph}</p>
                    <div className='d-flex flex-column gap-2 gap-md-4 flex-md-row'>
                    <button  onClick={()=> setShowEnquiryForm(true)} style={{width: '12rem'}} 
                    className='background-color-primary border-0 button-hover-primary py-3 rounded fs-para fw-semibold text-white'>ENQUIRE NOW</button>
                    <button style={{width: '12rem'}} className='background-color-secondary border-0 button-hover-secondary py-3 rounded  fs-para fw-semibold text-white'>DOWNLOAD BROCHURE</button>
                    </div>
                 </div>
                 <div className="col-md-6 py-4 m-0 rounded">
                 <img src={currentProjectData.aboutUs.image} alt="AboutUs-Image"className="about-Img p-0 m-0 rounded"/>
                 </div>
               </div>
          </div>
        {/* Unit Section */}
        <div className="bg-white">
          <div className="px-2 px-md-5 py-3 py-md-5 d-flex flex-column align-items-center gap-2 gap-md-5 m-0">
            <h3 className="fs-1 fw-bold font-color-primary text-center">UNIT <span className="font-color-secondary">TYPES</span></h3>
             <div className="d-flex flex-row align-items-center gap-3 w-100 overflow-auto py-2 px-0 px-md-5">
             {currentProjectData.unitTypes?.cards?.map((arr,index)=> (
              <Feature key={index} label={arr.title} price={arr.price}></Feature>
             ))}
             </div>
         </div>
        </div>
        {/*Transparent Section*/}
        <div style={{width: '100%',height: "30rem"}}></div>
        {/* Gallery Section */}
        <div className="background-color-primary py-5 d-flex flex-column align-items-center gap-4">
        <h1 className="fs-1 fw-bold text-white"> PROJECT GALLERY</h1>
        <ProjectGallery images={currentProjectData.gallery.images}></ProjectGallery>
        </div>
        {/* Amenities */}
        <div className="bg-white">
          <div className="d-flex flex-column align-items-center gap-2 mx-auto py-5">
            <h1 className="fs-1 m-0 fw-bold font-color-primary ">AMENITIES</h1>
            <p className="text-center font-color-light fw-regular m-0">
            {currentProjectData.amenities.paragraph}
            </p>
            <div className="row row-cols-2 row-cols-md-4 py-2 py-md-5">
            {currentProjectData.amenities?.items?.map((arr, index) => (
              <div className="col" key={index}>
                <AmenitiesCard label={arr.label} image={arr.image}/>
              </div>
            ))}
          </div>
          </div>
        </div>
        {/* Payment Plan */}
        <PaymentPlan paymentPlan={currentProjectData.paymentPlan}></PaymentPlan>
        { showFooter && <Footer show={showFooter} />}
        {showEnquiryForm && <EnquiryForm toggleFormVisibility={toggleFormVisibility}
         onCancel={()=> setShowEnquiryForm(false)}/>}
        {showSuccessForm && ( <SuccessForm onClick={()=> setShowSuccessForm(false)}/>)}
        <EnquiryTop onClick={()=> setShowEnquiryForm(true)}></EnquiryTop>
        </div>
        )}
        export default ProjectDetailPage;