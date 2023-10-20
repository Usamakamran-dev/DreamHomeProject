import mailIcon from './../assets/Icons/Mail.svg';
import upIcon from './../assets/Icons/Go UP.svg';
import { animateScroll as scroll } from 'react-scroll';

function EnquiryTop(props){
    function scrollToTop(){
        scroll.scrollToTop({
          duration: 30, 
          smooth: 'easeInOutQuart',
        });
        };
    return(
        <div style={{zIndex: '100000'}}
        className='d-flex flex-column align-items-center gap-2 position-fixed bottom-0 end-0 mb-5 mx-2 py-4 py-md-5 cursor-pointer h-auto'>
        <img style={{width: '2.7rem'}}
        src={mailIcon}
        alt="open-form-icon"
        onClick={props.onClick}
        className='card-hover h-auto'/>
         <img style={{width: '2.7rem'}}
         src={upIcon} alt="up-icon" onClick={scrollToTop}
         className='card-hover h-auto'/>
        </div>
    )}
    export default EnquiryTop;