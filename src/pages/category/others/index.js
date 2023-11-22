import RootLayout from "@/components/layout/root";
import SingleOthers from "@/components/ui/others";

function Others({ others }) {
  return (
    <div className="h-screen mx-10 my-10">
      <h1 className="text-4xl font-bold text-center text-red-500 uppercase">
        Others Products
      </h1>
      <div className="grid grid-cols-3 mt-10 justify-items-center">
        {others.map((x) => (
          <SingleOthers key={x._id} data={x} />
        ))}
      </div>
    </div>
  );
}

export default Others;

Others.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://build-my-rig-server.vercel.app/api/cat_others"
  );
  const data = await res.json();

  return { props: { others: data.data } };
};
