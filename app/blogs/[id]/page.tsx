import Blogcard from "@/app/components/blogcard";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import Pagebanner from "@/app/components/pagebanner";
import Image from "next/image";

export default function Blogsdetail() {
  return (
    <>
      <Navbar />
      <section className="content">
        <Pagebanner
          name=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime cum
            amet perferendis commodi. Voluptate, quos."
        />

        <section className="blogs px-3 py-7 lg:py-12 bg-white">
          <div className="lg:container mx-auto">
            <div>
              <Image
                src="/happy-customer.jpeg"
                alt="dots"
                width={1000}
                height={0}
                className="w-full h-[360px] object-cover rounded-3xl shadow mb-6"
              />

              <span className="border px-3 py-1 rounded-lg text-sm text-gray-400">
                12 August, 2023
              </span>
              <h6 className="text-sm text-sky-600 mt-4">mini caption</h6>
              <h1 className="text-xl font-semibold text-gray-700 mt-2 mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
                cum amet perferendis commodi. Voluptate, quos.
              </h1>

              <h2 className="text-md font-semibold text-gray-500 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                tenetur maxime repellat quae ducimus?
              </h2>

              <div className="grid grid-cols-8 gap-12 md:gap-8 my-6">
                <div className="col-span-4 md:col-span-3">
                  <Image
                    src="/healthy-smile.jpeg"
                    alt="healthy smile"
                    className="h-full object-cover shadow rounded-3xl"
                    width={1500}
                    height={1000}
                  />
                </div>
                <div className="col-span-8 md:col-span-5 flex flex-col justify-center">
                  <h2 className="text-2xl text-sky-900 font-semibold mb-3">
                    Building Healthy Smiles And Happy Lives
                  </h2>
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
                </div>
              </div>

              <p className="text font-light text-gray-700 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique vero recusandae non, fuga deserunt suscipit distinctio
                magnam cum libero sint, quasi architecto quas maiores minus
                quibusdam? Amet molestiae autem deserunt aliquid repudiandae
                nulla fugit facilis, corporis aspernatur veniam illum maxime
                numquam voluptatum magnam nihil deleniti impedit sunt, natus
                maiores id porro. Libero consequatur fugiat aspernatur
                obcaecati, sint quae commodi, ea soluta dolorum blanditiis non
                harum, enim asperiores aliquam nostrum veritatis nobis natus
                dolore ex inventore ullam rem pariatur tempore. Incidunt, qui
                laborum? Eum ut placeat unde porro distinctio vel consectetur
                natus incidunt, tenetur laborum dolore qui quidem quos. Rem,
                aperiam?
              </p>

              <ul className="list-inside list-decimal text mb-4">
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
                  debitis sunt similique quae assumenda tempore odio sapiente
                  optio sed doloribus!
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Animi dignissimos tenetur obcaecati.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Suscipit nihil natus cumque, itaque nisi minima sunt aut!
                  Impedit.
                </li>
              </ul>

              <p className="text font-light text-gray-700 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique vero recusandae non, fuga deserunt suscipit distinctio
                magnam cum libero sint, quasi architecto quas maiores minus
                quibusdam? Amet molestiae autem deserunt aliquid repudiandae
                nulla fugit facilis, corporis aspernatur veniam illum maxime
                numquam voluptatum magnam nihil deleniti
              </p>
            </div>
          </div>
        </section>

        <section className="blogs px-3 py-7 lg:py-12 bg-gray-50">
          <div className="lg:container mx-auto">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 mb-4">
                Similar Blogs
              </h1>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-x-5 md:gap-y-6">
              <Blogcard />
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}
