import { useState , useContext , useRef} from "react";
import { CountryDataContext } from "../context/CountryDataProvider";
import flagIcon from './../assets/Icons/Pakistan.svg';
import dropdown from './../assets/Icons/Dropdown black.svg';
import cancelIcon from './../assets/Icons/cancel.svg';
import axios from 'axios';

function EnquiryForm(props){
  const countryData=useContext(CountryDataContext);
  if(!countryData){
    return <p>Data has not fetched</p>
   }  
  const [dropdownOpen, setDropDownOpen] = useState(false);
  const [firstError,setFirstError]=useState(false);
  const [lastError,setLastError]=useState(false);
  const [emailError,setEmailError]=useState(false);
  const [phoneError,setPhoneError]=useState(false);
  const [sideError,setSideError]=useState(false);
  const [successForm,setSuccessForm]=useState(false);
  const [selectedCountry,setSelectedCountry]=useState(
    {
      name: "Pakistan",
      phoneLength: 10,
      flags: {
        svg: flagIcon,
      },
      idd: {
        root: "+9",
        suffixes: "2",
      },
    }
    );
    const FirstNameRef=useRef();
    const LastNameRef=useRef();
    const EmailRef=useRef();
    const PhoneRef=useRef();
// .......................
function handleSelectedCountry(arr){
  setSelectedCountry(arr);
  setDropDownOpen(!dropdownOpen);
}


//  .............................
  const toggleDropdown = () => {setDropDownOpen(!dropdownOpen)};
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const FirstName = FirstNameRef.current.value;
    const LastName = LastNameRef.current.value;
    const Email = EmailRef.current.value;
    const Phone = `${selectedCountry.idd.root}${selectedCountry.idd.suffixes}${PhoneRef.current.value}`;
  
    let hasError = false;
    const onlyAlphabets = /^[A-Za-z]+$/;
    if (FirstName === '' || !FirstName.match(onlyAlphabets)) {
      setFirstError(true);
      hasError = true; 
    } else {
      setFirstError(false);
    }
  
    if (LastName === '' || !LastName.match(onlyAlphabets)) {
      setLastError(true);
      hasError = true;
    } else {
      setLastError(false);
    }
  
    if (Email === '') {
      setEmailError(true);
      hasError = true;
    } else {
      setEmailError(false);
    }
  
    if (PhoneRef.current.value === '') {
      setPhoneError(true);
      hasError = true;
    } else {
      setPhoneError(false);
    }

    if(PhoneRef.current.value.length < selectedCountry.phoneLength || PhoneRef.current.value.length > selectedCountry.phoneLength){
      setSideError(true);
      hasError= true;
    }
    else{
      setSideError(false);
    }
    if (hasError  || sideError) {
      return; }
    // ...................................................................................................
    // props.toggleFormVisibility(false);  
    console.log('Form submitted successfully.');
    const cardIdentifier = props.cardIdentifier;
    const postData={
          first_name: FirstName,
          last_name: LastName,
          email: Email,
          phone: Phone,
          projects: cardIdentifier ? cardIdentifier : 'Realtor 9',
          status: 'Active'
        }
        console.log(postData);
        axios.post('https://promotions.dreamlands.com.pk/', postData)
        .then(response => {
         console.log(response.data);
         })
        .catch(error => {  
          console.error(`There is an error while posting data ${error}`)
        }).finally(() => {
          console.log('Request completed.');
        });
    // Resetting the form values 
    FirstNameRef.current.value = '';
    LastNameRef.current.value = '';
    EmailRef.current.value = '';
    PhoneRef.current.value = '';
  }
  
  // .........................................................
  function firstNameChange(e) {
    const inputValue = e.target.value;
    const onlyAlphabets = /^[A-Za-z]+$/;
    if (inputValue.trim() === '' || !inputValue.match(onlyAlphabets)) {
      setFirstError(true);
    } else {
      setFirstError(false);
    }
  }

  function lastNameChange(e) {
    const inputValue = e.target.value;
    const onlyAlphabets = /^[A-Za-z]+$/;
    if (inputValue.trim() === '' || !inputValue.match(onlyAlphabets)) {
      setLastError(true);
    } else {
      setLastError(false);
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
      if (phoneNumber.trim() === '' || phoneNumber.length < selectedCountry.phoneLength || phoneNumber.length > selectedCountry.phoneLength) {
        setSideError(true);
        setPhoneError(true);
      }
       else {
        setPhoneError(false); 
        setSideError(false);     
      }}
  
    return(
        <div style={{zIndex: '1000000'}} className="light-black-bg fixed-top start-0 bottom-0 end-0 position-fixed d-flex align-items-center justify-content-center w-100 h-100">
            <div className="bg-white p-3 p-md-5 rounded d-flex flex-column gap-5">
                <div className="d-flex flex-row align-items-start justify-content-between gap-5">
                  <div className="d-flex flex-column align-items-start gap-2">
                <h1 className="fs-2 fw-bold font-color-primary m-0">Register Your <span className="font-color-secondary">Interest</span></h1>
                <p className="fw-medium font-color-secondary">All fields are required *</p>
                  </div>
                  <img onClick={props.onCancel} src={cancelIcon} alt="cancel-icon" width='30' height='auto' className="py-1"/>
                </div>
            <form className='d-flex flex-column align-items-start gap-4' onSubmit={handleFormSubmit}>
                <input type="text" name="FirstName" ref={FirstNameRef}
                 onChange={(e) => firstNameChange(e)}
                 onKeyPress={(e) => {
                   if (!/^[A-Za-z]$/.test(e.key)) {
                     e.preventDefault();
                   }
                 }} placeholder='Enter First Name' 
                className={`${firstError? 'border-red' : 'border-black'} border-0 fw-medium input-field-style py-2 w-100`}/>
                <input type="text"  name="LastName" ref={LastNameRef}
                 onChange={(e) => lastNameChange(e)}  
                 onKeyPress={(e) => {
                   if (!/^[A-Za-z]$/.test(e.key)) {
                     e.preventDefault();
                   }
                 }}
                placeholder='Enter Last Name' 
                className={`${lastError? 'border-red' : 'border-black'} border-0 fw-medium input-field-style py-2 w-100`}/>
                <input type="email" ref={EmailRef}  name="Email"
                 onChange={(e) => emailChange(e)}
                placeholder='Enter Email' 
                className={`${emailError? 'border-red' : 'border-black'}
                 border-0 fw-medium input-field-style py-2 w-100`}/>
                {/* Phone */}
                <div className='d-flex flex-row align-items-end gap-4 w-100 position-relative'>
                  <div className='d-flex flex-row gap-4 w-100'>
                  <div onClick={toggleDropdown}
                  className='d-flex flex-row align-items-center gap-3 input-field-style py-2'>
                  <img src={selectedCountry.flags.svg} alt="flag-icon" className='h-auto' style={{width: '1.5rem'}} />
                  <span className='fw-medium' style={{width: '4rem', cursor:'pointer'}}>{`${selectedCountry.idd.root}${selectedCountry.idd.suffixes}`}</span>
                  <img src={dropdown} alt="dropdown-menu" className='w-auto ' style={{height: '0.5rem'}}/>
                 </div>
                 <input type="text" ref={PhoneRef} name="Phone"
                  onChange={(e) => phoneChange(e)} 
                  onKeyPress={(e) => { if (!/^[0-9]$/.test(e.key))
                  {
                    e.preventDefault();
                  }}}
                 placeholder='Enter Phone' 
                 className={`${phoneError? 'border-red' : 'border-black'} 
                 border-0 fw-medium input-field-style py-2 w-100`}/>
                     { sideError ? <p className='p-2 side-error bg-danger text-white h-blue position-absolute rounded'> {selectedCountry.phoneLength} digits required *</p> : ''}
                 </div>
                {dropdownOpen && (
               <div className='position-absolute bg-light custom-dropdown-style shadow-sm d-flex flex-column gap-2 p-2'>
               {countryData.sort((a, b) => a.name.common.localeCompare(b.name.common)).map((arr, index) => (
                <div id={index} className='d-flex flex-row align-items-center gap-5' onClick={() => handleSelectedCountry(arr)}>
                 <img src={arr.flags.svg} alt='Flag' className='h-auto' style={{width: '1.5rem'}}/>
                 <label className='text-start' style={{width: '2rem'}}>{`${arr.idd.root}${arr.idd.suffixes}`.substring(0, 5)}</label>
                 <label className='text-start'>{arr.name.common.substring(0, 21)}</label>
                </div>))}
               </div>
                 )}
                </div>
                <button className="button-hover-primary py-3 mt-4 w-100 fs-para fw-bold text-white background-color-primary border-0 rounded">ENQUIRE NOW</button>
                </form>
                </div>
        </div>
    )
}

export default EnquiryForm;





// function handleChange(e){
//   setForm({
//   ...form,
//   [e.target.name]: e.target.value
//   })
// }
// const [form,setForm]=useState({
//   FirstName: '',
//   LastName: '',
//   Email: '',
//   Phone: ''
// })