import React , { useContext , useState , useEffect } from "react";
import { MultiFormContext } from "../context/MultiFormProvider";

function ProjectPlan(){
    const value=useContext(MultiFormContext);
    const [paymentPlan,setPaymentPlan]=useState([
      {
      heading: '',
      percentage: ''
      }
    ]);
    useEffect(() => { window.scrollTo(0, 0);}, []);

    const formSubmitHandler = (e) => {
        e.preventDefault();
        for (let i = 0; i < paymentPlan.length; i++) 
        {
          if (paymentPlan[i].heading === '' || paymentPlan[i].percentage === '') 
          {
            return;
          }
        }
        value.setFormIndex(6);
      }

    const addMore = () => {
        if ( paymentPlan.length === 0 || (paymentPlan[paymentPlan.length - 1].heading !== '' && paymentPlan[paymentPlan.length - 1].percentage !== '')) 
        {
          const newPlan = 
          {
            heading: '',
            price: ''
          };
          setPaymentPlan([...paymentPlan, newPlan]);
        }
      }

    const headingChangeHandler = (index,e) => {
        const updatedPlan=[...paymentPlan];
        updatedPlan[index].heading=e.target.value;
        setPaymentPlan(updatedPlan);
       }
 
    const percentageChangeHandler = (index,e) => {
        const updatedPlan = [...paymentPlan];
        updatedPlan[index].percentage=e.target.value;
        setPaymentPlan(updatedPlan);        
       }
       
      

       return(
                <form onSubmit={formSubmitHandler} 
                className="rounded text-center d-flex flex-column align-items-center justify-content-between gap-3 gap-md-4 h-100 w-100">
                {/* Unit type */}
                <div className="w-100 d-flex flex-column gap-3 h-100">
                 {/* Unit type fields */}
                 <div className={`d-flex flex-column gap-3 px-2 ${paymentPlan.length >= 4 ? 'scrollable' : ''}`}>
                 {paymentPlan.map((paymentPlan,index)=>(
                 <div key={index} className="d-flex flex-row align-items-center gap-3 w-100">
                 <div className="d-flex flex-column align-items-start w-100">
                 <label className="font-color-primary fw-medium fs-mobile">Enter Plan Heading</label>
                 <input type="text" 
                 value={paymentPlan.heading}
                 onChange={(e)=> headingChangeHandler(index,e)}
                 className={`border-black rounded bg-light px-1 px-md-3 py-2 fs-mobile w-100`}
                 />
                 </div>
                 <div className="d-flex flex-column align-items-start w-100">
                 <label className="font-color-primary fw-medium fs-mobile">Enter Percentage Value</label>
                 <input type="number"
                 value={paymentPlan.percentage} 
                 onChange={(e) => percentageChangeHandler(index,e)}
                 className={`border-black rounded bg-light px-1 px-md-3 py-2 fs-mobile w-100`}
                 />
                 </div>
                 </div>
                ))}
                 </div>
                 {/* Add more label */}
                <label onClick={addMore}
                className="font-color-light fw-bold fs-para background-primary-light">Add More</label>
                </div>
                <button className="button-hover-primary px-5 py-3 rounded w-50 text-white fw-bold fs-para background-color-primary border-0">NEXT</button>
                </form>
                )}

                export default ProjectPlan;