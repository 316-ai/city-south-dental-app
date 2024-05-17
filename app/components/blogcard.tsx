"use client";

import Link from "next/link";
import FeatherIcon from "feather-icons-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const Blogcard = () => {
  return (
    <>
      <div className="transition-all rounded-3xl overflow-hidden border shadow hover:shadow-lg">
        <Image
          src="/emergency-dental-care.jpeg"
          alt="emergency-dental-care"
          width={600}
          height={0}
          className="w-full h-60 object-cover"
        />

        <div className="p-2 sm:p-4">
          <span className="border px-3 py-1 rounded-lg text-sm text-gray-400">
            12 August, 2023
          </span>

          <h1 className="line-clamp-1 font-semibold text-gray-700 mt-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime cum
            amet perferendis commodi. Voluptate, quos.
          </h1>

          <h6 className="line-clamp-2 text-sm text-gray-500 font-light mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            temporibus rerum consequatur soluta iure accusamus, nulla expedita
            tempora velit nobis.
          </h6>

          <div className="flex">
            <Link
              href="/blogs/123"
              className="text-sm flex items-center uppercase text-sky-600 hover:underline mt-3"
            >
              <span>Read more</span>
              <span>
                <FeatherIcon icon="arrow-right" className="size-4 ml-2" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogcard;
