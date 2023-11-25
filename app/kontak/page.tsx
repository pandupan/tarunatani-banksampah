import { monomaniacFont } from "@/utils/font"
import Image from "next/image"

const page = () => {
  return (
    <div className="container w-full mih-h-[100vh] border border-theme-green">
        
      <div className="flex flex-col  justify-center pt-10 items-center w-[320px] min-h-[100vh] space-y-8 mx-auto mt-[75px] ">

        <h2 className="text-2xl text-center">
          Punya Pertanyaan Seputar Kami
        </h2>

        <button className="bg-theme-green text-xl rounded-3xl w-[330px] h-[55px] border border-black text-white">
            <p className={monomaniacFont.className}>WhatApp</p>
        </button>

        <button className="bg-theme-green text-xl rounded-3xl w-[330px] h-[55px] border border-black text-white">
            <p className={monomaniacFont.className}>Instagram</p>
        </button>

        <button className="bg-theme-green text-xl rounded-3xl w-[330px] h-[55px] border border-black text-white">
            <p className={monomaniacFont.className}>Gmail</p>
        </button>

        <button className="bg-theme-green text-xl rounded-3xl w-[330px] h-[55px] border border-black text-white">
            <p className={monomaniacFont.className}>Youtube</p>
        </button>

      </div>

      <div className="w-full h-auto flex items-center justify-between">
        <div>
          <Image
            src="/images/leaf-3-l.png"
            alt="leaf"
            width={120}
            height={80}
          />
        </div>
        <div>
          <Image
            src="/images/leaf-3-r.png"
            alt="leaf"
            width={120}
            height={80}
          />
        </div>
      </div>
    </div>
  )
}

export default page
