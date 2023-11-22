import RootLayout from "@/components/layout/root";
import Banner from "@/components/ui/banner";
import Categories from "@/components/ui/categories";
import Products from "@/components/ui/products";
import React from "react";

const Home = ({ categories, products }) => {
  return (
    <div>
      <Banner />
      <Products products={products} />
      <Categories categories={categories} />
    </div>
  );
};
export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://build-my-rig-server.vercel.app/api/categories"
  );
  const categories = await res.json();

  const response = await fetch(
    "https://build-my-rig-server.vercel.app/api/products"
  );
  const products = await response.json();

  return { props: { categories: categories.data, products: products.data } };
};
