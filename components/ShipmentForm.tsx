import { useState } from "react";
import { toast } from "react-toastify";

const ShipmentForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    notes: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!form.name || !form.email || !form.phone || !form.address || !form.city || !form.postalCode || !form.country) {
      toast.error("Please fill out all required fields.");
      return;
    }

    // Here you would usually handle the form submission, e.g., sending data to a server
    toast.success("Shipping information successfully submitted!");
    setForm({ name: "", email: "", phone: "", address: "", city: "", postalCode: "", country: "", notes: "" });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-teal-50 shadow-2xl rounded-3xl">
      <h2 className="text-4xl font-bold text-blue-800 mb-8 text-center">
        🚚 Shipping Information
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-blue-700 font-medium text-lg">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            placeholder="John Doe"
            className="mt-2 p-4 w-full border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
            required
          />
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-blue-700 font-medium text-lg">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            placeholder="example@example.com"
            className="mt-2 p-4 w-full border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-blue-700 font-medium text-lg">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleInputChange}
            placeholder="+1 123-456-7890"
            className="mt-2 p-4 w-full border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
            required
          />
        </div>

        {/* Shipping Address */}
        <div>
          <label htmlFor="address" className="block text-blue-700 font-medium text-lg">Shipping Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={form.address}
            onChange={handleInputChange}
            placeholder="123 Main St"
            className="mt-2 p-4 w-full border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
            required
          />
        </div>

        {/* City */}
        <div>
          <label htmlFor="city" className="block text-blue-700 font-medium text-lg">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={form.city}
            onChange={handleInputChange}
            placeholder="New York"
            className="mt-2 p-4 w-full border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
            required
          />
        </div>

        {/* Postal Code */}
        <div>
          <label htmlFor="postalCode" className="block text-blue-700 font-medium text-lg">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={form.postalCode}
            onChange={handleInputChange}
            placeholder="10001"
            className="mt-2 p-4 w-full border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
            required
          />
        </div>

        {/* Country */}
        <div>
          <label htmlFor="country" className="block text-blue-700 font-medium text-lg">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={form.country}
            onChange={handleInputChange}
            placeholder="USA"
            className="mt-2 p-4 w-full border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
            required
          />
        </div>

        {/* Notes (Optional) */}
        <div>
          <label htmlFor="notes" className="block text-blue-700 font-medium text-lg">Additional Notes</label>
          <textarea
            id="notes"
            name="notes"
            value={form.notes}
            onChange={handleInputChange}
            placeholder="Any special instructions or requests?"
            className="mt-2 p-4 w-full border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
            rows={4}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-4 px-8 rounded-xl w-full text-xl font-bold transition-all hover:from-blue-600 hover:to-teal-600 hover:shadow-lg"
          >
            Submit Shipping Information
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShipmentForm;