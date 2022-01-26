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

// converting the schema to a model
const newsModel = mongoose.model("News", newsSchema);

// to make the mmodel accessible to other files
module.exports = newsModel;
