import React, { Suspense, lazy } from 'react';
const MainPage = lazy(() => import('../pages/MainPage'));
const ParentElement = lazy(() => import('./ParentElement'));
const ProjectDetailPage = lazy(() => import('../pages/ProjectDetailPage'));
const BlogDetailPage = lazy(() => import('../pages/BlogDetailPage'));
const Contact = lazy(() => import('../pages/Contact'));
const ProjectPage = lazy(() => import('../pages/ProjectPage'));
const BlogPage = lazy(() => import('../pages/BlogPage'));
const Login = lazy(() => import('../pages/Login'));
const Residential = lazy(() => import('../pages/Residential'));
const VideoGallery = lazy(() => import('../pages/VideoGallery'));
const MultiStepForm=lazy(()=> import('../pages/MultiStepForm'));
const ResidentialDetail=lazy(() => import('../pages/ResidentialDetail'));
import LoadingSpinner from '../components/LoadingSpinner';
import { createBrowserRouter } from "react-router-dom";

export const router=createBrowserRouter([
    {path:"/login", element: <Suspense fallback={<LoadingSpinner/>}> <Login/> </Suspense> },
    {path:"/", element: <Suspense fallback={<LoadingSpinner/>}><ParentElement/></Suspense> ,
     children:[
        {index:true , 
        element: <Suspense fallback={<LoadingSpinner/>}> <MainPage/> </Suspense>},

        {path:"/projects",
        element: <Suspense fallback={<LoadingSpinner/>}> <ProjectPage/> </Suspense>},

        {path:"/blogs",
        element: <Suspense fallback={<LoadingSpinner/>}> <BlogPage/> </Suspense>},

        {path:"/project/:Id", 
        element: <Suspense fallback={<LoadingSpinner/>}> <ProjectDetailPage/> </Suspense>},

        {path:"/blog/:Id", 
        element: <Suspense fallback={<LoadingSpinner/>}> <BlogDetailPage/> </Suspense>},

        {path:"/contact", 
        element: <Suspense fallback={<LoadingSpinner/>}> <Contact/> </Suspense>},

        {path:"/videogallery", 
        element: <Suspense fallback={<LoadingSpinner/>}> <VideoGallery/> </Suspense>},

        {path:"/residential", 
        element: <Suspense fallback={<LoadingSpinner/>}> <Residential/> </Suspense>},

        {path:"/residential/:Id", 
        element: <Suspense fallback={<LoadingSpinner/>}> <ResidentialDetail/> </Suspense>},

        {path:"/projectForm", 
        element: <Suspense fallback={<LoadingSpinner/>}> <MultiStepForm/> </Suspense>} 
        ]},
        {path:"*", element: <p className="fs-1 fw-bold text-center p-5 text-danger">THERE IS AN UNKNOWN ERROR</p>}
        ])
        export default router;