import dummyImage from './../assets/Images/dummyImage.jpg';
import locationMarker from './../assets/Icons/locationMarker.png';
import callIcon from './../assets/Icons/callWhite.png';
import enquiryIcon from './../assets/Icons/mailFill.png';
import whatsappIcon from './../assets/Icons/whatsappFill.png';
import { Link } from 'react-router-dom';

function ResidentialList(){
    return(
          <div className="row my-5 shadow">
            <div className="col-md-4 p-0">
            <img src={dummyImage} className='img-fluid w-100 h-auto' alt="residentailListing-image" />
            </div>
            <div className="col-md-8 py-3 px-4 d-flex flex-column align-items-start justify-content-between">
              <label className='fs-2 fw-bold font-color-primary'>AED 
              <span className='font-color-secondary'> 1.000.000</span></label>
              <p className='fs-5 font-color-primary fw-semibold m-0'>One Studio With One Bath And One Swimming Pool</p>
                <p className='fs-6 font-color-light fw-medium m-0'>
                Magnificent View, 8.33% Net Roi, Payment plan available</p>
                <div className='d-flex flex-row align-items-center gap-2'>
                <img src={locationMarker} alt="location-marker"  width='auto' height='20'/>
                <Link><p className='fs-6 font-color-light fw-medium m-0'>
                Cote D' Azur Hotel, The Heart of Europe, The World Islands, Dubai, UAE</p></Link>
                </div>
                <div className='w-100 d-flex flex-row align-items-center gap-2 py-2'>
                <div style={{width: '10rem'}}
                className='d-flex flex-row align-items-center justify-content-center background-color-secondary rounded gap-3 py-3 '>
                     <img src={enquiryIcon} alt="enquiry-icon" width='auto' height='23'/>
                     <label className='fs-para fw-bold text-white '>ENQUIRE </label>
                </div>
                <div style={{backgroundColor: "#25D366",width: '10rem'}}
                className='d-flex flex-row align-items-center justify-content-center rounded gap-2 py-3'>
                     <img src={whatsappIcon} alt="enquiry-icon" width='auto' height='23'/>
                     <label className='fs-para fw-bold text-white'>WHATSAPP </label>
                </div>
                <div style={{width: '10rem'}}
                className='d-flex flex-row align-items-center justify-content-center background-color-primary rounded gap-2 py-3'>
                     <img src={callIcon} alt="enquiry-icon" width='auto' height='23'/>
                     <label className='fs-para fw-bold text-white'>CALL </label>
                </div>
                <div style={{width: '10rem'}}
                className='d-flex flex-row align-items-center justify-content-center background-color-primary rounded gap-2 py-3'>
                     <img src={enquiryIcon} alt="enquiry-icon" width='auto' height='23'/>
                     <label className='fs-para fw-bold text-white'>EMAIL </label>
                </div>

                </div>
            </div>
          </div>
      )
      }
    export default ResidentialList;