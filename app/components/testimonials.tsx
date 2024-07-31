"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/bundle";
import { API_URL, IMAGE_URL } from "@/constants";

interface Testimonials {
  id: string;
  designation: string;
  client: string;
  title: string;
  description: string;
  image: any;
  starRating: number;
}

const Testimonials = () => {
  const query = "*[_type=='testimonials']";
  const [testimonials, setTestimonials] = useState<Testimonials[]>([]);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const encodedQuery = encodeURIComponent(query);
        const fullUrl = `${API_URL}?query=${encodedQuery}`;
        const response = await fetch(fullUrl);
        const data = await response.json();
        const result: Testimonials[] = mapApiResultToTestimonials(data);
        setTestimonials(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const getImageUrl = (ref: string) => {
    return `${IMAGE_URL}${ref.replace("image-", "").replace(/-(\w+)$/, ".$1")}`;
  };

  const getDescriptionText = (body: any): string => {
    return body
      .map((block: any) => block.children.map((span: any) => span.text).join(""))
      .join("\n");
  };

  const mapApiResultToTestimonials = (apiResult: any): Testimonials[] => {
    return apiResult.result.map((testimonial: any) => ({
      id: testimonial._id,
      title: testimonial.title,
      description: getDescriptionText(testimonial.body),
      designation: testimonial.designation,
      client: testimonial.client,
      starRating: testimonial.starRating,
      image: getImageUrl(testimonial.photo.asset._ref),
    }));
  };

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
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="py-4">
                  <div className="stars text-2xl flex justify-center gap-1 mb-5">
                    {Array.from({ length: 5 }, (_, index) => (
                      <span
                        key={index}
                        className={
                          index < testimonial.starRating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="line-clamp-3 text-sm text-center text-gray-800 font-light w-10/12 xl:w-1/2 mx-auto mb-5">
                    {testimonial.description}
                  </p>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.title}
                    className="mb-3 mx-auto rounded-full h-20 w-20 object-cover shadow-sm border-2"
                    width={100}
                    height={74}
                  />
                  <h2 className="line-clamp-1 font-semibold text-sm text-center text-gray-700">
                    {testimonial.client}
                  </h2>
                  <h3 className="line-clamp-1 font-light text-sm text-center text-gray-400">
                    {testimonial.designation}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
