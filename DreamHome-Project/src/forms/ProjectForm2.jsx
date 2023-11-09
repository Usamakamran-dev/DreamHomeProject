import React , { useContext , useState, useEffect } from "react";
import addFile from './../assets/Icons/add-file.png';
import { MultiFormContext } from "../context/MultiFormProvider";

function ProjectForm2(){
    const value=useContext(MultiFormContext);
    // File Names
    // const [galleryFileNames, setGalleryFileNames] = useState([]);
    // const [heroFileName, setHeroFileName] = useState('');
    // const [aboutFileName, setAboutFileName] = useState('');
    // const [logoFileName, setLogoFileName] = useState('');
    // Files
    // const [galleryImg, setGalleryImg] = useState([]);
    // const [heroImg, setHeroImg] = useState('');
    // const [logoImg, setLogoImg] = useState('');
    // const [aboutImg, setAboutImg] = useState('');
    // Errors
     // const [logoError, setLogoError] = useState(false);
    // const [heroError, setHeroError] = useState(false);
    // const [aboutError, setAboutError] = useState(false);
    // const [galleryError, setGalleryError] = useState(false);
      // if(!logoImg){
      //  setLogoError(true);
      //  hasError=true;
      // }
      // if(!aboutImg){
      //   setAboutError(true);
      //   hasError=true;
      // }
      // if(!heroImg){
      //   setHeroError(true);
      //   hasError=true;
      // }
      // if(!galleryImg || galleryImg.length<=0){
      //   setGalleryError(true);
      //   hasError=true;
      // }
    useEffect(() => { window.scrollTo(0, 0);}, []);
    const [form, setForm]=useState({
      gallery: [],
      hero: '',
      logo: '',
      about: '',
      broochure:''
    })
    const [fileNames, setFileNames]=useState({
      gallery: [],
      hero: '',
      logo: '',
      about: '',
      brochure: ''
    })
    const [errors, setErrors]=useState({
        gallery: false,
        hero: false,
        logo: false,
        about: false,
        brochure: false
      })

    function submitFormHandler(e){
      e.preventDefault();
      let fieldsToValidate=['gallery','hero','logo','about','brochure'];
      let hasError=false;
      fieldsToValidate.forEach(field => {
        if(!form[field] || form[field].length<=0 )
        {
         setErrors((prev)=> ({...prev, [field]:true}))
         hasError=true
        }
        else
        {
          setErrors((prev)=> ({...prev, [field]:false}))
        }
      });

      if(hasError) return
       const projectImages={
        gallery: form.gallery,
        ProjectImage: form.about,
        ProjectLogo: form.logo,
        BgImage: form.hero
       }
       console.log(projectImages)
       value.setFormIndex(2);
    }

     //.............  onChange Functions
     
     function handleLogoChange(event) {
      const input = event.target;
      if (input.files.length > 0) {
        const file = input.files[0];
        const fileName = file.name;
        const reader = new FileReader();
        reader.onload = function (event) 
        {
          const img = new Image();
          img.src = event.target.result;
          img.onload = function () 
          {
              if (img.width > 500 || img.height > 500)
              {
              setErrors((prev)=> ({...prev, logo: true}))
              return;
              } 
              else
              {
              setErrors((prev)=> ({...prev, logo: false}))
              setForm((prev)=> ({...prev, logo:file}))
              setFileNames((prev)=> ({...prev, logo:fileName}));
              }
          }
        }
           reader.readAsDataURL(file);
           } 
           else
            {
            setErrors((prev)=> ({...prev, logo: true}))
            }
         }
    
    // ........................................

    function handleHeroFileChange(event) {
      const input = event.target;
      if (input.files.length > 0) {
        const file = input.files[0];
        const fileName = file.name;
        const reader = new FileReader();
        reader.onload = function (event)
         {
            const img = new Image();
            img.src = event.target.result;
            img.onload = function () 
          {
              if (img.width > 1080 || img.height > 720) 
              {
              setErrors((prev)=> ({...prev , hero: true}))
              return;
              } 
              else 
              {
              setErrors((prev)=> ({...prev , hero: false}))
              setForm((prev)=> ({...prev , hero: file}))
              setFileNames((prev)=> ({...prev , hero: fileName}))
              }
          }
        }
         reader.readAsDataURL(file);
        } 
        else
        {
          setErrors((prev)=> ({...prev , hero: true}))
        }
      }

    // ........................................

    function handleAboutFileChange(event) {
      const input = event.target;
      if (input.files.length > 0) {
        const file = input.files[0];
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
              setErrors((prev)=> ({...prev , about: true}))
              return;
            } 
            else 
            {
              setErrors((prev)=> ({...prev , about: false}))
              setForm((prev)=> ({...prev , about: file}))
              setFileNames((prev)=> ({...prev , about: fileName}))
            }
        }
        }
        reader.readAsDataURL(file);
      } 
      else 
      {
        setErrors((prev)=> ({...prev , about: true}))
      }
    }
    
      // ........................................

      const handleGalleryFileChange = (event) => {
        const input = event.target;
        const files = input.files;
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
                      if (img.width > 800 || img.height > 800) 
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
                setFileNames((prev)=> ({...prev , gallery: []}))
              } 
              else 
              {
                setErrors((prev)=> ({...prev , gallery: false}))
                setForm((prev)=> ({...prev , gallery: files}))
                setFileNames((prev)=> ({...prev , gallery: fileNames}))
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
      };
      
      // ............................
      
      const handleBrochureChange=(e)=>{
        const input = e.target.files[0];
        const fileName=input.name;
        console.log(input);
        setForm((prev)=>({...prev , brochure: input}))
        setFileNames((prev)=>({...prev , brochure: fileName}))
        if(!input)
        {
          setErrors((prev)=>({...prev , brochure: true}))
        }
        else
        {
          setErrors((prev)=>({...prev , brochure: false}))
        }
      }
      
      return (
                <form onSubmit={submitFormHandler}
                className="rounded text-center d-flex flex-column align-items-center justify-content-around gap-4 h-100">
                <div className="d-flex flex-row align-items-start gap-3 h-100 w-100">
                <div  onClick={() => document.getElementById('logoFile').click()}
                className={`${errors.logo? 'border-red':'border-black'} d-flex flex-column align-items-center justify-content-center gap-1 rounded p-2 w-100 h-100`}>
                <div className="d-flex flex-row align-items-center justify-content-around gap-2 w-100">
                <label className="font-color-light text-start fw-semibold fs-mobile">Upload Logo</label>
                <img src={addFile} alt="addFile-icon" width='30' />
                <input style={{display: 'none'}}
                type="file" 
                accept="image/*"
                id='logoFile'
                onChange={handleLogoChange}
                />
                </div>
                <p className="fs-para fw-medium py-1 font-color-secondary">
                  (Image file dimension should be less than 500*500)</p>
                <div className="fs-para fw-semibold font-color-primary">{fileNames.logo}</div>
                </div>
                <div  onClick={() => document.getElementById('heroFile').click()}
                className={`${errors.hero? 'border-red':'border-black'} d-flex flex-column align-items-center justify-content-center gap-1 rounded p-2 w-100 h-100`}>
                <div className="d-flex flex-row align-items-center justify-content-around gap-2 w-100">
                <label className="font-color-light text-start fw-semibold fs-mobile">Upload Hero Image</label>
                <img src={addFile} alt="addFile-icon" width='30' />
                <input style={{display: 'none'}}
                type="file" 
                accept="image/*"
                id='heroFile'
                onChange={handleHeroFileChange}
                />
                </div>
                <p className="fs-para fw-medium py-1 font-color-secondary">
                  (Image file dimension should be less than 1280 x 720)</p>
                <div className="fs-para fw-semibold font-color-primary">{fileNames.hero}</div>
                </div>
                </div>
                {/* .................... */}
                <div className="d-flex flex-row align-items-start gap-3 h-100 w-100">
                   {/* Selecting Gallery Image */}
                <div onClick={() => document.getElementById('galleryFile').click()}
                className={`${errors.gallery? 'border-red':'border-black'} d-flex flex-column align-items-center justify-content-center rounded p-2 h-100 w-100`}>
                <div className="d-flex flex-row align-items-center justify-content-around w-100">
                <label className="font-color-light text-start fw-semibold fs-mobile">Upload Gallery Images</label>
                <img src={addFile} alt="addFile-icon" width='30' />
                <input style={{display: 'none'}}
                type="file"
                accept="image/*"
                id='galleryFile' 
                multiple
                onChange={handleGalleryFileChange}
                />
                </div>
                <p className="fs-para fw-medium py-1 font-color-secondary">
                  (Image file dimension should be less than 800*800)</p>
                 <div className="d-flex flex-column align-items-start">
                {fileNames.gallery.map((fileName, index) => (
                <div key={index} className="fs-para fw-semibold font-color-primary">{fileName}</div>
                 ))}
                </div>
                </div>

                {/* About Image */}
                <div  onClick={() => document.getElementById('aboutFile').click()}
                className={`${errors.about? 'border-red':'border-black'} d-flex flex-column align-items-center justify-content-center gap-2 rounded p-2 w-100 h-100`}>
                <div className="d-flex flex-row align-items-center justify-content-around gap-2 w-100 gap-0">
                <label className="font-color-light text-start fw-semibold fs-mobile">Upload About Image</label>
                <img src={addFile} alt="addFile-icon" width='30' />
                <input style={{display: 'none'}}
                type="file"
                accept="image/*"
                id='aboutFile' 
                onChange={handleAboutFileChange}
                />
                </div>
                <p className="fs-para fw-medium py-1 font-color-secondary">
                  (Image file dimension should be less than 800*800)</p>
                <div className="fs-para fw-semibold font-color-primary">{fileNames.about}</div>
                </div>
                </div>

                <div  onClick={() => document.getElementById('brochureFile').click()}
                className={`${errors.brochure? 'border-red':'border-black'} d-flex flex-column align-items-center justify-content-center gap-2 rounded p-2 w-50 h-100`}>
                <div className="d-flex flex-row align-items-center justify-content-around gap-2 w-100 gap-0">
                <label className="font-color-light text-start fw-semibold fs-mobile">Upload Brochure</label>
                <img src={addFile} alt="addFile-icon" width='30' />
                <input style={{display: 'none'}}
                type="file"
                accept=".pdf"
                id='brochureFile' 
                onChange={handleBrochureChange}
                />
                </div>
                <div className="fs-para fw-semibold font-color-primary">{fileNames.brochure}</div>
                </div>   
                <button className="button-hover-primary px-5 py-3 rounded w-50 text-white fw-bold fs-para background-color-primary border-0">NEXT</button>
                </form>
                )}
export default ProjectForm2;