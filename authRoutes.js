const express = require("express");
const { registerUser, loginUser, getProfile } = require("./authController");
const authMiddleware = require("./authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authMiddleware, getProfile);

module.exports = router;
