import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

const getData = async () => {
  const fetchData = await client.fetch(`*[_type == "products"] {
    _id, title, price,
    "imageUrl": image.asset->url
  }`);
  return fetchData;
};

interface SanityData {
  _id: string;
  title: string;
  imageUrl: string;
  price: number;
}

const Productlist = async () => {
  const SanityData = await getData();
  console.log(SanityData);
  
  return (
    <div className="bg-gray-100 min-h-screen px-4 sm:px-8 lg:px-16">
      <h1 className="mt-8 text-center text-4xl pb-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">
        Explore Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
        {SanityData.map((item: SanityData, i: number) => (
          <div key={i} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform p-4">
            <Link href={`/product/${item._id}`}>
              <Image
                className="w-full h-[250px] object-cover rounded-lg"
                src={item.imageUrl}
                alt={item.title}
                width={400}
                height={300}
              />
              <div className="mt-4">
                <h5 className="text-xl font-semibold text-gray-800 truncate">{item.title}</h5>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-lg font-bold text-green-600">${item.price}</p>
                  <AiOutlineShoppingCart className="text-blue-500 text-2xl hover:text-blue-700" />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-gray-200 to-gray-300 py-16 text-center mt-16 px-4 sm:px-8 lg:px-16">
        <p className="text-3xl font-medium text-gray-800 mb-6">Subscribe to Our Newsletter</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-[300px] md:w-[400px] h-[50px] px-4 rounded-lg border border-gray-400 focus:outline-none focus:border-blue-500"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition mt-4 sm:mt-0">
            Subscribe
          </button>
        </div>
      </div>

      <div className="bg-white py-12 mt-12 px-4 sm:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Follow Us on Instagram</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["/cata2.svg", "/chair5.svg", "/chair2.svg", "/chair1.svg", "/chair3.svg", "/newchair.svg"].map((src, idx) => (
            <div key={idx} className="relative w-[150px] h-[150px] overflow-hidden rounded-lg shadow-md hover:scale-110 transition-transform">
              <Image src={src} alt={`Instagram post ${idx + 1}`} layout="fill" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productlist;
