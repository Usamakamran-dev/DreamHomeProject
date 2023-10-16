import React , {useState} from 'react';
import dummyImage from './../assets/Images/dubaiImage.jpg';

export const BlogContext=React.createContext();
function BlogProvider(props){
    const [BlogDetails,setBlogDetails]=useState([
        {BlogHeading: '1 Dubai ranked as the world’s fourth most active luxury residential market',
        BlogSource: "The National",
         BlogDate: '8 MARCH 2023',
         BlogImage: dummyImage,
         BlogId: '1'},
         {BlogHeading: '2 Dubai ranked as the world’s fourth most active luxury residential market',
        BlogSource: "The National",
         BlogDate: '8 MARCH 2023',
         BlogImage: dummyImage,
         BlogId: '1'},
         {BlogHeading: '3 Dubai ranked as the world’s fourth most active luxury residential market',
        BlogSource: "The National",
         BlogDate: '8 MARCH 2023',
         BlogImage: dummyImage,
         BlogId: '1'},
         {BlogHeading: '4 Dubai ranked as the world’s fourth most active luxury residential market',
        BlogSource: "The National",
         BlogDate: '8 MARCH 2023',
         BlogImage: dummyImage,
         BlogId: '1'},
         {BlogHeading: '5 Dubai ranked as the world’s fourth most active luxury residential market',
        BlogSource: "The National",
         BlogDate: '8 MARCH 2023',
         BlogImage: dummyImage,
         BlogId: '1'},
         {BlogHeading: '6 Dubai ranked as the world’s fourth most active luxury residential market',
         BlogSource: "The National",
         BlogDate: '8 MARCH 2023',
         BlogImage: dummyImage,
         BlogId: '1'}
        ]);

    return(
     <BlogContext.Provider value={BlogDetails}> 
        {props.children}
     </BlogContext.Provider>
    )}

export default BlogProvider;