import RootLayout from "@/components/layout/root";
import Banner from "@/components/ui/banner";
import React from "react";

const Home = () => {
  return (
    <div>
      <Banner />
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
