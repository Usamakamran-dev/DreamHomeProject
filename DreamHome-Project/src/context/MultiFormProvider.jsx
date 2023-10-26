import React, { useState , createContext } from "react";

export const MultiFormContext=createContext();

function MultiFormProvider(props){
   const [formIndex,setFormIndex]=useState(0);
   const [formVisible,setFormVisible]=useState();
  
   const value={
    formIndex,
    setFormIndex,
    formVisible,
    setFormVisible
   }

    return(
        <MultiFormContext.Provider value={value}>
            {props.children}
        </MultiFormContext.Provider>
    )}

    export default MultiFormProvider;

