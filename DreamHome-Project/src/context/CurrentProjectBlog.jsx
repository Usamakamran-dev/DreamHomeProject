import React , { useState } from "react";

export const CurrentProjectBlogContext=React.createContext();

function CurrentProjectBlogProvider(props){
    const [currentProjectData, setCurrentProjectData] = useState(
        JSON.parse(localStorage.getItem("currentProjectData")) || null
      );
      const [currentBlogData, setCurrentBlogData] = useState(
        JSON.parse(localStorage.getItem("currentBlogData")) || null
      );
      const [currentListingData, setCurrentListingData] = useState(
        JSON.parse(localStorage.getItem("currentListingData")) || null
      );

      const updateCurrentProjectData = (data) => {
        setCurrentProjectData(data);
        localStorage.setItem("currentProjectData", JSON.stringify(data));
      };  
      const updateCurrentBlogData = (data) => {
        setCurrentBlogData(data);
        localStorage.setItem("currentBlogData", JSON.stringify(data));
      };  
      const updateCurrentListingData = (data) => {
        setCurrentListingData(data);
        localStorage.setItem("currentListingData", JSON.stringify(data));
      };  


    const value = {
        currentProjectData,
        updateCurrentProjectData,
        currentBlogData,
        updateCurrentBlogData,
        currentListingData,
        updateCurrentListingData
      }; 

    return(
        <CurrentProjectBlogContext.Provider value={value}>
            {props.children}
        </CurrentProjectBlogContext.Provider>
    )

}

export default CurrentProjectBlogProvider;