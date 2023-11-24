/* eslint-disable react/no-unescaped-entities */
import { IoMdStar } from "react-icons/io";
import RootLayout from "@/components/layout/root";
import Image from "next/image";

export default function OthersDetails({ others }) {
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
  } = others.data;
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-xl my-10 mx-auto max-w-3xl p-8 rounded-md">
        <div className="flex justify-center items-center mb-8">
          <Image src={image} width={300} height={120} alt="Product Image" />
        </div>
        <div className="text-black">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center">
            {product_name}
          </h2>

          <p className="text-base md:text-lg lg:text-xl mb-2 capitalize text-center">
            Category: {category}
          </p>
          <p className="text-base md:text-lg lg:text-xl mb-2 font-medium text-center">
            Price: ${price}
          </p>
          <p className="text-base md:text-lg lg:text-xl mb-2 text-center">
            Status: {status}
          </p>
          <p className="text-base md:text-lg lg:text-xl mb-2 text-center">
            Average Rating: {average_rating}{" "}
            <IoMdStar className="inline-block text-yellow-500" />
          </p>
          <p className="text-base md:text-lg lg:text-xl mb-2 text-center">
            Individual Rating: {individual_rating}
          </p>

          <p className="text-base md:text-lg lg:text-xl mb-4 text-center">
            Description: {description}
          </p>
          <p className="text-base md:text-lg lg:text-xl mb-4 text-center">
            Key Features: {key_features?.Brand} {key_features?.Model}
          </p>

          <div className="mt-4">
            {reviews.map((review, index) => (
              <div key={index} className="mb-2 text-center">
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

OthersDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const response = await fetch(
    "https://build-my-rig-server.vercel.app/api/cat_others"
  );
  const others = await response.json();

  const paths = others?.data?.map((x) => ({
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
    `https://build-my-rig-server.vercel.app/api/cat_others/${id}`
  );
  const others = await response.json();

  return { props: { others } };
};
