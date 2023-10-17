const { MongoClient } = require('mongodb');

const url = process.env.MONGODB_URI || 'mongodb://root:example@localhost:27017';
const client = new MongoClient(url);

const dbName = 'resume';
let db = null;

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected successfully to the server');
    db = client.db(dbName);
  } catch (err) {
    console.error(err.stack);
  }
}

// Export a function that returns the database connection
module.exports = async function getDatabase() {
  if (!db) {
    await connectToDatabase();
  }
  return db;
};
