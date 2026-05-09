import { useState } from "react";

function Collection() {
  const [active, setActive] = useState("All");

  const products = [
    {
      title: "Premium Cotton",
      category: "Cotton",
      image:
        "https://i.pinimg.com/1200x/94/1b/c5/941bc5e22d1bf4da5de2e3ac2b1d874e.jpg",
    },
    {
      title: "Luxury Silk",
      category: "Silk",
      image:
        "https://i.pinimg.com/1200x/cc/46/46/cc464692b46997f8c065208889b86609.jpg",
    },
    {
      title: "Designer Prints",
      category: "Print",
      image:
        "https://i.pinimg.com/1200x/0b/ff/c4/0bffc48269ee25f452d1c34e5ed69717.jpg",
    },
    {
      title: "Soft Linen",
      category: "Linen",
      image:
        "https://i.pinimg.com/1200x/0f/b2/25/0fb225a2a1e9d1bca8e1ec13a5cf8195.jpg",
    },
    {
      title: "Elegant Rayon",
      category: "Rayon",
      image:
        "https://i.pinimg.com/736x/51/6c/52/516c52597b09d621526bb58fd7568f6f.jpg",
    },
    {
      title: "Premium Silk",
      category: "Silk",
      image:
        "https://i.pinimg.com/736x/2d/1d/9f/2d1d9f69c7ca674befeee8fcf4ba12b9.jpg",
    },
    {
      title: "Modern Cotton",
      category: "Cotton",
      image:
        "https://i.pinimg.com/736x/93/dd/49/93dd49987b8afefd77151c143b3fd50d.jpg",
    },
    {
      title: "Luxury Print",
      category: "Print",
      image:
        "https://i.pinimg.com/736x/28/b2/ac/28b2ac6edd67d02059abd90456a02465.jpg",
    },
    {
      title: "Luxury Print",
      category: "Print",
      image:
        "https://i.pinimg.com/736x/28/b2/ac/28b2ac6edd67d02059abd90456a02465.jpg",
    },
    {
      title: "Luxury Print",
      category: "Print",
      image:
        "https://i.pinimg.com/736x/28/b2/ac/28b2ac6edd67d02059abd90456a02465.jpg",
    },
  ];

  const filters = ["All", "Cotton", "Silk", "Print", "Linen", "Rayon"];

  const filteredProducts =
    active === "All"
      ? products
      : products.filter((item) => item.category === active);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[70vh] overflow-hidden">

        <img
          src="https://i.pinimg.com/1200x/87/b9/a2/87b9a2434717943bb5d2eac2eee5509e.jpg"
          alt=""
          className="w-full h-full"
        />
      </section>

      {/* COLLECTION */}
      <section className="py-28 bg-[#f8f5f0] overflow-hidden">

        <div className="max-w-[1600px] mx-auto px-6">

          {/* TOP */}
          <div className="text-center mb-16">

            <p className="uppercase tracking-[6px] text-gray-500 text-sm mb-4">
              Featured Collection
            </p>

            <h2 className="text-5xl md:text-7xl font-bold">
              Premium Fabrics
            </h2>

          </div>

          {/* FILTER */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">

            {filters.map((item, index) => (
              <button
                key={index}
                onClick={() => setActive(item)}
                className={`px-8 py-3 rounded-full text-sm uppercase tracking-[3px] duration-300 border
                  
                  ${active === item
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-gray-300 hover:bg-black hover:text-white"
                  }
                `}
              >
                {item}
              </button>
            ))}

          </div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {filteredProducts.map((item, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-[35px]
                ${index % 5 === 0
                    ? "lg:col-span-2 lg:h-[700px]"
                    : "h-[450px]"
                  }`}
              >

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* CATEGORY */}
                <div className="absolute top-6 left-6">

                  <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-xs tracking-[3px] uppercase">
                    {item.category}
                  </span>

                </div>

                {/* CONTENT */}
                <div className="absolute bottom-8 left-8 right-8 text-white">

                  <h3 className="text-3xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-200 leading-7">
                    Elegant premium textile collection crafted
                    for modern fashion and garments.
                  </p>

                  <button className="mt-7 bg-white text-black px-7 py-3 rounded-full opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 duration-500">
                    View Collection
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">

        <img
          src="https://i.pinimg.com/1200x/c7/42/cb/c742cb6c8df3a3e5a476abf13d631025.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">

          <p className="uppercase tracking-[6px] text-sm text-gray-300">
            Wholesale Textile
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
            Looking For Premium Fabric Supplier?
          </h2>

          <p className="mt-8 text-lg text-gray-200 leading-8">
            Contact us today for luxury textile collections and bulk fabric orders.
          </p>

          <button className="mt-10 bg-white text-black px-10 py-4 rounded-full hover:bg-gray-200 duration-300">
            Contact Us
          </button>

        </div>

      </section>
    </>
  );
}

export default Collection;