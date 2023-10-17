import mailIcon from './../assets/Icons/Mail.svg';
function EnquiryIcon(props){
    return(
        <div>
        <img style={{width: '4rem', zIndex: '10000'}}
        src={mailIcon}
        alt="open-form-icon"
        className="position-fixed bottom-0 end-0 m-3 cursor-pointer h-auto"
        onClick={props.onClick}
        />
        </div>
    )}
    export default EnquiryIcon;