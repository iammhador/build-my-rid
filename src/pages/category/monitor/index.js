import RootLayout from "@/components/layout/root";
import Card from "@/components/ui/card";

function Monitor({ monitor }) {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h2 className="text-4xl font-semibold text-black mb-4 md:mb-0">
        Blog & Articles
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-10 justify-items-center">
        {monitor.map((x) => (
          <Card key={x._id} data={x} />
        ))}
      </div>
    </div>
  );
}

export default Monitor;

Monitor.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://build-my-rig-server.vercel.app/api/cat_monitor"
  );
  const data = await res.json();

  return { props: { monitor: data.data } };
};
