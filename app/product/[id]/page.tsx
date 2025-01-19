import { client } from "@/sanity/lib/client";
import Image from "next/image";

const getProductData = async (id: string) => {
  const product = await client.fetch(
    `*[_type == "products" && _id == $id][0]{
      title, price, description,
      "imageUrl": image.asset->url
    }`,
    { id }
  );
  return product;
};

interface ProductDetails {
  title: string;
  imageUrl: string;
  price: number;
  description: string;
}

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const product: ProductDetails | null = await getProductData(params.id);

  if (!product) {
    return (
      <div className="max-w-screen-lg mx-auto mt-12 p-6 bg-gray-50 rounded-lg shadow-md text-center">
        <h1 className="text-5xl font-bold mb-6 text-red-600">Product Not Found</h1>
        <p className="text-lg text-gray-600">
          Sorry, the product you are looking for does not exist or has been removed.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto mt-12 p-10 bg-white rounded-lg shadow-xl border border-gray-300">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-900">{product.title}</h1>
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <Image
          src={product.imageUrl}
          alt={product.title}
          width={700}
          height={700}
          className="rounded-lg w-full lg:w-1/2 object-cover"
        />
        <div className="flex flex-col w-full lg:w-1/2">
          <p className="text-lg font-medium mb-4 text-gray-800">{product.description}</p>
          <p className="text-3xl font-bold mb-8 text-green-700">${product.price}</p>
          <button className="w-full h-[60px] bg-[#029FAE] text-white rounded-lg hover:bg-sky-600 transition-all transform hover:scale-105 focus:outline-none">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
