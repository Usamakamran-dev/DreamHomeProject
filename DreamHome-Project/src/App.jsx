import { useState } from 'react'
import MainPage from './pages/MainPage';
import 'bootstrap/dist/css/bootstrap.css';
import ProjectCardProvider from './context/ProjectCardProvider';

function App() {
  return (
    <ProjectCardProvider>
      <MainPage></MainPage>
    </ProjectCardProvider>
  )
}

export default App;
