import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { BsCart3 } from "react-icons/bs";
import Link from "next/link";

const getData = async () => {
  const fetchData = await client.fetch(
    `*[_type == "products"] [4..7]{
      _id, title, price,
      "imageUrl": image.asset->url
    }`
  );
  return fetchData;
};

interface Categories {
  title: string;
  imageUrl: string;
  price: number;
  _id: number;
}

const Feature = async () => {
  const SanityData = await getData();
  console.log(SanityData);

  return (
    <div className="px-6 py-12 bg-gray-50">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#272343] mb-4">
          Featured Products
        </h1>
        <p className="text-lg text-[#6E6E6E]">
          Explore our handpicked collection of featured products.
        </p>
      </div>

      {/* Products Grid */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {SanityData.map((item: Categories, i: number) => (
          <div
            key={i}
            className="relative bg-white shadow-lg rounded-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-xl"
          >
            {/* Product Image */}
            <Link href={`/product/${item._id}`}>
              <div className="relative h-56 w-full">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            </Link>

            {/* Product Details */}
            <div className="p-4">
              <Link href={`/product/${item._id}`}>
                <p className="text-xl font-semibold text-[#272343] hover:text-[#007580] transition-colors">
                  {item.title}
                </p>
              </Link>
              <div className="flex items-center mt-2">
                <p className="text-lg font-bold text-[#007580]">
                  ${item.price}
                </p>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="absolute bottom-4 right-4">
              <button className="p-2 bg-[#007580] rounded-full hover:bg-[#005f6b] transition-colors">
                <BsCart3 className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;