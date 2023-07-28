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
    const processorCollection = client
      .db("buildmyrig")
      .collection("cat_processor");

    if (req.method === "GET") {
      const processor = await processorCollection.find({}).toArray();
      res.status(200).json({
        status: "success",
        message: "all processor details found successfully",
        data: processor,
      });
    }
  } finally {
  }
}
export default run;
