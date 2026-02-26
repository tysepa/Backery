// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="absolute top-10 left-0 w-full z-10 px-8 py-6 flex justify-between items-center text-white">
      <h1 className="font-playfair text-xl font-bold">BAKERY</h1>
      <ul className="flex gap-6 text-sm">
        <li className="hover:text-orange-300 cursor-pointer text-xl">Home</li>
        <li className="hover:text-orange-300 cursor-pointer text-xl">Blog</li>
        <li className="hover:text-orange-300 cursor-pointer text-xl">Contact us</li>
        <li className="hover:text-orange-300 cursor-pointer text-xl">Services</li>
      </ul>
    </nav>
  );
}
