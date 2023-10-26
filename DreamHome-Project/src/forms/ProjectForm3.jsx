import React , { useContext } from "react";
import cancelIcon from './../assets/Icons/cancel.svg';
import { MultiFormContext } from "../context/MultiFormProvider";

function ProjectForm3(props){
    const value=useContext(MultiFormContext);

    function submitFormHandler(e){
        e.preventDefault();
      }

    return(
            <div className="bg-white p-3 p-md-4 rounded d-flex flex-column gap-2">
                <div className="d-flex flex-row align-items-start justify-content-between">
                  <div className="d-flex flex-column align-items-start gap-2">
                  <h1 className="h-mobile fw-bold font-color-primary m-0">STEP 3</h1>
                  <p className="fw-medium font-color-secondary fs-mobile">Enter project information</p>
                  </div>
                  <img onClick={props.onCancel}
                  src={cancelIcon} alt="cancel-icon" width='30' height='auto' className="py-1"/>
                </div>
                {/* Form 3 */}
                <form onSubmit={submitFormHandler} className="rounded text-center d-flex flex-column align-items-start gap-4">
                <div className="d-flex flex-column align-items-start gap-2">
                <label className="font-color-primary fw-semibold fs-mobile">Enter Url</label>
                <input
                type="text" 
                className='border-black rounded bg-light px-3 py-2 fs-mobile project-input-width'
                />
                </div>
                <div className="d-flex flex-column align-items-start gap-2">
                <label className="font-color-primary fw-semibold fs-mobile">Enter Project Title</label>
                <input
                type="text" 
                className='border-black rounded bg-light px-3 py-2 fs-mobile project-input-width'
                />
                </div>
                <div className="d-flex flex-column align-items-start gap-2">
                <label className="font-color-primary fw-semibold fs-mobile">Enter Meta Tags</label>
                <input
                type="text" 
                className='border-black rounded bg-light px-3 py-2 fs-mobile project-input-width'
                />
                </div>
                <button className="button-hover-primary px-5 py-3 rounded w-100 text-white fw-bold fs-para background-color-primary border-0">NEXT</button>
                </form>
                </div>
                )}
export default ProjectForm3;