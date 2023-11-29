import React , { useContext , useState , useEffect} from "react";
import { MultiFormContext } from "../context/MultiFormProvider";

function ProjectDescription(){
    const value=useContext(MultiFormContext);
    const [form,setForm]=useState({
      about:'',
      paymentDescription:''
     })
   const [error,setError]=useState({
     about:false,
     paymentDescription:false
    })
    useEffect(() => { window.scrollTo(0, 0);}, []);
    const formSubmitHandler=(e)=>{
      e.preventDefault();
      let fieldsToValidate=['about','paymentDescription'];
      let hasError = false;
      fieldsToValidate.forEach((field)=>{
        if(!form[field])
        {
          setError((prev)=> ({...prev,[field]: true}))
          hasError=true;
        }
        else
        {
          setError((prev)=> ({...prev,[field]: false}))
        }
      })
      if(hasError) return
      value.setFormIndex(3);
      }

      const formChangeHandler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        switch(name){
        case 'about':
            setForm((prev)=> ({...prev, about:value}))
            if(!value)
            {
            setError((prev)=> ({...prev, about:true}))
            }
            else
            {
            setError((prev)=> ({...prev, about:false}))
            }
            break;
        
        case 'paymentDescription':
            setForm((prev)=> ({...prev, paymentDescription:value}))
            if(!value)
            {
            setError((prev)=> ({...prev, paymentDescription:true}))
            }
            else
            {
            setError((prev)=> ({...prev, paymentDescription:false}))
            }
        break;
        default:
        break;
          }}

    return(
                <form onSubmit={formSubmitHandler} 
                className="rounded text-center d-flex flex-column align-items-center gap-5 w-100 h-100">
                <div className="d-flex flex-column align-items-start gap-2 w-100">
                <label className="font-color-primary fw-semibold fs-mobile">Enter About Description</label>
                <textarea
                value={form.about}
                name='about'
                rows='7'
                className={`${error.about? 'border-red' : 'border-black'} rounded bg-light px-1 px-md-3 py-2 fs-mobile w-100 h-100`}
                onChange={formChangeHandler}
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
                value={form.paymentDescription}
                name='paymentDescription'
                row="2" 
                className={`${error.paymentDescription? 'border-red' : 'border-black'} rounded bg-light px-1 px-md-3 py-2 fs-mobile w-100 h-100`}
                onChange={formChangeHandler}
                />
                </div>
                <button className="button-hover-primary px-5 py-3 rounded w-50 text-white fw-bold fs-para background-color-primary border-0">NEXT</button>
                </form>
                )}
             export default ProjectDescription;