"use client";

import Link from "next/link";
import FeatherIcon from "feather-icons-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/bundle";

const Banner = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ type: "bullets", clickable: true }}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        loop
        className="w-full"
      >
        <SwiperSlide>
          <div className="relative select-none">
            <div className="px-3 py-2 absolute top-0 bottom-0 w-full h-full flex items-center bg-sky-800 bg-opacity-30">
              <div className="lg:container mx-auto">
                <h1 className="font-semibold text-3xl lg:text-5xl leading-snug text-white text-shadow w-full text-center mb-8">
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
                <h1 className="font-semibold text-3xl lg:text-5xl leading-snug text-white text-shadow w-full text-center mb-8">
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
                <h1 className="font-semibold text-3xl lg:text-5xl leading-snug text-white text-shadow w-full text-center mb-8">
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

      <div className="doctors absolute bottom-28 left-0 right-0 z-10 select-none pointer-events-none">
        <div className="flex justify-center">
          <Image
            src="/doctor-1.jpeg"
            alt="doctors"
            className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-full border-2 border-white shadow-md"
            width={1500}
            height={1000}
          />
          <Image
            src="/doctor-2.jpeg"
            alt="doctors"
            className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-full border-2 border-white shadow-md -ml-4 sm:-ml-7"
            width={1500}
            height={1000}
          />
          <Image
            src="/doctor-3.jpeg"
            alt="doctors"
            className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-full border-2 border-white shadow-md -ml-4 sm:-ml-7"
            width={1500}
            height={1000}
          />
          <Image
            src="/doctor-4.jpeg"
            alt="doctors"
            className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-full border-2 border-white shadow-md -ml-4 sm:-ml-7"
            width={1500}
            height={1000}
          />
        </div>
        <h2 className="text-center text-sm text-white text-shadow mt-2">
          Doctor's No.1 Choice
        </h2>
      </div>
    </div>
  );
};

export default Banner;
