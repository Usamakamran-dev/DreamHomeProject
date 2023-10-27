import ProjectForm1 from "./ProjectForm1";
import ProjectForm2 from "./ProjectForm2";
import ProjectForm3 from "./ProjectForm3";
import ProjectForm4 from "./ProjectForm4";
import ProjectForm5 from "./ProjectForm5";
import ProjectForm6 from "./ProjectForm6";
import { useContext } from "react";
import { MultiFormContext } from "../context/MultiFormProvider";

function MultiStepForm(){
    const value=useContext(MultiFormContext)
    // Canceling to the form and resetting form Index
    function cancelFormHandler(){
      value.setFormVisible(false);
      value.setFormIndex(0);
    }
    
    return(
        <>
        {value.formVisible && 
        <div style={{zIndex: '1000000'}} 
        className="light-black-bg start-0 bottom-0 end-0 position-fixed d-flex align-items-center justify-content-center w-100 h-100">
        {value.formIndex==0 && <ProjectForm1 onCancel={cancelFormHandler}></ProjectForm1>}
        {value.formIndex==1 && <ProjectForm2 onCancel={cancelFormHandler}></ProjectForm2>}
        {value.formIndex==2 && <ProjectForm3 onCancel={cancelFormHandler}></ProjectForm3>}
        {value.formIndex==3 && <ProjectForm4 onCancel={cancelFormHandler}></ProjectForm4>}
        {value.formIndex==4 && <ProjectForm5 onCancel={cancelFormHandler}></ProjectForm5>}
        {value.formIndex==5 && <ProjectForm6 onCancel={cancelFormHandler}></ProjectForm6>}
        </div>
        }
        </>
        )}
        export default MultiStepForm;