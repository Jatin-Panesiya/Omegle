import React from "react";

const VideoPlayer = ({ stream }) => {
  return (
    <div>
      <video ref={videoRef} autoPlay playsInline />
    </div>
  );
};

export default VideoPlayer;
