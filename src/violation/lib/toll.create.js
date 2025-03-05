import getDatabase from "../../../database/cosmos.connection.js";

export default async (data) => {
  try {
    const { tollName } = data;

    const database = await getDatabase();
    const collection = database.collection("tollDetails");

    return await collection.insertOne({ tollName, isActive: true, createdAt: new Date(), updatedAt: new Date() });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
