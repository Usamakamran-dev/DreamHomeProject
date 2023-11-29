import { useState , useContext , useEffect } from 'react';
import ProjectTable from '../components/ProjectTable';
import ResidentialTable from '../components/ResidentialTable';
import AdminTabCard from '../components/AdminTabCard';
import AdminProfile from '../components/AdminProfile';
import activeProjectIcon from './../assets/Icons/activeProject.svg';
import inactiveProjectIcon from './../assets/Icons/inactiveProject.svg';
import projectIcon from './../assets/Icons/projectIcon.svg';
import houseIcon from './../assets/Icons/house.png';
import houseActive from './../assets/Icons/activeHouse.png';
import houseInactive from './../assets/Icons/inactivehouse.png';
import { ProjectCardContext } from '../context/ProjectCardProvider';
import { ListingCardContext } from '../context/ListingCardProvider';

function AdminHome(){
    const { ProjectCardDetails }=useContext(ProjectCardContext);
    const { ListingCardDetails }=useContext(ListingCardContext);
    const [projects,setProjects]=useState({
        active: '',
        inactive: '',
        total:''
    })
    const [residencies,setResidencies]=useState({
        active: '',
        inactive: '',
        total:''
    })
    useEffect(() => {
        const projectsHandler=()=>{
            const totalProjects = ProjectCardDetails.length;
            setProjects({
                total: totalProjects,
                active: totalProjects,
                inactive: '0'
            })
        }
        const residencyHandler=()=>{
            const totalResidencies = ListingCardDetails.length;
            setResidencies({
                total: totalResidencies,
                active: totalResidencies,
                inactive: '0'
            })
        }
        residencyHandler()
        projectsHandler();
      }, [ProjectCardDetails, ListingCardDetails]);


    return(
        <div style={{width: '80%', marginLeft:'auto'}}
        className="d-flex flex-column align-items-center gap-4 p-4 h-100">
                {/* Welcome Section */}
                <div className='bg-light w-100 rounded px-3 py-4 d-flex flex-row align-items-center justify-content-between'>
                     <div className='d-flex flex-column align-items-start'>
                        <h1 className="font-color-primary fw-semibold fs-3 m-0">
                        Welcome to <span className="font-color-secondary">Admin Dashboard!</span>
                        </h1>
                        <p className='font-color-light fw-medium fs-6 m-0'>
                        Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        </p>
                     </div>
                     {/* <div>
                        <label className='bg-white rounded border'>Total Visits <span>{totalVisits}</span></label>
                     </div> */}
                     <AdminProfile></AdminProfile>
                </div>
                {/* Small Cards Section */}
                <div className='row gap-4 w-100'>
                    <div className='col w-100 p-0'>
                        <AdminTabCard
                        heading='Total Projects'
                        number={projects.total}
                        src={projectIcon} 
                        />
                    </div>
                    <div className='col w-100 p-0'>
                        <AdminTabCard
                        heading='Active Projects'
                        number={projects.active}
                        src={activeProjectIcon} 
                        />
                    </div>
                    <div className='col w-100 p-0'>
                        <AdminTabCard
                        heading='Inactive Projects'
                        number={projects.inactive}
                        src={inactiveProjectIcon}
                        />
                    </div>
                </div>

                <div className='row gap-4 w-100'>
                    <div className='col w-100 p-0'>
                        <AdminTabCard
                        heading='Total Listing'
                        number={residencies.total}
                        src={houseIcon} 
                        />
                    </div>
                    <div className='col w-100 p-0'>
                        <AdminTabCard
                        heading='Active Listing'
                        number={residencies.active}
                        src={houseActive} 
                        />
                    </div>
                    <div className='col w-100 p-0'>
                        <AdminTabCard
                        heading='Inactive Listing'
                        number={residencies.inactive}
                        src={houseInactive}
                        />
                    </div>
                </div>
                {/* Table Section */}
                <div className="row w-100 gap-4 d-flex align-items-start">
                    <div className='col p-0'><ProjectTable expand='show'></ProjectTable></div>
                    <div className='col p-0'><ResidentialTable expand='show'></ResidentialTable></div>
                </div>    
            </div>
    )
   }
   export default AdminHome;