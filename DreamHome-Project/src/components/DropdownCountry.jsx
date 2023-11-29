

function DropdownCountry(props){
    return(
        <div className='d-flex flex-row align-items-center gap-3' 
        onClick={props.onClick}>
            <img src={props.src} alt='Flag' className='flag-style' />
            <label className='text-black phone-code-width fs-mobile text-start'>
             {props.code}
            </label>
            <label className='text-black text-start fs-mobile'>
            {props.name}
            </label>
        </div>
    )
}

export default DropdownCountry;