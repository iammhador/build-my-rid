import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="px-8 py-4 bg-black mx-auto ">
      <div className="container mx-auto flex items-center justify-between max-w-screen-xl">
        <div className="text-white font-bold text-lg">
          <Link href="/">Build My Rig</Link>
        </div>

        <div className="lg:hidden">
          <button
            className="text-white hover:text-gray-300 focus:outline-none"
            onClick={() => console.log("Toggle mobile menu")}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="#Features" className="text-white hover:text-gray-300">
            Features
          </Link>
          <Link href="#Components" className="text-white hover:text-gray-300">
            Components
          </Link>
          <Link href="#Help" className="text-white hover:text-gray-300">
            Help
          </Link>
          <Link href="#FAQ" className="text-white hover:text-gray-300">
            FAQ
          </Link>
          <Link href="#Blog" className="text-white hover:text-gray-300">
            Blog
          </Link>
          <Link href="/builder" className="text-white hover:text-gray-300">
            PC Builder
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
