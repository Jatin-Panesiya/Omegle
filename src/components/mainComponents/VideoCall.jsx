"use client";

import React, { useEffect, useRef, useState } from "react";
import { HiSpeakerXMark } from "react-icons/hi2";
import { FaCameraRotate } from "react-icons/fa6";
import { FaMicrophoneSlash } from "react-icons/fa6";
import { IoCamera, IoCameraReverse, IoMic, IoVideocam, IoVideocamOff } from "react-icons/io5";
import { HiSpeakerWave } from "react-icons/hi2";
import io from "socket.io-client";

import Image from "next/image";

// VideoCall component taking a prop `setComponent`
const VideoCall = ({ setComponent , userId}) => {
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCamOn, setIsCamOn] = useState(true);
  const [isSound, setIsSound] = useState(true);
  const [isFrontCam, setIsFrontCam] = useState(false);
  const [isFacingMode, setIsFacingMode] = useState(false);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const streamRef = useRef(null);
  const socket = useRef(null);
  const peerConnection = useRef(null);
  const  configuration = {
    "iceServers": [{
        urls: 'turn:192.248.176.141:443',
        credential: 'turn',
        username: 'turn'
    },{
      urls: 'turn:116.202.174.77:3478',
      credential: 'turn',
      username: 'turn'
  }]
  }
  /*
  const  configuration = {
    "iceServers": [{
      urls: [ "stun:bn-turn1.xirsys.com" ]}, 
      {username: "1XBCwTVI1hmC0kM1q3Dc2pDJk70liSz58HI1dFhaWLjt-1RqzrvMTTnaxCaOPnNQAAAAAGWc2_ZuaXRoaW5ucGs=",credential: "6551f3be-aeb1-11ee-8101-0242ac140004", 
      urls: ["turn:bn-turn1.xirsys.com:80?transport=udp","turn:bn-turn1.xirsys.com:3478?transport=udp",
      "turn:bn-turn1.xirsys.com:80?transport=tcp",
      "turn:bn-turn1.xirsys.com:3478?transport=tcp",
      "turns:bn-turn1.xirsys.com:443?transport=tcp",
      "turns:bn-turn1.xirsys.com:5349?transport=tcp"]
  }]
  }
  */
 
  useEffect(() => {
    if(socket.current == null){
      establishVideoCall();
      const supports = navigator.mediaDevices.getSupportedConstraints();
      if (supports['facingMode']) {
        setIsFacingMode(true)
      }
    }
  }, []);
  
  const establishVideoCall = () =>{
      socket.current = io("https://omegle.nu/", {
        forceNew: true,
      });
      
      socket.current.on('connect', () => {
        console.log('connected')
      });
      socket.current.on('disconnect', () => {
        console.log('disconnected')
      });
      
      console.log('Initialize peer connection...')
      
      navigator.mediaDevices.getUserMedia({ video: {width:320,height:240}, audio: true }).then((stream) => {
          localVideoRef.current.srcObject = stream;
          streamRef.current = stream;
          if(!window.streams){
              window.streams = [];
          }
          if(!window.sockets){
             window.sockets = [];
          }
          window.sockets.push(socket.current)
          window.streams.push(stream)
          socket.current.emit("registerUser", userId);
          socket.current.on("partnerDisconnected", (partnerId) => {
            onEndVideoCall();
          });
          socket.current.on("userAccepted", (userId,partnerId) => {
              console.log('successfully find new pair...')
          });
          
          socket.current.on("userJoined", (userId,partnerId) => {
            if(partnerId){
               createOffer()
            }
          });
         
          socket.current.on('offer', (offer) => {
                console.log('offer received')
                createAnswer(offer)  
          });
  
          socket.current.on('answer', (answer) => {
                console.log('answer receive')
                addAnswer(answer)
                  
          });
  
          socket.current.on('icecandidate', (candidate) => {
            if(peerConnection.current){
                peerConnection.current.addIceCandidate(candidate)
            }     
          });
          
        })
        .catch((error) => console.error("Error accessing media devices:", error));
    
  }
  const createPeerConnection = async ()=>{
    peerConnection.current = new RTCPeerConnection(configuration);
    streamRef.current.getTracks().forEach((track) => {peerConnection.current.addTrack(track, streamRef.current);console.log('Stream added to connection...')});
    peerConnection.current.ontrack = (event) => {
      remoteVideoRef.current.srcObject = event.streams[0];
    };
    peerConnection.current.onicecandidate = async (event) => {
      if (event.candidate){
        console.log('Sending ice candidate ....')
        socket.current.emit(
          "icecandidate",
          event.candidate
        );
      }
    }
  }
  const switchCamera = () =>{
    setIsFrontCam(!isFrontCam)
    const facingMode = isFrontCam ? "user":"environment";
    navigator.mediaDevices.getUserMedia({ video: {width:320,height:240,facingMode:facingMode}}).then((stream) => {
      window.streams.push(stream)
      const [videoTrack] = stream.getVideoTracks();
      if(streamRef.current){
        streamRef.current.getTracks().forEach((track) => {
          if(track.kind === videoTrack.kind){
            track.stop();
            streamRef.current.removeTrack(track);
            streamRef.current.addTrack(videoTrack)
          }
        });
      }
      if(peerConnection.current){
            const sender = peerConnection.current.getSenders().find((s) => s.track.kind === videoTrack.kind);
            console.log("Found sender:", sender);
            sender.replaceTrack(videoTrack);
      }
    })
  }
  const createOffer = async () =>{
    await createPeerConnection();
    const offer = await peerConnection.current.createOffer()
    await peerConnection.current.setLocalDescription(offer)
    socket.current.emit("offer",offer);
  }
  const createAnswer = async (offer) =>{
    await createPeerConnection();
    await peerConnection.current.setRemoteDescription(offer)
    const answer = await peerConnection.current.createAnswer()
    await peerConnection.current.setLocalDescription(answer)
    socket.current.emit("answer",answer);
  }
  const addAnswer = (answer) =>{
      if(!peerConnection.current.currentRemoteDescription){
         peerConnection.current.setRemoteDescription(answer)
      }
  }
  const onEndVideoCall = () =>{
    socket.current.disconnect();
    setComponent(2)
  }
  const controlMic = () =>{
    setIsMicOn(!isMicOn)
    streamRef.current.getAudioTracks()[0].enabled = !isMicOn;
  }
  const controlCam = () =>{
    setIsCamOn(!isCamOn)
    streamRef.current.getVideoTracks()[0].enabled = !isCamOn;
  }
  const controlSound = () =>{
    setIsSound(!isSound)
    //remoteVideoRef.muted = true;
    document.getElementById('remoteVideo').muted = isSound;
  }
  return (
    <div className="pt-9 px-3%">
      {/* Images for the video call */}
      <div className="w-[90%] relative 700:static 700:w-full inline 700:grid grid-cols-2 gap-7">
        <video
          ref={remoteVideoRef}
          id="remoteVideo"
          playsInline
          autoPlay={true}
          controls={false}
          crossOrigin="anonymous"
          className=" rounded-30 bg-white p-2 700:p-4 h-[503px] object-cover 700:h-auto"
          width={700}
          height={503}
        />

        <video
          ref={localVideoRef}
          playsInline
          autoPlay={true}
          controls={false}
          crossOrigin="anonymous"
          className="rounded-xl 700:rounded-30 bg-white h-[181px] p-2 700:p-4 absolute 700:static bottom-0 right-0 w-[40%] 700:w-full object-cover  700:h-auto m-4 700:m-0"
          width={700}
          height={503}
          muted
        />
      </div>

      {/* Buttons for muting audio, rotating camera, and turning off microphone */}
      <div>
        <div className="flex gap-5 justify-center pt-4 700:pt-7 pb-2.5 700:pb-5">
          <button
            className="bg-[#ff7f00] text-white 700:p-3 p-1.5 rounded-lg 700:rounded-2xl text-2xl"
            onClick={controlSound}
          >
            {isSound ? (
              <HiSpeakerWave className="w-5" />
            ) : (
              <HiSpeakerXMark className="w-5" />
            )}
          </button>
          { isFacingMode && (<button onClick={switchCamera} className="bg-[#ff7f00] text-white 700:p-3 p-1.5 rounded-lg 700:rounded-2xl text-2xl hide-desktop">
            <FaCameraRotate />
          </button>)}
          <button
            className="bg-[#ff7f00] text-white 700:p-3 p-1.5 rounded-lg 700:rounded-2xl text-2xl"
            onClick={controlCam}
          >
            {isCamOn ? <IoVideocam /> : <IoVideocamOff />}
          </button>
          <button
            className="bg-[#ff7f00] text-white 700:p-3 p-1.5 rounded-lg 700:rounded-2xl text-2xl"
            onClick={controlMic}
          >
            {isMicOn ? <IoMic /> : <FaMicrophoneSlash />}
          </button>
        </div>

        {/* Button to end the video call */}
        <div>
          <button
            onClick={onEndVideoCall}
            className="flex items-center bg-[#ef4444] transition-all duration-300 text-white px-5 py-3 shadow-xl border-2 border-5 border-white shadow-[#ef444473] rounded-2xl gap-2 text-base 700:text-2xl mx-auto 700:btn_txt_responsive"
          >
            <Image
              src={"/videoIcon.svg"}
              alt="videoIcon"
              width={32}
              height={32}
              className="w-6 h-6 700:w-8 700:h-8"
            />
            End Video Call
          </button>
        </div>
      </div>

      {/* Description of Omegle */}
      <div className=" pt-5 700:pt-7 pb-7 700:pb-10 text-base 700:text-xl text-center  ">
        <p>
          Omegle is a Great Spot to meet people online. Where a stranger can
          initiate Video Conversation with another stranger at random over the
          internet using webcam. Download Omegle App for mobile, Start chatting
          instantly without Registration.
        </p>
      </div>
    </div>
  );
};

export default VideoCall;
