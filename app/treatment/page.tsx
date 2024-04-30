import Image from "next/image";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import Search from "../components/search";
import Story from "../components/story";
import Footer from "../components/footer";
import Pagebanner from "../components/pagebanner";

export default function Treatment() {
  return (
    <>
      <Navbar />
      <section className="content">
        <Pagebanner name="Treatments" />
      </section>
      <Footer />
    </>
  );
}
