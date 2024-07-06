// src/components/Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer className="w-full  text-gray-800 py-4 mt-16 flex flex-col items-center">
      <p className="mb-2">© 2024 Hugues Codeur. Tous droits réservés.</p>
      <a href="https://your-portfolio-link.com" className="text-green-400 mb-2">
        Visitez mon portfolio
      </a>
      <div className="flex space-x-4">
        <a
          href="https://linkedin.com/in/your-linkedin"
          className="text-blue-700"
        >
          LinkedIn
        </a>
        <a href="https://youtube.com/your-youtube" className="text-red-500">
          YouTube
        </a>
        <a href="https://facebook.com/your-facebook" className="text-blue-600">
          Facebook
        </a>
        <a href="https://facebook.com/your-facebook" className="text-black-600">
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
