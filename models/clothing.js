const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const clothingSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Add new Item",
  },
  description: {
    trim: String,
  },
  price: {
    type: Number,
    required: "Enter a clothing price",
  },
  imageURL: {
    type: String,
    trim: true,
    required: "Enter clothing image",
  },
  category: {
    type: String,
    trim: true,
    required: "Enter a clothing category",
  },
});

const Clothing = mongoose.model("Clothing", clothingSchema);

module.exports = Clothing;
