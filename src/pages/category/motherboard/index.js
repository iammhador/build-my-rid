import RootLayout from "@/components/layout/root";
import SingleMotherboard from "@/components/ui/motherboard";

function Motherboard({ motherboard }) {
  return (
    <div className="h-screen mx-10 my-10">
      <h1 className="text-4xl font-bold text-center text-red-500 uppercase">
        All Motherboard
      </h1>
      <div className="grid grid-cols-3 mt-10 justify-items-center">
        {motherboard.map((x) => (
          <SingleMotherboard key={x._id} data={x} />
        ))}
      </div>
    </div>
  );
}

export default Motherboard;

Motherboard.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://build-my-rig-server.vercel.app/api/cat_motherboard"
  );
  const data = await res.json();

  return { props: { motherboard: data.data } };
};
