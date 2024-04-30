"use client";

import Link from "next/link";
import FeatherIcon from "feather-icons-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="footer px-3 pt-12 pb-6 gradient-start">
        <div className="lg:container mx-auto">
          <div className="grid grid-cols-8 gap-4 md:gap-12 lg:gap-6">
            <div className="col-span-8 md:col-span-7 lg:col-span-3">
              <Image
                src="/logo.png"
                alt="logo"
                className="w-28 mb-4"
                width={130}
                height={10}
              />
              <p className="text-sm text-gray-600 pr-8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, ol
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
                reprehenderit amet consectetur adipi m dol Lorem, ipsum
              </p>
            </div>
            <div className="col-span-8 md:col-span-2 lg:col-span-1">
              <h2 className="mb-6">Useful Links</h2>
              <ul>
                <Link href="">
                  <li className="text-sm text-gray-600 hover:text-blue-600 ease-in duration-150 mb-2">
                    Home
                  </li>
                </Link>
                <Link href="">
                  <li className="text-sm text-gray-600 hover:text-blue-600 ease-in duration-150 mb-2">
                    Treatment
                  </li>
                </Link>
                <Link href="">
                  <li className="text-sm text-gray-600 hover:text-blue-600 ease-in duration-150 mb-2">
                    About
                  </li>
                </Link>
                <Link href="">
                  <li className="text-sm text-gray-600 hover:text-blue-600 ease-in duration-150 mb-2">
                    Blogs
                  </li>
                </Link>
                <Link href="">
                  <li className="text-sm text-gray-600 hover:text-blue-600 ease-in duration-150 mb-2">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
            <div className="col-span-8 md:col-span-3 lg:col-span-2">
              <div className="flex mb-4">
                <FeatherIcon icon="map-pin" className="pr-2" />
                <div>
                  <h2>Location</h2>
                  <a
                    className="text-sm text-gray-600 hover:text-blue-600"
                    href="https://maps.app.goo.gl/Kmdk9fafCNWfunnC9"
                    target="_blank"
                  >
                    <span>7700 Hurontario St 308, Brampton</span>
                  </a>
                </div>
              </div>
              <div className="flex mb-4">
                <FeatherIcon icon="phone" className="pr-2" />
                <div>
                  <h2>Phone</h2>
                  <a
                    className="text-sm text-gray-600 hover:text-blue-600"
                    href="tel:9054591742"
                    target="_blank"
                  >
                    <span>+(905) 459-1742</span>
                  </a>
                </div>
              </div>
              <div className="flex mb-4">
                <FeatherIcon icon="mail" className="pr-2" />
                <div>
                  <h2>Email</h2>
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
              <div className="flex mb-10">
                <FeatherIcon icon="clock" className="pr-2" />
                <div>
                  <h2 className="mb-1">Working Hours</h2>
                  <p className="text-sm text-gray-600">
                    Mon to Sat 09:00 - 21:00
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <a
                  href="www.facebook.com"
                  target="_blank"
                  className="rounded-2xl text-sky-600 hover:text-sky-800 bg-blue-100 hover:bg-blue-200 ease-in duration-150 p-2"
                >
                  <FeatherIcon icon="facebook" className="p-1" />
                </a>

                <a
                  href="www.linkedin.com"
                  target="_blank"
                  className="rounded-2xl text-sky-600 hover:text-sky-800 bg-blue-100 hover:bg-blue-200 ease-in duration-150 p-2"
                >
                  <FeatherIcon icon="linkedin" className="p-1" />
                </a>
                <a
                  href="www.instagram.com"
                  target="_blank"
                  className="rounded-2xl text-sky-600 hover:text-sky-800 bg-blue-100 hover:bg-blue-200 ease-in duration-150 p-2"
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
