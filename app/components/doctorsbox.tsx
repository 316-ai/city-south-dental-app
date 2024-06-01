import Image from "next/image";

interface DoctorsboxProps {
  photo: string;
  name: string;
  brief: string;
}

const Doctorsbox = ({ photo, name, brief }: DoctorsboxProps) => {
  return (
    <>
      <div className="transition-all rounded-3xl overflow-hidden border shadow hover:shadow-lg py-4 px-5 bg-gray-50 text-center">
        <Image
          src={photo}
          alt="pediatric-dentistry"
          className="mb-3 mx-auto rounded-full h-32 w-32 object-cover shadow-sm"
          width={100}
          height={74}
        />
        <h1 className="line-clamp-1 font-semibold text-gray-700">{name}</h1>
        <p className="line-clamp-3 text-sm text-gray-500 font-light mt-2">
          {brief}
        </p>
      </div>
    </>
  );
};

export default Doctorsbox;
