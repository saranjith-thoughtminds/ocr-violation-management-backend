import { AzureKeyCredential, DocumentAnalysisClient } from "@azure/ai-form-recognizer";

const endpoint = process.env.AZURE_DOCINTELLIGENCE_ENDPOINT;
const apiKey = process.env.AZURE_DOCINTELLIGENCE_KEY;

export default async (blobUrl) => {
  try {
    const client = new DocumentAnalysisClient(endpoint, new AzureKeyCredential(apiKey));

    const model = "prebuilt-invoice";
    const poller = await client.beginAnalyzeDocumentFromUrl(model, blobUrl);

    const {
      documents: [result],
    } = await poller.pollUntilDone();

    const data = result.fields;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
