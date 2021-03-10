import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser"; // used by request.body
import cors from "cors";
import Router from "./Routes/web.js"; // routes

// app config
const app = express();
app.use(cors());
app.use(bodyParser.json());

// middlewares

// db config
const conn = MONGO_DB_CONNECTION;

// connect to mongodb
mongoose.connect(conn, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// routes
app.use("/", Router);

// listener
app.listen(3001);
