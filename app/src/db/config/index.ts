import { MongoClient } from "mongodb";

const connectionString = process.env.MONGODB_CONN_STRING;

if (!connectionString) {
  throw new Error("MONGODB_CONN_STRING is not defined");
}

let client: MongoClient;


export const getMongoClient = async () => {
  if (!client) {
    client = await MongoClient.connect(connectionString);
    await client.connect();
  }

  return client;
};

const DATABASE_NAME = process.env.MONGODB_DB_NAME || "test";

export const getDb = async () => {
  const client = await getMongoClient();
  return client.db(DATABASE_NAME);

};
