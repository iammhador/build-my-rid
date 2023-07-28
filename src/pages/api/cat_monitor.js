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
    const monitorCollection = client.db("buildmyrig").collection("cat_monitor");

    if (req.method === "GET") {
      const monitor = await monitorCollection.find({}).toArray();
      if (!monitor) {
        res.status(404).json({
          status: "error",
          message: "Monitor not found",
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "All monitor found successfully",
          data: monitor,
        });
      }
    }
  } finally {
  }
}
export default run;
