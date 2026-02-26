// src/components/Navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center text-white">
      
      {/* LOGO */}
      <h1 className="font-playfair text-2xl font-bold">BAKERY</h1>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex gap-8 text-lg">
        <li className="hover:text-orange-300 cursor-pointer">Home</li>
        <li className="hover:text-orange-300 cursor-pointer">Blog</li>
        <li className="hover:text-orange-300 cursor-pointer">Contact us</li>
        <li className="hover:text-orange-300 cursor-pointer">Services</li>
      </ul>

      {/* MOBILE HAMBURGER */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SIDE NAVBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-yellow-500 text-white hover:text-black transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="font-bold text-lg">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <ul className="flex flex-col gap-6 p-6 text-lg">
          <li className="hover:text-orange-500 cursor-pointer">Home</li>
          <li className="hover:text-orange-500 cursor-pointer">Blog</li>
          <li className="hover:text-orange-500 cursor-pointer">Contact us</li>
          <li className="hover:text-orange-500 cursor-pointer">Services</li>
        </ul>
      </div>
    </nav>
  );
}

