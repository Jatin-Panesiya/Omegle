import { useEffect, useRef } from "react";
import io from "socket.io-client";

const useVideoCallTest = (roomId) => {
  const socket = useRef(null);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  useEffect(() => {
    socket.current = io("https://random-server-n6sz.onrender.com", {
      forceNew: true,
    });

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        localVideoRef.current.srcObject = stream;

        socket.current.emit("join-room", roomId);

        socket.current.on("user-connected", (userId) => {
          const peerConnection = new RTCPeerConnection();
          stream
            .getTracks()
            .forEach((track) => peerConnection.addTrack(track, stream));

          peerConnection.ontrack = (event) => {
            remoteVideoRef.current.srcObject = event.streams[0];
          };

          peerConnection
            .createOffer()
            .then((offer) => peerConnection.setLocalDescription(offer))
            .then(() => {
              socket.current.emit("offer", offer, userId);
            });
        });
      })
      .catch((error) => console.error("Error accessing media devices:", error));

    return () => {
      socket.current.disconnect();
    };
  }, [roomId]);

  return { localVideoRef, remoteVideoRef };
};

export default useVideoCallTest;
