import RootLayout from "@/components/layout/root";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import processor from "../../assets/chip.png";
import motherboard from "../../assets/motherboard.png";
import ram from "../../assets/ram.png";
import powerSupply from "../../assets/power-supply.png";
import monitor from "../../assets/monitor.png";
import others from "../../assets/keyboard.png";
import toast, { Toaster } from "react-hot-toast";
export default function Builder({ categories }) {
  const [allProductsSelected, setAllProductsSelected] = useState(false);

  const selectedProcessors = useSelector(
    (state) => state.product.selectedProcessors
  );
  const selectedMotherboard = useSelector(
    (state) => state.product.selectedMotherboard
  );
  const selectedRam = useSelector((state) => state.product.selectedRam);
  const selectedPowerSupply = useSelector(
    (state) => state.product.selectedPowerSupply
  );
  const selectedMonitor = useSelector((state) => state.product.selectedMonitor);
  const selectedOthers = useSelector((state) => state.product.selectedOthers);

  useEffect(() => {
    const allSelected =
      selectedProcessors.length > 0 &&
      selectedMotherboard.length > 0 &&
      selectedRam.length > 0 &&
      selectedPowerSupply.length > 0 &&
      selectedMonitor.length > 0 &&
      selectedOthers.length > 0;

    setAllProductsSelected(allSelected);
  }, [
    selectedProcessors,
    selectedMotherboard,
    selectedRam,
    selectedPowerSupply,
    selectedMonitor,
    selectedOthers,
  ]);

  const handleCompleteBuild = () => {
    if (allProductsSelected) {
      toast.success(
        `Congratulation! Your total build cost is $${calculateTotalPrice()}`
      );
    }
  };

  const calculateTotalPrice = () => {
    const totalPrice =
      selectedProcessors.reduce((acc, item) => item.price, 0) +
      selectedMotherboard.reduce((acc, item) => item.price, 0) +
      selectedRam.reduce((acc, item) => item.price, 0) +
      selectedPowerSupply.reduce((acc, item) => item.price, 0) +
      selectedMonitor.reduce((acc, item) => item.price, 0) +
      selectedOthers.reduce((acc, item) => item.price, 0);

    return totalPrice.toFixed(2);
  };
  return (
    <div>
      <Head>
        <title>Build My Rig - PC Builder</title>
      </Head>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-semibold text-black">PC Build</h2>

          <div className="bg-black p-5 rounded-md">
            <p className="text-xl font-bold text-white">
              $ {calculateTotalPrice()}
            </p>
          </div>
        </div>

        <div className="my-5">
          <div className="w-full sm:w-2/3 h-auto sm:h-2/5 py-5 px-5 bg-white hover:scale-105 mx-auto rounded-lg mb-3">
            <div className="grid grid-cols-12 justify-center items-center">
              <div className="col-span-12 sm:col-span-2 mb-3 sm:mb-0 flex justify-center items-center">
                {selectedProcessors.length > 0 ? (
                  <Image
                    src={selectedProcessors[0]?.image}
                    width={100}
                    height={100}
                    alt="Processor Image"
                  />
                ) : (
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full flex justify-center items-center">
                    <Image
                      src={processor}
                      width={60}
                      height={60}
                      alt="Default Processor Image"
                    />
                  </div>
                )}
              </div>
              <div className="col-span-12 sm:col-span-8 text-center sm:text-left">
                {selectedProcessors.length > 0 ? (
                  <>
                    <h2 className="text-gray-800 capitalize font-bold text-xs sm:text-sm ">
                      Processor
                    </h2>
                    <p className="text-gray-800 capitalize font-bold text-lg sm:text-base ">
                      {selectedProcessors[0]?.product_name}
                    </p>
                    <p className="text-gray-800 capitalize font-bold text-sm ">
                      ${selectedProcessors[0]?.price}
                    </p>
                  </>
                ) : (
                  <div className="col-span-2">
                    <h1 className="text-gray-800 capitalize font-bold text-lg sm:text-base ">
                      Processor
                    </h1>
                  </div>
                )}
              </div>
              <div className="col-span-12 sm:col-span-2 mt-2 sm:mt-0 flex justify-center">
                <Link
                  href={"/pc-build/processor"}
                  className="text-gray-800 capitalize font-bold text-base sm:text-lg py-2 px-4 border-gray-900 border-x-2 border-y-2 rounded-md"
                >
                  Select
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-2/3 h-auto sm:h-2/5 py-5 px-5 bg-white hover:scale-105 mx-auto rounded-lg mb-3">
            <div className="grid grid-cols-12 justify-center items-center">
              <div className="col-span-12 sm:col-span-2 mb-3 sm:mb-0 flex justify-center items-center">
                {selectedMotherboard.length > 0 ? (
                  <Image
                    src={selectedMotherboard[0]?.image}
                    width={100}
                    height={100}
                    alt="Motherboard Image"
                  />
                ) : (
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full flex justify-center items-center">
                    <Image
                      src={motherboard}
                      width={60}
                      height={60}
                      alt="Default Motherboard Image"
                    />
                  </div>
                )}
              </div>
              <div className="col-span-12 sm:col-span-8 text-center sm:text-left">
                {selectedMotherboard.length > 0 ? (
                  <>
                    <h2 className="text-gray-800 capitalize font-bold text-xs sm:text-sm ">
                      Motherboard
                    </h2>
                    <p className="text-gray-800 capitalize font-bold text-lg sm:text-base ">
                      {selectedMotherboard[0]?.product_name}
                    </p>
                    <p className="text-gray-800 capitalize font-bold text-sm ">
                      ${selectedMotherboard[0]?.price}
                    </p>
                  </>
                ) : (
                  <div className="col-span-2">
                    <h1 className="text-gray-800 capitalize font-bold text-lg sm:text-base ">
                      Motherboard
                    </h1>
                  </div>
                )}
              </div>
              <div className="col-span-12 sm:col-span-2 mt-2 sm:mt-0 flex justify-center">
                <Link
                  href={"/pc-build/motherboard"}
                  className="text-gray-800 capitalize font-bold text-base sm:text-lg py-2 px-4 border-gray-900 border-x-2 border-y-2 rounded-md "
                >
                  Select
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-2/3 h-auto sm:h-2/5 py-5 px-5 bg-white hover:scale-105 mx-auto rounded-lg mb-3">
            <div className="grid grid-cols-12 justify-center items-center">
              <div className="col-span-12 sm:col-span-2 mb-3 sm:mb-0 flex justify-center items-center">
                {selectedRam.length > 0 ? (
                  <Image
                    src={selectedRam[0]?.image}
                    width={100}
                    height={100}
                    alt="RAM Image"
                  />
                ) : (
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full flex justify-center items-center">
                    <Image
                      src={ram}
                      width={60}
                      height={60}
                      alt="Default RAM Image"
                    />
                  </div>
                )}
              </div>
              <div className="col-span-12 sm:col-span-8 text-center sm:text-left">
                {selectedRam.length > 0 ? (
                  <>
                    <h2 className="text-gray-800 capitalize font-bold text-xs sm:text-sm ">
                      RAM
                    </h2>
                    <p className="text-gray-800 capitalize font-bold text-lg sm:text-base ">
                      {selectedRam[0]?.product_name}
                    </p>
                    <p className="text-gray-800 capitalize font-bold text-sm ">
                      ${selectedRam[0]?.price}
                    </p>
                  </>
                ) : (
                  <div className="col-span-2">
                    <h1 className="text-gray-800 capitalize font-bold text-lg sm:text-base ">
                      RAM
                    </h1>
                  </div>
                )}
              </div>
              <div className="col-span-12 sm:col-span-2 mt-2 sm:mt-0 flex justify-center">
                <Link
                  href={"/pc-build/ram"}
                  className="text-gray-800 capitalize font-bold text-base sm:text-lg py-2 px-4 border-gray-900 border-x-2 border-y-2 rounded-md "
                >
                  Select
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-2/3 h-auto sm:h-2/5 py-5 px-5 bg-white hover:scale-105 mx-auto rounded-lg mb-3">
            <div className="grid grid-cols-12 justify-center items-center">
              <div className="col-span-12 sm:col-span-2 mb-3 sm:mb-0 flex justify-center items-center">
                {selectedPowerSupply.length > 0 ? (
                  <Image
                    src={selectedPowerSupply[0]?.image}
                    width={100}
                    height={100}
                    alt="Power Supply Image"
                  />
                ) : (
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full flex justify-center items-center">
                    <Image
                      src={powerSupply}
                      width={60}
                      height={60}
                      alt="Default Power Supply Image"
                    />
                  </div>
                )}
              </div>
              <div className="col-span-12 sm:col-span-8 text-center sm:text-left">
                {selectedPowerSupply.length > 0 ? (
                  <>
                    <h2 className="text-gray-800 capitalize font-bold text-xs sm:text-sm ">
                      Power Supply
                    </h2>
                    <p className="text-gray-800 capitalize font-bold text-lg sm:text-base ">
                      {selectedPowerSupply[0]?.product_name}
                    </p>
                    <p className="text-gray-800 capitalize font-bold text-sm ">
                      ${selectedPowerSupply[0]?.price}
                    </p>
                  </>
                ) : (
                  <div className="col-span-2">
                    <h1 className="text-gray-800 capitalize font-bold text-lg sm:text-base ">
                      Power Supply
                    </h1>
                  </div>
                )}
              </div>
              <div className="col-span-12 sm:col-span-2 mt-2 sm:mt-0 flex justify-center">
                <Link
                  href={"/pc-build/power-supply-unit"}
                  className="text-gray-800 capitalize font-bold text-base sm:text-lg py-2 px-4 border-gray-900 border-x-2 border-y-2 rounded-md "
                >
                  Select
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-2/3 h-auto sm:h-2/5 py-5 px-5 bg-white hover:scale-105 mx-auto rounded-lg mb-3">
            <div className="grid grid-cols-12 justify-center items-center">
              <div className="col-span-12 sm:col-span-2 mb-3 sm:mb-0 flex justify-center items-center">
                {selectedMonitor.length > 0 ? (
                  <Image
                    src={selectedMonitor[0]?.image}
                    width={100}
                    height={100}
                    alt="Monitor Image"
                  />
                ) : (
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full flex justify-center items-center">
                    <Image
                      src={monitor}
                      width={60}
                      height={60}
                      alt="Default Monitor Image"
                    />
                  </div>
                )}
              </div>
              <div className="col-span-12 sm:col-span-8 text-center sm:text-left">
                {selectedMonitor.length > 0 ? (
                  <>
                    <h2 className="text-gray-800 capitalize font-bold text-xs sm:text-sm ">
                      Monitor
                    </h2>
                    <p className="text-gray-800 capitalize font-bold text-lg sm:text-base ">
                      {selectedMonitor[0]?.product_name}
                    </p>
                    <p className="text-gray-800 capitalize font-bold text-sm ">
                      ${selectedMonitor[0]?.price}
                    </p>
                  </>
                ) : (
                  <div className="col-span-2">
                    <h1 className="text-gray-800 capitalize font-bold text-lg sm:text-base ">
                      Monitor
                    </h1>
                  </div>
                )}
              </div>
              <div className="col-span-12 sm:col-span-2 mt-2 sm:mt-0 flex justify-center">
                <Link
                  href={"/pc-build/monitor"}
                  className="text-gray-800 capitalize font-bold text-base sm:text-lg py-2 px-4 border-gray-900 border-x-2 border-y-2 rounded-md "
                >
                  Select
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-2/3 h-auto sm:h-2/5 py-5 px-5 bg-white hover:scale-105 mx-auto rounded-lg mb-3">
            <div className="grid grid-cols-12 justify-center items-center">
              <div className="col-span-12 sm:col-span-2 mb-3 sm:mb-0 flex justify-center items-center">
                {selectedOthers.length > 0 ? (
                  <Image
                    src={selectedOthers[0]?.image}
                    width={100}
                    height={100}
                    alt="Others Image"
                  />
                ) : (
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full flex justify-center items-center">
                    <Image
                      src={others}
                      width={60}
                      height={60}
                      alt="Default Others Image"
                    />
                  </div>
                )}
              </div>
              <div className="col-span-12 sm:col-span-8 text-center sm:text-left">
                {selectedOthers.length > 0 ? (
                  <>
                    <h2 className="text-gray-800 capitalize font-bold text-xs sm:text-sm ">
                      Others
                    </h2>
                    <p className="text-gray-800 capitalize font-bold text-lg sm:text-base ">
                      {selectedOthers[0]?.product_name}
                    </p>
                    <p className="text-gray-800 capitalize font-bold text-sm ">
                      ${selectedOthers[0]?.price}
                    </p>
                  </>
                ) : (
                  <div className="col-span-2">
                    <h1 className="text-gray-800 capitalize font-bold text-lg sm:text-base ">
                      Others
                    </h1>
                  </div>
                )}
              </div>
              <div className="col-span-12 sm:col-span-2 mt-2 sm:mt-0 flex justify-center">
                <Link
                  href={"/pc-build/others"}
                  className="text-gray-800 capitalize font-bold text-base sm:text-lg py-2 px-4 border-gray-900 border-x-2 border-y-2 rounded-md "
                >
                  Select
                </Link>
              </div>
            </div>
          </div>
        </div>

        {
          <button
            className={`${
              allProductsSelected ? "bg-black" : "bg-gray-500"
            } py-5 w-full px-5 my-5 text-gray-200 rounded-lg uppercase font-bold text-lg`}
            onClick={handleCompleteBuild}
            disabled={!allProductsSelected}
          >
            Complete Build
          </button>
        }

        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
}
Builder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://build-my-rig-server.vercel.app/api/categories"
  );
  const categories = await res.json();

  return { props: { categories: categories.data } };
};
