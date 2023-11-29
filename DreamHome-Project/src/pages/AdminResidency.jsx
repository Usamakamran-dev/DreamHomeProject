import ResidentialTable from './../components/ResidentialTable';
import { useState } from 'react';

function AdminResidency(){
   const [categoryValue,setCategoryValue]=useState('All');
   const handleCategoryChange=(e)=> {
         const value=e.target.value;
         setCategoryValue(value);
   }

    return (
        <div style={{width: '80%', marginLeft:'auto'}}>
            <div className='d-flex flex-column align-items-end gap-3 p-5 w-100'>
                <div className="d-flex flex-column gap-2 w-100">
                <h1 className=" text-center font-color-primary fw-semibold fs-3 m-0">Listing <span className="font-color-secondary"> Table</span></h1>
                  <p className="font-color-light fw-regular px-2 px-md-5 text-center fs-mobile">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida vitae velit ut fringilla.
                      Cras non leo luctus, pharetra turpis nec, suscipit sem
                  </p>
                </div>
                <div className="d-flex flex-column align-items-start px-2">
                    <select name="purpose" onChange={handleCategoryChange}
                    className={`border rounded px-1 px-md-3 py-2 fs-mobile w-100 font-color-primary`}>
                        <option value="All">All</option>
                        <option className='font-color-primary fw-medium' value="Residential" >Residential</option>
                        <option className='font-color-primary fw-medium' value="Apartment" >Apartment</option>
                    </select>
                </div>
                <ResidentialTable categoryValue={categoryValue}></ResidentialTable>
            </div>
        </div>
    )}
    export default AdminResidency;