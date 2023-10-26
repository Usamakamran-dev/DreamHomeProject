import ProjectForm1 from "./ProjectForm1";
import ProjectForm2 from "./ProjectForm2";
import ProjectForm3 from "./ProjectForm3";
import { useContext } from "react";
import { MultiFormContext } from "../context/MultiFormProvider";

function MultiStepForm(){
    const value=useContext(MultiFormContext)
    // Canceling to the form and resetting form Index
       function cancelFirstForm(){
        value.setFormVisible(false);
        value.setFormIndex(0);
       }
       function cancelSecondForm(){
        value.setFormVisible(false);
        value.setFormIndex(0);
       }
       function cancelLastForm(){
        value.setFormVisible(false);
        value.setFormIndex(0);
       }
    
    return(
        <>
        {value.formVisible && 
        <div style={{zIndex: '1000000'}} 
        className="light-black-bg start-0 bottom-0 end-0 position-fixed d-flex align-items-center justify-content-center w-100 h-100">
        {value.formIndex==0 && <ProjectForm1 onCancel={cancelFirstForm}></ProjectForm1>}
        {value.formIndex==1 && <ProjectForm2 onCancel={cancelSecondForm}></ProjectForm2>}
        {value.formIndex==2 && <ProjectForm3 onCancel={cancelLastForm}></ProjectForm3>}
        </div>
        }
        </>
    )}
export default MultiStepForm;