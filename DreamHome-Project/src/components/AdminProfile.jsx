import profileIcon from './../assets/Images/male.svg';

function AdminProfile(){

    return (
        <div className="d-flex flex-row align-items-center gap-2">
            <img style={{borderRadius:'2rem'}}
            src={profileIcon} alt="Profile" width='40' height='auto' />
           <div className="d-flex flex-column align-items-start">
            <label className="font-color-primary fs-6 fw-semibold m-0">Usama Kamran</label>
            <p className="font-color-light fs-para fw-medium m-0">Developer</p>
           </div>
        </div>

    )
}

export default AdminProfile;