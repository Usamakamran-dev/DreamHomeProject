
function AmenitiesCard(props){
    return(
       <div className={`d-flex flex-column align-items-center gap-3 px-2 px-md-3 py-4 py-md-5`}>
        <img src={props.image} alt="Amenities-Image1" height={props.height || 50} className="image-fluid w-auto" />
        <h1 className={`m-0 fs-6 text-center fw-semibold font-color-primary`}>
          {props.label}
        </h1>       
      </div>
     )}
    export default AmenitiesCard;