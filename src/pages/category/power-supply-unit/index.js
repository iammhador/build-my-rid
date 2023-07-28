import RootLayout from "@/components/layout/root";
import SinglePowerSupply from "@/components/ui/power-supply";

function PowerSupplyUnit({ powerSupply }) {
  return (
    <div className="h-screen mx-10 my-10">
      <h1 className="text-4xl font-bold text-center text-red-500 uppercase">
        Power Supply Unit
      </h1>
      <div className="grid grid-cols-3 mt-10 justify-items-center">
        {powerSupply.map((x) => (
          <SinglePowerSupply key={x._id} data={x} />
        ))}
      </div>
    </div>
  );
}

export default PowerSupplyUnit;

PowerSupplyUnit.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/cat_powersupply");
  const data = await res.json();

  return { props: { powerSupply: data.data } };
};
