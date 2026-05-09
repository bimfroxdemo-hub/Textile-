function About() {
  return (
    <>
      {/* HERO SECTION */}
      

      {/* ABOUT CONTENT */}
      <section className="py-28 bg-[#f8f5f0]">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}
          <div className="relative">

            <img
              src="https://i.pinimg.com/1200x/b9/7d/b8/b97db84000122b1417f708df72cb2759.jpg"
              alt=""
              className="rounded-[40px] h-[750px] w-full object-cover"
            />

            <div className="absolute -bottom-10 -right-10 bg-white shadow-2xl rounded-[30px] p-8 w-[260px]">

              <h3 className="text-5xl font-bold">
                10+
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Years of experience in premium textile manufacturing.
              </p>

            </div>

          </div>

          {/* CONTENT */}
          <div>

            <p className="uppercase tracking-[5px] text-gray-500 text-sm mb-5">
              Who We Are
            </p>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Premium Textile Partner For Modern Fashion
            </h2>

            <p className="text-gray-600 text-lg leading-9 mt-10">
              We are a trusted textile fabric manufacturer and wholesaler
              delivering premium collections for fashion brands,
              garment manufacturers and boutiques.
            </p>

            <p className="text-gray-600 text-lg leading-9 mt-6">
              Our fabrics combine luxury textures, elegant finishes
              and modern trends crafted with precision and quality.
            </p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-6 mt-12">

              <div className="bg-white p-8 rounded-[30px] shadow-sm">

                <h3 className="text-2xl font-bold mb-4">
                  Premium Quality
                </h3>

                <p className="text-gray-600 leading-7">
                  Finest materials with elegant finishing and durability.
                </p>

              </div>

              <div className="bg-white p-8 rounded-[30px] shadow-sm">

                <h3 className="text-2xl font-bold mb-4">
                  Bulk Supply
                </h3>

                <p className="text-gray-600 leading-7">
                  Large-scale textile production for wholesale businesses.
                </p>

              </div>

            </div>

            <button className="mt-12 bg-black text-white px-10 py-4 rounded-full hover:bg-gray-800 duration-300">
              Explore Collection
            </button>

          </div>

        </div>

      </section>

      {/* STATS SECTION */}
      <section className="py-28 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8">

            <div className="text-center p-10 border rounded-[35px]">

              <h3 className="text-5xl font-bold">
                500+
              </h3>

              <p className="mt-4 text-gray-600 text-lg">
                Fabric Designs
              </p>

            </div>

            <div className="text-center p-10 border rounded-[35px]">

              <h3 className="text-5xl font-bold">
                10K+
              </h3>

              <p className="mt-4 text-gray-600 text-lg">
                Happy Clients
              </p>

            </div>

            <div className="text-center p-10 border rounded-[35px]">

              <h3 className="text-5xl font-bold">
                25+
              </h3>

              <p className="mt-4 text-gray-600 text-lg">
                Countries Supply
              </p>

            </div>

            <div className="text-center p-10 border rounded-[35px]">

              <h3 className="text-5xl font-bold">
                15+
              </h3>

              <p className="mt-4 text-gray-600 text-lg">
                Years Experience
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="relative py-32 overflow-hidden">

        <img
          src="https://i.pinimg.com/1200x/cd/2b/51/cd2b51a1be2244d8edeeb302025634a6.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">

          <p className="uppercase tracking-[6px] text-sm text-gray-300">
            Textile Manufacturer
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
            Delivering Luxury Fabrics Worldwide
          </h2>

          <p className="mt-8 text-lg text-gray-200 leading-8">
            Contact us today for premium textile collections
            and wholesale fabric inquiries.
          </p>

          <button className="mt-10 bg-white text-black px-10 py-4 rounded-full hover:bg-gray-200 duration-300">
            Contact Us
          </button>

        </div>

      </section>
    </>
  );
}

export default About;