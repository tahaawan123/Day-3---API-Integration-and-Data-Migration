


import Image from "next/image";
const logos = [
  "/logo1.svg",
  "/logo2.svg",
  "/logo-3.svg",
  "/logo4.svg",
  "/logo5.svg",
  "/logo6.svg",
  "/logo7.svg",
];

export default function Hero() {
  return (
    <div>
      {/* Hero Section */}
      <div className="flex justify-center items-center bg-[#F0F2F3] px-6 py-12 ">
        <div className="max-w-screen-xl w-full flex flex-col lg:flex-row justify-between items-center">
          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-sm sm:text-base lg:text-lg text-[#272343]">
              Welcome to chairy
            </h1>
            <p className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Best Furniture Collection for your interior.
            </p>
            <button className="bg-[#029FAE] text-white py-3 px-6 rounded-md flex items-center gap-4 hover:bg-blue-700">
              <span>Shop Now</span>
              <svg
                xmlns="http://www.w3.org/2000/svg "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12h18M15 18l6-6-6-6"
                />
              </svg>
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <Image
              src={"/chair.svg"}
              alt="chair"
              width={500}
              height={500}
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg"

            />
          </div>
        </div>
      </div>

      {/* Logos Section */}
     




    <div className="flex justify-center items-center bg-white py-6 px-6">
      <div className="max-w-screen-xl w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              src={logo}
              alt={`logo ${index + 1}`}
              width={100}
              height={100}
              className="w-16 h-16 sm:w-20 sm:h-20"
            />
          </div>
        ))}
      </div>
    </div>
  

    </div>
  );
}
