// import jsonToDbProccess from "../violation/violation.process.js";
import azureFileUpload from "./lib/azure.fileUpload.js";
import extractDocIntelligence from "./lib/extract.docIntelligence.js";

export default async (req, res) => {
  try {
    if (!req.file) throw new Error("file missing!");
    const { mimetype } = req.file;
    let jsonData = {};

    const fileUrl = await azureFileUpload(req.file);
    jsonData = await extractDocIntelligence(fileUrl);
    // const result = await jsonToDbProccess(jsonData, fileUrl, mimetype);

    return res.json({ data: jsonData });
  } catch (error) {
    res.statusCode = 400;
    return res.json({ message: error.message });
  }
};
