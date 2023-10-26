import React , { useContext , useState } from "react";
import cancelIcon from './../assets/Icons/cancel.svg';
import addFile from './../assets/Icons/add-file.png';
import { MultiFormContext } from "../context/MultiFormProvider";

function ProjectForm2(props){
    const value=useContext(MultiFormContext);
    const [galleryFileNames, setGalleryFileNames] = useState([]);
    const [heroFileName, setHeroFileName] = useState('');
    const [aboutImg, setAboutImg] = useState('');
    const [galleryImg, setGalleryImg] = useState([]);
    const [heroImg, setHeroImg] = useState('');
    const [aboutFileName, setAboutFileName] = useState('');
    
    function submitFormHandler(e){
      e.preventDefault();
      value.setFormIndex(2);
      
    }

      function handleHeroFileChange(event) {
        const input = event.target;
        if (input.files.length > 0) {
            const fileName = input.files[0].name;
            setHeroFileName(fileName)
            setHeroImg(input.files[0]);
        }}

      function handleAboutFileChange(event) {
        const input = event.target;
        if (input.files.length > 0) {
            const fileName = input.files[0].name;
            setAboutFileName(fileName);
            setAboutImg(input.files[0]);
        }}

        const handleGalleryFileChange = (event) => {
          const input = event.target;
          const files = input.files;
          const fileNames = [];
          for (let i = 0; i < files.length; i++) {
              fileNames.push(files[i].name);}
              setGalleryFileNames(fileNames);
              setGalleryImg(files);
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
                <div className="d-flex flex-column align-items-start gap-2">
                <div className="d-flex flex-row align-items-center gap-md-5 gap-0">
                <label style={{width: '15rem'}}
                htmlFor="heroFile" className="font-color-secondary text-start fw-semibold fs-mobile">Select Hero Image</label>
                <img src={addFile} alt="addFile-icon" width='40' />
                <input style={{display: 'none'}}
                type="file" 
                accept="image/*"
                id='heroFile'
                onChange={handleHeroFileChange}
                />
                </div>
                <div style={{ color: 'black' }}>{heroFileName}</div>
                </div>
                {/* About Image */}
                <div className="d-flex flex-column align-items-start gap-2">
                <div className="d-flex flex-row align-items-center gap-md-5 gap-0">
                <label  style={{width: '15rem'}}
                htmlFor="aboutFile" className="font-color-secondary text-start fw-semibold fs-mobile">Select About Image</label>
                <img src={addFile} alt="addFile-icon" width='40' />
                <input style={{display: 'none'}}
                type="file"
                accept="image/*"
                id='aboutFile' 
                onChange={handleAboutFileChange}
                />
                </div>
                <div style={{ color: 'black' }}>{aboutFileName}</div>
                </div>
                {/* Selecting Gallery Image */}
                <div className="d-flex flex-column align-items-start gap-2">
                <div className="d-flex flex-row align-items-center gap-md-5 gap-0">
                <label  style={{width: '15rem'}}
                htmlFor="galleryFile" className="font-color-secondary text-start fw-semibold fs-mobile">Select Gallery Image</label>
                <img src={addFile} alt="addFile-icon" width='40' />
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
                <div key={index} style={{ color: 'black' }}>{fileName}</div>
                 ))}
                </div>
                </div>
                <button className="button-hover-primary px-5 py-3 rounded w-100 text-white fw-bold fs-para background-color-primary border-0">NEXT</button>
                </form>
                </div>
                )}
export default ProjectForm2;