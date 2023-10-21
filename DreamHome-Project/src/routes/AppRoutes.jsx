import MainPage from "../pages/MainPage";
import ParentElement from "./ParentElement";
import ProjectDetailPage from "../pages/ProjectDetailPage";
import BlogDetailPage from "../pages/BlogDetailPage";
import Contact from "../pages/Contact";
import ProjectPage from "../pages/ProjectPage";
import BlogPage from "../pages/BlogPage";
import Login from "../pages/Login";
import Residential from "../pages/Residential";
import VideoGallery from "../pages/VideoGallery";
import { createBrowserRouter } from "react-router-dom";

export const router=createBrowserRouter([
    {path:"/login", element: <Login/>},
    {path:"/", element: <ParentElement/> ,
     children:[
        {index:true , element: <MainPage/>},
        {path:"/projects",element: <ProjectPage/>},
        {path:"/blogs",element: <BlogPage/>},
        {path:"/project/:projectId", element: <ProjectDetailPage/>},
        {path:"/blog/:blogId", element: <BlogDetailPage/>},
        {path:"/contact", element: <Contact/>},
        {path:"/videogallery", element: <VideoGallery/>},
        {path:"/residential", element: <Residential/>}
     ]},
     {path:"*", element: <p className="fs-1 fw-bold text-center p-5 text-danger">THERE IS AN UNKNOWN ERROR</p>}
])

export default router;