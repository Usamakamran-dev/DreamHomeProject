import contactImage from './../assets/Images/contact.png';
import flagIcon from './../assets/Icons/Pakistan.svg';
import dropdown from './../assets/Icons/Dropdown black.svg';

function Contact(){
    return(
        <div className='overflow-hidden m-1 m-md-4 mb-5'>
             <div className="row row-cols-1 row-cols-md-2 shadow-sm">
              {/* Contact Form */}
              <div className='d-flex flex-column align-items-center align-items-md-start gap-3 gap-md-5 px-3 px-md-5 order-2 order-md-1'>
                <div className='d-flex flex-column align-items-center align-items-md-start gap-2'>
                <h1 className='fs-1 fw-bold font-color-primary m-0'>CONTACT US</h1>
                 <p className='fw-semibold font-color-secondary m-0'>All fields are required*</p>
                </div>
                <form className='d-flex flex-column align-items-start gap-4'>
                <input type="text" placeholder='Enter First Name' 
                className='border-0 fw-semibold input-field-style py-2 w-100'/>
                <input type="text" placeholder='Enter Last Name' 
                className='border-0 fw-semibold input-field-style py-2 w-100' />
                {/* Phone */}
                <div className='d-flex flex-row align-items-end gap-4 w-100 overflow-hidden'>
                 <div className='d-flex flex-row align-items-center gap-3 input-field-style py-2'>
                  <img src={flagIcon} alt="flag-icon" className='w-auto' style={{height: '1rem'}} />
                  <span className='fw-semibold' style={{width: '4rem'}}>+92</span>
                  <img src={dropdown} alt="dropdown-menu" className='w-auto ' style={{height: '0.5rem'}}/>
                 </div>
                <input type="text" placeholder='Enter Phone' 
                className='border-0 fw-semibold input-field-style py-2 w-100 '/>
                </div>
                 <input type="email" placeholder='Enter Email' 
                className='border-0 fw-semibold input-field-style py-2 w-100'/>
                </form>
                <button className="py-3 project-button-width fw-bold text-white background-color-primary border-0 rounded">ENQUIRE NOW</button>
              </div>
              <div className="m-0 p-0 rounded order-1 order-md-2">
                <img src={contactImage} alt="Contact-Us-Image" className="w-100 h-100 m-0 p-2 p-md-5 image-fluid rounded"/>
              </div>
              
             </div>
        </div>
    )
}

export default Contact;