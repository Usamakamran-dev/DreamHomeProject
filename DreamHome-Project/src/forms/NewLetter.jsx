import { useState , useRef } from "react";
import axios from 'axios';
import SuccessForm from "./SuccessForm";

function NewsLetter(){
    const nameRef=useRef();
    const emailRef=useRef();
    const [showSuccessForm, setShowSuccessForm] = useState(false);
    const [error,setError]=useState({
      Name: false,
      Email: false
    })
    const [form,setForm]=useState({
        Name: '',
        Email: ''
    })

    const cancelEnquiryForm = () => { 
      setShowSuccessForm(false)
     }

    function onChangeHandler(e){
     setForm({
        ...form,
        [e.target.name]: e.target.value
     })}

    function formSubmitHandler(e){
    e.preventDefault();
    
    if (!form.Name || !form.Email) {
      setError({
          Name: !form.Name,
          Email: !form.Email
      });
      return;
  }
     console.log('Form submit Successfully');
     const newsLetter={
       name: form.Name,
       email: form.Email,
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
       nameRef.current.value = '';
     emailRef.current.value = '';
     })
  
     setShowSuccessForm(true);  
    
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
         <input type="text" name="Name" value={form.Name} 
         placeholder='Enter Name' ref={nameRef}
         onChange={onChangeHandler}
         onKeyPress={(e) => {
            if (!/^[A-Za-z]$/.test(e.key)) {
              e.preventDefault();
            }}}
        className={`${error.Name && 'border-red' }fw-medium rounded input-field-style p-3 w-100`}/>
        <input type="email" name="Email"  value={form.Email}
        onChange={onChangeHandler}  ref={emailRef}
        placeholder='Enter Email' 
        className={`${error.Email && 'border-red'} fw-medium rounded input-field-style p-3 w-100`}/>
        <button
       className="button-hover-light py-3 w-100 text-white bg-dark fs-para fw-bold border-0 rounded">SUBSCRIBE NOW</button>
         </form>
         {showSuccessForm && (
            <SuccessForm
            onClick={cancelEnquiryForm}/>
          )}
        </div>
    )
}

export default NewsLetter;