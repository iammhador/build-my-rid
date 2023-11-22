import RootLayout from "@/components/layout/root";
import SingleMonitor from "@/components/ui/monitor";

function Monitor({ monitor }) {
  return (
    <div className="h-screen mx-10 my-10">
      <h1 className="text-4xl font-bold text-center text-red-500 uppercase">
        All Monitor
      </h1>
      <div className="grid grid-cols-3 mt-10 justify-items-center">
        {monitor.map((x) => (
          <SingleMonitor key={x._id} data={x} />
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
