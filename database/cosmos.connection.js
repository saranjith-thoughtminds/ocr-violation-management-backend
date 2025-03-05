import { MongoClient } from "mongodb";

const uri = process.env.AZURE_COSMOS_DB_ENDPOINT;
const database = process.env.AZURE_COSMOS_DB_DATABASE;

let client;

export default async () => {
  if (!client) {
    client = new MongoClient(uri);
    try {
      await client.connect();
      console.log("Connected to Azure Cosmos DB (MongoDB API)");
    } catch (error) {
      console.error("Error connecting to Cosmos DB:", error);
      throw error;
    }
  }
  return client.db(database);
};
