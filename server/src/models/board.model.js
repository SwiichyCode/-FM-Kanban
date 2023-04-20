const mongoose = require("mongoose");

const Board = mongoose.model(
  "Board",
  new mongoose.Schema({
    name: String,
    id: String,
    // columns: [],
    ownerID: String,
  })
);

module.exports = Board;
