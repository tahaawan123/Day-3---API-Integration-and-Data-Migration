import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Shop() {
  return (
    <div className="px-6 lg:px-20 py-10 bg-gray-50 min-h-screen">
      {/* Main Container */}
      <div className="flex flex-wrap justify-between gap-10">
        {/* Left Section */}
        <div className="flex-1 max-w-3xl">
          <h1 className="font-bold text-3xl text-gray-800 mb-6">Shopping Bag</h1>

          {/* Item Card */}
          {["chair.svg", "chair5.svg"].map((imgSrc, index) => (
            <div
              key={index}
              className="w-full p-5 bg-white shadow-md rounded-lg flex gap-6 hover:shadow-lg transition"
            >
              <Image
                src={`/${imgSrc}`}
                alt="Product Image"
                width={120}
                height={120}
                className="self-center rounded-lg border"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold text-gray-700">Library Stool Chair</p>
                  <p className="text-md font-bold text-teal-600">$99</p>
                </div>
                <p className="text-sm text-gray-500 mt-2">Ashen Slate / Cobalt Bliss</p>
                <p className="text-sm text-gray-500">Size L | Quantity 1</p>
                <div className="flex gap-5 mt-4 text-gray-500">
                  <FaRegHeart className="w-6 h-6 hover:text-red-500 cursor-pointer" />
                  <RiDeleteBin6Line className="w-6 h-6 hover:text-red-500 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
          <h2 className="font-bold text-2xl text-gray-800 mb-6">Order Summary</h2>

          <div className="space-y-4">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>$198.00</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Estimated Delivery & Handling</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-gray-800 font-bold border-t pt-4">
              <span>Total</span>
              <span>$198.00</span>
            </div>
          </div>

          <button className="w-full mt-6 py-3 bg-teal-500 text-white text-lg font-semibold rounded-lg hover:bg-teal-600 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
