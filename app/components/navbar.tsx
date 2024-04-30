"use client";

import Link from "next/link";
import FeatherIcon from "feather-icons-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setisMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      const exploreButton = document.querySelector(".explore-button");
      const menuButton = document.querySelector(".menu");

      if (
        isMobileMenuOpen &&
        !event.target.closest(".menu-popup") &&
        (!menuButton || !menuButton.contains(event.target))
      ) {
        setisMobileMenuOpen(false);
      }
    };

    const handleEscapeKeyPress = (event: any) => {
      if (event.key === "Escape") {
        setisMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKeyPress);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscapeKeyPress);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="bg-blue-950 text-white px-3 py-2">
        <div className="lg:container mx-auto md:flex justify-between">
          <div className="md:flex gap-8">
            <a
              className="flex items-center text-sm"
              href="https://maps.app.goo.gl/Kmdk9fafCNWfunnC9"
            >
              <FeatherIcon icon="map-pin" className="pr-2" />
              <span>7700 Hurontario St 308, Brampton</span>
            </a>
            <a className="flex items-center text-sm" href="tel:9054591742">
              <FeatherIcon icon="phone" className="pr-2" />
              <span>+(905) 459-1742</span>
            </a>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center text-sm sm:mr-8">
              <FeatherIcon icon="clock" className="pr-2" />
              <span>Mon to Sat 09:00 - 21:00</span>
            </div>
            <div className="flex gap-2">
              <a href="www.facebook.com">
                <FeatherIcon icon="facebook" className="pl-2" />
              </a>
              <a href="www.linkedin.com">
                <FeatherIcon icon="linkedin" className="pl-2" />
              </a>
              <a href="www.instagram.com">
                <FeatherIcon icon="instagram" className="pl-2" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <nav className="nav gradient-mid sticky top-0 w-full backdrop-blur-sm backdrop-opacity-80 z-50 bg-white bg-opacity-50">
        <div className="lg:container mx-auto flex justify-between items-center">
          <div className="logo px-3 py-3">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="facebook"
                className="w-20 md:w-32"
                width={130}
                height={10}
              />
            </Link>
          </div>

          <button
            className="menu md:hidden px-3 py-3 h-120px"
            onClick={toggleMenu}
          >
            <FeatherIcon icon="menu" />
          </button>

          <div className="links hidden md:block text-sm">
            <ul className="flex gap-4">
              <Link href="">
                {/* // APPLY {"border-b-4 border-sky-600"} CLASSES TO ACTIVE ROUTE */}
                <li className="ease-in duration-150 px-3 py-3 h-120px content-center uppercase font-semibold hover:border-b-4 hover:border-sky-500 text-gray-700 hover:text-sky-700 border-b-4 border-sky-600">
                  Home
                </li>
              </Link>
              <Link href="">
                <li className="ease-in duration-150 px-3 py-3 h-120px content-center uppercase font-semibold hover:border-b-4 hover:border-sky-500 text-gray-700 hover:text-sky-700">
                  Treatment
                </li>
              </Link>
              <Link href="">
                <li className="ease-in duration-150 px-3 py-3 h-120px content-center uppercase font-semibold hover:border-b-4 hover:border-sky-500 text-gray-700 hover:text-sky-700">
                  About Us
                </li>
              </Link>
              <Link href="">
                <li className="ease-in duration-150 px-3 py-3 h-120px content-center uppercase font-semibold hover:border-b-4 hover:border-sky-500 text-gray-700 hover:text-sky-700">
                  Blogs
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className={`menu-popup text-md fixed backdrop-blur-sm backdrop-opacity-90 bg-white bg-opacity-90 w-48 h-full top-0 shadow-lg z-50 ${
          isMobileMenuOpen ? "flex md:hidden" : "hidden"
        }`}
      >
        <ul className="w-full text-gray-800 block gap-2">
          <Link href="">
            {/* // APPLY {"text-sky-700"} CLASS TO ACTIVE ROUTE */}
            <li className="p-3 border-b font-semibold hover:text-sky-600 text-sky-700">
              Home
            </li>
          </Link>
          <Link href="">
            <li className="p-3 border-b font-semibold hover:text-sky-600">
              Treatment
            </li>
          </Link>
          <Link href="">
            <li className="p-3 border-b font-semibold hover:text-sky-600">
              About Us
            </li>
          </Link>
          <Link href="">
            <li className="p-3 border-b font-semibold hover:text-sky-700">
              Blogs
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
