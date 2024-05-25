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
              Comprehensive Care
            </h6>
            <h2 className="text-2xl text-sky-900 font-semibold text-center">
              Our Dental Services
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
                  description="Enhance your smile with our cosmetic dentistry services, including teeth whitening, veneers, and more. Achieve the smile you've always wanted."
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-4">
                <Servicebox
                  image="pediatric-dentistry"
                  caption="Pediatric Dentistry"
                  description="Our pediatric dentistry services ensure that your child's dental health is in good hands. We provide gentle and comprehensive care for young smiles."
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-4">
                <Servicebox
                  image="oral-surgery"
                  caption="Oral Surgery"
                  description="Our oral surgery services cover a range of procedures, from extractions to corrective jaw surgery. Trust our skilled surgeons for safe and effective treatment."
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-4">
                <Servicebox
                  image="dental-checkup"
                  caption="Dental Checkups"
                  description="Regular dental checkups are essential for maintaining optimal oral health. Schedule your checkup today to keep your smile healthy and bright."
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-4">
                <Servicebox
                  image="gum-surgery"
                  caption="Gum Surgery"
                  description="We offer advanced gum surgery procedures to treat periodontal disease and improve your gum health. Restore the foundation of your smile with our expert care."
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-4">
                <Servicebox
                  image="implants"
                  caption="Dental Implants"
                  description="Replace missing teeth with our high-quality dental implants. Enjoy a natural-looking and durable solution that restores both function and aesthetics."
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-4">
                <Servicebox
                  image="sealants"
                  caption="Dental Sealants"
                  description="Protect your teeth from decay with dental sealants. This quick and painless procedure creates a barrier against cavities, keeping your teeth strong and healthy."
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-4">
                <Servicebox
                  image="aligners"
                  caption="Teeth Alignment"
                  description="Straighten your teeth with our advanced teeth alignment options, including braces and Invisalign. Achieve a beautiful, straight smile with our personalized treatments."
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
