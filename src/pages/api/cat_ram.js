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
    const ramCollection = client.db("buildmyrig").collection("cat_ram");

    if (req.method === "GET") {
      const ram = await ramCollection.find({}).toArray();
      if (!ram) {
        res.status(404).json({
          status: "error",
          message: "Ram not found",
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "All ram found successfully",
          data: ram,
        });
      }
    }
  } finally {
  }
}
export default run;
