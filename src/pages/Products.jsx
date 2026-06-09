import { FaWhatsapp, FaStar } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi";

export default function ProductPage() {
  const categories = [
    {
      title: "Designer Sarees",
      image: "https://i.pinimg.com/1200x/cd/a4/f0/cda4f03ca3634bd2d155aa32520e8e4b.jpg",
      price: "₹2,500 - ₹15,000",
      stock: "In Stock",
    },
    {
      title: "Traditional Kurtis",
      image: "https://i.pinimg.com/736x/50/16/4b/50164b3d9719fe731c4535b8daf81c78.jpg",
      price: "₹800 - ₹3,500",
      stock: "In Stock",
    },
    {
      title: "Luxury Lehengas",
      image: "https://i.pinimg.com/1200x/69/6c/a6/696ca602f0ec60775d03438f01d63709.jpg",
      price: "₹5,000 - ₹25,000",
      stock: "Limited",
    },
    {
      title: "Premium Blouses",
      image: "https://i.pinimg.com/736x/b0/7e/e2/b07ee223bbe3ca0d91f2eff4b96af76e.jpg",
      price: "₹800 - ₹3,000",
      stock: "In Stock",
    },
     {
      title: "Premium Blouses",
      image: "https://i.pinimg.com/736x/b0/7e/e2/b07ee223bbe3ca0d91f2eff4b96af76e.jpg",
      price: "₹800 - ₹3,000",
      stock: "In Stock",
    },
     {
      title: "Luxury Lehengas",
      image: "https://i.pinimg.com/1200x/69/6c/a6/696ca602f0ec60775d03438f01d63709.jpg",
      price: "₹5,000 - ₹25,000",
      stock: "Limited",
    },
   {
      title: "Designer Sarees",
      image: "https://i.pinimg.com/1200x/cd/a4/f0/cda4f03ca3634bd2d155aa32520e8e4b.jpg",
      price: "₹2,500 - ₹15,000",
      stock: "In Stock",
    },
  ];

  return (
    <div className="bg-[#f5f3ea]">

      {/* HERO */}
      <section
        className="relative h-[450px] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/b3/fc/79/b3fc796ed4b9c7b837baa6f0305c8c83.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-white px-5">
          <h1 className="text-6xl font-bold mb-5">
            Our Products
          </h1>

          <p className="max-w-3xl mx-auto text-lg">
            Discover our extensive collection of premium
            women's apparel crafted with elegance.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="flex items-center gap-2">
              <FaStar />
              Premium Quality
            </div>

            <div className="flex items-center gap-2">
              <HiShoppingBag />
              Bulk Orders
            </div>

            <div className="flex items-center gap-2">
              <FaWhatsapp />
              WhatsApp Support
            </div>
          </div>
        </div>
      </section>

      {/* TITLE */}
      <section className="py-20 text-center">
        <h2 className="text-5xl font-bold text-slate-800">
          Product Categories
        </h2>

        <p className="text-gray-600 mt-4">
          Find the perfect collection for every occasion.
        </p>
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">

          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt=""
                  className="h-72 w-full object-cover"
                />

                <span className="absolute top-3 right-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                  {item.stock}
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-2xl mb-2">
                  {item.title}
                </h3>

                <p className="text-green-700 font-semibold">
                  {item.price}
                </p>

                <button className="mt-5 w-full bg-[#9c4150] text-white py-3 rounded-xl hover:bg-[#7f3340]">
                  View Collection
                </button>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#594d4f] py-24 text-center text-white">
        <h2 className="text-5xl font-bold mb-5">
          Found Something You Love?
        </h2>

        <p className="mb-8 text-lg">
          Connect with us on WhatsApp for instant assistance.
        </p>

        <div className="flex justify-center gap-5">
          <button className="bg-green-500 px-8 py-4 rounded-xl font-semibold">
            Shop on WhatsApp
          </button>

          <button className="bg-black px-8 py-4 rounded-xl font-semibold">
            Bulk Orders
          </button>
        </div>
      </section>

    </div>
  );
}