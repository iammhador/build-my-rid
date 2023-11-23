import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import avater from "@/assets/boy.png";
import Image from "next/image";
export default function RootLayout({ children }) {
  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>Build My Rig</title>
        <meta
          name="BuildMyRig - Your Ultimate Destination for PC Building Enthusiasts. Discover step-by-step guides, expert tips, and the latest hardware recommendations to build your dream gaming or workstation PC. Join our community of tech enthusiasts and unleash your creativity in crafting the perfect custom rig."
          content="Your Ultimate PC Building Resource Description: Welcome to BuildMyRig, where PC building enthusiasts find all the tools and knowledge they need to create their dream computers. Explore comprehensive guides, expert advice, and the latest hardware reviews to craft the perfect custom rig for gaming, content creation, or professional workstations. Keywords: PC building, custom PC, gaming PC, workstation, hardware reviews, PC components, build guides, tech enthusiasts, computer hardware, gaming enthusiasts, DIY PC, tech community."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            Build My Rig
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
              <details>
                <summary>Category</summary>
                <ul className="p-2">
                  <li>
                    <Link href={"/category/processor"}>Processor</Link>
                  </li>
                  <li>
                    <Link href={"/category/motherboard"}>Motherboard</Link>
                  </li>
                  <li>
                    <Link href={"/category/ram"}>Ram</Link>
                  </li>
                  <li>
                    <Link href={"/category/power-supply-unit"}>
                      Power Supply
                    </Link>
                  </li>
                  <li>
                    <Link href={"/category/monitor"}>Monitor</Link>
                  </li>
                  <li>
                    <Link href={"/category/others"}>Others</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href={"/login"}>Login</Link>
            </li>
            <li>
              <Link href={"/register"}>Register</Link>
            </li>
            <li>
              <Link href={"/builder"}>Builder</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end mr-5">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image src={avater} width={100} height={100} alt="image" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              {session?.user?.email || session?.user?.name ? (
                <li onClick={() => signOut()}>
                  <a>Logout</a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </div> */}
      <div className="">{children}</div>
      <footer className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
          <div className="flex flex-col space-y-4  text-black pr-10">
            <h2 className="text-base font-semibold">Build My Rig</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
              <p>
                Build My Rig is your go-to platform for personalized PC
                building. Easily customize your PC, check component prices in
                real-time, and engage with a vibrant community. Our
                user-friendly interface, comprehensive component selection, and
                secure checkout make it a seamless experience. Join the
                community, share builds, and explore the world of PC building at
                Build My Rig
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-4  text-black ">
            <h2 className="text-base font-semibold">Information</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
              <a rel="noopener noreferrer" href="#">
                About us
              </a>
              <a rel="noopener noreferrer" href="#">
                Location
              </a>
              <a rel="noopener noreferrer" href="#">
                Instruction
              </a>
              <a rel="noopener noreferrer" href="#">
                Price
              </a>
              <a rel="noopener noreferrer" href="#">
                FAQ
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4  text-black">
            <h2 className="text-base font-semibold">PC Service</h2>
            <div className="flex flex-col space-y-2 text-sm">
              <a rel="noopener noreferrer" href="#">
                Pre-Built
              </a>
              <a rel="noopener noreferrer" href="#">
                PC Builder
              </a>
              <a rel="noopener noreferrer" href="#">
                Cleaning PC
              </a>
              <a rel="noopener noreferrer" href="#">
                Operating System
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4  text-black">
            <h2 className="text-base font-semibold">Components</h2>
            <div className="flex flex-col space-y-2 text-sm">
              <a rel="noopener noreferrer" href="#">
                Processor
              </a>
              <a rel="noopener noreferrer" href="#">
                Motherboard
              </a>
              <a rel="noopener noreferrer" href="#">
                RAM
              </a>
              <a rel="noopener noreferrer" href="#">
                Power Supply Unit
              </a>
              <a rel="noopener noreferrer" href="#">
                Monitor
              </a>
              <a rel="noopener noreferrer" href="#">
                Others
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-6 pt-12 text-sm">
          <span className="dark:text-gray-400">
            © Copyright 2023. All Rights Reserved By iammhador.
          </span>
        </div>
      </footer>
    </div>
  );
}
