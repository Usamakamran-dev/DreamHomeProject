import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import ProjectCardProvider from './context/ProjectCardProvider';
import BlogProvider from './context/BlogProvider';
import { RouterProvider } from 'react-router-dom';
import router from './routes/AppRoutes';

function App() {
  return (
    <BlogProvider>
    <ProjectCardProvider>
      <RouterProvider router={router}></RouterProvider>
    </ProjectCardProvider>
    </BlogProvider>
  )
}

export default App;
