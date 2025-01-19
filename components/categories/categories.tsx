import { client } from "@/sanity/lib/client";
import Image from "next/image";

const getData = async () => {
  const fetchData = await client.fetch(`*[_type == "categories"] {
    _id, title, "imageUrl": image.asset->url, price
  }`);
  return fetchData;
};

interface CategoriesProps {
  title: string;
  imageUrl: string;
  price: string;
  _id: string;
}

const Categories = async () => {
  const SanityData = await getData();

  return (
    <div className="p-6">
      <h1 className="text-center text-4xl mt-20 mb-8 font-extrabold font-serif text-gray-800">
        Categories
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SanityData.map((item: CategoriesProps, i: number) => (
          <div
            key={i}
            className="border rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            <Image
              className="rounded-t-lg h-[300px] w-full object-cover"
              src={item.imageUrl}
              alt={item.title}
              width={420}
              height={300}
            />
            <div className="p-4">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">
                {item.title}
              </h5>
              <p className="text-lg font-medium text-gray-700 mb-4">
                {item.price ? `$${item.price}` : "Price not available"}
              </p>
              <button className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
