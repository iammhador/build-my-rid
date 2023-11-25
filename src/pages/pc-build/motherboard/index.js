import RootLayout from "@/components/layout/root";
import { addMotherboard } from "@/redux/features/products/productSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

function MotherboardBuilder({ motherboard }) {
  const dispatch = useDispatch();

  const handleAddToBuild = (motherboard) => {
    dispatch(addMotherboard(motherboard));
  };
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col md:flex-row justify-between mb-5">
        <h2 className="text-4xl font-semibold text-black mb-4 md:mb-0">
          Motherboard
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {motherboard.map((x) => (
          <div
            key={x?._id}
            className="bg-white rounded-md shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="relative h-80 mt-5">
              <Image
                src={x?.image}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg "
                alt="Processor Image"
              />
            </div>
            <div className="p-4">
              <h1 className="text-xl font-bold text-gray-800 capitalize mb-2">
                {x?.product_name}
              </h1>
              <p className="text-sm text-gray-600 capitalize mb-2">
                {x?.category} | Status: {x?.status} | Rating:{" "}
                {x?.average_rating}
              </p>
              <div className="flex justify-between items-center">
                <h1 className="text-lg font-bold text-gray-700 md:text-xl">
                  $ {x?.price}
                </h1>
                <Link href={"/builder"}>
                  <button
                    onClick={() => handleAddToBuild(x)}
                    className="px-3 py-2 text-sm font-bold text-white uppercase bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
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

export default MotherboardBuilder;

MotherboardBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://build-my-rig-server.vercel.app/api/cat_motherboard"
  );
  const data = await res.json();

  return { props: { motherboard: data.data } };
};
