import Image from "next/image";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import Search from "../components/search";
import Story from "../components/story";
import Footer from "../components/footer";
import Pagebanner from "../components/pagebanner";
import Appointmentform from "../components/appointmentform";

export default function Appointments() {
  return (
    <>
      <Navbar />
      <section className="content">
        <Pagebanner name="Appointments" />
        <Appointmentform />
      </section>
      <Footer />
    </>
  );
}
