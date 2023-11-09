import React , {createContext , useState } from "react";
import residentialData from "../data/residentialData";
export const ResidentialCardContext=createContext();

function ResidentialCardProvider(props){
    const [ResidentialCardDetails,setResidentialCardDetails]=useState(residentialData);

    return(
        <ResidentialCardContext.Provider value={ResidentialCardDetails}>
            {props.children}
        </ResidentialCardContext.Provider>
    )}

    export default ResidentialCardProvider;