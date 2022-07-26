import express from "express";
import plansSchema from "../../schema/plansSchema";

const router = express.Router();

router.post("/", async (req, res) => {
  const plan = new plansSchema(req.body);
  try {
    const saved: any | undefined = await plan.save();
    res.status(200).json({ message: saved });
  } catch (error: any) {
    res.send('error');
  }
});

export { router as PostRouter };
