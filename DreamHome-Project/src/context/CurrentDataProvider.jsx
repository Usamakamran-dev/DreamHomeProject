import React,{ useState } from "react";
export const CurrentDataContext=React.createContext();

function CurrentDataProvider(props){
    const [currentProjectData,setCurrentProjectData] = useState();
    const [currentBlogData,setCurrentBlogData] = useState();
    const [cardIdentifier,setCardIdentifier]=useState();
    const value = {
        currentProjectData,
        setCurrentProjectData,
        currentBlogData,
        setCurrentBlogData,
        cardIdentifier,
        setCardIdentifier
      }; 
      return(
        <CurrentDataContext.Provider value={value}>
        {props.children}
        </CurrentDataContext.Provider>
        )}
      export default CurrentDataProvider; 