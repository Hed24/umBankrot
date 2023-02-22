/* eslint-disable no-unused-vars */
import { useRef, useState, useEffect } from 'react';
import '../Quizz/quizz.css';
import useFetch from "../../hooks/useFetch";
import axios from 'axios';
import FullScreenVideo from './fullScreenVideo';
import './video.css';





const VideoComponent = (videoElement) => {
  const videoRef = useRef(0);
  const [playing, setPlaying] = useState(true);
  const {innerWidth} = window;
  const [active, setActive] = useState(false);


  const { loading, error, bankrupt } = useFetch(`https://randee.ru/api/bankrupt?populate=*`);
  if (loading) return <p> </p>;
  if (error) return <p> Error  </p>;

  const {_, attributes } = bankrupt;  //все аттрибуты у bankrupt
  const video3 = attributes?.video3; // вывод аттрибут

  const src=`https://randee.ru${video3.data.attributes.url}`;



/////////////////////////////////////////////////////////////////////////

// fetch(src) {
//   this.response
// }

// async function getVideo() {
//   try {
//     const response = await fetch(src);
//     console.log("everything is good boobs")
    
//   } catch (e) {
//     console.log('Не удалось получить данные');
//   }
// }
// getVideo() 

// const showVideo =() => {
const setClose = () => {  
  document.getElementById('video-block').style.display='none';
  setPlaying(false);
  videoRef.current.pause();
}

const videoHandler = (control) => {      
  if (control === "play") {
    console.log('click')
    videoRef.current.play();
    setPlaying(true);
    document.querySelector(".controlsIcon--small").style.opacity='0';     
  } else if (control === "pause") {
    document.querySelector(".controlsIcon--small").style.opacity='0';
    videoRef.current.pause();
    setPlaying(false);
  }
};

const openFullHandler = () => {
  setActive(true);
  setPlaying(false);
  videoRef.current.pause();
  document.querySelector(".video-wrapper").style.opacity='0';

}


    return (
      innerWidth > 940 && 
      <div>
        <FullScreenVideo setActive={setActive} active={active} setPlaying={setPlaying} setClose={setClose} />
        <div className='video-wrapper'>
          <div 
            id="video-close" 
            className="block1__video-block_close"
            onClick={()=> setClose()}
            >
            <span></span>
            <span></span>
          </div>

          <div>
            <video
              poster="../../../public/img/VideoLogo.png"
              loop
              autoPlay
              ref={videoRef}
              muted
              // onCanPlay="this.muted=true"
              className="video"
              type="video/mp4"
            ><source src={src} type="video/mp4" />
            
            </video>
    
            <div className="controlsContainer">
              <div
                onClick={(e) => {openFullHandler()}}
                className="controls">
                <div className='zoom'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>
                </div>
                {playing ? (
                  <img
                    onClick={() => videoHandler("pause")}
                    className="controlsIcon--small"
                    alt=""
                  />
                ) : (
                  <img
                    onClick={() => videoHandler("play")}
                    className="controlsIcon--small"
                    alt=""
                  />
                )}
                </div>
              </div>
          </div>
        </div>
      </div>     
    );
  }
// }
export default VideoComponent;