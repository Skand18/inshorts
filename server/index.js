import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import Connection from "./database/db.js";
import DefaultData from "./default.js";
import Route from "./routes/route.js";

const app = express();
dotenv.config();

app.use(cors());
app.use("/", Route);

const username = process.env.db_username;
const password = process.env.db_password;

Connection(username, password);

app.listen(8000, () => {
  console.log("listening on 8000");
});

DefaultData();
