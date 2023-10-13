import { useContext, useState , useEffect } from "react";
import useShowFooter from "../context/useShowFooter";
import HeroSection from "../components/HeroSection";
import ProjectCard from "../components/ProjectCard";
import BlogCard from "../components/BlogCard";
import PartnerSlider from "../components/PartnerSlider";
import Footer from "../components/Footer";
import './Custom.css';
import { ProjectCardContext } from "../context/ProjectCardProvider";
import { BlogContext } from "../context/BlogProvider";
import { CurrentDataContext } from "../context/CurrentDataProvider";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate=useNavigate();
  const ProjectCardDetails = useContext(ProjectCardContext);
    const { setCurrentProjectData, setCurrentBlogData } = useContext(CurrentDataContext);
    const BlogDetails = useContext(BlogContext);
    const showFooter=useShowFooter();
    // Setting the currently clicked project card
    function currentProjectHandler(currentProjectData,id){
      setCurrentProjectData(currentProjectData);
      navigate(`/project/:project${id}`);
    }
    // Setting the currently clicked blog card
    function currentBlogHandler(currentBlogData,id){
      setCurrentBlogData(currentBlogData);
      navigate(`/blog/:blog${id}`);
    }

        return(
          <div className="overflow-hidden mb-5">
              <HeroSection></HeroSection>
              {/* .................................................................................. */}
              <div id="show-footer" className="container-fluid d-flex flex-column align-items-center gap-4 p-2 p-md-5">
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
                      </div>
                    ))}
                  </div>

                <button onClick={()=> navigate("/projects")}
                className="moving-button bg-white fs-6 bg-light border-0 fw-semibold font-color-light">See more</button>
                </div>
                {/* ................................................................................. */}
              <PartnerSlider></PartnerSlider>
              {/* .................................................................................. */}
              <div className="container-fluid d-flex flex-column align-items-center gap-4 p-2 p-md-5 mt-3 mb-5 ">
              <h1 className="font-color-primary fw-bold fs-1">BLOGS</h1>
              <div className="row row-cols-1 row-cols-md-3 g-4  px-2 px-md-5">
                {BlogDetails.slice(0, 3).map((array, index) => (
                <div className="col" key={index}>
                <BlogCard onClick={()=>currentBlogHandler(array,array.BlogHeading) }
                 heading={array.BlogHeading} source={array.BlogSource}
                date={array.BlogDate} image={array.BlogImage} />
                </div>
                ))}
                </div>
                <button onClick={()=> navigate("/blogs") }
                className="moving-button bg-white fs-6 bg-light border-0 fw-semibold font-color-light">See more</button>
                </div>
              { showFooter && <Footer show={showFooter} />} </div>)}
              export default MainPage;