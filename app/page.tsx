import Image from "next/image";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Search from "./components/search";
import Story from "./components/story";
import Footer from "./components/footer";
import Topchoice from "./components/topchoice";
import Witness from "./components/witness";
import Faq from "./components/faq";
import Servicecarousal from "./components/servicescarousal";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="content">
        <Banner />
        <Search />
        <Story />
        <Servicecarousal />
        <Topchoice />
        <Witness />
        <Faq />
      </section>
      <Footer />
    </>
  );
}
