const { MongoClient } = require("mongodb");

const client = new MongoClient(
  "mongodb+srv://ira:ira11111@cluster0.wqcwxhh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

const startApp = async () => {
  try {
    await client.connect();
    console.log("databese connect is success");
    await client.db().createCollection("users");
    const users = client.db().collection("users");
    await users.insertOne({ name: "Ira", age: 18 });
    const user = await users.findOne({ name: "Ira" });
    console.log(user);
  } catch (e) {
    console.log(e);
  }
};

startApp();

// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://ira:ira11111@cluster0.wqcwxhh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
