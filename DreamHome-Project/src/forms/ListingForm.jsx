import React , { useEffect , useState } from "react";
import addFile from './../assets/Icons/add-file.png';
import SuccessForm from "./SuccessForm";

function ListingForm(){
 const [form,setForm]=useState({
  url: '',
  title: '',
  metaKeyword:'',
  metaDescription:'',
  metaImage:'',
  studio:'',
  bath:'',
  purpose: '',
  propertyType: '',
  category: '',
  status: '',
  startingPrice: '',
  location: '',
  tagLine: '',
  roiDescription: '',
  overviewDescription: '',
  gallery:[],
  mainImage: '',
 })
 const [errors,setErrors]=useState({
  url:false,
  title:false,
  metaKeyword:false,
  metaDescription:false,
  metaImage:false,
  studio:false,
  bath:false,
  purpose: false,
  propertyType: false,
  category: false,
  status: false,
  startingPrice: false,
  location: false,
  tagLine: false,
  roiDescription: false,
  overviewDescription: false,
  gallery:false,
  mainImage: false,
 })
 const [fileName, setFileName]=useState({
  metaImage:'',
  gallery: [],
  mainImage: ''
 });
 const [showSuccessForm,setShowSuccessForm]=useState(false);
 useEffect(() => { window.scrollTo(0, 0);}, [] );

 function submitFormHandler(e){
  e.preventDefault();
  let fieldToValidate=['url','title','metaKeyword','metaDescription','metaImage','studio','bath','purpose','propertyType','category','status','startingPrice','location','tagLine','roiDescription','overviewDescription','gallery','mainImage'];
  let hasError=false;
  fieldToValidate.forEach((field)=>{
    if(!form[field]  || form[field].length<=0)
    {
      setErrors((prev)=> ({...prev, [field]: true}));
      hasError=true;
    }
    else
    {
      setErrors((prev)=> ({...prev, [field]: false}));
    }})

    if(hasError) return
    console.log(form);
    setShowSuccessForm(true);
    // Resetting fields
    setForm({
      url: '',
      title: '',
      metaKeyword: '',
      metaDescription:'',
      metaImage:'',
      studio:'',
      bath:'',
      purpose: '',
      propertyType: '',
      category: '',
      status: '',
      startingPrice: '',
      location: '',
      tagLine: '',
      roiDescription: '',
      overviewDescription: '',
      gallery: [],
      mainImage: '',
    });
    setFileName({
      metaImage:'',
      gallery: [],
      mainImage: '',
    });
  }

  function handleInputChange(e){
    const name=e.target.name;
    const value=e.target.value;
    const inputFile=e.target;
    switch(name)
    {
      case 'url':
        setForm((prev)=> ({...prev, url: value}));
        if(!value)
        {
          setErrors((prev)=> ({...prev, url: true}));
        }
        else{
          setErrors((prev)=> ({...prev, url: false}));
        }
        break;

        case 'title':
          setForm((prev)=> ({...prev, title: value}));
          if(!value)
          {
            setErrors((prev)=> ({...prev, title: true}));
          }
          else{
            setErrors((prev)=> ({...prev, title: false}));
          }
          break;

          case 'metaKeyword':
            setForm((prev)=> ({...prev, metaKeyword: value}));
            if(!value)
            {
              setErrors((prev)=> ({...prev, metaKeyword: true}));
            }
            else{
              setErrors((prev)=> ({...prev, metaKeyword: false}));
            }
            break;

        case 'metaDescription':
          setForm((prev)=> ({...prev, metaDescription: value}));
          if(!value)
          {
            setErrors((prev)=> ({...prev, metaDescription: true}));
          }
          else{
            setErrors((prev)=> ({...prev, metaDescription: false}));
          }
          break;

        
          case 'metaImage':
          if (inputFile.files.length > 0) {
            const file = inputFile.files[0];
            const fileName = file.name;
            const reader = new FileReader();
            reader.onload = function (event) 
            {
              const img = new Image();
              img.src = event.target.result;
              img.onload = function () 
            {
                if (img.width > 400 || img.height > 400) 
                {
                  setErrors((prev)=> ({...prev , metaImage: true}))
                  return;
                } 
                else 
                {
                  setErrors((prev)=> ({...prev , metaImage: false}))
                  setForm((prev)=> ({...prev , metaImage: file}))
                  setFileName((prev)=> ({...prev , metaImage: fileName}))
                }
            }
            }
            reader.readAsDataURL(file);
          } 
          else 
          {
            setErrors((prev)=> ({...prev , metaImage: true}))
          }
      break; 

      case 'purpose':
        setForm((prev)=> ({...prev, purpose: value}));
        if(!value)
        {
          setErrors((prev)=> ({...prev, purpose: true}));
        }
        else{
          setErrors((prev)=> ({...prev, purpose: false}));
        }
        break;
      
        case 'studio':
          setForm((prev)=> ({...prev, studio: value}));
          if(!value)
          {
            setErrors((prev)=> ({...prev, studio: true}));
          }
          else{
            setErrors((prev)=> ({...prev, studio: false}));
          }
        break;

        case 'bath':
          setForm((prev)=> ({...prev, bath: value}));
          if(!value)
          {
            setErrors((prev)=> ({...prev, bath: true}));
          }
          else{
            setErrors((prev)=> ({...prev, bath: false}));
          }
        break;

      case 'propertyType':
        setForm((prev)=> ({...prev, propertyType: value}));
        if(!value)
        {
          setErrors((prev)=> ({...prev, propertyType: true}));
        }
        else{
          setErrors((prev)=> ({...prev, propertyType: false}));
        }
      break;

      case 'category':
        setForm((prev)=> ({...prev, category: value}));
        if(!value)
        {
          setErrors((prev)=> ({...prev, category: true}));
        }
        else{
          setErrors((prev)=> ({...prev, category: false}));
        }
      break;

      case 'status':
        setForm((prev)=> ({...prev, status: value}));
        if(!value)
        {
          setErrors((prev)=> ({...prev, status: true}));
        }
        else{
          setErrors((prev)=> ({...prev, status: false}));
        }
      break;

      case 'startingPrice':
        setForm((prev)=> ({...prev, startingPrice: value}));
        if(!value)
        {
          setErrors((prev)=> ({...prev, startingPrice: true}));
        }
        else{
          setErrors((prev)=> ({...prev, startingPrice: false}));
        }
      break;

      case 'location':
        setForm((prev)=> ({...prev, location: value}));
        if(!value)
        {
          setErrors((prev)=> ({...prev, location: true}));
        }
        else{
          setErrors((prev)=> ({...prev, location: false}));
        }
      break;

      case 'tagLine':
        setForm((prev)=> ({...prev, tagLine: value}));
        if(!value)
        {
          setErrors((prev)=> ({...prev, tagLine: true}));
        }
        else{
          setErrors((prev)=> ({...prev, tagLine: false}));
        }
      break;

      case 'roiDescription':
        setForm((prev)=> ({...prev, roiDescription: value}));
        if(!value)
        {
          setErrors((prev)=> ({...prev, roiDescription: true}));
        }
        else{
          setErrors((prev)=> ({...prev, roiDescription: false}));
        }
      break;

      case 'overviewDescription':
        setForm((prev)=> ({...prev, overviewDescription: value}));
        if(!value)
        {
          setErrors((prev)=> ({...prev, overviewDescription: true}));
        }
        else{
          setErrors((prev)=> ({...prev, overviewDescription: false}));
        }
      break;

      case 'gallery':
        const files = inputFile.files;
        const fileNames = [];
        let errorDetected = false;
        const checkDimensions = (file) => 
        {
            return new Promise((resolve) => 
            {
              const reader = new FileReader();
              reader.onload = function (e) 
              {
                    const img = new Image();
                    img.onload = function () 
                    {
                      if (img.width > 1024 || img.height > 800) 
                      {
                      errorDetected = true;
                      }
                      resolve();
                    }
                    img.src = e.target.result;
              }
              reader.readAsDataURL(file);
            });
        }
      
        const handleImages = async () => 
        {
            const filePromises = Array.from(files).map(async (file) => {
              fileNames.push(file.name);
              await checkDimensions(file);
            });
        
            await Promise.all(filePromises);
              if (errorDetected) 
              {
                setErrors((prev)=> ({...prev , gallery: true}))
                setForm((prev)=> ({...prev , gallery: []}))
                setFileName((prev)=> ({...prev , gallery:[]}))
              } 
              else 
              {
                setErrors((prev)=> ({...prev , gallery: false}))
                setForm((prev)=> ({...prev , gallery: files}))
                setFileName((prev)=> ({...prev , gallery: fileNames}))
              }
                };
              
                if (!files || files.length <= 0) 
                {
                  setErrors((prev)=> ({...prev , gallery: true}))
                } 
                else 
                {
                  handleImages();
                }
                break;
      
      case 'mainImage':
          if (inputFile.files.length > 0) {
            const file = inputFile.files[0];
            const fileName = file.name;
            const reader = new FileReader();
            reader.onload = function (event) 
            {
              const img = new Image();
              img.src = event.target.result;
              img.onload = function () 
            {
                if (img.width > 800 || img.height > 800) 
                {
                  setErrors((prev)=> ({...prev , mainImage: true}))
                  return;
                } 
                else 
                {
                  setErrors((prev)=> ({...prev , mainImage: false}))
                  setForm((prev)=> ({...prev , mainImage: file}))
                  setFileName((prev)=> ({...prev , mainImage: fileName}))
                }
            }
            }
            reader.readAsDataURL(file);
          } 
          else 
          {
            setErrors((prev)=> ({...prev , mainImage: true}))
          }
      break;  
      default:
        break;
      }
      }


    return(
        <div style={{width: '80%', marginLeft:'auto'}}
        className="bg-white p-5 d-flex flex-column gap-5">
                <div className="d-flex flex-column gap-2">
                    <h1 className=" text-center font-color-primary fw-semibold fs-3 m-0">Listing <span className="font-color-secondary"> Form</span></h1>
                    <p className="font-color-light fw-regular px-2 px-md-5 text-center fs-mobile">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida vitae velit ut fringilla.
                        Cras non leo luctus, pharetra turpis nec, suscipit sem
                    </p>
                </div>
        <form onSubmit={submitFormHandler}
        className="rounded text-center d-flex flex-column align-items-center gap-4">
           <div className="d-flex flex-column align-items-start w-100">
        <label className="font-color-primary fw-medium fs-mobile">Enter Url</label>
        <input 
                onChange={handleInputChange}
                value={form.url}
                name="url"
                type="text" 
                className={`${errors.url ? 'border-red' : 'border-black'} rounded px-1 px-md-3 py-2 fs-mobile w-100`}
                />
        </div>
        <div className="d-flex flex-column align-items-start w-100">
        <label className="font-color-primary fw-medium fs-mobile">Enter Title</label>
        <input 
                onChange={handleInputChange}
                value={form.title}
                name="title"
                type="text" 
                className={`${errors.title ? 'border-red' : 'border-black'} rounded px-1 px-md-3 py-2 fs-mobile w-100`}
                />
        </div>
        <div className="d-flex flex-column align-items-start w-100">
        <label className="font-color-primary fw-medium fs-mobile">Enter Meta Keywords</label>
        <input 
                onChange={handleInputChange}
                value={form.metaKeyword}
                name="metaKeyword"
                type="text"
                onKeyPress={(e) => {
                  if (!/^[A-Za-z\s]$/.test(e.key)) {
                      e.preventDefault();
                  }}} 
                className={`${errors.metaKeyword ? 'border-red' : 'border-black'} rounded px-1 px-md-3 py-2 fs-mobile w-100`}
                />
        </div>

        <div className="d-flex flex-row w-100 align-items-center gap-3">
        <div className="d-flex flex-column align-items-start w-100">
        <label className="font-color-primary fw-medium fs-mobile">Select Studio number</label>
        <select value={form.studio} name="studio" onChange={handleInputChange}
         className={`${errors.studio ? 'border-red' : 'border-black'} rounded px-1 px-md-3 py-2 fs-mobile w-100`}>
            {[1,2,3,4,5,6].map((number,index)=>(
             <option key={index} value={number} >{number}</option>
            ))}
        </select>
        </div>

        <div className="d-flex flex-column align-items-start w-100">
        <label className="font-color-primary fw-medium fs-mobile">Select Bath number</label>
        <select value={form.bath} name="bath" onChange={handleInputChange}
        className={`${errors.bath ? 'border-red' : 'border-black'} rounded px-1 px-md-3 py-2 fs-mobile w-100`}>
            {[1,2,3,4,5,6].map((number,index)=>(
             <option key={index} value={number} >{number}</option>
            ))}
        </select>
        </div>
        </div>
        
        {/* Meta Description and Image */}
        <div className="d-flex flex-row w-100 align-items-start gap-3">
        <div className="d-flex flex-column align-items-start w-100">
        <label className="font-color-primary fw-medium fs-mobile">Enter Meta Description</label>
        <textarea 
                rows='3'
                onChange={handleInputChange}
                value={form.metaDescription}
                name="metaDescription"
                className={`${errors.metaDescription ? 'border-red' : 'border-black'} rounded px-1 px-md-3 py-2 fs-mobile w-100`}
                />
        </div>

              <div  
                className="d-flex flex-column align-items-start rounded w-100 h-100">
                <label className="font-color-primary fw-medium fs-mobile">Upload Meta Image</label>
                <div onClick={() => document.getElementById('metaImage').click()}
                className={`${errors.metaImage? 'border-red':'border-black'} rounded d-flex flex-row align-items-center justify-content-around py-1 gap-2 w-100 gap-0`}>
                <label className="font-color-primary text-start fw-semibold fs-para">{fileName.metaImage? fileName.metaImage : 'Image Name'}</label>
                <img src={addFile} alt="addFile-icon" width='30' />
                <input style={{display: 'none'}}
                name="metaImage"
                type="file"
                accept="image/*"
                id='metaImage' 
                onChange={handleInputChange}
                />
                </div>
                <p className="fs-para fw-medium font-color-secondary">
                  (Image file dimension should be less than 300*300)</p>
                </div>
        </div>

        <div className="d-flex flex-row w-100 align-items-center gap-3">
        <div className="d-flex flex-column align-items-start w-100">
        <label className="font-color-primary fw-medium fs-mobile">Select Purpose</label>
        <select value={form.purpose} name="purpose" onChange={handleInputChange}
         className={`${errors.purpose ? 'border-red' : 'border-black'} rounded px-1 px-md-3 py-2 fs-mobile w-100`}>
            <option value="Buy" >Buy</option>
            <option value="Rent" >Rent</option>
        </select>
        </div>

        <div className="d-flex flex-column align-items-start w-100">
        <label className="font-color-primary fw-medium fs-mobile">Select Property Type</label>
        <select value={form.propertyType} name="propertyType" onChange={handleInputChange}
        className={`${errors.propertyType ? 'border-red' : 'border-black'} rounded px-1 px-md-3 py-2 fs-mobile w-100`}>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Land">Land</option>
            <option value="Multiple Units">Multiple Units</option>
        </select>
        </div>
        </div>
        {/* ............... */}
        <div className="d-flex flex-row w-100 align-items-center gap-3">
        <div className="d-flex flex-column align-items-start w-100">
        <label className="font-color-primary fw-medium fs-mobile">Select Category</label>
        <select value={form.category} name="category" onChange={handleInputChange}
        className={`${errors.category ? 'border-red' : 'border-black'} rounded px-1 px-md-3 py-2 fs-mobile w-100`}>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="Townhouse">Townhouse</option>
            <option value="Penthouse">Penthouse</option>
            <option value="Residential Bulding">Residential Bulding</option>
            <option value="Residential Floor">Residential Floor</option>
            <option value="Villa Compound">Villa Compound</option>
        </select>
        </div>
        <div className="d-flex flex-column align-items-start w-100">
        <label className="font-color-primary fw-medium fs-mobile">Select Status</label>
        <select value={form.status} name="status" onChange={handleInputChange}
        className={`${errors.status ? 'border-red' : 'border-black'} rounded px-1 px-md-3 py-2 fs-mobile w-100`}>
            <option value="Ready">Ready</option>
            <option value="Off Plan">Off Plan</option>
        </select>
        </div>
        </div>
        {/* ..................... */}
        <div className="d-flex flex-row w-100 align-items-center gap-3">
        <div className="d-flex flex-column align-items-start w-100">
                <label className="font-color-primary fw-medium fs-mobile">Enter Starting Price (in AED)</label>
                <input 
                onChange={handleInputChange}
                value={form.startingPrice}
                name="startingPrice"
                type="text" 
                className={`${errors.startingPrice ? 'border-red' : 'border-black'} rounded px-1 px-md-3 py-2 fs-mobile w-100`}
                />
                 <p className="fs-para fw-medium py-1 font-color-secondary">
                  (Value can be in K and M)</p>
                </div>

                <div className="d-flex flex-column align-items-start w-100">
                <label className="font-color-primary fw-medium fs-mobile">Enter Location</label>
                <input 
                onChange={handleInputChange}
                value={form.location}
                name="location"
                type="text" 
                className={`${errors.location ? 'border-red' : 'border-black'} rounded px-1 px-md-3 py-2 fs-mobile w-100`}
                />
                 <p className="fs-para fw-medium py-1 font-color-secondary">
                  (Enter google map location here)</p>
                </div>
        </div>
        {/* ......... */}

        <div className="d-flex flex-row w-100 align-items-center gap-3">
        <div className="d-flex flex-column align-items-start w-100">
                <label className="font-color-primary fw-medium fs-mobile">Enter Tag Line</label>
                <input 
                onChange={handleInputChange}
                value={form.tagLine}
                name="tagLine"
                type="text" 
                className={`${errors.tagLine ? 'border-red' : 'border-black'} rounded px-1 px-md-3 py-2 fs-mobile w-100`}
                />
                 <p className="fs-para fw-medium py-1 font-color-secondary">
                  (like one studio with one bath etc)</p>
                </div>

                <div className="d-flex flex-column align-items-start w-100">
                <label className="font-color-primary fw-medium fs-mobile">Enter ROI Description</label>
                <input 
                onChange={handleInputChange}
                value={form.roiDescription}
                name="roiDescription"
                type="text" 
                className={`${errors.roiDescription ? 'border-red' : 'border-black'} rounded px-1 px-md-3 py-2 fs-mobile w-100`}
                />
                 <p className="fs-para fw-medium py-1 font-color-secondary">
                  like ( Magnificent View, 8.33% Net Roi ) etc </p>
                </div>
        </div>
         {/* ........ */}
         <div className="d-flex flex-column align-items-start gap-2 w-100">
                <label className="font-color-primary fw-semibold fs-mobile">Enter Overview Description</label>
                <textarea
                onChange={handleInputChange}
                value={form.overviewDescription}
                name="overviewDescription"
                rows='8'
                className={`${errors.overviewDescription ? 'border-red' : 'border-black'} rounded bg-white px-1 px-md-3 py-2 fs-mobile w-100 h-100`}
                onKeyPress={(e) => {
                  if (!/^[A-Za-z\s]$/.test(e.key)) {
                      e.preventDefault();
                  }
                }}
                />
        </div>
        {/* Images field */}
                <div className="d-flex flex-row align-items-start gap-3 w-100">
                <div onClick={() => document.getElementById('galleryFile').click()}
                className={`${errors.gallery ? 'border-red' : 'border-black'} d-flex flex-column align-items-center justify-content-center rounded p-2 h-100 w-100`}>
                <div className="d-flex flex-row align-items-center justify-content-around w-100">
                <label className="font-color-light text-start fw-semibold fs-mobile">Upload Gallery Images</label>
                <img src={addFile} alt="addFile-icon" width='30' />
                <input style={{display: 'none'}}
                onChange={handleInputChange}
                name="gallery"
                type="file"
                accept="image/*"
                id='galleryFile' 
                multiple
                />
                </div>
                <p className="fs-para fw-medium py-1 font-color-secondary">
                  (Image file dimension should be less than 1024*800)</p>
                 <div className="d-flex flex-column align-items-start">
                {fileName.gallery.map((name, index) => (
                <div key={index} className="fs-para fw-semibold font-color-primary">{name}</div>
                 ))}
                </div>
                </div>
                <div  onClick={() => document.getElementById('mainImage').click()}
                className={`${errors.mainImage? 'border-red':'border-black'} d-flex flex-column align-items-center justify-content-center rounded p-2 w-100 h-100`}>
                <div className="d-flex flex-row align-items-center justify-content-around gap-2 w-100 gap-0">
                <label className="font-color-light text-start fw-semibold fs-mobile">Upload Main Image</label>
                <img src={addFile} alt="addFile-icon" width='30' />
                <input style={{display: 'none'}}
                name="mainImage"
                type="file"
                accept="image/*"
                id='mainImage' 
                onChange={handleInputChange}
                />
                </div>
                <p className="fs-para fw-medium py-1 font-color-secondary">
                  (Image file dimension should be less than 800*800)</p>
                <div className="fs-para fw-semibold font-color-primary">{fileName.mainImage}</div>
                </div>
                </div>
          
        <button className="button-hover-primary px-5 py-3 rounded w-50 text-white fw-bold fs-para background-color-primary border-0">NEXT</button>
        </form>
        {showSuccessForm && <SuccessForm mainText='Your details has been added'
        onClick={()=> setShowSuccessForm(false)}/>}
        </div>
       )}
       export default ListingForm;