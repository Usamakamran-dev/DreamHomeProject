import React, { useState,useEffect, useContext} from 'react';
import YoutubeModel from '../components/youtubeModel';
import playButton from './../assets/Icons/playButton.png';
import { CurrentDataContext } from '../context/CurrentDataProvider';
import damacTower from './../assets/Thumbnails/damacCasaTower.png'
import investmentOpportunities from './../assets/Thumbnails/investmentOpportunities.png'
import heartOfEurope from './../assets/Thumbnails/heartOfEurope.png'
import samanaStudios from './../assets/Thumbnails/samanaStudios.png'

function VideoGallery() {
const videos = [
  { title: 'Damac Casa Tower | Coming Soon', id: '99Yq0Vo2vQg' , image: damacTower },
  { title: 'What are the Investment Opportunities in Dubai?', id: 'mwx7xktIS8w', image: investmentOpportunities},
  { title: 'The Heart of Europe in Dubai! | Luxurious Sea View Properties', id: '6OAWTH4Skks' , image: heartOfEurope },
  { title: 'SAMANA - Manhattan | Studio, 1 & 2 Bed Luxurious Apartments with Private Pools', id: 'j5yPJzlKGCE' , image: samanaStudios },
  ];
  const {setShowEnquiryForm} = useContext(CurrentDataContext);
  const [selectedVideo,setSelectedVideo]=useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [activeButton, setActiveButton] = useState(1);
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
    window.scrollTo(0, 0);
  }
  const youtubeVideoHandler=(currentVideo)=>{
    setSelectedVideo(currentVideo);
  }
  useEffect(() => { window.scrollTo(0, 0) }, [currentPage]);

  return (
    <div style={{margin: '4rem auto'}}
    className="bg-white d-flex flex-column align-items-center gap-0 gap-md-2 py-5 px-0 px-md-4">
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
                    <img src={arr.image} className="img-fluid thumbnail-size"/>
                    <div onClick={()=>youtubeVideoHandler(arr)}
                      className='position-absolute d-flex align-items-center justify-content-center top-0 w-100 h-100 bg-black-transparent'>
                      <img src={playButton} width='40' height='auto' alt="playbutton-icon" />
                    </div>
                  </div>
                  <h1 className='fs-5 fw-medium text-center text-md-start font-color-primary'>{arr.title}</h1>
              </div>
          ))}
        </div>
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
        </div>
      {selectedVideo && <YoutubeModel id={selectedVideo.id} onCancel={cancelEnquiryForm}></YoutubeModel>}
      </div>
     )}
     export default VideoGallery;