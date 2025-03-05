import Responder from "../shared/responder.js";
import findViolationCount from "./lib/violation.find.count.js";

export default async (req, res) => {
  const responder = new Responder(res);
  try {
    const totalViolationCount = await findViolationCount();
    const activeViolationCount = await findViolationCount({ isActive: true });

    return responder.sucess("Fetched successfully", { totalViolationCount, activeViolationCount });
  } catch (error) {
    return responder.sucess("Error", error.message);
  }
};
