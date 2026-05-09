function ProductCard({ image, title }) {
  return (
    <div className="border rounded-xl overflow-hidden hover:shadow-lg duration-300">
      
      <img
        src={image}
        alt={title}
        className="w-full h-72 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold">
          {title}
        </h2>

        <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg">
          View Details
        </button>
      </div>

    </div>
  );
}

export default ProductCard;