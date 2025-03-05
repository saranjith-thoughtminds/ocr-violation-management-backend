// import jsonToDbProccess from "../violation/violation.process.js";
import azureFileUpload from "./lib/azure.fileUpload.js";
import extractDocIntelligence from "./lib/extract.docIntelligence.js";

export default async (req, res) => {
  try {
    const { mimetype } = req.file;
    let jsonData = {};

    const fileUrl = await azureFileUpload(req.file);
    jsonData = await extractDocIntelligence(fileUrl);
    // const result = await jsonToDbProccess(jsonData, fileUrl, mimetype);

    return res.json({ data: jsonData });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
