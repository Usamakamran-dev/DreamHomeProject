
function PaymentPlan(props){
    const paymentPlan=props.paymentPlan;
    return(
        <div className='d-flex align-items-center justify-content-center bg-white-transparent p-3 p-md-5'>
            <div className="py-5 py-md-5 d-flex flex-column gap-4 gap-md-5 align-items-center">
                 <div className="d-flex flex-row align-items-center gap-2">
                 <h1 className="fs-1 fs-md-1 fw-bold text-center font-color-primary m-0">{paymentPlan.heading}</h1>
                 </div>
              <div className="d-flex bg-white-transparent flex-column align-items-center w-100 ">
                <h2 className="text-white background-color-primary fs-3 fs-md-3 w-100 m-0 text-center py-3 px-2 px-md-5">STARTING FROM AED 689,000*</h2>
                <div className="row row-cols-1 row-cols-md-2 w-100">
                    {/* Local */}
                    <div className="px-4 px-md-5 py-3 py-md-3 d-flex flex-column align-items-center align-items-md-start">
                      {/* <label className="fs-3 font-color-primary fw-bold">LOCAL</label> */}
                      <div className="d-flex flex-column align-items-start gap-1">
                        <div className="d-flex flex-row align-items-center">
                        <label className="fs-5 font-color-primary fw-regular" style={{width:'10rem',textWrap: 'noWrap'}}>{paymentPlan.localHeading[0]}</label>
                        <span className="fs-4 fw-semibold font-color-secondary">{paymentPlan.localPercentage[0]}</span>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                        <label className="fs-5 font-color-primary fw-regular" style={{width:'10rem',textWrap: 'noWrap'}}>{paymentPlan.localHeading[1]}</label>
                        <span className="fs-4 fw-semibold font-color-secondary">{paymentPlan.localPercentage[1]}</span>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                        <label className="fs-5 font-color-primary fw-regular" style={{width:'10rem',textWrap: 'noWrap'}}>{paymentPlan.localHeading[2]}</label>
                        <span className="fs-4 fw-semibold font-color-secondary">{paymentPlan.localPercentage[2]}</span>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                        <label className="fs-5 font-color-primary fw-regular" style={{width:'10rem',textWrap: 'noWrap'}}>{paymentPlan.localHeading[3]}</label>
                        <span className="fs-4 fw-semibold font-color-secondary">{paymentPlan.localPercentage[3]}</span>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                        <label className="fs-5 font-color-primary fw-regular" style={{width:'10rem',textWrap: 'noWrap'}}>{paymentPlan.localHeading[4]}</label>
                        <span className="fs-4 fw-semibold font-color-secondary">{paymentPlan.localPercentage[4]}</span>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                        <label className="fs-5 font-color-primary fw-regular" style={{width:'10rem',textWrap: 'noWrap'}}>{paymentPlan.localHeading[5]}</label>
                        <span className="fs-4 fw-semibold font-color-secondary">{paymentPlan.localPercentage[5]}</span>
                        </div>
                      </div>
                      
                    </div>
                     {/* International */}
                     <div className="px-4 px-md-5 py-3 py-md-3 d-flex flex-column align-items-center align-items-md-start">
                     {/* <label  className="fs-3 font-color-primary fw-bold">INTERNATIONAL</label> */}
                     <div className="d-flex flex-column align-items-start gap-1"> 
                     <div className="d-flex flex-row align-items-center">
                        <label className="fs-5 font-color-primary fw-regular" style={{width:'10rem',textWrap: 'noWrap'}}>{paymentPlan.internationalHeading[0]}</label>
                        <span className="fs-4 fw-semibold font-color-secondary">{paymentPlan.internationalPercentage[0]}</span>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                        <label className="fs-5 font-color-primary fw-regular" style={{width:'10rem',textWrap: 'noWrap'}}>{paymentPlan.internationalHeading[1]}</label>
                        <span className="fs-4 fw-semibold font-color-secondary">{paymentPlan.internationalPercentage[1]}</span>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                        <label className="fs-5 font-color-primary fw-regular" style={{width:'10rem',textWrap: 'noWrap'}}>{paymentPlan.internationalHeading[2]}</label>
                        <span className="fs-4 fw-semibold font-color-secondary">{paymentPlan.internationalPercentage[2]}</span>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                        <label className="fs-5 font-color-primary fw-regular" style={{width:'10rem',textWrap: 'noWrap'}}>{paymentPlan.internationalHeading[3]}</label>
                        <span className="fs-4 fw-semibold font-color-secondary">{paymentPlan.internationalPercentage[3]}</span>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                        <label className="fs-5 font-color-primary fw-regular" style={{width:'10rem',textWrap: 'noWrap'}}>{paymentPlan.internationalHeading[4]}</label>
                        <span className="fs-4 fw-semibold font-color-secondary">{paymentPlan.internationalPercentage[4]}</span>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                        <label className="fs-5 font-color-primary fw-regular" style={{width:'10rem',textWrap: 'noWrap'}}>{paymentPlan.internationalHeading[5]}</label>
                        <span className="fs-4 fw-semibold font-color-secondary">{paymentPlan.internationalPercentage[5]}</span>
                        </div>
                     </div>
                     </div>
                </div>
              </div>
              <h2 className="fs-6 px-2 px-md-0 fw-semibold text-center font-color-primary">
                SAMANA Manhattan - Studio, 1 & 2 Bedroom Apartments Offering
                 the Best Percentage and Attractive Payment Plan. <br />Book Your Apartment Today!</h2>
            </div>
           
        </div>
    )
}

export default PaymentPlan;