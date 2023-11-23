import RootLayout from "@/components/layout/root";
import Banner from "@/components/ui/banner";
import Blog from "@/components/ui/blog";
import Categories from "@/components/ui/categories";
import FAQ from "@/components/ui/faq";
import Feature from "@/components/ui/feature";
import NeedHelp from "@/components/ui/help";

const Home = ({ categories }) => {
  return (
    <div>
      <Banner />
      <Feature />
      <Categories categories={categories} />
      <NeedHelp />
      <FAQ />
      <Blog />
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
