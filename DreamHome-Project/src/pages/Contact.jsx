import { useState , useContext , useEffect } from 'react';
import contactImage from './../assets/Images/contact.png';
import flagIcon from './../assets/Icons/Pakistan.svg';
import dropdown from './../assets/Icons/Dropdown black.svg';
import { CountryDataContext } from '../context/CountryDataProvider';
import EnquiryTop from '../components/EnquiryTop';
import EnquiryForm from "../forms/EnquiryForm";
import Footer from "../components/Footer";
import useShowFooter from "../context/useShowFooter";

function Contact(){
  const [dropdownOpen, setDropDownOpen] = useState(false);
  const showFooter=useShowFooter();
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const enquiryFormHandler = () => { setShowEnquiryForm(true) }
  const cancelEnquiryForm = () => { setShowEnquiryForm(false) }
  const toggleDropdown = () => {setDropDownOpen(!dropdownOpen)};
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
    useEffect(() => { window.scrollTo(0, 0);}, []);
    return(
        <div className='contact-page-width mx-auto my-5 py-5'>
             <div className="row row-cols-1 row-cols-md-2">
              {/* Contact Form */}
              <div className='d-flex flex-column align-items-center align-items-md-start gap-3 gap-md-5 order-2 order-md-1'>
                <div className='d-flex flex-column align-items-center align-items-md-start gap-2'>
                <h1 className='fs-1 fw-bold font-color-primary m-0'>CONTACT US</h1>
                 <p className='fw-medium font-color-secondary m-0'>All fields are required*</p>
                </div>
                <form className='d-flex flex-column align-items-start gap-4'>
                <input type="text" placeholder='Enter First Name' 
                className='border-0 fw-medium input-field-style py-2 w-100'/>
                <input type="text" placeholder='Enter Last Name' 
                className='border-0 fw-medium input-field-style py-2 w-100' />
                <input type="email" placeholder='Enter Email' 
                className='border-0 fw-medium input-field-style py-2 w-100'/>
                {/* Phone */}
                <div className='d-flex flex-row align-items-end gap-4 w-100 position-relative'>
                  <div className='d-flex flex-row gap-4'>
                  <div onClick={toggleDropdown}
                  className='d-flex flex-row align-items-center gap-3 input-field-style py-2'>
                  <img src={selectedCountry.flags.svg} alt="flag-icon" className='w-auto' style={{height: '1rem'}} />
                  <span className='fw-medium' style={{width: '4rem', cursor:'pointer'}}>{`${selectedCountry.idd.root}${selectedCountry.idd.suffixes}`}</span>
                  <img src={dropdown} alt="dropdown-menu" className='w-auto ' style={{height: '0.5rem'}}/>
                 </div>
                 <input type="text" placeholder='Enter Phone' 
                 className='border-0 fw-medium input-field-style py-2 w-100 '/>
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
                <button className="py-3 mt-4 button-hover-primary project-button-width fs-para fw-bold text-white background-color-primary border-0 rounded">ENQUIRE NOW</button>
                </form>
               </div>
               <div className="m-0 rounded order-1 order-md-2">
                <img src={contactImage} alt="Contact-Us-Image" className="w-100 h-100 py-5 image-fluid rounded"/>
               </div>  
              </div>
              {showFooter && <Footer show={showFooter} />}
              {showEnquiryForm && <EnquiryForm  onCancel={cancelEnquiryForm}/>}
              <EnquiryTop onClick={enquiryFormHandler}></EnquiryTop>
              </div>
              )}
    export default Contact;