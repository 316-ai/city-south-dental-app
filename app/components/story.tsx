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
                <h2 className="text-4xl font-semibold text-sky-600">100+</h2>
                <h6 className="text-sm text-gray-500">Cured Cases</h6>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-4xl font-semibold text-sky-600">03</h2>
                <h6 className="text-sm text-gray-500">Facilitated Clinics</h6>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-4xl font-semibold text-sky-600">1K</h2>
                <h6 className="text-sm text-gray-500">Tooths Canaled</h6>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-4xl font-semibold text-sky-600">8.5</h2>
                <h6 className="text-sm text-gray-500">Client Ratings</h6>
              </div>
            </div>
            <div className="col-span-4 md:col-span-3">
              <Image
                src="/healthy-smile.jpeg"
                alt="healthy smile"
                className="h-full object-cover shadow rounded-3xl"
                width={1500}
                height={1000}
              />
            </div>
            <div className="col-span-8 md:col-span-5 lg:col-span-4 flex flex-col justify-center">
              <h6 className="text-sm text-sky-600 mb-3">Our Story</h6>
              <h2 className="text-2xl text-sky-900 font-semibold mb-3">
                Building Healthy Smiles And Happy Lives
              </h2>
              <p className="text-sm text-gray-600 font-thin mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur voluptatem fugit impedit eveniet! Atque, quas
                voluptates quae culpa laboriosam pariatur quos fuga, deserunt,
                ipsum laborum rem officiis vitae eos. Error
              </p>
              <p className="text-sm text-sky-900 mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis ullam recusandae natus voluptatibus corporis aperiam
                doloribus unde necessitatibus in. Perspiciatis saepe ullam sed
                earum? Similique, explicabo recusandae tempore veniam minima ea
              </p>
              <h6 className="text-sm text-gray-700">
                <b>Chief Doctor</b> - Litson Thomas (MBBS, FRCS)
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-950 mt-6 md:mt-12">
        <div className="px-3 py-2">
          <div className="lg:container mx-auto grid grid-cols-8">
            <div className="col-span-8 md:col-span-5 flex flex-col justify-center py-6">
              <h6 className="text-sm text-sky-300 mb-3">Our Story</h6>
              <h2 className="text-2xl text-white font-semibold mb-5">
                Building Healthy Smiles And Happy Lives
              </h2>
              <p className="text-sm text-gray-300 font-thin pr-3 mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur voluptatem fugit impedit eveniet! Atque, quas
                voluptates quae culpa laboriosam pariatur quos fuga, deserunt,
                ipsum laborum rem officiis vitae eos. Error
              </p>
              <div className="grid lg:grid-cols-2">
                <li className="text-gray-300 text-sm font-normal mb-1 lg:mb-2 list-decimal">
                  Lorem ipsum dolor sit amet consectetur.
                </li>
                <li className="text-gray-300 text-sm font-normal mb-1 lg:mb-2 list-decimal">
                  Lorem ipsum dolor sit amet consectetur.
                </li>
                <li className="text-gray-300 text-sm font-normal mb-1 lg:mb-2 list-decimal">
                  Lorem ipsum dolor sit amet consectetur.
                </li>
                <li className="text-gray-300 text-sm font-normal mb-1 lg:mb-2 list-decimal">
                  Lorem ipsum dolor sit amet consectetur.
                </li>
              </div>
            </div>
            <Image
              src="/care-smile.jpeg"
              alt="care your smile"
              className="hidden md:block  md:col-span-3 h-full object-cover shadow rounded-3xl relative -top-10"
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
