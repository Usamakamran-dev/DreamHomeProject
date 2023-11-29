import React , { useState,useEffect } from 'react';
import projectData from '../data/projectData';

export const ProjectCardContext=React.createContext();
function ProjectCardProvider(props){
    const [ProjectCardDetails, setProjectCardDetails] = useState(() => {
        const storedDetails = localStorage.getItem('projectCardDetails');
        return storedDetails ? JSON.parse(storedDetails) : projectData;
      });
    
      useEffect(() => {
        localStorage.setItem('projectCardDetails', JSON.stringify(ProjectCardDetails));
      }, [ProjectCardDetails]);
    return(
     <ProjectCardContext.Provider value={{ProjectCardDetails,setProjectCardDetails}}> 
        {props.children}
     </ProjectCardContext.Provider>
    )}

export default ProjectCardProvider;