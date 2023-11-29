import { useContext , useEffect } from "react";
import { BlogContext } from "../context/BlogProvider";
import { CurrentProjectBlogContext } from "../context/CurrentProjectBlog";
import BlogCard from "../components/BlogCard";
import { useNavigate } from "react-router-dom";


function BlogPage(){
  const navigate=useNavigate();
  const BlogDetails = useContext(BlogContext);
  const { updateCurrentBlogData } =useContext(CurrentProjectBlogContext);
  const currentBlogHandler = (currentBlogData,id) => {
      updateCurrentBlogData(currentBlogData);
      navigate(`/blog/${id.split(' ').join('-')}`);
    }
    useEffect(() => { window.scrollTo(0, 0);}, []);

    return(
        <div style={{margin: '4rem auto'}}
        className="px-2 px-md-5 py-5 d-flex flex-column align-items-center gap-2 gap-md-5 overflow-hidden">
            <div className="d-flex flex-column align-items-center">           
                <h1 className="font-color-primary fw-bold h-mobile">OUR 
                  <span className="font-color-secondary"> BLOGS</span>
                </h1>
                <p className="font-color-light fw-regular px-2 px-md-5 text-center fs-mobile">
                Our blogs will keep you abreast on trending norms and features in the real estate landscape of Dubai
                </p>
            </div>
            <div className="row row-cols-1 row-cols-md-3">
              {BlogDetails.map((array, index) => (
                <div className="col p-3" key={index}>
                    <BlogCard onClick={()=>currentBlogHandler(array,array.BlogHeading) }
                    heading={array.BlogHeading} source={array.BlogSource}
                    date={array.BlogDate} image={array.BlogImage} />
                </div>
              ))}
            </div>
        </div>
        )}
        export default BlogPage;