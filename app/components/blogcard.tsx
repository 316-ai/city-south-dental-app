'use client';
import Link from "next/link";
import FeatherIcon from "feather-icons-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { API_URL } from "@/constants";

interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  image: string;
  slug: { current: string };
  publishedAt: string;
}

const Blogcard = () => {
  const query = "*[_type=='blogs']";
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const encodedQuery = encodeURIComponent(query);
        const fullUrl = `${API_URL}?query=${encodedQuery}`;

        const response = await fetch(fullUrl);
        const data = await response.json();
        setBlogs(data.result || []); // Assuming "result" holds the blogs array
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <div
            key={blog._id}
            className="transition-all rounded-3xl overflow-hidden border shadow hover:shadow-lg mb-4"
          >
            {blogs.length}
            <Image
          src="/emergency-dental-care.jpeg"
          alt="emergency-dental-care"
              width={600}
              height={0}
              className="w-full h-60 object-cover"
            />

            <div className="p-2 sm:p-4">
              <span className="border px-3 py-1 rounded-lg text-sm text-gray-400">
                {new Date(blog.publishedAt).toLocaleDateString()}
              </span>

              <h1 className="line-clamp-1 font-semibold text-gray-700 mt-3">
                {blog.title}
              </h1>

              <h6 className="line-clamp-2 text-sm text-gray-500 font-light mt-2">
                {blog.excerpt}
              </h6>

              <div className="flex">
                <Link
                  href={`/blogs/${blog.slug.current}`}
                  className="text-sm flex items-center uppercase text-sky-600 hover:underline mt-3"
                >
                  <span>Read more</span>
                  <span>
                    <FeatherIcon icon="arrow-right" className="size-4 ml-2" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No blogs found.</p>
      )}
    </>
  );
};

export default Blogcard;
