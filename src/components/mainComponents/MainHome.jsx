"use client";

import React, { useState } from "react";
import Accordian from "../subComponents/Accordian";
import { MdVideoCall } from "react-icons/md";
import FeatureCard from "../subComponents/FeatureCard";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { LuDot } from "react-icons/lu";


const MainHome = ({ setComponent }) => {
  //state to manage accordian of FAQs
  const [visibleDiv, setVisibleDiv] = useState(0);

  return (
    <>
      {/* Hero Section Starts */}
      <div className="px-[3%] sm:px-[9%] text-center py-16 ">
        {/* Title */}
        <h1 className="font-bold text-responsive text-3xl md:text-4xl lg:text-[46px] transition-all duration-300">
          Omegle Video Call
        </h1>
        {/* Description */}
        <p className="py-5 md:py-10 text-[16px] sm:text-lg ">
          Omegle is a Great Spot to meet people online. Where a stranger can
          initiate Video Conversation with another stranger at random over the
          internet using webcam. Download Omegle App for mobile, Start chatting
          instantly without Registration.
        </p>
        {/* Button to start a video call */}
        <button
          onClick={() => setComponent(2)}
          className="flex items-center bg-[#3f9fff] transition-all duration-300 text-white px-5 py-2 shadow-xl border-2 border-5 border-white shadow-[#3f9fff69] rounded-2xl gap-2 text-2xl mx-auto btn_txt_responsive"
        >
          <MdVideoCall className="text-4xl btn_txt_responsive" /> Start Video
          Call
        </button>
      </div>
      {/* Hero Section Ends */}

      {/* Features Section Starts*/}

      <div className="featureCard__Responsive gap-5 px-[3%] sm:px-[9%] py-5 ">
        {/* Feature Cards */}
        <FeatureCard
          imagePath="/talkWithStrangers.png"
          altTxt="Talk To Strangers"
          heading="Talk to Strangers "
          text="The internet is full of amazing people, Omegle lets you chat with them."
        />
        <FeatureCard
          imagePath="/videoCallImg.png"
          altTxt="Live Video Chat"
          heading="Live Video Chat"
          text="Texting and webcamming are two ways in omegle to connect with stranger"
        />
        <FeatureCard
          imagePath="/interactWithGirls.png"
          altTxt="Interact with Girls"
          heading="Interact with Girls"
          text="Using college email address Omegle lets you meet other college students."
        />
      </div>

      {/* Features Section Ends*/}

      {/* Omegle Video Call info section Starts */}
      <div className="px-[3%] sm:px-[9%]">
        {/* Info about Omegle */}
        <h1 className="font-bold text-3xl sm:text-4xl py-5">
          Omegle Video Call
        </h1>
        <p className="py-5 text-lg">
          Omegle is a Great Spot to meet people online. Where a stranger can
          initiate Video Conversation with another stranger at random over the
          internet using webcam. Download Omegle App for mobile, Start chatting
          instantly without Registration.
        </p>
        <p className="text-lg">
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

      <div className="px-[3%] sm:px-[9%] py-10 ">
        <div className="bg-white p-5 rounded-3xl w-full object-cover">
          <div className=" py-2 flex justify-between">
            <div className="flex items-end">
              <img
                src="/Logo.png"
                alt="LOGO"
                className="w-16 sm:w-36  md:w-44 transition-all duration-200 responsive_0092 "
              />
              <p className="font-bold ps-5 sm:ps-20 -rotate-12 text-[8px] text__responsive__0092 sm:text-[16px] md:text-lg">
                Talk to strangers!
              </p>
            </div>
            <div className="flex items-center gap-1">
              <button className="flex items-center bg-[#3b5998] text-white uppercase font-bold text-[5px] md:text-[8px] px-1 p-0.5 gap-2 ">
                <RiFacebookFill className=" text-[8px] md:text-[12px]  " />
                Share
              </button>
              <button className="flex items-center bg-[#1b95e0] text-white uppercase font-bold text-[5px] md:text-[8px] px-1 p-0.5 gap-2 ">
                <FaTwitter className=" text-[8px]  md:text-[12px] " />
                Tweet
              </button>
            </div>
          </div>

          <div className="bg-[#fff7ee] p-5">
            <img
              src="/footerImage.png"
              alt="Footer"
              className="w-[500px] mx-auto rounded-xl"
            />
            <span className="flex items-center text-[4.5px] md:text-[8px] font-semibold pt-5 justify-center">
              ©️ Omegle.com LLC
              <LuDot />
              <Link href="" className="underline text-[#ffa041]">
                Terms of Service
              </Link>
              <LuDot />
              <Link href="" className="underline text-[#ffa041]">
                Pricavy Policy
              </Link>
              <LuDot />
              <Link href="" className="underline text-[#ffa041]">
                Community Guidelines
              </Link>
            </span>
          </div>
        </div>
      </div>

      {/* Footer Section ends  */}

      <div className="px-[3%] sm:px-[9%] text-lg">
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

      <div className="px-[3%] sm:px-[9%] py-10" id="faq__Section">
        <h1 className="font-bold text-4xl py-5">FAQs</h1>
        {/* FAQs using Accordian */}
        <div>
          <Accordian
            heading={"What is Omegle and how does it work?"}
            content={
              "Omegle is a platform that enables users to engage in random one-on-one video chats with strangers from around the world. The systems pairs users randomly, fostering an environment for spontaneous and diverse conversations."
            }
            id="1"
            visibleDiv={visibleDiv}
            setVisibleDiv={setVisibleDiv}
          />
          <Accordian
            heading={"Is Omegle safe for users of all ages?"}
            content={
              "Omegle is a platform that enables users to engage in random one-on-one video chats with strangers from around the world. The systems pairs users randomly, fostering an environment for spontaneous and diverse conversations."
            }
            id="2"
            visibleDiv={visibleDiv}
            setVisibleDiv={setVisibleDiv}
          />
          <Accordian
            heading={"Can I customize my omegle experience?"}
            content={
              "Omegle is a platform that enables users to engage in random one-on-one video chats with strangers from around the world. The systems pairs users randomly, fostering an environment for spontaneous and diverse conversations."
            }
            id="3"
            visibleDiv={visibleDiv}
            setVisibleDiv={setVisibleDiv}
          />
          <Accordian
            heading={"How do I start a chat on Omegle?"}
            content={
              "Omegle is a platform that enables users to engage in random one-on-one video chats with strangers from around the world. The systems pairs users randomly, fostering an environment for spontaneous and diverse conversations."
            }
            id="4"
            visibleDiv={visibleDiv}
            setVisibleDiv={setVisibleDiv}
          />
          <Accordian
            heading={"Are my conversation on Omegle Private?"}
            content={
              "Omegle is a platform that enables users to engage in random one-on-one video chats with strangers from around the world. The systems pairs users randomly, fostering an environment for spontaneous and diverse conversations."
            }
            id="5"
            visibleDiv={visibleDiv}
            setVisibleDiv={setVisibleDiv}
          />
        </div>
      </div>

      {/* FAQs Section Ends  */}

      {/* Footer  */}

      {/* Footer  */}
    </>
  );
};

export default MainHome;
