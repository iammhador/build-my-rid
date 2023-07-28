const { MongoClient, ServerApiVersion } = require("mongodb");
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
    const othersCollection = client.db("buildmyrig").collection("cat_others");

    if (req.method === "GET") {
      const others = await othersCollection.find({}).toArray();
      if (!others) {
        res.status(404).json({
          status: "error",
          message: "Others components not found",
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "All others components found successfully",
          data: others,
        });
      }
    }
  } finally {
  }
}
export default run;
