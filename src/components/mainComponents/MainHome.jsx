"use client";

import React, { useState } from "react";
import Accordian from "../subComponents/Accordian";
import FeatureCard from "../subComponents/FeatureCard";
import Image from "next/image";
import Link from "next/link";
import { accordianData, featureCard } from "@/constants";

const MainHome = () => {
  //state to manage accordian of FAQs
  const [visibleDiv, setVisibleDiv] = useState(0);

  return (
    <div className="px-3% sm:px-9%">
      {/* Hero Section Starts */}
      <div className=" text-center pt-16 700:pt-24 ">
        {/* Title */}
        <h1 className="font-bold text-responsive text-3xl 700:text-5xl transition-all duration-300 roboto-700">
          Omegle Video Call
        </h1>
        {/* Description */}
        <p className="py-5 700:py-10 text-lg 700:text-xl roboto">
          Omegle is a Great Spot to meet people online. Where a stranger can
          initiate Video Conversation with another stranger at random over the
          internet using webcam. Download Omegle App for mobile, Start chatting
          instantly without Registration.
        </p>
        {/* Button to start a video call */}
        <button>
          <Link
            href={"/video-call"}
            className="flex items-center bg-[#3f9fff] transition-all duration-300 text-white px-7 py-3 shadow-xl shadow-[#3f9fff69] gap-4 text-2xl mx-auto btn_txt_responsive"
          >
            <Image
              src={"/videoIcon.svg"}
              alt="videoIcon"
              width={32}
              height={32}
              className="w-6 h-6 700:w-8 700:h-8"
            />
            Start Video Call
          </Link>
        </button>
      </div>
      {/* Hero Section Ends */}

      {/* Features Section Starts*/}

      <div className="featureCard__Responsive gap-5 pt-10 700:pt-24  ">
        {/* Feature Cards */}
        {featureCard.map(({ id, imagePath, altTxt, heading, text }) => {
          return (
            <FeatureCard
              key={id}
              imagePath={imagePath}
              altTxt={altTxt}
              heading={heading}
              text={text}
            />
          );
        })}
      </div>

      {/* Features Section Ends*/}

      {/* Omegle Video Call info section Starts */}
      <div>
        {/* Info about Omegle */}
        <h1 className="font-bold text-3xl 700:text-4xl pt-10 700:pt-24">
          Omegle Video Call
        </h1>
        <p className="pt-5 700:pt-7 pb-5 700:text-xl text-lg">
          Omegle is a Great Spot to meet people online. Where a stranger can
          initiate Video Conversation with another stranger at random over the
          internet using webcam. Download Omegle App for mobile, Start chatting
          instantly without Registration.
        </p>
        <p className="700:text-xl text-lg ">
          Introduced in 2009, Omegle being a go-to website for people wanting to
          make brand-new new friedns or simply have a casual conversation.
          Omegle free video chat appeal can be attributed to the unique
          experience it uses. Online video chat features permit users to get in
          touch with people they would not normally fulfill in their everyday
          lives. This can lead to exciting and interesting conversation with
          individuals from different backgrounds, cultures, and experiences. The
          interface of the website is uncomplicated, and users can start
          chatting with strangers by getting in a chat room or engaging in an
          individually chat. The site does not require users to register or
          develop a profile, which implies that users can stay anonymous
          throughout their conversations.
        </p>
      </div>
      {/* Omegle Video Call info section Ends */}

      {/* Footer Section starts */}

      <div className="py-7 700:py-20 ">
        <div className="bg-white p-3 rounded-xl ">
          <Image
            src="/footerImage.png"
            alt="footer image"
            className="hidden 700:block rounded-md"
            width={1250}
            height={609}
          />
          <Image
            src="/footerImage2.png"
            alt="footer image"
            className="block 700:hidden rounded-md"
            width={748}
            height={609}
          />
        </div>
      </div>

      {/* Footer Section ends  */}

      <div className="text-lg 700:text-xl">
        <p>
          Omegle executed a monitoring system that uses artificial intelligence
          to identify and flag unsuitable content. The website also has a report
          system that enables users to report inappropriate behavior or
          material. Therefore, Omegle online video chat has gained popularity
          among people of all ages, especially the younger generation. In
          conclusion, Omegle.com uses a unique and interesting method to connect
          with people from all over the world. Every user can take pleasure in
          an interesting and safe chat experience on Omegle.
        </p>
      </div>

      {/* FAQs Section starts  */}

      <div className="pt-10 700:pt-24 mb-10 700:mb-24" id="faq__Section">
        <h1 className="font-bold text-3xl 700:text-5xl pb-2.5 700:pb-11">
          FAQs
        </h1>
        {/* FAQs using Accordian */}
        <div>
          {accordianData.map(({ id, heading, content }) => {
            return (
              <Accordian
                key={id}
                heading={heading}
                content={content}
                visibleDiv={visibleDiv}
                setVisibleDiv={setVisibleDiv}
                id={id}
              />
            );
          })}
        </div>
      </div>

      {/* FAQs Section Ends  */}
    </div>
  );
};

export default MainHome;
