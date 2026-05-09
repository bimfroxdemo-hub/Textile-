

function ProductDetails() {
  return (
    <>
     

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        <img
          src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518"
          alt=""
          className="w-full h-[500px] object-cover rounded-xl"
        />

        <div>
          <h1 className="text-4xl font-bold mb-6">
            Cotton Fabric
          </h1>

          <p className="text-gray-600 leading-8">
            Premium quality cotton fabric suitable for garments and fashion wear.
          </p>

          <button className="mt-8 bg-black text-white px-6 py-3 rounded-lg">
            Inquiry Now
          </button>
        </div>

      </section>

   
    </>
  );
}

export default ProductDetails;