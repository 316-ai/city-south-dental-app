"use client";

import Link from "next/link";
import FeatherIcon from "feather-icons-react";
import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Contactform = () => {
  const [date, setDate] = React.useState<Date>();

  return (
    <>
      <div className="px-3 py-7 lg:py-12 bg-gray-50">
        <div className="lg:container mx-auto">
          <div className="grid grid-cols-2 shadow border rounded-xl bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1443.2405073351204!2d-79.72667084338683!3d43.65896499274532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3fc4355b9035%3A0x5e86cd75e15d29a0!2sCity%20South%20Dental!5e0!3m2!1sen!2sca!4v1722523325138!5m2!1sen!2sca"
              className="col-span-2 md:col-span-1 w-full h-full"
              loading="lazy"
            ></iframe>
            <div className="col-span-2 md:col-span-1 p-4 lg:p-10">
              <div>
                <h6 className="text-sm text-sky-600 mb-3">Get in Touch</h6>
                <h2 className="text-2xl text-sky-900 font-semibold mb-3">
                  Effortless Booking With Us
                </h2>
                <h6 className="text-sm text-gray-400 font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit minima ipsum ratione ipsum dolor sit amet consectetur
                  adipisicing
                </h6>
              </div>

              <div className="grid grid-cols-6 gap-4 mt-6">
                <div className="col-span-3">
                  <label className="text-gray-500 text-sm">Name</label>
                  <Input className="w-full" placeholder="Your Name" />
                </div>
                <div className="col-span-3">
                  <label className="text-gray-500 text-sm">Email </label>
                  <Input className="w-full" placeholder="Your Email Address" />
                </div>
                <div className="col-span-3">
                  <label className="text-gray-500 text-sm">Phone</label>
                  <Input className="w-full" placeholder="Your Phone Number" />
                </div>
                <div className="col-span-3">
                  <label className="text-gray-500 text-sm">Age</label>
                  <Input className="w-full" placeholder="Age" />
                </div>
                <div className="col-span-3">
                  <label className="text-gray-500 text-sm">Patient Status</label>
                  <Select>
                    <SelectTrigger className="w-full md:col-span-3">
                      <SelectValue placeholder="Patient Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Toronto">I am a new patient</SelectItem>
                      <SelectItem value="Downtown">I am an existing patient</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-3">
                  <label className="text-gray-500 text-sm">Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full md:col-span-3 justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? (
                          format(date, "PPP")
                        ) : (
                          <span>Appointment date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="col-span-6">
                  <Button className="w-full" variant={"new"}>
                    Book Appointment
                  </Button>
                </div>
              </div>
            </div>
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
      </div>
    </>
  );
};

export default Contactform;
