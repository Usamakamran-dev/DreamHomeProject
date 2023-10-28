import { useRef , useContext , useState } from "react";
import { CurrentDataContext } from "../context/CurrentDataProvider";
import axios from 'axios';
import SuccessForm from "./SuccessForm";

function GetInTouchWithUs(){
    const { cardIdentifier , setCardIdentifier } = useContext(CurrentDataContext);
    const [showSuccessForm, setShowSuccessForm] = useState(false);
    const nameRef=useRef();
    const emailRef=useRef();
    const phoneRef=useRef();
    const [firstError,setFirstError]=useState(false);
    const [emailError,setEmailError]=useState(false);
    const [phoneError,setPhoneError]=useState(false);
    //  ......
    const cancelEnquiryForm = () => { 
        setShowSuccessForm(false)
       }
    const formSubmitHandler = (e) => {
        e.preventDefault();
        const FirstName = nameRef.current.value;
        const Email = emailRef.current.value;
        const Phone = phoneRef.current.value;
      
        let hasError = false;
        const onlyAlphabets = /^[A-Za-z]+$/;
        if (FirstName === '' || !FirstName.match(onlyAlphabets)) {
          setFirstError(true);
          hasError = true; 
        } else {
          setFirstError(false);
        }
    
        if (Email === '') {
          setEmailError(true);
          hasError = true;
        } else {
          setEmailError(false);
        }
      
        if (phoneRef.current.value === '') {
          setPhoneError(true);
          hasError = true;
        } else {
          setPhoneError(false);
        }
      
        if (hasError) {
          return; 
        }
        // ...................................................................................................
        console.log('Form submitted successfully.');
        const identifier = cardIdentifier;
        const postData={
              first_name: FirstName,
              email: Email,
              phone: Phone,
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
        nameRef.current.value = '';
        emailRef.current.value = '';
        phoneRef.current.value = '';
        setShowSuccessForm(true);
      }

    // ......
    function firstNameChange(e) {
        const inputValue = e.target.value;
        const onlyAlphabets = /^[A-Za-z]+$/;
        if (inputValue.trim() === '' || !inputValue.match(onlyAlphabets)) {
          setFirstError(true);
        } else {
          setFirstError(false);
        }
      }
    
        function emailChange(e) {
          if (e.target.value.trim() === '') {
            setEmailError(true);
          } else {
            setEmailError(false);
          }
        }
    
        function phoneChange(e) {
          const phoneNumber = e.target.value;
          if (phoneNumber.trim() === '') {
            setPhoneError(true);
          }
           else {
            setPhoneError(false); 
          }
        }
    return(
        <form  onSubmit={formSubmitHandler}
        className="background-color-primary rounded p-3 w-100 d-flex flex-column align-items-center gap-3">
        <h1 className="fs-3 text-white text-center">Get in touch with us !</h1>
        <input ref={nameRef}
         type="text" name="Name" placeholder='Enter Name' 
         className={`${firstError? 'border-red' : 'border-black'} fw-medium rounded input-field-style p-3 w-100`}
         onChange={(e) => firstNameChange(e)}
         onKeyPress={(e) => {
          if (!/^[A-Za-z\s]$/.test(e.key)) {
              e.preventDefault();
          }
        }}
         />
        <input ref={emailRef}
        type="email"  name="Email" placeholder='Enter Email' 
         className={`${emailError? 'border-red' : 'border-black'} fw-medium rounded input-field-style p-3 w-100`}
         onChange={(e) => emailChange(e)} />
         <input ref={phoneRef}
         type="phone"  name="Phone" placeholder='Enter Phone' 
         className={`${phoneError? 'border-red' : 'border-black'} fw-medium rounded input-field-style p-3 w-100`}
         onChange={(e) => phoneChange(e)} 
         onKeyPress={(e) => { if (!/^[0-9]$/.test(e.key))
         {
           e.preventDefault();
         }}}/>
         <div className="d-flex flex-column align-items-center gap-3 w-100">
         <button 
        className="button-hover-secondary py-3 w-100 fs-para fw-bold text-white background-color-secondary border-0 rounded">ENQUIRE NOW</button>
        <label className="fs-para fw-medium text-white">OR</label>
        <button onClick={() => window.open("https://web.whatsapp.com", "_blank")} style={{backgroundColor: "#25D366"}} 
        className="button-hover-light py-3 w-100 fs-para fw-bold text-white border-0 rounded">WHATSAPP NOW</button>
         </div>
         {showSuccessForm && (
            <SuccessForm
            onClick={cancelEnquiryForm}/>
          )}
         </form>
    )
}

export default GetInTouchWithUs;