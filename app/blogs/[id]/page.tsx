'use client'
import Blogcard from "@/app/components/blogcard";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import Pagebanner from "@/app/components/pagebanner";
import { API_URL, IMAGE_URL } from "@/constants";
import FeatherIcon from "feather-icons-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { use, useEffect, useState } from "react";

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
            image:"getImageUrl(data.result[0].icon.asset._ref)",
            icon:"getImageUrl(data.result[0].icon.asset._ref)",
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
          name={blog?.title}        />

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
                {blog?.date}
              </span>
              <h6 className="text-sm text-sky-600 mt-4">Blog</h6>
              <h1 className="text-2xl text-sky-900 font-semibold mt-2 mb-4">
                {blog?.title}
              </h1>

              <h2 className="text-md font-semibold text-gray-500 mb-4">
              {blog?.body[0] }
              </h2>

              <div className="grid grid-cols-8 gap-12 md:gap-8 my-6">
                <div className="col-span-8 md:col-span-5 flex flex-col">
            
                  {blog?.body.map((paragraph, index) => (
                    <p
                      key={index}
                      className={`text-sm mb-5 ${
                        index % 2 === 0 ? "text-gray-600 " : "text-sky-900"
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
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
            <div className="mt-12">
            <h6 className="text-sm text-sky-600 mb-3">Connect to Us</h6>
            <h2 className="text-2xl text-sky-900 font-semibold mb-3">
              Get in Touch
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
              <div>
                <FeatherIcon
                  icon="globe"
                  className="float-left size-14 rounded p-3 border mr-3 text-sky-600"
                />
                <h1 className="text-sky-900 pt-1">Have Queries</h1>
                <h6 className="text-sky-600 text-sm font-light">
                  7700 Hurontario St 308, Brampton
                </h6>
              </div>
              <Link
                href="https://maps.app.goo.gl/Kmdk9fafCNWfunnC9"
                target="_blank"
              >
                <FeatherIcon
                  icon="map-pin"
                  className="float-left size-14 rounded p-3 border mr-3 text-sky-600"
                />
                <h1 className="text-sky-900 pt-1">Our Location</h1>
                <h6 className="text-sky-600 text-sm font-light">
                  7700 Hurontario St 308, Brampton
                </h6>
              </Link>
              <Link href="tel:9054591742" target="_blank">
                <FeatherIcon
                  icon="phone-call"
                  className="float-left size-14 rounded p-3 border mr-3 text-sky-600"
                />
                <h1 className="text-sky-900 pt-1">Call Us</h1>
                <h6 className="text-sky-600 text-sm font-light">9054591742</h6>
              </Link>
              <Link href="mailto:dentist@citysouthdental.com" target="_blank">
                <FeatherIcon
                  icon="mail"
                  className="float-left size-14 rounded p-3 border mr-3 text-sky-600"
                />
                <h1 className="text-sky-900 pt-1">Contact Support</h1>
                <h6 className="text-sky-600 text-sm font-light">
                  dentist@citysouthdental.com
                </h6>
              </Link>
            </div>
          </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}
