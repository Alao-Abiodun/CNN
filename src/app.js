const express = require("express");

const app = express();

const PORT = 2022;

app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});
