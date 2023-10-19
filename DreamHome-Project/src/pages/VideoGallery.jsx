import React, { useState,useEffect } from 'react';
import YouTube from 'react-youtube';
import Footer from '../components/Footer';
import useShowFooter from '../context/useShowFooter';
import EnquiryTop from '../components/EnquiryTop';

function VideoGallery() {
const [videos, setVideos] = useState([]);
const videosRaw=['hJDWRiw2fVw','xWfb0-S9cfE','YJ1BY4yO9Vg','VEsiaN6dGjU','IHmIg8uOdMU',
'Atu_hJPZjxY','8e_gYbiQZPE','Su3X7fvw4QY','UlaWYj2dpd8','nSiZv4EUCDw','toHVZ1OERjU','kNW9c36SHv0',
'udOvDSbKCaE','-sm45pAPkpc','5Utjvyb7KM4','eRPIDLoA9Mc','qiJF-Pdl3Ug','f7zcKawYZoI','ATP348Y7Nto',
'miQH-tq3S50','oczOZrmbQFg','c7rgMYlEb2A','sgTt4X6MbrQ','sgTt4X6MbrQ','i4_omu5MPQU','07NV3eeUqX8',
'PGiPtoB1puY','PKxU404bYiU','Fgv3ehlKy0E','Fvot_yzzsQk','vtjrL2fOw3c','V741rAqt8EU','_kkoyw3V0yQ',
'lljpmzIfOAA','11DmMYNSo2s','auj_mvqa49I','uYnG_nJFAsI','XqIqlmnDJhc','P_O7NxbGEUs','ZpgWboBx0r0']
const showFooter=useShowFooter();
const [showEnquiryForm, setShowEnquiryForm] = useState(false);
const enquiryFormHandler = () => { setShowEnquiryForm(true) }
const cancelEnquiryForm = () => { setShowEnquiryForm(false) }
  const opts = {
    width: '100%', 
    height: '250',
    playerVars: {
      autoplay: 0,
    },
  };
  useEffect(() => { window.scrollTo(0, 0);}, []);
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

  return (
    <div className="bg-white d-flex flex-column align-items-center gap-2 py-5 px-2 px-md-4">
      <h1 className="font-color-primary fw-bold fs-1">
        VIDEO <span className="font-color-secondary">GALLERY</span>
      </h1>
      <p className="font-color-light fw-medium px-5 text-center">
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
      </p>
      <div className="row row-cols-1 row-cols-md-3 justify-content-center p-5 m-0">
        {videosRaw.map((arr, index) => (
          <div className="col card-hover p-4 m-0 youtube-video-container" key={index}>
            <YouTube videoId={arr} opts={opts}/>
          </div>
        ))}
      </div>
      {showFooter && <Footer show={showFooter} />}
      {showEnquiryForm && <EnquiryForm  onCancel={cancelEnquiryForm}/>}
      <EnquiryTop onClick={enquiryFormHandler}></EnquiryTop>
    </div>
  );
}

export default VideoGallery;
