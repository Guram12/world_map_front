import React, { useEffect, useRef } from "react";

const BackgroundVideo = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const playVideo = () => {
      if (videoElement) {
        videoElement.play().catch((err) => {
          console.log("Error attempting to play the video:", err);
        });
      }
    };

    if (videoElement) {
      videoElement.removeAttribute("controls");
      videoElement.muted = true;
      videoElement.play().catch((err) => {
        console.log("Error attempting to play the video:", err);
      });
    }

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        playVideo();
      }
    });

    return () => {
      document.removeEventListener("visibilitychange", playVideo);
    };
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
