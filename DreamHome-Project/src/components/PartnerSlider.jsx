import partnerLogo from './../assets/Icons/Partner_Logo.svg';

function PartnerSlider() {
    return(
        <div  className="container-fluid d-flex flex-column align-items-center gap-5 p-5 mt-3">
        <h1 className="font-color-primary fw-bold fs-1">OUR <span className="font-color-secondary fw-bold fs-1">PARTNERS</span></h1>
        <div id="partnerCarousel" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
        <div class="carousel-item active">
        <div class="d-flex flex-row gap-5 w-100 overflow-hidden">
        <img class="image-fluid partner-image-style" src={partnerLogo} alt="Partner_Logo" />
        <img class="image-fluid partner-image-style" src={partnerLogo} alt="Partner_Logo" />
        <img class="image-fluid partner-image-style" src={partnerLogo} alt="Partner_Logo" />
        <img class="image-fluid partner-image-style" src={partnerLogo} alt="Partner_Logo" />
        </div>
        </div>
        <div class="carousel-item">
        <div class="d-flex flex-row gap-5 w-100 overflow-hidden">
        <img class="image-fluid partner-image-style" src={partnerLogo} alt="Partner_Logo" />
        <img class="image-fluid partner-image-style" src={partnerLogo} alt="Partner_Logo" />
        <img class="image-fluid partner-image-style" src={partnerLogo} alt="Partner_Logo" />
        <img class="image-fluid partner-image-style" src={partnerLogo} alt="Partner_Logo" />
        </div>
        </div>
        </div>
        <a class="carousel-control-prev" href="#partnerCarousel" role="button">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a class="carousel-control-next" href="#partnerCarousel" role="button">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
        </div>
        </div>
    )}

    export default PartnerSlider;