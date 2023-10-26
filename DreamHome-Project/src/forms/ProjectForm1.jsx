import React, { useContext, useRef, useState} from "react";
import cancelIcon from './../assets/Icons/cancel.svg';
import { MultiFormContext } from "../context/MultiFormProvider";

function ProjectForm1(props){
    const [urlError,setUrlError]=useState(false);
    const [titleError,setTitleError]=useState(false);
    const [metaError,setMetaError]=useState(false);
    const [startingPriceError,setStartingPriceError]=useState(false);
    const urlRef=useRef();
    const titleRef=useRef();
    const metaRef=useRef();
    const startingPriceRef=useRef();
    const value=useContext(MultiFormContext);
    
    function submitFormHandler(e){
      e.preventDefault();
      const url=urlRef.current.value;
      const title=titleRef.current.value; 
      const meta=metaRef.current.value;
      const startingPrice=startingPriceRef.current.value;
      let hasError=false;
      if(!url)   {  setUrlError(true);
                    hasError=true;
                 } 
      if(!title) {  setTitleError(true);
                    hasError=true;
                 }
      if(!meta)  {  setMetaError(true);
                    hasError=true;
                 }
      if(!startingPrice) { setStartingPriceError(true);
                           hasError=true;
                         }
     //After Form Submission if there is no error 
      if(!hasError) {
                   value.setFormIndex(1);
                    }
    }


    // onChange form Handlers
    function urlChangeHandler(e){
      if(!e.target.value){
       setUrlError(true);
      } else { setUrlError(false)}
    }

    function titleChangeHandler(e){
      if(!e.target.value){
       setTitleError(true);
      } else { setTitleError(false)}
    }

    function metaChangeHandler(e){
      if(!e.target.value){
       setMetaError(true);
      } else { setMetaError(false)}
    }
    function priceChangeHandler(e){
      if(!e.target.value){
       setStartingPriceError(true);
      } else { setStartingPriceError(false)}
    }

    return(
            <div className="bg-white p-3 p-md-4 rounded d-flex flex-column gap-2">
                <div className="d-flex flex-row align-items-start justify-content-between">
                  <div className="d-flex flex-column align-items-start gap-2">
                  <h1 className="h-mobile fw-bold font-color-primary m-0">STEP 1</h1>
                  <p className="fw-medium font-color-light fs-mobile">Enter basic information *</p>
                  </div>
                  <img onClick={props.onCancel} 
                  src={cancelIcon} alt="cancel-icon" width='30' height='auto' className="py-1"/>
                </div>
                {/* Form 1 */}
                <form onSubmit={submitFormHandler}
                className="rounded text-center d-flex flex-column align-items-start gap-4">
                <div className="d-flex flex-column align-items-start gap-2">
                <label className="font-color-primary fw-semibold fs-mobile">Enter Url</label>
                <input ref={urlRef}
                type="text" 
                className={`${urlError? 'border-red':'border-black'} rounded bg-light px-3 py-2 fs-mobile project-input-width`}
                onChange={urlChangeHandler}
                />
                </div>
                <div className="d-flex flex-column align-items-start gap-2">
                <label className="font-color-primary fw-semibold fs-mobile">Enter Project Title</label>
                <input ref={titleRef}
                type="text" 
                className={`${titleError? 'border-red':'border-black'} rounded bg-light px-3 py-2 fs-mobile project-input-width`}
                onChange={titleChangeHandler}
               />
                </div>
                <div className="d-flex flex-column align-items-start gap-2">
                <label className="font-color-primary fw-semibold fs-mobile">Enter Meta Tags</label>
                <input  ref={metaRef}
                type="text" 
                className={`${metaError? 'border-red':'border-black'} rounded bg-light px-3 py-2 fs-mobile project-input-width`}
                onChange={metaChangeHandler}
                />
                </div>
                <div className="d-flex flex-column align-items-start gap-2">
                <label className="font-color-primary fw-semibold fs-mobile">Enter Starting Price (in AED)</label>
                <input  ref={startingPriceRef}
                type="number" 
                className={`${startingPriceError? 'border-red' :'border-black'} rounded bg-light px-3 py-2 fs-mobile project-input-width`}
                onChange={priceChangeHandler}
                />
                </div>
                <button className="button-hover-primary px-5 py-3 rounded w-100 text-white fw-bold fs-para background-color-primary border-0">NEXT</button>
                </form>
                </div>
                )}
export default ProjectForm1;