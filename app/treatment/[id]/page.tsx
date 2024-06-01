import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import Pagebanner from "@/app/components/pagebanner";
import Image from "next/image";

export default function Blogsdetail() {
  return (
    <>
      <Navbar />
      <section className="content">
        <Pagebanner name=" Service Name" />

        <section className="blogs px-3 py-7 lg:py-12 bg-white">
          <div className="lg:container mx-auto">
            <div>
              <h6 className="text-sm text-sky-600">mini caption</h6>
              <h1 className="text-2xl text-sky-900 font-semibold mt-2 mb-4">
                Building Healthy Smiles And Happy Lives
              </h1>

              <h2 className="text-md font-semibold text-gray-500 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                tenetur maxime repellat quae ducimus?
              </h2>

              <div className="grid grid-cols-8 gap-12 md:gap-8 my-6">
                <div className="col-span-8 md:col-span-5 flex flex-col">
                  <p className="text-sm text-gray-600 font-thin mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur voluptatem fugit impedit eveniet! Atque, quas
                    voluptates quae culpa laboriosam pariatur quos fuga,
                    deserunt, ipsum laborum rem officiis vitae eos. Error Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Facilis
                    veritatis cupiditate ut quibusdam rerum reprehenderit
                    cumque.
                  </p>
                  <p className="text-sm text-sky-900 mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis ullam recusandae natus voluptatibus corporis
                    aperiam doloribus unde necessitatibus in. Perspiciatis saepe
                    ullam sed earum? Similique, explicabo recusandae tempore
                    veniam minima ea Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Ab a totam hic ducimus! Ullam itaque
                    perspiciatis, nobis ipsam velit commodi? Lorem ipsum dolor,
                    sit amet consectetur adipisicing elit. Dolore totam quae
                    quasi et porro ex odio accusamus, ut incidunt omnis sapiente
                    ipsam laudantium qui necessitatibus. Laborum?
                  </p>
                  <p className="text-sm text-gray-600 font-thin mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur voluptatem fugit impedit eveniet! Atque, quas
                    voluptates quae culpa laboriosam pariatur quos fuga,
                    deserunt, ipsum laborum rem officiis vitae eos. Error Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Facilis
                    veritatis cupiditate ut quibusdam rerum reprehenderit
                    cumque.
                  </p>
                  <p className="text-sm text-gray-600 font-thin mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur voluptatem fugit impedit eveniet! Atque, quas
                    voluptates quae culpa laboriosam pariatur quos fuga,
                    deserunt, ipsum laborum rem officiis vitae eos. Error Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Facilis
                    veritatis cupiditate ut quibusdam rerum reprehenderit
                    cumque.
                  </p>
                </div>

                <div className="col-span-4 md:col-span-3">
                  <Image
                    src="/healthy-smile.jpeg"
                    alt="healthy smile"
                    className="h-full object-cover shadow rounded-3xl"
                    width={1500}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}
