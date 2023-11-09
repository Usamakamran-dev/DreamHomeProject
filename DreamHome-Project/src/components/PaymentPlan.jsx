
function PaymentPlan(props){
    const paymentPlan=props.paymentPlan;
    return(
        <div className='d-flex align-items-center justify-content-center bg-white-transparent p-3 p-md-5'>
            <div className="py-5 py-md-5 d-flex flex-column gap-4 gap-md-5 align-items-center">
                 <div className="d-flex flex-row align-items-center gap-2">
                 <h1 className="fs-1 fs-md-1 fw-bold text-center font-color-primary m-0">{paymentPlan.heading}</h1>
                 </div>
              <div className="d-flex bg-white-transparent flex-column align-items-center w-100 ">
                <h2 className="text-white background-color-primary fs-4 w-100 m-0 text-center py-3 px-2 px-md-5">STARTING FROM AED<span> {paymentPlan.startingPrice}</span></h2>
                <div className="row row-cols-1 row-cols-md-2 w-100 py-3">
                    {/* Local */}
                    <div className="px-0 px-md-5 py-3 py-md-3 d-flex flex-column align-items-center align-items-md-start">
                      {/* <label className="fs-3 font-color-primary fw-bold">LOCAL</label> */}
                      <div className="d-flex flex-column align-items-start gap-2">
                        {paymentPlan.column1?.map((arr,index)=> ( <div key={index} className="d-flex flex-row align-items-center">
                       <label className="fs-6 font-color-primary fw-semibold payment-heading-width">{arr.heading}</label>
                       <span className="fs-4 fw-semibold font-color-secondary">{arr.percentage}%</span>
                       </div>
                        ))}
                      </div>
                    </div>
                     {/* International */}
                     <div className="px-4 px-md-5 py-3 py-md-3 d-flex flex-column align-items-center align-items-md-start">
                     {/* <label  className="fs-3 font-color-primary fw-bold">INTERNATIONAL</label> */}
                     <div className="d-flex flex-column align-items-start gap-2">
                        {paymentPlan.column2?.map((arr,index)=> ( <div key={index} className="d-flex flex-row align-items-center">
                       <label className="fs-6 font-color-primary fw-semibold payment-heading-width">{arr.heading}</label>
                       <span className="fs-4 fw-semibold font-color-secondary">{arr.percentage}%</span>
                       </div>
                        ))}
                      </div>
                     </div>
                </div>
              </div>
              {/* <h2 className="fs-6 px-2 px-md-0 fw-semibold text-center font-color-primary">
                <span>{paymentPlan.footerHeading}</span> Offering
                 the Best Percentage and Attractive Payment Plan. <br />Book Your Apartment Today!</h2> */}
            </div>
        </div>
    )
}

export default PaymentPlan;