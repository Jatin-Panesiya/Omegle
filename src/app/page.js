"use client";

import Header from "@/components/subComponents/Header";
import Footer from "@/components/subComponents/Footer";
import MainHome from "@/components/mainComponents/MainHome";
import { useState } from "react";

export default function Home() {
  const [component, setComponent] = useState(1);
  return (
    <>
      <Header setComponent={setComponent} />
      <MainHome />
      <Footer />
    </>
  );
}
