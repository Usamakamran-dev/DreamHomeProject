
function DeleteModel(props){

    return(
        <div className="light-black-bg fixed-top start-0 bottom-0 end-0 position-fixed d-flex align-items-center justify-content-center p-5">
                <div className="d-flex p-5 flex-column align-items-center gap-3 bg-white rounded">
                    <h1 className="fs-3 font-color-secondary fw-bold text-center">
                        Are you sure you want to delete this {props.mainText}?
                    </h1>
                    <p className="fs-6 font-color-primary fw-semibold text-center">
                        This will delete this {props.mainText} permanently.You cannot undo the action
                    </p>
                        <div className='d-flex flex-column gap-2 gap-md-4 flex-md-row'>
                        <button style={{width: '8rem'}}  onClick={props.onCancel}
                        className='background-color-light border-0 py-3 rounded fs-para fw-semibold'>
                        Cancel
                        </button>
                        <button style={{width: '8rem'}}  onClick={props.onConfirm}
                        className='background-color-secondary border-0 button-hover-secondary py-3 rounded fs-para fw-semibold text-white'>
                        Delete
                        </button>
                        </div>
                    
                </div>
       </div>
    )
}

export default DeleteModel;