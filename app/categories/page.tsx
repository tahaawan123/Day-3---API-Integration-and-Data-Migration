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
  console.log(SanityData);

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <h1 className="text-center text-4xl mt-20 mb-8 font-extrabold text-gray-800">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {SanityData.map((item: Categories, i: number) => {
          return (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md hover:shadow-xl  transform hover:scale-105 transition-transform duration-300"
            >
              <Link href={`/categories/${item._id}`}>
                <Image
                  className="rounded-t-lg h-[300px] object-cover"
                  src={item.imageUrl}
                  alt="image"
                  width={420}
                  height={300}
                />
                <div className="p-4">
                  <h5 className="mb-3 text-2xl font-bold text-gray-900">{item.title}</h5>
                  <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transform hover:scale-105 transition duration-300">
                    Buy Now
                  </button>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
