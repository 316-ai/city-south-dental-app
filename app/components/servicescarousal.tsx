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

const Servicecarousal = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 720) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(4);
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
      <div className="px-3 py-7 lg:py-12 bg-white">
        <div className="lg:container mx-auto">
          <div>
            <h6 className="text-sm text-sky-600 mb-3 text-center">
              Sub Header
            </h6>
            <h2 className="text-2xl text-sky-900 font-semibold text-center">
              Our Dental Offerings
            </h2>
          </div>

          <Swiper
            modules={[Navigation, Autoplay, A11y]}
            // navigation
            slidesPerView={slidesPerView}
            spaceBetween={12}
            autoplay={true}
            loop={true}
            className="w-full mt-8"
          >
            <SwiperSlide>
              <div className="py-4">
                <Servicebox
                  image="cosmetic-dentistry"
                  caption="Cosmetic Dentistry"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, doloremque molestias. Eveniet, rem et."
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-4">
                <Servicebox
                  image="pediatric-dentistry"
                  caption="Pediatric Dentistry"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, doloremque molestias. Eveniet, rem et."
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-4">
                <Servicebox
                  image="oral-surgery"
                  caption="Oral Surgery"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, doloremque molestias. Eveniet, rem et."
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-4">
                <Servicebox
                  image="dental-checkup"
                  caption="Dental Checkup"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, doloremque molestias. Eveniet, rem et."
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-4">
                <Servicebox
                  image="gum-surgery"
                  caption="Gum Surgery"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, doloremque molestias. Eveniet, rem et."
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-4">
                <Servicebox
                  image="implants"
                  caption="Dental Implants"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, doloremque molestias. Eveniet, rem et."
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-4">
                <Servicebox
                  image="sealants"
                  caption="Dental Sealants"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, doloremque molestias. Eveniet, rem et."
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-4">
                <Servicebox
                  image="aligners"
                  caption="Teeth Alignment"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, doloremque molestias. Eveniet, rem et."
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Servicecarousal;
