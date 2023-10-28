import { useState } from "react";
import axios from 'axios';
import SuccessNewsLetter from "./SuccessNewsLetter";

function NewsLetter(){
    const [showSuccessForm, setShowSuccessForm] = useState(false);
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    // Errors
    const [nameError,setNameError] = useState(false);
    const [emailError,setEmailError] = useState(false);
    
    function formSubmitHandler(e){
    e.preventDefault();
    let hasError = false;
    if(!name){
      setNameError(true);
      hasError=true;
    }
    if(!email){
      setEmailError(true);
      hasError=true;
    }
    if(hasError) return
     console.log('Form submit Successfully');
     const newsLetter={
       name: name,
       email: email,
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
     setName('');
     setEmail(''); 
     }

    //  On change handlers
     function nameChangeHandler(e){
      const input=e.target.value;
      setName(input);
      if(!input){
        setNameError(true);
      }
      else{
        setNameError(false);
      }
     }
      
     function emailChangeHandler(e){
      const input=e.target.value;
      setEmail(input);
      if(!input){
        setEmailError(true);
      }
      else{
        setEmailError(false);
      }
     }

    return(
        <div
        className="rounded d-flex flex-column p-3 bg-warning position-relative" >
         <img src="" alt="" />
         <h1 className="fs-3 text-center fw-bold">NEWSLETTER</h1>
         <p className="fs-6  text-center fw-medium">Subscribe For Daily Blog Alert!</p>
         {/* {successMessage && <p className="text-center fw-semibold">Request Completed</p>} */}
         <form onSubmit={formSubmitHandler}
         className="d-flex flex-column align-items-center gap-3 w-100">
         <input type="text" value={name}
         placeholder='Enter Name'
         onChange={nameChangeHandler}
         onKeyPress={(e) => {
          if (!/^[A-Za-z\s]$/.test(e.key)) {
              e.preventDefault();
          }
        }}
        className={`${nameError && 'border-red' } fw-medium rounded input-field-style p-3 w-100`}/>
        <input type="email" value={email}
        onChange={emailChangeHandler}
        placeholder='Enter Email' 
        className={`${emailError && 'border-red'} fw-medium rounded input-field-style p-3 w-100`}/>
        <button
       className="button-hover-light py-3 w-100 text-white bg-dark fs-para fw-bold border-0 rounded">SUBSCRIBE NOW</button>
         </form>
         {showSuccessForm && (
            <SuccessNewsLetter
            onClick={()=>setShowSuccessForm(false)}/>
          )}
        </div>
    )
}

export default NewsLetter;