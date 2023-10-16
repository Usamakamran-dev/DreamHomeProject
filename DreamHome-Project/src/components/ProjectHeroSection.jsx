import Logo from './../assets/Icons/Realtor9.svg';

function ProjectHeroSection() {
  return (     
        <div style={{height:'90vh'}} className='bg-white-transparent'>
         <div className="d-flex flex-column flex-md-row align-items-center gap-5 justify-content-between py-5 px-0 px-md-5">
        <img src={Logo} alt="project-logo" width="200" className=" h-auto order-md-1 mb-2 mb-md-0 p-4" />
        <h1 style={{fontSize:'4rem'}}
        className="fw-bold order-md-0 text-center font-color-primary text-md-start m-0 p-0">
        LUXURY APARTMENTS WITH PRIVATE POOL
        </h1>
        </div>
        </div>
       );}
      export default ProjectHeroSection;