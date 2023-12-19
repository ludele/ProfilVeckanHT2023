const { MongoClient } = require('mongodb');
const assert = require('assert');

const url = 'mongodb://217.210.129.243:27017/carRace';
const dbName = '';

const client = new MongoClient(url, { useUnifiedTopology: true });

client.connect(function(err) {
  assert.strictEqual(null, err);
  console.log('Connected to MongoDB server');

  const db = client.db(dbName);
  const collection = db.collection('your_collection_name');

  // const lightIntensity = Math.random() * 100;

//   const sensorData = {
//     timestamp: new Date(),
//     lightIntensity: lightIntensity,
//     location: 'your_sensor_location'
//   };

  collection.insertOne(sensorData, function(err, result) {
    assert.strictEqual(err, null);
    
    if (result.insertedCount === 1) {
      console.log('Data inserted successfully:', result.insertedId);
    } else {
      console.log('Failed to insert data.');
    }

    client.close();
  });
});