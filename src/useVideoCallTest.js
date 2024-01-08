import io from "socket.io-client";

const useVideoCallTest = (userId,localVideoRef,remoteVideoRef,socket) => {
  const  configuration = {
    "iceServers": [{
        urls: 'turn:192.248.176.141:3478',
        credential: 'turn',
        username: 'turn'
    }]
  }
  if(userId){
    socket.current = io("http://localhost:3003/", {
      forceNew: true,
    });
    socket.current.on('connect', () => {
      console.log('connected')
    });
    socket.current.on('disconnect', () => {
      console.log('disconnected')
    });
    const peerConnection = new RTCPeerConnection(configuration);
    console.log('Initialize peer connection...')
    
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        localVideoRef.current.srcObject = stream;
        stream
        .getTracks()
        .forEach((track) => {peerConnection.addTrack(track, stream);console.log('Stream added to connection...')});
        
        socket.current.emit("registerUser", userId);

        socket.current.on("userJoined", (userId,partnerId) => {
          if(partnerId){
            peerConnection.ontrack = (event) => {
              remoteVideoRef.current.srcObject = event.streams[0];
            };

            peerConnection
              .createOffer()
              .then((createdOffer) =>{
                    console.log('created offer')
                    peerConnection
                    .setLocalDescription(createdOffer)
                    .then(()=>{
                      console.log('Sending offer ....')
                      socket.current.emit(
                        "offer",
                        createdOffer
                      );
                      peerConnection.onicecandidate = (event) => {
                        if (!event.candidate) return;
                        console.log('Sending ice candidate ....')
                        socket.current.emit(
                          "icecandidate",
                          event.candidate
                        );
                      }
                    }).catch(e=>console.log('[setLocalDescription error]'+e))
              }).catch(e=>console.log('[createOffer error]'+e))
          }
        });
       
        socket.current.on('offer', (offer) => {
                console.log('offer received')
                peerConnection
                .setRemoteDescription(offer)
                .then(()=>{
                    peerConnection
                    .createAnswer()
                    .then((createdAnswer)=>{
                      peerConnection
                      .setLocalDescription(createdAnswer)
                      .then(()=>{
                        console.log('sending answer')
                        socket.current.emit(
                          "answer",
                          createdAnswer
                        );
                      }).catch(e=>console.log('[setLocalDescription error]'+e))
                    }).catch(e=>console.log('[create answer error]'+e))
                 }).catch(e=>console.log('[setRemoteDescription error]'+e))
                
        });

        socket.current.on('answer', (answer) => {
                console.log('answer receive')
                peerConnection
                .setRemoteDescription(answer)
                .then(()=>{
                  console.log('seccessfully set remote descritpion for answer')
                }).catch(e=>console.log('[setRemoteDescription error for answer]'+e))
                
        });

        socket.current.on('icecandidate', (candidate) => {
                peerConnection
                .addIceCandidate(candidate)
                .then(()=>{
                    console.log('ICE candidates received')
                }).catch(e=>console.log('[icecandidate error for answer]'+e))
        });
        
      })
      .catch((error) => console.error("Error accessing media devices:", error));
  }
};

export default useVideoCallTest;
