function ProjectHeroSection(props) {
  const heroSection=props.heroSection;
  const logo=heroSection.logo;
  const heading=heroSection.heading;
  return (     
        <div style={{height:'90vh'}} className='bg-black-transparent'>
         <div className="d-flex flex-column flex-md-row align-items-center gap-5 justify-content-between py-5 px-0 px-md-5">
        <img src={logo} alt="project-logo" width="200" className=" h-auto order-md-1 mb-2 mb-md-0 p-4" />
        <h1  className="fw-bold order-md-0 fs-1 text-center text-white text-md-start m-0 px-3">{heading}</h1>
        </div>
        </div>
       );}
      export default ProjectHeroSection;