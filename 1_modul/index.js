const express = require("express");
const app = express();

app.get("/itmp", (req, res) => {
  res.send("ITMP");
});

app.get("/nodejs", (req, res) => {
  res.send("Node.js");
});

app.get("/express", (req, res) => {
  res.send("Express");
});

app.listen(3000, () => {
  console.log("Fut a 3000-es porton");
});