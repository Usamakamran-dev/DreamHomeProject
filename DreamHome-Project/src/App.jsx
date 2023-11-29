import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './pages/Custom.css';
import ProjectCardProvider from './context/ProjectCardProvider';
import BlogProvider from './context/BlogProvider';
import { RouterProvider } from 'react-router-dom';
import CurrentDataProvider from './context/CurrentDataProvider';
import CountryDataProvider from './context/CountryDataProvider';
import router from './routes/AppRoutes';
import CurrentProjectBlogProvider from './context/CurrentProjectBlog';
import MultiFormProvider from './context/MultiFormProvider';
import ListingCardProvider from './context/ListingCardProvider';
import { trackPageView } from './components/PageCount';

function App() {
  useEffect(() => {
    trackPageView();
  }, []);
  return (
  <ListingCardProvider>
   <MultiFormProvider>
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
        </MultiFormProvider>
   </ListingCardProvider>
     )}
     export default App;
