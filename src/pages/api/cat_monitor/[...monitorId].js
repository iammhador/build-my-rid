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
    const monitorCollection = client.db("buildmyrig").collection("cat_monitor");

    if (req.method === "GET") {
      const idArray = req.query.monitorId;
      const monitorId = idArray[0];

      const monitor = await monitorCollection.findOne({
        _id: new ObjectId(monitorId),
      });

      if (!monitor) {
        res.status(404).json({
          status: "error",
          message: "Monitor not found",
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "Single monitor details found successfully",
          data: monitor,
        });
      }
    }
  } finally {
  }
}

export default run;
