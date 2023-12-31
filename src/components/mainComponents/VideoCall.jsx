"use client";

import React, { useRef, useState } from "react";
import { HiSpeakerXMark } from "react-icons/hi2";
import { FaCameraRotate } from "react-icons/fa6";
import { FaMicrophoneSlash } from "react-icons/fa6";
import { IoMic } from "react-icons/io5";
import { HiSpeakerWave } from "react-icons/hi2";
import Image from "next/image";
import { useVideoStream } from "@/useVideoStream";
import useVideoCallTest from "@/useVideoCallTest";

// VideoCall component taking a prop `setComponent`
const VideoCall = ({ setComponent }) => {
  const [isMicOn, setIsMicOn] = useState(false);
  const [isSound, setIsSound] = useState(false);
  const { localVideoRef, remoteVideoRef } = useVideoCallTest(
    "b7e28480-3846-4aaa-97da-6ef9b47d45bc"
  );

  const videoRef = useRef(null);
  const videoRef2 = useRef(null);

  useVideoStream(videoRef, "Stream Link");
  useVideoStream(videoRef2, "Stream Link");

  return (
    <div className="pt-9 px-3%">
      {/* Images for the video call */}
      <div className="w-[90%] relative 700:static 700:w-full inline 700:grid grid-cols-2 gap-7">
        <video
          ref={remoteVideoRef}
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
        />
      </div>

      {/* Buttons for muting audio, rotating camera, and turning off microphone */}
      <div>
        <div className="flex gap-5 justify-center pt-4 700:pt-7 pb-2.5 700:pb-5">
          <button
            className="bg-[#ff7f00] text-white 700:p-3 p-1.5 rounded-lg 700:rounded-2xl text-2xl"
            onClick={() => setIsSound(!isSound)}
          >
            {isSound ? (
              <HiSpeakerWave className="w-5" />
            ) : (
              <HiSpeakerXMark className="w-5" />
            )}
          </button>
          <button className="bg-[#ff7f00] text-white 700:p-3 p-1.5 rounded-lg 700:rounded-2xl text-2xl">
            <FaCameraRotate />
          </button>
          <button
            className="bg-[#ff7f00] text-white 700:p-3 p-1.5 rounded-lg 700:rounded-2xl text-2xl"
            onClick={() => setIsMicOn(!isMicOn)}
          >
            {isMicOn ? <IoMic /> : <FaMicrophoneSlash />}
          </button>
        </div>

        {/* Button to end the video call */}
        <div>
          <button
            onClick={() => setComponent(2)}
            className="flex items-center bg-[#ef4444] transition-all duration-300 text-white px-5 py-3 shadow-xl border-2 border-5 border-white shadow-[#ef444473] rounded-2xl gap-2 text-base 700:text-2xl mx-auto 700:btn_txt_responsive"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="w-6 h-6 700:w-8 700:h-8"
            >
              <path
                d="M21.3333 5.33333C22.0697 5.33333 22.6666 5.93029 22.6666 6.66667V12.2667L29.6177 7.40095C29.9193 7.1898 30.335 7.26316 30.5461 7.5648C30.6245 7.67685 30.6666 7.81032 30.6666 7.94711V24.0529C30.6666 24.4211 30.3681 24.7196 29.9999 24.7196C29.8631 24.7196 29.7297 24.6775 29.6177 24.5991L22.6666 19.7333V25.3333C22.6666 26.0697 22.0697 26.6667 21.3333 26.6667H2.66659C1.93021 26.6667 1.33325 26.0697 1.33325 25.3333V6.66667C1.33325 5.93029 1.93021 5.33333 2.66659 5.33333H21.3333ZM9.86659 11.7716C9.60885 11.7716 9.39383 11.9544 9.34409 12.1974L9.33325 12.3049V19.6951C9.33325 19.7965 9.36217 19.8959 9.41664 19.9815C9.555 20.1989 9.82469 20.2821 10.0564 20.1936L10.1529 20.1451L15.9595 16.45C16.0254 16.408 16.0813 16.3521 16.1231 16.2864C16.2615 16.0689 16.2227 15.7893 16.0443 15.6169L15.9595 15.55L10.1529 11.8549C10.0673 11.8005 9.96801 11.7716 9.86659 11.7716Z"
                fill="white"
              />
            </svg>
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
