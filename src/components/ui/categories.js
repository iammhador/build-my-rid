import React from "react";
import Category from "./category";

const Categories = ({ categories }) => {
  return (
    <div className="mx-5 md:mx-20 my-10">
      <h2 className="text-center text-red-500 font-bold text-4xl uppercase mb-5">
        Our Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center">
        {categories.map((category) => (
          <Category key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
