import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdBuildCircle } from "react-icons/md";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="px-8 py-4 bg-white mx-auto ">
      <div className="container mx-auto flex items-center justify-between max-w-screen-xl">
        <div className="text-black font-bold text-lg">
          <Link href="/">
            <Image src={logo} width={80} height={50} alt="logo" />
          </Link>
        </div>

        <div className="hidden">
          <button
            className="text-black hover:text-gray-700 focus:outline-none"
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

        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-black hover:text-gray-700">
            Home
          </Link>
          <Link href="#Features" className="text-black hover:text-gray-700">
            Features
          </Link>
          <Link href="#Components" className="text-black hover:text-gray-700">
            Components
          </Link>
          <Link href="#Help" className="text-black hover:text-gray-700">
            Help
          </Link>
          <Link href="#FAQ" className="text-black hover:text-gray-700">
            FAQ
          </Link>
          <Link href="#Blog" className="text-black hover:text-gray-800">
            Blog
          </Link>
        </div>

        <div>
          <Link
            href="/builder"
            className="text-black text-3xl hover:text-gray-700"
          >
            <MdBuildCircle className="" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
