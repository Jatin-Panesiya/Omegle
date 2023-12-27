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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <g clip-path="url(#clip0_37_105)">
              <path
                d="M11.25 15H18.75"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 3.75C24 3.75 26.25 6 26.25 15C26.25 24 24 26.25 15 26.25C6 26.25 3.75 24 3.75 15C3.75 6 6 3.75 15 3.75Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_37_105">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <g clip-path="url(#clip0_37_75)">
              <path
                d="M15 3.75C24 3.75 26.25 6 26.25 15C26.25 24 24 26.25 15 26.25C6 26.25 3.75 24 3.75 15C3.75 6 6 3.75 15 3.75Z"
                stroke="#FF7F00"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.75 15H11.25"
                stroke="#FF7F00"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 11.25V18.75"
                stroke="#FF7F00"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_37_75">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
      </span>
      {visibleDiv == id ? (
        <p className="pt-5  text-base 700:text-xl">{content}</p>
      ) : null}
    </div>
  );
};

export default Accordian;
