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
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1443.26064994961!2d-79.7257069!3d43.658127!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3fc46840db25%3A0xa860f0a8a5e3efc2!2s7700%20Hurontario%20St%20%23308%2C%20Brampton%2C%20ON%20L6Y%204M3%2C%20Canada!5e0!3m2!1sen!2sin!4v1715712371293!5m2!1sen!2sin"
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
                  <Select>
                    <SelectTrigger className="w-full md:col-span-3">
                      <SelectValue placeholder="Select Age Group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">0 - 5 years</SelectItem>
                      <SelectItem value="2">5 - 10 years</SelectItem>
                      <SelectItem value="3">10 - 15 years</SelectItem>
                      <SelectItem value="4">15 - 20 years</SelectItem>
                      <SelectItem value="5">20 - 30 years</SelectItem>
                      <SelectItem value="6">30 - 40 years</SelectItem>
                      <SelectItem value="7">40 - 50 years</SelectItem>
                      <SelectItem value="8">50 - 60 years</SelectItem>
                      <SelectItem value="8">60+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-3">
                  <label className="text-gray-500 text-sm">Location</label>
                  <Select>
                    <SelectTrigger className="w-full md:col-span-3">
                      <SelectValue placeholder="Select Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Toronto">Toronto</SelectItem>
                      <SelectItem value="Downtown">Downtown</SelectItem>
                      <SelectItem value="Mexico">Mexico</SelectItem>
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
