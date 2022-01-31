const express = require("express");
const user = require("../controllers/users.controller");

const router = express.Router();

router.post("/add-user", user.createAnAccount);
router.post("/login", user.login);

module.exports = router;
