import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Pagebanner from "../components/pagebanner";
import Contactform from "../components/contactform";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="content">
        <Pagebanner name="Contact Us" />
        <Contactform />
      </section>
      <Footer />
    </>
  );
}
