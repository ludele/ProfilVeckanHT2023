import Database from "./database.js";
import RaceManager from "./racemanager.js";

const url = "";
const dbName = "carRace";

const database = new Database(url, dbName);
const raceManager = new RaceManager(database);

async function start() {
  try {
    await database.connect();

    const races = await raceManager.getAllRaces();

    await raceManager.insertValue("driverName", "PeilinXie", "driverName", "Peilin Xie");

    await raceManager.getAllRaces();

  } catch (error) {
    console.error("Framework error:", error);
  } finally {
    await database.disconnect();
  }
}

start();
