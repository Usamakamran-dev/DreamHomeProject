import partnerLogo from './../assets/Icons/Partner_Logo.svg';
// import { Carousel } from 'react-bootstrap';
import Carousel from 'react-elastic-carousel';

function PartnerSlider() {
    const breakPoints = [
        { width: 1, itemsToShow: 4 },
      ];
    return(
        <div className="container-fluid d-flex flex-column align-items-center gap-5 p-0 p-md-5 mt-5">
      <h1 className="font-color-primary fw-bold fs-1">OUR <span className="font-color-secondary fw-bold fs-1">PARTNERS</span></h1>
      <Carousel breakPoints={breakPoints} className='px-5 gap-5' isRTL={false} isInfinite={true}>
        <img className="partner-image-style" src={partnerLogo} alt="partner-logo" />
        <img className="partner-image-style" src={partnerLogo} alt="partner-logo" />
        <img className="partner-image-style" src={partnerLogo} alt="partner-logo" />
        <img className="partner-image-style" src={partnerLogo} alt="partner-logo" />
        <img className="partner-image-style" src={partnerLogo} alt="partner-logo" />
        <img className="partner-image-style" src={partnerLogo} alt="partner-logo" />
      </Carousel>
      <div></div>
    </div>
    )}

    export default PartnerSlider;