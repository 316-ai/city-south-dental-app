import Blogcard from "@/app/components/blogcard";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import Pagebanner from "@/app/components/pagebanner";
import Image from "next/image";

export default function Cdcp() {
  return (
    <>
      <Navbar />
      <section className="content">
        <Pagebanner name="What is the Canadian Dental Care Plan (CDCP)?" />

        <section>
          <div className="blogs px-3 py-7 lg:py-12 bg-white">
            <div className="lg:container mx-auto">
              <div>
                <Image
                  src="/happy-customer.jpeg"
                  alt="dots"
                  width={1000}
                  height={0}
                  className="w-full h-[360px] object-cover rounded-3xl shadow mb-6"
                />

                <h6 className="text-sm text-sky-600">
                  Canadian Dental Care Plan (CDCP)
                </h6>
                <h1 className="text-2xl text-sky-900 font-semibold mt-2 mb-4">
                  What is the Canadian Dental Care Plan (CDCP)?
                </h1>

                <h2 className="text-md font-thin text-gray-900 mb-4">
                  The Canadian Dental Care Plan (CDCP) is a federal government
                  program intended to reduce financial barriers to oral health
                  care. The program will provide coverage of the cost of dental
                  care for Canadian residents who do not have dental benefits
                  and have a household income of less than $90,000 a year.
                </h2>

                <p className="text-gray-600 mb-4">
                  Our City South Dental Clinic is now accepting CDCP patients*.
                </p>
                <p className="text-gray-600 mb-4 text-sm font-thin">
                  For more information, please visit{" "}
                  <a
                    href="https://www.citysouthdental.com"
                    className="text-sky-500"
                  >
                    www.citysouthdental.com
                  </a>{" "}
                  or contact our admin team today!
                </p>
                <p className="text-gray-600 font-semibold text-sm">
                  *IMPORTANT: Please note that enrollment to the CDCP is up to
                  the individual provider. Therefore, it is important that you
                  speak to our administrators to ensure your provider has
                  enrolled. Additionally, please note that we reserve the right
                  to discontinue acceptance of the CDCP Program at any time.
                </p>

                <div className="grid grid-cols-8 gap-12 md:gap-8 my-6">
                  <div className="col-span-8 md:col-span-5 flex flex-col">
                    <p className="text-sm text-sky-900 font-semibold mb-5">
                      CDCP Program Eligibility
                    </p>
                    <div className="text-sm text-gray-600 font-semibold mb-5">
                      <p className="flex items-center">
                        <span className="mr-2">✅</span> Be a Canadian resident
                        for tax purposes
                      </p>
                      <p className="flex items-center">
                        <span className="mr-2">✅</span> Not have access to
                        employer/pension-sponsored or private dental insurance
                      </p>
                      <p className="flex items-center">
                        <span className="mr-2">✅</span> Have filed your tax
                        return in the previous year
                      </p>
                      <p className="flex items-center">
                        <span className="mr-2">✅</span> Have an adjusted family
                        net income of less than $90,000
                      </p>
                    </div>
                    <p className="text-sm text-sky-900 mb-1">
                      Coverage under the CDCP will begin in May 2024 for the
                      earliest applicants. ​
                    </p>
                    <p className="text-sm text-sky-900 mb-5">
                      Applications to the CDCP are phased beginning with
                      seniors. See application schedule below.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                          <tr>
                            <th className="px-4 py-2 border border-gray-200 bg-gray-100 text-left text-sm font-medium text-gray-700">
                              Eligible Age Groups
                            </th>
                            <th className="px-4 py-2 border border-gray-200 bg-gray-100 text-left text-sm font-medium text-gray-700">
                              Date Applications Open
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-gray-50 border-b border-gray-200">
                            <td className="px-4 py-2 text-sm text-gray-600">
                              Seniors 87+
                            </td>
                            <td className="border px-4 py-2 text-sm text-gray-600">
                              Dec-23
                            </td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="px-4 py-2 text-sm text-gray-600">
                              Seniors between 77 - 86
                            </td>
                            <td className="border px-4 py-2 text-sm text-gray-600">
                              Jan-24
                            </td>
                          </tr>
                          <tr className="bg-gray-50 border-b border-gray-200">
                            <td className="px-4 py-2 text-sm text-gray-600">
                              Seniors between 72 - 76
                            </td>
                            <td className="border px-4 py-2 text-sm text-gray-600">
                              Feb-24
                            </td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="px-4 py-2 text-sm text-gray-600">
                              Seniors between 70 - 71
                            </td>
                            <td className="border px-4 py-2 text-sm text-gray-600">
                              Mar-24
                            </td>
                          </tr>
                          <tr className="bg-gray-50 border-b border-gray-200">
                            <td className="px-4 py-2 text-sm text-gray-600">
                              Seniors between 65 - 69
                            </td>
                            <td className="border px-4 py-2 text-sm text-gray-600">
                              May-24
                            </td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="px-4 py-2 text-sm text-gray-600">
                              People holding a valid Disability Tax Credit
                              Certificate
                            </td>
                            <td className="border px-4 py-2 text-sm text-gray-600">
                              Jun-24
                            </td>
                          </tr>
                          <tr className="bg-gray-50 border-b border-gray-200">
                            <td className="px-4 py-2 text-sm text-gray-600">
                              Children under 18
                            </td>
                            <td className="border px-4 py-2 text-sm text-gray-600">
                              Jun-24
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 text-sm text-gray-600">
                              All other eligible Canadian citizens and residents
                            </td>
                            <td className="border px-4 py-2 text-sm text-gray-600">
                              2025
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-span-4 md:col-span-3">
                    <Image
                      src="/healthy-smile.jpeg"
                      alt="healthy smile"
                      className="h-full object-cover shadow rounded-3xl"
                      width={1500}
                      height={1000}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="blogs px-3 py-7 lg:py-12 bg-white">
              <h6 className="text-sm text-sky-600">
                CDCP Program Acceptance and Enrollment
              </h6>
              <p className="text-gray-600 font-thin mb-4">
                Coverage will begin in May 2024 for the earliest applicants.
                Patients MUST have a member card to receive coverage through the
                CDCP.
              </p>
              <p className="text-gray-600 font-thin mb-4">
                The welcome package from Sun Life will include the date a
                patient can start seeing an oral health provider. Appointments
                can only be scheduled on or after that date for the eligible
                oral health care services to be covered under the plan.
              </p>
              <p className="text-gray-600 mb-4 font-thin">
                Patient CDCP start dates will depend on:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 font-thin">
                <li>when their application was received and</li>
                <li>when their enrolment is completed</li>
              </ul>
              <p className="text-gray-600 font-thin mb-4">
                The first group that will be eligible to visit an oral health
                provider will be as early as May 2024, starting with seniors.
              </p>
              <p className="text-gray-600 font-bold">
                IMPORTANT: The CDCP will not reimburse for services received
                before the start date.
              </p>
              <div className="py-3">
                <h6 className="text-sm text-sky-900 font-semibold mb-5">
                  Services Covered by the CDCP Include
                </h6>
                <ul className="list-none text-gray-600 mb-4">
                  <li className="flex items-center mb-2">
                    <span className="mr-2">✅</span> Preventive services
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="mr-2">✅</span> Diagnostic services
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="mr-2">✅</span> Restorative services
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="mr-2">✅</span> Endodontic services
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="mr-2">✅</span> Prosthodontic services
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="mr-2">✅</span> Periodontal services
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="mr-2">✅</span> Oral surgery services
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="mr-2">✅</span> Sedation dentistry services
                  </li>
                </ul>
                <p className="text-sm text-gray-600 font-thin mb-5">
                  Some oral health procedures will require preauthorization.
                  This process involves obtaining prior approval, based on the
                  recommendation of the oral health provider, before commencing
                  treatment to ensure coverage under the plan. These treatments
                  and/or services are determined with consideration of an
                  individuals oral health history and existing medical
                  conditions. Services that require preauthorization will be
                  accessible starting November 2024.
                </p>
              </div>
              <div className="mb-5">
                <h6 className="font-semibold font-bold text-sky-900 mb-4">
                  How much will the CDCP cover?
                </h6>
                <p className="text-gray-600 font-thin mb-2">
                  Depending on your family’s income, you might need to pay a
                  small part of the bill. This amount is paid to your dentist.
                </p>
                <p className="text-gray-600 font-thin mb-2">
                  The CDCP will reimburse a percentage of the cost, based on the
                  established CDCP fee guide and your adjusted family net
                  income. You may have a co-payment based on your adjusted
                  family net income. A co-payment is the percentage of the CDCP
                  fees that isn’t covered by the CDCP, and that you will have to
                  pay directly to the oral health provider. Your co-payment is
                  based on your adjusted family net income.
                </p>
                <h3 className="text-semibold font-semibold text-sky-900 mb-4">
                  Co-payments based on adjusted family net income
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 border border-gray-200 bg-gray-100 text-left text-sm font-medium text-gray-700">
                          Adjusted family net income
                        </th>
                        <th className="px-4 py-2 border border-gray-200 bg-gray-100 text-left text-sm font-medium text-gray-700">
                          CDCP Coverage
                        </th>
                        <th className="px-4 py-2 border border-gray-200 bg-gray-100 text-left text-sm font-medium text-gray-700">
                          How much will you (patient) cover
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <td className="px-4 py-2 text-sm text-gray-600">
                          Lower than $70,000
                        </td>
                        <td className="px-4 border py-2 text-sm text-gray-600">
                          100% of eligible oral health care service costs will
                          be covered at the CDCP established fees.
                        </td>
                        <td className="px-4 border py-2 text-sm text-gray-600">
                          0% of the CDCP established fees. *Additional fees may
                          be charged – see below.
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-4 py-2 text-sm text-gray-600">
                          Between $70,000 and $79,999
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-600 border">
                          60% of eligible oral health care service costs will be
                          covered at the CDCP established fees.
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-600 border">
                          40% of the CDCP established fees. *Additional fees may
                          be charged – see below.
                        </td>
                      </tr>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <td className="px-4 py-2 text-sm text-gray-600">
                          Between $80,000 and $89,999
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-600 border">
                          40% of eligible oral health care service costs will be
                          covered at the CDCP established fees.
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-600 border">
                          60% of the CDCP established fees. *Additional fees may
                          be charged – see below
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 font-thin mb-2 mt-2">
                  * Additional fees – The CDCP fees may not be the same as what
                  providers charge and only pays for services covered within the
                  plan at the established CDCP rates. These rates are not the
                  same as provincial and territorial fee guides that dentists
                  usually utilize as reference to establish their usual and
                  customary fee.
                </p>
                <p className="text-gray-600 mt-2">
                  Additional fees will be charged in addition to the co-payment
                  if:
                </p>
                <ol className="list-decimal list-inside text-gray-600">
                  <li>
                    The cost of the oral health care services is more than what
                    the CDCP will reimburse based on the established CDCP fees.
                  </li>
                  <li>
                    The patient agrees to receive care that the plan does not
                    cover.
                  </li>
                </ol>
              </div>
              <div>
                <h6 className="font-semibold font-bold text-sky-900 mb-4">
                  How to apply for CDCP coverage?
                </h6>
                <p className="text-gray-600 font-thin mb-4">
                  Invitation letters have been sent in phases by age group
                  between December 2023 and March 2024 to all potentially
                  eligible seniors who are 70 years of age or older, welcoming
                  them to apply for the CDCP.
                </p>
                <p className="text-gray-600 font-thin mb-4">
                  New* seniors aged 65 and older are now eligible to apply for
                  the CDCP online without an invitation letter.
                </p>
                <p className="text-gray-600 font-thin mb-4">
                  For more information, please visit{" "}
                  <a
                    href="https://www.canada.ca/dental"
                    className="text-sky-500"
                  >
                    www.canada.ca/dental
                  </a>{" "}
                  or speak to our admin team today!
                </p>
                <p className="text-sm text-gray-600 font-semibold mb-5">
                  *IMPORTANT: Please note that enrollment to the CDCP is up to
                  the individual provider therefore it is important that you
                  speak to our administrators to ensure your provider has
                  enrolled. Additionally, please note that we reserve the right
                  to discontinue acceptance of the CDCP Program at any time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}
