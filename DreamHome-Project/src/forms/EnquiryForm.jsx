import { useState , useContext } from "react";
import { CountryDataContext } from "../context/CountryDataProvider";
import flagIcon from './../assets/Icons/Pakistan.svg';
import dropdown from './../assets/Icons/Dropdown black.svg';
import cancelIcon from './../assets/Icons/cancel.svg';

function EnquiryForm(props){
    const [dropdownOpen, setDropDownOpen] = useState(false);
    const toggleDropdown = () => {setDropDownOpen(!dropdownOpen)};
    const [form,setForm]=useState({
      FirstName: '',
      LastName: '',
      Email: '',
      Phone: ''
    })
    const countryData=useContext(CountryDataContext);
    if(!countryData) return 
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

    function handleSelectedCountry(arr){
        setSelectedCountry(arr);
        setDropDownOpen(!dropdownOpen)
      }

    function handleChange(e){
      setForm({
      ...form,
      [e.target.name]: e.target.value
      })
    }
    
    function handleFormSubmit(e){
      e.preventDefault();
      console.log("Form data is", JSON.stringify(form));
    }
  
    return(
        <div style={{zIndex: '1000000'}} className="light-black-bg fixed-top start-0 bottom-0 end-0 position-fixed d-flex align-items-center justify-content-center w-100 h-100">
            <div className="bg-white w-50  p-5 rounded d-flex flex-column gap-5">
                <div className="d-flex flex-row align-items-start justify-content-between gap-5">
                  <div className="d-flex flex-column align-items-start gap-2">
                <h1 className="fs-2 fw-bold font-color-primary m-0">Register Your <span className="font-color-secondary">Interest</span></h1>
                <p className="fw-medium font-color-secondary">All fields are required *</p>
                  </div>
                  <img onClick={props.onCancel} src={cancelIcon} alt="cancel-icon" width='30' height='auto' className="py-1"/>
                </div>
            <form className='d-flex flex-column align-items-start gap-4' onSubmit={handleFormSubmit}>
                <input type="text" name="FirstName"
                value={form.FirstName} onChange={handleChange} placeholder='Enter First Name' 
                className='border-0 fw-medium input-field-style py-2 w-100'/>
                <input type="text"  name="LastName"
                value={form.LastName} onChange={handleChange} placeholder='Enter Last Name' 
                className='border-0 fw-medium input-field-style py-2 w-100' />
                <input type="email"  name="Email"
                value={form.EmailName} onChange={handleChange} placeholder='Enter Email' 
                className='border-0 fw-medium input-field-style py-2 w-100'/>
                {/* Phone */}
                <div className='d-flex flex-row align-items-end gap-4 w-100 position-relative'>
                  <div className='d-flex flex-row gap-4 w-100'>
                  <div onClick={toggleDropdown}
                  className='d-flex flex-row align-items-center gap-3 input-field-style py-2'>
                  <img src={selectedCountry.flags.svg} alt="flag-icon" className='h-auto' style={{width: '1.5rem'}} />
                  <span className='fw-medium' style={{width: '4rem', cursor:'pointer'}}>{`${selectedCountry.idd.root}${selectedCountry.idd.suffixes}`}</span>
                  <img src={dropdown} alt="dropdown-menu" className='w-auto ' style={{height: '0.5rem'}}/>
                 </div>
                 <input type="text"  name="Phone"
                 value={form.Phone} onChange={handleChange} placeholder='Enter Phone' 
                 className='border-0 fw-medium input-field-style py-2 w-100'/>
                 </div>
                {dropdownOpen && (
               <div className='position-absolute bg-light custom-dropdown-style shadow-sm d-flex flex-column gap-2 p-2'>
               {countryData.sort((a, b) => a.name.common.localeCompare(b.name.common)).map((arr, index) => (
                <div className='d-flex flex-row align-items-center gap-5' onClick={() => handleSelectedCountry(arr)}>
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