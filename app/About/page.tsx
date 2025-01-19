import Image from "next/image";
import { TbTruckDelivery } from "react-icons/tb";
import { CiCircleCheck } from "react-icons/ci";
import { PiPlantLight } from "react-icons/pi";
import { RiBankCardLine } from "react-icons/ri";

export default function About() {
  return (
    <div className="bg-[#F9F9F9] text-[#2A254B] font-sans">
      {/* About Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-32 py-16 bg-[#007580] text-white">
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">About Us - Comforty</h1>
          <p className="text-lg lg:text-xl mb-6">
            At Comforty, we believe that the right chair can transform your space and elevate your comfort.
            Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that
            seamlessly blend style with functionality.
          </p>
          <button className="px-6 py-3 bg-[#098591] hover:bg-[#06a0b0] rounded-md">
            View Collection
          </button>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <Image src="/chair1.svg" alt="chair" width={480} height={400} />
        </div>
      </div>

      {/* Brand Difference Section */}
      <div className="text-center py-16">
        <h1 className="text-3xl lg:text-4xl font-bold mb-8">
          What Makes Our Brand Different
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            {
              icon: <TbTruckDelivery className="text-[#007580] w-10 h-10 mb-4" />,
              title: "Next day as standard",
              description: "Order before 3pm and get your order the next day as standard.",
            },
            {
              icon: <CiCircleCheck className="text-[#007580] w-10 h-10 mb-4" />,
              title: "Made by true artisans",
              description: "Handmade crafted goods made with real passion and craftsmanship.",
            },
            {
              icon: <RiBankCardLine className="text-[#007580] w-10 h-10 mb-4" />,
              title: "Unbeatable prices",
              description: "For our materials and quality, you won’t find better prices anywhere.",
            },
            {
              icon: <PiPlantLight className="text-[#007580] w-10 h-10 mb-4" />,
              title: "Recycled packaging",
              description: "We use 100% recycled materials to reduce our environmental footprint.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="w-72 bg-white rounded-md shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {card.icon}
              <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Products Section */}
      <div className="text-center py-16">
        <h1 className="text-3xl lg:text-4xl font-bold mb-8">Our Popular Products</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { image: "/sofa234.svg", name: "The Poplar suede sofa", price: "$99.00" },
            { image: "/parent2.svg", name: "The Dandy chair", price: "$99.00" },
            { image: "/parent3.svg", name: "The Dandy chair", price: "$99.00" },
          ].map((product, index) => (
            <div
              key={index}
              className="w-72 bg-white rounded-md shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
            >
              <Image src={product.image} alt={product.name} width={400} height={400} />
              <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
              <p className="text-md font-bold text-[#007580] mt-2">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
