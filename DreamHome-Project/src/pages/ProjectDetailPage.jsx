import { useContext , useEffect , useState } from "react";
import useShowFooter from "../context/useShowFooter";
import Footer from '../components/Footer';
import EnquiryForm from "../forms/EnquiryForm";
import './Custom.css';
import projectImage from './../assets/Images/dubaiImage.jpg';
import ProjectGallery from '../components/ProjectGallery';
import locationImage from './../assets/Images/location.png';
import { CurrentDataContext } from "../context/CurrentDataProvider";
import { useParams } from "react-router-dom";

function ProjectDetailPage(){
    const params = useParams();
    const showFooter=useShowFooter();
    const [showEnquiryForm, setShowEnquiryForm] = useState(false);
    const enquiryFormHandler = () => { setShowEnquiryForm(true) }
    const cancelEnquiryForm = () => { setShowEnquiryForm(false) }
    const { currentProjectData } = useContext(CurrentDataContext);
    if(!currentProjectData) return
    useEffect(() => { window.scrollTo(0, 0);}, []);
    return(
         <div className="overflow-hidden mb-5">
         <div className="row row-cols-1 row-cols-md-2 p-0 p-md-5">
         <div className="rounded m-0 p-0 ">
          <img src={projectImage} alt="project-Image" className="w-100 h-100 m-0 p-0 image-fluid rounded" />
         </div>
         {/* Project Detail */}
         <div className="d-flex flex-column align-items-center align-items-md-start justify-content-between gap-4 gap-md-2 px-4 py-3 py-md-0 px-md-5">
             <div className="d-flex flex-column align-items-center align-items-md-start gap-1">
             <h1 className="font-color-primary fw-bold fs-1 m-0">{currentProjectData.ProjectHeading}</h1>
            <label className="font-color-secondary fw-semibold text-center text-md-start fs-5  m-0">Dubailand, Dubai, United Arab Emirates.</label>
            <p className="font-color-light py-2 fs-6 m-0 text-center fw-medium text-md-start">DAMAC Hills community is a well-established self-contained community comprising villas, apartments and a hotel. Home to the Trump International Golf Club Dubai, it also boasts nearly four million square feet of parkland offering various themed areas for relaxation and sports – including restful gardens and lakes, a skate park, stables, football field, tennis courts and more. 
             Popular food trucks and a resident ice cream van serve the community, along with a Carrefour supermarket, Jebel Ali School, salons and cleaning services, a special Green Zone selling plants, and shuttle service to Mall of the Emirates, with more amenities coming soon. Also, DAMAC lagoons have many facilities for children like slides, pirate ships and trampolines food trucks and a resident ice cream van serve the community, along with a Carrefour supermarket, Jebel Ali</p>
             </div>
             {/* ....Buttons */}
             <div className="d-flex flex-column flex-md-row align-items-center gap-2 gap-md-4">
             <button onClick={enquiryFormHandler}
             className="py-3 button-hover-primary fs-para project-button-width fw-bold text-white background-color-primary border-0 rounded">ENQUIRE NOW</button>
             <button className="py-3 button-hover-light fs-para project-button-width fw-bold font-color-light border-0 rounded">DOWNLOAD BROCHURE</button>
             </div>
             </div>
         </div>
         {/* Project Gallery */}
         <ProjectGallery></ProjectGallery>
         {/* Location */}
         <div className="background-color-primary p-0 p-md-5 my-5 ">
         <div className="p-3 p-md-5 row row-cols-1 row-cols-md-2">
         <div className="rounded m-0">
          <img src={locationImage} alt="project-Image" className="w-100 h-100 m-0 p-0 image-fluid rounded" />
         </div>
         <div className="d-flex flex-column align-items-center align-items-md-start justify-content-center gap-3 gap-md-4 p-2 p-md-5">
        <label className="text-white fw-bold fs-1 m-0 ">OUR LOCATION</label>
        <p className="text-white fs-6 m-0 text-center fw-regular text-md-start ">DAMAC Hills is located along Umm Suqeim Road, with
         easy access to the city’s major road networks, and proximity to all key business and leisure
          districts. A family-friendly development, DAMAC Hills hosts regular community events; whilst 
          the popular Global Village, IMG Worlds of Adventure, Mall of the Emirates and Dubai Butterfly 
          Garden are all just a short drive away</p>
          <button className="py-3 button-hover-secondary project-button-width fs-para fw-bold text-white background-color-secondary border-0 rounded">VIEW ON GOOGLE MAP</button>
         </div>
         </div>
         </div>
         { showFooter && <Footer show={showFooter} />}
         {showEnquiryForm && <EnquiryForm onCancel={cancelEnquiryForm}/>}
         </div>
         )}
         
         export default ProjectDetailPage;