const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please fill the field"],
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const newsModel = mongoose.model("News", newsSchema);

module.exports = newsModel;
