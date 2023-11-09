import React , { useContext , useState , useEffect} from "react";
import { MultiFormContext } from "../context/MultiFormProvider";

function ProjectForm3(props){
    const value=useContext(MultiFormContext);
    const [aboutDesc,setAboutDesc]=useState('');
    const [paymentDesc,setPaymentDesc]=useState('');
    // Errors
    const [aboutDescError,setAboutDescError]=useState(false);
    const [paymentDescError,setPaymentDescError]=useState(false);
    useEffect(() => { window.scrollTo(0, 0);}, []);

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
        const description={
          paragraph: aboutDesc,
          monthlydescription: paymentDesc
        }
        console.log(description);
        value.setFormIndex(3);
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
                <form onSubmit={submitFormHandler} 
                className="rounded text-center d-flex flex-column align-items-center gap-5 h-100">
                <div className="d-flex flex-column align-items-start gap-2 w-100">
                <label className="font-color-primary fw-semibold fs-mobile">Enter About Description</label>
                <textarea
                rows='7'
                className={`${aboutDescError? 'border-red' : 'border-black'} rounded bg-light px-1 px-md-3 py-2 fs-mobile w-100 h-100`}
                onChange={aboutChangeHandler}
                onKeyPress={(e) => {
                  if (!/^[A-Za-z\s]$/.test(e.key)) {
                      e.preventDefault();
                  }
                }}
                />
                </div>
                <div className="d-flex flex-column align-items-start gap-2 w-100">
                <label className="font-color-primary fw-semibold fs-mobile">Enter Monthly Payment Description</label>
                <textarea
                type="2" 
                className={`${paymentDescError? 'border-red' : 'border-black'} rounded bg-light px-1 px-md-3 py-2 fs-mobile w-100 h-100`}
                onChange={paymentDescriptionChangeHandler}
                />
                </div>
                <button className="button-hover-primary px-5 py-3 rounded w-50 text-white fw-bold fs-para background-color-primary border-0">NEXT</button>
                </form>
                )}
export default ProjectForm3;