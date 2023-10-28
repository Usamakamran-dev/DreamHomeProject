import cancelIcon from './../assets/Icons/cancel.svg';

function SuccessNewsLetter(props) {
  return (
    <div className="light-black-bg fixed-top start-0 bottom-0 end-0 position-fixed d-flex align-items-center justify-content-center p-5">
       <form className="rounded mx-auto text-center d-flex flex-column align-items-end gap-2 px-2 py-4 px-md-4 bg-light">
       <img src={cancelIcon} alt="cancelIcon" className='width-1halfrem' onClick={props.onClick} />
       <div className="d-flex p-5 flex-column align-items-center">
       <h1 className="fs-1 font-color-secondary fw-bold">Thank You!</h1>
       <p className="fs-3 font-color-primary fs-bold">You have subscribed Realtor 9</p>
        </div>
       </form>
      </div>
  )
}

export default SuccessNewsLetter;
