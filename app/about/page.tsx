import Navbar from "../components/navbar";
import Story from "../components/story";
import Footer from "../components/footer";
import Pagebanner from "../components/pagebanner";
import Topchoice from "../components/topchoice";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="content">
        <Pagebanner name="About Us" />
        <Story />
        <Topchoice />
      </section>
      <Footer />
    </>
  );
}
