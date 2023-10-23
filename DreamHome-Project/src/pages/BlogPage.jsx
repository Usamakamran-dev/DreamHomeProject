import { useContext, useState , useEffect } from "react";
import { BlogContext } from "../context/BlogProvider";
import { CurrentDataContext } from "../context/CurrentDataProvider";
import { CurrentProjectBlogContext } from "../context/currentProjectBlog";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";
import useShowFooter from "../context/useShowFooter";
import { useNavigate } from "react-router-dom";
import EnquiryTop from '../components/EnquiryTop';
import EnquiryForm from "../forms/EnquiryForm";
import SuccessForm from "../forms/SuccessForm";

function BlogPage(){
  const navigate=useNavigate();
  const showFooter=useShowFooter();
  const BlogDetails = useContext(BlogContext);
  const { setCurrentBlogData } =useContext(CurrentProjectBlogContext);
  const { setShowEnquiryForm,setShowSuccessForm,showEnquiryForm,
  showSuccessForm } = useContext(CurrentDataContext);  
    function currentBlogHandler(currentBlogData,id){
    setCurrentBlogData(currentBlogData);
    navigate(`/blog/:blog${id}`);
    }
  function toggleFormVisibility(isVisible){
    setShowEnquiryForm(isVisible);
    setShowSuccessForm(true);
    }
    useEffect(() => { window.scrollTo(0, 0);}, []);

    return(
        <div className="px-2 px-md-5 py-5 d-flex flex-column align-items-center gap-5 overflow-hidden">
          <div className="d-flex flex-column align-items-center">           
           <h1 className="font-color-primary fw-bold fs-1">OUR <span className="font-color-secondary">BLOGS</span></h1>
           <p className="font-color-light fw-regular px-5 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu nisi quis urna imperdiet vehicula. 
            Ut interdum dignissim dui. Suspendisse nunc nunc, ornare in dignissim in, efficitur vitae nisl</p>
          </div>
        <div className="row row-cols-1 row-cols-md-3 gy-5">
        {BlogDetails.map((array, index) => (
        <div className="col" key={index}>
        <BlogCard onClick={()=>currentBlogHandler(array,array.BlogHeading) }
         heading={array.BlogHeading} source={array.BlogSource}
        date={array.BlogDate} image={array.BlogImage} />
        </div>
        ))}
        </div>
        {showFooter && <Footer show={showFooter} />}
        {showEnquiryForm && <EnquiryForm toggleFormVisibility={toggleFormVisibility} 
        onCancel={()=> setShowEnquiryForm(false)}/>}
        {showSuccessForm && ( <SuccessForm onClick={()=> setShowSuccessForm(true)}/> )}
        <EnquiryTop onClick={(setShowEnquiryForm)}></EnquiryTop>
        </div>
        )}

       export default BlogPage;