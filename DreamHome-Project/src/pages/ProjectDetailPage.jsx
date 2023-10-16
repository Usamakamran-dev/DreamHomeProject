import { useContext , useEffect , useState } from "react";
import useShowFooter from "../context/useShowFooter";
import Footer from '../components/Footer';
import './Custom.css';
import ProjectGallery from '../components/ProjectGallery';
import { CurrentDataContext } from "../context/CurrentDataProvider";
import ProjectHeroSection from "../components/ProjectHeroSection";
import PaymentPlan from "../components/PaymentPlan";
import AboutUs from "../components/AboutUs";
import Feature from "../components/Feature";

function ProjectDetailPage(){
    const showFooter=useShowFooter();
    const { currentProjectData } = useContext(CurrentDataContext);
    if(!currentProjectData) return
    useEffect(() => { window.scrollTo(0, 0);}, []);
    return(
         <div className="overflow-hidden transparent-section mb-5">
         <ProjectHeroSection></ProjectHeroSection>
          <div className="background-color-primary">
            <div className="text-center px-2 py-4 px-md-5 py-md-5 d-flex flex-column align-items-center gap-5">
              <div className="d-flex flex-column align-items-center gap-2">
              <h1 className="m-0 fs-bold text-white fs-1">0.5% MONTHLY <span className="font-color-secondary">PAYMENTS</span></h1>
              <p className="m-0 fw-regular fs-6 fs-md-3 text-white">Studio, 1 & 2 Bedroom Apartments with Private Pool</p>
              </div>
              <div className="d-flex flex-column flex-md-row align-items-center">
              <label className="m-0 bg-white font-color-primary px-3 py-2 fs-4 fw-bold">
                Starting From
              </label>
              <label className="m-0 px-4 py-2 fs-4 background-color-secondary text-white fw-bold">
                AED 689,000
              </label>
              </div>
           </div>
        </div>
        <AboutUs></AboutUs>
        <div className="bg-white">
          <div className="px-2 px-md-5 py-5 d-flex flex-column align-items-center gap-5 m-0">
            <h3 className="fs-1 fw-bold font-color-primary text-center">UNIT <span className="font-color-secondary">TYPES</span></h3>
             <div className="d-flex flex-row align-items-center gap-3 w-100 overflow-auto py-2 px-0 px-md-5">
              <Feature></Feature>
              <Feature></Feature>
              <Feature></Feature>
              <Feature></Feature>
             </div>
         </div>
        </div>
        <ProjectGallery></ProjectGallery>
        <PaymentPlan></PaymentPlan>
        { showFooter && <Footer show={showFooter} />}
        </div>
        )}
        export default ProjectDetailPage;