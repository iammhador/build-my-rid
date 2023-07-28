import ShowProduct from "./showProduct";

export default function Products({ products }) {
  return (
    <div className="mx-20 my-10">
      <h2 className="text-center text-red-500 font-bold text-4xl uppercase mb-5">
        Our Products
      </h2>
      <div className="grid grid-cols-3 justify-items-center">
        {products.map((x) => (
          <ShowProduct key={x._id} data={x} />
        ))}
      </div>
    </div>
  );
}
