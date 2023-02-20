import "./QuickIntro.scss";
import React from "react";
import { useState } from "react";
import { BsPlayCircle } from "react-icons/bs";
const QuickIntro = () => {
  const [state, setstate] = useState(false);
  const showVideo = () => {
    setstate(true);
  };
  return (
    <div className="QuickIntro-container">
      <div className="quickintro-matter-container">
        <p className="quickintro-title">HOW IT WORKS</p>
        <h1 className="quickintro-heading">
          <span className="highlight">See for yourself.</span> Quick video
          introduction
        </h1>
        <p className="quickintro-matter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae
          odales lectus, non ultrices nisi. In varius, leo non gravida.
        </p>
      </div>
      <div className="quickintro-video-container">
        {state ? (
          <iframe
            className="video"
            src="https://www.youtube.com/embed/g4n2yVPnQzs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        ) : (
          <div className="play-video-container">
            <BsPlayCircle onClick={showVideo} className='play-button'/>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuickIntro;
