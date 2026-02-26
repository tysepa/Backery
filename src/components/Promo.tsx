// src/components/Promo.jsx
export default function Promo() {
  return (
    <section
      className="my-16 bg-cover bg-center py-16 px-8 text-center"
      style={{ backgroundImage: "url('/promo-bread.jpg')" }}
    >
      <h2 className="text-3xl font-playfair text-orange-600 mb-2">
        20% off Your First Order
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-6 text-sm">
        Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum.
      </p>
      <button className="bg-orange-500 text-white px-6 py-2 rounded">
        Learn More
      </button>
    </section>
  );
}
