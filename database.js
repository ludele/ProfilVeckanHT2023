import { MongoClient } from "mongodb";

class Database {
  constructor(url, dbName) {
    this.url = url;
    this.dbName = dbName;
  }

  async connect() {
    try {
      this.client = await MongoClient.connect(this.url, { useUnifiedTopology: true });
      console.log("Connected to MongoDB server");
      this.db = this.client.db(this.dbName);
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      throw error;
    }
  }

  async disconnect() {
    try {
      await this.client.close();
      console.log("Connection closed");
    } catch (error) {
      console.error("Error disconnecting from MongoDB:", error);
      throw error;
    }
  }
}

export default Database;