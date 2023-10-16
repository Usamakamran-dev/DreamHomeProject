import aboutUs from "./../assets/Images/Project Image.jpg";

function AboutUs(){
    return(
             <div className='bg-white'>
                <div className="row py-5 container mx-auto">
                 <div className="col-md-6 py-5 d-flex flex-column align-items-center justify-content-center align-items-md-start">
                    <h2 className="fs-1 fw-bold mb-4 font-color-primary text-start text-md-start">
                    ABOUT <span className='font-color-secondary'>US</span></h2>
                    <p className="font-color-light text-start fw-medium">
                    SAMANA Manhattan - an exceptional residential development that sets
                    a new standard for contemporary living. <br /> <br />
                    This innovative project by SAMANA Developers, located in Jumeirah
                    Village Circle (JVC), is designed to provide residents with an
                    unparalleled lifestyle ; blended with luxurious amenities, stunning
                    designs, and a prime location. <br /><br />
                    Make SAMANA Manhattan your new home and
                    unlock the gateway to a truly extraordinary
                    lifestyle. Immerse yourself in the epitome of
                    modern living and indulge in the unrivalled
                    amenities, prime location, and exquisite design
                    that this exceptional project has to offer.
                    </p>
                 </div>
                 <div className="col-md-6 p-0 py-5 px-md-5 m-0 rounded">
                 <img src={aboutUs} alt="AboutUs-Image"className="h-100 w-100 img-fluid p-0 m-0 rounded"/>
                 </div>
               </div>
          </div>
          )}
          export default AboutUs
