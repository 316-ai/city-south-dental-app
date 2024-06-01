import Link from "next/link";
import FeatherIcon from "feather-icons-react";
import Image from "next/image";

interface ServiceboxProps {
  image: string;
  caption: string;
  description: string;
}

const Servicebox = ({ image, caption, description }: ServiceboxProps) => {
  return (
    <>
      <div className="transition-all rounded-3xl overflow-hidden border shadow hover:shadow-lg py-4 px-5 bg-gray-50">
        <Image
          src={`/services/${image}.svg`}
          alt="pediatric-dentistry"
          className="mb-3"
          width={74}
          height={74}
        />
        <h1 className="line-clamp-1 font-semibold text-gray-700">{caption}</h1>
        <p className="line-clamp-3 text-sm text-gray-500 font-light mt-2">
          {description}
        </p>
        <Link
          href="/treatment/123"
          className="text-sm flex items-center uppercase text-sky-600 hover:underline mt-3"
        >
          <span>Read more</span>
          <span>
            <FeatherIcon icon="arrow-right" className="size-4 ml-2" />
          </span>
        </Link>
      </div>
    </>
  );
};

export default Servicebox;
