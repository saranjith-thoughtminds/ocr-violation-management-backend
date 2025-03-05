import getDatabase from "../../../database/cosmos.connection.js";

export default async (tollId, invoiceNumber, url, type) => {
  try {
    const database = await getDatabase();
    const collection = database.collection("fileDetails");

    return await collection.insertOne({
      tollId,
      isActive: true,
      invoiceNumber,
      url,
      type,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
