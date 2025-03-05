import { Router } from "express";
import dashboard from "./dashboard.js";
const violationRouter = Router();

violationRouter.get("/dashboard", dashboard);

export default violationRouter;
