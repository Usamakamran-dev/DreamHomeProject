import cancelIcon from './../assets/Icons/cancel.svg';
import EnquiryBox from './EnquiryForm';

function EnquiryModel(props){
    return(
        <div style={{zIndex: '1000000'}} className="light-black-bg fixed-top start-0 bottom-0 end-0 position-fixed d-flex align-items-center justify-content-center w-100 h-100">
            <div className="bg-white p-3 p-md-5 rounded d-flex flex-column gap-2">
                <div className="d-flex flex-row align-items-start justify-content-between">
                  <div className="d-flex flex-column align-items-start gap-2">
                <h1 className="h-mobile fw-bold font-color-primary m-0">Register Your <span className="font-color-secondary">Interest</span></h1>
                <p className="fw-medium font-color-secondary fs-mobile">All fields are required *</p>
                  </div>
                  <img onClick={props.onCancel} src={cancelIcon} alt="cancel-icon" width='30' height='auto' className="py-1"/>
                </div>
                 <EnquiryBox
                 toggleFormVisibility={props.toggleFormVisibility}></EnquiryBox>
                </div>
        </div>
    )}

    export default EnquiryModel;


