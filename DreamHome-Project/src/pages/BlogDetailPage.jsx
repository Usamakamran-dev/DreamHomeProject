import { useContext,useEffect} from "react";
import { CurrentProjectBlogContext } from "../context/CurrentProjectBlog";
import eyeIcon from './../assets/Icons/eye.png';
import NewsLetter from "../forms/NewsLetter";
import GetInTouchWithUs from "../forms/GetInTouchWithUs";
import LoadingSpinner from "../components/LoadingSpinner";
import instaIcon from "./../assets/social media/instagramIcon.png";
import { FacebookIcon,LinkedinIcon,TelegramIcon,TwitterIcon,WhatsappIcon} from "react-share";
import { FacebookShareButton,LinkedinShareButton,WhatsappShareButton,
         TelegramShareButton, TwitterShareButton} from 'react-share';

function BlogDetailPage(){
  const currentURL = window.location.href;
  const { currentBlogData }=useContext(CurrentProjectBlogContext);
  if(!currentBlogData) return
  useEffect(() => { window.scrollTo(0, 0);}, []);
 
  return(
      <div style={{margin: '4rem auto'}}
      className="overflow-hidden w-100 my-4 px-2 px-md-5">
         <div className="row">
          {/*Main Blog Data  */}
          <div className="col-md-8 shadow-sm mt-5 px-3 px-md-4 py-4 d-flex flex-column gap-4">
              <div className='d-flex flex-column align-items-start gap-3'>
                  <h1 className="h-mobile fw-bold font-color-primary m-0">{currentBlogData.BlogHeading}</h1>
                  <div className="w-100 d-flex flex-row align-items-center justify-content-between">
                      <p className="font-color-secondary fw-medium m-0 fs-mobile">Published on 8 MARCH 2023</p>
                      <div className="d-flex flex-row align-items-center gap-2">
                          <img src={eyeIcon} alt="eye-icon" width='20' />
                          <label className="fs-mobile fw-medium font-primary-light"> 2.09K</label>
                      </div>
                  </div>
                  <div className=' m-0 p-0'><img src={currentBlogData.BlogImage} alt="dubai-Image" 
                  className='w-100 img-fluid'/>
                  </div>
              </div>
              <div>
                {currentBlogData?.BlogDetail.map((paragraph, index) => (
                  <p key={index} id='paragraph-section' 
                  style={{ marginBottom: '30px' }}
                  className="font-color-light fs-mobile fw-medium">
                  {paragraph}
                  </p>
                ))}
              </div>
              <div className="d-flex flex-column align-items-center gap-3 py-5">
                     <label className="fs-5 fw-semibold font-color-primary m-0">Share Now</label>
                     <div class="d-flex flex-row align-items-center gap-3">
                        <div className="d-flex flex-row align-items-center gap-3">
                            <FacebookShareButton className="card-hover" url={currentURL}>
                              <FacebookIcon size={40} round={true} />
                            </FacebookShareButton>
                            <TwitterShareButton className="card-hover" url={currentURL}>
                              <TwitterIcon size={40} round={true} />
                            </TwitterShareButton>
                            <LinkedinShareButton className="card-hover" url={currentURL}>
                              <LinkedinIcon size={40} round={true} />
                            </LinkedinShareButton>
                            <TelegramShareButton className="card-hover" url={currentURL}>
                              <TelegramIcon size={40} round={true} />
                            </TelegramShareButton>
                            <WhatsappShareButton className="card-hover" url={currentURL}>
                              <WhatsappIcon size={40} round={true} />
                            </WhatsappShareButton>
                            <img onClick={()=>window.open(`https://www.instagram.com/share?url=${currentURL}`, '_blank')}
                            src={instaIcon} width='40' alt="instagram-Icon" className="card-hover"/>
                        </div>
                     </div>
              </div>
            </div>
            {/* for ads */}
            <div className="col-md-4 mt-5 overflow-hidden">
                <div className='d-flex flex-column gap-4 bg-light rounded p-3'>
                    <GetInTouchWithUs></GetInTouchWithUs>
                    <NewsLetter></NewsLetter>
                </div>
            </div>
        </div>
    </div> 
    )}
    export default BlogDetailPage;
