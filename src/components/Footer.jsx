import React from 'react'

function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-10 px-5 lg:px-0">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold text-green-400 mb-2">
              🌿 Plantora
            </h2>
            <p className="text-sm text-gray-300">
              Bringing nature closer to your life. Discover, nurture, and love
              your green friends.
            </p>
          </div>
  
          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-green-300">Product</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#">New Arrivals</a>
              </li>
              <li>
                <a href="#">Best Sellers</a>
              </li>
              <li>
                <a href="#">Plant Care</a>
              </li>
              <li>
                <a href="#">Gift Plants</a>
              </li>
            </ul>
          </div>
  
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-green-300">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
            </ul>
          </div>
  
          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-green-300">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Return Policy</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Plantora. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-green-400">
              Facebook
            </a>
            <a href="#" className="hover:text-green-400">
              Instagram
            </a>
            <a href="#" className="hover:text-green-400">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    );
  }

export default Footer;
