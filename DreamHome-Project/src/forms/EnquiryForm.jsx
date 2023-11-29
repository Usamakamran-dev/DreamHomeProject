import flag from './../assets/Icons/Pakistan.svg';
import dropDownImg from './../assets/Icons/Dropdown black.svg';
import { CountryDataContext } from '../context/CountryDataProvider';
import { useContext , useState} from 'react';
import axios from 'axios';
import { CurrentDataContext } from '../context/CurrentDataProvider';
import DropdownCountry from '../components/DropdownCountry';

function EnquiryForm(props) {
  const { cardIdentifier , setCardIdentifier } = useContext(CurrentDataContext);
  const countryData=useContext(CountryDataContext);
  if(!countryData)  return
  const [form,setForm]=useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
   })
  const [error,setError]=useState({
     firstName: false,
     lastName: false,
     email: false,
     phone: false,
     errorBox: false,
     dropDown: false,
    })
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
  
  
  const handleSelectedCountry=(arr)=>{
  setSelectedCountry(arr);
  setError((prev)=> ({...prev, dropDown: !(error.dropDown)}))
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    let hasError = false;
    let fieldsToValidate=['firstName','lastName', 'email', 'phone'];
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
      
      if(field==='phone' && form[field].length!= selectedCountry.phoneLength)
      {
        setError((prev)=> ({...prev, errorBox: true}))
        hasError= true;
      }
      else
      {
        setError((prev)=> ({...prev, errorBox: false}))
      }
    })
    if (hasError) return
    // After Form Submission
    props.toggleFormVisibility(false);  
    const identifier = cardIdentifier;
    const postData={
          first_name: form.firstName,
          last_name: form.lastName,
          email: form.email,
          phone: `${selectedCountry.idd.root}${selectedCountry.idd.suffixes}${form.phone}`,
          projects: identifier ? identifier : 'Realtor 9',
          status: 'Active'
        }
        axios.post('https://promotions.dreamlands.com.pk/', postData)
        .then(response => 
         {
         console.log(response.data);
         setCardIdentifier('Realtor 9') 
         })
        .catch(error => 
        {  
          console.error(`There is an error while posting data ${error}`)
        }).finally(() => 
        {
          console.log('Request completed.');
        })
       // Resetting the form values
        setForm({
          firstName:'',
          lastName:'',
          email:'',
          phone:''
        })
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

          case 'lastName':
              setForm((prev)=> ({...prev, lastName:value}))
              if(!value)
              {
              setError((prev)=> ({...prev, lastName:true}))
              }
              else
              {
              setError((prev)=> ({...prev, lastName:false}))
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
              if(!value || value.length != selectedCountry.phoneLength)
              {
              setError((prev)=> ({...prev, phone:true}))
              setError((prev)=> ({...prev, errorBox:true}))
              }
              else
              {
              setError((prev)=> ({...prev, phone:false}))
              setError((prev)=> ({...prev, errorBox:false}))
              }
              break;
          default:
          break;
          }}

    return (
      <form
        onSubmit={formSubmitHandler}
        className="rounded text-center d-flex flex-column align-items-start gap-4">
          <div className="d-flex flex-column align-items-start gap-3">
            {/* First Name */}
            <div className="d-flex flex-column align-items-start gap-2">
                <label className="text-black fw-semibold fs-mobile">First Name</label>
                <input
                  value={form.firstName}
                  name='firstName'
                  type="text" 
                  className={`${error.firstName? 'border-red' : 'border-black'} 
                  rounded  bg-light px-3 py-2 fs-mobile input-width`}
                  onChange={formChangeHandler}
                  onKeyPress={(e) => {
                    if (!/^[A-Za-z\s]$/.test(e.key)) {
                        e.preventDefault();
                    }}}
                    />
            </div>
                      
            {/* Last Name */}
            <div className="d-flex flex-column align-items-start gap-2">
              <label className="text-black  fw-semibold fs-mobile">Last Name</label>
              <input 
                value={form.lastName} 
                name='lastName'
                type="text"
                className={`${error.lastName? 'border-red' : 'border-black'} 
                rounded  bg-light px-3 py-2 fs-mobile text-black input-width`}
                onChange={formChangeHandler}  
                onKeyPress={(e) => {
                  if (!/^[A-Za-z\s]$/.test(e.key)) {
                      e.preventDefault();
                  }}}/>
            </div>

            {/* Email*/}
            <div className="d-flex flex-column align-items-start gap-2">
              <label className="text-black  fw-semibold fs-mobile">Email</label>
              <input 
                value={form.email}
                name='email'
                type="email" 
                className={`${error.email? 'border-red' : 'border-black'} 
                rounded  bg-light px-3 py-2 text-black fs-mobile input-width`}
                onChange={formChangeHandler} />
            </div>

            {/* Phone*/}
            <div className="d-flex flex-column align-items-start gap-2">
             <label className="fw-semibold fs-mobile">Phone</label>
            <div className="d-flex flex-column gap-2 position-relative align-items-start">
                          
              {/* Complete Phone Field */}
              <div className="d-flex flex-row gap-2 align-items-center"> 
                {/* Flag Image , Phone Code and Dropdown */}
                <div className="d-flex flex-row rounded gap-2 border-black px-2 py-2 align-items-center" 
                 onClick={()=>   setError((prev)=> ({...prev, dropDown:!(error.dropDown)}))  }>
                  <img src={selectedCountry.flags.svg} alt="Flag-Icon" className='width-1halfrem h-auto' />
                  <span className='text-black fw-semibold fs-mobile phone-code-width'>
                    {`${selectedCountry.idd.root}${selectedCountry.idd.suffixes}`}
                  </span>
                  <img src={dropDownImg} alt="Drop-Down" className='width-halfrem h-auto' />
                </div>
                           
                  {/* Phone*/}
                  <input
                  value={form.phone}
                  name='phone'
                  type="text" 
                  className={`${error.phone? 'border-red' : 'border-black'} 
                  rounded bg-light px-3 py-2 fs-mobile phone-input-width`}    
                  onChange={formChangeHandler} 
                  onKeyPress={(e) => { if (!/^[0-9]$/.test(e.key))
                  {
                    e.preventDefault();
                  }}}
                  />
                { error.errorBox && <p 
                className='p-2 side-error bg-danger text-white h-blue fs-mobile position-absolute rounded'> 
                {selectedCountry.phoneLength} digits required *</p>
                }
              </div>
  
             {/* Dropdown container */}
      {error.dropDown && (
          <div className='position-absolute bg-light custom-dropdown-style rounded p-2 d-flex flex-column gap-2'>
            {countryData.sort((a, b) => a.name.common.localeCompare(b.name.common)).map((arr, index) => (
              <DropdownCountry key={index} onClick={() => handleSelectedCountry(arr)} 
              src={arr.flags.svg} code= {`${arr.idd.root}${arr.idd.suffixes}`.substring(0, 4)}
              name={arr.name.common.substring(0, 20)}></DropdownCountry>
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
        export default EnquiryForm;


