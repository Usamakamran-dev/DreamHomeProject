import './Custom.css';
import { useContext } from "react";
import useShowFooter from "../context/useShowFooter";
import HeroSection from "../components/HeroSection";
import ProjectCard from "../components/ProjectCard";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";
import { ProjectCardContext } from "../context/ProjectCardProvider";
import { BlogContext } from "../context/BlogProvider";
import { CurrentDataContext } from "../context/CurrentDataProvider";
import { useNavigate } from "react-router-dom";
import partnerLogo from "./../assets/PartnerLogos/paramount-hotel.svg";
import partnerLogo2 from "./../assets/PartnerLogos/cavalli.svg";
import partnerLogo3 from "./../assets/PartnerLogos/deGRISOGONO.svg";
import partnerLogo4 from "./../assets/PartnerLogos/Radisson.svg";
import partnerLogo5 from "./../assets/PartnerLogos/Rotana.svg";
import partnerLogo6 from "./../assets/PartnerLogos/zuhairmurad.svg";
import partnerLogo7 from "./../assets/PartnerLogos/Trump.svg";

function MainPage() {
    const navigate=useNavigate();
    const ProjectCardDetails = useContext(ProjectCardContext);
    const { setCurrentProjectData, setCurrentBlogData } = useContext(CurrentDataContext);
    const BlogDetails = useContext(BlogContext);
    const showFooter=useShowFooter();
    const partnerImages=[partnerLogo,partnerLogo2,partnerLogo3,partnerLogo4,partnerLogo5,partnerLogo6,partnerLogo7];
    // Setting the currently clicked project card
    function currentProjectHandler(currentProjectData,id){
      setCurrentProjectData(currentProjectData);
      navigate(`/project/:project${id}`);}
    // Setting the currently clicked blog card
    function currentBlogHandler(currentBlogData,id){
      setCurrentBlogData(currentBlogData);
      navigate(`/blog/:blog${id}`);}

        return(
          <div className="overflow-hidden mb-5">
              <HeroSection></HeroSection>
              {/* .................................................................................. */}
              <div
              className="bg-light container-fluid d-flex flex-column align-items-center gap-4 p-2 p-md-5">
                <h1 className="font-color-primary fw-bold fs-1">OUR <span 
                className="font-color-secondary fw-bold fs-1">PROJECTS</span></h1>
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
               className="moving-button bg-light fs-6 bg-light border-0 fw-medium font-color-light">See more</button>
               </div>
{/* ...................................................................................................... */}
                <div className="contact-page-width mx-auto d-flex flex-column align-items-center py-2 py-md-5 gap-5 mt-5">
                  <div className='d-flex flex-column align-items-center'>
                  <h1 className="font-color-primary fw-bold fs-1">OUR <span className="font-color-secondary fw-bold fs-1">TRUSTED PARTNERS</span></h1>
                  <p  className="font-color-light fw-medium px-5 text-center">We collaborate with a diverse network of 
                  industry leaders and innovators to bring you the best solutions 
                  and services,ensuring your success every step of the way.</p>
                  </div>
                   <div className="row row-cols-2 row-cols-md-4 g-5 justify-content-center px-2 py-2 py-md-4 px-md-5">
                     {partnerImages.map((arr, index) => (
                      <div className="col" key={index}>
                      <img src={arr} alt="partner-logo" 
                      className="image-fluid w-100 h-100 p-3" />
                     </div> ))}
                  </div>
               </div>             
{/*..................................................................................................... */}
              <div className="container-fluid d-flex flex-column align-items-center gap-4 p-2 p-md-5 mt-3 mb-5 ">
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
                className="moving-button bg-white fs-6 bg-light border-0 fw-medium font-color-light">See more</button>
              </div>
              {showFooter && <Footer show={showFooter} />}</div>)}
              
              export default MainPage;