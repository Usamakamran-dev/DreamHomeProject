
function PaymentPlan(){
    return(
        <div className='d-flex align-items-center justify-content-center bg-white-transparent py-5'>
            <div className="py-5 py-md-5 d-flex flex-column gap-0 gap-md-5 align-items-center">
                 <div className="d-flex flex-row align-items-center gap-2">
                 <span className="fs-1 font-color-secondary fw-bold m-0">PAYMENT</span>
                 <h1 className="fs-1 fw-bold font-color-primary m-0"> PLAN</h1>
                 </div>
              <div className="d-flex bg-white-transparent flex-column align-items-center w-100 m-0">
                <h2 className="text-white background-color-primary fs-3 fs-md-3 w-100 m-0 text-center py-3 px-2 px-md-5">STARTING FROM AED 689,000*</h2>
                <div className="row row-cols-1 row-cols-md-2 w-100">
                    {/* Local */}
                    <div className="px-4 px-md-5 py-3 py-md-3 d-flex flex-column align-items-center align-items-md-start">
                      <label className="fs-3 font-color-primary fw-bold">LOCAL</label>
                      <div className="d-flex flex-column align-items-start gap-1">
                        <div className="d-flex flex-row align-items-center">
                        <label className="fs-5 font-color-primary fw-regular" style={{width:'10rem',textWrap: 'noWrap'}}>On Booking</label>
                        <span className="fs-4 fw-semibold font-color-secondary">15%</span>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                        <label className="fs-5 font-color-primary fw-regular" style={{width:'10rem',textWrap: 'noWrap'}}>x35 Months</label>
                        <span className="fs-4 fw-semibold font-color-secondary">1%</span>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                        <label className="fs-5 font-color-primary fw-regular" style={{width:'10rem',textWrap: 'noWrap'}}>on 6th Month</label>
                        <span className="fs-4 fw-semibold font-color-secondary">10%</span>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                        <label className="fs-5 font-color-primary fw-regular" style={{width:'10rem',textWrap: 'noWrap'}}>on 12th Month</label>
                        <span className="fs-4 fw-semibold font-color-secondary">5%</span>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                        <label className="fs-5 font-color-primary fw-regular" style={{width:'10rem',textWrap: 'noWrap'}}>on 18th Month</label>
                        <span className="fs-4 fw-semibold font-color-secondary">5%</span>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                        <label className="fs-5 font-color-primary fw-regular" style={{width:'10rem',textWrap: 'noWrap'}}>x60 Months</label>
                        <span className="fs-4 fw-semibold font-color-secondary">0.5%</span>
                        </div>
                      </div>
                      
                    </div>
                     {/* International */}
                     <div className="px-4 px-md-5 py-3 py-md-3 d-flex flex-column align-items-center align-items-md-start">
                     <label  className="fs-3 font-color-primary fw-bold">INTERNATIONAL</label>
                     <div className="d-flex flex-column align-items-start gap-1"> 
                     <div className="d-flex flex-row align-items-center">
                        <label className="fs-5 font-color-primary fw-regular" style={{width:'10rem',textWrap: 'noWrap'}}>Down Payment</label>
                        <span className="fs-4 fw-semibold font-color-secondary">20%</span>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                        <label className="fs-5 font-color-primary fw-regular" style={{width:'10rem',textWrap: 'noWrap'}}>x30 Months</label>
                        <span className="fs-4 fw-semibold font-color-secondary">1%</span>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                        <label className="fs-5 font-color-primary fw-regular" style={{width:'10rem',textWrap: 'noWrap'}}>on 6th Month</label>
                        <span className="fs-4 fw-semibold font-color-secondary">10%</span>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                        <label className="fs-5 font-color-primary fw-regular" style={{width:'10rem',textWrap: 'noWrap'}}>on 12th Month</label>
                        <span className="fs-4 fw-semibold font-color-secondary">5%</span>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                        <label className="fs-5 font-color-primary fw-regular" style={{width:'10rem',textWrap: 'noWrap'}}>on 18th Month</label>
                        <span className="fs-4 fw-semibold font-color-secondary">5%</span>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                        <label className="fs-5 font-color-primary fw-regular" style={{width:'10rem',textWrap: 'noWrap'}}>x50 Months</label>
                        <span className="fs-4 fw-semibold font-color-secondary">0.5%</span>
                        </div>
                     </div>
                     </div>
                </div>
              </div>
              <h2 className="fs-6 fw-semibold text-center font-color-primary">
                SAMANA Manhattan - Studio, 1 & 2 Bedroom Apartments Offering
                 the Best Price and Attractive Payment Plan. <br />Book Your Apartment Today!</h2>
            </div>
           
        </div>
    )
}

export default PaymentPlan;