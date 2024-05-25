"use client";

import Link from "next/link";
import FeatherIcon from "feather-icons-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/bundle";
import Servicebox from "./servicebox";
import Doctorsbox from "./doctorsbox";

const Doctorscarousal = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay, A11y]}
        // navigation
        slidesPerView={slidesPerView}
        spaceBetween={12}
        autoplay={true}
        loop={true}
        className="w-full"
      >
        <SwiperSlide>
          <div className="py-4">
            <Doctorsbox
              photo="/doctor-1.jpeg"
              name="John T Sebastian"
              brief="Enhance your smile with our cosmetic dentistry services, including teeth whitening, veneers, and more. Achieve the smile you've always wanted."
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-4">
            <Doctorsbox
              photo="/doctor-1.jpeg"
              name="Simon N V"
              brief="Our pediatric dentistry services ensure that your child's dental health is in good hands. We provide gentle and comprehensive care for young smiles."
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-4">
            <Doctorsbox
              photo="/doctor-1.jpeg"
              name="Jithin 316"
              brief="Our oral surgery services cover a range of procedures, from extractions to corrective jaw surgery. Trust our skilled surgeons for safe and effective treatment."
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-4">
            <Doctorsbox
              photo="/doctor-1.jpeg"
              name="Simon N V"
              brief="Our pediatric dentistry services ensure that your child's dental health is in good hands. We provide gentle and comprehensive care for young smiles."
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Doctorscarousal;
