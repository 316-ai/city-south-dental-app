"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/bundle";
import Doctorsbox from "./doctorsbox";
import { API_URL } from "@/constants";

interface Doctors {
  id: string;
  name: string;
  description: string;
  image:any;
}


const Doctorscarousal = () => {

  const query = "*[_type=='doctors']";
  const [doctors, setDoctors] = useState<Doctors[]>([]);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const encodedQuery = encodeURIComponent(query);
        const fullUrl = `${API_URL}?query=${encodedQuery}`;

        const response = await fetch(fullUrl);
        const data = await response.json();
        const result: Doctors[] = mapApiResultToDoctors(data); 
        console.log(result);
        setDoctors(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  const mapApiResultToDoctors = (apiResult: any): Doctors[] => {
    return apiResult.result.map((doctor: any) => ({
      id: doctor._id,
      name: doctor.name,
      description: doctor.description,
      image: "getImageUrl(doctor.photo.asset._ref)"
    }));
  };

  return (
    <>
<Swiper
  modules={[Navigation, Autoplay, A11y]}
  slidesPerView={slidesPerView}
  spaceBetween={12}
  autoplay={true}
  loop={true}
  className="w-full"
>
  {doctors.map((doctor) => (
    <SwiperSlide key={doctor.id}>
      <div className="py-4">
        <Doctorsbox
          photo="/doctor-1.jpeg"
          name={doctor.name}
          brief={doctor.description}
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>
    </>
  );
};

export default Doctorscarousal;
