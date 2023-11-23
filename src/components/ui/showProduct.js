import Image from "next/image";
import Link from "next/link";

export default function ShowProduct({ data }) {
  const { product_name, category, price, status, rating, product_image, _id } =
    data;

  return (
    <Link href={`/products/${_id}`} className="mx-3">
      <div className="flex flex-col md:flex-row w-full justify-center items-center overflow-hidden bg-white rounded-lg shadow-lg mb-10 py-3 px-5 hover:bg-gray-50">
        <div className="w-1/3 md:w-1/4">
          <Image
            width={100}
            height={100}
            src={product_image}
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:w-2/3 p-4 md:p-4">
          <h1 className="text-xl font-bold text-gray-800 truncate">
            {product_name}
          </h1>

          <p className="capitalize text-sm text-gray-600 dark:text-gray-400 truncate">
            {category} ({rating})
          </p>

          <div className="flex flex-col md:flex-row md:justify-between mt-3 md:items-center">
            <h1 className="text-lg font-bold text-gray-700 md:text-xl">
              ${price}
            </h1>
            <button className="px-2 py-1 mt-2 md:mt-0 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
              {status}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
