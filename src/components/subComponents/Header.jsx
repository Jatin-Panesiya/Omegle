"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { linkData } from "@/constants";
import { RiMenu3Fill } from "react-icons/ri";
const Header = ({ setComponent }) => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="flex items-center justify-between px-[3%] sm:px-[9%] py-4  bg-white sticky top-0 z-10 ">
      <div>
        <img src={"/Logo.png"} alt="LOGO" className="w-[160px] sm:w-[200px]" />
      </div>

      {/* desktop */}
      <div className="bg-[#fff2e6] text-[#ff7f00] font-bold px-5 py-2.5 rounded-3xl text-[22px]  display__responsivee">
        <p>Talk to strangers!</p>
      </div>
      {/* Mobile */}
      <div className="bg-[#ff7f00] text-white font-bold px-5  text-xl text-center py-0.5 display__responsive absolute  left-0 w-full top-[70px]">
        <p>Talk to strangers!</p>
      </div>

      {/* Desktop Menu */}

      <div className="font-bold ">
        <div className="hidden md:flex gap-7">
          {linkData.map(({ id, linkName, href }) => {
            return (
              <div key={id}>
                <Link
                  href={href}
                  onClick={() =>
                    id === 2 ? setComponent(id + 1) : setComponent(id)
                  }
                >
                  {linkName}
                </Link>
              </div>
            );
          })}
        </div>

        <RiMenu3Fill
          className="md:hidden flex text-2xl font-bold"
          onClick={() => setIsMobile(!isMobile)}
        />
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div className="grid gap-7 font-bold md:hidden absolute bg-white w-full left-0 text-center top-[70px] py-10">
          {linkData.map(({ id, linkName, href }) => {
            return (
              <div key={id}>
                <Link
                  href={href}
                  onClick={() => {
                    setComponent(id);
                    setIsMobile(false);
                  }}
                >
                  {linkName}
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Header;
