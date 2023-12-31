import React from "react";
import useVideoCallTest from "@/useVideoCallTest";

const VideoCallComponent = ({ roomId }) => {
  const { localVideoRef, remoteVideoRef } = useVideoCallTest(roomId);

  return (
    <div>
      <h1>Random Video Call</h1>
      <div>
        <video ref={localVideoRef} autoPlay playsInline muted></video>
        <video ref={remoteVideoRef} autoPlay playsInline></video>
      </div>
    </div>
  );
};

export default VideoCallComponent;
