





"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SuccessModal from "@/components/SuccessModel";
import Image from "next/image";
import { client } from "@/sanity/lib/client";  // Ensure the client is set up properly

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
  const { id } = useParams(); // Ensure the id is a string from the route params

  useEffect(() => {
    if (id) {
      // Sanity Query to fetch product by _id
      const query = `*[_type == "categories" && _id == $id]{
        _id,
        title,
        price,
        description,
        category,
        rating,
        "imageUrl": image.asset->url
      }`;

      // Log the query to ensure it's being executed correctly
      console.log("Executing query for product ID:", id);

      // Fetch product data from Sanity
      client
        .fetch(query, { id })
        .then((res) => {
          console.log("Response from Sanity:", res);

          // Sanity query returns an array, so we need to access the first item
          if (res && res.length > 0) {
            setData(res[0]); // Update state with the product data
          } else {
            console.log("No product found with the given ID");
            setData(null); // Handle case where no product is found
          }
        })
        .catch((err) => {
          console.error("Error fetching product from Sanity:", err);
          setData(null); // Set to null in case of error
        });
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
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {!data ? (
          <div className="text-center">
            <p className="text-3xl text-gray-600">Loading product...</p>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col md:flex-row md:space-x-12">
            {/* Product Image */}
            <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
              <Image
                src={data.imageUrl}
                alt={data.title}
                width={500}
                height={500}
                className="object-contain h-80 w-80 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2">
              <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{data.title}</h1>
              <p className="text-lg text-gray-700 mb-6">{data.description}</p>
              <p className="text-2xl text-green-600 font-semibold mb-4"> $20</p>
             
           

              {/* Add to Cart Button */}
              <div className="flex justify-center mt-auto">
                <button
                  onClick={handleAddToCart} // Add the product to localStorage
                  className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600 transform hover:scale-105 transition duration-300"
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
