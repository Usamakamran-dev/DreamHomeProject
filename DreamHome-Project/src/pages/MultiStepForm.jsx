import BasicInformation from '../forms/BasicInformation';
import ProjectImages from '../forms/ProjectImages';
import ProjectDescription from '../forms/ProjectDescription';
import ProjectUnits from '../forms/ProjectUnits';
import ProjectAmenities from '../forms/ProjectAmenities';
import ProjectPlan from '../forms/ProjectPlan';
import SuccessForm from "../forms/SuccessForm";
import { useContext } from "react";
import { MultiFormContext } from "../context/MultiFormProvider";

function MultiStepForm(){
    const value=useContext(MultiFormContext);

    const renderFormStep = () => {
      switch (value.formIndex) {
        case 0:
          return <BasicInformation/>
        case 1:
          return <ProjectImages/>
        case 2:
          return <ProjectDescription/>;
        case 3:
          return <ProjectUnits/>
        case 4:
          return <ProjectAmenities/>
        case 5:
          return <ProjectPlan/>
        case 6:
          return  <form className="rounded mx-auto text-center d-flex flex-column align-items-end gap-2 px-2 py-4 px-md-4 bg-light">
                    <div className="d-flex p-5 flex-column align-items-center">
                      <h1 className="fs-1 font-color-secondary fw-bold">Thank You!</h1>
                      <p className="fs-3 font-color-primary fs-bold">Your Details Has Been Added</p>
                    </div>
                  </form>
        default:
        return null;
      }
    };

     const headingHandler=()=>{
     if(value.formIndex==0) return 'Basic Information'
     if(value.formIndex==1) return 'Project Images'
     if(value.formIndex==2) return 'Description'
     if(value.formIndex==3) return 'Unit Types'
     if(value.formIndex==4) return 'Project Amenities'
     if(value.formIndex==5) return 'Payment Plan'
     if(value.formIndex==6) return 'Submission Completed'
    }

    return(
      <div style={{width: '80%', marginLeft:'auto'}} >
                 <div className="d-flex flex-column align-items-center gap-5 w-100 p-5 container">
                  <div className="d-flex flex-column gap-2">
                    <h1 className=" text-center font-color-primary fw-semibold fs-3 m-0">Project <span className="font-color-secondary"> Form</span></h1>
                    <p className="font-color-light fw-regular px-2 px-md-5 text-center fs-mobile">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida vitae velit ut fringilla.
                        Cras non leo luctus, pharetra turpis nec, suscipit sem
                    </p>
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
                  {renderFormStep()}
                 </div>
      </div>
      )}
      export default MultiStepForm;