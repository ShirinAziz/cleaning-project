import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-20 bg_gradient">
      <div className="container mx-auto px-20 lg:px-20 py-20 flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800">
        <div className="flex">
          <p className="font-bold text-center">
            Städa<span className="text-orange-400 text-xl">Fint</span>AB
          </p>
        </div>

        <div>
          <p>Contact</p>
          <div className="flex flex-col text-start mb:4 md:mb-0 mt-2">
            info@StädaFintAB.com
          </div>
        </div>
        <div>
          <p>Address</p>
          <p className="mt-2">Stockholm, Sweden</p>
        </div>
        <div className="flex flex-col">
          <p>Social Media</p>
          <div className="flex mt-4 gap-3">
            <Link
              to="/"
              className="bg-blue-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110"
            >
              <FaFacebook size={18} />
            </Link>

            <Link
              to="/"
              className="bg-pink-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110"
            >
              <FaInstagram size={18} />
            </Link>
            <Link
              to="/"
              className="bg-blue-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110"
            >
              <FaTwitter size={18} />
            </Link>
            <Link
              to="/"
              className="bg-red-600 p-1.5 rounded-sm text-white hover:scale-110"
            >
              <FaYoutube size={18} />
            </Link>
          </div>

          <button className="mt-6 border border-orange-400 text-lg text-orange-400">
            Sign up
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
