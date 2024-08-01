import FeatherIcon from "feather-icons-react";
import Doctorscarousal from "./doctorscarousal";

const Team = () => {
  return (
    <>
      <div className="px-3 py-7 lg:py-12">
        <div className="lg:container mx-auto">
          <div className="grid grid-cols-8 gap-6">
            <div className="col-span-8 md:col-span-3">
              <div>
                <h6 className="text-md text-sky-600 mb-3">
                  Comprehensive Care
                </h6>
                <h2 className="text-2xl text-sky-900 font-semibold mb-4">
                  Our Dedicated Team
                </h2>
                <p className="text-sm text-gray-400 font-thin pr-3 mb-6">
                  City South Dental has been serving the Brampton community for
                  over a decade. Our mission is to provide comprehensive dental
                  care in a friendly and comfortable environment. We believe in
                  the power of a healthy smile and are committed to helping our
                  patients achieve and maintain optimal oral health.
                </p>
                <div className="flex">
                  <a href="tel:9054591742" target="_blank">
                    <div className="transition-all bg-sky-500 text-white px-4 py-2 rounded-2xl shadow hover:bg-sky-600 hover:shadow-md">
                      <FeatherIcon
                        icon="phone-call"
                        className="float-left size-6 my-5 mr-4 text-white"
                      />
                      <h2 className="text-md font-semibold">Call Us</h2>
                      <h5 className="text-sm font-light leading-4">
                        for immediate assistance
                      </h5>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-8 md:col-span-5">
              <Doctorscarousal />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
