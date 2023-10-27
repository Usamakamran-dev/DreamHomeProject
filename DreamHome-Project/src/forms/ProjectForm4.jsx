import React , { useContext , useState } from "react";
import cancelIcon from './../assets/Icons/cancel.svg';
import { MultiFormContext } from "../context/MultiFormProvider";

function ProjectForm4(props){
    const [units,setUnits]=useState([1])
    const [unitHeading,setUnitHeading]=useState('');
    const [unitPrice,setUnitPrice]=useState('');
    // Errors
    const [unitHeadingError,setUnitHeadingError]=useState(false);
    const [unitPriceError,setUnitPriceError]=useState(false);
    const value=useContext(MultiFormContext);
    function submitFormHandler(e){
        e.preventDefault();
        let hasError = false;
        if(!unitHeading){
          setUnitHeadingError(true);
          hasError = true;
        }
        if(!unitPrice){
          setUnitPriceError(true);
          hasError = true;
        }
        if(hasError) return
        value.setFormIndex(4);
      }


      // OnChange Handlers
      function headingChangeHandler(e){
       const input=e.target.value;
       setUnitHeading(input);
       if(!input){
        setUnitHeadingError(true);
       }
       else{
        setUnitHeadingError(false);
       }
      }

      function priceChangeHandler(e){
        const input=e.target.value;
        setUnitPrice(input);
        if(!input){
          setUnitPriceError(true);
        }
        else{
          setUnitPriceError(false);
        }
      }

    return(
            <div className="bg-white p-3 p-md-4 rounded d-flex flex-column gap-2">
                <div className="d-flex flex-row align-items-start justify-content-between">
                  <div className="d-flex flex-column align-items-start gap-2">
                  <h1 className="h-mobile fw-bold font-color-primary m-0">STEP 4</h1>
                  <p className="fw-medium font-color-secondary fs-mobile">Enter Unit Types</p>
                  </div>
                  <img onClick={props.onCancel}
                  src={cancelIcon} alt="cancel-icon" width='30' height='auto' className="py-1"/>
                </div>
                {/* Form 4 */}
                <form onSubmit={submitFormHandler} className="rounded text-center d-flex flex-column align-items-center gap-3 gap-md-4">
                {/* Unit type */}
                {units.map((arr,index)=>(
                 <div key={index} className="d-flex flex-row align-items-center gap-2">
                 <div className="d-flex flex-column align-items-start gap-2">
                 <label className="font-color-primary fw-semibold fs-mobile">Enter Heading</label>
                 <input type="text" onChange={headingChangeHandler}
                 className={`${unitHeadingError? 'border-red' : 'border-black'} rounded bg-light px-1 px-md-3 py-2 fs-mobile unit-heading-input`}
                 />
                 </div>
                 <div className="d-flex flex-column align-items-start gap-2">
                 <label className="font-color-primary fw-semibold fs-mobile">Enter Price</label>
                 <input type="text" onChange={priceChangeHandler}
                 className={`${unitPriceError? 'border-red' : 'border-black'} rounded bg-light px-1 px-md-3 py-2 fs-mobile unit-price-input`}
                 />
                 </div>
                 </div>
                ))}
                <label onClick={()=> setUnits((prev)=> [...prev,1])}
                className="font-color-light fw-bold fs-para background-primary-light">Add More</label>
                <button className="button-hover-primary px-5 py-3 rounded w-100 text-white fw-bold fs-para background-color-primary border-0">NEXT</button>
                </form>
                </div>
                )}

export default ProjectForm4;