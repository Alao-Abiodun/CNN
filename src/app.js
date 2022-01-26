const express = require("express");
const mongoose = require("mongoose");
const newsRouter = require("./routes/news.route");

const app = express();

app.use(express.json());

const PORT = 2022;

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Abby:12345@cluster0.vw2fm.mongodb.net/CNN?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Database is connected");
  } catch (error) {
    console.log(`Database Not Connected`);
  }
};

connectDB();

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.use("/api/v1", newsRouter);

app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});
// app.listen(3000);
