import { MongoClient } from "mongodb";
import os from "os";

async function getLocalIpAddress() {
  const ifaces = os.networkInterfaces();
  let localIpAddress = "";

  Object.keys(ifaces).forEach((ifname) => {
    ifaces[ifname].forEach((iface) => {
      if (iface.family === "IPv4" && !iface.internal) {
        localIpAddress = iface.address;
      }
    });
  });

  return localIpAddress;
}

async function updatePiIpInDatabase(url, dbName, piIp) {
  try {
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });
    const db = client.db(dbName);

    await db.collection("ip").updateOne(
      {},
      { $set: { "pi-ip": piIp } }
    );

    console.log("Pi IP address updated in the database.");
    await client.close();
  } catch (error) {
    console.error("Error updating Pi IP address in the database:", error);
  }
}

async function updatePiIp(url, dbName) {
  try {
    const localIpAddress = await getLocalIpAddress();

    await updatePiIpInDatabase(url, dbName, localIpAddress);
  } catch (error) {
    console.error("Error updating Pi IP:", error);
  }
}

if (require.main === module) {
  const url = "mongodb://lud:Aa8(=Y3Jzd!*_!n@hypermath.org:27017";
  const dbName = "ip";

  updatePiIp(url, dbName);
}

export default updatePiIp;
