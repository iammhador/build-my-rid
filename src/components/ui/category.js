import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Category({ category }) {
  const { category_name, image } = category;

  return (
    <div className="bg-white py-8 px-5 md:px-14 mb-5 rounded-lg shadow-lg ">
      <Link href={`/category/${category_name}`}>
        <div className="block">
          <div className="w-full md:w-1/3 mx-auto">
            <Image src={image} alt={category_name} width={500} height={500} />
          </div>
          <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4 text-center">
            <strong className="font-medium text-sm text-gray-400 capitalize">
              {category_name}
            </strong>
          </div>
        </div>
      </Link>
    </div>
  );
}
