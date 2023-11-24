import Image from "next/image";
import Link from "next/link";

export default function Card({ data }) {
  const { _id, image, product_name, status, price, category } = data;

  return (
    <Link
      href={`/category/${category}/${_id}`}
      className="max-w-xs overflow-hidden bg-white rounded-md shadow-lg hover:shadow-xl transition duration-300 border border-gray-400 "
    >
      <div className="px-4 py-2 mt-5">
        <h1 className="text-xl font-bold text-black capitalize text-center">
          {product_name}
        </h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 capitalize text-center">
          {category}
        </p>
      </div>

      <div>
        <Image src={image} width={300} height={300} alt="image" />
      </div>

      <div className="flex items-center justify-between px-4 py-2 bg-black text-white">
        <h1 className="text-lg font-bold">${price}</h1>
        <p className="px-2 py-1 text-xs font-semibold uppercase transition-colors duration-300 bg-white text-black rounded-sm hover:bg-black hover:text-white focus:bg-gray-600 focus:outline-none">
          {status}
        </p>
      </div>
    </Link>
  );
}
