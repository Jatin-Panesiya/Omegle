import Image from "next/image";
import React from "react";

const FeatureCard = ({ imagePath, altTxt, heading, text }) => {
  return (
    <div className="bg-white p-2 sm:p-4 rounded-3xl text-center grid grid-cols-1 ">
      <div className="">
        <img src={imagePath} alt={altTxt} className="rounded-2xl w-full " />
      </div>
      <div>
        <h1 className="font-bold text-2xl sm:text-3xl py-7 heading__responsive">
          {heading}
        </h1>
        <p className="text-lg "> {text}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
