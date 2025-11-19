import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-6 mt-8 border-t border-gray-200">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} STA SARL. All rights reserved.</p>
        
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/" className="hover:text-orange-600">Home</Link>
          <Link to="/brands" className="hover:text-orange-600">Brands</Link>
          <Link to="/about" className="hover:text-orange-600">About</Link>
          <Link to="/contact" className="hover:text-orange-600">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
