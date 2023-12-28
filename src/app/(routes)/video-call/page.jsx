"use client";
import NewVideoCall from "@/components/mainComponents/NewVideoCall";
import VideoCall from "@/components/mainComponents/VideoCall";
import Footer from "@/components/subComponents/Footer";
import Header from "@/components/subComponents/Header";
import React, { useState } from "react";
const page = () => {
  const [component, setComponent] = useState(1);

  return (
    <>
      <Header />
      {component === 1 ? (
        <VideoCall setComponent={setComponent} />
      ) : (
        <NewVideoCall setComponent={setComponent} />
      )}
      <Footer />
    </>
  );
};

export default page;
