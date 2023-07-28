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
    const productCollection = client.db("buildmyrig").collection("products");

    if (req.method === "GET") {
      const products = await productCollection.find({}).toArray();
      if (!products) {
        res.status(404).json({
          status: "error",
          message: "Products not found",
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "All products found successfully",
          data: products,
        });
      }
    }
  } finally {
  }
}
export default run;
