import { useContext , useState } from "react";
import { CurrentDataContext } from "../context/CurrentDataProvider";
import axios from 'axios';
import SuccessForm from "./SuccessForm";

function GetInTouchWithUs(){
  const [form,setForm]=useState({
    firstName: '',
    email: '',
    phone: ''
   })
  const [error,setError]=useState({
     firstName: false,
     email: false,
     phone: false,
     successForm: false
    })
  const {cardIdentifier,setCardIdentifier}=useContext(CurrentDataContext);  
  const formSubmitHandler = (e) => {
        e.preventDefault();
        let hasError=false;
        let fieldsToValidate=['firstName','email','phone'];
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
        if (hasError) return
        console.log('Form submitted successfully.');
        const identifier = cardIdentifier;
        const postData={
              first_name: form.firstName,
              email: form.email,
              phone: form.phone,
              projects: identifier ? identifier : 'Realtor 9',
              status: 'Active'
            }
            axios.post('https://promotions.dreamlands.com.pk/', postData)
            .then(response => {
             console.log(response.data);
             setCardIdentifier('Realtor 9') 
             })
            .catch(error => {  
              console.error(`There is an error while posting data ${error}`)
            }).finally(() => {
              console.log('Request completed.');
            });
        // Resetting the form values
         console.log(postData);
         setForm({
          firstName: '',
          email: '',
          phone: ''
         })
         setError((prev)=> ({...prev, successForm:true}))
      }


    const formChangeHandler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        switch(name){
        case 'firstName':
            setForm((prev)=> ({...prev, firstName:value}))
            if(!value)
            {
            setError((prev)=> ({...prev, firstName:true}))
            }
            else
            {
            setError((prev)=> ({...prev, firstName:false}))
            }
            break;
        
        case 'email':
            setForm((prev)=> ({...prev, email:value}))
            if(!value)
            {
            setError((prev)=> ({...prev, email:true}))
            }
            else
            {
            setError((prev)=> ({...prev, email:false}))
            }
            break;

        case 'phone':
            setForm((prev)=> ({...prev, phone:value}))
            if(!value)
            {
            setError((prev)=> ({...prev, phone:true}))
            }
            else
            {
            setError((prev)=> ({...prev, phone:false}))
            }
            break;
        default:
        break;
        }}

    return(
        <div className="background-color-primary rounded p-3 d-flex flex-column align-items-center gap-2">
        <form  onSubmit={formSubmitHandler}
        className=" w-100 d-flex flex-column align-items-center gap-3">
        <h1 className="fs-3 text-white text-center">Get in touch with us !</h1>
            <input 
            type="text"
            value={form.firstName}
            name="firstName" 
            placeholder='Enter Name' 
            className={`${error.firstName? 'border-red' : 'border-black'} fw-medium rounded p-3 w-100`}
            onChange={formChangeHandler}
            onKeyPress={(e) => {
              if (!/^[A-Za-z\s]$/.test(e.key)) {
                  e.preventDefault();
              }
            }}
            />

            <input 
            type="email" 
            value={form.email}
            name="email" 
            placeholder='Enter Email' 
            className={`${error.email? 'border-red' : 'border-black'} fw-medium rounded p-3 w-100`}
            onChange={formChangeHandler}
            />

            <input 
            type="phone"
            value={form.phone}
            name="phone" placeholder='Enter Phone' 
            className={`${error.phone? 'border-red' : 'border-black'} fw-medium rounded p-3 w-100`}
            onChange={formChangeHandler}
            onKeyPress={(e) => { if (!/^[0-9]$/.test(e.key))
            {
              e.preventDefault();
            }}}
            />
           <button 
           className="button-hover-secondary py-3 w-100 fs-para fw-bold text-white background-color-secondary border-0 rounded">ENQUIRE NOW</button>
          </form>
            <label className="fs-para fw-medium text-white">OR</label>
            <button onClick={() => window.open("https://api.whatsapp.com/send?phone=971568343200")} 
            style={{backgroundColor: "#25D366"}} 
            className="button-hover-light py-3 w-100 fs-para fw-bold text-white border-0 rounded">WHATSAPP NOW
            </button>
            {error.successForm && (
                <SuccessForm mainText='You will be contacted Shortly'
                onClick={()=> setError((prev)=> ({...prev, successForm:false}))}/>
              )}
        </div>
        )}

        export default GetInTouchWithUs;