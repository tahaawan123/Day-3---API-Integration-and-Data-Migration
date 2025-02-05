import Link from "next/link";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

const getData = async () => {
  const fetchData = await client.fetch(`*[_type == "categories"] {
    _id, title, "imageUrl": image.asset->url
  }`);
  return fetchData;
};

interface Categories {
  title: string;
  imageUrl: string;
  _id: number;
}

const Categories = async () => {
  const SanityData = await getData();

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Explore Categories
        </h1>
        <p className="text-lg text-gray-600">
          Discover our curated collection of categories
        </p>
      </div>

      {/* Categories Grid */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {SanityData.map((item: Categories, i: number) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
          >
            <Link href={`/categories/${item._id}`}>
              {/* Category Image */}
              <div className="relative h-64 w-full">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Category Details */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {item.title}
                </h3>
                <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  Explore Now
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;