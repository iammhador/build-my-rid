import React from "react";
import Category from "./category";

const Categories = ({ categories }) => {
  return (
    <div className="mx-20 my-10">
      <h2 className="text-center text-gray-900 font-bold text-4xl uppercase mb-5">
        Our Categories
      </h2>
      <div className="grid grid-cols-3 justify-items-center">
        {categories.map((category) => (
          <Category key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
