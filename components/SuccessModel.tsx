import React from "react";
import { useRouter } from "next/navigation";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  vCart?: boolean;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  message,
  vCart,
}) => {
  const router = useRouter();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>

        {/* Success Message */}
        <div className="flex items-center bg-green-50 border border-green-100 text-green-700 p-4 rounded-lg mb-6">
          <svg
            className="w-6 h-6 mr-3 flex-shrink-0 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="text-lg font-semibold">{message}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition-all"
          >
            Close
          </button>
          {vCart && (
            <button
              onClick={() => router.push("/Cart")}
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-all"
            >
              View Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;