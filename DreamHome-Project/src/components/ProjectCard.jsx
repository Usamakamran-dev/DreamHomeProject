

function ProjectCard(props){
  return(
    <div onClick={props.onClick} className="d-flex bg-white flex-column gap-2 rounded shadow-sm card-hover">
        <img className="card-image m-0 rounded" src={props.image} alt="Enquiry-Image" />
        <div className="d-flex flex-column align-items-start gap-2 py-3 px-1 px-md-3">
        <h1 className="fw-bold fs-3 text-start m-0 font-color-primary">{props.heading}</h1>
        <h2 className="fw-semibold fs-6 text-start m-0 font-color-secondary">{props.subHeading}</h2>
        <p className="fw-medium fs-para font-color-light">{props.paragraph.length > 100
       ? props.paragraph.slice(0, 95) + '...'
       : props.paragraph
  }</p>
        </div>
    </div>
    )}

    export default ProjectCard;