function ProjectHeroSection(props) {
  const heroSection=props.heroSection;
  const logo=heroSection.logo;
  const heading=heroSection.heading;
  return (     
        <div style={{height:'90vh'}} className='bg-black-transparent'>
        <h1  className="fw-bold fs-heroSection container mx-auto text-center text-white m-0 py-5">{heading}</h1>
        </div>
       );}
      export default ProjectHeroSection;