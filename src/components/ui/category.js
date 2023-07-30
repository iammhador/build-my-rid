import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Category({ category }) {
  const { category_name, image } = category;

  return (
    <div className="bg-white py-8 px-5 md:px-14 mb-5 rounded-md shadow-lg hover:bg-gray-300">
      <Link href={`/category/${category_name}`} className="block">
        <div className="w-full md:w-1/3 mx-auto">
          <div className="w-full md:w-1/2 lg:w-1/3 mx-auto">
            <img
              src={image}
              alt="image"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
        <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4 text-center">
          <strong className="font-bold text-red-500 uppercase">
            {category_name}
          </strong>
        </div>
      </Link>
    </div>
  );
}
