import Img1 from "./../assets/Dragon-Roll-12.jpg"
import Img2 from "./../assets/1-sushi.jpg"
import Img3 from "./../assets/removebg-preview.png"

export default function Footer (){
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-white px-6 py-16 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Everyone can become a chef on their own kitchen
          </h1>
          <p className="text-gray-600 mb-6">
            Learn easy, delicious, and healthy recipes you can cook at home with simple ingredients.
          </p>
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-300 hover:text-black transition">
            Learn More
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
          alt="Chef"
          className="rounded-3xl shadow-lg"
        />
      </section>

      {/* Instagram Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Check out foodieland on Instagram
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Follow us for daily food inspiration and tasty recipes
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i: number) => (
              <div key={i} className="bg-white rounded-2xl shadow overflow-hidden">
                <img
                  src= {Img1}
                  alt="Food"
                  className="w-full h-60 object-cover"
                />
                <div className="p-4 text-sm text-gray-500">❤️ 2.3k · 💬 120</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="bg-yellow-500 hover:bg-yellow-300 hover:text-black text-white px-6 py-3 rounded-full">
              Visit Instagram
            </button>
          </div>
        </div>
      </section>

      {/* Recipes Section */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Try this delicious recipe</h2>
        <p className="text-gray-600 mb-10">Make your day with these tasty meals</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i: number) => (
            <div key={i} className="bg-white rounded-2xl shadow hover:shadow-lg transition">
              <img
                src={Img2}
                alt="Recipe"
                className="rounded-t-2xl w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">Delicious Recipe {i}</h3>
                <p className="text-sm text-gray-500">30 Minutes · Easy</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-emerald-50 py-16">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Deliciousness to your inbox</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to get weekly recipes and cooking tips
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-full border focus:outline-none"
            />
            <button className="bg-yellow-500 hover:bg-yellow-300 hover:text-black text-white px-6 py-3 rounded-full">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Foodieland</h3>
            <p className="text-sm">
              Your daily source of delicious recipes and cooking inspiration.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>Home</li>
              <li>Recipes</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
           <div>
            <div className="flex gap-4 text-lg">
              <img src={Img3}/>
            </div>

          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-4 text-lg">
              <span>🌐</span>
              <span>📘</span>
              <span>📸</span>
              <span>🐦</span>
            </div>

          </div>
        </div>
        

        <div className="text-center text-sm text-gray-500 mt-10">
          © 2026 Foodieland. All rights reserved.
        </div>
      </footer>
    </div>
  );
};


