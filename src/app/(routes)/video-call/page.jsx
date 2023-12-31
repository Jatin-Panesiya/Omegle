"use client";
import NewVideoCall from "@/components/mainComponents/NewVideoCall";
import VideoCall from "@/components/mainComponents/VideoCall";
import Footer from "@/components/subComponents/Footer";
import Header from "@/components/subComponents/Header";
import React, { useState } from "react";
const page = () => {
  const [component, setComponent] = useState(2);

  return (
    <>
      <Header />
      {component === 2 ? (
        <NewVideoCall setComponent={setComponent} />
      ) : (
        <VideoCall setComponent={setComponent} />
      )}
      <Footer />
    </>
  );
};

export default page;
