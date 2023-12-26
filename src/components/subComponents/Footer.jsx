import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-white px-[3%] sm:px-[9%] py-6 flex items-center justify-center md:justify-between flex-wrap">
      <p className="flex md:items-center items-start md:gap-1 gap-0 text-lg text-center">
        ©️ Omegle 2024. We are not affiliated with Omegle.com LLC.
      </p>
      <span className="flex items-center gap-2 text-lg py-3 md:py-0">
        <Link href={""}>Terms</Link> | <Link href={""}>Privacy</Link> |
        <Link href={""}>Contact</Link>
      </span>
    </div>
  );
};

export default Footer;
