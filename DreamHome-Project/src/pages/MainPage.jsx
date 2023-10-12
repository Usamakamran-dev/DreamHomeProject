import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProjectCard from "../components/ProjectCard";
import BlogCard from "../components/BlogCard";
import PartnerSlider from "../components/PartnerSlider";
import Footer from "../components/Footer";
import './Custom.css';
import { ProjectCardContext } from "../context/ProjectCardProvider";
import { BlogContext } from "../context/BlogProvider";

function MainPage() {
    const ProjectCardDetails = useContext(ProjectCardContext);
    const BlogDetails = useContext(BlogContext);
    const [showFooter,setShowFooter] = useState(false);

    // ............Using useeffect to show the footer by scrolling at the certain position
    useEffect(() => {
        const handleScroll = () => {
          const projectSection = document.getElementById("project-section");
          const scrollPoint = window.scrollY;
          const threshold = 500;
          if (scrollPoint >= projectSection.offsetTop - threshold) {
            setShowFooter(true);
          } else {
            setShowFooter(false);
          }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [showFooter]);
    // ____________________________________________________________________________________________________
    return(
        <div className="overflow-hidden">
            <HeroSection></HeroSection>
            {/* .................................................................................. */}
            <div id="project-section" className="container-fluid d-flex flex-column align-items-center gap-4 p-2 p-md-5">
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
             <div className="container-fluid d-flex flex-column align-items-center gap-4 p-5 mt-3 mb-5 ">
             <h1 className="font-color-primary fw-bold fs-1">BLOGS</h1>
             <div className="row row-cols-1 row-cols-md-3 g-4 px-5 mb-5">
              {BlogDetails.map((array, index) => (
              <div className="col" key={index}>
              <BlogCard heading={array.BlogHeading} source={array.BlogSource}
               date={array.BlogDate} image={array.BlogImage} />
              </div>
              ))}
              </div>
              </div>
             { showFooter && <Footer show={showFooter} />
}
            
             </div>)}
export default MainPage;