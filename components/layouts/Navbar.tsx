"use client";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { monomaniacFont } from "../../utils/font";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClose = () => {
    setNav(!nav);
  };

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
            ? "container  fixed top-[75px] left-0 right-0 bottom-0 flex justify-center items-center h-[1200vh] bg-[#fdfcf1] border border-theme-green ease-in-out duration-700 z-[80]"
            : "container fixed top-[-200%] left-0 right-0 bottom-0 flex justify-center items-center h-[120vh] bg-[#fdfcf1] border border-theme-green ease-in-out duration-700 z-[80]"
        }
      >
				<div className="flex flex-col py-10 mb-10 items-center w-[320px] h-full space-y-6">

					<h2 className="text-3xl">Isi Website</h2>

          <Link href={'/tarunatani'}>
            <button onClick={handleClose} className="bg-theme-green text-xl rounded-3xl w-[330px] h-[55px] border border-black text-white">
                <p className={monomaniacFont.className}>Taruna Tani</p>
            </button>
          </Link>

          <Link href={'/banksampah'}>
            <button onClick={handleClose} className="bg-theme-green text-xl rounded-3xl w-[330px] h-[55px] border border-black text-white">
              <p className={monomaniacFont.className}>Bank Sampah</p>
            </button>
          </Link>

          <Link href={'/kontak'}>
            <button onClick={handleClose} className="bg-theme-green text-xl rounded-3xl w-[330px] h-[55px] border border-black text-white">
              <p className={monomaniacFont.className}>Kontak</p>
            </button>
          </Link>

          <button onClick={handleClose} className="bg-theme-green text-xl rounded-3xl w-[330px] h-[55px] border border-black text-white">
            <p className={monomaniacFont.className}>Prestasi</p>
          </button>


          <Link href="/produk">
            <button onClick={handleClose} className="bg-theme-green text-xl rounded-3xl w-[330px] h-[55px] border border-black text-white">
              <p className={monomaniacFont.className}>Produk</p>
            </button>
          </Link>

          <Link href={'/tentangkami'}>
            <button onClick={handleClose} className="bg-theme-green text-xl rounded-3xl w-[330px] h-[55px] border border-black text-white">
              <p className={monomaniacFont.className}>Tentang Kami</p>
            </button>
          </Link>

          <div className="relative w-[430px] h-[80px] z-[-1]">
            <Image 
              src="/images/leaf-1.png"
              alt="leaf"
              fill={true}
            />
          </div>

          <div className="w-[432px] min-h-[5vh] bg-theme-green shadow-inside"/>

				</div>

			</div>
  

      {/* End Desktop Mobile */}
    </div>
  );
};

export default Navbar;
