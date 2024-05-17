"use client";

import Link from "next/link";
import FeatherIcon from "feather-icons-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="footer px-3 pt-14 pb-8 gradient-start">
        <div className="lg:container mx-auto">
          <div className="grid grid-cols-8 gap-4 md:gap-12 lg:gap-6">
            <div className="col-span-8 md:col-span-7 lg:col-span-3 flex flex-col justify-between">
              <Image
                src="/logo.png"
                alt="logo"
                className="w-28 mb-3"
                width={130}
                height={10}
              />
              <p className="text-sm font-light text-gray-600 pr-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                obcaecati aliquam placeat eligendi, magni ab dignissimos esse id
                voluptatem consequuntur dicta quas modi animi tempora fuga iste
                quos eveniet. Reiciendis!
              </p>
            </div>
            <div className="col-span-8 md:col-span-2 lg:col-span-1 flex flex-col justify-between">
              <h2 className="text-blue-950 mb-1 md:mb-4 uppercase text-sm font-semibold">
                Links
              </h2>
              <ul>
                <Link href="/">
                  <li className="text-sm text-gray-600 hover:text-blue-600 ease-in duration-150 mb-1 md:mb-2">
                    Home
                  </li>
                </Link>
                <Link href="/treatment">
                  <li className="text-sm text-gray-600 hover:text-blue-600 ease-in duration-150 mb-1 md:mb-2">
                    Treatment
                  </li>
                </Link>
                <Link href="/about">
                  <li className="text-sm text-gray-600 hover:text-blue-600 ease-in duration-150 mb-1 md:mb-2">
                    About
                  </li>
                </Link>
                <Link href="/blogs">
                  <li className="text-sm text-gray-600 hover:text-blue-600 ease-in duration-150 mb-1 md:mb-2">
                    Blogs
                  </li>
                </Link>
                <Link href="/contact">
                  <li className="text-sm text-gray-600 hover:text-blue-600 ease-in duration-150">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
            <div className="col-span-8 md:col-span-3 lg:col-span-2 flex flex-col justify-between">
              <div className="flex mb-2">
                <FeatherIcon icon="map-pin" className="pr-2" />
                <div>
                  <h2 className="text-blue-950 uppercase text-sm font-semibold">
                    Location
                  </h2>
                  <a
                    className="text-sm text-gray-600 hover:text-blue-600"
                    href="https://maps.app.goo.gl/Kmdk9fafCNWfunnC9"
                    target="_blank"
                  >
                    <span>7700 Hurontario St 308, Brampton</span>
                  </a>
                </div>
              </div>
              <div className="flex mb-2">
                <FeatherIcon icon="phone" className="pr-2" />
                <div>
                  <h2 className="text-blue-950 uppercase text-sm font-semibold">
                    Phone
                  </h2>
                  <a
                    className="text-sm text-gray-600 hover:text-blue-600"
                    href="tel:9054591742"
                    target="_blank"
                  >
                    <span>+(905) 459-1742</span>
                  </a>
                </div>
              </div>
              <div className="flex">
                <FeatherIcon icon="mail" className="pr-2" />
                <div>
                  <h2 className="text-blue-950 uppercase text-sm font-semibold">
                    Email
                  </h2>
                  <a
                    className="text-sm text-gray-600 hover:text-blue-600"
                    href="mailto:dentist@citysouthdental.com"
                    target="_blank"
                  >
                    <span>dentist@citysouthdental.com</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-8 md:col-span-3 lg:col-span-2 flex flex-col justify-between">
              <div className="flex mb-4">
                <FeatherIcon icon="clock" className="pr-2" />
                <div>
                  <h2 className="mb-1 text-blue-950 uppercase text-sm font-semibold">
                    Working Hours
                  </h2>
                  <p className="text-sm text-gray-600">
                    Mon to Sat 09:00 - 21:00
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  className="rounded-2xl shadow text-gray-500 hover:text-sky-800 bg-white hover:bg-sky-100 ease-in duration-150 p-2"
                >
                  <FeatherIcon icon="facebook" className="p-1" />
                </a>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  className="rounded-2xl shadow text-gray-500 hover:text-sky-800 bg-white hover:bg-sky-100 ease-in duration-150 p-2"
                >
                  <FeatherIcon icon="linkedin" className="p-1" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  className="rounded-2xl shadow text-gray-500 hover:text-sky-800 bg-white hover:bg-sky-100 ease-in duration-150 p-2"
                >
                  <FeatherIcon icon="instagram" className="p-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-sm text-center text-gray-600 gradient-start py-3">
        All rights reserved © City South Dental
      </div>
    </>
  );
};

export default Footer;
