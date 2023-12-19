import { MongoClient } from "mongodb";

async function runScript() {
  const url = "mongodb://217.210.129.243:27017";
  const dbName = "carRace";
  const collectionName = "race";

  const dbconn = await MongoClient.connect(url, { useUnifiedTopology: true });
  const db = dbconn.db(dbName);
  const collection = db.collection(collectionName);

  try {
    // Find document
    const findResult = await collection.findOne({
      "username": "example"
    });
    console.log("Find Result:", findResult);

    // Delete document
    await collection.deleteOne({ "username": "def" });
    console.log("Document deleted successfully.");

    // Update document
    const updateResult = await collection.updateOne(
      { "name": "example" },
      {
        $set: {
          "email": "abc@ef.ef"
        }
      }
    );
    console.log("Number of documents updated:", updateResult.modifiedCount);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    dbconn.close();
  }
}

runScript();