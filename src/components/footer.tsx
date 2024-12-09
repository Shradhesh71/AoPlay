import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaSnapchatGhost,
  FaTwitterSquare,
} from "react-icons/fa";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        {/* Social Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6 mb-6">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">
              Get connected with us on social networks:
            </p>
          </div>
          {/* <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-transform transform hover:scale-110"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-transform transform hover:scale-110"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-transform transform hover:scale-110"
            >
              <i className="fab fa-google"></i>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-transform transform hover:scale-110"
            >
              <i className="fab fa-instagram "></i>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-transform transform hover:scale-110"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-transform transform hover:scale-110"
            >
              <i className="fab fa-github"></i>
            </a>
          </div> */}
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a href="https://x.com/_aoPlay_" target="_blank" rel="noreferrer">
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaPinterest size={24} />
            </a>
            <a href="https://www.snapchat.com" target="_blank" rel="noreferrer">
              <FaSnapchatGhost size={24} />
            </a>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h6 className="text-lg font-bold mb-4 text-white">AO Play</h6>
            <p className="text-sm">
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          {/* Products */}
          <div>
            <h6 className="text-lg font-bold mb-4 text-white">Products</h6>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Rankings
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Games
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Alerts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Dev Games
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h6 className="text-lg font-bold mb-4 text-white">Company</h6>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h6 className="text-lg font-bold mb-4 text-white">Contact</h6>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <i className="fas fa-home"></i>
                bengaluru, KN 10012, IN
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope"></i>
                aoplay@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-phone"></i>
                +01 23456788
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-print"></i>
                +01 23f56789
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 text-gray-400 text-center py-4 mt-6">
        <p>
          © 2024 Copyright:{" "}
          <a
            href="https://ao-play.vercel.app/"
            className="text-white font-bold hover:underline"
          >
            ao-play.vercel.app
          </a>
        </p>
      </div>
    </footer>
  );
};
