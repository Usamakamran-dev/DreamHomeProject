import { useContext } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProjectCard from "../components/ProjectCard";
import PartnerSlider from "../components/PartnerSlider";
import Footer from "../components/Footer";
import './MainPage.css';
import { ProjectCardContext } from "../context/ProjectCardProvider";

function MainPage() {
    const ProjectCardDetails = useContext(ProjectCardContext);
    return(
        <div className="overflow-hidden">
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            {/* .................................................................................. */}
            <div className="container-fluid d-flex flex-column align-items-center gap-4 p-5">
             <h1 className="font-color-primary fw-bold fs-1">OUR <span 
             className="font-color-secondary fw-bold fs-1">PROJECTS</span></h1>
             <div className="row row-cols-1 row-cols-md-3 gy-5 px-5">
              {ProjectCardDetails.map((array, index) => (
              <div className="col" key={index}>
              <ProjectCard heading={array.ProjectHeading} subHeading={array.ProjectSubHeading}
               paragraph={array.ProjectParagraph} image={array.ProjectImage} />
              </div>
              ))}
              </div>
              </div>
              {/* ................................................................................. */}
             <PartnerSlider></PartnerSlider>
             {/* .................................................................................. */}
             <div className="container-fluid d-flex flex-column align-items-center gap-4 p-5 mt-3">
             <h1 className="font-color-primary fw-bold fs-1">BLOGS</h1>
             <div className="row row-cols-1 row-cols-md-3 g-4 px-5">
              {ProjectCardDetails.map((array, index) => (
              <div className="col" key={index}>
              <ProjectCard heading={array.ProjectHeading} subHeading={array.ProjectSubHeading}
               paragraph={array.ProjectParagraph} image={array.ProjectImage} />
              </div>
              ))}
              </div>
              </div>
              <Footer></Footer>
            
             </div>)}
export default MainPage;