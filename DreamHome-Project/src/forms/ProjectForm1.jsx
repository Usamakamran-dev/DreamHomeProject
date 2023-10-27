import React, { useContext, useRef, useState} from "react";
import cancelIcon from './../assets/Icons/cancel.svg';
import { MultiFormContext } from "../context/MultiFormProvider";
import addFile from './../assets/Icons/add-file.png';

function ProjectForm1(props){
    const [url,setUrl]=useState('');
    const [title,setTitle]=useState('');
    const [metaDesc,setMetaDesc]=useState('');
    const [metaImage,setMetaImage]=useState();
    const [metaImageName,setMetaImageName]=useState('');
    const [startingPrice,setStartingPrice]=useState();
    // Errors
    const [urlError,setUrlError]=useState(false);
    const [titleError,setTitleError]=useState(false);
    const [metaDescError,setMetaDescError]=useState(false);
    const [metaImageError,setMetaImageError]=useState(false);
    const [startingPriceError,setStartingPriceError]=useState(false);
    const value=useContext(MultiFormContext);
    
    function submitFormHandler(e){
      e.preventDefault();
      let hasError=false;
      if(!url)   {  setUrlError(true);
                    hasError=true;
                 } 
      if(!title) {  setTitleError(true);
                    hasError=true;
                 }
      if(!metaDesc)  {  setMetaDescError(true);
                    hasError=true;
                 }
      if(!metaImage)  {  setMetaImageError(true);
                    hasError=true;
                 }
      if(!startingPrice) { setStartingPriceError(true);
                           hasError=true;
                         }
      if(hasError) return
     //After Form Submission if there is no error 
      value.setFormIndex(1);    
      }

    // onChange form Handlers
    function urlChangeHandler(e){
      const input=e.target.value;
      setUrl(input);
      if(!input){
        setUrlError(true);
      } else { setUrlError(false)}
    }

    function titleChangeHandler(e){
      const input=e.target.value;
      setTitle(input);
      if(!input){
       setTitleError(true);
      } else { setTitleError(false)}
    }

    function metaDescChangeHandler(e){
      const input=e.target.value;
      setMetaDesc(input);
      if(!input){
       setMetaDescError(true);
      } else { setMetaDescError(false)}
    }

    function metaImageChangeHandler(e){
      const input = e.target;
      setMetaImage(input);
      if (input.files.length > 0) {
         const fileName = input.files[0].name;
          setMetaImageName(fileName);
          setMetaImage(input.files[0]);
      }
      if(!input ){
        setMetaImageError(true);
       }
       else{
        setMetaImageError(false);
       }
    }

    function priceChangeHandler(e){
      const input = e.target.value;
      setStartingPrice(input);
      if(!input)   {
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
                <input
                type="text" 
                className={`${urlError? 'border-red':'border-black'} rounded bg-light px-1 px-md-3 py-2 fs-mobile project-input-width`}
                onChange={urlChangeHandler}
                />
                </div>
                <div className="d-flex flex-column align-items-start gap-2">
                <label className="font-color-primary fw-semibold fs-mobile">Enter Project Title</label>
                <input
                type="text" 
                className={`${titleError? 'border-red':'border-black'} rounded bg-light px-1 px-md-3 py-2 fs-mobile project-input-width`}
                onChange={titleChangeHandler}
               />
                </div>
                {/* For meta description and tag */}
                <div className="d-flex flex-row align-items-start gap-3">
                <div className="d-flex flex-column align-items-start gap-2">
                <label className="font-color-primary fw-semibold fs-mobile">Enter Meta Description</label>
                <textarea  rows='2'
                className={`${metaDescError? 'border-red':'border-black'} rounded bg-light px-1 px-md-3 py-2 unit-heading-input fs-mobile`}
                onChange={metaDescChangeHandler}
                />
                </div>
                {/* Meta Image input box */}
                <div className="d-flex flex-column align-items-start gap-2">
                <label className="font-color-primary fw-semibold fs-mobile">Select Meta Image</label>
                <div className={`${metaImageError? 'border-red':'border-black'} bg-light rounded d-flex flex-column align-items-start gap-2 p-1`}>
                 <div className="d-flex flex-row align-items-center gap-2">
                 <label htmlFor="metaImage" className="font-color-light text-start fs-mobile"
                 style={{width: '10rem'}}>Select Image</label>
                <img src={addFile} alt="addFile-Icon" width='30'/>
                <input  type="file"    accept="image/*" id='metaImage' style={{display: 'none'}}
                className={`rounded bg-light px-1 px-md-3 py-2 fs-mobile `}
                onChange={metaImageChangeHandler}
                />
                 </div>
                <div className="fs-para fw-semibold font-color-primary">{metaImageName}</div>
                </div>
                </div>
                </div>
                
                <div className="d-flex flex-column align-items-start gap-2">
                <label className="font-color-primary fw-semibold fs-mobile">Enter Starting Price (in AED)</label>
                <input
                type="number" 
                className={`${startingPriceError? 'border-red' :'border-black'} rounded bg-light px-1 px-md-3 py-2 fs-mobile project-input-width`}
                onChange={priceChangeHandler}
                />
                </div>
                <button className="button-hover-primary px-5 py-3 rounded w-100 text-white fw-bold fs-para background-color-primary border-0">NEXT</button>
                </form>
                </div>
                )}
export default ProjectForm1;