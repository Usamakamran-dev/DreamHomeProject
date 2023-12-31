
function BlogCard(props){
    return(
      <div onClick={props.onClick} className="d-flex flex-column gap-3  rounded shadow-sm card-hover">
          <img className="card-image m-0 rounded" src={props.image} alt="Enquiry-Image" />
          <div className="d-flex flex-column align-items-start justify-content-between gap-2 py-0 py-md-3 px-3">
          <h1 className="fw-bold fs-5 text-start m-0 font-color-primary">{props.heading.length > 55
       ? props.heading.slice(0, 55) + '..'
       : props.heading }
        </h1>
          <h1 className="fw-semibold fs-6 fs-md-5 text-start m-0 font-color-secondary">{props.source}</h1>
          <p className="fw-semibold fs-para font-color-light">{props.date}</p>
          </div>
      </div> )}
  
  export default BlogCard;