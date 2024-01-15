const express = require("express");
const app = express();
const port = 3000;
var cors = require("cors");
var bodyParser = require("body-parser");
const router = require("./routers/route");
require("./config/db");
app.use(cors());
//
app.use(express.json());
//
app.use("/", router);
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
