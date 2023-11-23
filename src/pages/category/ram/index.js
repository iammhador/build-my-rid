import RootLayout from "@/components/layout/root";
import SingleRam from "@/components/category/ram";

function Ram({ ram }) {
  return (
    <div className="h-screen mx-10 my-10">
      <h1 className="text-4xl font-bold text-center text-red-500 uppercase">
        All Ram
      </h1>
      <div className="grid grid-cols-3 mt-10 justify-items-center">
        {ram.map((x) => (
          <SingleRam key={x._id} data={x} />
        ))}
      </div>
    </div>
  );
}

export default Ram;

Ram.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("https://build-my-rig-server.vercel.app/api/cat_ram");
  const data = await res.json();

  return { props: { ram: data.data } };
};
