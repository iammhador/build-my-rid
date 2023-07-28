import RootLayout from "@/components/layout/root";
import Banner from "@/components/ui/banner";
import Categories from "@/components/ui/categories";
import React from "react";

const Home = ({ categories }) => {
  return (
    <div>
      <Banner />
      <Categories categories={categories} />
    </div>
  );
};
export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/categories");
  const data = await res.json();

  return { props: { categories: data.data } };
};
