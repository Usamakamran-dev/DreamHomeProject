function ProjectHeroSection(props) {
  const heroSection=props.heroSection;
  const heading=heroSection.heading;
  const logo=heroSection.logo
  return (     
        <div style={{height:'90vh'}} className='bg-black-transparent py-5'>
          <div className="py-5 d-flex flex-column align-items-center gap-5">
          <img src={logo} alt="project-Logo" className="img-fluid project-logo" />
           <h1  className="lh-1 fw-semibold fs-heroSection container mx-auto text-center text-white">{heading}</h1>
          </div>
        </div>
       );}
      export default ProjectHeroSection;