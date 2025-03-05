import findViolationCount from "./lib/violation.find.count.js";

export default async (req, res) => {
  try {
    const totalViolationCount = await findViolationCount();
    const activeViolationCount = await findViolationCount({ isActive: true });

    return res.json({ data: { totalViolationCount, activeViolationCount } });
  } catch (error) {
    res.statusCode = 400;
    return res.json({ message: error.message });
  }
};
