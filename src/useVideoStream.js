import { useEffect } from "react";

export function useVideoStream(videoRef) {
  useEffect(() => {
    if (!videoRef || !videoRef.current) return;

    const getVideoStream = async () => {
      try {
        if(!window.streams){
            window.streams = [];
        }
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        window.streams.push(stream)
      } catch (error) {
        alert(`Error accessing video: ${error.message}`);
      }
    };

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      getVideoStream();
    } else {
      alert("Your browser does not support getUserMedia");
    }

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [videoRef]);
}
