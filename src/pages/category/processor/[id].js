import RootLayout from "@/components/layout/root";
import Image from "next/image";

export default function ProcessorDetails({ processor }) {
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
  } = processor.data;
  return (
    <div className="h-screen">
      <div className="card lg:card-side bg-white hover:bg-gray-50 shadow-xl my-20 w-5/6 mx-auto py-10 px-10">
        <figure>
          <Image src={image} width={300} height={120} alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-red-500">{product_name} </h2>

          <p className=" text-gray-600 capitalize">Category : {category}</p>
          <p className=" text-gray-600">Price : {price}</p>
          <p className=" text-gray-600">Status : {status}</p>
          <p className=" text-gray-600">Average Rating : {average_rating}</p>
          <p className=" text-gray-600">
            Individual Rating : {individual_rating}
          </p>
          <p className=" text-gray-600">Description : {description}</p>
          <p className=" text-gray-600">
            Key Features : {key_features.Brand} {key_features.Model}
          </p>
          <p className=" text-gray-600">
            {reviews[0]?.username} : {reviews[0]?.review_text} ( ratting:{" "}
            {reviews[0]?.rating} )
          </p>
          <p className=" text-gray-600">
            {reviews[1]?.username} : {reviews[1]?.review_text} ( ratting:{" "}
            {reviews[1]?.rating} )
          </p>
        </div>
      </div>
    </div>
  );
}

ProcessorDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const response = await fetch("http://localhost:3000/api/cat_processor");
  const processor = await response.json();

  const paths = processor.data.map((x) => ({
    params: { id: x._id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;

  const response = await fetch(`http://localhost:3000/api/cat_processor/${id}`);
  const processor = await response.json();

  return { props: { processor } };
};
