

function AdminTabCard(props){

    return(
      <div className="d-flex flex-row align-items-center justify-content-between shadow-sm rounded py-3 px-4">
         <div className="d-flex flex-column align-items-start gap-0">
            <label className="font-color-light fw-medium p-0 fs-6">{props.heading}</label>
            <label className="font-color-primary fw-semibold p-0 fs-4">{props.number}</label>
         </div>
         <img src={props.src} alt="admin-tabIcon" width='50' height='auto' />
      </div>
    )
}

export default AdminTabCard;