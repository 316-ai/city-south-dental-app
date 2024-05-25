"use client";

import Link from "next/link";
import FeatherIcon from "feather-icons-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const Story = () => {
  return (
<>
  <div className="px-3 py-2 pt-7 lg:pt-12">
    <div className="lg:container mx-auto">
      <div className="grid grid-cols-8 gap-12 md:gap-8">
        <div className="col-span-8 lg:col-span-1 flex lg:flex-col justify-between flex-wrap gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl font-semibold text-sky-600">34+</h2>
            <h6 className="text-sm text-gray-500">Awards Won</h6>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl font-semibold text-sky-600">100K+</h2>
            <h6 className="text-sm text-gray-500">Happy Patients</h6>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl font-semibold text-sky-600">100%</h2>
            <h6 className="text-sm text-gray-500">Patient Satisfaction</h6>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl font-semibold text-sky-600">10+</h2>
            <h6 className="text-sm text-gray-500">Years of Experience</h6>
          </div>
        </div>
        <div className="col-span-4 md:col-span-3">
          <Image
            src="/healthy-smile.jpeg"
            alt="Healthy smile"
            className="h-full object-cover shadow rounded-3xl"
            width={1500}
            height={1000}
          />
        </div>
        <div className="col-span-8 md:col-span-5 lg:col-span-4 flex flex-col justify-center">
          <h6 className="text-sm text-sky-600 mb-3">About Us</h6>
          <h2 className="text-2xl text-sky-900 font-semibold mb-3">
            Building Healthy Smiles and Happy Lives
          </h2>
          <p className="text-sm text-gray-600 font-thin mb-5">
            At City South Dental, we are dedicated to providing top-notch dental care to the Brampton community. Our skilled dental professionals use the latest technology to offer comprehensive and personalized treatments. From preventive care to advanced dental procedures, we are committed to helping you achieve optimal oral health.
          </p>
          <p className="text-sm text-sky-900 mb-5">
            Our services include cosmetic dentistry, orthodontics, dental implants, and emergency dental care. We pride ourselves on creating a welcoming environment for all our patients. Your smile is our priority.
          </p>
          <h6 className="text-sm text-gray-700">
            <b>Chief Doctor</b> - Dr. Rajvinder Bhatia
          </h6>
        </div>
      </div>
    </div>
  </div>

  <div className="bg-blue-950 mt-6 md:mt-12">
    <div className="px-3 py-2">
      <div className="lg:container mx-auto grid grid-cols-8">
        <div className="col-span-8 md:col-span-5 flex flex-col justify-center py-6">
          <h6 className="text-sm text-sky-300 mb-3">Professional Dental Care Brampton</h6>
          <h2 className="text-2xl text-white font-semibold mb-5">
            Dedicated to Building Healthy Smiles
          </h2>
          <p className="text-sm text-gray-300 font-thin pr-3 mb-6">
            City South Dental has been serving the Brampton community for over a decade. Our mission is to provide comprehensive dental care in a friendly and comfortable environment. We believe in the power of a healthy smile and are committed to helping our patients achieve and maintain optimal oral health.
          </p>
          <div className="grid lg:grid-cols-2">
            <li className="text-gray-300 text-sm font-normal mb-1 lg:mb-2 list-decimal">
              State-of-the-art dental technology.
            </li>
            <li className="text-gray-300 text-sm font-normal mb-1 lg:mb-2 list-decimal">
              Comfortable and welcoming environment.
            </li>
            <li className="text-gray-300 text-sm font-normal mb-1 lg:mb-2 list-decimal">
              Highly skilled and experienced team.
            </li>
            <li className="text-gray-300 text-sm font-normal mb-1 lg:mb-2 list-decimal">
              Multilingual services available.
            </li>
          </div>
        </div>
        <Image
          src="/care-smile.jpeg"
          alt="Care for your smile"
          className="hidden md:block md:col-span-3 h-full object-cover shadow rounded-3xl relative -top-10"
          width={1500}
          height={1000}
        />
      </div>
    </div>
  </div>
</>

  );
};

export default Story;
