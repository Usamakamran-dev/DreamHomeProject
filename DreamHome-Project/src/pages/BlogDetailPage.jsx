import { useContext,useEffect,useState } from "react";
import useShowFooter from "../context/useShowFooter";
import dubaiImage from './../assets/Images/dubaiImage.jpg';
import Footer from '../components/Footer';
import { CurrentDataContext } from "../context/CurrentDataProvider";
import facebookIcon from './../assets/social media/facebook.png';
import whatsappIcon from './../assets/social media/whatsapp.png';
import linkedinIcon from './../assets/social media/linkedin.png';
import twitterIcon from './../assets/social media/twitter.png';
import EnquiryTop from '../components/EnquiryTop';
import EnquiryForm from "../forms/EnquiryForm";

function BlogDetailPage(){
  const { currentBlogData } = useContext(CurrentDataContext);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const enquiryFormHandler = () => { setShowEnquiryForm(true) }
  const cancelEnquiryForm = () => { setShowEnquiryForm(false) }
  const showFooter=useShowFooter();
  if(!currentBlogData) return   
  useEffect(() => { window.scrollTo(0, 0);}, []); 
  
    return(
        <div className="container mb-5">
         <div className="row">
          {/*Main Blog Data  */}
          <div className="col-md-8 shadow-sm mt-3 px-4 py-4 d-flex flex-column gap-4">
            <div className='d-flex flex-column align-items-start gap-3'>
            <h1 className="fs-2 fw-bold font-color-primary m-0">{currentBlogData.BlogHeading}</h1>
            <p className="font-color-secondary fw-medium m-0">Published on 8 MARCH 2023</p>
            <div className=' m-0 p-0'><img src={dubaiImage} alt="dubai-Image" className='w-100 h-100  img-fluid'/></div>
            </div>
            {/* Dummy Blog Data */}
                <p className="font-color-light fw-medium">
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
                      <img width="50" className="h-auto p-2" src={facebookIcon} alt="facebook-icon" />
                      </div>
                      <div style={{backgroundColor: "#25D366"}} className="rounded-circle p-2 card-hover" >
                      <img width="50" className="h-auto p-2" src={whatsappIcon} alt="whatsapp-icon" />
                      </div>
                      <div  style={{backgroundColor: "#0A66C2"}} className="rounded-circle p-2 card-hover" >
                      <img width="50" className="h-auto p-2" src={twitterIcon} alt="whatsapp-icon" />
                      </div>
                      <div  style={{backgroundColor: "#00a2ed"}} className="rounded-circle p-2 card-hover" >
                      <img width="50" className="h-auto p-2" src={linkedinIcon} alt="whatsapp-icon" />
                      </div>
                     </div>
                    </div>
                    </div>
                    {/* for ads */}
                    <div className="col-md-4 my-3">
                      <div className="d-flex flex-column gap-4 bg-light rounded p-3">
                      {/* Emquiry Form */}
                      <form className="background-color-primary rounded p-3 w-100 d-flex flex-column align-items-center gap-3">
                      <h1 className="fs-3 text-white text-center">Get in touch with us !</h1>
                      <input type="text" name="FirstName" placeholder='Enter First Name' 
                       className='border-0 fw-medium rounded input-field-style p-3 w-100'/>
                      <input type="text"  name="LastName" placeholder='Enter Last Name' 
                       className='border-0 fw-medium rounded input-field-style p-3 w-100'/>
                       <input type="email"  name="Email" placeholder='Enter Email' 
                       className='border-0 fw-medium rounded input-field-style p-3 w-100'/>
                       <div className="d-flex flex-column align-items-center gap-3 w-100">
                       <button 
                      className="button-hover-secondary py-3 w-100 fs-para fw-bold text-white background-color-secondary border-0 rounded">ENQUIRE NOW</button>
                      <label className="fs-para fw-medium text-white">OR</label>
                      <button style={{backgroundColor: "#25D366"}} 
                      className="button-hover-light py-3 w-100 fs-para fw-bold text-white border-0 rounded">WHATSAPP NOW</button>
                       </div>
                       </form>
                       {/* Newsletter Form */}
                       <div style={{backgroundColor: "#25D366"}}
                       className="rounded d-flex flex-column p-3 bg-warning" >
                        <img src="" alt="" />
                        <h1 className="fs-3 text-center fw-bold">NEWSLETTER</h1>
                        <p className="fs-6  text-center fw-medium">Subscribe For Daily Blog Alert!</p>
                        <form className="d-flex flex-column align-items-center gap-3 w-100">
                        <input type="text" name="Name" placeholder='Enter Name' 
                       className='border-0 fw-medium rounded input-field-style p-3 w-100'/>
                       <input type="email"  name="Email" placeholder='Enter Email' 
                       className='border-0 fw-medium rounded input-field-style p-3 w-100'/>
                       <button
                      className="button-hover-light py-3 w-100 text-white bg-dark fs-para fw-bold border-0 rounded">SUBSCRIBE NOW</button>
                        </form>
                       </div>
                      </div>
                    </div>
                   
                  </div>
                  { showFooter && <Footer show={showFooter} />}
                  {showEnquiryForm && <EnquiryForm  onCancel={cancelEnquiryForm}/>}
                  <EnquiryTop onClick={enquiryFormHandler}></EnquiryTop>
                </div> )}
                export default BlogDetailPage;