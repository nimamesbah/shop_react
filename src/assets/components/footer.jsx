export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-9">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Store Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">FakeStore</h3>
            <p className="mb-4">
              Your premium e-commerce destination for all shopping needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition">Facebook</a>
              <a href="#" className="hover:text-white transition">Twitter</a>
              <a href="#" className="hover:text-white transition">Instagram</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">All Products</a></li>
              <li><a href="#" className="hover:text-white transition">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition">Featured</a></li>
              <li><a href="#" className="hover:text-white transition">Deals</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Help</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition">Returns</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
            <p className="mb-4">
              Subscribe for store news and special offers
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l text-white w-full focus:outline-none"
                required
              />
              <button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} FakeStore. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#" className="text-sm hover:text-white transition">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-white transition">Terms of Service</a>
            <a href="#" className="text-sm hover:text-white transition">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}