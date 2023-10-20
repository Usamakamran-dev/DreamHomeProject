import React , {useState} from 'react';
import projectData from '../data/projectData';

export const ProjectCardContext=React.createContext();
function ProjectCardProvider(props){
    const [ProjectCardDetails,setProjectCardDetails]=useState(projectData);
    return(
     <ProjectCardContext.Provider value={ProjectCardDetails}> 
        {props.children}
     </ProjectCardContext.Provider>
    )}

export default ProjectCardProvider;