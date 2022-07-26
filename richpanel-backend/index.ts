import express from "express";
import mongoose, { ConnectOptions } from "mongoose";
import env from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

import { PostRouter as planPostRouter } from "./src/routes/planRoutes/post";
import { getRouter as planGetRouter } from "./src/routes/planRoutes/get";

import { PostRouter as userPostRouter } from "./src/routes/userRoutes/post";

const port = process.env.PORT || 5000;
const app = express();

env.config();
app.use(cors());
app.use(bodyParser.json());

app.listen(port);

app.use("/plans/post", planPostRouter);
app.use("/plans/get", planGetRouter);
app.use("/user/post", userPostRouter);

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
