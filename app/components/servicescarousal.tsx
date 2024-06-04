"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/bundle";
import Servicebox from "./servicebox";
import { API_URL, IMAGE_URL } from "@/constants";

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

  const query = "*[_type=='treatments']";

  const [treatments, setTreatments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const encodedQuery = encodeURIComponent(query);
        const fullUrl = `${API_URL}?query=${encodedQuery}`;

        const response = await fetch(fullUrl);
        const data = await response.json();
        console.log(data);
        setTreatments(data.result); // Assuming "result" holds the treatments array
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const getImageUrl = (ref: string) => {
    return `${IMAGE_URL}${ref.replace("image-", "").replace(/-(\w+)$/, ".$1")}`;
  };

  const getDescriptionText = (body: any) => {
    return body
      .map((block: any) =>
        block.children.map((span: any) => span.text).join("")
      )
      .join("\n");
  };

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
            {treatments.length > 0 ? (
              treatments.map((treatment: any) => (
                <SwiperSlide key={treatment._id}>
                  <div className="py-4">
                    <Servicebox
                      key={treatment._id}
                      image={getImageUrl(treatment.icon.asset._ref)}
                      caption={treatment.title}
                      description={getDescriptionText(treatment.body)}
                      slug={treatment.slug.current}
                    />
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Servicecarousal;
