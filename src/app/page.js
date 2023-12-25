import FeatureCard from "@/components/FeatureCard";
import Header from "@/components/Header";
import { MdVideoCall } from "react-icons/md";

export default function Home() {
  return (
    <>
      <Header />
      {/* Hero Section Starts */}
      <div className="px-[3%] sm:px-[9%] text-center py-16 ">
        <h1 className="font-bold text-responsive text-3xl md:text-4xl lg:text-[46px] transition-all duration-300">
          Omegle Video Call
        </h1>
        <p className=" py-5 md:py-10 text-[16px] sm:text-lg ">
          Omegle is a Great Spot to meet people online. Where a stranger can
          initiate Video Conversation with another stranger at random over the
          internet using webcam. Download Omegle App for mobile, Start chatting
          instantly without Registration.
        </p>
        <button className="flex items-center bg-[#3f9fff] transition-all duration-300 text-white px-4 py-2 shadow-2xl border-b-2 border-5 border-white shadow-[#3f9fff] rounded-xl gap-2 text-2xl mx-auto btn_txt_responsive">
          <MdVideoCall className="text-3xl btn_txt_responsive" /> Start Video
          Call
        </button>
      </div>
      {/* Hero Section Ends */}

      {/* Features Section Starts*/}

      <div className="featureCard__Responsive gap-5 px-[3%] sm:px-[9%] py-5 ">
        <FeatureCard
          imagePath="/2.png"
          altTxt="Talk To Strangers"
          heading="Talk to Strangers "
          text="The internet is full of amazing people, Omegle lets you chat with them."
        />
        <FeatureCard
          imagePath="/1.png"
          altTxt="Live Video Chat"
          heading="Live Video Chat"
          text="Texting and webcamming are two ways in omegle to connect with stranger"
        />
        <FeatureCard
          imagePath="/3.png"
          altTxt="Interact with Girls"
          heading="Interact with Girls"
          text="Using college email address Omegle lets you meet other college students."
        />
      </div>

      {/* Features Section Ends*/}

      {/* Omegle Video Call info section Starts */}
      <div className="px-[3%] sm:px-[9%]">
        <h1 className="font-bold text-4xl py-5">Omegle Video Call</h1>
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
    </>
  );
}
