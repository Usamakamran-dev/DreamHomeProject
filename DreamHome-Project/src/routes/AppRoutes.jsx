import MainPage from "../pages/MainPage";
import ParentElement from "./ParentElement";
import ProjectDetailPage from "../pages/ProjectDetailPage";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import {createBrowserRouter,RouterProvider} from "react-router-dom";

 export const router=createBrowserRouter([
    {path:"/", element: <ParentElement/> ,
     children:[
        {index:true , element: <MainPage/>},
        {path:"/projects", element: <ProjectDetailPage/>},
        {path:"/blog", element: <Blog/>},
        {path:"/contact", element: <Contact/>}
     ]},
     {path:"*", element: <p className="fs-1 fw-bold text-center p-5 text-danger">THERE IS AN UNKNOWN ERROR</p>}
   
])

export default router;