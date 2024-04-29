"use client";

import { Readex_Pro } from "next/font/google";
import Image from "next/image";
import Navbar from "./components/navbar";

const readex_pro = Readex_Pro({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <style jsx global>{`
        * {
          font-family: ${readex_pro.style.fontFamily};
        }
      `}</style>

      <Navbar />
      <section className="content">
        <Image
          src="/banner.jpeg"
          alt="banner"
          className="w-full"
          width={1500}
          height={1000}
        />
        <Image
          src="/banner.jpeg"
          alt="banner"
          className="w-full"
          width={1500}
          height={1000}
        />
        <Image
          src="/banner.jpeg"
          alt="banner"
          className="w-full"
          width={1500}
          height={1000}
        />
        <Image
          src="/banner.jpeg"
          alt="banner"
          className="w-full"
          width={1500}
          height={1000}
        />
      </section>
    </>
  );
}
