import React from "react";
import Accordian from "../subComponents/Accordian";
import { MdVideoCall } from "react-icons/md";
import FeatureCard from "../subComponents/FeatureCard";

const MainHome = ({ setComponent }) => {
  return (
    <>
      {/* Hero Section Starts */}
      <div className="px-[3%] sm:px-[9%] text-center py-16 ">
        <h1 className="font-bold text-responsive text-3xl md:text-4xl lg:text-[46px] transition-all duration-300">
          Omegle Video Call
        </h1>
        <p className="py-5 md:py-10 text-[16px] sm:text-lg ">
          Omegle is a Great Spot to meet people online. Where a stranger can
          initiate Video Conversation with another stranger at random over the
          internet using webcam. Download Omegle App for mobile, Start chatting
          instantly without Registration.
        </p>
        <button
          onClick={() => setComponent(2)}
          className="flex items-center bg-[#3f9fff] transition-all duration-300 text-white px-4 py-2 shadow-2xl border-b-2 border-5 border-white shadow-[#3f9fff] rounded-xl gap-2 text-2xl mx-auto btn_txt_responsive"
        >
          <MdVideoCall className="text-3xl btn_txt_responsive" /> Start Video
          Call
        </button>
      </div>
      {/* Hero Section Ends */}

      {/* Features Section Starts*/}

      <div className="featureCard__Responsive gap-5 px-[3%] sm:px-[9%] py-5 ">
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

      {/* <div className="px-[3%] sm:px-[9%] py-10 ">
        <div className="bg-white p-5 rounded-3xl">
          <div className=" py-2 flex justify-between">
            <div className="flex items-end">
              <img src="/Logo.png" alt="LOGO" className="w-44 " />
              <p className="font-bold ps-20 -rotate-12">Talk to strangers!</p>
            </div>
            <div>
              <button className="flex items-center bg-[#3b5998] text-white uppercase font-bold text-xs p-1 gap-2 rounded">
                <FaFacebook className="text-lg text-[#3b5998]  " />
                Share
              </button>
            </div>
          </div>

          <div className="bg-[#fff7ee] p-5"></div>
        </div>
      </div> */}

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

      <div className="px-[3%] sm:px-[9%] py-10">
        <h1 className="font-bold text-4xl py-5">FAQs</h1>

        <div>
          <Accordian
            heading={"What is Omegle and how does it work?"}
            content={
              "Omegle is a platform that enables users to engage in random one-on-one video chats with strangers from around the world. The systems pairs users randomly, fostering an environment for spontaneous and diverse conversations."
            }
          />
          <Accordian
            heading={"Is Omegle safe for users of all ages?"}
            content={
              "Omegle is a platform that enables users to engage in random one-on-one video chats with strangers from around the world. The systems pairs users randomly, fostering an environment for spontaneous and diverse conversations."
            }
          />
          <Accordian
            heading={"Can I customize my omegle experience?"}
            content={
              "Omegle is a platform that enables users to engage in random one-on-one video chats with strangers from around the world. The systems pairs users randomly, fostering an environment for spontaneous and diverse conversations."
            }
          />
          <Accordian
            heading={"How do I start a chat on Omegle?"}
            content={
              "Omegle is a platform that enables users to engage in random one-on-one video chats with strangers from around the world. The systems pairs users randomly, fostering an environment for spontaneous and diverse conversations."
            }
          />
          <Accordian
            heading={"Are my conversation on Omegle Private?"}
            content={
              "Omegle is a platform that enables users to engage in random one-on-one video chats with strangers from around the world. The systems pairs users randomly, fostering an environment for spontaneous and diverse conversations."
            }
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
