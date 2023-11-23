import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SingleRam({ data }) {
  const { _id, image, product_name, status, price, category, average_rating } =
    data;
  return (
    <Link
      href={`/category/ram/${_id}`}
      className="max-w-xs overflow-hidden py-5 px-5 bg-white rounded-lg shadow-lg hover:bg-gray-100 border border-gray-400"
    >
      <div className="px-4 py-2">
        <h1 className="text-xl font-bold text-gray-800 uppercase ">
          {product_name}
        </h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {category} ( {average_rating} )
        </p>
      </div>

      <div>
        <Image src={image} width={300} height={300} alt="image" />
      </div>

      <div className="flex items-center justify-between px-4 py-2 bg-red-500 mt-5">
        <h1 className="text-lg font-bold text-white">${price}</h1>
        <p className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
          {status}
        </p>
      </div>
    </Link>
  );
}
