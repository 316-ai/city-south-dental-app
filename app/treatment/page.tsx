import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Pagebanner from "../components/pagebanner";
import Treatments from "../components/treatments";
import Witness from "../components/witness";

export default function Treatment() {
  return (
    <>
      <Navbar />
      <section className="content">
        <Pagebanner name="Dental Services" />
        <Treatments />
        <Witness />
      </section>
      <Footer />
    </>
  );
}
