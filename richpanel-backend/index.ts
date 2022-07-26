import express from "express";
import mongoose, { ConnectOptions } from "mongoose";
import env from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

import { PostRouter } from "./src/routes/planRoutes/post";

const port = process.env.PORT || 5000;
const app = express();

env.config();
app.use(cors());
app.use(bodyParser.json());

app.listen(port);

app.use("/plans/post", PostRouter);

const DB_CONNECT: string = process.env.DB_CONNECT!;

mongoose.connect(
  DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions,
  () => {
    console.log("connected to db");
  }
);
