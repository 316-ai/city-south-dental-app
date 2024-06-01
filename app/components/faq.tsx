"use client";

import FeatherIcon from "feather-icons-react";
import { useState } from "react";
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
      title: "Are you seeking a dentist in Brampton?",
      content:
        "We’re welcoming new patients! Learn more about our clinic and what you can expect at your first visit, along with payment and financing options. [REQUEST APPOINTMENT](#)",
    },
    {
      title: "What should I expect at my first visit?",
      content:
        "Please arrive about 10 minutes early so that you’ll have enough time to complete a New Patient form. [NEW PATIENT FORM](#)",
    },
    {
      title: "What does the initial examination include?",
      content:
        "Your dentist will review your dental and medical history and perform a comprehensive dental exam. This includes examining your teeth, gums, bite, and jaw, an oral cancer screening, and any necessary X-rays.",
    },
    {
      title: "What is the treatment plan process?",
      content:
        "The dentist will create a long-term dental treatment plan for you based on your history and examination. You will have the opportunity to ask any questions about your dental health and treatment options.",
    },
    {
      title: "How do insurance and payment work?",
      content:
        "We can direct bill your insurance company and our administrative team is happy to assist you in understanding your insurance plan better. The full treatment cost must be paid at the time of your appointment. We accept payment by cash, cheque, debit, or most major credit cards.",
    },
    {
      title: "What features does your clinic offer?",
      content:
        "Our clinic offers a number of features, including: Convenient Location, Convenient Paid Parking, Same-Day Appointments, Multiple Appointment Bookings for Families, Short Wait Times.",
    },
    {
      title: "How can I book an appointment?",
      content:
        "To book an appointment at City South Dental of Brampton, please contact our office during our regular business hours.",
    },
    {
      title: "How do I cancel or reschedule an appointment?",
      content:
        "To cancel or reschedule an appointment, please call us as soon as possible so another patient may be able to use the space in our schedule.",
    },
    {
      title: "Do you offer appointment reminders?",
      content:
        "In the days before your appointment, you will receive automated phone, text, or email appointment reminders from us. If you need to cancel or reschedule an appointment, please call us as soon as possible to let us know.",
    },
    {
      title: "Do you provide services in any languages other than English?",
      content:
        "Yes, our office is able to provide dental services in English, Hindi, Punjabi, Farsi, Arabic, and Gujarati. If you have a language preference, please advise us when booking your appointment.",
    },
    {
      title: "Does your clinic have on-site parking?",
      content:
        "Yes, we have convenient free parking available for all our patients. We are also easily accessible by public transit.",
    },
    {
      title: "Do you offer support for anxious patients?",
      content:
        "Anxiety or fear around dental appointments is very common and it can prevent people from getting the dental care they need. If this sounds like you, don’t fret. The team at City South Dental of Brampton has a variety of practices in place, including dental sedation options, to help you relax during your appointment.",
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
