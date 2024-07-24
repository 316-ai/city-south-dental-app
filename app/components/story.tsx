import Image from "next/image";

const Story = () => {
  return (
    <>
      <div className="px-3 py-2 pt-7 lg:pt-12">
        <div className="lg:container mx-auto">
          <div className="grid grid-cols-8 gap-12 md:gap-8">
            <div className="col-span-8 lg:col-span-1 flex lg:flex-col justify-between flex-wrap gap-8">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-4xl font-semibold text-sky-600">34+</h2>
                <h6 className="text-sm text-gray-500">Awards Won</h6>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-4xl font-semibold text-sky-600">100K+</h2>
                <h6 className="text-sm text-gray-500">Happy Patients</h6>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-4xl font-semibold text-sky-600">100%</h2>
                <h6 className="text-sm text-gray-500">Patient Satisfaction</h6>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-4xl font-semibold text-sky-600">10+</h2>
                <h6 className="text-sm text-gray-500">Years of Experience</h6>
              </div>
            </div>
            <div className="col-span-4 md:col-span-3">
              <Image
                src="/healthy-smile.jpeg"
                alt="Healthy smile"
                className="h-full object-cover shadow rounded-3xl"
                width={1500}
                height={1000}
              />
            </div>
            <div className="col-span-8 md:col-span-5 lg:col-span-4 flex flex-col justify-center">
              <h6 className="text-sm text-sky-600 mb-3">Our Story</h6>
              <h2 className="text-2xl text-sky-900 font-semibold mb-3">
                Building Healthy Smiles and Happy Lives
              </h2>
              <p className="text-sm text-gray-600 font-thin mb-5">
              When you come to City South Dental, you are served by a team that is deeply committed to our patients in the Brampton community and surrounding areas. We are a family dental practice devoted to personalized care and specialized dentistry, celebrating more than 25 years of smiles. We offer comprehensive treatment plans, cosmetic dentistry and restorative dentistry so you leave our clinic with a smile that is equally healthy and beautiful. Come visit and see why we love what we do! 
              </p>
              <p className="text-sm text-grey-900 mb-5">
              As a multi-specialty clinic, we are proud to have assembled a team with diverse expertise. Our facility is equipped to perform specialized practices from orthodontics and endodontics, to oral surgery services to address a variety of dental concerns, both cosmetic and internal.  Our team is united by a common mission to deliver patient centered, comprehensive care in a state-of-the-art environment. By leveraging a diverse range of skills and specialties within our team, we strive to ensure the best possible care.
              </p>
              <p className="text-sm text-gray-600 font-thin mb-5">
              We truly thank you for allowing us to take care of your dental needs. We look forward to serving you.              </p>
              <h6 className="text-sm text-gray-700">
                <b>Chief Doctor</b> - Dr. Rajvinder Bhatia
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-950 mt-6 md:mt-12">
        <div className="px-3 py-2">
          <div className="lg:container mx-auto grid grid-cols-8">
            <div className="col-span-8 md:col-span-5 flex flex-col justify-center py-6 mr-4">
              <h6 className="text-sm text-sky-300 mb-3">
                Professional Dental Care Brampton
              </h6>
              <h2 className="text-2xl text-white font-semibold mb-5">
                Dedicated to Building Healthy Smiles
              </h2>
              <p className="text-sm text-gray-300 font-thin pr-3 mb-6">
                City South Dental has been serving the Brampton community for
                over a decade. Our mission is to provide comprehensive dental
                care in a friendly and comfortable environment. We believe in
                the power of a healthy smile and are committed to helping our
                patients achieve and maintain optimal oral health.
              </p>
              <div className="grid lg:grid-cols-2">
                <li className="text-gray-300 text-sm font-normal mb-1 lg:mb-2 list-decimal">
                  State-of-the-art dental technology.
                </li>
                <li className="text-gray-300 text-sm font-normal mb-1 lg:mb-2 list-decimal">
                  Comfortable and welcoming environment.
                </li>
                <li className="text-gray-300 text-sm font-normal mb-1 lg:mb-2 list-decimal">
                  Highly skilled and experienced team.
                </li>
                <li className="text-gray-300 text-sm font-normal mb-1 lg:mb-2 list-decimal">
                  Multilingual services available.
                </li>
              </div>
              <h6 className="text-sm text-sky-300 mb-3">High standards </h6>
              <p className="text-sm text-gray-300 font-thin mb-5">
              We firmly believe that preventative care and education are the foundation of dental health. Our dedication to utilizing thorough examinations and advanced technologies like panoramic x-rays allows us to provide superior care and prevention, rather than solely managing disease.               
              </p>
              <p className="text-sm text-gray-300 font-thin mb-5">
              Our clinic is a reflection of our uncompromising high standards as we meet and exceed sterilization guidelines recommended by the Ontario Dental Association (ODA) , Health Canada, and The Occupational Health and Safety (OHS).               
              </p>
              <h6 className="text-sm text-sky-300 mb-3">Education</h6>
              <p className="text-sm text-gray-300 font-thin mb-5">
              As your dental health providers, we recognize the impact the right practitioner can have on you and your family. That’s why we approach your care with highly educated and skilled professionals. Our clinicians consistently dedicate the time to provide you in-depth oral education, empowering you to make informed decisions about your health. We know the best way to educate you is to continually educate ourselves. Therefore, we regularly attend dental lectures, meetings and dental conventions to stay updated on new technology and products to enhance the quality of your care. Our active involvement in professional dental associations ensures that we stay at the forefront of the latest developments in the dental field. 
              </p>
              <h6 className="text-sm text-sky-300 mb-3">Positive Experience </h6>
              <p className="text-sm text-gray-300 font-thin mb-5">
              We understand that visiting the dentist can be stressful for many people, for various reasons. Our goal is to make a difference by ensuring your comfort. Our compassionate team works diligently to create a relaxing and positive environment to ease any nerves you may have. We value open communication and encourage you to share any preferences or concerns to enhance your visit. We are proud to offer services in multiple languages including English, Hindi, Nepali, Punjabi, Farsi, Arabic, and Gujarati, ensuring everyone feels welcome and understood. 
              </p>
            </div>
            <Image
              src="/care-smile.jpeg"
              alt="Care for your smile"
              className="hidden md:block md:col-span-3 h-full object-cover shadow rounded-3xl relative -top-10"
              width={1500}
              height={1000}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
