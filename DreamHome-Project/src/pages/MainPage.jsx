import './Custom.css';
import { useContext , useState , useEffect } from "react";
import { ProjectCardContext } from "../context/ProjectCardProvider";
import { BlogContext } from "../context/BlogProvider";
import { CurrentDataContext } from "../context/CurrentDataProvider";
import { useNavigate } from "react-router-dom";
import useShowFooter from "../context/useShowFooter";
import HeroSection from "../components/HeroSection";
import ProjectCard from "../components/ProjectCard";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";
import partnerLogo  from "./../assets/PartnerLogos/paramount-hotel.svg";
import partnerLogo2 from "./../assets/PartnerLogos/cavalli.svg";
import partnerLogo3 from "./../assets/PartnerLogos/deGRISOGONO.svg";
import partnerLogo4 from "./../assets/PartnerLogos/Radisson.svg";
import partnerLogo5 from "./../assets/PartnerLogos/Rotana.svg";
import partnerLogo6 from "./../assets/PartnerLogos/zuhairmurad.svg";
import partnerLogo7 from "./../assets/PartnerLogos/Trump.svg";
import aboutUsImage from './../assets/Images/Project Image.jpg';
import EnquiryTop from '../components/EnquiryTop';
import FeedbackSlider from '../components/FeedbackSlider';
import EnquiryForm from '../forms/EnquiryForm';
import SuccessForm from '../forms/SuccessForm';

function MainPage() {
    const navigate=useNavigate();
    const [showEnquiryForm, setShowEnquiryForm] = useState(false);
    const [showCompanyForm, setShowCompanyForm] = useState(false);
    const [showSuccessForm, setShowSuccessForm] = useState(false);
    const enquiryFormHandler = () => { setShowEnquiryForm(true) }
    const companyFormHandler = () => { setShowCompanyForm(true) }
    const cancelEnquiryForm = () => { 
      setShowEnquiryForm(false);
      setShowCompanyForm(false);
      setShowSuccessForm(false)
     }
    const ProjectCardDetails = useContext(ProjectCardContext);
    const { setCurrentProjectData, setCurrentBlogData , setCardIdentifier , cardIdentifier} = useContext(CurrentDataContext);
    const BlogDetails = useContext(BlogContext);
    const showFooter=useShowFooter();
    const partnerImages=[partnerLogo,partnerLogo2,partnerLogo3,partnerLogo4,partnerLogo5,partnerLogo6,partnerLogo7];
    // Setting the currently clicked project card
    function currentProjectHandler(currentProjectData,id){
      setCurrentProjectData(currentProjectData);
      setCardIdentifier(currentProjectData.ProjectHeading);
      navigate(`/project/:project${id}`);}
    // Setting the currently clicked blog card
    function currentBlogHandler(currentBlogData,id){
      setCurrentBlogData(currentBlogData);
      navigate(`/blog/:blog${id}`);}
    useEffect(() => { window.scrollTo(0, 0);}, []);

    function toggleFormVisibility(isVisible){
      setShowEnquiryForm(isVisible);
      setShowSuccessForm(true);
    };

        return(
          <div className="overflow-hidden transparent-section">
              <HeroSection></HeroSection>
              <div className='bg-white'>
                <div className="row py-5 container mx-auto">
                 <div className="col-md-6 py-2 py-md-5 px-0 px-md-5 d-flex flex-column gap-4 align-items-center justify-content-center align-items-md-start">
                    <h2 className="fs-1 fw-bold mb-0 mb-md-4 font-color-primary text-start text-md-start">
                    ABOUT <span className='font-color-secondary'>US</span></h2>
                    <p className="font-color-light text-center text-md-start fw-regular">
                    SAMANA Manhattan - an exceptional residential development that sets a new standard for contemporary living.
                    This innovative project by SAMANA Developers, located in Jumeirah Village Circle (JVC), is designed to provide residents with an unparalleled lifestyle; blended with luxurious amenities, stunning designs, and a prime location.  SAMANA Manhattan - an exceptional residential development that sets a new standard for contemporary living.
                    This innovative project by SAMANA Developers
                    </p> 
                    <div className='d-flex flex-column gap-2 gap-md-4 flex-md-row'>
                    <button  onClick={enquiryFormHandler} style={{width: '12rem'}} 
                    className='background-color-primary border-0 button-hover-primary py-3 rounded fs-para fw-semibold text-white'>ENQUIRE NOW</button>
                    <button onClick={companyFormHandler} style={{width: '12rem'}} className='background-color-secondary border-0 button-hover-secondary py-3 rounded  fs-para fw-semibold text-white'>COMPANY PROFILE</button>
                    </div>
                 </div>
                 <div className="col-md-6 py-4 m-0 rounded">
                 <img 
                 src={aboutUsImage} alt="AboutUs-Image"className="about-Img p-0 m-0 rounded"/>
                 </div>
               </div>
              </div>             
               <div className="bg-light container-fluid d-flex flex-column align-items-center gap-4 py-5 py-md-3 px-2 px-md-5">
                 <h1 className="font-color-primary fw-bold fs-1">OUR <span 
                 className="font-color-secondary">PROJECTS</span></h1>
                 <div className="row row-cols-1 row-cols-md-3 gy-5 px-2 px-md-5">
                      {ProjectCardDetails.slice(0, 3).map((array, index) => (
                      <div className="col" key={index}>
                        <ProjectCard
                          onClick={() => currentProjectHandler(array, array.ProjectHeading)}
                          heading={array.ProjectHeading}
                          subHeading={array.ProjectSubHeading}
                          paragraph={array.ProjectParagraph}
                          image={array.ProjectImage}
                        />
                      </div>))}
                 </div>
                 <button onClick={()=> navigate("/projects")}
                 className="moving-button bg-light fs-6 bg-light border-0 fw-regular font-color-light">See more</button>
               </div>
              {/*Transparent Section*/}
              <div style={{width: '100%',height: "30rem"}}></div>
                {/*Testimonial Section*/}
             <div className='bg-white'>
               <div className='w-100 d-flex flex-column align-items-center gap-3 py-5'>
               <h1 className="font-color-primary text-center fw-bold fs-1">WHAT OUR <span className='font-color-secondary'>CLIENT SAYS</span></h1>
               <FeedbackSlider></FeedbackSlider>
               </div>
             </div>
              {/* Partner Section*/}
              <div className='bg-white py-5'>
                <div className="contact-page-width mx-auto d-flex flex-column align-items-center py-2 py-md-5 gap-5">
                   <div className='d-flex flex-column align-items-center'>
                    <h1 className="font-color-primary text-center fw-bold fs-1">OUR <span className="font-color-secondary fw-bold fs-1">TRUSTED PARTNERS</span></h1>
                    <p  className="font-color-light fw-regular px-0 px-md-5 text-center">We collaborate with a diverse network of 
                    industry leaders and innovators to bring you the best solutions 
                    and services,ensuring your success every step of the way.</p>
                   </div>
                   <div className="row row-cols-2 row-cols-md-4 g-4 justify-content-center px-0 py-0 py-md-4 px-md-5">
                     {partnerImages.map((arr, index) => (
                      <div className="col" key={index}>
                      <img src={arr} alt="partner-logo" 
                      className="image-fluid w-100 h-100 p-3" />
                     </div> ))}
                  </div>
                </div>     
              </div>
             {/* Blog Section*/}
             <div className='bg-white'>
                 <div className="container-fluid d-flex flex-column align-items-center gap-4 p-2 p-md-5">
                 <h1 className="font-color-primary fw-bold fs-1">BLOGS</h1>
                 <div className="row row-cols-1 row-cols-md-3 g-4  px-2 px-md-5">
                   {BlogDetails.slice(0, 3).map((array, index) => (
                    <div className="col" key={index}>
                     <BlogCard onClick={()=>currentBlogHandler(array,array.BlogHeading) }
                     heading={array.BlogHeading} source={array.BlogSource}
                     date={array.BlogDate} image={array.BlogImage} />
                    </div>))}
                 </div>
                 <button onClick={()=> navigate("/blogs") }
                 className="moving-button bg-white fs-6 bg-light border-0 fw-regular font-color-light">See more</button>
                 </div>
             </div>
              {showFooter && <Footer show={showFooter} />}
              {showCompanyForm && <EnquiryForm toggleFormVisibility={toggleFormVisibility}
               onCancel={cancelEnquiryForm}></EnquiryForm>}
              {showEnquiryForm && <EnquiryForm toggleFormVisibility={toggleFormVisibility}
               onCancel={cancelEnquiryForm}/>}
               {showSuccessForm && (
            <SuccessForm
            onClick={cancelEnquiryForm}/>
          )}
             <EnquiryTop onClick={enquiryFormHandler}></EnquiryTop>
              </div>)}
            
              export default MainPage;