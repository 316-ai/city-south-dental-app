import Image from "next/image";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Search from "./components/search";
import Story from "./components/story";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="content">
        <Banner />
        <Search />
        <Story />
      </section>
      <Footer />
    </>
  );
}
