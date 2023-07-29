import RootLayout from "@/components/layout/root";
import { addOthers } from "@/redux/features/products/productSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

function OthersBuilder({ others }) {
  const dispatch = useDispatch();

  const handleAddToBuild = (others) => {
    dispatch(addOthers(others));
  };
  return (
    <div className="h-screen mx-10 my-10">
      <h1 className="text-4xl font-bold text-center text-red-500 uppercase">
        All others
      </h1>
      <div className="grid grid-cols-3 mt-10 ">
        {others.map((x) => (
          <div
            key={x?._id}
            class="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 justify-center content-center items-center"
          >
            <div class="w-1/3 h-full bg-white">
              <Image src={x?.image} width={200} height={200} alt="image" />
            </div>

            <div class="w-2/3 p-4 md:p-4">
              <h1 class="text-xl font-bold text-gray-800 dark:text-white capitalize">
                {x?.product_name}
              </h1>

              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400 capitalize">
                {x?.category} | Status {x?.status} | {x?.average_rating}
              </p>

              <div class="flex justify-between mt-3 item-center">
                <h1 class="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
                  $ {x?.price}
                </h1>
                <Link href={"/builder"}>
                  <button
                    onClick={() => handleAddToBuild(x)}
                    className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
                  >
                    Add To Builder
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OthersBuilder;

OthersBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/cat_others");
  const data = await res.json();

  return { props: { others: data.data } };
};
