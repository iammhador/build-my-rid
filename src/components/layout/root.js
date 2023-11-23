import Head from "next/head";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import Footer from "../ui/footer";
import Navbar from "../ui/navbar";
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
      <Navbar />
      <div className="">{children}</div>
      <hr />
      <Footer />
    </div>
  );
}
