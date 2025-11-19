// src/components/Navbar.tsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "../translations";

const Navbar = () => {
  const { t, language, setLanguage } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((p) => !p);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
      <div className="flex items-center cursor-pointer">
  <Link to="/" onClick={closeMenu}>
    <img
      src="/images/Logo.png"
      alt="STA Logo"
      className="h-20 w-auto object-contain scale-70 -my-1"
    />
  </Link>
</div>


        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 font-medium text-gray-700">
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "text-orange-600 font-semibold border-b-2 border-orange-600 pb-1 transition-all"
                : "text-gray-700 hover:text-orange-600 transition-all"
            }
          >
            {t.nav.home}
          </NavLink>

          <NavLink
            to="/brands"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "text-orange-600 font-semibold border-b-2 border-orange-600 pb-1 transition-all"
                : "text-gray-700 hover:text-orange-600 transition-all"
            }
          >
            {t.nav.brands}
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "text-orange-600 font-semibold border-b-2 border-orange-600 pb-1 transition-all"
                : "text-gray-700 hover:text-orange-600 transition-all"
            }
          >
            {t.nav.about}
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "text-orange-600 font-semibold border-b-2 border-orange-600 pb-1 transition-all"
                : "text-gray-700 hover:text-orange-600 transition-all"
            }
          >
            {t.nav.contact}
          </NavLink>
        </div>

        {/* Translation Buttons (ALWAYS VISIBLE) */}
        <div className="flex items-center space-x-2 mr-4 md:mr-6">
          <button
            className={`px-4 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
              language === "en"
                ? "bg-orange-600 text-white shadow-md"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
          <button
            className={`px-4 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
              language === "fr"
                ? "bg-orange-600 text-white shadow-md"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
            onClick={() => setLanguage("fr")}
          >
            FR
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-orange-600 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (links only; translation buttons are NOT inside this) */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="flex flex-col items-center py-4 space-y-4 font-medium">
            <NavLink
              to="/"
              onClick={closeMenu}
              className="text-gray-700 hover:text-orange-600 transition-all"
            >
              {t.nav.home}
            </NavLink>

            <NavLink
              to="/brands"
              onClick={closeMenu}
              className="text-gray-700 hover:text-orange-600 transition-all"
            >
              {t.nav.brands}
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMenu}
              className="text-gray-700 hover:text-orange-600 transition-all"
            >
              {t.nav.about}
            </NavLink>

            <NavLink
              to="/contact"
              onClick={closeMenu}
              className="text-gray-700 hover:text-orange-600 transition-all"
            >
              {t.nav.contact}
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
