"use client";

import React, { useState } from "react";
import { HiSpeakerXMark } from "react-icons/hi2";
import { FaCameraRotate } from "react-icons/fa6";
import { FaMicrophoneSlash } from "react-icons/fa6";
import { IoMic } from "react-icons/io5";
import { HiSpeakerWave } from "react-icons/hi2";

import useVideoCallTest from "@/useVideoCallTest";
import Image from "next/image";

// VideoCall component taking a prop `setComponent`
const VideoCall = ({ setComponent }) => {
  const [isMicOn, setIsMicOn] = useState(false);
  const [isSound, setIsSound] = useState(false);

  const { localVideoRef, remoteVideoRef } = useVideoCallTest(
    "18077e3d-76dd-4f16-b443-a34a32cfb798"
  );

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
