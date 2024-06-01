"use client";

import React from "react";
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

const Appointmentform = () => {
  const [date, setDate] = React.useState<Date>();
  return (
    <>
      <div className="px-3 py-7 lg:py-12 bg-gray-50">
        <div className="lg:container mx-auto">
          <div className="grid grid-cols-8 gap-6">
            <div className="col-span-8 lg:col-span-6">
              <h1 className="font-semibold text-blue-900 text-2xl mb-4">
                Appointment Form
              </h1>
              <div className="bg-white shadow-md rounded-3xl p-5">
                <h2 className="text-lg font-semibold text-blue-900 mb-3">
                  Booking Details
                </h2>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                  <div className="col-span-3">
                    <label className="text-gray-500 text-sm">
                      Selected Location
                    </label>
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
                    <label className="text-gray-500 text-sm">
                      Appointment Date{" "}
                    </label>
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
                  <div className="col-span-3">
                    <label className="text-gray-500 text-sm">
                      No. of Persons
                    </label>
                    <Select>
                      <SelectTrigger className="w-full md:col-span-3">
                        <SelectValue placeholder="Persons" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Person</SelectItem>
                        <SelectItem value="2">2 Persons</SelectItem>
                        <SelectItem value="3">3 Persons</SelectItem>
                        <SelectItem value="4">4 Persons</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <h2 className="text-lg font-semibold text-blue-900 mt-6 mb-3">
                  Patient Details
                </h2>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
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
                  <div className="col-span-3 md:col-span-2 xl:col-span-1">
                    <Button className="w-full" variant={"new"}>
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-8 md:col-span-3 xl:col-span-2 bg-white shadow-md rounded-3xl p-5">
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
