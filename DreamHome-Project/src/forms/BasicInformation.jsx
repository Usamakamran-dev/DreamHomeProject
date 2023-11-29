import React, { useContext , useState} from "react";
import { MultiFormContext } from "../context/MultiFormProvider";
import addFile from './../assets/Icons/add-file.png';

function BasicInformation(){
    const value=useContext(MultiFormContext);
    const [form,setForm]=useState({
      url: '',
      title:'',
      name:'',
      developer: '',
      paymentTitle: '',
      metaDescription:'',
      metaImage: '',
      metaImageName: '',
      startingPrice:''
    })
    const [errors,setErrors]=useState({
        url: false,
        title: false,
        name: false,
        developer:false,
        paymentTitle: false,
        metaDescription: false,
        metaImage: false,
        startingPrice:false
      })
    
    function submitFormHandler(e){
      e.preventDefault();
      let fieldsToValidate = ['url', 'title', 'paymentTitle', 'name', 'developer', 'metaDescription', 'metaImage', 'startingPrice'];
      let hasError = false;
      fieldsToValidate.forEach((field) => {
        if (!form[field]) 
        {
          setErrors(prevErrors => ({ ...prevErrors, [field]: true }));
          hasError = true;
        } 
        else
        {
          setErrors(prevErrors => ({ ...prevErrors, [field]: false }));
        }
      });
      if(hasError) return
      value.setFormIndex(1);    
      }
    
      const formChangeHandler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        const target=e.target;
        switch(name){
        case 'url':
            setForm((prev)=> ({...prev, url:value}))
            if(!value)
            {
            setErrors((prev)=> ({...prev, url:true}))
            }
            else
            {
            setErrors((prev)=> ({...prev, url:false}))
            }
            break;
        
        case 'title':
            setForm((prev)=> ({...prev, title:value}))
            if(!value)
            {
            setErrors((prev)=> ({...prev, title:true}))
            }
            else
            {
            setErrors((prev)=> ({...prev, title:false}))
            }
        break;

        case 'name':
          setForm((prev)=> ({...prev, name:value}))
          if(!value)
          {
          setErrors((prev)=> ({...prev, name:true}))
          }
          else
          {
          setErrors((prev)=> ({...prev, name:false}))
          }
        break;

        case 'developer':
          setForm((prev)=> ({...prev, developer:value}))
          if(!value)
          {
          setErrors((prev)=> ({...prev, developer:true}))
          }
          else
          {
          setErrors((prev)=> ({...prev, developer:false}))
          }
        break;

        case 'paymentTitle':
          setForm((prev)=> ({...prev, paymentTitle:value}))
          if(!value)
          {
          setErrors((prev)=> ({...prev, paymentTitle:true}))
          }
          else
          {
          setErrors((prev)=> ({...prev, paymentTitle:false}))
          }
        break;

        case 'metaDescription':
          setForm((prev)=> ({...prev, metaDescription:value}))
          if(!value)
          {
          setErrors((prev)=> ({...prev, metaDescription:true}))
          }
          else
          {
          setErrors((prev)=> ({...prev, metaDescription:false}))
          }
        break;

        case 'metaImage':
          if (target.files.length > 0) {
            const file = target.files[0];
            const fileName = file.name;
            const reader = new FileReader();
            reader.onload = function (event) {
              const img = new Image();
              img.src = event.target.result;
              img.onload = function () 
              {
                if (img.width > 500 || img.height > 500) 
                {
                  setErrors((prevErrors) => ({ ...prevErrors, metaImage: true }));
                  return;
                } 
                else
                {
                  setErrors((prevErrors) => ({ ...prevErrors, metaImage: false }));
                  setForm((prev)=> ({...prev,metaImage:file}));
                  setForm((prev)=> ({...prev,metaImageName:fileName}));
                }
              }
            }
            reader.readAsDataURL(file);
            }
            console.log(form.metaImageName);
        break;

        case 'startingPrice':
          setForm((prev)=> ({...prev, startingPrice:value}))
          if(!value)
          {
          setErrors((prev)=> ({...prev, startingPrice:true}))
          }
          else
          {
          setErrors((prev)=> ({...prev, startingPrice:false}))
          }
        break;
        default:
        break;
        }}


    return(
                <form onSubmit={submitFormHandler}
                className="rounded text-center d-flex flex-column align-items-center gap-4 w-100">
                <div className="d-flex flex-column align-items-start w-100">
                <label className="font-color-primary fw-medium fs-mobile">Enter Url</label>
                <input 
                value={form.url}  
                name="url"
                type="text" 
                className={`${errors.url? 'border-red':'border-black'} rounded bg-light px-1 px-md-3 py-2 fs-mobile w-100`}
                onChange={formChangeHandler}
                onKeyPress={(e) => {
                  if (!/^[A-Za-z\s]$/.test(e.key)) {
                      e.preventDefault();
                  }
                }}
                />
                </div>
                {/* Project Title */}
                <div className="d-flex flex-column align-items-start w-100">
                <label className="font-color-primary fw-medium fs-mobile">Enter Project Title</label>
                <input value={form.title}  
                name="title"
                type="text" 
                className={`${errors.title? 'border-red':'border-black'} rounded bg-light px-1 px-md-3 py-2 fs-mobile w-100`}
                onChange={formChangeHandler}
                onKeyPress={(e) => {
                  if (!/^[A-Za-z\s]$/.test(e.key)) {
                      e.preventDefault();
                  }
                }}
               />
                </div>
                 {/* Project Name */}
                 <div className="d-flex flex-column align-items-start w-100">
                <label className="font-color-primary fw-medium fs-mobile">Enter Project Name</label>
                <input value={form.name}  
                name="name"
                type="text" 
                className={`${errors.name? 'border-red':'border-black'} rounded bg-light px-1 px-md-3 py-2 fs-mobile w-100`}
                onChange={formChangeHandler}
                onKeyPress={(e) => {
                  if (!/^[A-Za-z\s]$/.test(e.key)) {
                      e.preventDefault();
                  }
                }}
               />
                </div>
                {/* Developer Name */}
                <div className="d-flex flex-column align-items-start w-100">
                <label className="font-color-primary fw-medium fs-mobile">Enter Developer Name</label>
                <input 
                value={form.developer}  
                name="developer"
                type="text"
                className={`${errors.developer? 'border-red':'border-black'} rounded bg-light px-1 px-md-3 py-2 fs-mobile w-100`}
                onChange={formChangeHandler}
                onKeyPress={(e) => {
                  if (!/^[A-Za-z\s]$/.test(e.key)) {
                      e.preventDefault();
                  }
                }}
               />
                </div>
                {/* Monthly Payment Title */}
                <div className="d-flex flex-column align-items-start w-100">
                <label className="font-color-primary fw-medium fs-mobile">Enter Monthly Payment Title</label>
                <input 
                value={form.paymentTitle}  
                name="paymentTitle"
                type="text" 
                className={`${errors.paymentTitle? 'border-red':'border-black'} rounded bg-light px-1 px-md-3 py-2 fs-mobile w-100`}
                onChange={formChangeHandler}
               />
                </div>
                {/* For meta description and tag */}
                <div className="d-flex flex-row align-items-start gap-3 w-100">
                <div className="d-flex flex-column align-items-start w-100">
                <label className="font-color-primary fw-medium fs-mobile">Meta Description</label>
                <textarea 
                rows='2' 
                value={form.metaDescription}
                name="metaDescription"
                className={`${errors.metaDescription? 'border-red':'border-black'} rounded bg-light px-1 px-md-3 py-2 fs-mobile w-100`}
                onChange={formChangeHandler}
                onKeyPress={(e) => {
                  if (!/^[A-Za-z\s]$/.test(e.key)) {
                      e.preventDefault();
                  }
                }}
                />
                </div>
                {/* Meta Image input box */}
                <div className="d-flex flex-column align-items-start w-100">
                <label className="font-color-primary fw-medium fs-mobile">Select Meta Image</label>
                <div onClick={() => document.getElementById('metaImage').click()}
                className={`${errors.metaImage? 'border-red':'border-black'} bg-light rounded d-flex flex-column align-items-center justify-content-around gap-2 p-1 w-100`}>
                 <div className="d-flex flex-row align-items-center justify-content-around">
                 <label 
                 className="font-color-light text-start fs-mobile"
                 style={{width: '7rem'}}>
                 Select Image
                 </label>
                <img src={addFile} alt="addFile-Icon" width='30'/>
                <input  type="file"    accept="image/*" name='metaImage' id='metaImage' style={{display: 'none'}}
                className={`rounded bg-light px-1 px-md-3 py-2 fs-mobile `}
                onChange={formChangeHandler}
                />
                 </div>
                <div className="fs-para fw-medium font-color-primary">{form.metaImageName}</div>
                </div>
                <p className="fs-para fw-medium py-1 font-color-secondary">(Image file dimension should be less than 500*500)</p>
                </div>
                </div>
                
                <div className="d-flex flex-column align-items-start w-100">
                <label className="font-color-primary fw-medium fs-mobile">Enter Starting Price (in AED)</label>
                <input 
                value={form.startingPrice}
                name="startingPrice"
                type="text" 
                className={`${errors.startingPrice? 'border-red' :'border-black'} rounded bg-light px-1 px-md-3 py-2 fs-mobile w-100`}
                onChange={formChangeHandler}
                />
                 <p className="fs-para fw-medium py-1 font-color-secondary">
                  (Value can be in K and M)</p>
                </div>
                <button className="button-hover-primary px-5 py-3 rounded w-50 text-white fw-bold fs-para background-color-primary border-0">NEXT</button>
                </form>
                )}
                export default BasicInformation;