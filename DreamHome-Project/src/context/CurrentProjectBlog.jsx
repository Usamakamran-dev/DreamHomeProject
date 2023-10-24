
import React , {useState , useEffect} from "react";

export const CurrentProjectBlogContext=React.createContext();

function CurrentProjectBlogProvider(props){
    const [currentProjectData, setCurrentProjectData] = useState(
        JSON.parse(localStorage.getItem("currentProjectData")) || null
      );
      const [currentBlogData, setCurrentBlogData] = useState(
        JSON.parse(localStorage.getItem("currentBlogData")) || null
      );
      const updateCurrentProjectData = (data) => {
        setCurrentProjectData(data);
        localStorage.setItem("currentProjectData", JSON.stringify(data));
      };  
      const updateCurrentBlogData = (data) => {
        setCurrentBlogData(data);
        localStorage.setItem("currentBlogData", JSON.stringify(data));
      };    
    const value = {
        currentProjectData,
        updateCurrentProjectData,
        currentBlogData,
        updateCurrentBlogData,
      }; 

    return(
        <CurrentProjectBlogContext.Provider value={value}>
            {props.children}
        </CurrentProjectBlogContext.Provider>
    )

}

export default CurrentProjectBlogProvider;