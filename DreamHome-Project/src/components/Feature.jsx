
function Feature(props){
    return(
        <div className="px-3 py-2 background-color-primary py-md-4 flex-1 rounded d-flex flex-column align-items-center justify-content-between gap-4 gap-4">
         <h1 className="m-0 text-center fs-4 fw-bold text-white ">{props.label}</h1>
         <div className="d-flex flex-column align-items-center gap-2">
              <p className="m-0 text-white p-0 ">Starting from</p>
              <label style={{width:"12rem"}}
              className="m-0 background-color-secondary text-white rounded py-2 d-flex align-items-center justify-content-center fw-semibold fs-6">AED  
              <span className="m-0 fw-bold fs-5 text-white px-1"> {props.price}</span>
            </label>
        </div>
        </div> )}

export default Feature;