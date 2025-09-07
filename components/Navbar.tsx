"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Package, Recycle } from "lucide-react"; 
import { usePathname } from "next/navigation";
import logo from "../public/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); 

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (pathname !== "/") {
      setLoaded(true);
    }
  }, [pathname]);

  return (
    <header className={`absolute w-full z-50 border-b border-b-white/10
        ${pathname !== "/" && loaded ? "navbar-animate" : ""}
      `}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Logo" className="h-15 md:h-20 w-auto" />
        </Link>

        {/* Right Side: Links + Contact */}
        <div className="flex items-center space-x-8">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-20">
            <Link
              href="/"
              className={`text-sm tracking-wide uppercase font-extralight font-mono transition duration-150 ease-in-out ${
                pathname === "/"
                  ? "text-[#00d38c]"
                  : "text-white hover:text-[#00d38c]"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm tracking-wide uppercase font-extralight font-mono transition duration-150 ease-in-out ${
                pathname === "/about"
                  ? "text-[#00d38c]"
                  : "text-white hover:text-[#00d38c]"
              }`}
            >
              About
            </Link>

            {/* Dropdown */}
            <div className="group relative hover:visible">
              <div className="flex items-center py-6">
                <button className="text-sm cursor-pointer text-white font-extralight tracking-wide hover:text-[#00d38c] uppercase font-mono transition duration-150 ease-in-out">
                  What We Do
                </button>
                <svg
                  className="ml-1 h-4 w-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/* Styled Dropdown Menu */}
              <div
                className="
                  absolute left-0 w-70 bg-white shadow-lg p-4
                  opacity-0 translate-y-2 invisible
                  group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible
                  transition-all duration-300 ease-out
                "
              >
                {/* Item 1 */}
                <Link
                  href="/freight-forwarding"
                  className="flex items-start space-x-3 p-3 hover:bg-gray-100 transition"
                >
                  <Package className="h-6 w-6 text-[#00d38c] flex-shrink-0" />
                  <div>
                    <h4 className="text-gray-900 font-medium">
                      Freight Forwarding
                    </h4>
                    <p className="text-sm text-gray-500">Learn More</p>
                  </div>
                </Link>

                {/* Item 2 */}
                <Link
                  href="/custom-clearance"
                  className="flex items-start space-x-3 p-3 hover:bg-gray-100 transition"
                >
                  <Recycle className="h-6 w-6 text-[#00d38c] flex-shrink-0" />
                  <div>
                    <h4 className="text-gray-900 font-medium">Customs Clearance</h4>
                    <p className="text-sm text-gray-500">Learn More</p>
                  </div>
                </Link>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-14 h-14 rounded-full bg-white shadow focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* 9 dots morph into X */}
            <div className="relative w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 text-gray-800"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* Same 9-dot morphing logic as before */}
                {/* Top-left */}
                <circle cx={isOpen ? "5" : "5"} cy={isOpen ? "5" : "5"} r="1.8" className="transition-all duration-300 ease-in-out" />
                <circle cx={isOpen ? "9" : "12"} cy={isOpen ? "9" : "5"} r="1.8" className="transition-all duration-300 ease-in-out" />
                <circle cx={isOpen ? "19" : "19"} cy={isOpen ? "5" : "5"} r="1.8" className="transition-all duration-300 ease-in-out" />
                <circle cx={isOpen ? "9" : "5"} cy={isOpen ? "15" : "12"} r="1.8" className="transition-all duration-300 ease-in-out" />
                <circle cx="12" cy="12" r="1.8" className="transition-all duration-300 ease-in-out" />
                <circle cx={isOpen ? "15" : "19"} cy={isOpen ? "9" : "12"} r="1.8" className="transition-all duration-300 ease-in-out" />
                <circle cx={isOpen ? "5" : "5"} cy={isOpen ? "19" : "19"} r="1.8" className="transition-all duration-300 ease-in-out" />
                <circle cx={isOpen ? "15" : "12"} cy={isOpen ? "15" : "19"} r="1.8" className="transition-all duration-300 ease-in-out" />
                <circle cx={isOpen ? "19" : "19"} cy={isOpen ? "19" : "19"} r="1.8" className="transition-all duration-300 ease-in-out" />
              </svg>
            </div>
          </button>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="max-sm:hidden bg-[#00d38c] hover:bg-[#00b36b] text-sm font-mono text-[#001632] md:ml-8 px-8 py-4 rounded-full transition duration-300 ease-in-out"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile Nav */}
<div
  className={`
    md:hidden absolute
    max-sm:w-74 w-80 bg-white shadow-lg p-5 space-y-1
    sm:left-1/2 sm:-translate-x-1/2
    max-sm:right-5 max-sm:top-full
    transition-all duration-700 ease-out
    transform
    ${isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-3 invisible"}
  `}
>
  <Link
    href="/"
    className={`block px-3 py-2 font-medium ${
      pathname === "/" ? "text-green-500 hover:bg-gray-100" : "text-gray-700 hover:bg-gray-100"
    }`}
    onClick={() => setIsOpen(false)}
  >
    Home
  </Link>

  <Link
    href="/about"
    className={`block px-3 py-2 font-medium ${
      pathname === "/about" ? "text-green-500 hover:bg-gray-100" : "text-gray-700 hover:bg-gray-100"
    }`}
    onClick={() => setIsOpen(false)}
  >
    About
  </Link>

  <Link
    href="/freight-forwarding"
    className={`block px-3 py-2 font-medium ${
      pathname === "/freight-forwarding"
        ? "text-green-500 hover:bg-gray-100"
        : "text-gray-700 hover:bg-gray-100"
    }`}
    onClick={() => setIsOpen(false)}
  >
    Freight Forwarding
  </Link>

  <Link
    href="/custom-clearance"
    className={`block px-3 py-2 font-medium ${
      pathname === "/custom-clearance"
        ? "text-green-500 hover:bg-gray-100"
        : "text-gray-700 hover:bg-gray-100"
    }`}
    onClick={() => setIsOpen(false)}
  >
    Customs Clearance
  </Link>

  <Link
    href="/contact"
    className={`block px-3 py-2 font-medium ${
      pathname === "/contact" ? "text-green-500 hover:bg-gray-100" : "text-gray-700 hover:bg-gray-100"
    }`}
    onClick={() => setIsOpen(false)}
  >
    Contact
  </Link>
</div>

    </header>
  );
};

export default Navbar;
