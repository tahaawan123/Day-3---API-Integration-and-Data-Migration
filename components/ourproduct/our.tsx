



import Image from "next/image";
import Link from "next/link";


export default function OurProduct() {
  const products = [
    { Image: "/chair1.svg", icon: "/newicon.svg", title: "Library Stool Chair", price: "$20", cart: "/cart1.svg" },
    { Image: "/chair2.svg", icon: "/sale.svg", title: "Library Stool Chair", price: "$20", oldPrice: "$39", cart: "/cartall.svg" },
    { Image: "/chair3.svg", title: "Library Stool Chair", price: "$20", cart: "/cartall.svg" },
    { Image: "/chair4.svg", title: "Library Stool Chair", price: "$20", cart: "/cartall.svg" },
    { Image: "/chair5.svg", icon: "/newicon.svg", title: "Library Stool Chair", price: "$20", cart: "/cart1.svg" },
    { Image: "/chair6.svg", icon: "/sale.svg", title: "Library Stool Chair", price: "$20", oldPrice: "$39", cart: "/cartall.svg" },
    { Image: "/chair7.svg", title: "Library Stool Chair", price: "$20", cart: "/cartall.svg" },
    { Image: "/chair1.svg", title: "Library Stool Chair", price: "$20", cart: "/cartall.svg" },
  ];

  return (
    <div className="px-6 py-12">
      {/* section Header  */}
      <div className="text-center">
        <h1 className="text-2xl lg:text-3xl font-bold text-[#272343]">Our Products</h1>
      </div>
      

      {/* Products Grid */}
      <div className="max-w-screen-xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105"
          >
            {/* Badge/Icon */}
            <Link href="/product">
            {product.icon && (
              <Image src={product.icon} width={32} height={32} alt="icon" className="absolute top-2 left-2 w-8 h-8" />
            )}
            {/* Product Image */}
            <Image src={product.Image} alt="chair" width={600} height={192} className="w-full h-48 object-cover" />
            {/* Product Details */}
            <div className="p-4 flex justify-between items-center">
              <div>
                <p className="font-bold text-lg text-[#007580]">{product.title}</p>
                <div className="flex items-center">
                  <p className="text-xl text-[#272343]">{product.price}</p>
                  {product.oldPrice && (
                    <p className="ml-2 text-sm text-[#9A9CAA] line-through">{product.oldPrice}</p>
                  )}
                </div>
              </div>
              <Image src={product.cart} alt="cart" width={32} height={32} className="w-8 h-8" />
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
