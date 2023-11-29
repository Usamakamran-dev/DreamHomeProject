import { useState } from "react";
import axios from 'axios';
import SuccessForm from "./SuccessForm";

function NewsLetter(){
    const [showSuccessForm, setShowSuccessForm] = useState(false);
    const [form,setForm]=useState({
       name:'',
       email:''
      })
    const [error,setError]=useState({
      name:false,
      email:false
     })
    
    const formSubmitHandler=(e)=>{
    e.preventDefault();
    let fieldsToValidate=['name','email'];
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
    const newsLetter={
       name: form.name,
       email: form.email,
       status: 'Active'
     }
     axios.post('https://promotions.dreamlands.com.pk/newsletter', newsLetter)
     .then(response => {
      console.log(response.data);
      })
     .catch(error => {  
       console.error(`There is an error while posting data ${error}`)
     }).finally(() => {
       console.log('Request completed.');
     })
      setShowSuccessForm(true);
      setForm({
        name:'',
        email:''
      })
     }

     const formChangeHandler=(e)=>{
      const name=e.target.name;
      const value=e.target.value;
      switch(name){
      case 'name':
          setForm((prev)=> ({...prev, name:value}))
          if(!value)
          {
          setError((prev)=> ({...prev, name:true}))
          }
          else
          {
          setError((prev)=> ({...prev, name:false}))
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
      default:
      break;
        }}


    return(
        <div className="rounded d-flex flex-column p-3 bg-warning position-relative w-100" >
         <h1 className="fs-3 text-center fw-bold">NEWSLETTER</h1>
         <p className="fs-6  text-center fw-medium">Subscribe For Daily Blog Alert!</p>
         <form onSubmit={formSubmitHandler}
         className="d-flex flex-column align-items-center gap-3 w-100">
         <input 
         type="text" 
         value={form.name}
         name='name'
         placeholder='Enter Name'
         onChange={formChangeHandler}
         onKeyPress={(e) => {
          if (!/^[A-Za-z\s]$/.test(e.key)) {
              e.preventDefault();
          }
        }}
        className={`${error.name && 'border-red' } fw-medium rounded p-3 w-100`}/>
        <input 
        type="email" 
        value={form.email}
        name='email'
        onChange={formChangeHandler}
        placeholder='Enter Email' 
        className={`${error.email && 'border-red'} fw-medium rounded p-3 w-100`}/>
        <button className="button-hover-light py-3 w-100 text-white bg-dark fs-para fw-bold border-0 rounded">
        SUBSCRIBE NOW
        </button>
         </form>
         {showSuccessForm && (<SuccessForm mainText='You have subscribed Realtor 9'
            onClick={()=>setShowSuccessForm(false)}/>)}
         </div>
        )}
        export default NewsLetter;