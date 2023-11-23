import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";

import Footer from "../ui/footer";
import Blog from "../ui/blog";
import Banner from "../ui/banner";
import FAQ from "../ui/faq";
import NeedHelp from "../ui/help";
export default function RootLayout({ children }) {
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
      {/* <div className="">{children}</div> */}
      <Banner />
      <NeedHelp />
      <FAQ />
      <Blog />
      <hr />
      <Footer />
    </div>
  );
}
