import RootLayout from "@/components/layout/root";
import SingleProcessor from "@/components/ui/processor";

function Processor({ processor }) {
  return (
    <div className="h-screen mx-10 my-10">
      <h1 className="text-4xl font-bold text-center text-red-500 uppercase">
        All Processor
      </h1>
      <div className="grid grid-cols-3 mt-10 justify-items-center">
        {processor.map((x) => (
          <SingleProcessor key={x._id} data={x} />
        ))}
      </div>
    </div>
  );
}

export default Processor;

Processor.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://build-my-rig-server.vercel.app/api/cat_processor"
  );
  const data = await res.json();

  return { props: { processor: data.data } };
};
