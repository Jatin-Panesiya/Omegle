"use client";

import Header from "@/components/subComponents/Header";
import Footer from "@/components/subComponents/Footer";
import MainHome from "@/components/mainComponents/MainHome";
import { useState } from "react";
import VideoCall from "@/components/mainComponents/VideoCall";
import NewVideoCall from "@/components/mainComponents/NewVideoCall";

export default function Home() {
  const [component, setComponent] = useState(1);

  return (
    <>
      <Header setComponent={setComponent} />

      {component === 1 && <MainHome setComponent={setComponent} />}
      {component === 2 && <VideoCall setComponent={setComponent} />}
      {component === 3 && <NewVideoCall setComponent={setComponent} />}

      <Footer />
    </>
  );
}
