import editIcon from './../assets/Icons/editIcon.svg';
import deleteIcon from './../assets/Icons/deleteIcon.svg';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function DashboardList(props){

    return(
        <div
        className='d-flex flex-row align-items-center justify-content-between py-2 px-3 dashboard-list-hover'>
          <label className='font-color-primary fw-semibold fs-6'>{props.name}</label>
          <div className='d-flex flex-row align-items-center gap-3'>
                    <button style={{width: '4rem', backgroundColor:'#00FF00'}}
                    className='border-0 rounded py-1 text-white fs-para fw-medium card-hover'>Approve</button>
                    <button style={{width: '4rem'}}
                    className='border-0 rounded py-1 background-color-secondary text-white fs-para fw-medium card-hover'>Reject</button>
                    <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 200 }}
                        overlay={(props) => (
                        <Tooltip id="button-tooltip" {...props}>
                        Edit
                        </Tooltip>
                        )}>
                    <img style={{opacity:'0.5'}} className='card-hover'
                    src={editIcon} alt="add-Icon" width='auto' height='15' onClick={props.onDelete}/>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 200 }}
                        overlay={(props) => (
                        <Tooltip id="button-tooltip" {...props}>
                        Delete
                        </Tooltip>
                        )}>
                    <img style={{opacity:'0.5'}} className='card-hover'
                    src={deleteIcon} alt="add-Icon" width='auto' height='15' onClick={props.onDelete}/>
                    </OverlayTrigger>
          </div>
        </div>
    )
}

export default DashboardList;