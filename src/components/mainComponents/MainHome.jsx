"use client";

import React, { useState } from "react";
import Accordian from "../subComponents/Accordian";
import FeatureCard from "../subComponents/FeatureCard";
import Image from "next/image";

const MainHome = ({ setComponent }) => {
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
        <button
          onClick={() => setComponent(2)}
          className="flex items-center bg-[#3f9fff] transition-all duration-300 text-white px-7 py-3 shadow-xl shadow-[#3f9fff69] gap-4 text-2xl mx-auto btn_txt_responsive"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className="w-6 h-6 700:w-8 700:h-8"
          >
            <path
              d="M21.3333 5.33333C22.0697 5.33333 22.6666 5.93029 22.6666 6.66667V12.2667L29.6177 7.40095C29.9193 7.1898 30.335 7.26316 30.5461 7.5648C30.6245 7.67685 30.6666 7.81032 30.6666 7.94711V24.0529C30.6666 24.4211 30.3681 24.7196 29.9999 24.7196C29.8631 24.7196 29.7297 24.6775 29.6177 24.5991L22.6666 19.7333V25.3333C22.6666 26.0697 22.0697 26.6667 21.3333 26.6667H2.66659C1.93021 26.6667 1.33325 26.0697 1.33325 25.3333V6.66667C1.33325 5.93029 1.93021 5.33333 2.66659 5.33333H21.3333ZM9.86659 11.7716C9.60885 11.7716 9.39383 11.9544 9.34409 12.1974L9.33325 12.3049V19.6951C9.33325 19.7965 9.36217 19.8959 9.41664 19.9815C9.555 20.1989 9.82469 20.2821 10.0564 20.1936L10.1529 20.1451L15.9595 16.45C16.0254 16.408 16.0813 16.3521 16.1231 16.2864C16.2615 16.0689 16.2227 15.7893 16.0443 15.6169L15.9595 15.55L10.1529 11.8549C10.0673 11.8005 9.96801 11.7716 9.86659 11.7716Z"
              fill="white"
            />
          </svg>
          Start Video Call
        </button>
      </div>
      {/* Hero Section Ends */}

      {/* Features Section Starts*/}

      <div className="featureCard__Responsive gap-5 pt-10 700:pt-24  ">
        {/* Feature Cards */}
        <FeatureCard
          imagePath="/cardImage1.png"
          altTxt="Talk To Strangers"
          heading="Talk to Strangers "
          text="The internet is full of amazing people, Omegle lets you chat with them."
        />
        <FeatureCard
          imagePath="/cardImage2.png"
          altTxt="Live Video Chat"
          heading="Live Video Chat"
          text="Texting and webcamming are two ways in omegle to connect with stranger"
        />
        <FeatureCard
          imagePath="/cardImage3.png"
          altTxt="Interact with Girls"
          heading="Interact with Girls"
          text="Using college email address Omegle lets you meet other college students."
        />
      </div>

      {/* Features Section Ends*/}

      {/* Omegle Video Call info section Starts */}
      <div>
        {/* Info about Omegle */}
        <h1 className="font-bold text-3xl 700:text-4xl pt-10 70:pt-24">
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
            alt="IMAGE"
            className="hidden 700:block rounded-md"
            width={1250}
            height={609}
          />
          <Image
            src="/footerImage2.png"
            alt="IMAGE"
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
    </div>
  );
};

export default MainHome;
