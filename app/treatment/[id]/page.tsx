"use client";

import { useState, useEffect } from "react";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import Pagebanner from "@/app/components/pagebanner";
import { API_URL, IMAGE_URL } from "@/constants";
import Image from "next/image";
import { useParams } from "next/navigation";

interface Treatment {
  id: string;
  body: any;
  title: string;
  image:any;
  icon:any;
}

export default function Treatments() {
  const { id } = useParams();
  const [treatment, setTreatment] = useState<Treatment | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    if (id) { // Null check for id
      const fetchData = async () => {
        try {
          const query = `*[_type=='treatments'][slug.current == '${id}']`;
          const encodedQuery = encodeURIComponent(query);
          const fullUrl = `${API_URL}?query=${encodedQuery}`;

          const response = await fetch(fullUrl);
          const data = await response.json();
          setTreatment({
            id: data.result[0]._id,
            body: getDescriptionText(data.result[0].body),
            title: data.result[0].title,
            image:getImageUrl(data.result[0].icon.asset._ref),
            icon:getImageUrl(data.result[0].icon.asset._ref),
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


  return (
    <>
      <Navbar />
      <section className="content">
        <Pagebanner name={treatment?.title || "Service Name"} />

        <section className="blogs px-3 py-7 lg:py-12 bg-white">
          <div className="lg:container mx-auto">
            <div>
              <h6 className="text-sm text-sky-600"></h6>
              <h1 className="text-2xl text-sky-900 font-semibold mt-2 mb-4">
                {treatment?.title}
              </h1>
              <h2 className="text-md font-semibold text-gray-500 mb-4">
                {treatment?.body[0] || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tenetur maxime repellat quae ducimus?"}
              </h2>

              <div className="grid grid-cols-8 gap-12 md:gap-8 my-6">
                <div className="col-span-8 md:col-span-5 flex flex-col">
                  {treatment?.body.map((paragraph, index) => (
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
      </section>
      <Footer />
    </>
  );
}
