
function AmenitiesCard(props){
    return(
       <div className="d-flex flex-column align-items-center gap-3 px-1 px-md-3 py-5">
        <img src={props.image} alt="Amenities-Image1" width='50' className="image-fluid h-auto" />
        <h1 className="m-0 fs-6 fs-md-5 text-center fw-semibold font-color-primary">{props.label}</h1>
       </div>
     )}

    export default AmenitiesCard;