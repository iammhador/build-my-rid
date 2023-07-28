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
    const othersCollection = client.db("buildmyrig").collection("cat_others");

    if (req.method === "GET") {
      const idArray = req.query.othersId;
      const othersId = idArray[0];

      const other = await othersCollection.findOne({
        _id: new ObjectId(othersId),
      });

      if (!other) {
        res.status(404).json({
          status: "error",
          message: "Other not found",
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "Single other details found successfully",
          data: other,
        });
      }
    }
  } finally {
  }
}

export default run;
