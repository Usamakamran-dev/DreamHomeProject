import React,{ useState } from "react";
export const CurrentDataContext=React.createContext();

function CurrentDataProvider(props){
    const [cardIdentifier,setCardIdentifier]=useState();
    const [showEnquiryForm, setShowEnquiryForm] = useState(false);
    const [showCompanyForm, setShowCompanyForm] = useState(false);
    const [showSuccessForm, setShowSuccessForm] = useState(false);
    const value = {
        cardIdentifier,
        setCardIdentifier,
        showEnquiryForm,
        setShowEnquiryForm,
        showCompanyForm,
        setShowCompanyForm,
        showSuccessForm,
        setShowSuccessForm
      }; 
      return(
        <CurrentDataContext.Provider value={value}>
        {props.children}
        </CurrentDataContext.Provider>
        )}
      export default CurrentDataProvider; 