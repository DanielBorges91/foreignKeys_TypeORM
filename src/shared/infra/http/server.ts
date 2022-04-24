import "reflect-metadata";
import "express-async-errors";

import express from "express";

import "@shared/container";
import createConnection from "@shared/infra/typeorm";

import { router } from "./routes";

createConnection();

const app = express();

app.use(express.json());

app.use(router);

app.listen(3333, () => {
  console.log("Server started!");
});
