

function ProjectCard(props){
  return(
    <div className="d-flex flex-column gap-2 rounded shadow-sm card-hover">
        <img className="img-fluid m-0 rounded w-100" src={props.image} alt="Enquiry-Image" />
        <div className="d-flex flex-column align-items-start gap-2 py-3 px-3">
        <h1 className="fw-bold fs-3 text-start m-0 font-color-primary">{props.heading}</h1>
        <h2 className="fw-bold fs-6 text-start m-0 font-color-secondary">{props.subHeading}</h2>
        <p className="fw-semibold fs-para font-color-light">{props.paragraph}</p>
        </div>
    </div>
  )
}

export default ProjectCard;