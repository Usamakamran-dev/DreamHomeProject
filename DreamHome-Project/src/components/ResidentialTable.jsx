import addIcon from './../assets/Icons/addIcon.svg';
import expandIcon from './../assets/Icons/expandIcon.svg';
import DashboardList from '../components/DashboardList';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import DeleteModel from '../forms/DeleteModel';
import { useNavigate } from "react-router-dom";
import { useContext , useState , useEffect } from 'react';
import { ListingCardContext } from '../context/ListingCardProvider';

function ResidentialTable(props){
    const navigate=useNavigate();
    const categoryValue=props.categoryValue;
    const  {ListingCardDetails,setListingCardDetails }=useContext(ListingCardContext);
    const [filteredNames, setFilteredNames] = useState([]);
    const [modal,setModal]=useState(false);
    const [selectedName,setSelectedName]=useState('');

    // ...............................................
    useEffect(() => {
        const lowerCaseCategoryValue = categoryValue?.toLowerCase();
      
        if (lowerCaseCategoryValue && lowerCaseCategoryValue !== 'all') {
          const filteredListings = ListingCardDetails
            .filter(listing => listing.category.toLowerCase() === lowerCaseCategoryValue)
            .map(listing => listing.name);
          setFilteredNames(filteredListings);
        } else {
          const allNames = ListingCardDetails.map(listing => listing.name);
          setFilteredNames(allNames);
        }
      }, [categoryValue, ListingCardDetails]);      
      
      
    useEffect(() => { window.scrollTo(0, 0);}, []);

    // ................................................
    const deleteResidencyModel=(residencyName)=>{
        setModal(true);
        setSelectedName(residencyName);
    }
    
    const confirmResidencyDelete = () => {
        const name=selectedName;
        const index = ListingCardDetails.findIndex(listing => listing.name === name);
         
        if (index !== -1) {
            setListingCardDetails(prevDetails => {
              const updatedDetails = [...prevDetails];
              updatedDetails.splice(index, 1);
              return updatedDetails;
            });
            setModal(false);
        }}   



    return(
        <div className="rounded shadow-sm p-0 w-100">
                <div className='d-flex flex-row align-items-center justify-content-between shadow-sm py-2 px-3'>
                        <h1 className="fw-bold fs-6 font-color-primary text-center m-0">Total Listing</h1>
                        <div className='d-flex flex-row align-items-center gap-3'>
                        {(props.expand) && <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 200 }}
                            overlay={(props) => (
                                <Tooltip id="button-tooltip" {...props}>
                                 View Listing Table
                                </Tooltip>
                            )}
                            >
                        <img src={expandIcon} alt="add-Icon" width='14' height='auto' 
                        className='card-hover' onClick={()=> navigate('residency')}/>
                        </OverlayTrigger> 
                        }
                        <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 200 }}
                            overlay={(props) => (
                                <Tooltip id="button-tooltip" {...props}>
                                Add Listing
                                </Tooltip>
                            )}
                            >
                        <img src={addIcon} alt="add-Icon" width='16' height='auto' 
                        className='card-hover' onClick={()=> navigate('listingForm')}/>
                        </OverlayTrigger>
                        </div>
                </div>
                <div style={{paddingRight:'0.4rem'}} className='py-1'>
                <label className='font-color-secondary fw-semibold px-3 py-2'>Name</label>
                    <div className='dashboard-table-height'>
                        {filteredNames.map((name,index)=> (
                        <DashboardList key={index} name={name} 
                        onDelete={() => deleteResidencyModel(name)}>
                        </DashboardList>
                        ))}
                    </div>
                </div>
                {modal && <DeleteModel mainText='Residency'
                onCancel={()=>setModal(false)}
                onConfirm={confirmResidencyDelete}/>
                }
        </div>
        )}
        export default ResidentialTable;