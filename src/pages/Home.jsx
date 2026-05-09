import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen overflow-hidden">

        <img
          src="https://i.pinimg.com/1200x/ac/5c/0a/ac5c0a0769ac55e6ef0e45e56e06ded2.jpg"
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

          <p className="text-white tracking-[7px] uppercase text-sm mb-5">
            Luxury Textile Studio
          </p>

          <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight max-w-5xl">
            Premium Fabric Collection
          </h1>

          <p className="text-gray-200 mt-8 max-w-2xl text-lg leading-8">
            Discover elegant textile fabrics crafted for fashion,
            garments and designer collections with premium quality.
          </p>

          <div className="flex gap-4 mt-10 flex-wrap justify-center">

            <button className="bg-white text-black px-8 py-4 rounded-full hover:bg-gray-200 duration-300">
              Explore Collection
            </button>

            <button className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black duration-300">
              Contact Us
            </button>

          </div>

        </div>

      </section>

      {/* CATEGORY SECTION */}
     <section className="py-28 bg-white overflow-hidden">

  <div className="max-w-[1600px] mx-auto px-6">

    {/* HEADING */}
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">

      <div>

        <p className="uppercase tracking-[6px] text-gray-500 text-sm mb-4">
          Our Categories
        </p>

        <h2 className="text-5xl md:text-6xl font-bold leading-tight max-w-2xl">
          Discover Luxury Fabric Collections
        </h2>

      </div>

      <p className="max-w-lg text-gray-600 leading-8 text-lg">
        Premium textile collections crafted with elegance,
        modern aesthetics and high-quality fabric finishing.
      </p>

    </div>

    {/* MAIN LAYOUT */}
    <div className="grid lg:grid-cols-2 gap-10">

      {/* LEFT BIG CARD */}
      <div className="relative h-[850px] rounded-[40px] overflow-hidden group">

        <img
          src="https://i.pinimg.com/1200x/75/4c/ee/754cee43c7f7f6e2a644f06ddd8d182d.jpg"
          alt=""
          className="w-full h-full object-cover group-hover:scale-105 duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-12 left-10 text-white">

          <p className="uppercase tracking-[5px] text-sm text-gray-300 mb-4">
            Premium Series
          </p>

          <h3 className="text-5xl font-bold">
            Cotton Fabric
          </h3>

          <p className="mt-5 max-w-md text-lg leading-8 text-gray-200">
            Soft luxury textures designed for elegant garments
            and premium fashion collections.
          </p>

          <button className="mt-8 bg-white text-black px-8 py-4 rounded-full hover:bg-gray-200 duration-300">
            Explore More
          </button>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="grid gap-10">

        {/* TOP CARD */}
        <div className="relative h-[410px] rounded-[40px] overflow-hidden group">

          <img
            src="https://i.pinimg.com/736x/b3/a2/1e/b3a21e0aa22c7b7af8652e1ce18909b3.jpg"
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

          <div className="absolute left-10 bottom-10 text-white">

            <p className="uppercase tracking-[4px] text-sm text-gray-300 mb-3">
              Designer Collection
            </p>

            <h3 className="text-4xl font-bold">
              Silk Fabric
            </h3>

          </div>

        </div>

        {/* BOTTOM CARD */}
        <div className="relative h-[410px] rounded-[40px] overflow-hidden group">

          <img
            src="https://i.pinimg.com/1200x/ed/fc/20/edfc202f7216d3a17c1d146201824d73.jpg"
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

          <div className="absolute left-10 bottom-10 text-white">

            <p className="uppercase tracking-[4px] text-sm text-gray-300 mb-3">
              Trend Collection
            </p>

            <h3 className="text-4xl font-bold">
              Printed Fabric
            </h3>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>


      {/* ABOUT SECTION */}
      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div>

            <img
              src="https://i.pinimg.com/1200x/b9/7d/b8/b97db84000122b1417f708df72cb2759.jpg"
              alt=""
              className="rounded-[35px] h-[700px] w-full object-cover"
            />

          </div>

          {/* CONTENT */}
          <div>

            <p className="uppercase tracking-[5px] text-gray-500 text-sm">
              About Us
            </p>

            <h2 className="text-5xl font-bold mt-5 leading-tight">
              Crafted With Luxury & Quality
            </h2>

            <p className="text-gray-600 text-lg leading-9 mt-8">
              We are a trusted textile fabric manufacturer delivering
              premium collections for fashion brands, boutiques and wholesalers.
              Our fabrics combine elegance, durability and modern trends.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-[#f8f5f0] p-8 rounded-3xl">
                <h3 className="text-4xl font-bold">
                  10+
                </h3>

                <p className="text-gray-600 mt-2">
                  Years Experience
                </p>
              </div>

              <div className="bg-[#f8f5f0] p-8 rounded-3xl">
                <h3 className="text-4xl font-bold">
                  500+
                </h3>

                <p className="text-gray-600 mt-2">
                  Fabric Designs
                </p>
              </div>

            </div>

            <button className="mt-10 bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 duration-300">
              Learn More
            </button>

          </div>

        </div>

      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-32 bg-[#f6f1ea] overflow-hidden">

  <div className="max-w-[1600px] mx-auto px-6">

    {/* HEADING */}
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">

      <div>

        <p className="uppercase tracking-[6px] text-gray-500 text-sm mb-4">
          Featured Collection
        </p>

        <h2 className="text-5xl md:text-7xl font-bold leading-tight">
          Luxury Fabric <br /> Showcase
        </h2>

      </div>

      <p className="max-w-xl text-lg text-gray-600 leading-8">
        Explore our exclusive textile collection crafted
        for premium fashion brands and modern garment production.
      </p>

    </div>

    {/* PRODUCT GRID */}
    <div className="grid lg:grid-cols-3 gap-10">

      {/* CARD 1 */}
      <div className="group relative overflow-hidden rounded-[40px] h-[750px] bg-black">

        {/* IMAGE */}
        <img
          src="https://i.pinimg.com/1200x/94/1b/c5/941bc5e22d1bf4da5de2e3ac2b1d874e.jpg"
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 duration-700"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        {/* TOP TAG */}
        <div className="absolute top-8 left-8 z-20">

          <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-sm tracking-[3px] uppercase">
            Premium
          </span>

        </div>

        {/* CONTENT */}
        <div className="absolute bottom-10 left-8 right-8 text-white z-20">

          <p className="uppercase tracking-[4px] text-sm text-gray-300 mb-3">
            Soft Luxury Series
          </p>

          <h3 className="text-4xl font-bold">
            Premium Cotton
          </h3>

          <p className="mt-5 text-gray-200 leading-8 text-lg">
            Elegant cotton fabrics designed with soft textures
            and premium finishing.
          </p>

          {/* BUTTON */}
          <button className="mt-8 bg-white text-black px-8 py-4 rounded-full hover:bg-gray-200 duration-300 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
            Explore Product
          </button>

        </div>

      </div>

      {/* CARD 2 */}
      <div className="group relative overflow-hidden rounded-[40px] h-[750px] bg-black mt-12">

        <img
          src="https://i.pinimg.com/1200x/cc/46/46/cc464692b46997f8c065208889b86609.jpg"
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute top-8 left-8 z-20">

          <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-sm tracking-[3px] uppercase">
            Designer
          </span>

        </div>

        <div className="absolute bottom-10 left-8 right-8 text-white z-20">

          <p className="uppercase tracking-[4px] text-sm text-gray-300 mb-3">
            Elegant Collection
          </p>

          <h3 className="text-4xl font-bold">
            Luxury Silk
          </h3>

          <p className="mt-5 text-gray-200 leading-8 text-lg">
            Premium silk fabrics inspired by luxury fashion
            and modern textile aesthetics.
          </p>

          <button className="mt-8 bg-white text-black px-8 py-4 rounded-full hover:bg-gray-200 duration-300 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
            Explore Product
          </button>

        </div>

      </div>

      {/* CARD 3 */}
      <div className="group relative overflow-hidden rounded-[40px] h-[750px] bg-black">

        <img
          src="https://i.pinimg.com/1200x/0b/ff/c4/0bffc48269ee25f452d1c34e5ed69717.jpg"
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute top-8 left-8 z-20">

          <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-sm tracking-[3px] uppercase">
            Trending
          </span>

        </div>

        <div className="absolute bottom-10 left-8 right-8 text-white z-20">

          <p className="uppercase tracking-[4px] text-sm text-gray-300 mb-3">
            Fashion Prints
          </p>

          <h3 className="text-4xl font-bold">
            Designer Prints
          </h3>

          <p className="mt-5 text-gray-200 leading-8 text-lg">
            Modern printed fabrics crafted for luxury garments
            and stylish collections.
          </p>

          <button className="mt-8 bg-white text-black px-8 py-4 rounded-full hover:bg-gray-200 duration-300 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
            Explore Product
          </button>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* WHY CHOOSE US */}
      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[5px] text-gray-500 text-sm">
              Why Choose Us
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Trusted Textile Partner
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white border p-10 rounded-[30px] hover:shadow-2xl duration-300">

              <h3 className="text-2xl font-bold mb-5">
                Premium Quality
              </h3>

              <p className="text-gray-600 leading-8">
                Finest fabrics crafted with elegant finishing and durability.
              </p>

            </div>

            <div className="bg-white border p-10 rounded-[30px] hover:shadow-2xl duration-300">

              <h3 className="text-2xl font-bold mb-5">
                Bulk Supply
              </h3>

              <p className="text-gray-600 leading-8">
                Large-scale manufacturing for wholesalers and brands.
              </p>

            </div>

            <div className="bg-white border p-10 rounded-[30px] hover:shadow-2xl duration-300">

              <h3 className="text-2xl font-bold mb-5">
                Modern Designs
              </h3>

              <p className="text-gray-600 leading-8">
                Trend-focused collections inspired by luxury fashion.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* GALLERY SECTION */}
   <section className="py-32 bg-white overflow-hidden">

  <div className="max-w-[1600px] mx-auto px-6">

    {/* HEADING */}
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">

      <div>

        <p className="uppercase tracking-[6px] text-gray-500 text-sm mb-4">
          Gallery
        </p>

        <h2 className="text-5xl md:text-7xl font-bold leading-tight">
          Textile Showcase
        </h2>

      </div>

      <p className="max-w-xl text-lg text-gray-600 leading-8">
        Explore our luxury textile collections inspired by
        modern fashion aesthetics and premium craftsmanship.
      </p>

    </div>

    {/* MASONRY STYLE GRID */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">

      {/* BIG IMAGE */}
      <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-[40px] group">

        <img
          src="https://i.pinimg.com/736x/2e/f2/dd/2ef2ddbef17736e3bab83cafc35eaf13.jpg"
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute bottom-10 left-8 text-white">

          <p className="uppercase tracking-[4px] text-sm text-gray-300 mb-3">
            Luxury Collection
          </p>

          <h3 className="text-4xl font-bold">
            Premium Fashion Fabric
          </h3>

        </div>

      </div>

      {/* IMAGE 2 */}
      <div className="relative overflow-hidden rounded-[35px] group">

        <img
          src="https://i.pinimg.com/1200x/bd/7f/db/bd7fdbc3ece76f7fdce6039219e19ef2.jpg"
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 duration-700"
        />

        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 duration-500" />

      </div>

      {/* IMAGE 3 */}
      <div className="relative overflow-hidden rounded-[35px] group">

        <img
          src="https://i.pinimg.com/736x/ee/78/34/ee7834097a339411660392838e77b4e1.jpg"
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 duration-700"
        />

        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 duration-500" />

      </div>

      {/* WIDE IMAGE */}
      <div className="md:col-span-2 relative overflow-hidden rounded-[35px] group">

        <img
          src="https://i.pinimg.com/736x/ae/b8/a4/aeb8a4b3a5b34590afbc9d9281dfee2e.jpg"
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

        <div className="absolute left-8 bottom-8 text-white">

          <h3 className="text-3xl font-bold">
            Designer Textile Art
          </h3>

        </div>

      </div>

      {/* IMAGE 5 */}
      <div className="relative overflow-hidden rounded-[35px] group">

        <img
          src="https://i.pinimg.com/736x/84/d8/f0/84d8f06893f120b8d035761c4de0f985.jpg"
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 duration-700"
        />

        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 duration-500" />

      </div>

      {/* IMAGE 6 */}
      <div className="relative overflow-hidden rounded-[35px] group">

        <img
          src="https://i.pinimg.com/736x/ee/76/45/ee7645a81782dd251072715fa87d5470.jpg"
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 duration-700"
        />

        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 duration-500" />

      </div>

       <div className="relative overflow-hidden rounded-[35px] group">

        <img
          src="https://i.pinimg.com/1200x/55/11/a8/5511a80dae3c651d383a87d38b2bed3b.jpg"
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 duration-700"
        />

        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 duration-500" />

      </div>

       <div className="relative overflow-hidden rounded-[35px] group">

        <img
          src="https://i.pinimg.com/1200x/78/2b/dd/782bdd30d6c0e01ca561273a088693a7.jpg"
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 duration-700"
        />

        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 duration-500" />

      </div>

    </div>

  </div>

</section>

      {/* CTA SECTION */}
      <section className="relative py-32 overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2000&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">

          <p className="uppercase tracking-[5px] text-sm">
            Wholesale Inquiry
          </p>

          <h2 className="text-5xl font-bold mt-5 leading-tight">
            Looking For Premium Fabric Supplier?
          </h2>

          <p className="mt-6 text-lg text-gray-200 leading-8">
            Contact us today for bulk textile orders and premium collections.
          </p>

          <button className="mt-10 bg-white text-black px-10 py-4 rounded-full hover:bg-gray-200 duration-300">
            Contact Us
          </button>

        </div>

      </section>
    </>
  );
}

export default Home;