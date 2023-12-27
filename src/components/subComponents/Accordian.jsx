"use client";

import React, { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";

// Accordian component that handles toggling content visibility
const Accordian = ({ heading, content, id, visibleDiv, setVisibleDiv }) => {
  return (
    <div className="pt-3 700:pt-7">
      <span
        onClick={() => {
          visibleDiv == id ? setVisibleDiv(0) : setVisibleDiv(id);
        }}
        className={`flex items-center justify-between ${
          visibleDiv == id
            ? "bg-[#FF7F00] text-white "
            : "bg-white text-black border border-black"
        }  rounded-[20px] px-4 700:px-5 py-4  cursor-pointer `}
      >
        <h1 className=" font-bold text-[18px] 700:text-xl">{heading}</h1>
        {visibleDiv == id ? (
          <CiSquareMinus className="font-bold text-2xl mx-2" />
        ) : (
          <CiSquarePlus className="font-bold text-2xl mx-2" />
        )}
      </span>
      {visibleDiv == id ? (
        <p className="pt-5  text-base 700:text-xl">{content}</p>
      ) : null}
    </div>
  );
};

export default Accordian;
