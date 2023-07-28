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
    const productCollection = client.db("buildmyrig").collection("products");

    if (req.method === "GET") {
      const idArray = req.query.productId;
      const productId = idArray[0];

      const product = await productCollection.findOne({
        _id: new ObjectId(productId),
      });

      if (!product) {
        res.status(404).json({
          status: "error",
          message: "Product not found",
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "Single product details found successfully",
          data: product,
        });
      }
    }
  } finally {
  }
}

export default run;
