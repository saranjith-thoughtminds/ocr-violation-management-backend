import getDatabase from "../../../database/cosmos.connection.js";
import createFileDetails from "./file.create.js";
import findFileDetails from "./file.findOne.js";
import createToll from "./toll.create.js";
import findTollDetails from "./toll.findOne.js";

export default async (jsonData, fileUrl, mimeType) => {
  try {
    const { authority_name, invoice_number } = jsonData;

    let isTollExist = await findTollDetails(authority_name);
    if (!isTollExist) isTollExist = await createToll({ tollName: authority_name });
    jsonData["fileUrl"] = fileUrl;
    jsonData["fileDetailsId"] = isTollExist.insertedId || isTollExist._id;
    jsonData["createdAt"] = new Date();
    jsonData["updatedAt"] = new Date();

    let isFileExist = await findFileDetails(isTollExist.insertedId || isTollExist._id, invoice_number);
    if (isFileExist) return jsonData;

    isFileExist = await createFileDetails(isTollExist.insertedId || isTollExist._id, invoice_number, fileUrl, mimeType);

    if (isTollExist && isFileExist) {
      const database = await getDatabase();
      const collection = database.collection("violationDetails");
      await collection.insertOne(jsonData);
      return jsonData;
    }

    return jsonData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
