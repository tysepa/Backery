// src/components/Hero.jsx
import Img1 from "./../assets/removebg-preview.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="min-h-screen bg-cover bg-center flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 text-white"
      style={{ backgroundImage: "url('/img26.png')" }}
    >
      {/* LEFT CONTENT */}
      <div className="max-w-lg text-center lg:text-left">
        <p className="text-sm mb-2">Delicious Cafe</p>

        <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Sweet Treats,<br />Perfect Eats
        </h1>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="bg-yellow-500 hover:bg-orange-600 px-6 py-2 rounded text-sm">
            Shop Now
          </button>

          <button className="border border-white px-6 py-2 rounded text-sm">
            Learn More
          </button>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto mt-12 lg:mt-0 lg:ml-12 px-6"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.img
          src={Img1}
          alt="Restaurant Site"
          className="w-64 sm:w-80 md:w-[420px] lg:w-[490px] mx-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        />

        <motion.div
          className="w-24 h-px restaurant-gold-gradient mx-auto mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />

        <motion.p
          className="restaurant-subtitle mb-12 max-w-2xl mx-auto text-base sm:text-lg md:text-xl"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          An Exquisite Culinary Saga - African and Asian Tapas and Cocktails
        </motion.p>
      </motion.div>
    </section>
  );
}
