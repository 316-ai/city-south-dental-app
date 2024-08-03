import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Pagebanner from "../components/pagebanner";
import Witness from "../components/witness";
import ProcedureComponent from "../components/proceduresComponent";

export default function Procedures() {
  return (
    <>
      <Navbar />
      <section className="content">
        <Pagebanner name="Treatments and Procedures" />
        <ProcedureComponent />
        <Witness />
      </section>
      <Footer />
    </>
  );
}
