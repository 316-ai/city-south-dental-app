"use client";

import Link from "next/link";
import FeatherIcon from "feather-icons-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const Faq = () => {
  interface Item {
    title: string;
    content: string;
  }
  interface FaqProps {
    items: Item[];
  }

  const items = [
    {
      title: "Question 0",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime numquam quidem delectus eaque sunt illum quod ducimus doloremque ratione sapiente",
    },
    {
      title: "Question 1",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime numquam quidem delectus eaque sunt illum quod ducimus doloremque ratione sapiente",
    },
    {
      title: "Question 2",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime numquam quidem delectus eaque sunt illum quod ducimus doloremque ratione sapiente",
    },
    {
      title: "Question 3",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime numquam quidem delectus eaque sunt illum quod ducimus doloremque ratione sapiente",
    },
    {
      title: "Question 4",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime numquam quidem delectus eaque sunt illum quod ducimus doloremque ratione sapiente",
    },
  ];

  const toggleFaq = (index: number) => {
    setActiveIndex((prevActiveIndex) => {
      const indexExists = prevActiveIndex.includes(index);

      if (indexExists) {
        return prevActiveIndex.filter((activeIdx) => activeIdx !== index);
      }

      return [...prevActiveIndex, index];
    });
  };

  const [activeIndex, setActiveIndex] = useState<number[]>([]);

  return (
    <>
      <section className="px-3 py-7 lg:py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="mb-5">
            <h6 className="text-sm text-sky-600 mb-3 text-center">
              Questions on your mind? We have got the answers you need.
            </h6>
            <h2 className="text-2xl text-sky-900 font-semibold text-center">
              F.A.Q
            </h2>
            <div className="flex justify-center">
              <hr className="ml-1 mt-4 w-28" />
            </div>
          </div>

          {items.map(({ title, content }, index) => (
            <div
              key={index}
              className="transition-all select-none bg-white shadow mb-3 rounded-3xl hover:bg-sky-50 cursor-pointer p-4"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex justify-between w-full items-center focus:outline-none">
                <h4 className="flex-1 text-left font-semibold text-gray-700">
                  {title}
                </h4>
                <FeatherIcon
                  icon="chevron-down"
                  className={`w-6 h-6 transition-transform ${
                    activeIndex.includes(index) ? "transform rotate-180" : ""
                  }`}
                />
              </div>
              {activeIndex.includes(index) && (
                <div className="mt-3">
                  <p className="text-sm text-gray-500">{content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Faq;
