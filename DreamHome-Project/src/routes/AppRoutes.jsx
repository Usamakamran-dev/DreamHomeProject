import React, { Suspense, lazy } from 'react';
const MainPage = lazy(() => import('../pages/MainPage'));
const ParentElement = lazy(() => import('./ParentElement'));
const ProjectDetailPage = lazy(() => import('../pages/ProjectDetailPage'));
const BlogDetailPage = lazy(() => import('../pages/BlogDetailPage'));
const Contact = lazy(() => import('../pages/Contact'));
const ProjectPage = lazy(() => import('../pages/ProjectPage'));
const BlogPage = lazy(() => import('../pages/BlogPage'));
const Login = lazy(() => import('../pages/Login'));
const ListingPage = lazy(() => import('../pages/ListingPage'));
const VideoGallery = lazy(() => import('../pages/VideoGallery'));
const MultiStepForm=lazy(()=> import('../pages/MultiStepForm'));
const ListingDetail=lazy(() => import('../pages/ListingDetail'));
const ListingForm=lazy(()=> import('../forms/ListingForm'));
const AdminParent=lazy(() => import('./AdminParent'));
const AdminHome=lazy(() => import('./../pages/AdminHome'));
const AdminProject=lazy(() => import('./../pages/AdminProject'));
const AdminResidency=lazy(() => import('./../pages/AdminResidency'));
import LoadingSpinner from '../components/LoadingSpinner';
import { createBrowserRouter } from "react-router-dom";
import ResidentialSlider from '../components/ResidentialSlider';

export const router=createBrowserRouter([
    {path:"/login", element: <Suspense fallback={<LoadingSpinner/>}> <Login/> </Suspense> },

    {path: "/dashboard",
        element: <Suspense fallback={<LoadingSpinner/>}> <AdminParent/> </Suspense>,
     children:[
        {index: true,
         element: <Suspense fallback={<LoadingSpinner/>}> <AdminHome/> </Suspense>},
        {path:"projectForm", 
         element: <Suspense fallback={<LoadingSpinner/>}> <MultiStepForm/> </Suspense>},
        {path:"listingForm", 
         element: <Suspense fallback={<LoadingSpinner/>}> <ListingForm/> </Suspense>},
         {path:"project", 
         element: <Suspense fallback={<LoadingSpinner/>}> <AdminProject/> </Suspense>},
        {path:"residency", 
         element: <Suspense fallback={<LoadingSpinner/>}> <AdminResidency/> </Suspense>},
     ]},


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

        {path:"/listing", 
        element: <Suspense fallback={<LoadingSpinner/>}> <ListingPage/> </Suspense>},

        {path:"/residentialSlider", 
        element: <Suspense fallback={<LoadingSpinner/>}> <ResidentialSlider/> </Suspense>},

        {path:"/listing/:Id", 
        element: <Suspense fallback={<LoadingSpinner/>}> <ListingDetail/> </Suspense>},
        ]},
        {path:"*", element: <p className="fs-1 fw-bold text-center p-5 text-danger">THERE IS AN UNKNOWN ERROR</p>}
        ])
        export default router;