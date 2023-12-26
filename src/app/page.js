"use client";

import Header from "@/components/subComponents/Header";
import Footer from "@/components/subComponents/Footer";
import MainHome from "@/components/mainComponents/MainHome";
import { useState } from "react";
import VideoCall from "@/components/mainComponents/VideoCall";
import NewVideoCall from "@/components/mainComponents/NewVideoCall";

export default function Home() {
  const [component, setComponent] = useState(1);

  let renderedComponent;
  switch (component) {
    case 1:
      renderedComponent = <MainHome setComponent={setComponent} />;
      break;
    case 2:
      renderedComponent = <VideoCall setComponent={setComponent} />;
      break;
    case 3:
      renderedComponent = <NewVideoCall setComponent={setComponent} />;
      break;
    default:
      renderedComponent = <MainHome setComponent={setComponent} />;
  }

  return (
    <>
      <Header setComponent={setComponent} />
      {renderedComponent}
      <Footer />
    </>
  );
}
