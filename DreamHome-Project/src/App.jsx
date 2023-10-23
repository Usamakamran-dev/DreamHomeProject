import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import ProjectCardProvider from './context/ProjectCardProvider';
import BlogProvider from './context/BlogProvider';
import { RouterProvider } from 'react-router-dom';
import CurrentDataProvider from './context/CurrentDataProvider';
import CountryDataProvider from './context/CountryDataProvider';
import router from './routes/AppRoutes';
import CurrentProjectBlogProvider from './context/currentProjectBlog';

function App() {
  return (
     <CurrentProjectBlogProvider>
       <CountryDataProvider>
         <CurrentDataProvider>
            <BlogProvider>
                 <ProjectCardProvider>
                     <RouterProvider router={router}></RouterProvider>
                 </ProjectCardProvider>
            </BlogProvider>
         </CurrentDataProvider>
        </CountryDataProvider>
        </CurrentProjectBlogProvider>
     )}
     export default App;
