import Image from "next/image";
import React from "react";
import bannerImage from "../../assets/banner.png";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-3 ">
        <div className="flex flex-col justify-around">
          <div className="mb-10">
            <p className="text-7xl font-bold text-black capitalize mb-3">
              Build Your Dream PC Today!
            </p>
            <p className="text-base capitalize">
              Explore our pre-built options or customize your own PC!
            </p>
          </div>
          <div className="flex">
            <button className="bg-black font-medium text-white border border-black  px-4 py-2 mr-4 rounded-sm my-1">
              Choose Pre-Built
            </button>
            <Link
              href="/builder"
              className="bg-white font-medium text-black border border-black px-4 py-2 rounded-sm my-1"
            >
              Build Your Own
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image src={bannerImage} width={500} height={500} alt="image" />
        </div>

        <div className="flex mt-4">
          <div>
            <section className="px-4 py-2 mb-4">
              <p className="text-black font-semibold text-xl">
                Choose Pre-Built
              </p>
              <p>
                Pre-Built computers are already assembled and configured by
                manufacturers. They are ready to use, saving you time and
                effort.
              </p>
            </section>
            <section className="px-4 py-2">
              <p className="text-black font-semibold text-xl">Build Your Own</p>
              <p>
                Building your own computer offers flexibility and customization.
                You have full control over each component, allowing you to
                choose the best parts for your specific needs and budget.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
