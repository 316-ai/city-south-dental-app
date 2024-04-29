"use client";

import Link from "next/link";
import FeatherIcon from "feather-icons-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ type: "bullets", clickable: true }}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        className="w-full"
      >
        <SwiperSlide>
          <div className="relative select-none">
            <div className="px-3 py-2 absolute top-0 bottom-0 w-full h-full flex items-center bg-sky-800 bg-opacity-30">
              <div className="lg:container mx-auto">
                <h1 className="font-semibold text-3xl lg:text-5xl leading-snug text-white text-shadow w-full text-center">
                  Your Journey To A Radiant Smile Starts Here.
                </h1>
              </div>
            </div>
            <Image
              src="/banner.jpeg"
              alt="banner"
              className="w-full slider-height object-cover"
              width={1500}
              height={1000}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative select-none">
            <div className="px-3 py-2 absolute top-0 bottom-0 w-full h-full flex items-center bg-sky-800 bg-opacity-30">
              <div className="lg:container mx-auto">
                <h1 className="font-semibold text-3xl lg:text-5xl leading-snug text-white text-shadow w-full text-center">
                  Complete Dental Solution
                </h1>
              </div>
            </div>
            <Image
              src="/banner-2.jpeg"
              alt="banner"
              className="w-full slider-height object-cover"
              width={1500}
              height={1000}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative select-none">
            <div className="px-3 py-2 absolute top-0 bottom-0 w-full h-full flex items-center bg-sky-800 bg-opacity-30">
              <div className="lg:container mx-auto">
                <h1 className="font-semibold text-3xl lg:text-5xl leading-snug text-white text-shadow w-full text-center">
                  Let Us Brighten Your Smile
                </h1>
              </div>
            </div>
            <Image
              src="/banner-3.jpeg"
              alt="banner"
              className="w-full slider-height object-cover"
              width={1500}
              height={1000}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
