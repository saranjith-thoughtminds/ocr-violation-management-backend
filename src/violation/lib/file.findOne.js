import getDatabase from "../../../database/cosmos.connection.js";

export default async (tollId, invoiceNumber) => {
  try {
    const database = await getDatabase();
    const collection = database.collection("fileDetails");

    return await collection.findOne({ tollId, invoiceNumber });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
