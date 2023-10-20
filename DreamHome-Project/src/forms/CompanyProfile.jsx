import { useState } from "react";
import cancelIcon from './../assets/Icons/cancel.svg';

function CompanyProfile(props){
    const [form,setForm]=useState({
      FirstName: '',
      LastName: '',
      Email: '',
      Phone: ''
    })

    return(
        <div style={{zIndex: '1000000'}} className="light-black-bg fixed-top start-0 bottom-0 end-0 position-fixed d-flex align-items-center justify-content-center w-100 h-100">
            <div className="bg-white p-3 p-md-5 rounded d-flex flex-column gap-3">
                <div className="d-flex flex-row align-items-start justify-content-between gap-5">
                  <div className="d-flex flex-column align-items-start gap-2">
                <h1 className="fs-2 fw-bold font-color-primary m-0">Get in <span className="font-color-secondary">touch with us</span></h1>
                <p className="fw-medium font-color-secondary">All fields are required *</p>
                  </div>
                  <img onClick={props.onCancel} src={cancelIcon} alt="cancel-icon" width='30' height='auto' className="py-1"/>
                </div>
                <form className="w-100 d-flex flex-column align-items-center gap-4">
                      <input type="text" name="Name" placeholder='Enter Name' 
                       className='border-0 fw-medium  input-field-style p-3 w-100'/>
                      <input type="email"  name="Email" placeholder='Enter Email' 
                       className='border-0 fw-medium  input-field-style p-3 w-100'/>
                       <input type="text"  name="Phone" placeholder='Enter Phone' 
                       className='border-0 fw-medium input-field-style p-3 w-100'/>
                       <button 
                      className="button-hover-primary py-3 w-100 fs-para fw-bold text-white background-color-primary border-0 rounded">ENQUIRE NOW</button>
                       </form>
                      </div>
                     </div> )}

                export default CompanyProfile;