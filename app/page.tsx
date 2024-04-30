import Image from "next/image";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Search from "./components/search";
import Story from "./components/story";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="content">
        <Banner />
        <Search />
        <Story />
        {/* <Image
          src="/banner.jpeg"
          alt="banner"
          className="w-full"
          width={1500}
          height={1000}
        /> */}
      </section>
    </>
  );
}
