import React, { useEffect, useRef } from "react";

const BackgroundVideo = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.removeAttribute("controls"); // Ensure controls attribute is removed
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
      controls={false} // This should prevent the attribute from being added
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
