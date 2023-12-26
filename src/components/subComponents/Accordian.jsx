"use client";

import React, { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";

// Accordian component that handles toggling content visibility
const Accordian = ({ heading, content, id, visibleDiv, setVisibleDiv }) => {
  return (
    <div className="py-2">
      <span
        onClick={() => {
          visibleDiv == id ? setVisibleDiv(0) : setVisibleDiv(id);
        }}
        className={`flex items-center justify-between ${
          visibleDiv == id
            ? "bg-[#ff7f00] text-white "
            : "bg-white text-black border border-black"
        }  rounded-2xl px-5 py-3  cursor-pointer `}
      >
        <h1 className=" font-bold text-lg">{heading}</h1>
        {visibleDiv == id ? (
          <CiSquareMinus className="font-bold text-2xl mx-2" />
        ) : (
          <CiSquarePlus className="font-bold text-2xl mx-2" />
        )}
      </span>
      {visibleDiv == id ? <p className="py-3">{content}</p> : null}
    </div>
  );
};

export default Accordian;
