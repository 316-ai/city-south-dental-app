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
            <h2 className="text-lg font-semibold text-blue-900 mb-3">
              Appointments
            </h2>
            <div className="col-span-8 lg:col-span-8">
              <p className="text-gray-600 mb-4">
                Life gets hectic and it’s not easy to find time to attend
                appointments. Our staff works hard to provide flexible
                appointments that are convenient for your schedule. We keep you
                on track with your preventative care by pre-appointing your next
                visit at the end of each hygiene session and send reminders
                ahead of time. 
              </p>
              <p className="text-gray-600 mb-4">
                Same-day reservations are available for urgent needs, and for
                emergencies, please contact us to arrange a prompt visit.
              </p>
              <h2 className="font-semibold text-blue-900 text-lg mb-4">
                Patient First Visit
              </h2>
              <p className="text-gray-600 mb-4">
                Your first visit will be all about getting to know each other!
                To properly ensure we are giving you the best care possible,
                your first time visiting our clinic will look something like
                this;
              </p>
              <p className="text-gray-600 mb-4">
                <span className="text-sky-900 font-semibold">
                  Review of medical history:{" "}
                </span>
                We will review any medical and dental history available. This
                will be your chance to talk about any past or present dental
                concerts. It will also help us in understanding how your dental
                care may be affected by medications or existing health
                conditions. 
              </p>
              <p className="text-gray-600 mb-4">
                <span className="text-sky-900 font-semibold">
                  Examination:{" "}
                </span>
                Our dentist will evaluate your mouth, teeth, and gums. During
                this process, they will check for any additional dental
                conditions that may be present before performing a professional
                cleaning to remove any plaque or tartar build up. If necessary,
                our team will take x-rays of your mouth and address the results
                with you.
              </p>
              <p className="text-gray-600 mb-4">
                <span className="text-sky-900 font-semibold">
                  Treatment planning:{" "}
                </span>
                We will consolidate everything we have discussed and examined to
                create a treatment plan individualized to your personal needs,
                schedule, and comfort. We will answer any questions you have so
                you are informed and involved in your care. 
              </p>
              <p className="text-gray-600 mb-4">
                During the appointment, we will review your medical and dental
                history to understand any concerns you may have and how
                medications or health conditions could affect your dental care.
                Our dentist will then examine your mouth, teeth, and gums,
                looking for any existing dental issues, followed by a
                professional cleaning to remove plaque and tartar buildup.
                X-rays may be taken if necessary, and we will discuss the results
                with you. Finally, based on our findings, we will create a
                personalized treatment plan tailored to your needs, schedule,
                and comfort, ensuring you are fully informed and involved in your
                dental care.
              </p>
            </div>
            <div className="col-span-8 lg:col-span-8">
              <h2 className="font-semibold text-blue-900 text-lg mb-4">
                Appointment Form
              </h2>
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
            <div className="col-span-8 lg:col-span-8">
              <h2 className="font-semibold text-blue-900 text-lg mb-4">
                Financial Information
              </h2>
              <p className="text-gray-600 mb-4">
                City South Dental accepts all major credit cards, debit cards,
                and cash as payment methods. Upon payment, you will receive a
                detailed receipt listing all dental services provided during
                your visit. The cost of services may vary depending on the
                treatment received. 
              </p>
              <p className="text-gray-600 mb-4">
                Our administrative team is here to help you with direct billing
                to your insurance provider. Please remember to bring your
                insurance card or plan information when you check in for your
                appointment. This will enable us to provide estimates and
                confirm your coverage accurately.
              </p>
              <p className="text-gray-600 mb-4">
                We always prioritize your budget and will discuss treatment
                alternatives and costs with you. If you have any questions about
                your treatment, our team is ready to provide answers. Before
                proceeding with your treatment plan, we will also review your
                insurance details thoroughly.
              </p>
              <h2 className="font-semibold text-blue-900 text-lg mb-4">
                Privacy, Accessibility and Inclusivity
              </h2>
              <p className="text-gray-600 mb-4">
                City South Dental works to create an accessible and inclusive
                business where all patients can receive and fully participate in
                their treatment. We abide by the regulations laid out by the
                AODA and are guided by the principles of dignity, independence,
                integration, and equal opportunity in the services we provide to
                our patients. By making these principles the foundation of our
                clinic, we fulfill our commitment to providing quality care to
                all patients, regardless of ability.
              </p>
              <p className="text-gray-600 mb-4">
                We proudly maintain a welcoming environment that celebrates
                diversity and inclusivity, including being a safe space for
                LGBTQ+ patients. Our compassionate staff is committed to
                respectful care that values patients comfort and safety. Our
                practice is dedicated to providing high-quality dental service
                with sensitivity to the unique needs of LGBTQ+ individuals in a
                clinic free of judgment or discrimination.
              </p>
              <h3 className="font-semibold text-blue-900 text-lg mb-4">
                Privacy Policy
              </h3>
              <p className="text-gray-600 mb-4">
                Our clinic abides by the regulations set by the Canadian Dental
                Association Privacy Policy. These regulations are as follows:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>
                  <strong>Responsibility for Personal Information:</strong> The
                  CDA takes responsibility for all personal information it
                  holds, including information transferred to third parties.
                </li>
                <li>
                  <strong>Collection, Use, and Disclosure:</strong> Personal
                  information will only be collected, used, or disclosed with
                  the knowledge and consent of the individual, except in
                  emergencies or when permitted or required by law.
                </li>
                <li>
                  <strong>Purpose Specification:</strong> The CDA will clearly
                  identify and document the purposes for which it collects,
                  uses, or discloses personal information at or before the time
                  of collection.
                </li>
                <li>
                  <strong>Limitation on Use and Disclosure:</strong> Personal
                  information will not be used or disclosed for purposes other
                  than those for which it was collected, except with the consent
                  of the individual or as required by law.
                </li>
                <li>
                  <strong>Retention:</strong> Personal information will be
                  retained only as long as necessary to fulfill the identified
                  purposes.
                </li>
                <li>
                  <strong>Security Safeguards:</strong> The CDA will protect
                  personal information with safeguards appropriate to the
                  sensitivity of the information.
                </li>
              </ul>
              <p className="text-gray-600 mb-4">
                These principles ensure that patient privacy and confidentiality
                are maintained while also complying with legal and ethical
                standards for the handling of personal information in healthcare
                settings. Its important for your clinic to continue
                implementing these practices to uphold patient trust and comply
                with privacy regulations.
              </p>
              <p className="text-gray-600 mb-4">
                Our clinic adheres to the Canadian Dental Association (CDA)
                Privacy Policy, which emphasizes responsibility for all personal
                information, including transfers to third parties. Personal
                information is collected, used, or disclosed with the
                individuals knowledge and consent, except in emergencies or as
                permitted by law. The purposes for collecting, using, or
                disclosing personal information are clearly identified and
                documented upfront. Information is not used or disclosed for
                other purposes without consent, unless required by law. Personal
                data is retained only as long as necessary for the specified
                purposes, and safeguards appropriate to the sensitivity of the
                information are implemented to protect it. These practices
                ensure compliance with privacy regulations and maintain patient
                confidentiality and trust.
              </p>
              <h3 className="font-semibold text-blue-900 text-lg mb-4">
                Patient Forms
              </h3>
              <p className="text-gray-600 mb-4">
                Welcome to City South Dental! If you are visiting us for the
                first time, please complete our registration forms prior to your
                appointment. You have two options to do this:
              </p>
              <ol className="list-decimal list-inside text-gray-600 mb-4">
                <li>
                  <strong>Fill Out Forms at Home:</strong> You can download and
                  print the forms from the link below. Alternatively, email us
                  at{" "}
                  <a
                    href="mailto:dentist@citysouthdental.com"
                    className="text-blue-500"
                  >
                    dentist@citysouthdental.com
                  </a>
                  , and we will promptly send you the forms.
                </li>
                <li>
                  <strong>Complete Forms at the Clinic:</strong> If you prefer
                  to fill out the forms at our clinic, please arrive 15 minutes
                  early to your appointment so we can assist you.
                </li>
              </ol>
              <p className="text-gray-600 mb-4">
                <strong>Important Notes:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>
                  Each form must be signed in ink by the patient or
                  parent/guardian.
                </li>
                <li>Each patient requires a separate signed form.</li>
                <li>
                  If you have insurance and would like us to submit claims
                  directly to your provider, please bring your physical
                  insurance card with you.
                </li>
              </ul>
              <p className="text-gray-600 mb-4">
                We are excited to welcome you to our clinic and look forward to
                providing you with excellent dental care.
              </p>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default Appointmentform;
