import { Router } from "express";
import multer, { memoryStorage } from "multer";
import ocrExtract from "./ocr.extract.js";
const ocrRouter = Router();
const upload = multer({ storage: memoryStorage() });

ocrRouter.post("/", upload.single("file"), ocrExtract);

export default ocrRouter;
