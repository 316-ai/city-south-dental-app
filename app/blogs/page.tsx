import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Pagebanner from "../components/pagebanner";
import Blogcard from "../components/blogcard";

export default function Blogs() {
  return (
    <>
      <Navbar />
      <section className="content">
        <Pagebanner name="Blogs" />

        <div className="px-3 py-7 lg:py-12 bg-gray-50">
          <div className="lg:container mx-auto">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-x-5 md:gap-y-6">
              <Blogcard />
              <Blogcard />
              <Blogcard />
              <Blogcard />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
