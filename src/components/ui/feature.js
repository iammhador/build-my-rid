import Image from "next/image";
import PCImage from "../../assets/pc.png";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const Feature = () => {
  return (
    <div className="bg-black py-16">
      <div
        id="Features"
        className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-black"
      >
        <div className="flex flex-col md:flex-row justify-evenly items-center">
          <div className="w-full md:w-1/3 text-white mb-8 md:mb-0 md:mr-4">
            <h2 className="text-4xl font-medium mb-4">Brand new beast</h2>
            <div className="mb-10">
              <div className="flex items-center mb-2">
                <IoCheckmarkCircleOutline className="text-green-600 text-base mr-2" />
                <p className="text-gray-200 text-sm">Premium Custom PC</p>
              </div>

              <div className="flex items-center mb-2">
                <IoCheckmarkCircleOutline className="text-green-600 text-base mr-2" />
                <p className="text-gray-200 text-sm ">
                  Ready for High-Performance
                </p>
              </div>

              <div className="flex items-center mb-2">
                <IoCheckmarkCircleOutline className="text-green-600 text-base mr-2" />
                <p className="text-gray-200 text-sm ">
                  Premium Full Steel Chassis
                </p>
              </div>

              <div className="flex items-center mb-2">
                <IoCheckmarkCircleOutline className="text-green-600 text-base mr-2" />
                <p className="text-gray-200 text-sm ">Streamer Friendly</p>
              </div>
            </div>

            <div>
              <p className="text-gray-400 mb-2 text-sm">From</p>
              <p className="text-gray-400 text-sm">
                <span className="text-3xl text-white font-semibold mr-3 ">
                  $2550
                </span>{" "}
                In stock
              </p>
              <button className="bg-white text-sm font-normal text-black border border-black px-4 py-2 rounded-sm my-1">
                Continue
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/3 mb-8 md:mb-0 ">
            <Image src={PCImage} alt="PC" width={500} height={500} />
          </div>

          <div className="w-full md:w-1/3">
            <div className="text-right">
              <div className="mb-4">
                <h3 className="text-white text-xl font-medium mb-2">
                  Processor
                </h3>
                <p className="text-gray-400 text-sm font-medium">
                  Intel 10th Gen or <br /> Ryzen 3200 Processor
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-white text-xl font-medium mb-2">
                  Graphics Card
                </h3>
                <p className="text-gray-400 text-sm font-medium">
                  Up to the NVIDIA <br /> GeForce RTX 4090
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-white text-xl font-medium mb-2">Memory</h3>
                <p className="text-gray-400 text-sm font-medium">
                  32GB Ultra-fast <br /> 3800mhz Memory
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-white text-xl font-medium mb-2">Cooling</h3>
                <p className="text-gray-400 text-sm font-medium">
                  Premium Custom <br /> Water cooled CPU
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
