import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { useState } from "react";
import ShipmentForm from "@/components/ShipmentForm";

interface Product {
  imageUrl: string | StaticImport;
  _id: number;
  title: string;
  description?: string;
  price: number;
  image: string;
  quantity: number;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  cart: Product[];
  form: {
    name: string;
    email: string;
    address: string;
  };
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  cart,
}) => {
  const [orderPlaced, setOrderPlaced] = useState(false); // Track order placement

  if (!isOpen) return null;

  const calculateTotal = () => {
    return cart
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // Handle form submission and trigger order placed state change
  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true); // Set order as placed, trigger shipment form
    onSubmit(e); // Call the parent-provided submit function
  };

  if (orderPlaced) {
    // If the order is placed, render the shipment form
    return <ShipmentForm />;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-2xl relative max-h-[90vh] overflow-y-auto transform transition-all">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>

        {/* Modal Header */}
        <h2 className="text-3xl font-bold text-teal-600 mb-6 text-center">
          Checkout
        </h2>

        {/* Order Summary Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Order Summary
          </h3>
          {cart.length === 0 ? (
            <p className="text-gray-600 text-center">Your cart is empty.</p>
          ) : (
            <div>
              {cart.map((product) => (
                <div
                  key={product._id}
                  className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-lg"
                >
                  {/* Product Image */}
                  <div className="w-20 h-20 relative">
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-grow ml-6">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {product.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Price: ${product.price !== null && product.price !== undefined ? product.price.toFixed(2) : "N/A"}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Quantity: {product.quantity}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Subtotal: ${(product.price * product.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}

              {/* Total Price */}
              <div className="text-2xl font-bold text-teal-600 mt-6">
                Total: ${calculateTotal()}
              </div>
            </div>
          )}
        </div>

        {/* Place Order Button */}
        <button
          type="submit"
          onClick={handleOrderSubmit}
          className="bg-teal-600 text-white py-3 px-6 rounded-lg w-full text-lg font-semibold hover:bg-teal-700 transition-all"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Modal;