const Pagebanner = ({ name }: any) => {
  return (
    <>
      <div className="about relative px-3 pt-36 lg:pt-40 pb-16 lg:mb-0">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-800 to-sky-100 opacity-60"></div>
        <div className="lg:container mx-auto relative z-10">
          <h1 className="text-3xl lg:text-4xl font-semibold text-white text-shadow-sm text-center mt-5">
            {name}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Pagebanner;
