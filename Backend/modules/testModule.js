const mongoose = require("mongoose");

const dataSchema = mongoose.Schema(
  { name: String, price: String, id: String, imgSRC: String, desc: String },
  {
    collection: "Data",
    timestamp: true,
  }
);
const Data = mongoose.model("Data", dataSchema);
module.exports = Data;
