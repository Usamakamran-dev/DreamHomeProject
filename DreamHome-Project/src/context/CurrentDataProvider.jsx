import React,{ useState } from "react";
export const CurrentDataContext=React.createContext();

function CurrentDataProvider(props){
    const [currentProjectData,setCurrentProjectData] = useState();
    const [currentBlogData,setCurrentBlogData] = useState();
    const value = {
        currentProjectData,
        setCurrentProjectData,
        currentBlogData,
        setCurrentBlogData,
      }; 
      return(
        <CurrentDataContext.Provider value={value}>
        {props.children}
        </CurrentDataContext.Provider>
        )}
      export default CurrentDataProvider; 