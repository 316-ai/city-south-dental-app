import Navbar from "../components/navbar";
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
