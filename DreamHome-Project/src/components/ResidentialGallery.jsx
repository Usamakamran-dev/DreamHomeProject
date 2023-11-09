import React , {useState} from "react";
import ResidentialSlider from './ResidentialSlider';

function ResidentialGallery(props){
    const images=props.gallery;
    const [openSlider,setOpenSlider]=useState(false);
    return(
        <>
        <div className="container py-2 py-md-5">
        <div className="row">
              <div className="col-md-8 p-0 m-0">
                    {images.slice(0, 1).map((image, index) => (
                    <div key={index} className="position-relative" onClick={()=>setOpenSlider(true)}>
                        <img src={image} className="img-fluid rounded residential-Image"
                        alt={`Gallery Image ${index + 1}`}/>
                        <div className="overlay rounded">
                        <span>Open In Slider</span>
                        </div>
                    </div>
                    ))}
                <div onClick={()=>setOpenSlider(true)} style={{borderBottom: '1px solid red'}}
                className="text-center mt-2 fw-semibold fs-6 font-color-secondary w-50 mx-auto d-md-none">View Images In Slider</div>
              </div>
        <div className="col-md-4 d-none d-md-block">
        <div className="row gap-3">
               <div className="col-12 ">
                {images.slice(1, 2).map((image, index) => (
                    <div key={index} className="position-relative" onClick={()=>setOpenSlider(true)}>
                        <img src={image} className="img-fluid rounded residential-Image-sm" 
                        alt={`Gallery Image ${index + 2}`}/>
                        <div className="overlay rounded">
                        <span>Open In Slider</span>
                        </div>
                    </div>
                ))}
               </div>
            <div className="col-12">
            {images.slice(2, 3).map((image, index) => (
                    <div key={index} className="position-relative" onClick={()=>setOpenSlider(true)}>
                        <img src={image} className="img-fluid rounded residential-Image-sm"
                         alt={`Gallery Image ${index + 3}`}/>
                        <div className="overlay rounded">
                        <span>Open In Slider</span>
                        </div>
                     </div>
            ))}
            </div>
        </div>
        </div>
   </div>
    </div>
        {openSlider &&  <ResidentialSlider images={images} onClick={()=>setOpenSlider(false)}></ResidentialSlider>}
     </>
    )}
    export default ResidentialGallery;