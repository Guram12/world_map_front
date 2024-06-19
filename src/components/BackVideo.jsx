import React, { useEffect, useRef } from "react";
import "../styles/BckVideo.css";

const BackgroundVideo = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.removeAttribute("controls");
      videoElement.blur(); // Ensure the video does not focus on load
    }
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      className="background-video"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
