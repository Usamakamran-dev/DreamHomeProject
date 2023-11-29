import { useContext , useEffect , useState } from "react";
import './Custom.css';
import ProjectGallery from '../components/ProjectGallery';
import { CurrentDataContext } from "../context/CurrentDataProvider";
import { CurrentProjectBlogContext } from "../context/CurrentProjectBlog";
import ProjectHeroSection from "../components/ProjectHeroSection";
import PaymentPlan from "../components/PaymentPlan";
import Feature from "../components/Feature";
import AmenitiesCard from "../components/AmenitiesCard";
import { Link } from "react-router-dom";
import damacPdf from './../assets/Projects/damac/lagoon.pdf';
import samanaPdf from './../assets/Projects/samana/samana.pdf';
import oliviaPdf from './../assets/Projects/olivia/Olivia.pdf';
import oceanzPdf from './../assets/Projects/oceanz/oceanz.pdf';
import vybPdf from './../assets/Projects/vyb/VYB.pdf';
import havenPdf from './../assets/Projects/haven/HavenBrochure.pdf';

function ProjectDetailPage(){
  const [pdf,setPdf]=useState();
  const { currentProjectData} = useContext(CurrentProjectBlogContext); 
  const {setShowEnquiryForm,cardIdentifier } = useContext(CurrentDataContext);
  if(!currentProjectData) return 

    useEffect(() => { window.scrollTo(0, 0);}, []);    
    const brochureDownload = (() => {
      if (cardIdentifier === 'SAMANA Manhattan') return setPdf(samanaPdf);
      if (cardIdentifier === 'Damac Lagoons') return setPdf(damacPdf);
      if (cardIdentifier === 'Olivia Residences') return setPdf(oliviaPdf);
      if (cardIdentifier === 'Danube Oceanz') return setPdf(oceanzPdf);
      if (cardIdentifier === 'VYB Dubai') return setPdf(vybPdf);
      if (cardIdentifier === 'Haven Aldar') return setPdf(havenPdf);
      return;
    });
    useEffect(() => {
      brochureDownload();
    }, []);
    const bgClass = (() => {
      if (currentProjectData.name === 'SAMANA Manhattan') return 'samanaBg';
      if (currentProjectData.name === 'Damac Lagoons') return 'damacBg';
      if (currentProjectData.name === 'Olivia Residences') return 'oliviaBg';
      if (currentProjectData.name === 'Danube Oceanz') return 'oceanzBg';
      if (currentProjectData.name === 'VYB Dubai') return 'vybBg';
      if (currentProjectData.name === 'Haven Aldar') return 'havenBg';
      if (currentProjectData.name === 'Park Green') return 'parkGreenBg';
      if (currentProjectData.name === 'South Bay') return 'southBayBg';
      return '';
    })();
   
  return(
    <div style={{margin: '4rem auto'}}
    className={`overflow-hidden ${bgClass}`}>
         <ProjectHeroSection heroSection={currentProjectData.hero}></ProjectHeroSection>
         {/* Monthly Payment */}
          <div className="background-color-primary">
              <div className="text-center px-2 py-4 px-md-5 py-md-5 d-flex flex-column align-items-center gap-5">
                  <div className="d-flex flex-column align-items-center gap-2">
                      <h1 className="m-0 fs-bold text-white h-mobile">
                      {currentProjectData.monthlyPayment.heading}
                      </h1>
                      <p className="m-0 fw-regular fs-mobile text-white">
                      {currentProjectData.monthlyPayment.paragraph}
                      </p>
                  </div>
                  <div className="d-flex flex-column flex-md-row align-items-center">
                      <label style={{width: '13rem'}} 
                      className="m-0 bg-white font-color-primary py-2 fs-4 fw-bold">
                        Starting From
                      </label>
                      <label style={{width: '13rem'}} 
                      className="m-0 py-2 fs-4 background-color-secondary text-white fw-bold">
                      AED {currentProjectData.monthlyPayment.label}              
                      </label>
                  </div>
            </div>
        </div>
        {/* About Us */}
        <div className='bg-white'>
                <div className="row py-2 py-md-5 container mx-auto">
                    <div className="col-md-6 py-5 px-0 px-md-5 d-flex flex-column align-items-center gap-2 gap-md-5 justify-content-center align-items-md-start">
                        <h2 className="h-mobile m-0 fw-bold font-color-primary text-start text-md-start">
                        ABOUT <span className='font-color-secondary'>US</span>
                        </h2>
                        <p className="font-color-light text-center text-md-start fs-mobile fw-regular">
                        {currentProjectData.aboutUs.paragraph}
                        </p>
                        <div className='d-flex flex-column gap-2 gap-md-4 flex-md-row'>
                            <button  onClick={()=> setShowEnquiryForm(true)} style={{width: '12rem'}} 
                            className='background-color-primary border-0 button-hover-primary py-3 rounded fs-para fw-semibold text-white'>
                            ENQUIRE NOW
                            </button>
                            <Link to={pdf} download='example-pdf' target="_blank"
                             onClick={()=> setShowEnquiryForm(true)} style={{width: '12rem'}} 
                             className='background-color-secondary border-0 button-hover-secondary py-3 rounded d-flex align-item-center justify-content-center fs-para fw-semibold text-white'>
                             DOWNLOAD BROCHURE
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6 py-0 py-md-4 m-0 rounded">
                    <img src={currentProjectData.aboutUs.image} alt="AboutUs-Image" 
                    className="img-fluid p-0 m-0 w-100 rounded about-Img"/>
                    </div>
               </div>
        </div>
        {/* Unit Section */}
        <div className="bg-white">
            <div className="px-2 px-md-5 py-3 py-md-5 d-flex flex-column align-items-center  gap-2 gap-md-5 m-0">
                <h3 className="h-mobile fw-bold font-color-primary text-center">UNIT 
                  <span className="font-color-secondary"> TYPES</span>
                </h3>
                <div className="container-fluid py-2 px-0 px-md-2 h-100">
                    <div className="row h-100 d-flex justify-content-center align-items-stretch">
                          {currentProjectData.unitTypes?.map((arr, index) => (
                            <div key={index} className="col-md-3 col-6 mb-3">
                               <div className="h-100">
                                 <Feature label={arr.title} price={arr.price}></Feature>
                               </div>
                            </div>
                          ))}
                    </div>
                </div>
           </div>
        </div>
        {/*Transparent Section*/}
        <div style={{width: '100%',height: "30rem"}}></div>
        {/* Gallery Section */}
        <div className="background-color-primary py-5 d-flex flex-column align-items-center justify-content-center gap-4">
            <h1 className="h-mobile fw-bold text-white"> PROJECT GALLERY</h1>
            <ProjectGallery images={currentProjectData.gallery}></ProjectGallery>
        </div>
        {/* Amenities */}
        <div className="bg-white">
            <div className="d-flex flex-column align-items-center mx-auto py-5">
                <h1 className="h-mobile m-0 fw-bold font-color-primary ">AMENITIES</h1>
                <div className="row row-cols-2 row-cols-md-4 py-2 py-md-5">
                    {currentProjectData.amenities?.map((arr, index) => (
                      <div className="col" key={index}>
                        <AmenitiesCard label={arr.label} image={arr.image}/>
                      </div>
                    ))}
               </div>
            </div>
        </div>
        {/* Payment Plan */}
        <PaymentPlan paymentPlan={currentProjectData.paymentPlan}></PaymentPlan>
      </div>
      )}
      export default ProjectDetailPage;