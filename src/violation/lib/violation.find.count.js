import getDatabase from "../../../database/cosmos.connection.js";

export default async (condition = {}) => {
  try {
    let filter = {};
    if (condition?.isActive) filter["isActive"] = true;

    const database = await getDatabase();
    const collection = database.collection("fileDetails");

    return await collection.countDocuments(filter);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
