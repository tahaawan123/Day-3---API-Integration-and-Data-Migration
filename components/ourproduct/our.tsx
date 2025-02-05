import Image from "next/image";
import Link from "next/link";

export default function OurProduct() {
  const products = [
    { Image: "/chair1.svg", icon: "/new.svg", title: "Library Stool Chair", price: "$20", cart: "/cart1.svg" },
    { Image: "/chair2.svg", icon: "/sale.svg", title: "Library Stool Chair", price: "$20", oldPrice: "$39", cart: "/cartall.svg" },
    { Image: "/chair3.svg", title: "Library Stool Chair", price: "$20", cart: "/cartall.svg" },
    { Image: "/chair4.svg", title: "Library Stool Chair", price: "$20", cart: "/cartall.svg" },
    { Image: "/chair5.svg", icon: "/newicon.svg", title: "Library Stool Chair", price: "$20", cart: "/cart1.svg" },
    { Image: "/chair6.svg", icon: "/sale.svg", title: "Library Stool Chair", price: "$20", oldPrice: "$39", cart: "/cartall.svg" },
    { Image: "/chair7.svg", title: "Library Stool Chair", price: "$20", cart: "/cartall.svg" },
    
  ];

  return (
    <div className="px-6 py-12 bg-gray-50">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#272343] mb-4">Our Products</h1>
        <p className="text-lg text-[#6E6E6E]">Explore our wide range of high-quality products.</p>
      </div>

      {/* Products Grid */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative bg-white shadow-lg rounded-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-xl"
          >
            {/* Badge/Icon */}
            {product.icon && (
              <div className="absolute top-4 left-4 z-10">
                <Image src={product.icon} width={40} height={40} alt="icon" className="w-10 h-10" />
              </div>
            )}

            {/* Product Image */}
            <Link href="/product">
              <div className="relative h-56 w-full">
                <Image
                  src={product.Image}
                  alt="chair"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>

            {/* Product Details */}
            <div className="p-4">
              <Link href="/product">
                <p className="text-xl font-semibold text-[#272343] hover:text-[#007580] transition-colors">
                  {product.title}
                </p>
              </Link>
              <div className="flex items-center mt-2">
                <p className="text-lg font-bold text-[#007580]">{product.price}</p>
                {product.oldPrice && (
                  <p className="ml-2 text-sm text-[#9A9CAA] line-through">{product.oldPrice}</p>
                )}
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="absolute bottom-4 right-4">
              <button className="p-2 bg-[#007580] rounded-full hover:bg-[#005f6b] transition-colors">
                <Image src={product.cart} alt="cart" width={24} height={24} className="w-6 h-6" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}