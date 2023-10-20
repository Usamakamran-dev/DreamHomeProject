import React , {useState} from 'react';
import blogData from '../data/blogData';

export const BlogContext=React.createContext();
function BlogProvider(props){
    const [BlogDetails,setBlogDetails]=useState(blogData);
    return(
     <BlogContext.Provider value={BlogDetails}> 
        {props.children}
     </BlogContext.Provider>
    )}
    export default BlogProvider;