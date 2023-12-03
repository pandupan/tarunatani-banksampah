'use client';

import Image from "next/image";
import Link from 'next/link';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

import { cardBibit, cardIot, image, imageArtikel } from "@/lib/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


  
  const Page = () => {

  return (
    <div className="container w-full border border-theme-green">

      <div className="flex justify-between items-center w-full mx-auto mt-[75px] px-10">
          <Image
          src="/images/leaf-4.png"
          alt="leaf"
          width={50}
          height={80}
          />
          <h2 className="text-2xl text-center underline-offset-4 mt-10">Artikel Edukasi Taruna Tani</h2>
          <Image
          src="/images/leaf-4.png"
          alt="leaf"
          width={50}
          height={80}
          />
      </div>

      <div className="flex flex-col justify-center pt-[-1] items-center w-[320px] sm:min-w-[430px] h-full space-y-8 mx-auto">

        <h2 className="text-3xl text-left underline-offset-4 mt-10">Artikel Terbaru</h2>

        <Swiper
          navigation
          pagination={{type : "fraction"}}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{delay : 3000}}
          className="h-[230px] w-full rounded-lg text-white"
        >
          {image.map((image,index) =>(
            <SwiperSlide key={index}>
              <div className="flex w-full h-full items-center justify-center">
                <Link href={image.link}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="block h-full w-full object-contain"
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          navigation
          pagination={{type : "fraction"}}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{delay : 3000}}
          className="h-[230px] w-full rounded-lg text-white"
        >
          {image.map((image,index) =>(
            <SwiperSlide key={index}>
              <div className="flex w-full h-full items-center justify-center">
                <Link href={image.link}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="block h-full w-full object-contain"
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>


        <h2 className="text-3xl text-left underline-offset-4 mt-10">1. Tanah</h2>
        
        <Swiper
          navigation
          pagination={{type : "fraction"}}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{delay : 3000}}
          className="h-[230px] w-full rounded-lg text-white"
        >
          {imageArtikel.map((image,index) =>(
            <SwiperSlide key={index}>
              <div className="flex w-full h-full items-center justify-center">
                <Link href={image.link}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="block h-full w-full object-cover"
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <h2 className="text-3xl text-left underline-offset-4 mt-10">2. Bibit</h2>
        
        <Swiper
          navigation
          pagination={{type : "fraction"}}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{delay : 3000}}
          className="h-[230px] w-full rounded-lg text-white"
        >
          {cardBibit.map((image,index) =>(
            <SwiperSlide key={index}>
              <div className="flex w-full h-full items-center justify-center">
                <Link href={image.link}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="block h-full w-full object-cover"
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <h2 className="text-3xl text-left underline-offset-4 mt-10">3. Teknologi Pertanian</h2>
        
        <Swiper
          navigation
          pagination={{type : "fraction"}}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{delay : 3000}}
          className="h-[230px] w-full rounded-lg text-white"
        >
          {cardIot.map((image,index) =>(
            <SwiperSlide key={index}>
              <div className="flex w-full h-full items-center justify-center">
                <Link href={image.link}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="block h-full w-full object-cover"
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

        <div className="w-full h-auto flex items-center justify-between">
          <div>
              <Image 
              src="/images/leaf-2-l.png"
              alt="leaf"
              width={100}
              height={80}
              />
          </div>
          <div>
              <Image 
              src="/images/leaf-2-r.png"
              alt="leaf"
              width={100}
              height={80}
              />
          </div>

        </div>
    </div>
  )
}

export default Page
