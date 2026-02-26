// src/components/Hero.jsx
import Img1 from './../assets/removebg-preview.png'
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="h-[100vh] bg-cover bg-center flex items-center px-12 text-white"
      style={{ backgroundImage: "url('/img26.png')" }}
    >
    <div className="max-w-lg gap-8">
      <p className="text-sm mb-2">Delicious Cafe</p>
      <h1 className="font-playfair text-5xl font-bold leading-tight">
        Sweet Treats,<br />Perfect Eats
      </h1>

      <div className="mt-6 flex gap-4">
        <button className="bg-yellow-500 hover:bg-orange-600 px-6 py-2 rounded text-sm">
          Shop Now
        </button>
        <button className="border border-white px-6 py-2 rounded text-sm">
          Learn More
        </button>
      </div>
    </div>
    <motion.div className="relative z-10 text-center max-w-4xl mx-auto px-6" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
        <motion.img src={Img1} alt="Restaurant Site Image" style={{ width: '490px', margin: '2rem auto 2rem auto' }} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7 }} />

        <motion.div className="w-24 h-px restaurant-gold-gradient mx-auto mb-6" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5 }} />

        <motion.p className="restaurant-subtitle mb-12 max-w-2xl mx-auto text-xl" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
          An Equisite Culinary Saga - African and Asian Tapas and cocktails
        </motion.p>
      </motion.div>
    </section>
  );
}
