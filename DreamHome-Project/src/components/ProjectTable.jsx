import addIcon from './../assets/Icons/addIcon.svg';
import expandIcon from './../assets/Icons/expandIcon.svg';
import DashboardList from '../components/DashboardList';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import DeleteModel from '../forms/DeleteModel';
import { useNavigate } from "react-router-dom";
import { useContext , useState , useEffect } from 'react';
import { ProjectCardContext } from '../context/ProjectCardProvider';

function ProjectTable(props){
    const navigate = useNavigate();
    const {ProjectCardDetails,setProjectCardDetails}=useContext(ProjectCardContext);
    const [projectNames,setProjectNames]=useState([]);
    const [modal,setModal]=useState(false);
    const [selectedName,setSelectedName]=useState('');
    useEffect(() => {
        setProjectNames([...ProjectCardDetails.map(project => project.name)])
      }, [ProjectCardDetails]);
    useEffect(() => { window.scrollTo(0, 0);}, []);

    // ........................
    const deleteModel=(projectName)=>{
        setModal(true);
        setSelectedName(projectName);
    }
    const confirmDelete=()=>{
        const name=selectedName;
        const index = ProjectCardDetails.findIndex(project => project.name === name);

        if (index !== -1) {
            setProjectCardDetails(prevDetails => {
              const updatedDetails = [...prevDetails];
              updatedDetails.splice(index, 1);
              return updatedDetails;
            });
            setModal(false);
    }
   }

    return(
        <div className="rounded shadow-sm p-0 ">
                <div className='d-flex flex-row align-items-center justify-content-between shadow-sm py-2 px-3'>
                    <h1 className="fw-bold fs-6 font-color-primary text-center m-0">Total Projects</h1>
                    <div className='d-flex flex-row align-items-center gap-3'>
                       { (props.expand) && <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 200 }}
                        overlay={(props) => (
                            <Tooltip id="button-tooltip" {...props}>
                            View Project Table
                            </Tooltip>
                        )}
                        >
                    <img src={expandIcon} alt="add-Icon" width='14' height='auto' 
                    className='card-hover' onClick={()=> navigate('project')} />
                    </OverlayTrigger>
                    } 
                    <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 200 }}
                        overlay={(props) => (
                            <Tooltip id="button-tooltip" {...props}>
                            Add Project
                            </Tooltip>
                        )}
                        >
                    <img src={addIcon} alt="add-Icon" width='16' height='auto' 
                    className='card-hover' onClick={()=> navigate('projectForm')} />
                    </OverlayTrigger>
                    </div>
                </div>
                <div style={{paddingRight:'0.4rem'}} className='py-1'>
                    <label className='font-color-secondary fw-semibold px-3 py-2'>Name</label>
                    <div className='dashboard-table-height'>
                        {projectNames.map((name,index)=> (
                        <DashboardList key={index} name={name}
                        onDelete={() => deleteModel(name)}></DashboardList>
                        ))}
                    </div>
                </div>
                {modal && <DeleteModel mainText='Project'
                onCancel={()=>setModal(false)}
                onConfirm={confirmDelete}/>
                }
        </div>
     )}
     export default ProjectTable;