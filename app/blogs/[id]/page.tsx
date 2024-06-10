'use client'
import Blogcard from "@/app/components/blogcard";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import Pagebanner from "@/app/components/pagebanner";
import { API_URL, IMAGE_URL } from "@/constants";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Blog {
  id: string;
  body: string[];
  title: string;
  image:any;
  icon:any;
  date:string;
}

export default function Blogsdetail() {
  const { id } = useParams();
  const [blog, setBlogs] = useState<Blog | null>(null);

  useEffect(() => {
    if (id) { // Null check for id
      const fetchData = async () => {
        try {
          const query = `*[_type=='blogs'][slug.current == '${id}']`;
          const encodedQuery = encodeURIComponent(query);
          const fullUrl = `${API_URL}?query=${encodedQuery}`;

          const response = await fetch(fullUrl);
          const data = await response.json();
          setBlogs({
            id: data.result[0]._id,
            body: getDescriptionText(data.result[0].body),
            title: data.result[0].title,
            image:getImageUrl(data.result[0].icon.asset._ref),
            icon:getImageUrl(data.result[0].icon.asset._ref),
            date:formatDate(data.result[0]._updatedAt),
          }||null); // Assuming "result" holds the treatments array
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }
  }, [id]); // Add id to the dependency array
  
  const getDescriptionText = (body: any): string[] => {
    return body
      .map((block: any) =>
        block.children.map((span: any) => span.text).join("")
      )
      .join("\n")
      .split("\n")
      .filter((paragraph: string) => paragraph.trim() !== "");
  };

  const getImageUrl = (ref: string): string => {
    return `${IMAGE_URL}${ref.replace("image-", "").replace(/-(\w+)$/, ".$1")}`;
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };
  
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
              {/* <Image
                src="/happy-customer.jpeg"
                alt="dots"
                width={1000}
                height={0}
                className="w-full h-[360px] object-cover rounded-3xl shadow mb-6"
              /> */}

              <span className="border px-3 py-1 rounded-lg text-sm text-gray-400">
                12 August, 2023
              </span>
              <h6 className="text-sm text-sky-600 mt-4">mini caption</h6>
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
