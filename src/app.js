const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const newsRouter = require("./routes/news.route");
const userRouter = require("./routes/user.route");
const productRouter = require("./routes/product.route");

const app = express();

app.use(express.json());

const port = process.env.PORT;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
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

app.use("/api/v1", userRouter);

app.use("/api/v1", productRouter);

app.listen(port, () => {
  console.log(`App is listening on PORT ${port}`);
});
// app.listen(3000);
