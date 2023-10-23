import { useContext,useEffect,useState } from "react";
import { CurrentDataContext } from "../context/CurrentDataProvider";
import { CurrentProjectBlogContext } from "../context/currentProjectBlog";
import useShowFooter from "../context/useShowFooter";
import Footer from '../components/Footer';
import EnquiryTop from '../components/EnquiryTop';
import EnquiryForm from "../forms/EnquiryForm";
import facebookIcon from './../assets/social media/facebook.png';
import whatsappIcon from './../assets/social media/whatsapp.png';
import linkedinIcon from './../assets/social media/linkedin.png';
import twitterIcon from './../assets/social media/twitter.png';
import dubaiImage from './../assets/Images/dubaiImage.jpg';
import eyeIcon from './../assets/Icons/eye.png';
import NewsLetter from "../forms/NewLetter";
import GetInTouchWithUs from "../forms/GetInTouchWithUs";
import SuccessForm from "../forms/SuccessForm";
import LoadingSpinner from "../components/LoadingSpinner";

function BlogDetailPage(){
  const [isFixed, setIsFixed] = useState(false);
  const showFooter=useShowFooter();
  const { currentBlogData }=useContext(CurrentProjectBlogContext);
  if(!currentBlogData) return <LoadingSpinner></LoadingSpinner>
  const {setShowEnquiryForm,setShowSuccessForm,showEnquiryForm,
    showSuccessForm } = useContext(CurrentDataContext);     
  useEffect(() => {
    const handleScroll = () => {
      const scrollPoint = window.scrollY;
       if (scrollPoint >= 350) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
      if(scrollPoint >= 1140){
        setIsFixed(false);
      }};
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  function toggleFormVisibility(isVisible){
    setShowEnquiryForm(isVisible);
    setShowSuccessForm(true);
  }
  useEffect(() => { window.scrollTo(0, 0);}, []);

    return(
        <div className="container">
         <div className="row">
          {/*Main Blog Data  */}
          <div className="col-md-8 shadow-sm mt-3 px-4 py-4 d-flex flex-column gap-4">
            <div className='d-flex flex-column align-items-start gap-3'>
            <h1 className="fs-2 fw-bold font-color-primary m-0">{currentBlogData.BlogHeading}</h1>
            <div className="w-100 d-flex flex-row align-items-center justify-content-between">
            <p className="font-color-secondary fw-medium m-0">Published on 8 MARCH 2023</p>
             <div className="d-flex flex-row align-items-center gap-2">
              <img src={eyeIcon} alt="eye-icon" width='20' />
              <label className="fs-6 fw-medium font-primary-light"> 2.09K</label>
             </div>
            </div>
            <div className=' m-0 p-0'><img src={dubaiImage} alt="dubai-Image" className='w-100 h-100  img-fluid'/></div>
            </div>
            {/* Dummy Blog Data */}
                <p id='paragraph-section' className="font-color-light fw-medium">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a egestas orci, 
                    congue euismod sapien. Mauris cursus volutpat mauris porttitor feugiat. Pellentesque varius 
                    ut lorem in pharetra. Suspendisse ut nibh id ex eleifend posuere.  <br /><br /> Donec ac odio vitae erat 
                    vestibulum facilisis. Nullam eu dolor gravida ex venenatis tempor pellentesque non risus. Sed 
                    a mauris lectus. Curabitur viverra, arcu vitae tristique convallis, mi risus consectetur ante,
                    ultricies ornare magna orci eu lectus. Maecenas semper a diam quis fermentum. Donec egestas 
                    lectus in enim aliquet, in gravida est ornare. Suspendisse in leo nulla. Nunc pulvinar risus 
                    non ex feugiat fermentum. Nam nec <br /><br />consectetur odio, in mattis tortor.
                    Aenean euismod auctor nulla quis consectetur. Etiam aliquet aliquet sapien. Fusce sagittis 
                    lobortis risus, a pretium lorem consequat ut. Vivamus maximus euismod urna, non ullamcorper
                    diam volutpat ac. Curabitur at vehicula quam. Donec scelerisque semper pharetra. Pellentesque
                    commodo elementum lectus, a bibendum ante. Fusce non eros mauris. Phasellus diam lectus, varius
                    vitae aliquet non, sagittis vitae justo. Cras aliquet elementum porttitor. Phasellus sagittis
                    turpis ex, id elementum nibh finibus <br /><br />eget. Sed efficitur lobortis velit ac pulvinar. Nam 
                    nulla enim, ultricies vitae nunc sit amet, lacinia sodales diam. Aenean dapibus, enim non 
                    lobortis ornare, nisl massa malesuada elit, convallis ultricies velit nunc ut augue.Aenean 
                    pretium libero nulla, non suscipit turpis rutrum id. Vivamus id diam dui. Phasellus arcu 
                    dolor, porttitor vitae arcu quis, feugiat mattis dolor. Integer id sapien at leo eleifend
                    fringilla. Aliquam eu sollicitudin <br /><br />lacus. Vestibulum risus elit, auctor ut lacinia et, 
                    dictum vitae erat. Quisque feugiat ante tortor, ac sodales arcu vestibulum a. Pellentesque
                        suscipit molestie ipsum ut malesuada.</p>
                    <div className="d-flex flex-column align-items-center gap-3 py-5">
                     <label className="fs-5 fw-semibold font-color-primary m-0">Share Now</label>
                     <div className="d-flex flex-row align-items-center gap-3">
                      <div  style={{backgroundColor: "#3b5998"}} className="rounded-circle p-2 card-hover" >
                      <img width="40" className="h-auto p-1 p-md-2" src={facebookIcon} alt="facebook-icon" />
                      </div>
                      <div style={{backgroundColor: "#25D366"}} className="rounded-circle p-2 card-hover" >
                      <img width="40" className="h-auto p-1 p-md-2" src={whatsappIcon} alt="whatsapp-icon" />
                      </div>
                      <div  style={{backgroundColor: "#0A66C2"}} className="rounded-circle p-2 card-hover" >
                      <img width="40" className="h-auto p-1 p-md-2" src={twitterIcon} alt="twitter-icon" />
                      </div>
                      <div  style={{backgroundColor: "#00a2ed"}} className="rounded-circle p-2 card-hover" >
                      <img width="40" className="h-auto p-1 p-md-2" src={linkedinIcon} alt="linkedin-icon" />
                      </div>
                     </div>
                    </div>
                    </div>
                    {/* for ads */}
                    <div className="col-md-4 my-3 overflow-hidden">
                    <div className={`d-flex flex-column gap-4 bg-light rounded fixed-size-column p-3 ${isFixed ? 'fixed-form' : ''}`}>
                      <GetInTouchWithUs></GetInTouchWithUs>
                      <NewsLetter></NewsLetter>
                      </div>
                    </div>
                  </div>
                  {showFooter && <Footer show={showFooter} />}
                  {showEnquiryForm && <EnquiryForm toggleFormVisibility={toggleFormVisibility}
                   onCancel={()=>setShowEnquiryForm(false)}/>}
                  {showSuccessForm && <SuccessForm onClick={()=>setShowSuccessForm(true)}/>}
                  <EnquiryTop onClick={()=>setShowEnquiryForm(true)}></EnquiryTop>
                  </div> )}
                export default BlogDetailPage;