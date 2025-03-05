import getDatabase from "../../../database/cosmos.connection.js";

export default async (name) => {
  try {
    const database = await getDatabase();
    const collection = database.collection("tollDetails");

    return await collection.findOne({ tollName: name });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
