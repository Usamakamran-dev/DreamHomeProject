import realtorLogo from "./../assets/Icons/Realtor9-white.png";

function FooterSection(){
    return(
        <div className="background-color-primary py-5 w-100 overflow-hidden mb-5">
          <div className="row p-5 g-5">
             <div className="col d-flex flex-column align-items-start gap-4">
               <div className="w-100 py-2">
                <img src={realtorLogo} width='130' alt="realtor9-Logo h-auto img-fluid" />
               </div>
               <label className="fs-para fw-regular text-white m-0">231 Main Blvd, Sector J DHA Phase 6 Lahore, Punjab 54792</label>
               <label className="fs-para fw-semibold text-white m-0">(+92) 326 0333111</label>
             </div>
             <div className="col d-flex flex-column align-items-start gap-2">
               <h1 className="fs-4 fw-bold text-white m-0 py-2">HEADING</h1>
               <label className="fs-para fw-regular text-white">main links </label>
               <label className="fs-para fw-regular text-white">main links </label>
               <label className="fs-para fw-regular text-white">main links </label>
               <label className="fs-para fw-regular text-white">main links </label>
               <label className="fs-para fw-regular text-white">main links </label>
               <label className="fs-para fw-regular text-white">main links </label>
             </div>
             <div className="col d-flex flex-column align-items-start gap-2">
               <h1 className="fs-4 fw-bold text-white m-0 py-2">HEADING</h1>
               <label className="fs-para fw-regular text-white">main links </label>
               <label className="fs-para fw-regular text-white">main links </label>
               <label className="fs-para fw-regular text-white">main links </label>
               <label className="fs-para fw-regular text-white">main links </label>
               <label className="fs-para fw-regular text-white">main links </label>
               <label className="fs-para fw-regular text-white">main links </label>
             </div>
             <div className="col d-flex flex-column align-items-start gap-2">
               <h1 className="fs-4 fw-bold text-white m-0 py-2">HEADING</h1>
               <label className="fs-para fw-regular text-white">main links </label>
               <label className="fs-para fw-regular text-white">main links </label>
               <label className="fs-para fw-regular text-white">main links </label>
               <label className="fs-para fw-regular text-white">main links </label>
               <label className="fs-para fw-regular text-white">main links </label>
               <label className="fs-para fw-regular text-white">main links </label>
             </div>
          </div>
          <p className="fs-para text-white w-50 mx-auto text-center fw-regular py-2">lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ratione doloribus ducimus . Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
    )
}

export default FooterSection;