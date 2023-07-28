import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Category({ category }) {
  const { category_name, image } = category;
  return (
    <div className="bg-gray-200 py-8 px-14 mb-5 rounded-md shadow-lg hover:bg-gray-300">
      <Link href="#" class="block">
        <Image src={image} width={300} height={300} />

        <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
          <strong class="font-bold text-red-500 uppercase">
            {category_name}
          </strong>
        </div>
      </Link>
    </div>
  );
}
