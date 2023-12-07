const mongoose = require("mongoose");

const AttractionModel = mongoose.model("Attraction", {
  _id_Country: {
    type: String,
  },
  title: {
    type: String,
    unique: true,
  },
  desc: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  rating: {
    type: Number,
  },
  review: {
    type: String,
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  location: {
    type: String,
  },
  id_hotels: {
    type: Array,
  },
});

module.exports = AttractionModel;
