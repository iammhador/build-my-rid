import RootLayout from "@/components/layout/root";
import Image from "next/image";

export default function ProductDetails({ product }) {
  const {
    product_name,
    category,
    price,
    status,
    rating,
    product_image,
    description,
    key_features,
    average_rating,
    reviews,
  } = product.data;
  return (
    <div className="h-screen">
      <div className="card lg:card-side bg-white hover:bg-gray-50 shadow-xl my-20 w-5/6 mx-auto py-10 px-10">
        <figure>
          <Image src={product_image} width={150} height={80} alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-red-500">{product_name} </h2>

          <p className=" text-gray-600 capitalize">Category : {category}</p>
          <p className=" text-gray-600">Price : {price}</p>
          <p className=" text-gray-600">Status : {status}</p>
          <p className=" text-gray-600">Rating : {rating}</p>
          <p className=" text-gray-600">Average Rating : {average_rating}</p>
          <p className=" text-gray-600">Description : {description}</p>
          <p className=" text-gray-600">
            Key Features : {key_features.Brand} {key_features.Model}
          </p>
          <p className=" text-gray-600">
            {reviews[0]?.user} : {reviews[0]?.comment} ( ratting:{" "}
            {reviews[0]?.rating} )
          </p>
          <p className=" text-gray-600">
            {reviews[1]?.user} : {reviews[1]?.comment} ( ratting:{" "}
            {reviews[1]?.rating} )
          </p>
          <p className=" text-gray-600">
            {reviews[2]?.user} : {reviews[2]?.comment} ( ratting:{" "}
            {reviews[2]?.rating} )
          </p>
        </div>
      </div>
    </div>
  );
}

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const response = await fetch("http://localhost:3000/api/products");
  const products = await response.json();

  const paths = products.data.map((product) => ({
    params: { id: product._id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;

  const response = await fetch(`http://localhost:3000/api/products/${id}`);
  const product = await response.json();

  return { props: { product } };
};
