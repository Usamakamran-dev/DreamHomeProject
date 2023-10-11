import React , {useState} from 'react';
import dummyImage from './../assets/Images/dummyImage.jpg';

export const ProjectCardContext=React.createContext();
function ProjectCardProvider(props){
    const [ProjectCardDetails,setProjectCardDetails]=useState([
        {ProjectHeading: 'DAMAC HILLS',
         ProjectSubHeading: "Dubailand, Dubai, United Arab Emirates",
         ProjectParagraph: 'An established and prestigious international golf Project in Dubailand comprising luxury villas, apartments and a hotel',
         ProjectImage: dummyImage,
         ProjectId: '1'},
         {ProjectHeading: 'DAMAC HILLS',
         ProjectSubHeading: "Dubailand, Dubai, United Arab Emirates",
         ProjectParagraph: 'An established and prestigious international golf Project in Dubailand comprising luxury villas, apartments and a hotel',
         ProjectImage: dummyImage,
         ProjectId: '1'},
         {ProjectHeading: 'DAMAC HILLS',
         ProjectSubHeading: "Dubailand, Dubai, United Arab Emirates",
         ProjectParagraph: 'An established and prestigious international golf Project in Dubailand comprising luxury villas, apartments and a hotel',
         ProjectImage: dummyImage,
         ProjectId: '1'},
         {ProjectHeading: 'DAMAC HILLS',
         ProjectSubHeading: "Dubailand, Dubai, United Arab Emirates",
         ProjectParagraph: 'An established and prestigious international golf Project in Dubailand comprising luxury villas, apartments and a hotel',
         ProjectImage: dummyImage,
         ProjectId: '1'},
         {ProjectHeading: 'DAMAC HILLS',
         ProjectSubHeading: "Dubailand, Dubai, United Arab Emirates",
         ProjectParagraph: 'An established and prestigious international golf Project in Dubailand comprising luxury villas, apartments and a hotel',
         ProjectImage: dummyImage,
         ProjectId: '1'},
         {ProjectHeading: 'DAMAC HILLS',
         ProjectSubHeading: "Dubailand, Dubai, United Arab Emirates",
         ProjectParagraph: 'An established and prestigious international golf Project in Dubailand comprising luxury villas, apartments and a hotel',
         ProjectImage: dummyImage,
         ProjectId: '1'}
        ]);

    return(
     <ProjectCardContext.Provider value={ProjectCardDetails}> 
        {props.children}
     </ProjectCardContext.Provider>
    )}

export default ProjectCardProvider;