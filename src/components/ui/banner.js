import Image from "next/image";
import Link from "next/link";
import React from "react";
import bannerImage from "../../assets/workstation.png";

export default function Banner() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-around">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block  py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Build My Rig
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-red-500 sm:text-4xl sm:leading-none">
              Unleash Your Power,
              <br className="hidden md:block" />
              Craft Your{" "}
              <span className="inline-block text-deep-purple-accent-400">
                Dream Rig.
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Your Ultimate Destination for PC Building Enthusiasts. Discover
              step-by-step guides, expert tips, and the latest hardware
              recommendations to build your dream gaming or workstation PC. Join
              our community of tech enthusiasts and unleash your creativity in
              crafting the perfect custom rig.
            </p>
          </div>
          <Link
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </Link>
        </div>
        <div>
          <Image src={bannerImage} className="w-4/6 4/6" alt="image" />
        </div>
      </div>
    </div>
  );
}
