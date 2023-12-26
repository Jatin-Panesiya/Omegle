"use client";

import React, { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";

// Accordian component that handles toggling content visibility
const Accordian = ({ heading, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="py-2">
      <span
        onClick={() => setIsVisible(!isVisible)}
        className={`flex items-center justify-between ${
          isVisible
            ? "bg-[#ff7f00] text-white "
            : "bg-white text-black border border-black"
        }  rounded-2xl px-5 py-3  cursor-pointer `}
      >
        <h1 className=" font-bold text-lg">{heading}</h1>
        {isVisible ? (
          <CiSquareMinus className="font-bold text-2xl mx-2" />
        ) : (
          <CiSquarePlus className="font-bold text-2xl mx-2" />
        )}
      </span>
      {isVisible && <p className="py-3">{content}</p>}
    </div>
  );
};

export default Accordian;
