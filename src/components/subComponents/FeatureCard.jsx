import React from "react";

// FeatureCard component to display a card with an image, heading, and text
const FeatureCard = ({ imagePath, altTxt, heading, text }) => {
  return (
    <div className="bg-white p-2 700:p-4 rounded-[30px] text-center grid grid-cols-1">
      <div>
        <img src={imagePath} alt={altTxt} className="rounded-2xl w-full" />
      </div>
      <div>
        <h1 className="font-bold text-2xl 700:text-3xl pt-4 700:pt-6 heading__responsive pb-2">
          {heading}
        </h1>
        <p className="700:text-lg text-base  font-normal pb-2 ">{text}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
