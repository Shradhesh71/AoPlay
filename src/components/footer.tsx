// export const Footer: React.FC = () => {
//     return (
//         <div>
//       <footer className="text-gray-700 body-font bg-black">
//         <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
//           <a
//             href="/"
//             className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
//           >
            
//             <span className="ml-3 text-xl text-white">AO Play</span>
//             </a>
//             <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
//               © 2024 AO Play. All rights reserved.
//             </p>
//             <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
//               <a
//                 className="text-red-500"
//                 href="https://github.com/Shradhesh71"
//                 rel="noopener noreferrer"
//                 target="_blank"
//               >
//                 Github
//               </a>
//               <a
//                 className="ml-3 text-blue-500"
//                 href="https://www.linkedin.com/in/shradesh-jodawat-147730265/"
//                 rel="noopener noreferrer"
//                 target="_blank"
//               >
//                 Linkedin
//               </a>
//               <a
//                 className="ml-3 text-white-200"
//                 href="https://medium.com/@"
//                 rel="noopener noreferrer"
//                 target="_blank"
//               >
//                 WrapCast
//               </a>
//               <a
//                 className="ml-3 text-indigo-500"
//                 href="https://x.com/Shradeshjain835/"
//                 rel="noopener noreferrer"
//                 target="_blank"
//               >
//                 Twitter
//               </a>
//             </span>
//           </div>
//         </footer>
//       </div>
//     )
// }

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
          <div className="flex gap-4">
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
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  Angular
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  React
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  Vue
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  Laravel
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h6 className="text-lg font-bold mb-4 text-white">Useful Links</h6>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  Orders
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  Help
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
            href="https://yourwebsite.com"
            className="text-white font-bold hover:underline"
          >
            YourWebsite.com
          </a>
        </p>
      </div>
    </footer>
  );
};
