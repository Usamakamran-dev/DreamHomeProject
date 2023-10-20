import React, { useState,useEffect } from 'react';
import Footer from '../components/Footer';
import useShowFooter from '../context/useShowFooter';
import EnquiryTop from '../components/EnquiryTop';
import EnquiryForm from '../forms/EnquiryForm';
import thumbnailImage from './../assets/Images/thumbnail.png';
import YoutubeModel from '../components/youtubeModel';
import playButton from './../assets/Icons/playButton.png';

function VideoGallery() {
const videos = [
  { title: 'Soul City Ground Breaking & Map Reveal Ceremony', id: 'hJDWRiw2fVw' },
  { title: 'Why You Should Move to Central Park Lahore', id: 'xWfb0-S9cfE' },
  { title: 'Central Park Most Famous Block - A1 Executive', id: 'YJ1BY4yO9Vg' },
  { title: 'Pakistan Real Estate Challenges', id: 'VEsiaN6dGjU' },
  { title: 'Big Update For Central Park Lahore', id: 'IHmIg8uOdMU' },
  { title: 'Best Time To Invest In Pakistan Real Estate', id: 'Atu_hJPZjxY' },
  { title: 'Central Park, Lahore - Where Dream Meets Reality', id: '8e_gYbiQZPE' },
  { title: 'Explore Grand City Kharian', id: 'Su3X7fvw4QY' },
  { title: 'Elevating Office Productivity: A Sizzling Day in Life', id: 'UlaWYj2dpd8' },
  { title: 'CEO of Dream Homes - Talk About Grand City Vehari', id: 'nSiZv4EUCDw' },
  { title: 'Soul City - 3 Marla Plots ', id: 'toHVZ1OERjU' },
  { title: 'Soul City - Largest LDA Approved Society of Lahore', id: 'kNW9c36SHv0' },
  { title: 'Central Park Lahore 5 and 10 Marla On Ground Plots', id: 'udOvDSbKCaE' },
  { title: 'Royal Villas Lahore - Limited 4 Marla Plots', id: '-sm45pAPkpc' },
  { title: 'Commercial Opportunity In DHA Phase 6', id: '5Utjvyb7KM4' },
  { title: 'Eid ul Azha Mubarak 2023', id: 'eRPIDLoA9Mc' },
  { title: 'Grand City Kharian , Burj Block', id: 'qiJF-Pdl3Ug' },
  { title: 'Central Park Housing Society Lahore', id: 'f7zcKawYZoI' },
  { title: 'Best Investment Opportunity in DHA Lahore', id: 'ATP348Y7Nto' },
  { title: 'Annual Iftar 2023 At Defence Raya', id: 'miQH-tq3S50' },
  { title: 'Choti Eid Bari Bachat - 5 Lac Discount', id: 'oczOZrmbQFg' },
  { title: 'DHA Phase 7 - Lowest Price Ever', id: 'c7rgMYlEb2A' },
  { title: 'Royal Residencia | Ramadan Offer | Biggest 4.5 Lac Discount', id: 'sgTt4X6MbrQ' },
  { title: 'Director Sales Soul City | Interview by Dream Homes Marketing', id: 'i4_omu5MPQU' },
  { title: 'Soul City Last Day to Enter Lucky Draw | DA chance to get your plot in A block', id: '07NV3eeUqX8' },
  { title: 'CEO DHM | talks about initiatives of Soul City', id: 'PGiPtoB1puY' },
  { title: 'Need a 5 Marla House in 1 CR budget in Lahore? Invest in Central Park Lahore', id: 'PKxU404bYiU' },
  { title: 'File nhi plot | Central Park Lahore | On ground plots on installments', id: 'Fgv3ehlKy0E' },
  { title: 'New Metro City latest development updates', id: 'Fvot_yzzsQk' },
  { title: 'Central Park Lahore | Prices Increasing | Book before it is too late', id: 'vtjrL2fOw3c' },
  { title: 'Sui Gas Available in Royal Residencia | Main Defence Road Lahore', id: 'V741rAqt8EU' },
  { title: 'Invest today before it is too late | Residential files', id: '_kkoyw3V0yQ' },
  { title: 'Royal Villas Development Update | Royal Residencia Lahore', id: 'lljpmzIfOAA' },
  { title: 'Investment Opportunities by Dream Homes Marketing ', id: '11DmMYNSo2s' },
  { title: 'Soul City Lahore | Biggest LDA Approved housing project | Main Jia Bagga road Lahore', id: 'auj_mvqa49I' },
  { title: 'Soul CIty Lahore | Site Visit | Biggest LDA Approved Housing Project', id: 'uYnG_nJFAsI' },
  { title: 'Soul City | Biggest LDA Approved Housing Project On Jia Bagga Road', id: 'XqIqlmnDJhc' },
  { title: 'Biggest Residential Project Of Lahore | Soul City | Coming Soon', id: 'P_O7NxbGEUs' },
  { title: 'Royal Residencia Site Tour By Dream Homes Marketing', id: 'ZpgWboBx0r0' },
  { title: 'Central Park | A1 Executive Block | On Ground Plots | Dream Homes Marketing', id: 'CMXzZkStWgs' }
];

const showFooter = useShowFooter();
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [selectedVideo,setSelectedVideo]=useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [activeButton, setActiveButton] = useState(1);
  useEffect(() => { window.scrollTo(0, 0) }, [currentPage]);
  const enquiryFormHandler = () => { setShowEnquiryForm(true) }
  const cancelEnquiryForm = () => { 
    setShowEnquiryForm(false)
    setSelectedVideo(false);
  }
  const videosPerPage = 9;
  const totalPages = Math.ceil(videos.length / videosPerPage);
  const startIndex = (currentPage - 1) * videosPerPage;
  const endIndex = startIndex + videosPerPage;
  const visibleVideos = videos.slice(startIndex, endIndex);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    setActiveButton(newPage); 
    window.scrollTo(0, 0);}
    const youtubeVideoHandler=(currentVideo)=>{
      setSelectedVideo(currentVideo);
    }

  return (
    <div className="bg-white d-flex flex-column align-items-center gap-0 gap-md-2 py-5 px-0 px-md-4">
      <h1 className="font-color-primary fw-bold fs-1">
        VIDEO <span className="font-color-secondary">GALLERY</span>
      </h1>
      <p className="font-color-light fw-medium px-5 text-center">
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
      </p>
      <div className="row row-cols-1 row-cols-md-3 justify-content-center p-0 p-md-5 m-0">
        {visibleVideos.map((arr, index) => (
          <div className="col d-flex flex-column gap-2 card-hover p-3 m-0" key={index}>
            <div className='position-relative'>
            <img src={thumbnailImage} className="img-fluid thumbnail-size"/>
             <div onClick={()=>youtubeVideoHandler(arr)}
              className='position-absolute d-flex align-items-center justify-content-center top-0 w-100 h-100 bg-black-transparent'>
              <img src={playButton} width='40' height='auto' alt="playbutton-icon" />
             </div>
            </div>
            <h1 className='fs-5 fw-medium text-center text-md-start font-color-primary'>{arr.title}</h1>
          </div>
        ))}
      </div>
      {showFooter && <Footer show={showFooter} />}
      {showEnquiryForm && <EnquiryForm onCancel={cancelEnquiryForm} />}
      {selectedVideo && <YoutubeModel id={selectedVideo.id} onCancel={cancelEnquiryForm}></YoutubeModel>}
      <EnquiryTop onClick={enquiryFormHandler}></EnquiryTop>
      <div className="pagination gap-3">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`border-0 fs-6 py-2 px-3 rounded card-hover ${
              activeButton === i + 1 ? 'background-color-primary text-white' : 'font-color-primary bg-light'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div> </div>
     )}
    export default VideoGallery;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
    // const API_KEY = 'AIzaSyDdkBJEqRZw-UipJ4MIa9aphM6WNdUxeGs';
  // const CHANNEL_ID = 'UCV-cHuYt1R3sB4xIQwa1WHw';
  // useEffect(() => {
  //   const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=30`;
  //   fetch(apiUrl)
  //     .then(response => response.json()) 
  //     .then(data => {
  //       if (data.items) {
  //         const videoIds = data.items.map(item => item.id.videoId);
  //         console.log('Data is:', videoIds);
  //         setVideos(videoIds);
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error fetching channel videos:', error);
  //     });
  // }, []);
    {/* <ReactPlayer
            url='https://www.youtube.com/watch?v=0ZFm-HXKFnQ'
            width='100%'
            controls={true}
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
            }} */}
            {/* /> */}
            
