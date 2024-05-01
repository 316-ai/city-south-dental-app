import Image from "next/image";
import Navbar from "../components/navbar";
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
