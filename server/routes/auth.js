const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const contactsFilePath = path.join(__dirname, "../contacts.json");

router.post("/register", (req, res) => {
  const { email, password } = req.body;

  fs.readFile(contactsFilePath, (error, data) => {
    if (error) {
      console.error("Error reading contacts file", error);
      return res.status(500).send("Server error");
    }

    const contacts = JSON.parse(data.toString() || "[]");
    contacts.push({ email, password });

    fs.writeFile(
      contactsFilePath,
      JSON.stringify(contacts, null, 2),
      (error) => {
        if (error) {
          console.error("Error writing to contacts file:", error);
          return res.status(500).send("Server error");
        }
        res.send("Contact added successfully");
      }
    );
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  fs.readFile(contactsFilePath, (error, data) => {
    if (error) {
      console.error("Error reading contacts file", error);
      return res.status(500).send("Server error");
    }

    const contacts = JSON.parse(data.toString() || "[]");
    const user = contacts.find((contact) => contact.email === email);

    if (user && user.password === password) {
      res.send("Login successful");
    } else {
      res.status(401).send("Invalid credentials");
    }
  });
});

module.exports = router;
