import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Pagebanner from "../components/pagebanner";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="content">
        <Pagebanner name="Contact Us" />
      </section>
      <Footer />
    </>
  );
}
