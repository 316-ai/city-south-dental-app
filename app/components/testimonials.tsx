"use client";

import Link from "next/link";
import FeatherIcon from "feather-icons-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/bundle";

const Testimonials = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(1);
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
      <div className="px-3 py-7 lg:py-12 gradient-start">
        <div className="lg:container mx-auto">
          <div>
            <h6 className="text-sm text-sky-600 text-center mb-3">
              Testimonials Revealed
            </h6>
            <h2 className="text-2xl text-sky-900 text-center font-semibold">
              Our Client Testimonials
            </h2>
          </div>
          <Swiper
            modules={[Navigation, Autoplay, A11y]}
            navigation
            slidesPerView={slidesPerView}
            spaceBetween={12}
            autoplay={true}
            loop={true}
            className="w-full mt-4"
          >
            <SwiperSlide>
              <div className="py-4">
                <div className="stars text-2xl flex justify-center gap-1 mb-5">
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-gray-300">★</span>
                </div>
                <p className="line-clamp-3 text-sm text-center text-gray-800 font-light w-10/12  xl:w-1/2 mx-auto mb-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Impedit magni atque reiciendis beatae fugit optio obcaecati
                  eius culpa, ipsum deserunt veniam nisi, saepe, quam
                  necessitatibus minus velit? Reprehenderit, quos illum.
                </p>
                <Image
                  src="/doctor-1.jpeg"
                  alt="pediatric-dentistry"
                  className="mb-3 mx-auto rounded-full h-20 w-20 object-cover shadow-sm border-2"
                  width={100}
                  height={74}
                />
                <h2 className="line-clamp-1 font-semibold text-sm text-center text-gray-700">
                  Lorem, ipsum dolor.
                </h2>
                <h3 className="line-clamp-1 font-light text-sm text-center text-gray-400">
                  Lorem, ipsum dolor.
                </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-4">
                <div className="stars text-2xl flex justify-center gap-1 mb-5">
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-gray-300">★</span>
                </div>
                <p className="line-clamp-3 text-sm text-center text-gray-800 font-light w-10/12  xl:w-1/2 mx-auto mb-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Impedit magni atque reiciendis beatae fugit optio obcaecati
                  eius culpa, ipsum deserunt veniam nisi, saepe, quam
                  necessitatibus minus velit? Reprehenderit, quos illum.
                </p>
                <Image
                  src="/doctor-1.jpeg"
                  alt="pediatric-dentistry"
                  className="mb-3 mx-auto rounded-full h-20 w-20 object-cover shadow-sm border-2"
                  width={100}
                  height={74}
                />
                <h2 className="line-clamp-1 font-semibold text-sm text-center text-gray-700">
                  Lorem, ipsum dolor.
                </h2>
                <h3 className="line-clamp-1 font-light text-sm text-center text-gray-400">
                  Lorem, ipsum dolor.
                </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-4">
                <div className="stars text-2xl flex justify-center gap-1 mb-5">
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-gray-300">★</span>
                </div>
                <p className="line-clamp-3 text-sm text-center text-gray-800 font-light w-10/12  xl:w-1/2 mx-auto mb-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Impedit magni atque reiciendis beatae fugit optio obcaecati
                  eius culpa, ipsum deserunt veniam nisi, saepe, quam
                  necessitatibus minus velit? Reprehenderit, quos illum.
                </p>
                <Image
                  src="/doctor-1.jpeg"
                  alt="pediatric-dentistry"
                  className="mb-3 mx-auto rounded-full h-20 w-20 object-cover shadow-sm border-2"
                  width={100}
                  height={74}
                />
                <h2 className="line-clamp-1 font-semibold text-sm text-center text-gray-700">
                  Lorem, ipsum dolor.
                </h2>
                <h3 className="line-clamp-1 font-light text-sm text-center text-gray-400">
                  Lorem, ipsum dolor.
                </h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
