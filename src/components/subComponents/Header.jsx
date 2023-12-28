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
        <Image
          src={"/LOGO.svg"}
          alt="LOGO"
          className="700:w-60 300:w-40 400:w-44 500:w-48 600:w-52 h-14 w-36 cursor-pointer"
          onClick={() => setComponent(1)}
          width={240}
          height={60}
        />
      </div>

      {/* desktop */}
      <div className="bg-[#FF7F00] bg-opacity-10 text-[#FF7F00] font-bold px-8 py-2.5 rounded-3xl text-2xl 1000:block hidden  ">
        <p>Talk to strangers!</p>
      </div>
      {/* Mobile */}
      <div className="bg-[#ff7f00] text-white font-bold px-5 text-base  700:text-xl text-center py-0.5  1000:hidden absolute  left-0 w-full top-20">
        <p>Talk to strangers!</p>
      </div>

      {/* Desktop Menu */}

      <div className="font-bold ">
        <div className="hidden md:flex gap-7">
          {linkData.map(({ id, linkName, href }, key) => {
            return (
              <div key={key}>
                <Link href={href} className="text-base">
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
