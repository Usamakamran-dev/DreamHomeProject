import { useContext , useEffect , useState } from "react";
import { ProjectCardContext } from "../context/ProjectCardProvider";
import { CurrentDataContext } from "../context/CurrentDataProvider";
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
    const [showEnquiryForm, setShowEnquiryForm] = useState(false);
    const [showSuccessForm, setShowSuccessForm] = useState(false);
    const enquiryFormHandler = () => { setShowEnquiryForm(true) }
    const cancelEnquiryForm = () => { 
      setShowEnquiryForm(false) 
      setShowSuccessForm(false)
    }
    const ProjectCardDetails=useContext(ProjectCardContext);
    if(!ProjectCardDetails){
     return <LoadingSpinner></LoadingSpinner>
    }
    const { setCurrentProjectData , cardIdentifier , setCardIdentifier} = useContext(CurrentDataContext);
    function currentProjectHandler(currentProjectData,id){
        setCurrentProjectData(currentProjectData);
        setCardIdentifier(currentProjectData.ProjectHeading);
        navigate(`/project/:project${id}`);
      }
    useEffect(() => { window.scrollTo(0, 0);}, []);

    function toggleFormVisibility(isVisible){
      setShowEnquiryForm(isVisible);
      setShowSuccessForm(true);
    };
    return(
        <div className="px-2 px-md-5 py-5 d-flex flex-column align-items-center gap-5">
          <div className="d-flex flex-column align-items-center">
          <h1 className="font-color-primary fw-bold fs-1">OUR <span className="font-color-secondary">PROJECTS</span></h1>
          <p className="font-color-light fw-medium px-5 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu nisi quis urna imperdiet vehicula. 
            Ut interdum dignissim dui. Suspendisse nunc nunc, ornare in dignissim in, efficitur vitae nisl</p>
          </div>
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
                  {showFooter && <Footer show={showFooter} />}
                  {showEnquiryForm && <EnquiryForm  
                  toggleFormVisibility={toggleFormVisibility}
                  onCancel={cancelEnquiryForm}/>}
                   {showSuccessForm && (
                   <SuccessForm
                   onClick={cancelEnquiryForm}/>
                   )}
                  <EnquiryTop onClick={enquiryFormHandler}></EnquiryTop>
               </div>
                 )}
           export default ProjectPage;