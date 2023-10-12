
function EnquiryForm(){
    return(
        <div className="light-black-bg fixed-top start-0 bottom-0 end-0 position-fixed d-flex align-items-center justify-content-center w-100 h-100">
            <form className="rounded p-5 bg-light d-flex flex-column align-items-start gap-2">
            {/* Form Heading  */}
            <div className="d-flex flex-row align-items-center gap-5">
             <h1 className="font-color-primary fs-2 fw-bold m-0">Register Your Interest</h1>
             <img src="" alt="cancel-icon" />
             </div>
             <p className="m-0 font-color-secondary fw-semibold">All fields are required *</p>
             {/* Form fields */}
             <div className="row row-cols-2 row-cols-md-2 mt-3 gx-1">
                <input className="py-2 px-3 shadow-sm input-width" type="text" />
                <input className="py-2 px-3 shadow-sm" type="text" />
                <input className="py-2 px-3 shadow-sm" type="text" />
                <input className="py-2 px-3 shadow-sm" type="text" />    
             </div>
            </form>
            
        </div>
    )
}

export default EnquiryForm;