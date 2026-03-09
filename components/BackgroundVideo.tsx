import React from "react";

const BackgroundVideo = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
    >
      {" "}
      <source src="/background_vid.mp4" type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
