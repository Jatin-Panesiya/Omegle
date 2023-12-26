import React from "react";
import { FaVolumeMute } from "react-icons/fa";
import { FaCameraRotate } from "react-icons/fa6";
import { IoMdMicOff } from "react-icons/io";
import { MdVideoCall } from "react-icons/md";
const VideoCall = ({ setComponent }) => {
  return (
    <div className="max-w-full py-10 px-[1%] sm:px-[3%]">
      {/* Desktop View starts */}

      <div className="w-full hidden md:grid grid-cols-2 gap-5">
        <img
          src="/videoCallImg1.png"
          alt="Video Call"
          className=" rounded-3xl bg-white p-3"
        />

        <img
          src="/videoCallImg2.png"
          alt="Video Call"
          className="  rounded-3xl bg-white p-3"
        />
      </div>
      {/* Desktop View ends */}

      {/* Mobile View starts */}

      <div className="w-[90%] mx-auto md:hidden relative ">
        <div>
          <img
            src="/videoCallImg1.png"
            alt="Video Call"
            className=" rounded-3xl bg-white p-3 h-[450px] object-cover"
          />
          <img
            src="/videoCallImg2.png"
            alt="Video Call"
            className="  rounded-2xl bg-white  absolute bottom-0  right-0 w-[40%] p-2 m-4  h-[38%] object-cover"
          />
        </div>
      </div>
      {/* Mobile View ends */}

      <div>
        <div className="flex gap-4 justify-center py-5">
          <button className="bg-[#ff7f00] text-white p-2 rounded-xl text-2xl">
            <FaVolumeMute />
          </button>
          <button className="bg-[#ff7f00] text-white p-2 rounded-xl text-2xl">
            <FaCameraRotate />
          </button>
          <button className="bg-[#ff7f00] text-white p-2 rounded-xl text-2xl">
            <IoMdMicOff />
          </button>
        </div>
        <div>
          <button
            onClick={() => setComponent(3)}
            className="flex items-center bg-[#ef4444] transition-all duration-300 text-white px-4 py-2 shadow-2xl border-2 border-5 border-white shadow-[#ef4444] rounded-xl gap-2 text-2xl mx-auto btn_txt_responsive"
          >
            <MdVideoCall className="text-xl sm:text-3xl" /> End Video Call
          </button>
        </div>
      </div>

      <div className="pt-10 pb-5 text-lg text-center">
        <p>
          Omegle is a Great Spot to meet people online. Where a stranger can
          initiate Video Comversation with another stranger at random over the
          internet using webcam. Download Omegle App for mobile, Start chatting
          instantly without Registration.
        </p>
      </div>
    </div>
  );
};

export default VideoCall;
