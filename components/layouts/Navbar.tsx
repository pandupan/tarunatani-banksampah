"use client";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";
import ButtonNav from "@/ui/ButtonNav";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="container inset-0 fixed flex justify-between items-center w-full h-[75px] bg-theme-green">
      {/* Hamburger On Mobile  */}
      <div className="flex  justify-between items-center w-full h-[75px]  px-[25px] z-50 text-white">
        {nav ? (
          <AiOutlineClose
            size={30}
            onClick={() => setNav(!nav)}
          />
        ) : (
          <AiOutlineMenu
            size={30}
            onClick={() => setNav(!nav)}
          />
        )}
      </div>
      {/* End Hamburger On Mobile  */}

      {/* Desktop Mobile */}
      <div
        className={
          nav
            ? "container  fixed top-[75px] left-0 right-0 bottom-0 flex justify-center items-center h-[100vh] bg-[#fdfcf1] border border-theme-green ease-in-out duration-700 z-[80]"
            : "container fixed top-[-200%] left-0 right-0 bottom-0 flex justify-center items-center h-[100vh] bg-[#fdfcf1] border border-theme-green ease-in-out duration-700 z-[80]"
        }
      >
				<div className="flex flex-col justify-center w-[320px]">
					<h2>Isi Website</h2>
					<ButtonNav title="Taruna Tani"/>
				</div>

			</div>
  

      {/* End Desktop Mobile */}
    </div>
  );
};

export default Navbar;
