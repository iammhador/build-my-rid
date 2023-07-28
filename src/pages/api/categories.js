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
      if (!categories) {
        res.status(404).json({
          status: "error",
          message: "Categories not found",
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "All categories found successfully",
          data: categories,
        });
      }
    }
  } finally {
  }
}
export default run;
