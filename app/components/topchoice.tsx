"use client";

import Link from "next/link";
import FeatherIcon from "feather-icons-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const Topchoice = () => {
  return (
    <>
      <div className="px-3 py-7 lg:py-12 bg-gray-50">
        <div className="lg:container mx-auto">
          <div className="flex justify-between items-end">
            <div>
              <h6 className="text-sm text-sky-600 mb-3">Sub Header</h6>
              <h2 className="text-2xl text-sky-900 font-semibold">
                Why We are Your Top Dental Choice for Unrivaled Excellence
              </h2>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm text-gray-400 font-light max-w-60 border-l-4 border-sky-400 pl-4">
                Fusce euismod turpis et tellus dapibus suscipit. Nulla tincidunt
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-7">
            <div className="col-span-1 relative ease-in duration-150 card border border-transparent hover:border-gray-200 rounded-3xl hover:bg-white hover:shadow-md p-3 md:p-5">
              <Image
                src="/topchoice/unmatched-expertise.svg"
                alt="Unmatched Expertise"
                className="mb-3"
                width={60}
                height={60}
              />
              <h2 className="font-semibold mb-3">Unmatched Expertise</h2>
              <h6 className="text-sm text-gray-500 font-light">
                Aenean viverra cursus ipsum. Etiam vitae aliquet lorem ultricies
                nisl. Integer tempor metus eget massa.
              </h6>
              <h5 className="text-5xl md:text-7xl font-bold text-gray-200 absolute top-8 right-6">
                01
              </h5>
            </div>
            <div className="col-span-1 relative ease-in duration-150 card border border-transparent hover:border-gray-200 rounded-3xl hover:bg-white hover:shadow-md p-3 md:p-5">
              <Image
                src="/topchoice/personalized-care.svg"
                alt="Personalized Care"
                className="mb-3"
                width={74}
                height={74}
              />
              <h2 className="font-semibold mb-3">Personalized Care</h2>
              <h6 className="text-sm text-gray-500 font-light">
                Aenean viverra cursus ipsum. Etiam vitae aliquet lorem ultricies
                nisl. Integer tempor metus eget massa.
              </h6>
              <h5 className="text-5xl md:text-7xl font-bold text-gray-200 absolute top-8 right-6">
                02
              </h5>
            </div>
            <div className="col-span-1 relative ease-in duration-150 card border border-transparent hover:border-gray-200 rounded-3xl hover:bg-white hover:shadow-md p-3 md:p-5">
              <Image
                src="/topchoice/comprehensive-services.svg"
                alt="Comprehensive Services"
                className="mb-3"
                width={60}
                height={60}
              />
              <h2 className="font-semibold mb-3">Comprehensive Services</h2>
              <h6 className="text-sm text-gray-500 font-light">
                Aenean viverra cursus ipsum. Etiam vitae aliquet lorem ultricies
                nisl. Integer tempor metus eget massa.
              </h6>
              <h5 className="text-5xl md:text-7xl font-bold text-gray-200 absolute top-8 right-6">
                03
              </h5>
            </div>
            <div className="col-span-1 relative ease-in duration-150 card border border-transparent hover:border-gray-200 rounded-3xl hover:bg-white hover:shadow-md p-3 md:p-5">
              <Image
                src="/topchoice/patient-centric-approach.svg"
                alt="Patient-Centric Approach"
                className="mb-3"
                width={60}
                height={60}
              />
              <h2 className="font-semibold mb-3">Patient-Centric Approach</h2>
              <h6 className="text-sm text-gray-500 font-light">
                Aenean viverra cursus ipsum. Etiam vitae aliquet lorem ultricies
                nisl. Integer tempor metus eget massa.
              </h6>
              <h5 className="text-5xl md:text-7xl font-bold text-gray-200 absolute top-8 right-6">
                04
              </h5>
            </div>
            <div className="col-span-1 relative ease-in duration-150 card border border-transparent hover:border-gray-200 rounded-3xl hover:bg-white hover:shadow-md p-3 md:p-5">
              <Image
                src="/topchoice/exceptional-patient-reviews.svg"
                alt="Exceptional Patient Reviewsh"
                className="mb-3"
                width={60}
                height={60}
              />
              <h2 className="font-semibold mb-3">
                Exceptional Patient Reviewsh
              </h2>
              <h6 className="text-sm text-gray-500 font-light">
                Aenean viverra cursus ipsum. Etiam vitae aliquet lorem ultricies
                nisl. Integer tempor metus eget massa.
              </h6>
              <h5 className="text-5xl md:text-7xl font-bold text-gray-200 absolute top-8 right-6">
                05
              </h5>
            </div>
            <div className="col-span-1 relative ease-in duration-150 card border border-transparent hover:border-gray-200 rounded-3xl hover:bg-white hover:shadow-md p-3 md:p-5">
              <Image
                src="/topchoice/cutting-edge-technology.svg"
                alt="Cutting-Edge Technology"
                className="mb-3"
                width={60}
                height={60}
              />
              <h2 className="font-semibold mb-3">Cutting-Edge Technology</h2>
              <h6 className="text-sm text-gray-500 font-light">
                Aenean viverra cursus ipsum. Etiam vitae aliquet lorem ultricies
                nisl. Integer tempor metus eget massa.
              </h6>
              <h5 className="text-5xl md:text-7xl font-bold text-gray-200 absolute top-8 right-6">
                06
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topchoice;
