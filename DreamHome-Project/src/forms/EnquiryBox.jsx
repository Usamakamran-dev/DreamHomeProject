import flag from './../assets/Icons/Pakistan.svg';
import dropDown from './../assets/Icons/Dropdown black.svg';
import { CountryDataContext } from '../context/CountryDataProvider';
import { useContext , useState, useRef} from 'react';
import axios from 'axios';
import { CurrentDataContext } from '../context/CurrentDataProvider';

function EnquiryBox(props) {
  const { cardIdentifier , setCardIdentifier } = useContext(CurrentDataContext);
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
        svg: flag,
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
  const formSubmitHandler = (e) => {
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
      return; 
    }
    // ...................................................................................................
    props.toggleFormVisibility(false);  
    console.log('Form submitted successfully.');
    const identifier = cardIdentifier;
    const postData={
          first_name: FirstName,
          last_name: LastName,
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
      }
    }
    
    
  return (
      <form
        onSubmit={formSubmitHandler}
        className="rounded text-center d-flex flex-column align-items-start gap-4">
          <div className="d-flex flex-column align-items-start gap-3">
            {/* form fields */}
            <div className="d-flex flex-column align-items-start gap-2">
              <label className="text-black fw-semibold fs-mobile">First Name</label>
              <input ref={FirstNameRef}
                type="text" 
                className={`${firstError? 'border-red' : 'border-black'} 
                rounded  bg-light px-3 py-2 fs-mobile input-width`}
                onChange={(e) => firstNameChange(e)}
                onKeyPress={(e) => {
                  if (!/^[A-Za-z]$/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
            </div>
            <div className="d-flex flex-column align-items-start gap-2">
              <label className="text-black  fw-semibold fs-mobile">Last Name</label>
              <input ref={LastNameRef}
                type="text"
                className={`${lastError? 'border-red' : 'border-black'} 
                rounded  bg-light px-3 py-2 fs-mobile text-black input-width`}
                onChange={(e) => lastNameChange(e)}  
                onKeyPress={(e) => {
                  if (!/^[A-Za-z]$/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
            </div>
            <div className="d-flex flex-column align-items-start gap-2">
              <label className="text-black  fw-semibold fs-mobile">Email</label>
              <input ref={EmailRef}
                type="email" 
                className={`${emailError? 'border-red' : 'border-black'} 
                rounded  bg-light px-3 py-2 text-black fs-mobile input-width`}
                onChange={(e) => emailChange(e)} />
            </div>
            <div className="d-flex flex-column align-items-start gap-2">
              <label className="fw-semibold fs-mobile">Phone</label>
              <div className="d-flex flex-column gap-2 position-relative align-items-start">
    <div className="d-flex flex-row gap-2 align-items-center"> 
    <div className="d-flex flex-row rounded gap-2 border-black px-2 py-2 align-items-center" onClick={toggleDropdown}>
      <img src={selectedCountry.flags.svg} alt="Flag-Icon" className='width-1halfrem h-auto' />
      <span className='text-black fw-semibold fs-mobile phone-code-width'>{`${selectedCountry.idd.root}${selectedCountry.idd.suffixes}`}</span>
      <img src={dropDown} alt="Drop-Down" className='width-halfrem h-auto' />
    </div>
    <input ref={PhoneRef}
    type="text" 
    className={`${phoneError? 'border-red' : 'border-black'} 
    rounded bg-light px-3 py-2 fs-mobile phone-input-width`}    
    onChange={(e) => phoneChange(e)} 
    onKeyPress={(e) => { if (!/^[0-9]$/.test(e.key))
    {
      e.preventDefault();
    }}}
    />
    { sideError ? <p className='p-2 side-error bg-danger text-white h-blue fs-mobile position-absolute rounded'> {selectedCountry.phoneLength} digits required *</p> : ''}
    </div>
  
    {/* Dropdown container */}
    {dropdownOpen && (
    <div className='position-absolute bg-light custom-dropdown-style rounded p-2 d-flex flex-column gap-2'>
      {countryData.sort((a, b) => a.name.common.localeCompare(b.name.common))
      .map((arr, index) => (
        <div className='d-flex flex-row align-items-center gap-3' onClick={() => handleSelectedCountry(arr)}>
          <img src={arr.flags.svg} alt='Flag' className='flag-style' />
          <label className='text-black phone-code-width fs-mobile text-start'>{`${arr.idd.root}${arr.idd.suffixes}`.substring(0, 4)}</label>
          <label className='text-black text-start fs-mobile'>{arr.name.common.substring(0, 20)}</label>
        </div>
         ))}
        </div>
         )}
        </div>
          </div>
          </div>
          <button className="px-5 py-3 rounded w-100 text-white fw-bold fs-para background-color-primary border-0">ENQUIRE NOW</button>
      </form>
  );
}

export default EnquiryBox;
