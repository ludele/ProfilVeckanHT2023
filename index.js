import { MongoClient } from "mongodb";

async function connectToDatabase() {
  const url = "mongodb://217.210.129.243:27017";
  const dbName = "carRace";

  try {
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });
    console.log("Connected to MongoDB server");

    const db = client.db(dbName);
    
    
    const collection = db.collection("race");
    const documents = await collection.find({}).toArray();
    console.log("Documents in the 'race' collection:", documents);

    await db.collection("race").updateOne({
      "driverName": "jk", 
   }, { 
      "$set" : {
      "carName": "jk"
      }
   });

    await client.close();
    console.log("Connection closed");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToDatabase();
