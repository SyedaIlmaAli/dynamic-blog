"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [currentDateTime, setCurrentDateTime] = useState(``);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };

      setCurrentDateTime(
        now.toLocaleDateString(`en-US`, options) +
          " " +
          now.toLocaleTimeString(`en-US`, { hour12: false })
      );
    };
    updateDateTime();

    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="bg-gray-100 shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Date and Time */}
        <div className="text-gray-600 text-sm italic block">
          {currentDateTime}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className="text-gray-700 hover:text-blue-800 font-medium text-lg transition-all duration-300 border-b-2 border-transparent hover:border-blue-800"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Call-to-Action Button */}
        <Link
          href={"https://github.com/syedaIlmaAli/"}
          className="hidden md:inline-block ml-6 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-red-600 transform transition-all duration-300"
        >
          GitHub
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <nav className="flex flex-col items-center space-y-4 p-4">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className="text-gray-700 hover:text-blue-800 font-medium text-lg transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={"https://github.com/syedaIlmaAli/"}
              className="w-full text-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-red-600 transform transition-all duration-300"
            >
              GitHub
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
