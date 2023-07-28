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
    const categoriesCollection = client
      .db("buildmyrig")
      .collection("categories");

    if (req.method === "GET") {
      const categories = await categoriesCollection.find({}).toArray();
      res.status(200).json({
        status: "success",
        message: "all categories details found successfully",
        data: categories,
      });
    }
  } finally {
  }
}
export default run;
