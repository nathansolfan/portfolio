const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const userController = require("./userController.js");

router.post("/feedback", userController.feedback);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/update", userController.update);

router.get("/users", userController.users);
router.get("/user/:id", userController.userId);
router.post("/user/:userId/email", userController.changeEmail);

router.delete("/users:userId/delete", userController.deleteUser);

router.post("/bookings", userController.bookings);

module.exports = router;
