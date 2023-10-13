import { useContext , useEffect } from "react";
import { ProjectCardContext } from "../context/ProjectCardProvider";
import { CurrentDataContext } from "../context/CurrentDataProvider";
import ProjectCard from "../components/ProjectCard";
import { useNavigate } from "react-router-dom";

function ProjectPage(){
    const navigate=useNavigate();
    const ProjectCardDetails=useContext(ProjectCardContext);
    const { setCurrentProjectData} = useContext(CurrentDataContext);
    function currentProjectHandler(currentProjectData,id){
        setCurrentProjectData(currentProjectData);
        navigate(`/project/:project${id}`);
      }
    useEffect(() => { window.scrollTo(0, 0);}, []);


    return(
        <div className="px-2 px-md-5 py-5 d-flex flex-column align-items-center gap-5  mb-5">
           <h1 className="font-color-primary fw-bold fs-1">OUR <span className="font-color-secondary">PROJECTS</span></h1>
           <div className="row row-cols-1 row-cols-md-3 gy-5">
                    {ProjectCardDetails.map((array, index) => (
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
        </div>
       
    )
}

export default ProjectPage;