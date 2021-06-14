const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(express.json());

const middleware = [];

const md = (req, res, next) => {
  console.log("New middleware");
  res.on("finish", () => {
    console.log(`res sent !`);
  });
  next();
};

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello-world" });
});

app.get("/middleware", (req, res) => {
  res.status(200).json(middleware);
});

app.post("/api/middleware", md, (req, res) => {
  middleware.push(req.body);
  res.status(422).json(req.body);
  console.log("ROute post is on");
});

app.put("/api/middleware/:id", (req, res) => {
  res.status(200).send("Middleware has been updated");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`This app is served on port ${port}`);
});
