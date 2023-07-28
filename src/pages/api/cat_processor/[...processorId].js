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
    const processorCollection = client
      .db("buildmyrig")
      .collection("cat_processor");

    if (req.method === "GET") {
      const idArray = req.query.processorId;
      const processorId = idArray[0];

      const processor = await processorCollection.findOne({
        _id: new ObjectId(processorId),
      });

      if (!processor) {
        res.status(404).json({
          status: "error",
          message: "Processor not found",
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "Single processor details found successfully",
          data: processor,
        });
      }
    }
  } finally {
  }
}

export default run;
