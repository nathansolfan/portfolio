const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const userController = require("./userController.js");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/update", userController.update);
router.post("/feedback", userController.feedback);
router.get("/user/:id", userController.userId);
router.get("/users", userController.users);

module.exports = router;
