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
import FeatherIcon from "feather-icons-react";
import Link from "next/link";

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
          <div>
            <h2 className="text-2xl text-sky-900 font-semibold mb-3">
              Get in Touch
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
              <Link
              href="https://maps.app.goo.gl/i3mL4BvvFXxBKGgF8"
              target="_blank"
              >
                <FeatherIcon
                  icon="map-pin"
                  className="float-left size-14 rounded p-3 border mr-3 text-sky-600"
                />
                <h1 className="text-sky-900 pt-1">Our Location</h1>
                <h6 className="text-sky-600 text-sm font-light">
                Unit #308 7700 Hurontario St , Brampton             </h6>
              </Link>
              <div>
                <a href="https://wa.me/14374101742" target="_blank">
                  <FeatherIcon
                    icon="message-circle"
                    className="float-left size-14 rounded p-3 border mr-3 text-sky-600"
                  />
                  <h1 className="text-sky-900 pt-1">WhatsApp</h1>
                  <h6 className="text-sky-600 text-sm font-light">
                    437 410 1742
                  </h6>
                </a>
              </div>
              <Link href="tel:9054591742" target="_blank">
                <FeatherIcon
                  icon="phone-call"
                  className="float-left size-14 rounded p-3 border mr-3 text-sky-600"
                />
                <h1 className="text-sky-900 pt-1">Call Us</h1>
                <h6 className="text-sky-600 text-sm font-light">9054591742</h6>
              </Link>
              <Link href="mailto:citysouthdental@gmail.com" target="_blank">
                <FeatherIcon
                  icon="mail"
                  className="float-left size-14 rounded p-3 border mr-3 text-sky-600"
                />
                <h1 className="text-sky-900 pt-1">Contact</h1>
                <h6 className="text-sky-600 text-sm font-light">
                citysouthdental@gmail.com
                </h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
