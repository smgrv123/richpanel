import express from "express";
const router = express.Router();
import plansSchema from "../../schema/plansSchema";

router.get("/", async (req: any, res: any) => {
  const findUser: any | null = await plansSchema.find();
  findUser ? res.json(findUser) : res.json("Data not present");
});

export { router as getRouter };