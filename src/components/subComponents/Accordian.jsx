"use client";

import Image from "next/image";
import React from "react";
// Accordian component that handles toggling content visibility
const Accordian = ({ heading, content, id, visibleDiv, setVisibleDiv }) => {
  return (
    <div className="pt-3 700:pt-7">
      <span
        onClick={() => {
          visibleDiv == id ? setVisibleDiv(0) : setVisibleDiv(id);
        }}
        className={`flex items-center justify-between ${
          visibleDiv === id
            ? "bg-[#FF7F00] text-white "
            : "bg-white text-black border border-black"
        }  rounded-[20px] px-4 700:px-5 py-4  cursor-pointer `}
      >
        <h1 className=" font-bold text-[18px] 700:text-xl">{heading}</h1>
        {visibleDiv == id ? (
          <Image src={"/minus.svg"} alt="minus" height={30} width={30} />
        ) : (
          <Image src={"/plus.svg"} alt="minus" height={30} width={30} />
        )}
      </span>
      {visibleDiv === id && (
        <p className="pt-5  text-base 700:text-xl">{content}</p>
      )}
    </div>
  );
};

export default Accordian;
