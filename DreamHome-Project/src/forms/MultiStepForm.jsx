import ProjectForm1 from "./ProjectForm1";
import ProjectForm2 from "./ProjectForm2";
import ProjectForm3 from "./ProjectForm3";
import ProjectForm4 from "./ProjectForm4";
import ProjectForm5 from "./ProjectForm5";
import ProjectForm6 from "./ProjectForm6";
import cancelIcon from './../assets/Icons/cancel.svg';
import { useContext } from "react";
import { MultiFormContext } from "../context/MultiFormProvider";

function MultiStepForm(){
    const value=useContext(MultiFormContext);
    function cancelFormHandler(){
      value.setFormVisible(false);
      value.setFormIndex(0);
    }

    const renderFormStep = () => {
      switch (value.formIndex) {
        case 0:
          return (
           <ProjectForm1/>
          );
        case 1:
          return (
           <ProjectForm2/>
          );
        case 2:
          return (
           <ProjectForm3/>
          );
        case 3:
          return (
           <ProjectForm4/>
          );
          case 4:
            return (
             <ProjectForm5/>
            );
            case 5:
              return (
               <ProjectForm6/>
              );
              case 6:
                return (
                  <form className="rounded mx-auto text-center d-flex flex-column align-items-center justify-content-center gap-2 px-2 py-5 px-md-4">
                  <div className="d-flex p-5 flex-column align-items-center">
                  <h1 className="fs-1 font-color-secondary fw-bold">Thank You!</h1>
                  <p className="fs-3 font-color-primary fs-bold">You details has been added</p>
                   </div>
                  </form>
                );
        default:
          return null;
      }
    };

    function headingHandler(){
     if(value.formIndex==0) return 'Basic Information'
     if(value.formIndex==1) return 'Project Images'
     if(value.formIndex==2) return 'Description'
     if(value.formIndex==3) return 'Unit Types'
     if(value.formIndex==4) return 'Project Amenities'
     if(value.formIndex==5) return 'Payment Plan'
     if(value.formIndex==6) return 'Submission Completed'
    }

    return(
      <div style={{zIndex: '1000000'}} 
        className="light-black-bg start-0 bottom-0 end-0 position-fixed d-flex align-items-center justify-content-center w-100 h-100">
      <div className="bg-white py-3 px-3 px-md-4 rounded d-flex flex-column gap-3 gap-md-5">
      <div className="d-flex flex-column align-items-end gap-3">
                 <div className="d-flex flex-row align-items-start justify-content-between w-100">
                  <h1 className="fs-5 fw-semibold font-color-secondary">Project Detail Form <span className="fs-para font-color-light">({headingHandler()})</span></h1>
                 <img onClick={cancelFormHandler}
                  src={cancelIcon} alt="cancel-icon" width='22' height='auto'/>
                 </div>
                 <div className="d-flex flex-row align-items-center justify-content-around w-100">
                 {[1, 2, 3, 4, 5, 6].map((stepNumber) => (
                 <div key={stepNumber} className={`rounded px-3 py-2 ${stepNumber <= value.formIndex ? 'active-step' : 'non-active-step'}`}>
                 <h1 className="fs-para fw-semibold m-0">
                 {stepNumber}
                 </h1>
                 </div>
                  ))}
                 </div>
                 </div>
                 {renderFormStep()}
                 </div>
                 </div>
                 )}
                export default MultiStepForm;