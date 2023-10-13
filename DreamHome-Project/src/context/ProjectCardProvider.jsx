import React , {useState} from 'react';
import dummyImage from './../assets/Images/dummyImage.jpg';

export const ProjectCardContext=React.createContext();
function ProjectCardProvider(props){
    const [ProjectCardDetails,setProjectCardDetails]=useState([
        {ProjectHeading: 'DAMAC HILLS 1',
         ProjectSubHeading: "Dubailand, Dubai, United Arab Emirates",
         ProjectParagraph: 'An established and prestigious international golf Project in Dubailand comprising luxury villas, apartments and a hotel',
         ProjectImage: dummyImage,
         ProjectId: '1'},
         {ProjectHeading: 'DAMAC HILLS 2',
         ProjectSubHeading: "Dubailand, Dubai, United Arab Emirates",
         ProjectParagraph: 'An established and prestigious international golf Project in Dubailand comprising luxury villas, apartments and a hotel',
         ProjectImage: dummyImage,
         ProjectId: '1'},
         {ProjectHeading: 'DAMAC HILLS 3',
         ProjectSubHeading: "Dubailand, Dubai, United Arab Emirates",
         ProjectParagraph: 'An established and prestigious international golf Project in Dubailand comprising luxury villas, apartments and a hotel',
         ProjectImage: dummyImage,
         ProjectId: '1'},
         {ProjectHeading: 'DAMAC HILLS 4',
         ProjectSubHeading: "Dubailand, Dubai, United Arab Emirates",
         ProjectParagraph: 'An established and prestigious international golf Project in Dubailand comprising luxury villas, apartments and a hotel',
         ProjectImage: dummyImage,
         ProjectId: '1'},
         {ProjectHeading: 'DAMAC HILLS 5',
         ProjectSubHeading: "Dubailand, Dubai, United Arab Emirates",
         ProjectParagraph: 'An established and prestigious international golf Project in Dubailand comprising luxury villas, apartments and a hotel',
         ProjectImage: dummyImage,
         ProjectId: '1'},
         {ProjectHeading: 'DAMAC HILLS 6',
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