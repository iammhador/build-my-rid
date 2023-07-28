const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.MD_USER}:${process.env.MD_PASS}@cluster0.cqqhz9d.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();
    const powerSupplyCollection = client
      .db("buildmyrig")
      .collection("cat_powersupply");

    if (req.method === "GET") {
      const idArray = req.query.powersupplyId;
      const powersupplyId = idArray[0];

      const powersupply = await powerSupplyCollection.findOne({
        _id: new ObjectId(powersupplyId),
      });

      if (!powersupply) {
        res.status(404).json({
          status: "error",
          message: "Power supply not found",
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "Single power supply details found successfully",
          data: powersupply,
        });
      }
    }
  } finally {
  }
}

export default run;
