import Image from "next/image";

export default function ExploreProduct() {
  return (
    <div className="bg-gray-100 py-12 px-6 sm:px-12">
      {/* Explore Section */}
      <div className="flex flex-col lg:flex-row items-center lg:ml-16">
        {/* Vertical Text Section */}
        <div className="flex items-center gap-6 lg:gap-10 mb-8 lg:mb-0">
          <div className="w-12 flex items-center justify-center">
            <p className="transform -rotate-90 text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 whitespace-nowrap">
              Explore New and Popular Styles
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full flex flex-col lg:flex-row lg:gap-8">
          {/* Left Section - Large Image */}
          <div className="w-full lg:w-[50%] flex justify-center items-center mb-6 lg:mb-0">
            <Image
              src={"/chair3.svg"}
              alt="Chair"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              width={648}
              height={648}
            />
          </div>

          {/* Right Section - Small Images */}
          <div className="w-full grid grid-cols-2 gap-6 lg:w-[50%]">
            {["/chair4.svg", "/chair1.svg", "/chair6.svg", "/chair1.svg"].map(
              (src, index) => (
                <div
                  key={index}
                  className="relative group hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src={src}
                    alt={`Chair ${index + 1}`}
                    className="rounded-lg shadow-md object-cover"
                    width={312}
                    height={312}
                  />
                  <div className="absolute inset-0 bg-indigo-600 bg-opacity-0 group-hover:bg-opacity-20 transition-colors duration-300 rounded-lg" />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
