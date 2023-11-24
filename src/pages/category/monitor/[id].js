/* eslint-disable react/no-unescaped-entities */
import RootLayout from "@/components/layout/root";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";

export default function MonitorDetails({ monitor }) {
  const {
    product_name,
    category,
    price,
    status,
    average_rating,
    individual_rating,
    image,
    description,
    key_features,
    reviews,
  } = monitor.data;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-xl my-10 mx-auto max-w-3xl p-8 rounded-md grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center mb-8 md:mb-0">
          <Image src={image} width={300} height={120} alt="Product Image" />
        </div>
        <div className="text-black">
          <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-4">
            {product_name}
          </h2>

          <p className="text-base md:text-lg lg:text-xl mb-2 capitalize">
            Category: {category}
          </p>
          <p className="text-base md:text-lg lg:text-xl mb-2 font-medium">
            Price: ${price}
          </p>
          <p className="text-base md:text-lg lg:text-xl mb-2">
            Status: {status}
          </p>
          <p className="text-base md:text-lg lg:text-xl mb-2">
            Average Rating: {average_rating}{" "}
            <IoMdStar className="inline-block text-yellow-500" />
          </p>
          <p className="text-base md:text-lg lg:text-xl mb-2">
            Individual Rating: {individual_rating}
          </p>

          <p className="text-base md:text-lg lg:text-xl mb-4">
            Description: {description}
          </p>
          <p className="text-base md:text-lg lg:text-xl mb-4">
            Key Features: {key_features?.Brand} {key_features?.Model}
          </p>

          <div className="mt-4">
            {reviews.map((review, index) => (
              <div key={index} className="mb-2">
                <p className="text-base md:text-lg lg:text-xl">
                  {review.username} says: "{review.review_text}" (Rating:{" "}
                  {review.rating}{" "}
                  <IoMdStar className="inline-block text-yellow-500" />)
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

MonitorDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const response = await fetch(
    "https://build-my-rig-server.vercel.app/api/cat_monitor"
  );
  const monitor = await response.json();
  const paths = monitor?.data?.map((x) => ({
    params: { id: x._id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;

  const response = await fetch(
    `https://build-my-rig-server.vercel.app/api/cat_monitor/${id}`
  );
  const monitor = await response.json();

  return { props: { monitor } };
};
