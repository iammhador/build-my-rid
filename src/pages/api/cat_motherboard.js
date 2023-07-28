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
    const motherboardCollection = client
      .db("buildmyrig")
      .collection("cat_motherboard");

    if (req.method === "GET") {
      const motherboard = await motherboardCollection.find({}).toArray();
      if (!motherboard) {
        res.status(404).json({
          status: "error",
          message: "Motherboard not found",
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "All motherboard found successfully",
          data: motherboard,
        });
      }
    }
  } finally {
  }
}
export default run;
