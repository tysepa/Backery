// src/components/Explore.jsx
const categories = ["Cake", "Muffins", "Croissant", "Bread", "Tart", "Favorite"];

export default function Explore() {
  return (
    <section className="py-12">
      <h2 className="text-center font-playfair text-3xl mb-6">
        Explore More
      </h2>

      <div className="flex justify-center gap-6 text-sm">
        {categories.map((c) => (
          <span
            key={c}
            className="cursor-pointer hover:text-orange-500 border-b border-transparent hover:border-orange-500"
          >
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}
