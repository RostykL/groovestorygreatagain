const mongoose = require("mongoose");
const room = new mongoose.Schema({
  quantity: Number,
  roomName: String,
  roomDescription: String,
  users: Array,
  messages: Array
});

module.exports = mongoose.model("Room", room);