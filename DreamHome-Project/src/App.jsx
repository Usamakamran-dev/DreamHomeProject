import { useState } from 'react'
import MainPage from './pages/MainPage';
import 'bootstrap/dist/css/bootstrap.css';
import ProjectCardProvider from './context/ProjectCardProvider';
import BlogProvider from './context/BlogProvider';

function App() {
  return (
    <BlogProvider>
    <ProjectCardProvider>
      <MainPage></MainPage>
    </ProjectCardProvider>
    </BlogProvider>
  )
}

export default App;
