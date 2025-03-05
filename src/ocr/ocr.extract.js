// import jsonToDbProccess from "../violation/violation.process.js";
import Responder from "../shared/responder.js";
import azureFileUpload from "./lib/azure.fileUpload.js";
import extractDocIntelligence from "./lib/extract.docIntelligence.js";

export default async (req, res) => {
  const responder = new Responder(res);
  try {
    if (!req.file) throw new Error("file missing!");
    // const { mimetype } = req.file;
    let jsonData = {};

    const fileUrl = await azureFileUpload(req.file);
    jsonData = await extractDocIntelligence(fileUrl);
    // const result = await jsonToDbProccess(jsonData, fileUrl, mimetype);

    return responder.sucess("Successfully extracted", jsonData);
  } catch (error) {
    return responder.error("Error", error.message);
  }
};
