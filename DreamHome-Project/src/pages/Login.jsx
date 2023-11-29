import logo from './../assets/Icons/Realtor9.svg';
import loginImage from "./../assets/Images/login.jpg"

function Login(){
    return(
         <div className="row overflow-hidden m-0 px-0 gap-5">
               <div className="col-12 col-md-4 d-flex flex-column justify-content-center gap-5 px-3 px-md-5">
                     <div className='d-flex flex-column align-items-center align-items-md-start gap-2'>
                           <img src={logo} alt="realtor9-logo" width='120' height='auto' />
                           <h1 className="fs-1 fw-bold font-color-secondary m-0">Welcome 
                           <span className="font-color-primary"> Back !</span>
                           </h1>
                           <p className='fw-medium fs-6 text-center font-color-light m-0'>
                           Lorem ipsum lorem ispum ipsum lorem ipsum
                           </p>
                     </div>
                     <div className='d-flex flex-column gap-4'>
                           <input type="email" placeholder='Enter Email' 
                           className='border-0 fw-medium input-field-style py-2 w-100'/>
                           <input type="password" placeholder='Enter Password' 
                           className='border-0 fw-medium input-field-style py-2 w-100'/>               
                     </div>
                     <div className="d-flex flex-column align-items-center gap-2 gap-md-4">
                           <button className="button-hover-primary py-3 fs-para w-100 fw-bold text-white background-color-primary border-0 rounded">
                           LOG IN
                           </button>
                           <button className="button-hover-light py-3 fs-para w-100 fw-bold font-color-light border-0 rounded">
                           SIGN UP
                           </button>
                     </div>            
               </div>
               <div className="col-12 col-md-7 m-0 p-5">             
                     <img src={loginImage} alt="login-image"  
                     className="image-fluid h-100 w-100 m-0 p-0 rounded d-none d-md-block" />
               </div>
         </div>
    )}
    export default Login;