const express = require("express");
const News = require("../controllers/news.controller");

const router = express.Router();

router.post("/add-news", News.addNews);
router.get("/fetchNews", News.fetchNews);
router.get("/fetchSingleNews/:desc", News.fetchSingleNews);
router.patch("/updateNews/:_id", News.changeNews);
router.delete("/removeNews/:id", News.removeNews);

module.exports = router;
