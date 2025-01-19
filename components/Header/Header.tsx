import React from "react";
import { TiTick } from "react-icons/ti";
import Image from "next/image";
import { AiOutlineExclamationCircle, AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      {/* First Header */}
      <div className="bg-[#272343] text-white">
        <div className="flex flex-wrap justify-between items-center max-w-screen-xl mx-auto py-2 px-4 lg:px-16">
          {/* Free Shipping */}
          <div className="flex items-center gap-2 opacity-70 w-full sm:w-auto">
            <TiTick className="text-xl text-green-400 hover:text-green-600 transition" />
            <p className="text-sm font-bold">Free shipping on all orders over $50</p>
          </div>

          {/* Language, FAQs, and Help (visible on large screens) */}
          <div className="hidden lg:flex items-center gap-6 text-sm w-full sm:w-auto mt-2 lg:mt-0">
            <div className="flex items-center gap-1">
              <p className="hover:text-gray-300 transition">Eng</p>
              <Image src={"vector.svg"} alt="vector" width={20} height={20} />
            </div>
            <p className="hover:text-gray-300 transition"><Link href="/Faqs">Faqs</Link></p>
            <div className="flex items-center gap-1">
              <AiOutlineExclamationCircle className="w-5 h-5 text-gray-400 hover:text-white transition" />
              <p className="hover:text-gray-300 transition">Need Help</p>
            </div>
          </div>

          {/* Mobile View (language, FAQ, Help - visible on small screens) */}
          <div className="lg:hidden w-full mt-2 text-center text-sm opacity-70">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <p className="hover:text-gray-300 transition">Eng</p>
                <Image src={"/vector.svg"} alt="vector" width={15} height={10} />
              </div>
              <p className="hover:text-gray-300 transition"> <Link href="/Faqs">Faqs</Link></p>
              <div className="flex items-center gap-1">
                <Image src={"/alert.svg"} alt="alertcircle" width={20} height={20} />
                <p className="hover:text-gray-300 transition">Need Help</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Header */}
      <div className="bg-[#F0F2F3]">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto py-4 px-4 lg:px-16">
          <div className="flex items-center gap-2">
            <Image src={"/logo.svg"} alt="logo" width={20} height={20} />
            <p className="text-xl font-semibold">Comforty</p>
          </div>
          <div className="flex items-center bg-white rounded-md px-3 py-2 shadow-md hover:shadow-lg transition">
          <Link href="/Cart"><AiOutlineShoppingCart className="text-xl text-gray-700 hover:text-teal-500 transition" /></Link>  
            <p className="font-bold ml-2 hover:text-teal-500 transition"> <Link href="/Cart">Cart</Link></p>
            <div className="ml-2 w-6 h-6 flex items-center justify-center rounded-full bg-[#007580] text-white">
              2
            </div>
          </div>
        </div>
      </div>

      {/* Third Header */}
      <div className="bg-white border-b">
        <div className="flex flex-wrap justify-between items-center max-w-screen-xl mx-auto py-4 px-4 lg:px-16">
          {/* Navigation Links */}
          <ul className="flex gap-4 font-bold text-sm text-[#636270] flex-wrap">
            <li className="text-[#007580] hover:underline transition">
              <Link href="./">Home</Link>
            </li>
            <li className="hover:text-[#007580] hover:underline transition">Shop</li>
            <li className="hover:text-[#007580] hover:underline transition">
              <Link href="/product">Product</Link>
            </li>
            <li className="hover:text-[#007580] hover:underline transition">Pages</li>
            <li className="hover:text-[#007580] hover:underline transition">
              <Link href="/About">About</Link>
            </li>
          </ul>

          {/* Contact Information */}
          <ul className="hidden lg:flex gap-2 text-sm text-[#636270]">
            <li className="font-bold hover:text-[#007580] hover:underline transition">
              <Link href="/Contact">Contact:</Link>
            </li>
            <li className="text-[#272343]">(808) 555-0111</li>
          </ul>

          {/* Mobile Responsive Contact */}
          <div className="lg:hidden flex flex-col items-end gap-2 mt-4">
            <p className="text-sm text-[#636270]">
              <Link href="/Contact">
                Contact:<span className="text-[#272343]">(808) 555-0111</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
