const express = require("express");
const user = require("../controllers/users.controller");

const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/add-user", user.createAnAccount);
router.post("/login", authMiddleware.authorize, user.login);

module.exports = router;
