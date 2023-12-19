import Database from "./database.js";

class RaceManager {
  constructor(database) {
    this.database = database;
  }

  async getAllRaces() {
    const collection = this.database.db.collection("race");
    const documents = await collection.find({}).toArray();
    console.log("Documents in the 'race' collection:", documents);
    return documents;
  }

  async insertValue(conditionField, conditionValue, fieldToUpdate, newValue) {
    try {
      const collection = this.database.db.collection("race");
      await collection.updateOne(
        { [conditionField]: conditionValue },
        { $set: { [fieldToUpdate]: newValue } } 
      );
      console.log(`${fieldToUpdate} updated successfully for ${conditionField} ${conditionValue}`);
    } catch (error) {
      console.error(`Error updating ${fieldToUpdate} for ${conditionField} ${conditionValue}:`, error);
      throw error;
    }
  }

  async addRound(conditionField, conditionValue, roundNumber, roundData) {
    try {
      const collection = this.database.db.collection("race");
      await collection.updateOne(
        { [conditionField]: conditionValue },
        { $push: { [`roundInfor.${roundNumber}`]: roundData } }
      );
      console.log(`Round ${roundNumber} added successfully for ${conditionField} ${conditionValue}`);
    } catch (error) {
      console.error(`Error adding round ${roundNumber} for ${conditionField} ${conditionValue}:`, error);
      throw error;
    }
  }
}

export default RaceManager;