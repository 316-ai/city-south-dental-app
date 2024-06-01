import Image from "next/image";

const Topchoice = () => {
  return (
    <>
      <div className="px-3 py-7 lg:py-12 bg-gray-50">
        <div className="lg:container mx-auto">
          <div className="flex justify-between items-end">
            <div>
              <h6 className="text-sm text-sky-600 mb-3">
                Excellence in Dental Care
              </h6>
              <h2 className="text-2xl text-sky-900 font-semibold">
                Why We Are Your Top Dental Choice for Unrivaled Excellence
              </h2>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm text-gray-400 font-light max-w-60 border-l-4 border-sky-400 pl-4">
                Our commitment to excellence and patient satisfaction sets us
                apart. Discover why our patients trust us for all their dental
                needs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-7">
            <div className="col-span-1 relative ease-in duration-150 card border border-transparent hover:border-gray-200 rounded-3xl hover:bg-white hover:shadow-md p-3 md:p-5">
              <Image
                src="/topchoice/unmatched-expertise.svg"
                alt="Unmatched Expertise"
                className="mb-3"
                width={60}
                height={60}
              />
              <h2 className="font-semibold mb-3">Unmatched Expertise</h2>
              <h6 className="text-sm text-gray-500 font-light">
                Our team of dental professionals brings years of experience and
                a commitment to staying at the forefront of dental technology
                and techniques.
              </h6>
              <h5 className="text-5xl md:text-7xl font-bold text-gray-200 absolute top-8 right-6">
                01
              </h5>
            </div>
            <div className="col-span-1 relative ease-in duration-150 card border border-transparent hover:border-gray-200 rounded-3xl hover:bg-white hover:shadow-md p-3 md:p-5">
              <Image
                src="/topchoice/personalized-care.svg"
                alt="Personalized Care"
                className="mb-3"
                width={74}
                height={74}
              />
              <h2 className="font-semibold mb-3">Personalized Care</h2>
              <h6 className="text-sm text-gray-500 font-light">
                We tailor our dental services to meet the unique needs of each
                patient, ensuring personalized and effective treatment plans.
              </h6>
              <h5 className="text-5xl md:text-7xl font-bold text-gray-200 absolute top-8 right-6">
                02
              </h5>
            </div>
            <div className="col-span-1 relative ease-in duration-150 card border border-transparent hover:border-gray-200 rounded-3xl hover:bg-white hover:shadow-md p-3 md:p-5">
              <Image
                src="/topchoice/comprehensive-services.svg"
                alt="Comprehensive Services"
                className="mb-3"
                width={60}
                height={60}
              />
              <h2 className="font-semibold mb-3">Comprehensive Services</h2>
              <h6 className="text-sm text-gray-500 font-light">
                From routine checkups to advanced dental procedures, we offer a
                full range of services to address all your dental needs in one
                place.
              </h6>
              <h5 className="text-5xl md:text-7xl font-bold text-gray-200 absolute top-8 right-6">
                03
              </h5>
            </div>
            <div className="col-span-1 relative ease-in duration-150 card border border-transparent hover:border-gray-200 rounded-3xl hover:bg-white hover:shadow-md p-3 md:p-5">
              <Image
                src="/topchoice/patient-centric-approach.svg"
                alt="Patient-Centric Approach"
                className="mb-3"
                width={60}
                height={60}
              />
              <h2 className="font-semibold mb-3">Patient-Centric Approach</h2>
              <h6 className="text-sm text-gray-500 font-light">
                We place our patients at the center of everything we do,
                ensuring a comfortable and welcoming environment for all.
              </h6>
              <h5 className="text-5xl md:text-7xl font-bold text-gray-200 absolute top-8 right-6">
                04
              </h5>
            </div>
            <div className="col-span-1 relative ease-in duration-150 card border border-transparent hover:border-gray-200 rounded-3xl hover:bg-white hover:shadow-md p-3 md:p-5">
              <Image
                src="/topchoice/exceptional-patient-reviews.svg"
                alt="Exceptional Patient Reviews"
                className="mb-3"
                width={60}
                height={60}
              />
              <h2 className="font-semibold mb-3">
                Exceptional Patient Reviews
              </h2>
              <h6 className="text-sm text-gray-500 font-light">
                Our patients consistently rate us highly for our quality of
                care, friendly staff, and excellent results.
              </h6>
              <h5 className="text-5xl md:text-7xl font-bold text-gray-200 absolute top-8 right-6">
                05
              </h5>
            </div>
            <div className="col-span-1 relative ease-in duration-150 card border border-transparent hover:border-gray-200 rounded-3xl hover:bg-white hover:shadow-md p-3 md:p-5">
              <Image
                src="/topchoice/cutting-edge-technology.svg"
                alt="Cutting-Edge Technology"
                className="mb-3"
                width={60}
                height={60}
              />
              <h2 className="font-semibold mb-3">Cutting-Edge Technology</h2>
              <h6 className="text-sm text-gray-500 font-light">
                We use the latest dental technology to provide efficient,
                effective, and comfortable treatments for our patients.
              </h6>
              <h5 className="text-5xl md:text-7xl font-bold text-gray-200 absolute top-8 right-6">
                06
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topchoice;
