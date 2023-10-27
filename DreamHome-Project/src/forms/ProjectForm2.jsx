import React , { useContext , useState } from "react";
import cancelIcon from './../assets/Icons/cancel.svg';
import addFile from './../assets/Icons/add-file.png';
import { MultiFormContext } from "../context/MultiFormProvider";

function ProjectForm2(props){
    const value=useContext(MultiFormContext);
    // File Names
    const [galleryFileNames, setGalleryFileNames] = useState([]);
    const [heroFileName, setHeroFileName] = useState('');
    const [aboutFileName, setAboutFileName] = useState('');
    const [logoFileName, setLogoFileName] = useState('');
    // Files
    const [galleryImg, setGalleryImg] = useState([]);
    const [heroImg, setHeroImg] = useState('');
    const [logoImg, setLogoImg] = useState('');
    const [aboutImg, setAboutImg] = useState('');
    // Errors
    const [logoError, setLogoError] = useState(false);
    const [heroError, setHeroError] = useState(false);
    const [aboutError, setAboutError] = useState(false);
    const [galleryError, setGalleryError] = useState(false);
    
    function submitFormHandler(e){
      e.preventDefault();
      let hasError=false;
      if(!logoImg){
       setLogoError(true);
       hasError=true;
      }
      if(!aboutImg){
        setAboutError(true);
        hasError=true;
      }
      if(!heroImg){
        setHeroError(true);
        hasError=true;
      }
      if(!galleryImg || galleryImg.length<=0){
        setGalleryError(true);
        hasError=true;
      }
      if(hasError) return
      // After Form Submission
       value.setFormIndex(2);
      //  console.log(logoImg);
      //  console.log(aboutImg);
      //  console.log(heroImg);
      //  console.log(galleryImg);
    }

     //.............  onChange Function
     function handleLogoChange(event) {
      const input = event.target;
      if (input.files.length > 0) {
          const fileName = input.files[0].name;
          setLogoFileName(fileName)
          setLogoImg(input.files[0]);
      }
      if(!input){
        setLogoError(true);
       }
       else{
        setLogoError(false);
       }
    }

      function handleHeroFileChange(event) {
        const input = event.target;
        if (input.files.length > 0) {
            const fileName = input.files[0].name;
            setHeroFileName(fileName)
            setHeroImg(input.files[0]);
         }
         if(!input){
          setHeroError(true);
         }
         else{
          setHeroError(false);
         }
        }

      function handleAboutFileChange(event) {
        const input = event.target;
        if (input.files.length > 0) {
            const fileName = input.files[0].name;
            setAboutFileName(fileName);
            setAboutImg(input.files[0]);
        }
        if(!input){
          setAboutError(true);
         }
         else{
          setAboutError(false);
         }
      }

      const handleGalleryFileChange = (event) => {
            const input = event.target;
            const files = input.files;
            const fileNames = [];
          for (let i = 0; i < files.length; i++) {
              fileNames.push(files[i].name);
            }
              setGalleryFileNames(fileNames);
              setGalleryImg(files);
              if(!files || files.length<=0 ){
                setGalleryError(true);
               }
               else{
                setGalleryError(false);
               }
           }
  

    return(
            <div className="bg-white py-3 py-md-4 px-3 px-md-5 rounded d-flex flex-column gap-2">
                <div className="d-flex flex-row align-items-start justify-content-between">
                  <div className="d-flex flex-column align-items-start gap-2">
                  <h1 className="h-mobile fw-bold font-color-primary m-0">STEP 2</h1>
                  <p className="fw-medium font-color-light fs-mobile">Select images*</p>
                  </div>
                  <img onClick={props.onCancel}
                  src={cancelIcon} alt="cancel-icon" width='30' height='auto' className="py-1"/>
                </div>
                {/* Form 2 */}
                <form onSubmit={submitFormHandler}
                className="rounded text-center d-flex flex-column align-items-start gap-4">
                
                <div className="d-flex flex-row align-items-start gap-3">
                <div className={`${logoError? 'border-red':'border-black'} d-flex flex-column align-items-start gap-2  rounded p-2`}>
                <div className="d-flex flex-row align-items-start gap-2">
                <label style={{width: '10rem'}}
                htmlFor="logoFile" className="font-color-secondary text-start fw-semibold fs-mobile">Select Logo</label>
                <img src={addFile} alt="addFile-icon" width='30' />
                <input style={{display: 'none'}}
                type="file" 
                accept="image/*"
                id='logoFile'
                onChange={handleLogoChange}
                />
                </div>
                <div className="fs-para fw-semibold font-color-primary">{logoFileName}</div>
                </div>
                <div className={`${heroError? 'border-red':'border-black'} d-flex flex-column align-items-start gap-2 rounded p-2`}>
                <div className="d-flex flex-row align-items-start gap-2 gap-0">
                <label style={{width: '10rem'}}
                htmlFor="heroFile" className="font-color-secondary text-start fw-semibold fs-mobile">Select Hero Image</label>
                <img src={addFile} alt="addFile-icon" width='30' />
                <input style={{display: 'none'}}
                type="file" 
                accept="image/*"
                id='heroFile'
                onChange={handleHeroFileChange}
                />
                </div>
                <div className="fs-para fw-semibold font-color-primary">{heroFileName}</div>
                </div>
                </div>
                {/* .................... */}
                <div className="d-flex flex-row align-items-start gap-3">
                   {/* Selecting Gallery Image */}
                <div className={`${galleryError? 'border-red':'border-black'} d-flex flex-column align-items-start gap-2 rounded p-2`}>
                <div className="d-flex flex-row align-items-start gap-2 gap-0">
                <label  style={{width: '10rem'}}
                htmlFor="galleryFile" className="font-color-secondary text-start fw-semibold fs-mobile">Select Gallery Image</label>
                <img src={addFile} alt="addFile-icon" width='30' />
                <input style={{display: 'none'}}
                type="file"
                accept="image/*"
                id='galleryFile' 
                multiple
                onChange={handleGalleryFileChange}
                />
                </div>
                 <div className="d-flex flex-column align-items-start">
                {galleryFileNames.map((fileName, index) => (
                <div key={index} className="fs-para fw-semibold font-color-primary">{fileName}</div>
                 ))}
                </div>
                </div>

                {/* About Image */}
                <div className={`${aboutError? 'border-red':'border-black'} d-flex flex-column align-items-start gap-2 rounded p-2`}>
                <div className="d-flex flex-row align-items-start gap-2 gap-0">
                <label  style={{width: '10rem'}}
                htmlFor="aboutFile" className="font-color-secondary text-start fw-semibold fs-mobile">Select About Image</label>
                <img src={addFile} alt="addFile-icon" width='30' />
                <input style={{display: 'none'}}
                type="file"
                accept="image/*"
                id='aboutFile' 
                onChange={handleAboutFileChange}
                />
                </div>
                <div className="fs-para fw-semibold font-color-primary">{aboutFileName}</div>
                </div>
                </div>     
                <button className="button-hover-primary px-5 py-3 rounded w-100 text-white fw-bold fs-para background-color-primary border-0">NEXT</button>
                </form>
                </div>
                )}
export default ProjectForm2;