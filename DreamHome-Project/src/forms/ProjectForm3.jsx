import React , { useContext , useState } from "react";
import cancelIcon from './../assets/Icons/cancel.svg';
import { MultiFormContext } from "../context/MultiFormProvider";

function ProjectForm3(props){
    const value=useContext(MultiFormContext);
    const [aboutDesc,setAboutDesc]=useState('');
    const [paymentDesc,setPaymentDesc]=useState('');
    // Errors
    const [aboutDescError,setAboutDescError]=useState(false);
    const [paymentDescError,setPaymentDescError]=useState(false);



    function submitFormHandler(e){
        e.preventDefault();
        let hasError=false;
        if(!aboutDesc){
          setAboutDescError(true);
          hasError=true;
        }
        if(!paymentDesc){
          setPaymentDescError(true);
          hasError=true;
        }
        if(hasError) return
        // After Form Submission
        value.setFormIndex(3);
        // console.log(aboutDesc);
        // console.log(paymentDesc);
      }

      // onChangeHandler
      function aboutChangeHandler(e){
        const input=e.target.value;
        setAboutDesc(input);
        if(!input){
          setAboutDescError(true);
        }
        else{
          setAboutDescError(false);
         }
        }

        function paymentDescriptionChangeHandler(e){
          const input=e.target.value;
          setPaymentDesc(input);
          if(!input){
            setPaymentDescError(true);
          }
          else{
            setPaymentDescError(false);
           }
           
          }

    return(
            <div className="bg-white p-3 p-md-4 rounded d-flex flex-column gap-2">
                <div className="d-flex flex-row align-items-start justify-content-between">
                  <div className="d-flex flex-column align-items-start gap-2">
                  <h1 className="h-mobile fw-bold font-color-primary m-0">STEP 3</h1>
                  <p className="fw-medium font-color-light fs-mobile">Description information *</p>
                  </div>
                  <img onClick={props.onCancel}
                  src={cancelIcon} alt="cancel-icon" width='30' height='auto' className="py-1"/>
                </div>
                {/* Form 3 */}
                <form onSubmit={submitFormHandler} className="rounded text-center d-flex flex-column align-items-start gap-4">
                <div className="d-flex flex-column align-items-start gap-2">
                <label className="font-color-primary fw-semibold fs-mobile">Enter About Description</label>
                <textarea
                rows='7'
                className={`${aboutDescError? 'border-red' : 'border-black'} rounded bg-light px-1 px-md-3 py-2 fs-mobile project-input-width`}
                onChange={aboutChangeHandler}
                />
                </div>
                <div className="d-flex flex-column align-items-start gap-2">
                <label className="font-color-primary fw-semibold fs-mobile">Enter Monthly Payment Description</label>
                <textarea
                type="2" 
                className={`${paymentDescError? 'border-red' : 'border-black'} rounded bg-light px-1 px-md-3 py-2 fs-mobile project-input-width`}
                onChange={paymentDescriptionChangeHandler}
                />
                </div>
                <button className="button-hover-primary px-5 py-3 rounded w-100 text-white fw-bold fs-para background-color-primary border-0">NEXT</button>
                </form>
                </div>
                )}
export default ProjectForm3;