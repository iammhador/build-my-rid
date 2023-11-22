import RootLayout from "@/components/layout/root";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import processor from "../../assets/cpu.png";
import motherboard from "../../assets/motherboard.png";
import ram from "../../assets/chip.png";
import powerSupply from "../../assets/power-supply.png";
import monitor from "../../assets/monitor.png";
import others from "../../assets/video-card.png";
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
      toast.success("Congratulation! Your build complete");
    }
  };
  return (
    <div>
      <Head>
        <title>Build My Rig - PC Builder</title>
      </Head>
      <div className="my-20 mx-10 ">
        <h1 className="uppercase text-center text-4xl font-bold text-red-500">
          Build Your Pc
        </h1>
        <div className="my-5">
          <div className="w-2/3 h-2/5 py-5 px-5 bg-gray-300 hover:bg-slate-50 mx-auto rounded-lg mb-3">
            <div className="grid grid-cols-12 justify-center items-center">
              {selectedProcessors.length > 0 ? (
                <Image
                  src={selectedProcessors[0]?.image}
                  width={100}
                  height={100}
                  alt="image"
                />
              ) : (
                <div className="col-span-2">
                  <Image src={processor} width={100} height={100} alt="image" />
                </div>
              )}

              <div className="col-span-8">
                {selectedProcessors.length > 0 ? (
                  <>
                    <h2 className="text-gray-800 capitalize font-bold text-xs ml-5">
                      Processor
                    </h2>
                    <p className="text-gray-800 capitalize font-bold text-lg ml-5">
                      {selectedProcessors[0]?.product_name}
                    </p>
                    <p className="text-gray-800 capitalize font-bold text-sm ml-5">
                      ${selectedProcessors[0]?.price}
                    </p>
                  </>
                ) : (
                  <div className="col-span-2">
                    <h1 className="text-gray-800 capitalize font-bold text-lg ml-5">
                      Processor
                    </h1>
                  </div>
                )}
              </div>
              <div className="col-span-2">
                <Link
                  href={"/pc-build/processor"}
                  className="text-gray-800 capitalize font-bold text-lg py-2 px-4 border-gray-900 border-x-2 border-y-2 rounded-md hover:text-red-500"
                >
                  Select
                </Link>
              </div>
            </div>
          </div>

          <div className="w-2/3 h-2/5 py-5 px-5 bg-gray-300 hover:bg-slate-50 mx-auto rounded-lg mb-3">
            <div className="grid grid-cols-12 justify-center items-center">
              <div className="col-span-2">
                {selectedMotherboard.length > 0 ? (
                  <Image
                    src={selectedMotherboard[0]?.image}
                    width={100}
                    height={100}
                    alt="image"
                  />
                ) : (
                  <div className="col-span-2">
                    <Image
                      src={motherboard}
                      width={100}
                      height={100}
                      alt="image"
                    />
                  </div>
                )}
              </div>
              <div className="col-span-8">
                {selectedMotherboard.length > 0 ? (
                  <>
                    <h2 className="text-gray-800 capitalize font-bold text-xs ml-5">
                      Motherboard
                    </h2>
                    <p className="text-gray-800 capitalize font-bold text-lg ml-5">
                      {selectedMotherboard[0]?.product_name}
                    </p>
                    <p className="text-gray-800 capitalize font-bold text-sm ml-5">
                      ${selectedMotherboard[0]?.price}
                    </p>
                  </>
                ) : (
                  <div className="col-span-2">
                    <h1 className="text-gray-800 capitalize font-bold text-lg ml-5">
                      Motherboard
                    </h1>
                  </div>
                )}
              </div>
              <div className="col-span-2">
                <Link
                  href={"/pc-build/motherboard"}
                  className="text-gray-800 capitalize font-bold text-lg py-2 px-4 border-gray-900 border-x-2 border-y-2 rounded-md hover:text-red-500"
                >
                  Select
                </Link>
              </div>
            </div>
          </div>

          <div className="w-2/3 h-2/5 py-5 px-5 bg-gray-300 hover:bg-slate-50 mx-auto rounded-lg mb-3">
            <div className="grid grid-cols-12 justify-center items-center">
              <div className="col-span-2">
                {selectedRam.length > 0 ? (
                  <Image
                    src={selectedRam[0]?.image}
                    width={100}
                    height={100}
                    alt="image"
                  />
                ) : (
                  <div className="col-span-2">
                    <Image src={ram} width={100} height={100} alt="image" />
                  </div>
                )}
              </div>
              <div className="col-span-8">
                {selectedRam.length > 0 ? (
                  <>
                    <h2 className="text-gray-800 capitalize font-bold text-xs ml-5">
                      Ram
                    </h2>
                    <p className="text-gray-800 capitalize font-bold text-lg ml-5">
                      {selectedRam[0]?.product_name}
                    </p>
                    <p className="text-gray-800 capitalize font-bold text-sm ml-5">
                      ${selectedRam[0]?.price}
                    </p>
                  </>
                ) : (
                  <div className="col-span-2">
                    <h1 className="text-gray-800 capitalize font-bold text-lg ml-5">
                      Ram
                    </h1>
                  </div>
                )}
              </div>
              <div className="col-span-2">
                <Link
                  href={"/pc-build/ram"}
                  className="text-gray-800 capitalize font-bold text-lg py-2 px-4 border-gray-900 border-x-2 border-y-2 rounded-md hover:text-red-500"
                >
                  Select
                </Link>
              </div>
            </div>
          </div>

          <div className="w-2/3 h-2/5 py-5 px-5 bg-gray-300 hover:bg-slate-50 mx-auto rounded-lg mb-3">
            <div className="grid grid-cols-12 justify-center items-center">
              <div className="col-span-2">
                {selectedPowerSupply.length > 0 ? (
                  <Image
                    src={selectedPowerSupply[0]?.image}
                    width={100}
                    height={100}
                    alt="image"
                  />
                ) : (
                  <div className="col-span-2">
                    <Image
                      src={powerSupply}
                      width={100}
                      height={100}
                      alt="image"
                    />
                  </div>
                )}
              </div>
              <div className="col-span-8">
                {selectedPowerSupply.length > 0 ? (
                  <>
                    <h2 className="text-gray-800 capitalize font-bold text-xs ml-5">
                      Power Supply
                    </h2>
                    <p className="text-gray-800 capitalize font-bold text-lg ml-5">
                      {selectedPowerSupply[0]?.product_name}
                    </p>
                    <p className="text-gray-800 capitalize font-bold text-sm ml-5">
                      ${selectedPowerSupply[0]?.price}
                    </p>
                  </>
                ) : (
                  <div className="col-span-2">
                    <h1 className="text-gray-800 capitalize font-bold text-lg ml-5">
                      Power Supply
                    </h1>
                  </div>
                )}
              </div>
              <div className="col-span-2">
                <Link
                  href={"/pc-build/power-supply-unit"}
                  className="text-gray-800 capitalize font-bold text-lg py-2 px-4 border-gray-900 border-x-2 border-y-2 rounded-md hover:text-red-500"
                >
                  Select
                </Link>
              </div>
            </div>
          </div>

          <div className="w-2/3 h-2/5 py-5 px-5 bg-gray-300 hover:bg-slate-50 mx-auto rounded-lg mb-3">
            <div className="grid grid-cols-12 justify-center items-center">
              <div className="col-span-2">
                {selectedMonitor.length > 0 ? (
                  <Image
                    src={selectedMonitor[0]?.image}
                    width={100}
                    height={100}
                    alt="image"
                  />
                ) : (
                  <div className="col-span-2">
                    <Image src={monitor} width={100} height={100} alt="image" />
                  </div>
                )}
              </div>
              <div className="col-span-8">
                {selectedMonitor.length > 0 ? (
                  <>
                    <h2 className="text-gray-800 capitalize font-bold text-xs ml-5">
                      Monitor
                    </h2>
                    <p className="text-gray-800 capitalize font-bold text-lg ml-5">
                      {selectedMonitor[0]?.product_name}
                    </p>
                    <p className="text-gray-800 capitalize font-bold text-sm ml-5">
                      ${selectedMonitor[0]?.price}
                    </p>
                  </>
                ) : (
                  <div className="col-span-2">
                    <h1 className="text-gray-800 capitalize font-bold text-lg ml-5">
                      Monitor
                    </h1>
                  </div>
                )}
              </div>
              <div className="col-span-2">
                <Link
                  href={"/pc-build/monitor"}
                  className="text-gray-800 capitalize font-bold text-lg py-2 px-4 border-gray-900 border-x-2 border-y-2 rounded-md hover:text-red-500"
                >
                  Select
                </Link>
              </div>
            </div>
          </div>

          <div className="w-2/3 h-2/5 py-5 px-5 bg-gray-300 hover:bg-slate-50 mx-auto rounded-lg mb-3">
            <div className="grid grid-cols-12 justify-center items-center">
              <div className="col-span-2">
                {selectedOthers.length > 0 ? (
                  <Image
                    src={selectedOthers[0]?.image}
                    width={100}
                    height={100}
                    alt="image"
                  />
                ) : (
                  <div className="col-span-2">
                    <Image src={others} width={100} height={100} alt="image" />
                  </div>
                )}
              </div>
              <div className="col-span-8">
                {selectedOthers.length > 0 ? (
                  <>
                    <h2 className="text-gray-800 capitalize font-bold text-xs ml-5">
                      Others
                    </h2>
                    <p className="text-gray-800 capitalize font-bold text-lg ml-5">
                      {selectedOthers[0]?.product_name}
                    </p>
                    <p className="text-gray-800 capitalize font-bold text-sm ml-5">
                      ${selectedOthers[0]?.price}
                    </p>
                  </>
                ) : (
                  <div className="col-span-2">
                    <h1 className="text-gray-800 capitalize font-bold text-lg ml-5">
                      Others
                    </h1>
                  </div>
                )}
              </div>
              <div className="col-span-2">
                <Link
                  href={"/pc-build/others"}
                  className="text-gray-800 capitalize font-bold text-lg py-2 px-4 border-gray-900 border-x-2 border-y-2 rounded-md hover:text-red-500"
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
              allProductsSelected ? "bg-red-500" : "bg-gray-500"
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
