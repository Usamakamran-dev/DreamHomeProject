import { useContext , useEffect } from "react";
import { ProjectCardContext } from "../context/ProjectCardProvider";
import { BlogContext } from "../context/BlogProvider";
import { CurrentDataContext } from "../context/CurrentDataProvider";
import { CurrentProjectBlogContext } from "../context/CurrentProjectBlog";
import { useNavigate } from "react-router-dom";
import useShowFooter from "../context/useShowFooter";
import HeroSection from "../components/HeroSection";
import ProjectCard from "../components/ProjectCard";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";
import partnerLogo  from "./../assets/PartnerLogos/Damac.png";
import partnerLogo2 from "./../assets/PartnerLogos/Oceanz.png";
import partnerLogo3 from "./../assets/PartnerLogos/vyb.png";
import partnerLogo4 from "./../assets/PartnerLogos/Olivia.png";
import partnerLogo5 from "./../assets/PartnerLogos/samana.png";
import partnerLogo6 from "./../assets/PartnerLogos/Haven.png";
import aboutUsImage from './../assets/Projects/vyb/vybGallery1.jpeg';
import EnquiryTop from '../components/EnquiryTop';
import FeedbackSlider from '../components/FeedbackSlider';
import EnquiryForm from '../forms/EnquiryForm';
import SuccessForm from '../forms/SuccessForm';

function MainPage() {
    const navigate=useNavigate();
    const showFooter=useShowFooter();
    const ProjectCardDetails = useContext(ProjectCardContext);
    const { updateCurrentProjectData, updateCurrentBlogData }= useContext(CurrentProjectBlogContext);
    const {setCardIdentifier,setShowCompanyForm,setShowEnquiryForm , setShowSuccessForm , showCompanyForm ,
    showEnquiryForm,showSuccessForm } = useContext(CurrentDataContext);
    const BlogDetails = useContext(BlogContext);
    // Setting the currently clicked project card
    function currentProjectHandler(currentProjectData,id){
      updateCurrentProjectData(currentProjectData);
      setCardIdentifier(currentProjectData.name);
      navigate(`/project/${id.split(' ').join('-')}`);}
    // Setting the currently clicked blog card
    function currentBlogHandler(currentBlogData,id){
      updateCurrentBlogData(currentBlogData);
      navigate(`/blog/${id.split(' ').join('-')}`);}

    function toggleFormVisibility(isVisible){
      setShowEnquiryForm(isVisible);
      setShowCompanyForm(isVisible);
      setShowSuccessForm(true);
    };
    const partnerImages=[partnerLogo,partnerLogo2,partnerLogo3,partnerLogo4,partnerLogo5,partnerLogo6];
    useEffect(() => { window.scrollTo(0, 0);}, []);
    
    return(
          <div className="overflow-hidden transparent-section">
              <HeroSection></HeroSection>
              <div className='bg-white'>
                <div className="row py-5 container mx-auto">
                 <div className="col-md-6 py-2 py-md-5 px-0 px-md-5 d-flex flex-column gap-5 align-items-center justify-content-center align-items-md-start">
                    <div>
                    <h2 className="h-mobile fw-bold font-color-primary text-center text-md-start">
                    ABOUT <span className='font-color-secondary'>US</span></h2>
                    <p className="font-color-light text-center fs-mobile text-md-start fw-regular">
                    Realtor Nine is a Dubai-based, real estate marketing company bringing you the most 
                    sough-after commercial, residential and high-rise projects in Dubai. With vanguard 
                    clients from Dubai's burgeoning real estate market, we are widely trusted not to 
                    compromise on the quality of our marketing services. Our creative team is not just
                     innovative but resourcefully adept at adding an X factor to your projects. Our 
                     dedicated, professional sales team is thoroughly well-versed in the real estate 
                     landscape of Dubai, which is why our assistance to you exceeds mere facilitation 
                     in purchasing and selling property.
                    </p>
                    </div> 
                    <div className='d-flex flex-column gap-2 gap-md-4 flex-md-row'>
                    <button onClick={()=>setShowEnquiryForm(true)} style={{width: '12rem'}} 
                    className='background-color-primary border-0 button-hover-primary py-3 rounded fs-para fw-semibold text-white'>ENQUIRE NOW</button>
                    <button onClick={()=>setShowCompanyForm(true)} style={{width: '12rem'}} className='background-color-secondary border-0 button-hover-secondary py-3 rounded  fs-para fw-semibold text-white'>COMPANY PROFILE</button>
                    </div>
                 </div>
                 <div className="col-md-6 py-4 m-0 rounded d-flex align-items-center justify-content-center">
                 <img loading='lazy'
                 src={aboutUsImage} alt="AboutUs-Image"className="w-100 p-0 m-0 rounded"/>
                 </div>
               </div>
              </div>             
               <div className="bg-light container-fluid d-flex flex-column align-items-center gap-4 py-md-5 py-4 px-2 px-md-5">
                 <h1 className="h-mobile font-color-primary fw-bold">OUR <span 
                 className="font-color-secondary">PROJECTS</span></h1>
                 <div className="row row-cols-1 row-cols-md-3 gy-5 px-2 px-md-5">
                      {ProjectCardDetails.slice(0, 3).map((array, index) => (
                      <div className="col p-3" key={index}>
                        <ProjectCard
                          onClick={() => currentProjectHandler(array, array.name)}
                          heading={array.name}
                          subHeading={array.developer}
                          paragraph={array.aboutUs.paragraph}
                          image={array.projectImage}
                        />
                      </div>))}
                 </div>
                 <button onClick={()=> navigate("/projects")}
                 className="fs-6 border-0 fw-medium font-color-light">See more</button>
               </div>
                {/*Testimonial Section*/}
             <div className='bg-white py-5'>
               <div className='w-100 d-flex flex-column align-items-center gap-3 py-5'>
               <h1 className="font-color-primary text-center fw-bold h-mobile">WHAT OUR <span className='font-color-secondary'>CLIENT SAYS</span></h1>
               <FeedbackSlider></FeedbackSlider>
               </div>
             </div>
              {/* Partner Section*/}
              <div className='bg-white py-0 py-md-5'>
                <div className="contact-page-width mx-auto d-flex flex-column align-items-center py-2 py-md-5 gap-3">
                   <div className='d-flex flex-column align-items-center'>
                    <h1 className="font-color-primary text-center fw-bold h-mobile">OUR <span className="font-color-secondary fw-bold">TRUSTED PARTNERS</span></h1>
                    <p  className="font-color-light fw-regular px-0 px-md-5 fs-mobile text-center">We collaborate with a diverse 
                    network of industry leaders and innovators to bring you the best projects and services 
                    on Dubai's real estate's landscape</p>
                   </div>
                   <div className="row row-cols-2 row-cols-md-4 justify-content-center px-0 px-md-5">
                     {partnerImages.map((arr, index) => (
                      <div className="col" key={index}>
                      <img src={arr} alt="partner-logo" 
                      className="w-100 h-100 p-2 p-md-4" />
                     </div> ))}
                  </div>
                </div>     
              </div>
              {/*Transparent Section*/}
              <div style={{width: '100%',height: "30rem"}}></div>
             {/* Blog Section*/}
             <div className='bg-white'>
                 <div className="container-fluid d-flex flex-column align-items-center gap-4 py-md-5 py-4 px-2 px-md-5">
                 <h1 className="font-color-primary fw-bold fs-1">BLOGS</h1>
                 <div className="row row-cols-1 row-cols-md-3 g-4 px-2 px-md-5">
                   {BlogDetails.slice(0, 3).map((array, index) => (
                    <div className="col p-3" key={index}>
                     <BlogCard onClick={()=>currentBlogHandler(array,array.BlogHeading) }
                     heading={array.BlogHeading} source={array.BlogSource}
                     date={array.BlogDate} image={array.BlogImage} />
                    </div>))}
                 </div>
                 <button onClick={()=> navigate("/blogs") }
                 className="fs-6 border-0 fw-medium font-color-light">See more</button>
                 </div>
             </div>
              {showFooter && <Footer show={showFooter} />}
              {showCompanyForm && <EnquiryForm toggleFormVisibility={toggleFormVisibility}
               onCancel={()=>setShowCompanyForm(false)}></EnquiryForm>}
              {showEnquiryForm && <EnquiryForm toggleFormVisibility={toggleFormVisibility}
               onCancel={()=>setShowEnquiryForm(false)}/>}
               {showSuccessForm && (
            <SuccessForm onClick={()=> setShowSuccessForm(false)}/>)}
             <EnquiryTop onClick={()=> setShowEnquiryForm(true)}/>
              </div>)}
            
              export default MainPage;