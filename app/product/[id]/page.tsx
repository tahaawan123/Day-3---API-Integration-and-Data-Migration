"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SuccessModal from "@/components/SuccessModel";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  quantity: number;
  rating: {
    rate: number;
    count: number;
  };
}

const SingleProduct = () => {
  const [data, setData] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const query = `*[_type == "products" && _id == $id]{
        _id,
        title,
        price,
        description,
        category,
        rating,
        "imageUrl": image.asset->url
      }`;

      client
        .fetch(query, { id })
        .then((res) => {
          if (res && res.length > 0) setData(res[0]);
        })
        .catch(() => setData(null));
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!data) return;

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const productExists = existingCart.find((item: Product) => item._id === data._id);
    let updatedCart;
    if (productExists) {
      updatedCart = existingCart.map((item: Product) =>
        item._id === data._id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...existingCart, { ...data, quantity: 1 }];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setSuccessMessage("Product added to cart successfully!");
    setIsModalOpen(true);
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {!data ? (
          <div className="text-center">
            <p className="text-3xl text-gray-600 animate-pulse">Loading product...</p>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-2xl shadow-2xl flex flex-col md:flex-row md:space-x-12">
            {/* Product Image */}
            <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
              <Image
                src={data.imageUrl}
                alt={data.title}
                width={500}
                height={500}
                className="object-contain h-80 w-80 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2">
              <h1 className="text-4xl font-extrabold text-indigo-800 mb-4">{data.title}</h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">{data.description}</p>
              <p className="text-2xl text-green-700 font-semibold mb-4">${data.price}</p>

              {/* Add to Cart Button */}
              <div className="flex justify-center mt-auto">
                <button
                  onClick={handleAddToCart}
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 px-8 rounded-2xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        vCart={true}
        message={successMessage}
      />
    </div>
  );
};

export default SingleProduct;
