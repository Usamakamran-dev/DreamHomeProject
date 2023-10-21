import cancelIcon from './../assets/Icons/cancel.svg';
import YouTube from 'react-youtube';

function YoutubeModel(props){
    const opts = {
        width: '100%',
        height: '450',
        playerVars: {
          autoplay: 0,
         }}
    return(
        <div style={{zIndex: '1000000'}} className="light-black-bg fixed-top start-0 bottom-0 end-0 position-fixed d-flex align-items-center justify-content-center w-100 h-100">
            <div className="border-thick bg-dark p-2 p-md-3 rounded d-flex flex-column align-items-end gap-2">
                <img onClick={props.onCancel} src={cancelIcon} alt="cancel-icon" width='22' height='auto' className="py-1"/>
                <div className="position-relative overflow-hidden youtube-video-dimension">
                <YouTube videoId={props.id} opts={opts}/>
                </div>
            </div>
        </div> )}
        export default YoutubeModel;