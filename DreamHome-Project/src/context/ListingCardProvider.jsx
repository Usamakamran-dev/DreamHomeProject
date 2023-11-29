import React , { createContext , useState , useEffect } from "react";
import listingData from "../data/listingData";

export const ListingCardContext=createContext();
function ListingCardProvider(props){
    const [ListingCardDetails, setListingCardDetails] = useState(() => {
        const storedDetails = localStorage.getItem('ListingCardDetails');
        return storedDetails ? JSON.parse(storedDetails) : listingData;
      });
      
      useEffect(() => {
        localStorage.setItem('ListingCardDetails', JSON.stringify(ListingCardDetails));
      }, [ListingCardDetails]);
    return(
        <ListingCardContext.Provider value={{ListingCardDetails,setListingCardDetails}}>
            {props.children}
        </ListingCardContext.Provider>
    )}

    export default ListingCardProvider;