const express = require("express");

const app = express();

const PORT = 2022;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});
// app.listen(3000);
