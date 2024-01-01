"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { useVideoStream } from "@/useVideoStream";
import useVideoCallTest from "@/useVideoCallTest";

const NewVideoCall = ({ setComponent }) => {
  const { localVideoRef, remoteVideoRef } = useVideoCallTest({
    /*roomId*/
  });

  const videoRef1 = useRef(null);
  useVideoStream(videoRef1);

  return (
    <div className="px-3% sm:px-9% 700:pt-7  pt-9">
      <video
        ref={localVideoRef}
        playsInline
        autoPlay={true}
        controls={false}
        crossOrigin="anonymous"
        className="rounded-30 700:w-[885px] w-[752px] object-cover p-3 bg-white  700:h-[495px] h-[500px] mx-auto"
        height={495}
        width={885}
      />

      {/* Button to initiate a new video call */}
      <button
        onClick={() => setComponent(1)}
        className="flex items-center bg-[#22C55E] transition-all duration-300 text-white px-5 py-3 shadow-xl border-2 border-5 border-white shadow-[#22c55e4d] rounded-2xl gap-2 text-base 700:text-2xl mx-auto 700:btn_txt_responsive my-7"
      >
        <Image
          src={"/videoIcon.svg"}
          alt="videoIcon"
          width={32}
          height={32}
          className="w-6 h-6 700:w-8 700:h-8"
        />
        New Video Call
      </button>

      {/* Description of Omegle */}
      <p className="pb-7 text-base 700:text-xl text-center">
        Omegle is a Great Spot to meet people online. Where a stranger can
        Initiate Video Conversation with another stranger at random over the
        internet using webcam. Download Omegle App for mobile, Start chatting
        instantly without Registration.
      </p>
    </div>
  );
};

export default NewVideoCall;
