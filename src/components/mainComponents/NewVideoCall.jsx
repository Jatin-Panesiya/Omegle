import React from "react";
import { MdVideoCall } from "react-icons/md";

const NewVideoCall = ({ setComponent }) => {
  return (
    <div className="px-[3%] sm:px-[9%]">
      <img
        src="/videoCallImg2.png"
        alt="Video Call"
        className="rounded-3xl w-[700px] object-cover p-3 bg-white my-5 h-[400px] mx-auto"
      />

      <button
        onClick={() => setComponent(2)}
        className="flex items-center bg-[#22c55e] transition-all duration-300 text-white px-4 py-2 shadow-2xl border-2 border-5 border-white shadow-[#22c55e] rounded-xl my-5 gap-2 text-2xl mx-auto btn_txt_responsive"
      >
        <MdVideoCall className="text-xl sm:text-3xl" /> New Video Call
      </button>

      <p className="py-5 text-lg">
        Omegle is a Great Spot to meet people online. Where a stranger can
        initiate Video Comversation with another stranger at random over the
        internet using webcam. Download Omegle App for mobile, Start chatting
        instantly without Registration.
      </p>
    </div>
  );
};

export default NewVideoCall;
