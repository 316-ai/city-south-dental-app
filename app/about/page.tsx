import Image from "next/image";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import Search from "../components/search";
import Story from "../components/story";
import Footer from "../components/footer";
import Pagebanner from "../components/pagebanner";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="content">
        <Pagebanner name="About Us" />
        <Story />
        {/* <Image
          src="/banner.jpeg"
          alt="banner"
          className="w-full"
          width={1500}
          height={1000}
        /> */}
      </section>
      <Footer />
    </>
  );
}
