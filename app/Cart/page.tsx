"use client";

import { useState, useEffect } from "react";
import Modal from "@/components/Model";
import { useRouter } from "next/navigation";
import SuccessModal from "@/components/SuccessModel";
import Image from "next/image";
import Link from "next/link";
import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Product {
  imageUrl: string | StaticImport;
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

const Cart = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });
  const router = useRouter();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const handleRemoveFromCart = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    if (updatedCart.length === cart.length) {
      console.warn("Product not found in the cart!");
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Item removed from cart!");
  };

  const handleQuantityChange = (id: number, delta: number) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantity + delta;
        if (newQuantity > 0) {
          return { ...item, quantity: newQuantity };
        }
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.address) {
      alert("All fields are required.");
      return;
    }

    setIsModalOpen(false);
    setIsModalOpen2(true);
    setSuccessMessage("Your Order Successfully Placed");

    setCart([]);
    localStorage.removeItem("cart");

    setTimeout(() => {
      router.push("/thankyoupage");
    }, 3000);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Your Shopping Cart</h1>
        {cart.length === 0 ? (
          <>
            <div className="text-center text-xl text-gray-600">Your Cart Is Empty</div>
            <div className="flex justify-center w-full mt-8">
              <Link href={"/product"}>
                <button className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </>
        ) : (
          <div className="bg-white shadow-lg rounded-lg p-6 mb-8 space-y-6">
            {cart.map((product) => (
              <div key={product.id} className="flex items-center justify-between border-b pb-6 transition hover:shadow-xl rounded-lg p-4 hover:bg-gray-50">
                <div className="flex items-center gap-6">
                  <Image src={product.imageUrl} alt={product.title} width={100} height={100} className="rounded-lg border object-cover" />
                  <div className="flex flex-col">
                    <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
                    <p className="text-sm text-gray-600">Price: ${(typeof product.price === 'number' ? product.price : parseFloat(product.price)).toFixed(2)}</p>

                    <div className="flex items-center space-x-4 gap-2">
                      <button onClick={() => handleQuantityChange(product.id, -1)} disabled={product.quantity === 1} className="bg-red-400 px-3 py-1 rounded-lg text-white hover:bg-red-600 transition duration-200">
                        <FaMinus />
                      </button>
                      <span className="text-lg font-medium">{product.quantity}</span>
                      <button onClick={() => handleQuantityChange(product.id, 1)} className="bg-green-500 px-3 py-1 rounded-lg text-white hover:bg-yellow-600 transition duration-200">
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(product.id)}
                  className="text-gray-500 hover:text-red-600"
                >
                  <FaTrashAlt />
                </button>
              </div>
            ))}
            <div className="flex justify-between items-center py-4 border-t">
              <div className="text-lg font-semibold">Total: ${getTotalPrice().toFixed(2)}</div>
              <button onClick={() => setIsModalOpen(true)} className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleSubmit} cart={cart} form={form} handleInputChange={handleInputChange} />
      <SuccessModal isOpen={isModalOpen2} onClose={() => setIsModalOpen2(false)} message={successMessage} vCart={true} />
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default Cart;
