const mongoose = require("mongoose");

const markerSchema = new mongoose.Schema({
  place: {
    type: String,
    required: true,
    min: 3,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  Latitude: {
    type: Number,
    required: true,
    min: -90,
    max: 90,
  },
  Longitude: {
    type: Number,
    required: true,
    min: -180,
    max: 180,
  },
  creationDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Marker", markerSchema);
