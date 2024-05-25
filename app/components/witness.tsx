"use client";

import Link from "next/link";
import FeatherIcon from "feather-icons-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const Witness = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event: any) => {
    if (!isDragging) return;

    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };

  const handleStart = () => {
    setIsDragging(true);
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleGlobalEnd = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    document.addEventListener("mouseup", handleGlobalEnd);
    document.addEventListener("touchend", handleGlobalEnd);

    return () => {
      document.removeEventListener("mouseup", handleGlobalEnd);
      document.removeEventListener("touchend", handleGlobalEnd);
    };
  }, [isDragging]);

  return (
<section className="gradient-5050">
  <div className="px-3 py-7 lg:py-12">
    <div className="lg:container mx-auto">
      <div className="mb-5 text-center">
        <h6 className="text-sm text-sky-600 mb-3">
          Transforming Smiles at City South Dental
        </h6>
        <h2 className="text-2xl text-sky-900 font-semibold">
          Witness the Difference with Our Advanced Dental Care
        </h2>
        <div className="flex justify-center">
          <hr className="ml-1 mt-4 w-28" />
        </div>
      </div>

      <div
        className="relative w-full max-w-[740px] aspect-[70/50] m-auto overflow-hidden select-none rounded-3xl shadow"
        onMouseMove={handleMove}
        onMouseDown={handleStart}
        onTouchMove={handleMove}
        onTouchStart={handleStart}
        onMouseUp={handleEnd}
        onTouchEnd={handleEnd}
      >
        <Image
          alt="After dental care at City South Dental"
          fill
          draggable={false}
          priority
          src="/after.png"
        />

        <div
          className="absolute top-0 left-0 right-0 w-full max-w-[740px] aspect-[70/50] m-auto overflow-hidden select-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            fill
            priority
            draggable={false}
            alt="Before dental care at City South Dental"
            src="/before.png"
          />
        </div>
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{
            left: `calc(${sliderPosition}% - 1px)`,
          }}
        >
          <div className="bg-white absolute rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]" />
        </div>
        <h2 className="text-white absolute left-0 bottom-8 -rotate-90 text-shadow-sm uppercase">
          Before
        </h2>
        <h2 className="text-white absolute right-3 bottom-8 -rotate-90 text-shadow-sm uppercase">
          After
        </h2>
      </div>
    </div>
  </div>
</section>

  );
};

export default Witness;
