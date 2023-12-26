"use client";

import React, { useState } from "react";
import { HiSpeakerXMark } from "react-icons/hi2";
import { FaCameraRotate } from "react-icons/fa6";
import { FaMicrophoneSlash } from "react-icons/fa6";
import { IoMic } from "react-icons/io5";
import { MdVideoCall } from "react-icons/md";
import { HiSpeakerWave } from "react-icons/hi2";

// VideoCall component taking a prop `setComponent`
const VideoCall = ({ setComponent }) => {
  const [isMicOn, setIsMicOn] = useState(false);
  const [isSound, setIsSound] = useState(false);
  return (
    <div className="max-w-full py-10 px-[1%] sm:px-[3%]">
      {/* Images for the video call */}
      <div className="w-[90%] relative md:static md:w-full inline md:grid grid-cols-2 gap-5">
        <img
          src="/videoCallImg1.png"
          alt="Video Call"
          className=" rounded-3xl bg-white p-3 h-[450px] object-cover md:h-auto"
        />

        <img
          src="/videoCallImg2.png"
          alt="Video Call"
          className="  rounded-3xl bg-white p-3 absolute md:static bottom-0 right-0 w-[40%] md:w-auto object-cover h-[38%] md:h-auto m-4 md:m-0"
        />
      </div>

      {/* Buttons for muting audio, rotating camera, and turning off microphone */}
      <div>
        <div className="flex gap-4 justify-center py-5">
          <button
            className="bg-[#ff7f00] text-white p-2 rounded-xl text-2xl"
            onClick={() => setIsSound(!isSound)}
          >
            {isSound ? <HiSpeakerWave /> : <HiSpeakerXMark />}
          </button>
          <button className="bg-[#ff7f00] text-white p-2 rounded-xl text-2xl">
            <FaCameraRotate />
          </button>
          <button
            className="bg-[#ff7f00] text-white p-2 rounded-xl text-2xl"
            onClick={() => setIsMicOn(!isMicOn)}
          >
            {isMicOn ? <IoMic /> : <FaMicrophoneSlash />}
          </button>
        </div>

        {/* Button to end the video call */}
        <div>
          <button
            onClick={() => setComponent(3)}
            className="flex items-center bg-[#ef4444] transition-all duration-300 text-white px-4 py-2 shadow-xl border-2 border-5 border-white shadow-[#ef444473] rounded-2xl gap-2 text-2xl mx-auto btn_txt_responsive"
          >
            <MdVideoCall className="text-xl sm:text-3xl" /> End Video Call
          </button>
        </div>
      </div>

      {/* Description of Omegle */}
      <div className="pt-10 pb-5 text-lg  px-2">
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
