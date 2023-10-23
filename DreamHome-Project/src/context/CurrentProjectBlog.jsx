
import React , {useState} from "react";

export const CurrentProjectBlogContext=React.createContext();

function CurrentProjectBlogProvider(props){
    const [currentProjectData,setCurrentProjectData] = useState();
    const [currentBlogData,setCurrentBlogData] = useState();
    const value = {
        currentProjectData,
        setCurrentProjectData,
        currentBlogData,
        setCurrentBlogData,
      }; 

    return(
        <CurrentProjectBlogContext.Provider value={value}>
            {props.children}
        </CurrentProjectBlogContext.Provider>
    )

}

export default CurrentProjectBlogProvider;