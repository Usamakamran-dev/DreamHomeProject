import { useContext , useEffect } from "react";
import { ProjectCardContext } from "../context/ProjectCardProvider";
import { CurrentDataContext } from "../context/CurrentDataProvider";
import { CurrentProjectBlogContext } from "../context/CurrentProjectBlog";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import useShowFooter from "../context/useShowFooter";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import EnquiryTop from '../components/EnquiryTop';
import EnquiryForm from "../forms/EnquiryForm";
import SuccessForm from "../forms/SuccessForm";

function ProjectPage(){
  const navigate=useNavigate();
  const showFooter=useShowFooter();
    const ProjectCardDetails=useContext(ProjectCardContext);
    if(!ProjectCardDetails) return <LoadingSpinner></LoadingSpinner>
    const {updateCurrentProjectData}=useContext(CurrentProjectBlogContext);
    const { setCardIdentifier,setShowEnquiryForm,setShowSuccessForm,
      showEnquiryForm,showSuccessForm } = useContext(CurrentDataContext);
    function currentProjectHandler(currentProjectData,id){
      updateCurrentProjectData(currentProjectData);
        setCardIdentifier(currentProjectData.name);
        navigate(`/project/${id.split(' ').join('-')}`)}
    function toggleFormVisibility(isVisible){
      setShowEnquiryForm(isVisible);
      setShowSuccessForm(true);
    }
    useEffect(() => { window.scrollTo(0, 0);}, []);
    
    return(
        <div className="px-2 px-md-5 py-5 d-flex flex-column align-items-center gap-2 gap-md-5">
          <div className="d-flex flex-column align-items-center">
          <h1 className="font-color-primary fw-bold h-mobile">OUR <span className="font-color-secondary">PROJECTS</span></h1>
          <p className="font-color-light fw-regular px-2 px-md-5 text-center fs-mobile">Bringing you our portfolio based on the projects that divide into residences, commercial, offices, and retails that carry a distinct panache of timeless elegance</p>
          </div>
           <div className="row row-cols-1 row-cols-md-3 gy-5">
                    {ProjectCardDetails.map((array, index) => (
                      <div className="col p-3" key={index}>
                        <ProjectCard
                          onClick={() => currentProjectHandler(array, array.name)}
                          heading={array.name}
                          subHeading={array.developer}
                          paragraph={array.aboutUs.paragraph}
                          image={array.projectImage}
                        />
                      </div>
                    ))}
                  </div>
                  {showFooter && <Footer show={showFooter}/>}
                  {showEnquiryForm && <EnquiryForm toggleFormVisibility={toggleFormVisibility}
                  onCancel={()=> setShowEnquiryForm(false)}/>}
                  {showSuccessForm && ( <SuccessForm onClick={()=>setShowSuccessForm(true)}/>)}
                  <EnquiryTop onClick={()=>setShowEnquiryForm(true)}></EnquiryTop>
               </div>
                 )}
               export default ProjectPage;