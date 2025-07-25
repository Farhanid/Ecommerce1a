import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion";


const Footer = () => {
  const footerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const footerItem = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
  return (
 
   <footer className="bg-gray-900 w-full text-white py-10 px-8 md:px-16 lg:px-24">
  <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
    {/* Brand Section */}
    <div>
      <h3 className="text-2xl font-bold text-red-500">e-Shop</h3>
      <p className="mt-4 text-gray-300 leading-relaxed footer-par">
        Your one-stop for all your needs. Shop with us and experience the best online shopping experience.
      </p>
    </div>

    {/* Quick Links */}
    <div className="flex flex-col md:items-center">
      <h4 className="text-xl font-semibold text-white">Quick Links</h4>
      <ul className="mt-4 space-y-3 footer-link">
        <li>
          <NavLink to="/" className="hover:text-red-400 transition-colors duration-300">Home</NavLink>
        </li>
        <li>
          <NavLink to="/shop" className="hover:text-red-400 transition-colors duration-300">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="hover:text-red-400 transition-colors duration-300">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="hover:text-red-400 transition-colors duration-300">About</NavLink>
        </li>
      </ul>
    </div>

    {/* Social + Subscribe */}
    <div>
      <h4 className="text-xl font-semibold">Follow us</h4>
      <div className="flex space-x-5 mt-4 text-2xl">
        <a href="#" className="hover:text-blue-500 transition duration-300"><FaFacebook /></a>
        <a href="#" className="hover:text-sky-400 transition duration-300"><FaTwitter /></a>
        <a href="#" className="hover:text-gray-300 transition duration-300"><FaGithub /></a>
        <a href="#" className="hover:text-blue-300 transition duration-300"><FaLinkedin /></a>
      </div>

      <form className="flex mt-6">
        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button
          className="bg-red-600 hover:bg-red-700 transition duration-300 text-white px-4 py-2 rounded-r-lg border border-red-600"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="mt-10 w-full border-t border-gray-700 pt-6">
    <div className="container max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
      <p>&copy; 2025 e-Shop. All rights reserved.</p>
      <div className="flex space-x-6 mt-4 md:mt-0">
        <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors duration-300">Terms & Conditions</a>
      </div>
    </div>
  </div>
</footer>










   
  );
};



export default Footer