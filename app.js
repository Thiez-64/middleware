const express = require("express");
const dotenv = require("dotenv");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello-world" });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`This app is served on port ${port}`);
});
