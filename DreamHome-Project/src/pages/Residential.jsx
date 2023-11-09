import { useState , useEffect , useContext } from "react";
import ResidentialList from "../components/ResidentialList";
import useShowFooter from "../context/useShowFooter";
import Footer from "../components/Footer";
import SuccessForm from "../forms/SuccessForm";
import EnquiryForm from "../forms/EnquiryForm";
import EnquiryTop from "../components/EnquiryTop";
import { ResidentialCardContext } from "../context/ResidentialCardProvider";
import { CurrentProjectBlogContext } from "../context/CurrentProjectBlog";
import { useNavigate } from "react-router-dom";

function Residential(){
    const navigate=useNavigate();
    const ResidentialCardDetails=useContext(ResidentialCardContext);
    const {updateCurrentResidentialData}=useContext(CurrentProjectBlogContext);
    const showFooter=useShowFooter();
    const [showEnquiryForm, setShowEnquiryForm] = useState(false);
    const [showSuccessForm, setShowSuccessForm] = useState(false);
    const enquiryFormHandler = () => { setShowEnquiryForm(true) }
    const cancelEnquiryForm = () => { 
      setShowEnquiryForm(false) 
      setShowSuccessForm(false)
    }
    function toggleFormVisibility(isVisible){
        setShowEnquiryForm(isVisible);
        setShowSuccessForm(true);
      };
      useEffect(() => { window.scrollTo(0, 0);}, []);


    function currentResidentialCard(currentData,id){
      updateCurrentResidentialData(currentData);
      navigate(`/residential/${id.split(' ').join('-')}`);
    }

    return( 
        <> 
        <div className="my-5 p-5 text-center container d-flex flex-column align-items-center gap-2">
            <h1 className="fs-1 fw-bold font-color-primary">RESIDENTIAL <span className="font-color-secondary">APARTMENTS</span></h1>
            <p className="font-color-light fw-regular px-5 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu nisi quis urna imperdiet vehicula. 
            Ut interdum dignissim dui. Suspendisse nunc nunc, ornare in dignissim in, efficitur vitae nisl</p>
           {ResidentialCardDetails?.map((detail,index) => 
           (
             <ResidentialList 
             onClick={()=> currentResidentialCard(detail,detail.residentialHeading)}
             startingPrice='10' residentialUnit={detail.residentialUnit} 
             residentialSubHeading={detail.residentialSubHeading}
             location={detail.location}></ResidentialList>
           ))}
        </div>
         {showFooter && <Footer show={showFooter} />}
         {showEnquiryForm && <EnquiryForm toggleFormVisibility={toggleFormVisibility} onCancel={cancelEnquiryForm}/>}
         {showSuccessForm && (
            <SuccessForm
            onClick={cancelEnquiryForm}/>
          )}
        <EnquiryTop onClick={enquiryFormHandler}></EnquiryTop>
         </>
         )}

     export default Residential;