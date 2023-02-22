/* eslint-disable no-unused-vars */
import React from "react";
import { useRef, useState } from 'react';
import '../Quizz/quizz.css';
import useFetch from "../../hooks/useFetch";


function FullScreenVideo({ active, setActive, setPlaying }) {
  const videoRef = useRef(0);
  const [playingFull, setPlayingFull] = useState(false);
  const {innerWidth} = window;


  const { loading, error, bankrupt } = useFetch(`https://lk.randee.ru/api/bankrupt?populate=*`);
  // const { loading, error, bankrupt } = useFetch(`https://randee.ru/api/bankrupt`);
  if (loading) return <p> </p>;
  if (error) return <p> Error  </p>;

  const {_, attributes } = bankrupt;  //все аттрибуты у bankrupt
  const video3 = attributes?.video3; // вывод аттрибут

  const src=`https://randee.ru${video3.data.attributes.url}`;
  // const src=`https://youtu.be/IMow6Ul30hY`;
// {bankrupt.attributes.MainPhone}
  const setClose = () => {
    setActive(false)
    setPlayingFull(false);
    videoRef.current.pause();
    document.getElementById('video-block').style.display='none';
  }
  
  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setPlayingFull(true);
      document.querySelector(".controlsIcon-full").style.opacity='0';
    } else if (control === "pause") {
      document.querySelector(".controlsIcon-full").style.opacity='1';
      videoRef.current.pause();
      setPlayingFull(false);
    }
  };
  return (
    innerWidth > 940 && 
    <div className={active? "fullVideo show" : "fullVideo"}>
      <div className="fullVideo___window">
        <div 
          className="fullVideo___window__close"
          onClick={()=> setClose()}
          >
          <span></span>
          <span></span>
        </div>
        <div>

        <video
          poster="../../../public/img/VideoLogo.png"
          ref={videoRef}
          allowFullScreen
          className="video-full"
          type="video/mp4"
        ><source src={src} type="video/mp4" />
        
        </video>

        <div className="controlsContainer-full">
          <div className="controls-full">
            {playingFull ? (
              <div
                onClick={() => videoHandler("pause")}
                className="controlsIcon-full pause"
                alt=""
              />
            ) : (
              <div
                onClick={() => videoHandler("play")}
                className="controlsIcon-full play"
                alt=""
              />
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FullScreenVideo;