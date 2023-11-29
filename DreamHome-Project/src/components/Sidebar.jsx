import homeIcon from './../assets/Icons/homeIcon.png';
import projectIcon from './../assets/Icons/projectNavIcon.svg';
import residenceIcon from './../assets/Icons/residenceNavIcon.svg';
import addIcon from './../assets/Icons/addIcon.svg';
import logo from './../assets/Icons/Realtor9.svg';
import backIcon from './../assets/Icons/backIcon.svg';
import { NavLink } from 'react-router-dom';

function Sidebar(){
    return(
        <div style={{ borderRadius:'0 2rem 2rem 0' , height: '100vh' , zIndex:'11111111' }}
        className="position-fixed shadow-sm d-flex flex-column align-items-center justify-content-between py-3">
            <img className='m-0' src={logo} alt="Website-Logo" width="140" height="auto" />
            <div className='d-flex flex-column align-items-start py-5'>
                <NavLink to="/dashboard" 
                className='admin-link-hover text-decoration-none w-100 rounded d-flex flex-row align-items-center gap-4 px-4 py-3'>
                     <div style={{width:'1rem'}} className='d-flex align-items-center justify-content-center'><img src={homeIcon} alt="home-icon" width='auto' height='18'/></div>
                     <label className='font-color-primary fw-medium fs-6'>Home</label>
                </NavLink>
                <NavLink  to="project"
                className='admin-link-hover text-decoration-none w-100 rounded d-flex flex-row align-items-center gap-4 px-4 py-3'>
                     <div style={{width:'1rem'}} className='d-flex align-items-center justify-content-center'><img src={projectIcon} alt="home-icon" width='auto' height='18'/></div> 
                     <label className='font-color-primary fw-medium fs-6'>Project</label>
                </NavLink>
                <NavLink  to="residency"
                className='admin-link-hover text-decoration-none w-100 rounded d-flex flex-row align-items-center gap-4 px-4 py-3'>
                     <div style={{width:'1rem'}} className='d-flex align-items-center justify-content-center'><img src={residenceIcon} alt="home-icon" width='auto' height='18'/></div> 
                     <label className='font-color-primary fw-medium fs-6'>Listing</label>
                </NavLink>
                <NavLink  to='projectForm'
                className='admin-link-hover text-decoration-none w-100 rounded d-flex flex-row align-items-center gap-4 px-4 py-3'>
                     <div style={{width:'1rem'}} className='d-flex align-items-center justify-content-center'><img src={addIcon} alt="home-icon" width='auto' height='18'/></div>
                     <label className='font-color-primary fw-medium fs-6'>Add Project</label>
                </NavLink>
                <NavLink  to="listingForm"
                className='admin-link-hover text-decoration-none w-100 rounded d-flex flex-row align-items-center gap-4 px-4 py-3'>
                     <div style={{width:'1rem'}} className='d-flex align-items-center justify-content-center'><img src={addIcon} alt="home-icon" width='auto' height='18'/></div>
                     <label className='font-color-primary fw-medium fs-6'>Add Listing</label>
                </NavLink>
            </div>
            <NavLink to='/'
            className='admin-link-hover text-decoration-none w-100 rounded d-flex flex-row align-items-center gap-3 px-3 py-3'>
            <img src={backIcon} alt="home-icon" width='auto' height='15'  />
            <label className='font-color-primary fw-medium fs-6'>Continue to website</label>
            </NavLink>
        </div>
    )
}

export default Sidebar;