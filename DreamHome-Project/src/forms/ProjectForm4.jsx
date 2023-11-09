import React , { useContext , useState , useEffect } from "react";
import { MultiFormContext } from "../context/MultiFormProvider";

function ProjectForm4(){
  const [unitHeadingError,setUnitHeadingError]=useState(false);
    const [unitPriceError,setUnitPriceError]=useState(false);
    useEffect(() => { window.scrollTo(0, 0);}, []);
    const value=useContext(MultiFormContext);
    const [units,setUnits]=useState([
      {
      heading: '',
      price: ''
      }
    ]);
   
    
    function submitFormHandler(e){
        e.preventDefault();
        for (let i = 0; i < units.length; i++) {
          if (units[i].heading === '' || units[i].price === '') {
            return; 
          }
        }
       const unitTypes={ 
         unitTypes: {
          cards: units
        }
       }
       console.log(unitTypes);
        value.setFormIndex(4);
      }

      function headingChangeHandler(index,e){
       const updatedUnits=[...units];
       updatedUnits[index].heading=e.target.value;
       setUnits(updatedUnits);
       }

      function priceChangeHandler(index,e){
       const updatedUnits = [...units];
       updatedUnits[index].price=e.target.value;
       setUnits(updatedUnits);        
      }

      function addMore() {
        if (units.length === 0 || (units[units.length - 1].heading !== '' && units[units.length - 1].price !== '')) {
          const newUnit = {
            heading: '',
            price: ''
          };
          setUnits([...units, newUnit]);
        }
      }
      

       return(
                <form onSubmit={submitFormHandler} 
                className="rounded text-center d-flex flex-column align-items-center justify-content-between gap-3 gap-md-4 h-100 w-100">
                {/* Unit type */}
                <div className="w-100 d-flex flex-column gap-3 h-100">
                 {/* Unit type fields */}
                 <div className={`d-flex flex-column gap-3 px-2 ${units.length >= 4 ? 'scrollable' : ''}`}>
                 {units.map((unit,index)=>(
                 <div key={index} className="d-flex flex-row align-items-start gap-3 w-100">
                 <div className="d-flex flex-column align-items-start w-100">
                 <label className="font-color-primary fw-medium fs-mobile">Enter Unit Type Heading</label>
                 <input type="text" 
                 value={unit.heading}
                 onChange={(e)=> headingChangeHandler(index,e)}
                 onKeyPress={(e) => {
                  if (!/[\w\s]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                
                 className={`${unitHeadingError? 'border-red' : 'border-black'} rounded bg-light px-1 px-md-3 py-2 fs-mobile w-100`}
                 />
                 </div>
                 <div className="d-flex flex-column align-items-start w-100">
                 <label className="font-color-primary fw-medium fs-mobile">Enter Unit Type Price</label>
                 <input type="text"
                 value={unit.price} 
                 onChange={(e) => priceChangeHandler(index,e)}
                 className={`${unitPriceError? 'border-red' : 'border-black'} rounded bg-light px-1 px-md-3 py-2 fs-mobile w-100`}
                 />
                  <p className="fs-para fw-medium py-1 font-color-secondary">
                  (Value can be in K and M)</p>
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

                export default ProjectForm4;