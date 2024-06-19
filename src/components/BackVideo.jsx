import React, { useEffect } from "react";
import "../styles/BckVideo.css";

const BackgroundVideo = ({ src }) => {
  useEffect(() => {
    const videoElement = document.querySelector(".background-video");
    if (videoElement) {
      videoElement.blur();
    }
  }, []);

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="background-video"
      controls={false}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
