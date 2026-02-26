// src/components/Products.jsx
import Img from '../assets/img23.png'
const products = Array(6).fill({
  name: "Whole Grain Bread",
  price: "$40",
  image: Img,
});

export default function Products() {
  return (
    <section className="py-16 px-8">
      <h2 className="text-center font-playfair text-3xl mb-10">
        Top Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((p, i) => (
          <div key={i} className="bg-black text-white rounded-lg overflow-hidden">
            <img src={p.image} alt="" className="h-48 w-full object-cover" />
            <div className="p-4 flex justify-between items-center">
              <div>
                <p className="text-sm">{p.price}</p>
                <p className="text-xs text-gray-400">{p.name}</p>
              </div>
              <button className="bg-orange-500 text-xs px-3 py-1 rounded">
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
