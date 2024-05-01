"use client";

import Link from "next/link";
import FeatherIcon from "feather-icons-react";
import { useEffect, useState } from "react";
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

const Appointmentform = () => {
  return (
    <>
      <div className="px-3 py-2 mb-7 lg:mt-12">
        <div className="lg:container mx-auto">
          <div className="grid grid-cols-8 gap-6">
            <div className="col-span-8 lg:col-span-6">
              <h1 className="font-semibold text-blue-900 text-2xl mb-4">
                Appointment Form
              </h1>
              <div className="border rounded-3xl px-4 py-5">
                <h2 className="text-lg font-semibold text-blue-900 mb-3">
                  Patient Details
                </h2>
                <div className="grid grid-cols-6 gap-4">
                  <div className="col-span-3">
                    <label className="text-gray-500 text-sm">Name</label>
                    <Input className="w-full" placeholder="Your Name" />
                  </div>
                  <div className="col-span-3">
                    <label className="text-gray-500 text-sm">Email </label>
                    <Input
                      className="w-full"
                      placeholder="Your Email Address"
                    />
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
                  <div className="col-span-6 md:col-span-2 xl:col-span-1">
                    <Button className="w-full" variant={"new"}>
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-8 md:col-span-3 xl:col-span-2 border rounded-3xl px-4 py-5">
              <h2 className="text-lg font-semibold text-blue-900 mb-3">
                Opening Hours
              </h2>
              <p className="text-sm text-gray-500 mb-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </p>
              <div className="grid grid-cols-5">
                <div className="col-span-2 text-sm text-gray-700 flex flex-col gap-2">
                  <h6>Monday</h6>
                  <h6>Tuesday</h6>
                  <h6>Wednesday</h6>
                  <h6>Thursday</h6>
                  <h6>Friday</h6>
                </div>
                <div className="col-span-3 text-sm text-gray-400 flex flex-col gap-2">
                  <h6>10:00 AM - 11:00 PM</h6>
                  <h6>10:00 AM - 11:00 PM</h6>
                  <h6>10:00 AM - 11:00 PM</h6>
                  <h6>10:00 AM - 11:00 PM</h6>
                  <h6>10:00 AM - 11:00 PM</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointmentform;
