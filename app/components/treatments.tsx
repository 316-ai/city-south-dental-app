"use client";

import Link from "next/link";
import FeatherIcon from "feather-icons-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Servicebox from "./servicebox";

const treatments = () => {
  return (
    <>
      <div className="px-3 py-7 lg:py-12 bg-white">
        <div className="lg:container mx-auto">
          <div>
            <h6 className="text-sm text-sky-600 mb-3">Sub Header</h6>
            <h2 className="text-2xl text-sky-900 font-semibold">
              Our Specialed Treatments
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-5 mt-7">
            <Servicebox
              image="cosmetic-dentistry"
              caption="Cosmetic Dentistry"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, doloremque molestias. Eveniet, rem et."
            />

            <Servicebox
              image="pediatric-dentistry"
              caption="Pediatric Dentistry"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, doloremque molestias. Eveniet, rem et."
            />

            <Servicebox
              image="oral-surgery"
              caption="Oral Surgery"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, doloremque molestias. Eveniet, rem et."
            />

            <Servicebox
              image="dental-checkup"
              caption="Dental Checkup"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, doloremque molestias. Eveniet, rem et."
            />

            <Servicebox
              image="gum-surgery"
              caption="Gum Surgery"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, doloremque molestias. Eveniet, rem et."
            />

            <Servicebox
              image="implants"
              caption="Dental Implants"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, doloremque molestias. Eveniet, rem et."
            />

            <Servicebox
              image="sealants"
              caption="Dental Sealants"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, doloremque molestias. Eveniet, rem et."
            />

            <Servicebox
              image="aligners"
              caption="Teeth Alignment"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, doloremque molestias. Eveniet, rem et."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default treatments;
