import express from "express";
import mongoose from "mongoose";
import Cors from 'cors'

import Cards from "./DbCard.js";
import { config } from "./config.js";

// app config
const app = express();
const port = process.env.PORT || 8001;
const conn = `mongodb+srv://admin:${config.password}@enagol.l49xs.mongodb.net/tinder_DB?retryWrites=true&w=majority`;

// middlewares
app.use(express.json());
app.use(Cors())

// db config
mongoose.connect(conn, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// routes
app.get("/", (req, res) => res.status(200).send("HW"));

app.post("/tinder/cards", (req, res) => {
  const card = req.body;

  Cards.create(card, (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  Cards.find((error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(data);
    }
  });
});

// listeners
app.listen(port, () => console.log(`listen: ${port}`));
