"use client";
import NewVideoCall from "@/components/mainComponents/NewVideoCall";
import VideoCall from "@/components/mainComponents/VideoCall";
import Footer from "@/components/subComponents/Footer";
import Header from "@/components/subComponents/Header";
import React, { useEffect, useState } from "react";
const Page = () => {
  const [component, setComponent] = useState(2);
  const [userID, setUserID] = useState(null);
  useEffect(() => {
    setUserID(Math.floor(100000000 + Math.random() * 900000000));
  },[]);
  return (
    <>
      <Header />
      {component === 2 ? (
        <NewVideoCall setComponent={setComponent} userId = {userID}/>
      ) : (
        <VideoCall setComponent={setComponent} userId = {userID}/>
      )}
      <Footer />
    </>
  );
};

export default Page;
