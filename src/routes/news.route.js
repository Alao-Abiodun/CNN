const express = require("express");
const News = require("../controllers/news.controller");

const router = express.Router();

router.post("/add-news", News.addNews);

module.exports = router;
