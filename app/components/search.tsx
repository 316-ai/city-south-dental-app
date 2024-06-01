"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Search = () => {
  const [date, setDate] = React.useState<Date>();
  const router = useRouter();

  const appointments = () => {
    router.push("/appointments");
  };

  return (
    <div className="px-3 py-2 z-20">
      <div className="lg:container mx-auto">
        <div className="shadow-md px-5 py-8 rounded-xl relative z-10 -mt-24 bg-white">
          <h2 className="text-xl lg:text-2xl text-gray-700 font-semibold mb-6">
            Book Appointment
          </h2>
          <div className="grid md:grid-cols-11 gap-4">
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
                  {date ? format(date, "PPP") : <span>Appointment date</span>}
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

            <Button
              onClick={appointments}
              className="w-full md:col-span-2"
              variant={"new"}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
