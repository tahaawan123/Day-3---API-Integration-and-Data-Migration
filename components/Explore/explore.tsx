import Image from "next/image";

export default function ExploreProduct() {
  return (
    <div className="bg-gray-100 py-12 px-6 sm:px-12">
      {/* Explore Section */}
      <div className="flex flex-col lg:flex-row items-center lg:ml-16 space-y-8 lg:space-y-0 lg:space-x-12">
        
        {/* Vertical Text Section */}
        <div className="flex items-center justify-end lg:justify-start gap-6 lg:gap-10">
          <div className="w-12 flex items-center justify-center">
            <p className="transform -rotate-90 text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 whitespace-nowrap">
              Explore New and Popular Styles
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex flex-col lg:flex-row lg:gap-8 w-full">
          {/* Left Section - Large Image */}
          <div className="flex justify-center items-center w-full lg:w-[50%] mb-6 lg:mb-0">
            <Image
              src={"/chair3.svg"}
              alt="Chair"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-full"
              width={648}
              height={648}
            />
          </div>

          {/* Right Section - Small Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:w-[50%]">
            {["/chair4.svg", "/chair1.svg", "/chair6.svg", "/chair1.svg"].map(
              (src, index) => (
                <div
                  key={index}
                  className="relative group hover:scale-105 transition-transform duration-300 w-full"
                >
                  <Image
                    src={src}
                    alt={`Chair ${index + 1}`}
                    className="rounded-lg shadow-md object-cover w-full"
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
